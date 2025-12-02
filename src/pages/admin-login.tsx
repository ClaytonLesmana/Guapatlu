import React, { useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import LockIcon from "@mui/icons-material/Lock";
import toast from "react-hot-toast";

/**
 * Optional Admin Login Page
 * 
 * To enable password protection:
 * 1. Set environment variable: ADMIN_PASSWORD=your-secure-password
 * 2. Users access /admin-login first, then get redirected to /admin
 * 
 * Note: This is basic protection. For production, implement proper authentication.
 */

const AdminLoginPage = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password.trim()) {
      toast.error("Please enter a password");
      return;
    }

    setLoading(true);

    try {
      // In a real implementation, this would verify against a secure backend
      // For now, this is a simple client-side check
      // To use this properly, create an API endpoint to verify password
      
      const response = await fetch("/api/admin/verify-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        // Set a session cookie or token here in production
        sessionStorage.setItem("admin_authenticated", "true");
        toast.success("Login successful!");
        router.push("/admin");
      } else {
        toast.error("Invalid password");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "#d11919",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <LockIcon sx={{ fontSize: 40, color: "white" }} />
            </Box>
            <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
              Admin Login
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Enter your admin password to access the admin panel
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleLogin}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 3 }}
              autoFocus
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                bgcolor: "#d11919",
                "&:hover": { bgcolor: "#b91616" },
                py: 1.5,
                fontWeight: "bold",
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Login"}
            </Button>
          </Box>

          <Box sx={{ mt: 3, p: 2, bgcolor: "#fff3e0", borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Note: This is a basic password protection. For production use, implement proper
              authentication with sessions and secure password hashing.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AdminLoginPage;

