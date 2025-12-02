import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
  });
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const validateIndonesianPhone = (phone: string): boolean => {
    // Remove all spaces and dashes
    const cleanPhone = phone.replace(/[\s-]/g, "");

    // Indonesian phone patterns:
    // 08xxxxxxxxx (10-13 digits starting with 08)
    // +628xxxxxxxxx (starts with +62)
    // 628xxxxxxxxx (starts with 62)
    const pattern = /^(\+62|62|0)8[0-9]{8,11}$/;

    return pattern.test(cleanPhone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate phone number on change
    if (name === "phone") {
      if (value && !validateIndonesianPhone(value)) {
        setPhoneError(
          "Format nomor telepon tidak valid. Gunakan format Indonesia (contoh: 08123456789)"
        );
      } else {
        setPhoneError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone number before submission
    if (!validateIndonesianPhone(formData.phone)) {
      toast.error(
        "Format nomor telepon tidak valid. Gunakan format Indonesia (contoh: 08123456789)"
      );
      return;
    }

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
          }
        );
        // Optional: Redirect or clear form
      } else {
        // Check if it's a duplicate phone number error
        if (response.status === 409) {
          toast.error(
            "Nomor telepon sudah terdaftar. Silakan gunakan nomor lain.",
            {
              duration: 4000,
            }
          );
        } else {
          toast.error(
            "Pendaftaran gagal: " +
              (data.message || "Kesalahan tidak diketahui")
          );
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Terjadi kesalahan. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }} id="register">
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            color="primary.main"
            sx={{ fontWeight: "bold" }}
          >
            Join the Club
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
          >
            Register now to start collecting points towards free meals!
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
                  error={!!phoneError}
                  helperText={
                    phoneError || "Contoh: 08123456789 atau +628123456789"
                  }
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
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Register Now"
              )}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterForm;
