import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const BakmiComparison = () => {
  const [hoveredCard, setHoveredCard] = useState<"jambi" | "normal" | null>(
    "jambi"
  );

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
              onMouseEnter={() => setHoveredCard("jambi")}
              onMouseLeave={() => setHoveredCard("jambi")}
              sx={{
                height: "100%",
                border:
                  hoveredCard === "jambi"
                    ? "3px solid #d11919"
                    : "2px solid #e0e0e0",
                boxShadow: hoveredCard === "jambi" ? 8 : 2,
                bgcolor: hoveredCard === "jambi" ? "white" : "grey.100",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform: hoveredCard === "jambi" ? "scale(1.02)" : "scale(1)",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  color={
                    hoveredCard === "jambi" ? "primary.main" : "text.secondary"
                  }
                  sx={{
                    fontWeight: "bold",
                    mb: 4,
                    transition: "color 0.3s ease",
                  }}
                >
                  Bakmi Jambi
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleIcon
                    color={hoveredCard === "jambi" ? "success" : "disabled"}
                    sx={{ mr: 2, transition: "color 0.3s ease" }}
                  />
                  <Typography
                    variant="h6"
                    color={
                      hoveredCard === "jambi"
                        ? "text.primary"
                        : "text.secondary"
                    }
                    sx={{ transition: "color 0.3s ease" }}
                  >
                    Mie lebih kenyal & tipis
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleIcon
                    color={hoveredCard === "jambi" ? "success" : "disabled"}
                    sx={{ mr: 2, transition: "color 0.3s ease" }}
                  />
                  <Typography
                    variant="h6"
                    color={
                      hoveredCard === "jambi"
                        ? "text.primary"
                        : "text.secondary"
                    }
                    sx={{ transition: "color 0.3s ease" }}
                  >
                    Minyak hitam gurih (soy-based + bawang)
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleIcon
                    color={hoveredCard === "jambi" ? "success" : "disabled"}
                    sx={{ mr: 2, transition: "color 0.3s ease" }}
                  />
                  <Typography
                    variant="h6"
                    color={
                      hoveredCard === "jambi"
                        ? "text.primary"
                        : "text.secondary"
                    }
                    sx={{ transition: "color 0.3s ease" }}
                  >
                    Rasa lebih bold & smoky
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleIcon
                    color={hoveredCard === "jambi" ? "success" : "disabled"}
                    sx={{ mr: 2, transition: "color 0.3s ease" }}
                  />
                  <Typography
                    variant="h6"
                    color={
                      hoveredCard === "jambi"
                        ? "text.primary"
                        : "text.secondary"
                    }
                    sx={{ transition: "color 0.3s ease" }}
                  >
                    Topping ayam cincang + ayam merah
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleIcon
                    color={hoveredCard === "jambi" ? "success" : "disabled"}
                    sx={{ mr: 2, transition: "color 0.3s ease" }}
                  />
                  <Typography
                    variant="h6"
                    color={
                      hoveredCard === "jambi"
                        ? "text.primary"
                        : "text.secondary"
                    }
                    sx={{ transition: "color 0.3s ease" }}
                  >
                    Sambal pedas segar wajib
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleIcon
                    color={hoveredCard === "jambi" ? "success" : "disabled"}
                    sx={{ mr: 2, transition: "color 0.3s ease" }}
                  />
                  <Typography
                    variant="h6"
                    color={
                      hoveredCard === "jambi"
                        ? "text.primary"
                        : "text.secondary"
                    }
                    sx={{ transition: "color 0.3s ease" }}
                  >
                    Kuah terpisah
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              onMouseEnter={() => setHoveredCard("normal")}
              onMouseLeave={() => setHoveredCard("jambi")}
              sx={{
                height: "100%",
                bgcolor: hoveredCard === "normal" ? "white" : "grey.100",
                border:
                  hoveredCard === "normal"
                    ? "3px solid #d11919"
                    : "2px solid #e0e0e0",
                boxShadow: hoveredCard === "normal" ? 8 : 2,
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform:
                  hoveredCard === "normal" ? "scale(1.02)" : "scale(1)",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  color={
                    hoveredCard === "normal" ? "primary.main" : "text.secondary"
                  }
                  sx={{
                    fontWeight: "bold",
                    mb: 4,
                    transition: "color 0.3s ease",
                  }}
                >
                  Normal Bakmi
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CancelIcon
                    color="error"
                    sx={{
                      mr: 2,
                      opacity: hoveredCard === "normal" ? 1 : 0.5,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color={
                      hoveredCard === "normal"
                        ? "text.primary"
                        : "text.secondary"
                    }
                    sx={{ transition: "color 0.3s ease" }}
                  >
                    Minyak bening ringan
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CancelIcon
                    color="error"
                    sx={{
                      mr: 2,
                      opacity: hoveredCard === "normal" ? 1 : 0.5,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color={
                      hoveredCard === "normal"
                        ? "text.primary"
                        : "text.secondary"
                    }
                    sx={{ transition: "color 0.3s ease" }}
                  >
                    Rasa lebih mild
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CancelIcon
                    color="error"
                    sx={{
                      mr: 2,
                      opacity: hoveredCard === "normal" ? 1 : 0.5,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color={
                      hoveredCard === "normal"
                        ? "text.primary"
                        : "text.secondary"
                    }
                    sx={{ transition: "color 0.3s ease" }}
                  >
                    Fokus pada kuah
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CancelIcon
                    color="error"
                    sx={{
                      mr: 2,
                      opacity: hoveredCard === "normal" ? 1 : 0.5,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color={
                      hoveredCard === "normal"
                        ? "text.primary"
                        : "text.secondary"
                    }
                    sx={{ transition: "color 0.3s ease" }}
                  >
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
