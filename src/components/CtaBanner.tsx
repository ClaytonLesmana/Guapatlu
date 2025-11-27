import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";

const CtaBanner = () => {
  return (
    <Box
      sx={{
        py: 10,
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Siap coba rasa asli Bakmi Jambi?
        </Typography>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/menu"
            sx={{
              bgcolor: "white",
              color: "primary.main",
              "&:hover": { bgcolor: "grey.100" },
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
            }}
          >
            Lihat Menu
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="/online"
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                borderColor: "white",
                bgcolor: "rgba(255,255,255,0.1)",
              },
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
            }}
          >
            Order Online
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CtaBanner;
