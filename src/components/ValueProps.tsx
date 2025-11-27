import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const testimonials = [
  {
    id: 1,
    text: "Bakmi terbaik yang pernah saya coba! Rasanya otentik banget, persis kayak di Jambi.",
    author: "Andi, Pelanggan Setia",
    rating: "⭐⭐⭐⭐⭐ Top Rated Bakmi Jambi",
  },
  {
    id: 2,
    text: "Mie kenyal, minyak hitamnya gurih, dan sambalnya bikin nagih! Wajib coba!",
    author: "Siti, Food Blogger",
    rating: "⭐⭐⭐⭐⭐ Highly Recommended",
  },
  {
    id: 3,
    text: "Rasanya beda dari bakmi lain. Ayam smoky-nya juara, sambalnya fresh banget!",
    author: "Budi, Pengusaha",
    rating: "⭐⭐⭐⭐⭐ Best Bakmi in Town",
  },
  {
    id: 4,
    text: "Sudah langganan 2 tahun! Konsisten enak, porsi pas, harga terjangkau.",
    author: "Dewi, Ibu Rumah Tangga",
    rating: "⭐⭐⭐⭐⭐ Loyal Customer",
  },
];

const ValueProps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

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

        {/* Testimonial Slideshow */}
        <Box
          sx={{
            mt: 8,
            textAlign: "center",
            p: 4,
            bgcolor: "grey.50",
            borderRadius: 4,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Navigation Buttons */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "white",
              boxShadow: 2,
              "&:hover": { bgcolor: "grey.100" },
              zIndex: 2,
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "white",
              boxShadow: 2,
              "&:hover": { bgcolor: "grey.100" },
              zIndex: 2,
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          {/* Testimonial Content */}
          <Box
            sx={{
              minHeight: 180,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 4, md: 8 },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontStyle: "italic",
                mb: 2,
                animation: "fadeIn 0.5s ease-in",
                "@keyframes fadeIn": {
                  from: { opacity: 0, transform: "translateY(10px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
              key={`text-${currentIndex}`}
            >
              "{testimonials[currentIndex].text}"
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "primary.main" }}
              key={`author-${currentIndex}`}
            >
              — {testimonials[currentIndex].author}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="caption"
                display="block"
                color="text.secondary"
                key={`rating-${currentIndex}`}
              >
                {testimonials[currentIndex].rating}
              </Typography>
            </Box>
          </Box>

          {/* Dots Indicator */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mt: 3,
            }}
          >
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: index === currentIndex ? "primary.main" : "grey.300",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor:
                      index === currentIndex ? "primary.dark" : "grey.400",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ValueProps;
