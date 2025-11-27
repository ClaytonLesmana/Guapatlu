import React from "react";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SvgIcon from "@mui/material/SvgIcon";

const ContactPage = () => {
  return (
    <Layout>
      <Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            color="primary.main"
            sx={{ fontWeight: "bold" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6 }}
          >
            We'd love to hear from you. Visit us, call us, or send us a message.
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold", mb: 3 }}
                >
                  Get in Touch
                </Typography>

                <Box sx={{ display: "flex", mb: 3 }}>
                  <LocationOnIcon
                    color="primary"
                    sx={{ mr: 2, fontSize: 30 }}
                  />
                  <Box>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="body1" color="text.secondary">
                      Jl. Boulevard Raya Blok WA 2 No.25, RT.11/RW.15, Klp.
                      Gading Tim., Kec. Klp. Gading, Jkt Utara, Daerah Khusus
                      Ibukota Jakarta 14240, Indonesia
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mb: 3 }}>
                  <AccessTimeIcon
                    color="primary"
                    sx={{ mr: 2, fontSize: 30 }}
                  />
                  <Box>
                    <Typography variant="h6">Opening Hours</Typography>
                    <Typography variant="body1" color="text.secondary">
                      Mon - Sun: 10:00 AM - 10:00 PM
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mb: 3 }}>
                  <EmailIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6">Email</Typography>
                    <Typography variant="body1" color="text.secondary">
                      hello@guapatlu.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mb: 3 }}>
                  <PhoneIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6">Phone</Typography>
                    <Typography variant="body1" color="text.secondary">
                      +1 234 567 890
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Follow Us
                  </Typography>
                  <Box>
                    <IconButton color="primary" aria-label="facebook">
                      <FacebookIcon fontSize="large" />
                    </IconButton>
                    <IconButton color="primary" aria-label="instagram">
                      <InstagramIcon fontSize="large" />
                    </IconButton>
                    <IconButton color="primary" aria-label="tiktok">
                      <SvgIcon fontSize="large">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </SvgIcon>
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={3}
                sx={{ height: "100%", minHeight: 400, overflow: "hidden" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d22e4200f949!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633072871234!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default ContactPage;
