import React, { useState } from "react";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

const categories = ["All", "Bundling", "Bakmi", "Sides", "Drinks"];

const menuItems = [
  {
    id: 1,
    name: "Bakmi Khas Jambi",
    description:
      "Bakmi keriting/Lurus Kenyal Yang Gurih, Dilengkapi Kuah Berisi Daging Babi Cincang, Bakso Ikan, Dan Otak Otak Ikan Yang Hangat Dan Lezat",
    price: "Rp.65.000",
    category: "Bakmi",
    image: "https://source.unsplash.com/random/400x300/?burger",
  },
  {
    id: 2,
    name: "BAKMI - RED (DR BUAH BIT)",
    description: "Al dente pasta tossed in a fiery tomato sauce.",
    price: "$14.50",
    category: "Bakmi",
    image: "https://source.unsplash.com/random/400x300/?pasta",
  },
  {
    id: 3,
    name: "Bihun",
    description: "Beef patty, cheddar cheese, lettuce, tomato, onion.",
    price: "$10.99",
    category: "Bakmi",
    image: "https://source.unsplash.com/random/400x300/?cheeseburger",
  },
  {
    id: 4,
    name: "Bakmi Hijau Khas Jambi",
    description: "Creamy sauce with pancetta and egg yolk.",
    price: "$13.50",
    category: "Bakmi",
    image: "https://source.unsplash.com/random/400x300/?carbonara",
  },
  {
    id: 5,
    name: "Bakmi (Lebar) Khas Jambi",
    description: "Freshly squeezed lemons with mint.",
    price: "$4.50",
    category: "Bakmi",
    image: "https://source.unsplash.com/random/400x300/?lemonade",
  },
  {
    id: 6,
    name: "Bakmi (Lebar) Khas Jambi",
    description: "Freshly squeezed lemons with mint.",
    price: "$4.50",
    category: "Bakmi",
    image: "https://source.unsplash.com/random/400x300/?lemonade",
  },
  {
    id: 7,
    name: "Lapchiong",
    description: "Sosis Kering Daging Babi Yang Cocok Jadi Topping Bakmi",
    price: "$6.99",
    category: "Sides",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
  {
    id: 8,
    name: "Siomay Babi Udang (Isi 2)",
    description:
      "Siomay Hangat Homemade, Berisi Daging Babi Dan Udang Yang Fresh. Harga Untuk 1 Porsi (2pcs)",
    price: "$6.99",
    category: "Sides",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
  {
    id: 9,
    name: "KULIT PANGSIT GORENG",
    description:
      "Siomay Hangat Homemade, Berisi Daging Babi Dan Udang Yang Fresh. Harga Untuk 1 Porsi (2pcs)",
    price: "$6.99",
    category: "Sides",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
  {
    id: 10,
    name: "PANGSIT REBUS (4PC)",
    description:
      "Pangsit Rebus Isi Babi dan udang, Guriiihh Nagiiiih Bangeeet Gak Cukup 1 Makannya. Di Sajikan Nyemek2 Gitu Ya, Tapi Kalo Mau Minta Extra Kuah Boleh Aja , Kasih Notes Ya",
    price: "$6.99",
    category: "Sides",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
  {
    id: 11,
    name: "Telor Omega Kecap (1pc)",
    description:
      "Telor Omega Marinated, Gurih, Padat Texture Nya , Enyaaak , Cuco Mendampingi Bakmi",
    price: "$6.99",
    category: "Sides",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
  {
    id: 12,
    name: "KUAH JAMBI ISI DAGING",
    description:
      "ISI: DAGING CINCANG, BAKSO IKAN , FISH CAKE, KUAH NYA NGALLLDDUU BANGETTT RASA NYA GOOONG BANGET, CUZZZ DI COBA",
    price: "$6.99",
    category: "Sides",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
  {
    id: 13,
    name: "SATE BABI GUAPATLU (1pc)",
    description:
      "ISI: DAGING CINCANG, BAKSO IKAN , FISH CAKE, KUAH NYA NGALLLDDUU BANGETTT RASA NYA GOOONG BANGET, CUZZZ DI COBA",
    price: "$6.99",
    category: "Sides",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
  {
    id: 13,
    name: "Bakso Goreng (1 Pc)",
    description: "Bakso goreng pelengkap bakmi. Harga per/pcs",
    price: "$6.99",
    category: "Sides",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
  {
    id: 14,
    name: "Liang Teh",
    description: "Bakso goreng pelengkap bakmi. Harga per/pcs",
    price: "$6.99",
    category: "Drinks",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
  {
    id: 15,
    name: "Susu Kacang",
    description: "Bakso goreng pelengkap bakmi. Harga per/pcs",
    price: "$6.99",
    category: "Drinks",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
  {
    id: 16,
    name: "Paket Bakmi Set + 1 Bakmi Polos",
    description: "Bakso goreng pelengkap bakmi. Harga per/pcs",
    price: "$6.99",
    category: "Bundling",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
  {
    id: 17,
    name: "Paket Bakmi Set + 2pcs Bakso Goreng",
    description: "Bakso goreng pelengkap bakmi. Harga per/pcs",
    price: "$6.99",
    category: "Bundling",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
  {
    id: 18,
    name: "Paket Bakmi Set + 2pcs Siomay",
    description:
      "1 Set Bakmi, Dengan Tambahan 2pcs Siomay Babi Udang Yang Hangat Dan Lezat. Harga Lebih Hemat",
    price: "$6.99",
    category: "Bundling",
    image: "https://source.unsplash.com/random/400x300/?fries",
  },
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleCategoryChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setSelectedCategory(newValue);
  };

  const handleOpen = (item: any) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      <Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            color="primary.main"
            sx={{ fontWeight: "bold" }}
          >
            Our Menu
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            Explore our delicious offerings made with passion.
          </Typography>

          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              mb: 4,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tabs
              value={selectedCategory}
              onChange={handleCategoryChange}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {categories.map((category) => (
                <Tab
                  key={category}
                  label={category}
                  value={category}
                  sx={{ fontWeight: "bold" }}
                />
              ))}
            </Tabs>
          </Box>

          <Grid container spacing={4}>
            {filteredItems.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  onClick={() => handleOpen(item)}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.3s",
                    cursor: "pointer",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                      >
                        {item.name}
                      </Typography>
                      <Chip label={item.price} color="primary" size="small" />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Sub Menu / Detail Modal */}
          <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
              sx: { borderRadius: 3, overflow: "hidden" },
            }}
          >
            {selectedItem && (
              <>
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={selectedItem.image}
                    alt={selectedItem.name}
                  />
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <DialogContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h4" fontWeight="bold">
                      {selectedItem.name}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="primary.main"
                      fontWeight="bold"
                    >
                      {selectedItem.price}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {selectedItem.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>

                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    Order Now via:
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<DeliveryDiningIcon />}
                      href="https://food.grab.com"
                      target="_blank"
                      sx={{
                        bgcolor: "#00B14F", // Grab Green
                        "&:hover": { bgcolor: "#009e47" },
                        py: 1.5,
                        fontWeight: "bold",
                      }}
                    >
                      Order on GrabFood
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<DeliveryDiningIcon />}
                      href="https://www.gojek.com/gofood/"
                      target="_blank"
                      sx={{
                        bgcolor: "#00AA13", // Gojek Green
                        "&:hover": { bgcolor: "#00880f" },
                        py: 1.5,
                        fontWeight: "bold",
                      }}
                    >
                      Order on GoFood
                    </Button>
                  </Box>
                </DialogContent>
              </>
            )}
          </Dialog>

          <Box
            sx={{
              mt: 8,
              textAlign: "center",
              p: 4,
              bgcolor: "grey.100",
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Ready to Order?
            </Typography>
            <Typography variant="body1" paragraph>
              Get your favorites delivered straight to your door.
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}
            >
              <Button
                variant="contained"
                color="success"
                size="large"
                href="https://food.grab.com"
                target="_blank"
              >
                Order on GrabFood
              </Button>
              <Button
                variant="contained"
                size="large"
                href="https://www.gojek.com/gofood/"
                target="_blank"
                sx={{ bgcolor: "#00aa13", "&:hover": { bgcolor: "#00880f" } }}
              >
                Order on GoFood
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default MenuPage;
