import React from "react";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import LinearProgress from "@mui/material/LinearProgress";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const topThree = [
  {
    rank: 2,
    name: "Andi Pratama",
    points: 2850,
    badge: "Bakmi Master",
    color: "#C0C0C0", // Silver
    badgeColor: "grey.600",
  },
  {
    rank: 1,
    name: "Sari Dewi",
    points: 3420,
    badge: "Sultan Bakmi",
    color: "#FFD700", // Gold
    badgeColor: "#F4B400",
  },
  {
    rank: 3,
    name: "Budi Santoso",
    points: 2190,
    badge: "Level 5 Pedas",
    color: "#CD7F32", // Bronze
    badgeColor: "#E67E22",
  },
];

const runnersUp = [
  {
    rank: 4,
    name: "Rini Kusuma",
    points: 1980,
    badge: "Weekly Top Spender",
    badgeColor: "#1976D2",
  },
  {
    rank: 5,
    name: "Ahmad Rizki",
    points: 1750,
    badge: "Bakmi Master",
    badgeColor: "#2E7D32",
  },
  {
    rank: 6,
    name: "Maya Sari",
    points: 1620,
    badge: "Level 4 Pedas",
    badgeColor: "#9C27B0",
  },
  {
    rank: 7,
    name: "Doni Wijaya",
    points: 1450,
    badge: "Regular Customer",
    badgeColor: "#5C6BC0",
  },
];

const LeaderboardPage = () => {
  return (
    <Layout>
      {/* Header Section */}
      <Box
        sx={{
          bgcolor: "#d11919",
          color: "white",
          py: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <EmojiEventsIcon sx={{ fontSize: 40, mr: 2, color: "#FFD700" }} />
            <Typography variant="h3" component="h1" fontWeight="bold">
              Top Customers
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ maxWidth: 600, opacity: 0.9 }}>
            Terima kasih sudah menjadi bagian dari keluarga Bakmi Jambi
            Guapatlu! Semakin sering kamu makan, semakin tinggi peringkatmu.
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

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Hall of Fame */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Hall of Fame
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Pelanggan terbaik bulan ini
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          alignItems="flex-end"
          justifyContent="center"
          mb={8}
        >
          {topThree.map((user) => (
            <Grid
              key={user.rank}
              size={{ xs: 12, md: 4 }}
              sx={{
                order: {
                  xs: user.rank,
                  md: user.rank === 1 ? 2 : user.rank === 2 ? 1 : 3,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transform: {
                    md: user.rank === 1 ? "scale(1.1)" : "scale(1)",
                  },
                  zIndex: user.rank === 1 ? 2 : 1,
                  mb: { xs: 4, md: 0 },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    bgcolor: user.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: -3,
                    zIndex: 2,
                    boxShadow: 3,
                  }}
                >
                  <WorkspacePremiumIcon sx={{ color: "white", fontSize: 32 }} />
                </Box>
                <Card
                  sx={{
                    pt: 5,
                    pb: 3,
                    px: 3,
                    width: "100%",
                    textAlign: "center",
                    bgcolor: user.rank === 1 ? "#FFF9C4" : "white",
                    border: user.rank === 1 ? "2px solid #FFD700" : "none",
                    boxShadow: 3,
                    borderRadius: 4,
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="text.secondary"
                    gutterBottom
                  >
                    {user.rank}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {user.name}
                  </Typography>
                  <Chip
                    label={user.badge}
                    size="small"
                    sx={{
                      bgcolor: user.badgeColor,
                      color: "white",
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  />
                  <Typography variant="h5" fontWeight="bold" color="#d11919">
                    {user.points.toLocaleString()} pts
                  </Typography>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Runners Up List */}
        <Box sx={{ maxWidth: 800, mx: "auto", mb: 10 }}>
          {runnersUp.map((user) => (
            <Card
              key={user.rank}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                mb: 2,
                boxShadow: 1,
                borderRadius: 3,
                transition: "transform 0.2s",
                "&:hover": { transform: "translateY(-2px)", boxShadow: 3 },
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "grey.200",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  color: "text.secondary",
                  mr: 3,
                  flexShrink: 0,
                }}
              >
                {user.rank}
              </Box>
              <Box sx={{ flexGrow: 1, mr: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {user.name}
                </Typography>
                <Chip
                  label={user.badge}
                  size="small"
                  sx={{
                    bgcolor: user.badgeColor,
                    color: "white",
                    fontSize: "0.7rem",
                    height: 20,
                  }}
                />
              </Box>
              <Box sx={{ textAlign: "right", minWidth: 100 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="#d11919"
                >
                  {user.points.toLocaleString()} pts
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>

        {/* How it Works */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Cara Kerja
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Setiap transaksi memberikan poin. Semakin banyak kamu makan di
            Guapatlu, semakin tinggi peringkatmu. Raih posisi Top 10 dan
            dapatkan hadiah spesial!
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: (
                <MonetizationOnIcon sx={{ fontSize: 40, color: "#d11919" }} />
              ),
              title: "Earn Points",
              desc: "Setiap pembelian otomatis mendapat poin reward",
            },
            {
              icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#d11919" }} />,
              title: "Climb Ranks",
              desc: "Kumpulkan poin untuk naik peringkat leaderboard",
            },
            {
              icon: (
                <CardGiftcardIcon sx={{ fontSize: 40, color: "#d11919" }} />
              ),
              title: "Redeem Rewards",
              desc: "Tukar poin dengan bakmi gratis dan hadiah menarik",
            },
          ].map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: "#ffebee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default LeaderboardPage;
