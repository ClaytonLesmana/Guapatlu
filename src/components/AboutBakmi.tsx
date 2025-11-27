import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const AboutBakmi = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="https://source.unsplash.com/random/600x400/?noodles,asian"
              alt="Bakmi Jambi"
              sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h6"
              color="primary.main"
              gutterBottom
              sx={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              What is Bakmi Jambi?
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Lebih dari Sekadar Mie
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.1rem", color: "text.secondary" }}
            >
              Bakmi Jambi adalah mie tradisional khas Jambi, Indonesia.
              Teksturnya lebih kenyal, disajikan dengan minyak hitam gurih
              berbahan kecap asin dan minyak bawang, ditambah daging ayam
              cincang, char siu-style ayam merah, pangsit, dan sambal khas.
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "grey.100",
                  mb: 2,
                  borderLeft: "4px solid #d11919",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Berasal dari Jambi, Sumatra
                </Typography>
              </Paper>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "grey.100",
                  mb: 2,
                  borderLeft: "4px solid #d11919",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Pengaruh Tionghoa Hokkien
                </Typography>
              </Paper>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "grey.100",
                  borderLeft: "4px solid #d11919",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Ciri Khas: Minyak Hitam Gurih, Rasa Bold, Pedas Segar
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutBakmi;
