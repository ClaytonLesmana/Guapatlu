import React, { useState } from "react";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FlagIcon from "@mui/icons-material/Flag";
import StarIcon from "@mui/icons-material/Star";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Link from "next/link";

const PointsPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const journeySteps = [
    { label: "Start", points: "0 poin", icon: <FlagIcon />, active: true },
    {
      label: "Earn Points",
      points: "25 poin",
      icon: <StarIcon />,
      active: true,
    },
    {
      label: "Halfway There",
      points: "50 poin",
      icon: <LocalFireDepartmentIcon />,
      active: true,
    },
    {
      label: "Almost There",
      points: "75 poin",
      icon: <WhatshotIcon />,
      active: true,
    },
    {
      label: "Free Bakmi!",
      points: "100 poin",
      icon: <RamenDiningIcon />,
      active: true,
      highlight: true,
    },
  ];

  const badges = [
    {
      title: "New Member",
      points: "0 poin",
      icon: <PersonAddIcon />,
    },
    {
      title: "Bakmi Lover",
      points: "25 poin",
      icon: <FavoriteIcon />,
    },
    {
      title: "Level 3 Pedas",
      points: "50 poin",
      icon: <LocalFireDepartmentIcon />,
    },
    {
      title: "Almost Free",
      points: "75 poin",
      icon: <EmojiEventsIcon />,
    },
    {
      title: "Bakmi Master",
      points: "100 poin",
      icon: <WorkspacePremiumIcon />,
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
                sx={{
                  background:
                    "linear-gradient(45deg, #D11919 30%, #FF5722 90%)",
                  borderRadius: 2,
                  px: 4,
                  fontWeight: "bold",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  whiteSpace: "nowrap",
                }}
              >
                Lihat Poin
              </Button>
            </Box>
          </Card>

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
                px: { xs: 1, md: 4 },
              }}
            >
              {/* Connecting Line */}
              <Box
                sx={{
                  position: "absolute",
                  top: 24,
                  left: 40,
                  right: 40,
                  height: 4,
                  bgcolor: "#E0E0E0",
                  zIndex: 0,
                }}
              />

              {journeySteps.map((step, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "20%",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: step.highlight ? "#F44336" : "#9E9E9E",
                      color: "white",
                      mb: 1,
                      boxShadow: step.highlight
                        ? "0 4px 10px rgba(244,67,54,0.4)"
                        : "none",
                      border: "4px solid white",
                    }}
                  >
                    {step.icon}
                  </Avatar>
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    sx={{
                      color: step.highlight ? "#D11919" : "text.primary",
                      fontSize: { xs: "0.7rem", sm: "0.875rem" },
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

          {/* Achievement Badges */}
          {/* <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{ mb: 4 }}
            >
              Achievement Badges
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {badges.map((badge, index) => (
                <Grid key={index} size={{ xs: 6, sm: 4, md: 2.4 }}>
                  <Card
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor: "white",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #f0f0f0",
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#EEEEEE",
                        color: "#9E9E9E",
                        width: 56,
                        height: 56,
                        mb: 2,
                      }}
                    >
                      {badge.icon}
                    </Avatar>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {badge.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {badge.points}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box> */}

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
