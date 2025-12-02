import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const OnlineOrdering = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          color="primary.main"
          sx={{ fontWeight: "bold" }}
        >
          Order Online
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Craving Guapatlu at home? Order now through your favorite delivery
          apps.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Button
            variant="contained"
            size="large"
            color="success"
            href="https://food.grab.com/id/en/restaurant/online-delivery/6-C7DGWBMJMFXENA?sourceID=20250712_145850_142F14DA306948F68EDEC5E8E5FB8FB8_MEXMPS"
            target="_blank"
            sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            Order on GrabFood
          </Button>
          <Button
            variant="contained"
            size="large"
            color="success"
            href="https://www.gojek.com/gofood/"
            target="_blank"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              bgcolor: "#00aa13",
              "&:hover": { bgcolor: "#00880f" },
            }}
          >
            Order on GoFood
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default OnlineOrdering;
