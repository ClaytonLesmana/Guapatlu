import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const BakmiComparison = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Bedanya Bakmi Jambi vs Bakmi Biasa
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{ height: "100%", border: "2px solid #d11919", boxShadow: 6 }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  color="primary.main"
                  sx={{ fontWeight: "bold", mb: 4 }}
                >
                  Bakmi Jambi
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleIcon color="success" sx={{ mr: 2 }} />
                  <Typography variant="h6">Mie lebih kenyal & tipis</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleIcon color="success" sx={{ mr: 2 }} />
                  <Typography variant="h6">
                    Minyak hitam gurih (soy-based + bawang)
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleIcon color="success" sx={{ mr: 2 }} />
                  <Typography variant="h6">Rasa lebih bold & smoky</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleIcon color="success" sx={{ mr: 2 }} />
                  <Typography variant="h6">
                    Topping ayam cincang + ayam merah
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleIcon color="success" sx={{ mr: 2 }} />
                  <Typography variant="h6">Sambal pedas segar wajib</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleIcon color="success" sx={{ mr: 2 }} />
                  <Typography variant="h6">Kuah terpisah</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Card sx={{ height: "100%", bgcolor: "grey.100" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  color="text.secondary"
                  sx={{ fontWeight: "bold", mb: 4 }}
                >
                  Normal Bakmi
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CancelIcon color="error" sx={{ mr: 2 }} />
                  <Typography variant="h6" color="text.secondary">
                    Minyak bening ringan
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CancelIcon color="error" sx={{ mr: 2 }} />
                  <Typography variant="h6" color="text.secondary">
                    Rasa lebih mild
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CancelIcon color="error" sx={{ mr: 2 }} />
                  <Typography variant="h6" color="text.secondary">
                    Fokus pada kuah
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CancelIcon color="error" sx={{ mr: 2 }} />
                  <Typography variant="h6" color="text.secondary">
                    Topping standar (ayam rebus / kecap)
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BakmiComparison;
