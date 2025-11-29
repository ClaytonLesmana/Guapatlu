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
import SvgIcon from "@mui/material/SvgIcon";

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
            {/* <Typography
              variant="h6"
              color="primary.main"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              GUAPATLU
            </Typography> */}
            <Box
              component="img"
              src="/logo.png"
              alt="Guapatlu Logo"
              sx={{ height: 60, width: "auto", mb: 2 }}
            />
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
              <IconButton color="secondary" aria-label="facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="tiktok">
                <SvgIcon>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </SvgIcon>
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
