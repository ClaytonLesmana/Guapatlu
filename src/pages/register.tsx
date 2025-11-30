import React, { useState } from "react";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          "🎉 Registration successful! You earned 10 welcome points!",
          {
            duration: 4000,
            style: {
              background: "#4caf50",
              color: "#fff",
              fontWeight: "bold",
            },
          }
        );
        setTimeout(() => {
          window.location.href = "/points";
        }, 1500);
      } else {
        console.error("Registration failed:", data);
        toast.error(
          "Registration failed: " + (data.message || "Unknown error")
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  color="primary.main"
                  sx={{ fontWeight: "bold" }}
                >
                  Join Guapatlu Rewards
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                  Start earning points with every bite!
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <CheckCircleIcon
                      color="success"
                      sx={{ mr: 2, fontSize: 28 }}
                    />
                    <Typography variant="h6">
                      Earn 1 point for every $1 spent
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <CheckCircleIcon
                      color="success"
                      sx={{ mr: 2, fontSize: 28 }}
                    />
                    <Typography variant="h6">
                      Redeem points for free meals
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <CheckCircleIcon
                      color="success"
                      sx={{ mr: 2, fontSize: 28 }}
                    />
                    <Typography variant="h6">
                      Exclusive birthday treats
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <CheckCircleIcon
                      color="success"
                      sx={{ mr: 2, fontSize: 28 }}
                    />
                    <Typography variant="h6">
                      Member-only offers and events
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  align="center"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Create Account
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        required
                        fullWidth
                        id="dob"
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{ mt: 4, py: 1.5, fontSize: "1.1rem" }}
                  >
                    {loading ? (
                      <CircularProgress size={24} sx={{ color: "white" }} />
                    ) : (
                      "Register Now"
                    )}
                  </Button>
                  <Typography
                    variant="caption"
                    display="block"
                    align="center"
                    sx={{ mt: 2, color: "text.secondary" }}
                  >
                    By registering, you agree to our Terms of Service and
                    Privacy Policy.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default RegisterPage;
