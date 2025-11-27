import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const ValueProps = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Kenapa Orang Suka Bakmi Jambi?
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: "center" }}>
            <LocalFireDepartmentIcon
              sx={{ fontSize: 60, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Rasa Kuat & Gurih
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Perpaduan bumbu rahasia yang menciptakan ledakan rasa di setiap
              suapan.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: "center" }}>
            <RestaurantIcon
              sx={{ fontSize: 60, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Tekstur Mie Unik
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Kenyal, tipis, dan dibuat fresh setiap hari untuk kualitas
              terbaik.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: "center" }}>
            <ThumbUpIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Sambal Khas Nagih
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Pedas, segar, dan asam yang menyempurnakan rasa bakmi.
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            textAlign: "center",
            p: 4,
            bgcolor: "grey.50",
            borderRadius: 4,
          }}
        >
          <Typography variant="h5" sx={{ fontStyle: "italic", mb: 2 }}>
            "Bakmi terbaik yang pernah saya coba! Rasanya otentik banget, persis
            kayak di Jambi."
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            — Andi, Pelanggan Setia
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="caption"
              display="block"
              color="text.secondary"
            >
              ⭐⭐⭐⭐⭐ Top Rated Bakmi Jambi
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ValueProps;
