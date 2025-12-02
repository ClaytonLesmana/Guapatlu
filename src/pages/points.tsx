import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FlagIcon from "@mui/icons-material/Flag";
import StarIcon from "@mui/icons-material/Star";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Link from "next/link";
import toast from "react-hot-toast";

const PointsPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<{
    name: string;
    phone: string;
    dob: string;
    total: number;
    points: number;
  } | null>(null);
  const [animatedPoints, setAnimatedPoints] = useState(0);

  // Animate points when userData changes
  useEffect(() => {
    if (userData) {
      let start = 0;
      const end = userData.points;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setAnimatedPoints(end);
          clearInterval(timer);
        } else {
          setAnimatedPoints(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [userData]);

  const handleCheckPoints = async () => {
    if (!phoneNumber.trim()) {
      toast.error("Please enter your phone number");
      return;
    }

    setLoading(true);
    setUserData(null);

    try {
      const response = await fetch("/api/points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: phoneNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        setUserData(data.data);
        toast.success(`Welcome back, ${data.data.name}!`);
      } else {
        toast.error(data.message || "Phone number not found");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const journeySteps = [
    { label: "Start", points: "0 poin", icon: <FlagIcon />, active: true },
    {
      label: "Free Es Teh",
      points: "15 points",
      icon: <FreeBreakfastIcon />,
      active: true,
    },
    {
      label: "Free Pangsit",
      points: "30 points",
      icon: <LocalFireDepartmentIcon />,
      active: true,
    },
    {
      label: "Diskon 25%",
      points: "60 points",
      icon: <WhatshotIcon />,
      active: true,
    },
    {
      label: "Free Bakmi ",
      points: "100 points",
      icon: <RamenDiningIcon />,
      active: true,
      highlight: true,
    },
  ];

  return (
    <Layout>
      <Box sx={{ bgcolor: "secondary.main", minHeight: "100vh", pb: 8 }}>
        {/* Header Section */}
        <Box
          sx={{
            bgcolor: "#d11919",
            color: "white",
            py: 8,
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={2}
            >
              <CardGiftcardIcon
                sx={{ fontSize: 40, mr: 2, color: "#FFD700" }}
              />
              <Typography variant="h3" component="h1" fontWeight="bold">
                Cek Poin Kamu
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ maxWidth: 600, mx: "auto", opacity: 0.9 }}
            >
              Perjalananmu menuju Bakmi Gratis dimulai di sini.
            </Typography>
          </Container>
          {/* Background decoration */}
          <Box
            component="img"
            src="/Kuah Jambi.jpg"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.2,
              zIndex: 1,
              filter: "blur(4px)",
            }}
          />
        </Box>

        <Container maxWidth="md" sx={{ mt: -4 }}>
          {/* Input Card */}
          <Card
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 4,
              textAlign: "center",
              mb: 6,
              position: "relative",
              zIndex: 3,
            }}
          >
            <PhoneIphoneIcon sx={{ fontSize: 40, color: "#D11919", mb: 1 }} />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Masukkan Nomor HP
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Lihat berapa poin yang sudah kamu kumpulkan!
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                maxWidth: 500,
                mx: "auto",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <TextField
                fullWidth
                placeholder="08123456789"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    bgcolor: "#F5F5F5",
                  },
                }}
              />
              <Button
                variant="contained"
                size="large"
                onClick={handleCheckPoints}
                disabled={loading}
                sx={{
                  background:
                    "linear-gradient(45deg, #D11919 30%, #FF5722 90%)",
                  borderRadius: 2,
                  px: 4,
                  fontWeight: "bold",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  whiteSpace: "nowrap",
                  minWidth: 140,
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  "Lihat Poin"
                )}
              </Button>
            </Box>
          </Card>

          {/* User Points Display */}
          {userData && (
            <Card
              elevation={4}
              sx={{
                p: 4,
                borderRadius: 4,
                textAlign: "center",
                mb: 6,
                background: "linear-gradient(135deg, #d11919 0%, #ff5722 100%)",
                color: "white",
                animation: "slideIn 0.5s ease-out",
                "@keyframes slideIn": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {userData.name}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, mb: 3 }}>
                {userData.phone}
              </Typography>

              <Box
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  borderRadius: 3,
                  p: 4,
                  mb: 2,
                }}
              >
                <Typography variant="h6" sx={{ opacity: 0.9, mb: 1 }}>
                  Your Points
                </Typography>
                <Typography
                  variant="h1"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "3rem", md: "4rem" },
                    textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  {animatedPoints}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
                  {100 - userData.points > 0
                    ? `${100 - userData.points} points until free Bakmi!`
                    : "You can redeem a free Bakmi! 🎉"}
                </Typography>
              </Box>
            </Card>
          )}

          {/* Points System Explanation - Accordion */}
          <Accordion
            elevation={3}
            sx={{
              mb: 6,
              borderRadius: 4,
              bgcolor: "#d11919",
              overflow: "hidden",
              "&:before": {
                display: "none",
              },
              "&.Mui-expanded": {
                margin: 0,
                mb: 6,
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white", fontSize: 32 }} />
              }
              sx={{
                borderRadius: 4,
                color: "white",
                "&:hover": {
                  bgcolor: "#b91616",
                },
              }}
            >
              <Box display="flex" alignItems="center">
                <CardGiftcardIcon sx={{ fontSize: 36, mr: 2 }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold" color="white">
                    Cara Kerja Sistem Poin
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    Klik untuk melihat detail
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 3, pb: 4, px: 4 }}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: "white",
                      borderRadius: 2,
                      height: "100%",
                      boxShadow: 2,
                      border: "2px solid #d11919",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      color="#d11919"
                    >
                      💰 Cara Mendapatkan Poin
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ color: "#d11919", fontWeight: 600 }}
                    >
                      1 Poin = Rp 10.000
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      Setiap kali kamu belanja di Guapatlu, kamu akan mendapat
                      poin otomatis!
                    </Typography>
                    <Box
                      sx={{
                        bgcolor: "#ffebee",
                        p: 2,
                        borderRadius: 1,
                        mt: 2,
                        border: "1px solid #ffcdd2",
                      }}
                    >
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                        gutterBottom
                        color="#d11919"
                      >
                        Contoh:
                      </Typography>
                      <Typography variant="body2">
                        • Belanja Rp 50.000 ={" "}
                        <strong style={{ color: "#d11919" }}>5 poin</strong>
                      </Typography>
                      <Typography variant="body2">
                        • Belanja Rp 100.000 ={" "}
                        <strong style={{ color: "#d11919" }}>10 poin</strong>
                      </Typography>
                      <Typography variant="body2">
                        • Belanja Rp 250.000 ={" "}
                        <strong style={{ color: "#d11919" }}>25 poin</strong>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: "white",
                      borderRadius: 2,
                      height: "100%",
                      boxShadow: 2,
                      border: "2px solid #d11919",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      color="#d11919"
                    >
                      🎁 Tukar Poin dengan Hadiah
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                      <Typography
                        component="li"
                        variant="body2"
                        sx={{ mb: 1.5 }}
                      >
                        <strong style={{ color: "#d11919" }}>15 Poin</strong> →
                        Free Es Teh
                      </Typography>
                      <Typography
                        component="li"
                        variant="body2"
                        sx={{ mb: 1.5 }}
                      >
                        <strong style={{ color: "#d11919" }}>30 Poin</strong> →
                        Free Pangsit (Rebus/Goreng)
                      </Typography>
                      <Typography
                        component="li"
                        variant="body2"
                        sx={{ mb: 1.5 }}
                      >
                        <strong style={{ color: "#d11919" }}>60 Poin</strong> →
                        Free Bakmi Jambi + Es Teh
                      </Typography>
                      <Typography
                        component="li"
                        variant="body2"
                        sx={{ mb: 1.5 }}
                      >
                        <strong style={{ color: "#d11919" }}>100 Poin</strong> →
                        Free Bakmi Jambi untuk 2 Orang
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: "white",
                      borderRadius: 2,
                      boxShadow: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      gutterBottom
                      color="#d11919"
                    >
                      ⭐ Keuntungan Lainnya:
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Typography variant="body2">
                          ✓ Poin{" "}
                          <strong style={{ color: "#d11919" }}>
                            tidak pernah hangus
                          </strong>
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Typography variant="body2">
                          ✓ Poin{" "}
                          <strong style={{ color: "#d11919" }}>
                            tidak direset
                          </strong>{" "}
                          setelah ditukar
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Typography variant="body2">
                          ✓ Bonus{" "}
                          <strong style={{ color: "#d11919" }}>10 poin</strong>{" "}
                          saat registrasi
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Reward Journey */}
          <Card
            elevation={2}
            sx={{
              p: 4,
              borderRadius: 4,
              mb: 6,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{ mb: 4 }}
            >
              Perjalanan Reward Kamu
            </Typography>

            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                px: 0,
              }}
            >
              {/* Background Line */}
              <Box
                sx={{
                  position: "absolute",
                  top: 24,
                  left: 24,
                  right: 24,
                  height: 4,
                  bgcolor: "#E0E0E0",
                  zIndex: 0,
                  borderRadius: 2,
                }}
              />

              {/* Animated Progress Line */}
              {userData && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 24,
                    left: 24,
                    height: 4,
                    bgcolor: "#d11919",
                    zIndex: 0,
                    borderRadius: 2,
                    width: `${Math.min((userData.points / 100) * 100, 100)}%`,
                    transition: "width 1.5s ease-out",
                    animation: "progressGrow 1.5s ease-out",
                    "@keyframes progressGrow": {
                      from: { width: "0%" },
                      to: {
                        width: `${Math.min(
                          (userData.points / 100) * 100,
                          100
                        )}%`,
                      },
                    },
                  }}
                />
              )}

              {journeySteps.map((step, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor:
                        userData && userData.points >= parseInt(step.points)
                          ? "#d11919"
                          : step.highlight
                          ? "#F44336"
                          : "#9E9E9E",
                      color: "white",
                      mb: 1,
                      boxShadow:
                        (userData &&
                          userData.points >= parseInt(step.points)) ||
                        step.highlight
                          ? "0 4px 10px rgba(209,25,25,0.4)"
                          : "none",
                      border: "4px solid white",
                      transition: "all 0.5s ease-out",
                    }}
                  >
                    {step.icon}
                  </Avatar>
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    sx={{
                      color:
                        (userData &&
                          userData.points >= parseInt(step.points)) ||
                        step.highlight
                          ? "#D11919"
                          : "text.primary",
                      fontSize: { xs: "0.7rem", sm: "0.875rem" },
                      transition: "color 0.5s ease-out",
                    }}
                  >
                    {step.label}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {step.points}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>

          {/* Footer Buttons */}
          <Grid container spacing={2} justifyContent="center">
            <Grid size={{ xs: 12, sm: 4 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<RestaurantMenuIcon />}
                component={Link}
                href="/menu"
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  color: "#D11919",
                  borderColor: "#D11919",
                  fontWeight: "bold",
                  bgcolor: "white",
                  "&:hover": {
                    bgcolor: "#FFF5F5",
                    borderColor: "#B71C1C",
                  },
                }}
              >
                Lihat Menu
              </Button>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                component={Link}
                href="/online"
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  background:
                    "linear-gradient(45deg, #D11919 30%, #FF5722 90%)",
                  fontWeight: "bold",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                }}
              >
                Order Online
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default PointsPage;
