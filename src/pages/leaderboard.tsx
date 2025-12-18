import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { generateBreadcrumbStructuredData } from "../config/structuredData";

type LeaderboardUser = {
  rank: number;
  name: string;
  points: number;
  badge: string;
  badgeColor: string;
  color?: string;
};

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("/api/leaderboard");
        const data = await response.json();

        if (response.ok) {
          // Add medal colors for top 3
          const enrichedData = data.data.map((user: LeaderboardUser) => {
            if (user.rank === 1) {
              return { ...user, color: "#FFD700" }; // Gold
            } else if (user.rank === 2) {
              return { ...user, color: "#C0C0C0" }; // Silver
            } else if (user.rank === 3) {
              return { ...user, color: "#CD7F32" }; // Bronze
            }
            return user;
          });
          setLeaderboard(enrichedData);
        } else {
          setError(data.message || "Failed to fetch leaderboard");
        }
      } catch (err) {
        setError("An error occurred while fetching the leaderboard");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const getHallOfFameTitle = (rank: number) => {
    switch (rank) {
      case 1:
        return "Raja Bakmi Jambi";
      case 2:
        return "Sultan Kuah Jambi";
      case 3:
        return "Jawara Sambal Nagih";
      case 4:
        return "Bintang Loyal Guapatlu";
      case 5:
        return "Pahlawan Bundling Bakmi";
      default:
        return "";
    }
  };

  const topThree = leaderboard.slice(0, 3);
  const runnersUp = leaderboard.slice(3, 10);

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Beranda", url: "https://guapatlu.com/" },
    { name: "Leaderboard", url: "https://guapatlu.com/leaderboard" },
  ]);

  return (
    <>
      <Head>
        <title>Leaderboard Pelanggan Terbaik | Guapatlu</title>
        <meta
          name="description"
          content="Lihat pelanggan setia Bakmi Khas Jambi Guapatlu dengan poin tertinggi. Dapatkan reward gratis setiap pembelian! 1 poin = Rp 10.000. Poin tidak pernah hangus!"
        />
        <link rel="canonical" href="https://guapatlu.com/leaderboard" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guapatlu.com/leaderboard" />
        <meta
          property="og:title"
          content="Leaderboard - Pelanggan Terbaik Guapatlu"
        />
        <meta
          property="og:description"
          content="Lihat pelanggan setia Bakmi Khas Jambi Guapatlu dengan poin tertinggi. Dapatkan reward gratis setiap pembelian!"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData),
          }}
        />
      </Head>
      <Layout>
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
              <EmojiEventsIcon sx={{ fontSize: 40, mr: 2, color: "#FFD700" }} />
              <Typography variant="h3" component="h1" fontWeight="bold">
                Top Customers
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ maxWidth: 600, mx: "auto", opacity: 0.9 }}
            >
              Terima kasih sudah menjadi bagian dari keluarga Bakmi Jambi
              Guapatlu! Semakin sering kamu makan, semakin tinggi peringkatmu.
            </Typography>
          </Container>
          {/* Background decoration */}
          <Box
            component="img"
            src="/Kuah Jambi.jpg"
            alt="Kuah bakmi khas Jambi sebagai latar belakang"
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
          {/* Loading State */}
          {loading && (
            <Box textAlign="center" py={10}>
              <CircularProgress size={60} sx={{ color: "#d11919" }} />
              <Typography variant="h6" sx={{ mt: 3, color: "text.secondary" }}>
                Loading leaderboard...
              </Typography>
            </Box>
          )}

          {/* Error State */}
          {error && !loading && (
            <Box textAlign="center" py={10}>
              <Typography variant="h5" color="error" gutterBottom>
                {error}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Please try again later or contact support.
              </Typography>
            </Box>
          )}

          {/* Leaderboard Content */}
          {!loading && !error && (
            <>
              {/* Hall of Fame */}
              <Box textAlign="center" mb={8}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Hall of Fame
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
                        <WorkspacePremiumIcon
                          sx={{ color: "white", fontSize: 32 }}
                        />
                      </Box>
                      <Card
                        sx={{
                          pt: 5,
                          pb: 3,
                          px: 3,
                          width: "100%",
                          textAlign: "center",
                          bgcolor: user.rank === 1 ? "#FFF9C4" : "white",
                          border:
                            user.rank === 1 ? "2px solid #FFD700" : "none",
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
                          label={getHallOfFameTitle(user.rank) || user.badge}
                          size="small"
                          sx={{
                            bgcolor: user.badgeColor,
                            color: "white",
                            fontWeight: "bold",
                            mb: 2,
                          }}
                        />
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          color="#d11919"
                        >
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
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: 3,
                      },
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
                        label={
                          user.rank <= 5 && getHallOfFameTitle(user.rank)
                            ? getHallOfFameTitle(user.rank)
                            : user.badge
                        }
                        size="small"
                        sx={{
                          bgcolor: user.badgeColor,
                          color: "white",
                          fontSize: "0.7rem",
                          height: 20,
                          mt: 0.5,
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

              {/* Points System Explanation */}

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={3}
              >
                <CardGiftcardIcon
                  sx={{ fontSize: 36, mr: 2, color: "#d11919" }}
                />
                <Typography variant="h5" fontWeight="bold" color="#d11919">
                  Sistem Poin & Reward Guapatlu
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card
                    sx={{
                      p: 3,
                      height: "100%",
                      bgcolor: "white",
                      boxShadow: 2,
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        bgcolor: "#ffebee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      <MonetizationOnIcon
                        sx={{ fontSize: 32, color: "#d11919" }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      align="center"
                      gutterBottom
                    >
                      Cara Dapat Poin
                    </Typography>
                    <Typography variant="body2" align="center" paragraph>
                      <strong style={{ fontSize: "1.1rem", color: "#d11919" }}>
                        1 Poin = Rp 10.000
                      </strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      Setiap pembelian otomatis mendapat poin. Contoh: Belanja
                      Rp 50.000 = 5 poin
                    </Typography>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Card
                    sx={{
                      p: 3,
                      height: "100%",
                      bgcolor: "white",
                      boxShadow: 2,
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        bgcolor: "#ffebee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      <EmojiEventsIcon
                        sx={{ fontSize: 32, color: "#d11919" }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      align="center"
                      gutterBottom
                    >
                      Tukar Reward
                    </Typography>
                    <Box sx={{ textAlign: "left", pl: 2 }}>
                      <Typography variant="body2" sx={{ mb: 0.5 }}>
                        • <strong>15 Poin</strong> = Free Es Teh
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 0.5 }}>
                        • <strong>30 Poin</strong> = Free Pangsit
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 0.5 }}>
                        • <strong>60 Poin</strong> = Bakmi + Es Teh
                      </Typography>
                      <Typography variant="body2">
                        • <strong>100 Poin</strong> = Bakmi 2 Orang
                      </Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <Card
                    sx={{
                      p: 3,
                      height: "100%",
                      bgcolor: "white",
                      boxShadow: 2,
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        bgcolor: "#ffebee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      <WorkspacePremiumIcon
                        sx={{ fontSize: 32, color: "#d11919" }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      align="center"
                      gutterBottom
                    >
                      Keuntungan
                    </Typography>
                    <Box sx={{ textAlign: "left", pl: 2 }}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        ✓ Poin <strong>tidak pernah hangus</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        ✓ Poin <strong>tidak direset</strong> saat tukar hadiah
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        ✓ Bonus <strong>10 poin</strong> saat daftar
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default LeaderboardPage;
