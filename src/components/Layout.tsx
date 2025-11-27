import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import FloatingWhatsApp from "./FloatingWhatsApp";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
      <FloatingWhatsApp />
    </Box>
  );
}
