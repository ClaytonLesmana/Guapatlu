import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  authenticated?: boolean;
};

/**
 * Optional Admin Password Verification
 *
 * Set environment variable: ADMIN_PASSWORD=your-secure-password
 *
 * Note: This is basic protection. For production:
 * - Use proper authentication (NextAuth.js, Auth0, etc.)
 * - Implement session management
 * - Use secure password hashing
 * - Add rate limiting
 * - Add CSRF protection
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { pin } = req.body;

  if (!pin) {
    return res.status(400).json({ message: "PIN is required" });
  }

  // Get admin PIN from environment variables
  const adminPin = process.env.ADMIN_PIN;

  if (!adminPin) {
    console.warn("ADMIN_PIN not set. Admin login requires a PIN.");
    return res.status(503).json({
      message: "Admin authentication not configured",
    });
  }

  // Simple PIN check (not secure for production)
  if (pin === adminPin) {
    // Set a simple HTTP-only cookie to indicate authenticated staff session
    const maxAgeSeconds = 60 * 60 * 8; // 8 hours
    const isProd = process.env.NODE_ENV === "production";

    res.setHeader("Set-Cookie", [
      [
        "guapatlu_staff_auth=1",
        `Max-Age=${maxAgeSeconds}`,
        "Path=/",
        "HttpOnly",
        "SameSite=Lax",
        isProd ? "Secure" : "",
      ]
        .filter(Boolean)
        .join("; "),
    ]);

    return res.status(200).json({
      message: "Authentication successful",
      authenticated: true,
    });
  }

  // Add a small delay to prevent brute force attacks
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return res.status(401).json({
    message: "Invalid PIN",
    authenticated: false,
  });
}
