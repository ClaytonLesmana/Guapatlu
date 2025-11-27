import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";

const ContactSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "grey.900", color: "white" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Visit Us
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <LocationOnIcon
              sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <Typography variant="body1" color="grey.400">
              123 Foodie Lane
              <br />
              Culinary District, City 12345
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <AccessTimeIcon
              sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h6" gutterBottom>
              Opening Hours
            </Typography>
            <Typography variant="body1" color="grey.400">
              Mon - Sun: 10:00 AM - 10:00 PM
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <EmailIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body1" color="grey.400">
              hello@guapatlu.com
              <br />
              +1 234 567 890
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
