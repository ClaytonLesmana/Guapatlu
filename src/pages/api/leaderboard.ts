import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type LeaderboardUser = {
  rank: number;
  name: string;
  points: number;
  badge: string;
  badgeColor: string;
};

type Data = {
  message?: string;
  error?: string;
  data?: LeaderboardUser[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
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

    // Skip header row and process data
    const users = rows
      .slice(1) // Skip header
      .filter((row) => row[0] && row[4]) // Must have name and points
      .map((row) => ({
        name: row[0] || "",
        points: parseInt(row[4]) || 0,
      }))
      .sort((a, b) => b.points - a.points); // Sort by points descending

    // Assign ranks and badges
    const leaderboard: LeaderboardUser[] = users.map((user, index) => {
      const rank = index + 1;
      let badge = "Regular Customer";
      let badgeColor = "#5C6BC0";

      // Assign badges based on rank or points
      if (rank === 1) {
        badge = "Sultan Bakmi";
        badgeColor = "#F4B400";
      } else if (rank === 2) {
        badge = "Bakmi Master";
        badgeColor = "#C0C0C0";
      } else if (rank === 3) {
        badge = "Level 5 Pedas";
        badgeColor = "#CD7F32";
      } else if (user.points >= 100) {
        badge = "Bakmi Master";
        badgeColor = "#2E7D32";
      } else if (user.points >= 75) {
        badge = "Level 4 Pedas";
        badgeColor = "#9C27B0";
      } else if (user.points >= 50) {
        badge = "Level 3 Pedas";
        badgeColor = "#FF5722";
      } else if (user.points >= 25) {
        badge = "Bakmi Lover";
        badgeColor = "#1976D2";
      }

      return {
        rank,
        name: user.name,
        points: user.points,
        badge,
        badgeColor,
      };
    });

    return res.status(200).json({ data: leaderboard });
  } catch (error: any) {
    console.error("Google Sheets API Error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
