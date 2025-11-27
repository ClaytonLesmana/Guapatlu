import React from "react";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SecurityIcon from "@mui/icons-material/Security";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StarIcon from "@mui/icons-material/Star";

const OnlinePage = () => {
  return (
    <Layout>
      {/* Header Section */}
      <Box
        sx={{ bgcolor: "#d11919", color: "white", py: 8, textAlign: "center" }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            Order Online
          </Typography>
          <Typography
            variant="h6"
            sx={{ opacity: 0.9, maxWidth: 600, mx: "auto" }}
          >
            Craving authentic flavors? Order now through our trusted delivery
            partners and enjoy Guapatlu's delicious dishes at your doorstep.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Platform Selection */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            gutterBottom
            color="text.primary"
          >
            Choose Your Delivery Platform
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
            Select from our trusted delivery partners below. Fast delivery,
            fresh food, and great service guaranteed.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* GrabFood Card */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Card
                sx={{ height: "100%", boxShadow: 3, borderRadius: 4, p: 2 }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#e8f5e9",
                      p: 2,
                      borderRadius: "50%",
                      mb: 2,
                    }}
                  >
                    <RestaurantIcon sx={{ fontSize: 40, color: "#00b14f" }} />
                  </Box>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    GrabFood
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Fast delivery in 30-45 minutes
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      my: 2,
                      color: "text.secondary",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <AccessTimeIcon fontSize="small" /> 30-45 min
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <TwoWheelerIcon fontSize="small" /> Free delivery
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    href="https://food.grab.com"
                    target="_blank"
                    startIcon={<RestaurantIcon />}
                    sx={{
                      bgcolor: "#00b14f",
                      "&:hover": { bgcolor: "#009e47" },
                      color: "white",
                      py: 1.5,
                      fontWeight: "bold",
                    }}
                  >
                    Order on GrabFood
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* GoFood Card */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Card
                sx={{ height: "100%", boxShadow: 3, borderRadius: 4, p: 2 }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#e8f5e9",
                      p: 2,
                      borderRadius: "50%",
                      mb: 2,
                    }}
                  >
                    <TwoWheelerIcon sx={{ fontSize: 40, color: "#00aa13" }} />
                  </Box>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    GoFood
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Quick delivery in 25-40 minutes
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      my: 2,
                      color: "text.secondary",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <AccessTimeIcon fontSize="small" /> 25-40 min
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <StarIcon fontSize="small" /> Top rated
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    href="https://gofood.co.id"
                    target="_blank"
                    startIcon={<TwoWheelerIcon />}
                    sx={{
                      bgcolor: "#00aa13",
                      "&:hover": { bgcolor: "#00880f" },
                      color: "white",
                      py: 1.5,
                      fontWeight: "bold",
                    }}
                  >
                    Order on GoFood
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Delivery Information */}
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 4,
            p: 6,
            boxShadow: 1,
            mb: 8,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Delivery Information
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  bgcolor: "#ffebee",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <AccessTimeIcon sx={{ color: "#d11919", fontSize: 30 }} />
              </Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Quick Delivery
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average delivery time 30-45 minutes
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  bgcolor: "#ffebee",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <SecurityIcon sx={{ color: "#d11919", fontSize: 30 }} />
              </Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Safe & Hygienic
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Contactless delivery with safety protocols
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  bgcolor: "#ffebee",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <LocalFireDepartmentIcon
                  sx={{ color: "#d11919", fontSize: 30 }}
                />
              </Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Fresh & Hot
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Food prepared fresh and delivered hot
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Help Section */}
        <Box
          sx={{
            bgcolor: "#f8fafc",
            borderRadius: 4,
            p: 6,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Need Help with Your Order?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Having trouble with the delivery apps? Contact us directly and we'll
            help you place your order.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              sx={{
                bgcolor: "#d11919",
                "&:hover": { bgcolor: "#b91616" },
                px: 4,
              }}
            >
              Call Us
            </Button>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              sx={{
                bgcolor: "#25D366",
                "&:hover": { bgcolor: "#128C7E" },
                px: 4,
              }}
            >
              WhatsApp
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default OnlinePage;
