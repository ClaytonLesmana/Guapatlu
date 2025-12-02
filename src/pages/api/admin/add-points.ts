import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type Data = {
  message?: string;
  error?: string;
  pointsAdded?: number;
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

  const { phone, spending } = req.body;

  if (!phone) {
    return res.status(400).json({ message: "Phone number is required" });
  }

  if (!spending || spending <= 0) {
    return res.status(400).json({ message: "Valid spending amount is required" });
  }

  try {
    // Calculate points: 1 point per 10,000 IDR
    const pointsToAdd = Math.floor(spending / 10000);

    if (pointsToAdd === 0) {
      return res.status(400).json({ 
        message: "Spending amount too small. Minimum 10,000 IDR for 1 point" 
      });
    }

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

    // Get current values
    const currentTotal = parseInt(userRow[3]) || 0;
    const currentPoints = parseInt(userRow[4]) || 0;

    // Calculate new values
    const newTotal = currentTotal + spending;
    const newPoints = currentPoints + pointsToAdd;

    // Update the sheet
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!D${userRowIndex}:E${userRowIndex}`, // Total and Points columns
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[newTotal, newPoints]],
      },
    });

    // Strip leading quote from phone if present
    const phoneValue = userRow[1]
      ? userRow[1].toString().replace(/^'/, "")
      : "";

    return res.status(200).json({
      message: "Points added successfully",
      pointsAdded: pointsToAdd,
      userData: {
        name: userRow[0] || "",
        phone: phoneValue,
        dob: userRow[2] || "",
        total: newTotal,
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

