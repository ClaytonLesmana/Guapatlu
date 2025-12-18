import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const AboutBakmi = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    { id: 1, text: "Berasal dari Jambi, Sumatra" },
    { id: 2, text: "Pengaruh Tionghoa Hokkien" },
    { id: 3, text: "Ciri Khas: Minyak Hitam Gurih, Rasa Bold, Pedas Segar" },
  ];

  return (
    <Box ref={sectionRef} sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/Kuah Jambi.jpg"
              alt="Bakmi Jambi"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                transition: "all 0.8s ease-out",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h6"
              color="primary.main"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out",
              }}
            >
              Apa Itu Bakmi Jambi?
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.1s",
              }}
            >
              Bakmi Jambi Khas di Kelapa Gading
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "1.1rem",
                color: "text.secondary",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.2s",
              }}
            >
              Bakmi Jambi adalah mie tradisional khas Jambi, Indonesia, yang
              kini bisa kamu nikmati di Kelapa Gading, Jakarta Utara. Teksturnya
              lebih kenyal, disajikan dengan minyak hitam gurih berbahan kecap
              asin dan minyak bawang, ditambah topping babi cincang, chasio,
              siobak, pangsit, dan sambal khas.
            </Typography>

            <Box sx={{ mt: 3 }}>
              {features.map((feature, index) => (
                <Paper
                  key={feature.id}
                  elevation={hoveredCard === feature.id ? 6 : 0}
                  onMouseEnter={() => setHoveredCard(feature.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    p: 2,
                    bgcolor: hoveredCard === feature.id ? "white" : "grey.100",
                    mb: index < features.length - 1 ? 2 : 0,
                    borderLeft:
                      hoveredCard === feature.id
                        ? "6px solid #d11919"
                        : "4px solid #d11919",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    transform:
                      hoveredCard === feature.id
                        ? "translateX(10px) scale(1.02)"
                        : "translateX(0) scale(1)",
                    opacity: isVisible ? 1 : 0,
                    animation: isVisible
                      ? `slideIn 0.6s ease-out ${0.3 + index * 0.1}s forwards`
                      : "none",
                    "@keyframes slideIn": {
                      from: {
                        opacity: 0,
                        transform: "translateX(-30px)",
                      },
                      to: {
                        opacity: 1,
                        transform: "translateX(0)",
                      },
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      color:
                        hoveredCard === feature.id ? "#d11919" : "text.primary",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {feature.text}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutBakmi;
