# Google Sheets API Setup

To enable saving registration data to a Google Sheet, follow these steps:

1.  **Create a Google Cloud Project**:

    - Go to the [Google Cloud Console](https://console.cloud.google.com/).
    - Create a new project.

2.  **Enable Google Sheets API**:

    - In the dashboard, search for "Google Sheets API" and enable it.

3.  **Create a Service Account**:

    - Go to "IAM & Admin" > "Service Accounts".
    - Click "Create Service Account".
    - Give it a name (e.g., "guapatlu-sheets").
    - Click "Create and Continue", then "Done".

4.  **Generate Keys**:

    - Click on the newly created service account email.
    - Go to the "Keys" tab.
    - Click "Add Key" > "Create new key".
    - Select "JSON" and create. This will download a JSON file.

5.  **Set up the Google Sheet**:

    - Create a new Google Sheet.
    - Share the sheet with the **Service Account Email** (found in the JSON file or console) as an **Editor**.
    - Copy the Sheet ID from the URL (e.g., `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`).

6.  **Configure Environment Variables**:
    - Create a file named `.env.local` in the root of your project.
    - Add the following variables using the data from your JSON key file:

```env
GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account-email@..."
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID="your-sheet-id"
```

**Note**: For `GOOGLE_SHEETS_PRIVATE_KEY`, ensure you copy the entire key string including the `\n` characters from the JSON file.
