import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type Data = {
  message?: string;
  error?: string;
  userData?: {
    name: string;
    phone: string;
    dob: string;
    total: number;
    points: number;
  };
};

// Normalize Indonesian phone number to standard format (08xxxxxxxxx)
const normalizeIndonesianPhone = (phone: string): string => {
  const cleanPhone = phone.replace(/[\s-]/g, "").trim();

  // Remove +62 or 62 prefix and add 0
  if (cleanPhone.startsWith("+62")) {
    return "0" + cleanPhone.substring(3);
  } else if (cleanPhone.startsWith("62")) {
    return "0" + cleanPhone.substring(2);
  }

  // Already starts with 0
  return cleanPhone;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { phone, rewardPoints } = req.body;

  if (!phone) {
    return res.status(400).json({ message: "Phone number is required" });
  }

  if (!rewardPoints || rewardPoints <= 0) {
    return res.status(400).json({ message: "Valid reward points amount is required" });
  }

  // Validate reward tier
  const validTiers = [15, 30, 60, 100];
  if (!validTiers.includes(rewardPoints)) {
    return res.status(400).json({ 
      message: "Invalid reward tier. Must be 15, 30, 60, or 100 points" 
    });
  }

  try {
    // Prepare auth
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

    if (!privateKey || !process.env.GOOGLE_SHEETS_CLIENT_EMAIL) {
      throw new Error(
        "Missing Google Sheets credentials in environment variables"
      );
    }

    // Handle both escaped and unescaped newlines
    const formattedKey = privateKey.includes("\\n")
      ? privateKey.replace(/\\n/g, "\n")
      : privateKey;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: formattedKey,
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error(
        "GOOGLE_SHEET_ID is not defined in environment variables"
      );
    }

    // Get all data from the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:E", // Name, Phone, DOB, Total, Points
    });

    const rows = response.data.values || [];

    // Find the user by phone number using normalized format
    const normalizedInputPhone = normalizeIndonesianPhone(phone);
    let userRowIndex = -1;
    let userRow: any[] | null = null;

    for (let i = 1; i < rows.length; i++) {
      // Skip header row (index 0)
      if (!rows[i][1]) continue;
      const existingPhone = rows[i][1].toString().replace(/^'/, "").trim();
      const normalizedExistingPhone = normalizeIndonesianPhone(existingPhone);
      
      if (normalizedExistingPhone === normalizedInputPhone) {
        userRowIndex = i + 1; // +1 because sheet rows are 1-indexed
        userRow = rows[i];
        break;
      }
    }

    if (!userRow) {
      return res.status(404).json({
        message: "Phone number not found. Please register first.",
      });
    }

    // Get current points
    const currentPoints = parseInt(userRow[4]) || 0;

    // Check if user has enough points
    if (currentPoints < rewardPoints) {
      return res.status(400).json({
        message: `Insufficient points. User has ${currentPoints} points but needs ${rewardPoints} points for this reward.`,
      });
    }

    // Calculate new points (deduct the reward points)
    const newPoints = currentPoints - rewardPoints;

    // Update the sheet (only update points column)
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!E${userRowIndex}`, // Points column only
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[newPoints]],
      },
    });

    // Strip leading quote from phone if present
    const phoneValue = userRow[1]
      ? userRow[1].toString().replace(/^'/, "")
      : "";

    return res.status(200).json({
      message: "Reward redeemed successfully",
      userData: {
        name: userRow[0] || "",
        phone: phoneValue,
        dob: userRow[2] || "",
        total: parseInt(userRow[3]) || 0,
        points: newPoints,
      },
    });
  } catch (error: any) {
    console.error("Google Sheets API Error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

