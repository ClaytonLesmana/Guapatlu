import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";

const RewardsTeaser = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "grey.100" }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
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
                  0 Poin
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gratis Bakmi (1000 Poin)
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={65}
                sx={{
                  height: 15,
                  borderRadius: 5,
                  bgcolor: "grey.300",
                  "& .MuiLinearProgress-bar": { bgcolor: "primary.main" },
                }}
              />
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
              sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
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
