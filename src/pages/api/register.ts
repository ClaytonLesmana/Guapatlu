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

  // Validate Indonesian phone number format
  const validateIndonesianPhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/[\s-]/g, "");
    const pattern = /^(\+62|62|0)8[0-9]{8,11}$/;
    return pattern.test(cleanPhone);
  };

  // Normalize Indonesian phone number to standard format (08xxxxxxxxx)
  // Converts +6287885743604, 6287885743604, and 087885743604 all to 087885743604
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

  if (!validateIndonesianPhone(phone)) {
    return res.status(400).json({
      message:
        "Format nomor telepon tidak valid. Gunakan format Indonesia (contoh: 08123456789)",
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

    // Check for duplicate phone number using normalized format
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!B:B", // Phone column
    });

    const phoneNumbers = existingData.data.values || [];
    const normalizedInputPhone = normalizeIndonesianPhone(phone);

    const phoneExists = phoneNumbers.some((row) => {
      if (!row[0]) return false;
      const existingPhone = row[0].toString().replace(/^'/, "").trim();
      const normalizedExistingPhone = normalizeIndonesianPhone(existingPhone);
      return normalizedExistingPhone === normalizedInputPhone;
    });

    if (phoneExists) {
      return res.status(409).json({
        message: "Nomor telepon sudah terdaftar. Silakan gunakan nomor lain.",
      });
    }

    // Append to sheet - Give 10 welcome points
    // Prefix phone with single quote to preserve leading zeros
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        // Columns: Name, Phone (as text with '), DOB, Total, Points (10 welcome bonus)
        values: [[fullName, `'${phone}`, dob, 0, 10]],
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
