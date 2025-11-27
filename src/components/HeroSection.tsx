import React from "react";
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
  return (
    <Box sx={{ bgcolor: "white", py: 8, overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 4 }}>
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
                <Box component="span" sx={{ color: "#d11919" }}>
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

            <Box sx={{ display: "flex", gap: 2, mb: 5, flexWrap: "wrap" }}>
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
                  "&:hover": { bgcolor: "#b91616" },
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
                  "&:hover": { borderColor: "#b91616", bgcolor: "#fff5f5" },
                }}
              >
                Daftar & Dapat Gratis
              </Button>
            </Box>

            <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <StarIcon sx={{ color: "#fbbf24" }} />
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 700, color: "#0f172a" }}
                >
                  4.9/5 Rating
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
          <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
            <Box
              component="img"
              src="/bakmi-hero.jpg"
              alt="Bakmi Jambi"
              sx={{
                width: "100%",
                borderRadius: "24px",
                boxShadow: "0 20px 40px -20px rgba(0,0,0,0.3)",
                transform: "perspective(1000px) rotateY(-5deg)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "perspective(1000px) rotateY(0deg)" },
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
