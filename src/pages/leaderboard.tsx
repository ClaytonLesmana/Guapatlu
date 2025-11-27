import React from "react";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import Paper from "@mui/material/Paper";

const leaderboardData = [
  {
    rank: 1,
    name: "John Doe",
    points: 1200,
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    rank: 2,
    name: "Jane Smith",
    points: 950,
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    rank: 3,
    name: "Mike Johnson",
    points: 800,
    avatar: "https://i.pravatar.cc/150?u=3",
  },
  {
    rank: 4,
    name: "Sarah Williams",
    points: 750,
    avatar: "https://i.pravatar.cc/150?u=4",
  },
  {
    rank: 5,
    name: "David Brown",
    points: 700,
    avatar: "https://i.pravatar.cc/150?u=5",
  },
];

const LeaderboardPage = () => {
  return (
    <Layout>
      <Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              color="primary.main"
              sx={{ fontWeight: "bold" }}
            >
              Top Customers
            </Typography>
            <Typography variant="h6" color="text.secondary">
              See who's leading the pack! Earn points with every order to climb
              the ranks.
            </Typography>
          </Box>

          <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
            <Box
              sx={{
                bgcolor: "primary.main",
                p: 2,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EmojiEventsIcon sx={{ fontSize: 40, mr: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Leaderboard
              </Typography>
            </Box>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {leaderboardData.map((user, index) => (
                <React.Fragment key={user.rank}>
                  <ListItem alignItems="center" sx={{ py: 2 }}>
                    <Box sx={{ minWidth: 40, textAlign: "center", mr: 2 }}>
                      <Typography
                        variant="h5"
                        color={index < 3 ? "primary.main" : "text.secondary"}
                        sx={{ fontWeight: "bold" }}
                      >
                        #{user.rank}
                      </Typography>
                    </Box>
                    <ListItemAvatar>
                      <Avatar
                        alt={user.name}
                        src={user.avatar}
                        sx={{
                          width: 56,
                          height: 56,
                          border: index < 3 ? "2px solid #d11919" : "none",
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          variant="h6"
                          component="span"
                          sx={{ fontWeight: "bold" }}
                        >
                          {user.name}
                        </Typography>
                      }
                      secondary={
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <StarIcon
                            sx={{ fontSize: 16, color: "gold", mr: 0.5 }}
                          />
                          <Typography
                            variant="body2"
                            component="span"
                            color="text.primary"
                          >
                            {user.points} Points
                          </Typography>
                        </Box>
                      }
                    />
                    {index === 0 && (
                      <EmojiEventsIcon sx={{ color: "gold", fontSize: 30 }} />
                    )}
                    {index === 1 && (
                      <EmojiEventsIcon sx={{ color: "silver", fontSize: 30 }} />
                    )}
                    {index === 2 && (
                      <EmojiEventsIcon
                        sx={{ color: "#cd7f32", fontSize: 30 }}
                      />
                    )}
                  </ListItem>
                  {index < leaderboardData.length - 1 && (
                    <Divider variant="inset" component="li" />
                  )}
                </React.Fragment>
              ))}
            </List>
          </Paper>

          <Box
            sx={{
              mt: 6,
              p: 4,
              bgcolor: "grey.100",
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              How to get to the top?
            </Typography>
            <Typography variant="body1" paragraph>
              It's simple! Register for an account and earn points for every
              dollar you spend. The more you eat, the higher you climb!
            </Typography>
            <Typography variant="h6" color="primary.main">
              1 Dollar = 1 Point
            </Typography>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default LeaderboardPage;
