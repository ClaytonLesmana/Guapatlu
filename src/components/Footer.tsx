import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        backgroundColor: "#1A1A1A",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography
              variant="h6"
              color="primary.main"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              GUAPATLU
            </Typography>
            <Typography variant="body2" color="grey.400">
              Premium street-food vibe. Fresh ingredients, bold flavors, and a
              community that loves food.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="/"
                passHref
                style={{ textDecoration: "none", color: "#bdbdbd" }}
              >
                Home
              </Link>
              <Link
                href="/menu"
                passHref
                style={{ textDecoration: "none", color: "#bdbdbd" }}
              >
                Menu
              </Link>
              <Link
                href="/leaderboard"
                passHref
                style={{ textDecoration: "none", color: "#bdbdbd" }}
              >
                Leaderboard
              </Link>
              <Link
                href="/online"
                passHref
                style={{ textDecoration: "none", color: "#bdbdbd" }}
              >
                Order Online
              </Link>
              <Link
                href="/contact"
                passHref
                style={{ textDecoration: "none", color: "#bdbdbd" }}
              >
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Connect With Us
            </Typography>
            <Box>
              <IconButton color="primary" aria-label="facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" aria-label="twitter">
                <TwitterIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="grey.400" sx={{ mt: 2 }}>
              © {new Date().getFullYear()} Guapatlu. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
