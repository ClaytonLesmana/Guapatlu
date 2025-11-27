import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Link from "next/link";

const featuredItems = [
  {
    id: 1,
    name: "Bakmi Jambi Original",
    description:
      "Mie kenyal dengan topping ayam cincang, char siu merah, dan kuah kaldu terpisah.",
    image: "/bakmi-hero.jpg",
  },
  {
    id: 2,
    name: "Bakmi Ayam Merah",
    description:
      "Varian klasik dengan dominasi topping ayam merah manis gurih.",
    image: "/bakmi-hero.jpg",
  },
  {
    id: 3,
    name: "Bakmi Pedas Level 5",
    description:
      "Tantangan pedas untuk pecinta cabai! Gurih, pedas, bikin keringetan.",
    image: "/bakmi-hero.jpg",
  },
  {
    id: 4,
    name: "Bakmi Pangsit",
    description: "Lengkap dengan pangsit rebus lembut isi udang dan ayam.",
    image: "/bakmi-hero.jpg",
  },
];

const MenuPreview = () => {
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
          {featuredItems.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {item.name}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button variant="outlined" size="large" component={Link} href="/menu">
            Lihat Menu Lengkap
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default MenuPreview;
