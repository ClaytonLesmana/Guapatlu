import React, { useState } from "react";
import Head from "next/head";
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
import Alert from "@mui/material/Alert";
import InfoIcon from "@mui/icons-material/Info";
import {
  generateBreadcrumbStructuredData,
  generateMenuItemStructuredData,
} from "../config/structuredData";

interface MenuItem {
  id: number;
  name: string;
  briefDescription: string;
  detailedDescription: string;
  categories: string[];
  image: string;
  grabLink?: string;
  gojekLink?: string;
  variations?: {
    name: string;
    image: string;
  }[];
}

const categories = ["All", "Bundling", "Bakmi", "Main", "Sides", "Drinks"];

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Bakmi Khas Jambi",
    briefDescription:
      "Bakmi khas Jambi dengan mie kenyal, kuah gurih hangat, dan topping babi autentik.",
    detailedDescription:
      "Bakmi khas Jambi ala Guapatlu dengan mie kenyal, kuah kaldu gurih, serta isian daging babi cincang dan bakso ikan yang melimpah. Rasa klasik turun-temurun yang bikin nagih dari suapan pertama.",
    categories: ["Bakmi", "Main"],
    image: "/bakmi jhambi.jpg",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025060309463736125&sourceID=20251218_214308_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025060309463736125",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
    variations: [
      { name: "Mie Kecil", image: "/bakmi jhambi.jpg" },
      { name: "Mie Lebar", image: "/bakmi lebar.jpg" },
      { name: "Mie Ijo", image: "/mie hijau.png" },
      { name: "Kwetiaw", image: "/kwetiaw.png" },
      { name: "Bihun", image: "/bihun.png" },
    ],
  },
  {
    id: 2,
    name: "Lapchiong",
    briefDescription:
      "Lapchiong babi manis-gurih yang bikin bakmi makin mantap.",
    detailedDescription:
      "Lapchiong babi premium dengan aroma khas dan rasa manis-gurih yang kaya. Topping favorit untuk menambah kedalaman rasa bakmi.",
    categories: ["Sides"],
    image: "/Lapciong.jpg",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025071109470781794&sourceID=20251218_214626_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025071109470781794",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 3,
    name: "Siomay Babi Udang (Isi 2)",
    briefDescription:
      "Siomay homemade isi babi dan udang yang lembut dan juicy.",
    detailedDescription:
      "Siomay homemade dengan isian babi dan udang segar yang padat dan lembut. Gurih, juicy, dan selalu disajikan hangat.",
    categories: ["Sides"],
    image: "/Siomay.jpg",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025061606572056415&sourceID=20251218_214604_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025061606572056415",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 4,
    name: "KULIT PANGSIT GORENG",
    briefDescription: "Kulit pangsit goreng super renyah dan gurih.",
    detailedDescription:
      "Kulit pangsit digoreng hingga keemasan dan crispy. Pelengkap bakmi yang bikin tekstur makin seru.",
    categories: ["Sides"],
    image: "/pangsit goreng.jpg",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025072301572163348&sourceID=20251218_214641_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025072301572163348",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 5,
    name: "PANGSIT REBUS (4PC)",
    briefDescription: "Pangsit rebus babi udang dengan kuah gurih nagih.",
    detailedDescription:
      "Pangsit rebus isi babi dan udang dengan kuah hangat yang gurih dan comforting. Disajikan nyemek dan bikin pengen nambah.",
    categories: ["Sides"],
    image: "/pangsit.jpg",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025081511253828814&sourceID=20251218_214705_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025081511253828814",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 6,
    name: "Telor Omega Kecap (1pc)",
    briefDescription: "Telur omega kecap gurih dengan tekstur padat.",
    detailedDescription:
      "Telur omega dimarinasi kecap spesial hingga bumbu meresap sempurna. Simple tapi bikin bakmi makin nikmat.",
    categories: ["Sides"],
    image: "/telor omega.png",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025081511300230907&sourceID=20251218_214729_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025081511300230907",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 7,
    name: "KUAH JAMBI ISI DAGING",
    briefDescription: "Kuah kaldu khas Jambi yang kaya rasa dan isian.",
    detailedDescription:
      "Kuah kaldu dimasak lama hingga gurih dan bold. Berisi daging cincang, bakso ikan, dan fish cake yang memuaskan.",
    categories: ["Sides"],
    image: "/Kuah Jambi.jpg",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025102911254468474&sourceID=20251218_214747_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025102911254468474",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 8,
    name: "SATE BABI GUAPATLU (1pc)",
    briefDescription: "Sate babi juicy dengan aroma bakaran menggoda.",
    detailedDescription:
      "Daging babi pilihan dimarinasi bumbu khas lalu dipanggang hingga juicy dan caramelized. Gurih, wangi, dan penuh rasa.",
    categories: ["Sides"],
    image: "/Sate Babi.jpg",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025103004045529487&sourceID=20251218_214806_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025103004045529487",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 9,
    name: "Nasi Campur",
    briefDescription:
      "Nasi campur khas Jambi dengan pilihan daging babi gurih, manis, dan crispy.",
    detailedDescription:
      "Nasi hangat disajikan dengan aneka lauk babi khas Guapatlu seperti chasio manis-gurih dan siobak crispy. Setiap porsi penuh rasa, kaya tekstur, dan bikin puas dari suapan pertama.",
    categories: ["Main"],
    image: "/nasi campur.png",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025120310510597447&sourceID=20251218_215140_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025120310510597447",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 10,
    name: "Bakso Goreng",
    briefDescription: "Bakso goreng crispy di luar, lembut di dalam.",
    detailedDescription:
      "Bakso ikan digoreng fresh hingga renyah dan gurih. Cocok sebagai topping atau camilan pendamping bakmi.",
    categories: ["Sides"],
    image: "/bakso goreng.jpg",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025061606550760920&sourceID=20251218_214546_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025061606550760920",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 11,
    name: "Liang Teh",
    briefDescription: "Liang teh herbal segar dan menenangkan.",
    detailedDescription:
      "Minuman herbal tradisional dengan rasa ringan dan menyegarkan. Pas untuk menyeimbangkan hidangan gurih.",
    categories: ["Drinks"],
    image: "/liangteh.png",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025071110343164394&sourceID=20251218_215107_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025071110343164394",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 12,
    name: "Susu Kacang",
    briefDescription: "Susu kacang homemade creamy dan segar.",
    detailedDescription:
      "Susu kacang buatan harian dengan rasa gurih-manis alami. Creamy dan menyegarkan tanpa rasa eneg.",
    categories: ["Drinks"],
    image: "/susuKacang.png",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025071110400990128&sourceID=20251218_215122_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025071110400990128",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 13,
    name: "Paket Bakmi Set + 1 Bakmi Polos",
    briefDescription: "Paket hemat 1 set bakmi lengkap + 1 bakmi polos",
    detailedDescription:
      "Satu set bakmi lengkap ditambah satu porsi bakmi polos. Cocok untuk makan puas atau berbagi.",
    categories: ["Bundling"],
    image: "/paket1.jpeg",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025061802493508826&sourceID=20251218_214928_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025061802493508826",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 14,
    name: "Paket Bakmi Set + 2pcs Bakso Goreng",
    briefDescription: "Bakmi set lengkap dengan tambahan bakso goreng crispy.",
    detailedDescription:
      "Bakmi set khas Guapatlu dengan 2 bakso goreng renyah sebagai pelengkap. Lebih puas dan lebih hemat.",
    categories: ["Bundling"],
    image: "/paket2.jpeg",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025061802545109720&sourceID=20251218_214946_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025061802545109720",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 15,
    name: "Paket Bakmi Set + 2pcs Siomay",
    briefDescription: "Bakmi set dengan siomay babi udang hangat.",
    detailedDescription:
      "Bakmi lengkap dengan tambahan 2 siomay babi udang homemade. Kombinasi favorit pelanggan setia.",
    categories: ["Bundling"],
    image: "/paket3.jpeg",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025061802570139022&sourceID=20251218_215012_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025061802570139022",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 16,
    name: "Chasio Topping",
    briefDescription: "Chasio babi panggang manis-gurih khas Tionghoa.",
    detailedDescription:
      "Chasio dimarinasi saus spesial lalu dipanggang hingga caramelized. Juicy, manis-gurih, dan kaya aroma.",
    categories: ["Sides", "Main"],
    image: "/chasio.png",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025071109470781794&sourceID=20251218_214626_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025071109470781794",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 17,
    name: "Chasio + Siobak",
    briefDescription: "Perpaduan chasio juicy dan siobak crispy.",
    detailedDescription:
      "Kombinasi daging babi panggang manis-gurih dan siobak dengan kulit super renyah. Duo wajib untuk pork lovers.",
    categories: ["Sides", "Main"],
    image: "/chasio and siobak.png",
    grabLink: "",
    gojekLink: "",
  },
  {
    id: 18,
    name: "Trio Pork Platter",
    briefDescription: "Platter premium berisi tiga olahan babi favorit.",
    detailedDescription:
      "Tiga jenis olahan babi dalam satu platter: juicy, crispy, dan gurih. Cocok untuk berbagi atau makan puas.",
    categories: ["Sides", "Main"],
    image: "/trio platter.png",
    grabLink:
      "https://food.grab.com/id/en/restaurant/guapatlu-bakmi---kelapa-gading/6-C7DGWBMJMFXENA?exp_src=share&itemID=IDITE2025110806585534677&sourceID=20251218_214900_ED946BB6085E4D5985E18FB39CB7F776_MEXIS_IDITE2025110806585534677",
    gojekLink: "",
    variations: [
      { name: "Mie Kecil", image: "/trio platter.png" },
      { name: "Mie Lebar", image: "/trio platter.png" },
      { name: "Mie Ijo", image: "/trio platter.png" },
      { name: "Kwetiaw", image: "/trio platter.png" },
      { name: "Bihun", image: "/trio platter.png" },
    ],
  },
  {
    id: 19,
    name: "Duo Pork Platter",
    briefDescription: "Platter dua olahan babi pilihan.",
    detailedDescription:
      "Dua jenis daging babi premium dengan tekstur dan rasa berbeda. Pas untuk 1–2 orang.",
    categories: ["Sides", "Main"],
    image: "/duo platter.png",
    grabLink: "",
    gojekLink: "",
    variations: [
      { name: "Mie Kecil", image: "/duo platter.png" },
      { name: "Mie Lebar", image: "/duo platter.png" },
      { name: "Mie Ijo", image: "/duo platter.png" },
      { name: "Kwetiaw", image: "/duo platter.png" },
      { name: "Bihun", image: "/duo platter.png" },
    ],
  },
  {
    id: 20,
    name: "Telor 1/2 Matang",
    briefDescription: "Telur setengah matang dengan kuning creamy.",
    detailedDescription:
      "Telur dimasak dengan timing pas untuk kuning yang lumer. Cocok sebagai topping bakmi atau lauk.",
    categories: ["Sides"],
    image: "/telor.png",
    grabLink: "",
    gojekLink: "",
  },
  {
    id: 21,
    name: "Telor 1/2 Matang + Kopi Hitam",
    briefDescription: "Paket sarapan klasik ala kopitiam.",
    detailedDescription:
      "Telur setengah matang dipadukan dengan kopi hitam hangat. Simpel, tradisional, dan mengenyangkan.",
    categories: ["Bundling"],
    image: "/Telor+kopi.png",
    grabLink: " ",
    gojekLink: "",
  },
  {
    id: 22,
    name: "Kopi Vietnam",
    briefDescription: "Kopi Vietnam kental manis yang menyegarkan.",
    detailedDescription:
      "Kopi robusta diseduh drip lalu dipadukan susu kental manis. Bold, creamy, dan nikmat dingin.",
    categories: ["Drinks"],
    image: "/Kopi Vietnam.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "",
  },
  {
    id: 23,
    name: "Black Coffee",
    briefDescription: "Kopi hitam murni untuk pecinta kopi sejati.",
    detailedDescription:
      "Kopi hitam dengan rasa kuat dan aroma khas biji pilihan. Disajikan tanpa gula untuk rasa autentik.",
    categories: ["Drinks"],
    image: "/kopi hitam.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "",
  },
  {
    id: 24,
    name: "Jeruk Songkit",
    briefDescription: "Minuman jeruk segar dengan sentuhan herbal.",
    detailedDescription:
      "Perasan jeruk segar dipadukan dengan aroma herbal songkit. Segar, ringan, dan bantu pencernaan.",
    categories: ["Drinks"],
    image: "/jeruk songkit.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "",
  },
  {
    id: 25,
    name: "Es Teh",
    briefDescription: "Es teh klasik yang selalu pas.",
    detailedDescription:
      "Teh diseduh fresh dengan tingkat manis seimbang. Teman terbaik untuk semua menu.",
    categories: ["Drinks"],
    image: "/es teh.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "",
  },
  {
    id: 26,
    name: "Nipis Madu",
    briefDescription: "Minuman sehat jeruk nipis dan madu.",
    detailedDescription:
      "Perasan jeruk nipis segar dengan madu asli. Asam-manis menyegarkan dan menyehatkan.",
    categories: ["Drinks"],
    image: "/nipis madu.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "",
  },
  {
    id: 27,
    name: "Le Minerale",
    briefDescription: "Air mineral kemasan Le Minerale",
    detailedDescription:
      "Air mineral kemasan Le Minerale untuk menemani hidangan Anda. Air yang jernih dan menyegarkan, tersedia dalam kemasan botol yang praktis. Cocok untuk yang lebih suka minuman plain atau sedang diet. Selalu disajikan dingin untuk kesegaran maksimal.",
    categories: ["Drinks"],
    image: "/leminerale.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "",
  },
  {
    id: 28,
    name: "Es Kundur Jelly",
    briefDescription: "Minuman segar dengan kundur dan jelly kenyal.",
    detailedDescription:
      "Kundur lembut dan jelly kenyal disajikan dengan sirup dan es. Manis, segar, dan unik.",
    categories: ["Drinks"],
    image: "/es kendur jelly.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink:
      "https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a",
  },
  {
    id: 29,
    name: "Teh Pucuk",
    briefDescription: "Teh kemasan ringan dan praktis.",
    detailedDescription:
      "Teh Pucuk dengan rasa ringan dan tidak berlebihan. Disajikan dingin dan siap dinikmati.",
    categories: ["Drinks"],
    image: "/teh pucuk.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "",
  },
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedVariation, setSelectedVariation] = useState<number>(0);

  const handleCategoryChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setSelectedCategory(newValue);
  };

  const handleOpen = (item: MenuItem) => {
    setSelectedItem(item);
    setSelectedVariation(0);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
    setSelectedVariation(0);
  };

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.categories.includes(selectedCategory));

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Beranda", url: "https://guapatlu.com/" },
    { name: "Menu", url: "https://guapatlu.com/menu" },
  ]);

  const menuStructuredData = generateMenuItemStructuredData(menuItems);

  return (
    <>
      <Head>
        <title>Menu Lengkap | Bakmi Khas Jambi Guapatlu</title>
        <meta
          name="description"
          content="Jelajahi menu lengkap Bakmi Khas Jambi Guapatlu. Dari Bakmi Jambi signature, Misoa, Kwetiaw, hingga side dishes seperti Sate Babi, Siomay, dan berbagai minuman segar. Pesan langsung via Gojek & Grab!"
        />
        <link rel="canonical" href="https://guapatlu.com/menu" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guapatlu.com/menu" />
        <meta
          property="og:title"
          content="Menu Lengkap - Bakmi Khas Jambi Guapatlu"
        />
        <meta
          property="og:description"
          content="Jelajahi menu lengkap Bakmi Khas Jambi Guapatlu. Dari Bakmi Jambi signature, Misoa, Kwetiaw, hingga side dishes seperti Sate Babi, Siomay, dan berbagai minuman segar."
        />
        <meta
          property="og:image"
          content="https://guapatlu.com/bakmi%20jhambi.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(menuStructuredData),
          }}
        />
      </Head>
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

            {/* Price Disclaimer */}
            <Alert
              severity="info"
              icon={<InfoIcon />}
              sx={{
                mb: 4,
                maxWidth: 800,
                mx: "auto",
                borderRadius: 2,
                bgcolor: "#e3f2fd",
                border: "1px solid #2196f3",
              }}
            >
              <Typography variant="body2" fontWeight="bold">
                Catatan: Harga online dan offline dapat berbeda tergantung
                platform pengiriman.
              </Typography>
            </Alert>

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
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 6,
                      },
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
                        {/* <Chip label={item.price} color="primary" size="small" /> */}
                      </Box>
                      {item.categories.length > 0 && (
                        <Box
                          sx={{
                            display: "flex",
                            gap: 0.5,
                            mb: 1,
                            flexWrap: "wrap",
                          }}
                        >
                          {item.categories.map((cat) => (
                            <Chip
                              key={cat}
                              label={cat}
                              size="small"
                              variant="outlined"
                              sx={{ fontSize: "0.7rem" }}
                            />
                          ))}
                        </Box>
                      )}
                      <Typography variant="body2" color="text.secondary">
                        {item.briefDescription}
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
                      height="600"
                      image={
                        selectedItem.variations
                          ? selectedItem.variations[selectedVariation].image
                          : selectedItem.image
                      }
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
                        {/* {selectedItem.price} */}
                      </Typography>
                    </Box>

                    {selectedItem.variations && (
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="h6"
                          gutterBottom
                          fontWeight="bold"
                          sx={{ mb: 2 }}
                        >
                          Pilih Jenis Mie:
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                            flexWrap: "wrap",
                          }}
                        >
                          {selectedItem.variations.map((variation, index) => (
                            <Chip
                              key={index}
                              label={variation.name}
                              onClick={() => setSelectedVariation(index)}
                              color={
                                selectedVariation === index
                                  ? "primary"
                                  : "default"
                              }
                              variant={
                                selectedVariation === index
                                  ? "filled"
                                  : "outlined"
                              }
                              sx={{
                                cursor: "pointer",
                                fontSize: "0.9rem",
                                py: 2.5,
                                px: 1,
                                fontWeight:
                                  selectedVariation === index
                                    ? "bold"
                                    : "normal",
                                "&:hover": {
                                  bgcolor:
                                    selectedVariation === index
                                      ? "primary.dark"
                                      : "grey.100",
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    )}

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                    >
                      {selectedItem.detailedDescription}
                    </Typography>

                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      Order Now via:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        startIcon={<DeliveryDiningIcon />}
                        {...(selectedItem.grabLink && {
                          href: selectedItem.grabLink,
                          target: "_blank",
                        })}
                        disabled={!selectedItem.grabLink}
                        sx={{
                          bgcolor: selectedItem.grabLink
                            ? "#00B14F"
                            : "grey.400",
                          "&:hover": {
                            bgcolor: selectedItem.grabLink
                              ? "#009e47"
                              : "grey.400",
                          },
                          py: 1.5,
                          fontWeight: "bold",
                        }}
                      >
                        {selectedItem.grabLink
                          ? "Order on GrabFood"
                          : "GrabFood - Unavailable"}
                      </Button>
                      <Button
                        variant="contained"
                        size="large"
                        startIcon={<DeliveryDiningIcon />}
                        {...(selectedItem.gojekLink && {
                          href: selectedItem.gojekLink,
                          target: "_blank",
                        })}
                        disabled={!selectedItem.gojekLink}
                        sx={{
                          bgcolor: selectedItem.gojekLink
                            ? "#00AA13"
                            : "grey.400",
                          "&:hover": {
                            bgcolor: selectedItem.gojekLink
                              ? "#00880f"
                              : "grey.400",
                          },
                          py: 1.5,
                          fontWeight: "bold",
                        }}
                      >
                        {selectedItem.gojekLink
                          ? "Order on GoFood"
                          : "GoFood - Unavailable"}
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
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 2,
                }}
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
                  href="https://gofood.co.id/en/jakarta/restaurant/guapatlu-bakmi-a531b605-0194-4620-b0c9-0ff31bf92f0a"
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
    </>
  );
};

export default MenuPage;
