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

  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  // Get admin password from environment variable
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.warn(
      "ADMIN_PASSWORD not set in environment variables. Admin login disabled."
    );
    return res.status(503).json({ 
      message: "Admin authentication not configured" 
    });
  }

  // Simple password check (not secure for production)
  if (password === adminPassword) {
    // In production, you would:
    // 1. Hash and compare passwords
    // 2. Create a secure session
    // 3. Set an HTTP-only cookie
    // 4. Return a JWT token
    return res.status(200).json({ 
      message: "Authentication successful",
      authenticated: true 
    });
  }

  // Add a small delay to prevent brute force attacks
  await new Promise(resolve => setTimeout(resolve, 1000));

  return res.status(401).json({ 
    message: "Invalid password",
    authenticated: false 
  });
}

