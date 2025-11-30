import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type Data = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { fullName, email, phone, dob } = req.body;

  if (!fullName || !email || !phone || !dob) {
    return res.status(400).json({ message: "Missing required fields" });
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

    // Check for duplicate phone number
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!B:B", // Phone column
    });

    const phoneNumbers = existingData.data.values || [];
    const phoneExists = phoneNumbers.some(
      (row) => row[0] && row[0].toString().trim() === phone.trim()
    );

    if (phoneExists) {
      return res.status(409).json({
        message:
          "This phone number is already registered. Please use a different number or contact support.",
      });
    }

    // Append to sheet - Give 10 welcome points
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        // Columns: Name, Phone, DOB, Total, Points (10 welcome bonus)
        values: [[fullName, phone, dob, 0, 10]],
      },
    });

    return res.status(200).json({ message: "Registration saved successfully" });
  } catch (error: any) {
    console.error("Google Sheets API Error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
