import React from "react";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import StarIcon from "@mui/icons-material/Star";

const AccountPage = () => {
  // Mock user data
  const user = {
    name: "Clayton",
    points: 750,
    nextReward: 1000,
    tier: "Gold Member",
  };

  const progress = (user.points / user.nextReward) * 100;

  return (
    <Layout>
      <Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            color="primary.main"
            sx={{ fontWeight: "bold" }}
          >
            My Rewards
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            paragraph
            sx={{ mb: 6 }}
          >
            Welcome back, {user.name}! You're doing great.
          </Typography>

          <Paper
            elevation={3}
            sx={{ p: 4, mb: 6, borderRadius: 2, bgcolor: "#fff" }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom color="text.secondary">
                  Current Balance
                </Typography>
                <Typography
                  variant="h1"
                  color="primary.main"
                  sx={{ fontWeight: "bold", lineHeight: 1 }}
                >
                  {user.points}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Points
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 2,
                    bgcolor: "grey.50",
                    borderRadius: 2,
                  }}
                >
                  <StarIcon sx={{ fontSize: 40, color: "gold", mb: 1 }} />
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {user.tier}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Keep earning to maintain your status!
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ mt: 6 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Progress to Free Meal
                </Typography>
                <Typography variant="h6" color="primary.main">
                  {user.points} / {user.nextReward}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 25,
                  borderRadius: 10,
                  bgcolor: "grey.200",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "primary.main",
                    borderRadius: 10,
                  },
                }}
              />
              <Typography
                variant="body1"
                sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}
              >
                You are only{" "}
                <Box
                  component="span"
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  {user.nextReward - user.points} points
                </Box>{" "}
                away from your next free meal!
              </Typography>
            </Box>
          </Paper>

          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            Recent Activity
          </Typography>
          <Grid container spacing={3}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} key={item}>
                <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                  <Box
                    sx={{
                      bgcolor: "primary.light",
                      p: 1,
                      borderRadius: "50%",
                      mr: 2,
                      color: "white",
                    }}
                  >
                    <RestaurantMenuIcon />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">Dine-in Visit</Typography>
                    <Typography variant="body2" color="text.secondary">
                      November {20 - item}, 2025
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    color="success.main"
                    sx={{ fontWeight: "bold" }}
                  >
                    +150 Pts
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default AccountPage;
