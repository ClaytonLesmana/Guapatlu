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
import Alert from "@mui/material/Alert";
import InfoIcon from "@mui/icons-material/Info";

interface MenuItem {
  id: number;
  name: string;
  briefDescription: string;
  detailedDescription: string;
  price: string;
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
      "Bakmi keriting/Lurus Kenyal Yang Gurih dengan kuah hangat dan lezat",
    detailedDescription:
      "Bakmi keriting/Lurus Kenyal Yang Gurih, Dilengkapi Kuah Berisi Daging Babi Cincang, Bakso Ikan, Dan Otak Otak Ikan Yang Hangat Dan Lezat. Dibuat dengan resep turun temurun khas Jambi, setiap mangkuk disajikan dengan cinta dan perhatian detail. Kuah kaldu yang dimasak berjam-jam menghasilkan rasa yang kaya dan mendalam.",
    price: "Rp.65.000",
    categories: ["Bakmi", "Main"],
    image: "/bakmi jhambi.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
    variations: [
      { name: "Mie Kecil", image: "/bakmi jhambi.jpg" },
      { name: "Mie Lebar", image: "/bakmi lebar.jpg" },
      { name: "Mie Ijo", image: "/bakmi jhambi.jpg" },
      { name: "Kwetiaw", image: "/bakmi jhambi.jpg" },
      { name: "Bihun", image: "/Misoa Guapatlu.jpg" },
    ],
  },
  {
    id: 4,
    name: "Lapchiong",
    briefDescription: "Sosis Kering Daging Babi Yang Cocok Jadi Topping Bakmi",
    detailedDescription:
      "Lapchiong adalah sosis kering daging babi premium yang dimasak dengan sempurna. Rasanya yang manis-gurih dan teksturnya yang kenyal menjadikannya topping favorit untuk melengkapi bakmi. Setiap porsi dipotong dengan ukuran yang pas untuk memberikan pengalaman rasa yang maksimal.",
    price: "$6.99",
    categories: ["Sides"],
    image: "/Lapciong.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 5,
    name: "Siomay Babi Udang (Isi 2)",
    briefDescription:
      "Siomay Hangat Homemade, Berisi Daging Babi Dan Udang Yang Fresh",
    detailedDescription:
      "Siomay Hangat Homemade, Berisi Daging Babi Dan Udang Yang Fresh. Harga Untuk 1 Porsi (2pcs). Dibuat setiap hari dengan bahan-bahan pilihan, siomay kami memiliki tekstur yang lembut dan rasa yang kaya. Kulit siomay yang tipis membungkus isian daging babi dan udang yang juicy. Disajikan hangat dengan saus spesial.",
    price: "$6.99",
    categories: ["Sides"],
    image: "/Siomay.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 6,
    name: "KULIT PANGSIT GORENG",
    briefDescription: "Kulit pangsit goreng renyah sebagai pelengkap",
    detailedDescription:
      "Kulit pangsit yang digoreng hingga crispy dan renyah sempurna. Cocok sebagai topping tambahan untuk bakmi atau dimakan langsung sebagai camilan. Teksturnya yang garing dan gurih memberikan dimensi rasa dan tekstur yang berbeda pada hidangan Anda. Digoreng fresh setiap order.",
    price: "$6.99",
    categories: ["Sides"],
    image: "/pangsit goreng.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "",
  },
  {
    id: 7,
    name: "PANGSIT REBUS (4PC)",
    briefDescription:
      "Pangsit Rebus Isi Babi dan udang, Guriiihh Nagiiiih Bangeeet",
    detailedDescription:
      "Pangsit Rebus Isi Babi dan udang, Guriiihh Nagiiiih Bangeeet Gak Cukup 1 Makannya. Di Sajikan Nyemek2 Gitu Ya, Tapi Kalo Mau Minta Extra Kuah Boleh Aja, Kasih Notes Ya. Setiap pangsit dibuat dengan tangan, memastikan isian yang padat dan kulit yang pas. Kuahnya yang gurih dan hangat membuat pangsit ini menjadi favorit pelanggan.",
    price: "$6.99",
    categories: ["Sides"],
    image: "/pangsit.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 8,
    name: "Telor Omega Kecap (1pc)",
    briefDescription:
      "Telor Omega Marinated, Gurih, Padat Texture Nya, Enyaaak",
    detailedDescription:
      "Telor Omega Marinated, Gurih, Padat Texture Nya, Enyaaak, Cuco Mendampingi Bakmi. Telur omega yang direndam dalam kecap spesial hingga meresap sempurna. Teksturnya yang padat namun lembut, dengan rasa gurih-manis yang pas. Setiap telur dimasak dengan durasi yang tepat untuk menghasilkan konsistensi yang sempurna.",
    price: "$6.99",
    categories: ["Sides"],
    image: "/telor omega.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 9,
    name: "KUAH JAMBI ISI DAGING",
    briefDescription: "Kuah khas Jambi dengan daging cincang dan bakso ikan",
    detailedDescription:
      "ISI: DAGING CINCANG, BAKSO IKAN, FISH CAKE. KUAH NYA NGALLLDDUU BANGETTT RASA NYA GOOONG BANGET, CUZZZ DI COBA. Kuah kaldu yang dimasak dengan bumbu rahasia selama berjam-jam menghasilkan rasa yang kaya dan mendalam. Isian daging cincang yang melimpah dan bakso ikan yang kenyal membuat kuah ini bisa menjadi hidangan tersendiri atau pelengkap bakmi Anda.",
    price: "$6.99",
    categories: ["Sides"],
    image: "/Kuah Jambi.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 10,
    name: "SATE BABI GUAPATLU (1pc)",
    briefDescription: "Sate babi khas Guapatlu yang juicy dan beraroma",
    detailedDescription:
      "Sate babi signature Guapatlu yang dipanggang dengan sempurna. Daging babi pilihan yang dimarinasi dengan bumbu spesial, menghasilkan rasa yang gurih dan sedikit manis. Dipanggang hingga permukaannya caramelized namun tetap juicy di dalamnya. Cocok sebagai lauk tambahan atau camilan.",
    price: "$6.99",
    categories: ["Sides"],
    image: "/Sate Babi.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 11,
    name: "Bakso Goreng (1 Pc)",
    briefDescription: "Bakso goreng pelengkap bakmi. Harga per/pcs",
    detailedDescription:
      "Bakso ikan yang digoreng hingga crispy di luar namun tetap lembut di dalam. Bakso goreng ini menjadi topping favorit untuk menambah tekstur dan rasa pada bakmi Anda. Setiap bakso digoreng fresh dengan minyak bersih untuk menjaga kualitas dan kerenyahan. Harga per pieces.",
    price: "$6.99",
    categories: ["Sides"],
    image: "/bakso goreng.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 12,
    name: "Liang Teh",
    briefDescription: "Teh herbal tradisional yang menyegarkan",
    detailedDescription:
      "Liang Teh adalah minuman herbal tradisional yang menyegarkan dan menyehatkan. Terbuat dari campuran herbal pilihan yang direbus dengan sempurna, menghasilkan rasa yang sedikit manis dan sangat menyegarkan. Cocok untuk menemani hidangan berat dan membantu pencernaan. Disajikan dingin atau panas sesuai selera.",
    price: "$6.99",
    categories: ["Drinks"],
    image: "/liangteh.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 13,
    name: "Susu Kacang",
    briefDescription: "Susu kacang homemade yang creamy dan bergizi",
    detailedDescription:
      "Susu kacang homemade yang dibuat fresh setiap hari dari kacang tanah pilihan. Teksturnya yang creamy dan rasanya yang gurih-manis alami menjadikannya minuman favorit untuk menemani bakmi. Kaya akan protein dan nutrisi, susu kacang kami tidak menggunakan pengawet atau pemanis buatan. Disajikan dingin untuk kesegaran maksimal.",
    price: "$6.99",
    categories: ["Drinks"],
    image: "/susuKacang.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 14,
    name: "Paket Bakmi Set + 1 Bakmi Polos",
    briefDescription: "Paket hemat 1 set bakmi lengkap + 1 bakmi polos",
    detailedDescription:
      "Paket spesial yang cocok untuk berbagi atau untuk Anda yang lapar. Terdiri dari 1 set bakmi lengkap dengan topping dan kuah, ditambah 1 porsi bakmi polos. Hemat dan mengenyangkan. Bakmi polos dapat Anda custom sendiri dengan topping tambahan sesuai selera.",
    price: "$6.99",
    categories: ["Bundling"],
    image: "https://source.unsplash.com/random/400x300/?fries",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 15,
    name: "Paket Bakmi Set + 2pcs Bakso Goreng",
    briefDescription: "Paket hemat bakmi set dengan 2pcs bakso goreng",
    detailedDescription:
      "Paket kombinasi sempurna antara bakmi set lengkap dengan tambahan 2pcs bakso goreng yang crispy. Bakso goreng menambah tekstur renyah dan rasa gurih pada hidangan Anda. Harga lebih hemat dibandingkan beli terpisah. Cocok untuk yang suka variasi tekstur dalam setiap suapan.",
    price: "$6.99",
    categories: ["Bundling"],
    image: "https://source.unsplash.com/random/400x300/?fries",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 16,
    name: "Paket Bakmi Set + 2pcs Siomay",
    briefDescription: "Paket hemat bakmi set dengan 2pcs siomay babi udang",
    detailedDescription:
      "1 Set Bakmi lengkap dengan kuah dan topping, Dengan Tambahan 2pcs Siomay Babi Udang Yang Hangat Dan Lezat. Harga Lebih Hemat dibandingkan membeli secara terpisah. Siomay homemade kami yang berisi daging babi dan udang segar menjadi pelengkap sempurna untuk bakmi. Paket favorit pelanggan setia kami.",
    price: "$6.99",
    categories: ["Bundling"],
    image: "https://source.unsplash.com/random/400x300/?fries",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 17,
    name: "Chasio Topping",
    briefDescription: "Daging babi panggang manis khas Tionghoa",
    detailedDescription:
      "Chasio atau char siu adalah daging babi panggang dengan marinasi khas Tionghoa. Dimarinasi dengan saus spesial yang memberikan rasa manis gurih yang khas, kemudian dipanggang hingga permukaannya caramelized sempurna. Tekstur luar yang sedikit crispy namun dalam yang juicy dan lembut. Cocok sebagai topping bakmi atau lauk nasi. Setiap slice dipotong dengan ketebalan yang pas.",
    price: "$6.99",
    categories: ["Sides", "Main"],
    image: "https://source.unsplash.com/random/400x300/?fries",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 18,
    name: "Chasio + Siobak",
    briefDescription: "Kombinasi sempurna daging babi panggang dan crispy pork",
    detailedDescription:
      "Kombinasi terbaik dari dua jenis olahan daging babi premium: Chasio yang manis gurih dan Siobak yang crispy diluar lembut didalam. Chasio memberikan rasa manis-gurih dengan tekstur yang juicy, sementara Siobak menghadirkan kerenyahan kulit dengan daging yang lembut. Duo sempurna yang wajib dicoba. Cocok sebagai hidangan utama atau topping bakmi untuk pengalaman rasa yang lengkap.",
    price: "$6.99",
    categories: ["Sides", "Main"],
    image: "https://source.unsplash.com/random/400x300/?fries",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 19,
    name: "Trio Pork Platter",
    briefDescription: "Platter istimewa dengan 3 jenis olahan daging babi",
    detailedDescription:
      "Platter premium yang menampilkan tiga jenis olahan daging babi terbaik kami: Chasio yang manis-gurih, Siobak yang crispy, dan daging babi premium lainnya. Sajian yang sempurna untuk berbagi atau bagi pecinta daging babi. Setiap jenis daging dimasak dengan teknik berbeda untuk menghasilkan rasa dan tekstur yang unik. Porsi besar yang mengenyangkan dan memuaskan.",
    price: "$6.99",
    categories: ["Sides", "Main"],
    image: "/Trio Pork (Platter).jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
    variations: [
      { name: "Mie Kecil", image: "/bakmi jhambi.jpg" },
      { name: "Mie Lebar", image: "/bakmi lebar.jpg" },
      { name: "Mie Ijo", image: "/bakmi jhambi.jpg" },
      { name: "Kwetiaw", image: "/bakmi jhambi.jpg" },
      { name: "Bihun", image: "/Misoa Guapatlu.jpg" },
    ],
  },
  {
    id: 20,
    name: "Duo Pork Platter",
    briefDescription: "Platter dengan 2 jenis olahan daging babi pilihan",
    detailedDescription:
      "Platter berisi dua jenis olahan daging babi premium kami. Kombinasi yang pas untuk yang ingin menikmati variasi tanpa terlalu banyak. Biasanya terdiri dari Chasio dan Siobak, atau kombinasi lain sesuai ketersediaan. Porsi yang cukup untuk 1-2 orang. Cocok dijadikan lauk atau dimakan dengan nasi putih hangat.",
    price: "$6.99",
    categories: ["Sides", "Main"],
    image: "/Trio Pork (Platter).jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
    variations: [
      { name: "Mie Kecil", image: "/bakmi jhambi.jpg" },
      { name: "Mie Lebar", image: "/bakmi lebar.jpg" },
      { name: "Mie Ijo", image: "/bakmi jhambi.jpg" },
      { name: "Kwetiaw", image: "/bakmi jhambi.jpg" },
      { name: "Bihun", image: "/Misoa Guapatlu.jpg" },
    ],
  },
  {
    id: 21,
    name: "Telor 1/2 Matang",
    briefDescription: "Telur setengah matang dengan kuning yang creamy",
    detailedDescription:
      "Telur ayam kampung yang dimasak setengah matang dengan timing yang sempurna. Putih telur yang sudah set namun kuning telur yang masih creamy dan runny. Cocok sebagai topping bakmi atau dimakan dengan nasi. Telur kami menggunakan telur ayam kampung yang lebih bergizi dan memiliki kuning yang lebih pekat. Setiap telur dimasak dengan perhatian detail untuk konsistensi yang sempurna.",
    price: "$6.99",
    categories: ["Sides"],
    image: "/telor.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 22,
    name: "Telor 1/2 Matang + Kopi Hitam",
    briefDescription: "Paket sarapan tradisional: telur setengah matang & kopi",
    detailedDescription:
      "Paket sarapan klasik ala kopi tiam: telur setengah matang dengan kuning yang creamy, disajikan bersama secangkir kopi hitam yang kuat dan aromatik. Cara makan tradisional: pecahkan telur, tambahkan sedikit kecap dan merica, aduk rata, dan cocol dengan roti atau dimakan langsung. Kopi hitam kami diseduh dari biji kopi pilihan yang disangrai dengan sempurna. Kombinasi yang sempurna untuk memulai hari atau sebagai camilan sore.",
    price: "$6.99",
    categories: ["Bundling"],
    image: "/Telor+kopi.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 23,
    name: "Kopi Vietnam",
    briefDescription: "Kopi Vietnam kental manis dengan es",
    detailedDescription:
      "Kopi Vietnam yang terkenal dengan rasa kental dan manis. Dibuat dari biji kopi robusta pilihan yang diseduh dengan metode drip tradisional Vietnam, kemudian dicampur dengan susu kental manis. Disajikan dengan es untuk kesegaran maksimal. Rasa kopi yang kuat berpadu sempurna dengan manisnya susu, menciptakan minuman yang adiktif dan menyegarkan.",
    price: "$6.99",
    categories: ["Drinks"],
    image: "/Kopi Vietnam.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 24,
    name: "Black Coffee",
    briefDescription: "Kopi hitam murni tanpa gula untuk pecinta kopi sejati",
    detailedDescription:
      "Kopi hitam murni dari biji kopi pilihan yang disangrai dan diseduh dengan sempurna. Tanpa tambahan gula atau susu, mempertahankan rasa asli kopi yang kaya dan kompleks. Cocok untuk pecinta kopi sejati yang menghargai kualitas biji kopi. Bisa disajikan panas atau dingin sesuai selera. Tinggi kafein untuk boost energi Anda.",
    price: "$6.99",
    categories: ["Drinks"],
    image: "/kopi hitam.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 25,
    name: "Jeruk Songkit",
    briefDescription: "Jus jeruk segar diperas dengan campuran herbal",
    detailedDescription:
      "Minuman segar dari perasan jeruk asli yang dicampur dengan bahan herbal songkit. Rasa asam segar dari jeruk berpadu dengan sedikit rasa manis dan aroma herbal yang khas. Sangat menyegarkan dan membantu pencernaan. Cocok untuk menemani makanan berat atau sebagai minuman penyegar di siang hari. Dibuat fresh setiap order tanpa pengawet.",
    price: "$6.99",
    categories: ["Drinks"],
    image: "/jeruk songkit.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 26,
    name: "Es Teh Manis",
    briefDescription: "Teh manis dingin klasik yang menyegarkan",
    detailedDescription:
      "Es teh manis klasik yang tidak pernah salah. Teh diseduh fresh dengan takaran yang pas, diberi gula secukupnya, dan disajikan dengan es batu yang cukup. Rasa teh yang tidak terlalu kuat namun cukup untuk memberikan rasa, dengan tingkat manis yang pas. Minuman perfect untuk menemani segala jenis makanan. Bisa request tingkat manisnya.",
    price: "$6.99",
    categories: ["Drinks"],
    image: "/es teh.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 27,
    name: "Es Teh (Refill)",
    briefDescription: "Refill es teh manis dengan harga spesial",
    detailedDescription:
      "Refill es teh manis untuk pelanggan dine-in dengan harga lebih murah. Teh diseduh fresh dan Anda bisa minta tingkat manis sesuai selera. Es batu yang cukup banyak menjaga minuman tetap dingin. Perfect untuk yang sangat haus atau makan dalam porsi besar. Tersedia khusus untuk pelanggan yang makan di tempat.",
    price: "$6.99",
    categories: ["Drinks"],
    image: "/es teh.png",
    grabLink: "",
    gojekLink: "",
  },
  {
    id: 28,
    name: "Nipis Madu",
    briefDescription: "Air jeruk nipis dengan madu asli yang menyehatkan",
    detailedDescription:
      "Minuman sehat dari perasan jeruk nipis segar yang dicampur dengan madu asli. Kombinasi vitamin C dari jeruk nipis dan khasiat madu menciptakan minuman yang tidak hanya menyegarkan tapi juga menyehatkan. Rasa asam segar dari nipis berpadu manis alami dari madu. Cocok untuk meningkatkan imunitas dan membantu pencernaan. Disajikan dingin dengan es.",
    price: "$6.99",
    categories: ["Drinks"],
    image: "/nipis madu.png",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 29,
    name: "Le Minerale",
    briefDescription: "Air mineral kemasan Le Minerale",
    detailedDescription:
      "Air mineral kemasan Le Minerale untuk menemani hidangan Anda. Air yang jernih dan menyegarkan, tersedia dalam kemasan botol yang praktis. Cocok untuk yang lebih suka minuman plain atau sedang diet. Selalu disajikan dingin untuk kesegaran maksimal.",
    price: "$6.99",
    categories: ["Drinks"],
    image: "/leminerale.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 30,
    name: "Es Kundur Jelly",
    briefDescription: "Minuman segar dengan kundur dan jelly kenyal",
    detailedDescription:
      "Minuman tradisional yang menyegarkan dengan potongan kundur (labu siam) yang manis dan jelly yang kenyal. Disajikan dengan sirup gula aren dan es serut atau es batu. Tekstur yang beragam dari kundur yang lembut dan jelly yang kenyal memberikan sensasi unik di setiap tegukan. Minuman yang sempurna untuk cuaca panas dan sangat mengenyangkan.",
    price: "$6.99",
    categories: ["Drinks"],
    image: "/Kopi Vietnam.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
  },
  {
    id: 31,
    name: "Teh Pucuk",
    briefDescription: "Teh dalam kemasan Teh Pucuk yang praktis",
    detailedDescription:
      "Teh Pucuk kemasan dalam botol yang praktis dan menyegarkan. Teh asli dengan rasa yang ringan dan tidak terlalu manis. Cocok untuk menemani makanan atau sebagai minuman penyegar. Kemasan botol memudahkan untuk dibawa dan diminum. Selalu tersedia dingin dan siap disajikan.",
    price: "$6.99",
    categories: ["Drinks"],
    image: "/teh pucuk.jpg",
    grabLink: "https://food.grab.com/id/en/restaurant/bakmi-guapatlu",
    gojekLink: "https://gofood.link/u/bakmi-guapatlu",
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
                    height="300"
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
                      {selectedItem.price}
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
                                selectedVariation === index ? "bold" : "normal",
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

                  <Typography variant="body1" color="text.secondary" paragraph>
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
                        bgcolor: selectedItem.grabLink ? "#00B14F" : "grey.400",
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
