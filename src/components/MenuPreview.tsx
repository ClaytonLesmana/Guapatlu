import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";

const featuredItems = [
  {
    id: 1,
    name: "Bakmi Khas Jambi",
    description:
      "Bakmi khas Jambi dengan mie kenyal, kuah kaldu gurih, dan topping babi autentik.",
    image: "/bakmi jhambi.jpg",
  },
  {
    id: 2,
    name: "Nasi Campur",
    description:
      "Nasi campur dengan chasio manis-gurih dan siobak crispy khas Guapatlu.",
    image: "/nasi campur.png",
  },
  {
    id: 3,
    name: "Trio Pork Platter",
    description:
      "Platter premium berisi tiga olahan babi favorit untuk sharing atau makan puas.",
    image: "/trio platter.png",
  },
  {
    id: 4,
    name: "Bakso Goreng",
    description:
      "Bakso goreng renyah di luar dan lembut di dalam, camilan wajib pendamping bakmi.",
    image: "/bakso goreng.jpg",
  },
];

const MenuPreview = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          color="primary.main"
          sx={{ fontWeight: "bold" }}
        >
          Menu Andalan Kami
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          Pilihan favorit pelanggan yang wajib dicoba.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {featuredItems.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
              <Card
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform:
                    hoveredCard === item.id
                      ? "translateY(-12px) scale(1.02)"
                      : "translateY(0) scale(1)",
                  boxShadow:
                    hoveredCard === item.id
                      ? "0 20px 40px rgba(0,0,0,0.15)"
                      : "0 2px 8px rgba(0,0,0,0.1)",
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                  "@keyframes fadeInUp": {
                    from: {
                      opacity: 0,
                      transform: "translateY(30px)",
                    },
                    to: {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      transition: "transform 0.4s ease",
                      transform:
                        hoveredCard === item.id ? "scale(1.15)" : "scale(1)",
                    }}
                  />
                  {/* Overlay on hover */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: "rgba(209, 25, 25, 0.85)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: hoveredCard === item.id ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<VisibilityIcon />}
                      component={Link}
                      href="/menu"
                      sx={{
                        bgcolor: "white",
                        color: "#d11919",
                        "&:hover": {
                          bgcolor: "grey.100",
                          transform: "scale(1.1)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Lihat Detail
                    </Button>
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: hoveredCard === item.id ? "#d11919" : "#0f172a",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            href="/menu"
            sx={{
              borderColor: "#d11919",
              color: "#d11919",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: "50px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#d11919",
                color: "white",
                transform: "scale(1.05)",
                boxShadow: "0 10px 20px rgba(209, 25, 25, 0.3)",
              },
            }}
          >
            Lihat Menu Lengkap
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default MenuPreview;
