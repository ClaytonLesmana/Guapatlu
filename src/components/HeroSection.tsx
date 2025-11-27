import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box sx={{ bgcolor: "white", py: 8, overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                mb: 4,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                transition: "all 0.8s ease-out",
              }}
            >
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Bakmi Jambi Asli <br />
                <Box
                  component="span"
                  sx={{
                    color: "#d11919",
                    display: "inline-block",
                    animation: "colorPulse 3s ease-in-out infinite",
                    "@keyframes colorPulse": {
                      "0%, 100%": { color: "#d11919" },
                      "50%": { color: "#ff4444" },
                    },
                  }}
                >
                  Rasa Khas
                </Box>{" "}
                dari Sumatra
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#64748b",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: "90%",
                }}
              >
                Mie kenyal, minyak hitam gurih, topping ayam smoky, dan sambal
                pedas segar. Pengalaman bakmi yang beda total dari bakmi biasa.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 5,
                flexWrap: "wrap",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out 0.2s",
              }}
            >
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="/menu"
                startIcon={<RestaurantMenuIcon />}
                sx={{
                  bgcolor: "#d11919",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: "50px",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  boxShadow: "0 10px 20px -10px rgba(209, 25, 25, 0.5)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#b91616",
                    transform: "translateY(-3px) scale(1.05)",
                    boxShadow: "0 15px 30px -10px rgba(209, 25, 25, 0.7)",
                  },
                  animation: "pulse 2s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.02)" },
                  },
                }}
              >
                Lihat Menu
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/register"
                startIcon={<CardGiftcardIcon />}
                sx={{
                  color: "#d11919",
                  borderColor: "#d11919",
                  px: 4,
                  py: 1.5,
                  borderRadius: "50px",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#b91616",
                    bgcolor: "#fff5f5",
                    transform: "translateY(-3px) scale(1.05)",
                  },
                }}
              >
                Daftar & Dapat Gratis
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 4,
                alignItems: "center",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out 0.4s",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <StarIcon
                  sx={{
                    color: "#fbbf24",
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 700, color: "#0f172a" }}
                >
                  4.9/5 Rating
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <PeopleIcon sx={{ color: "#d11919" }} />
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 700, color: "#0f172a" }}
                >
                  5k+ Pelanggan Puas
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              position: "relative",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(50px)",
              transition: "all 0.8s ease-out 0.3s",
            }}
          >
            <Box
              component="img"
              src="/bakmi-hero.jpg"
              alt="Bakmi Jambi"
              sx={{
                width: "100%",
                borderRadius: "24px",
                boxShadow: "0 20px 40px -20px rgba(0,0,0,0.3)",
                transform: "perspective(1000px) rotateY(-5deg)",
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "perspective(1000px) rotateY(0deg) scale(1.02)",
                },
              }}
            />

            {/* Floating Card */}
            <Box
              sx={{
                position: "absolute",
                bottom: 40,
                left: -20,
                bgcolor: "white",
                p: 2,
                borderRadius: 3,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                gap: 2,
                maxWidth: 250,
                animation: "float 3s ease-in-out infinite",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                },
                "@keyframes float": {
                  "0%, 100%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-10px)" },
                },
              }}
            >
              <Box
                sx={{
                  bgcolor: "#d11919",
                  color: "white",
                  p: 1,
                  borderRadius: "50%",
                  display: "flex",
                }}
              >
                <EmojiEventsIcon fontSize="small" />
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 800, color: "#0f172a" }}
                >
                  Rasa Otentik
                </Typography>
                <Typography variant="caption" sx={{ color: "#64748b" }}>
                  Resep Asli Warisan
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
