import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "next/link";

const topCustomers = [
  {
    id: 1,
    name: "John Doe",
    points: 1200,
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    points: 950,
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    name: "Mike Johnson",
    points: 800,
    avatar: "https://i.pravatar.cc/150?u=3",
  },
];

const LeaderboardPreview = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "grey.100" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          color="primary.main"
          sx={{ fontWeight: "bold" }}
        >
          Top Guapatlu Fans
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          See who's leading the pack in loyalty points!
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2, justifyContent: "center" }}>
          {topCustomers.map((customer) => (
            <Grid key={customer.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ textAlign: "center", p: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <Avatar
                    alt={customer.name}
                    src={customer.avatar}
                    sx={{ width: 80, height: 80, border: "3px solid #d11919" }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {customer.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {customer.points} Points
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/leaderboard"
          >
            View Full Leaderboard
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LeaderboardPreview;
