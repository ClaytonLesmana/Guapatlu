import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type Data = {
  message?: string;
  error?: string;
  data?: {
    name: string;
    phone: string;
    dob: string;
    total: number;
    points: number;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ message: "Phone number is required" });
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

    // Find the user by phone number (skip header row if exists)
    const userRow = rows.find(
      (row, index) =>
        index > 0 && // Skip header row
        row[1] &&
        row[1].toString().trim() === phone.trim()
    );

    if (!userRow) {
      return res.status(404).json({
        message: "Phone number not found. Please register first.",
      });
    }

    // Return user data
    return res.status(200).json({
      data: {
        name: userRow[0] || "",
        phone: userRow[1] || "",
        dob: userRow[2] || "",
        total: parseInt(userRow[3]) || 0,
        points: parseInt(userRow[4]) || 0,
      },
    });
  } catch (error: any) {
    console.error("Google Sheets API Error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
