import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";

const RewardsTeaser = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 65) {
            clearInterval(timer);
            return 65;
          }
          return prev + 1;
        });
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <Box ref={sectionRef} sx={{ py: 8, bgcolor: "grey.100" }}>
      <Container maxWidth="md">
        <Box
          textAlign="center"
          mb={6}
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            color="primary.main"
            sx={{ fontWeight: "bold" }}
          >
            Makan. Kumpulkan. Ulangi.
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Dapatkan poin setiap kunjungan. Kumpulkan poin dan tukarkan untuk 1
            Bakmi Gratis.
          </Typography>
        </Box>

        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            p: 2,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transition: "all 0.8s ease-out 0.2s",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
            },
          }}
        >
          <Box sx={{ flex: 1, p: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Progress Anda
            </Typography>
            <Typography variant="body1" paragraph>
              Gabung Guapatlu Rewards dan lihat poinmu bertambah!
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body2" color="text.secondary">
                  {Math.round((progress / 100) * 1000)} Poin
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gratis Bakmi (1000 Poin)
                </Typography>
              </Box>
              <Box sx={{ position: "relative" }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 15,
                    borderRadius: 5,
                    bgcolor: "grey.300",
                    "& .MuiLinearProgress-bar": {
                      bgcolor: "primary.main",
                      boxShadow:
                        progress > 0
                          ? "0 0 20px rgba(209, 25, 25, 0.6)"
                          : "none",
                      transition: "all 0.3s ease",
                    },
                  }}
                />
                {progress >= 65 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: `${progress}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  ></Box>
                )}
              </Box>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 1, display: "block" }}
              >
                *Contoh progress
              </Typography>
            </Box>
          </Box>
          <Box sx={{ p: 2 }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/register"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 700,
                borderRadius: "50px",
                bgcolor: "#d11919",
                transition: "all 0.3s ease",
                animation: "pulse 2s ease-in-out infinite",
                "&:hover": {
                  bgcolor: "#b91616",
                  transform: "scale(1.1) translateY(-3px)",
                  boxShadow: "0 15px 30px rgba(209, 25, 25, 0.4)",
                },
                "@keyframes pulse": {
                  "0%, 100%": { boxShadow: "0 0 0 0 rgba(209, 25, 25, 0.7)" },
                  "50%": { boxShadow: "0 0 0 15px rgba(209, 25, 25, 0)" },
                },
              }}
            >
              Daftar Sekarang
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default RewardsTeaser;
