import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SvgIcon from "@mui/material/SvgIcon";
import { generateBreadcrumbStructuredData } from "../config/structuredData";

const ContactPage = () => {
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: 'Beranda', url: 'https://guapatlu.com/' },
    { name: 'Kontak', url: 'https://guapatlu.com/contact' },
  ]);

  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: 'https://guapatlu.com/contact',
    name: 'Hubungi Guapatlu',
    description: 'Hubungi Guapatlu Bakmi Khas Jambi untuk reservasi, pertanyaan, atau feedback. Kami siap melayani Anda.',
    mainEntity: {
      '@type': 'Restaurant',
      name: 'Guapatlu',
      telephone: '+62 857-7777-3839',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Boulevard Raya Blok WA 2 No.25, RT.11/RW.15',
        addressLocality: 'Kelapa Gading Timur',
        addressRegion: 'DKI Jakarta',
        postalCode: '14240',
        addressCountry: 'ID',
      },
    },
  };

  return (
    <>
      <Head>
        <title>Kontak Kami | Guapatlu Bakmi Khas Jambi</title>
        <meta
          name="description"
          content="Hubungi Guapatlu Bakmi Khas Jambi di Kelapa Gading. Alamat: Jl. Boulevard Raya Blok WA 2 No.25, Jakarta Utara. Telp: +62 857-7777-3839. Buka setiap hari!"
        />
        <link rel="canonical" href="https://guapatlu.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guapatlu.com/contact" />
        <meta
          property="og:title"
          content="Kontak Kami - Guapatlu Bakmi Khas Jambi"
        />
        <meta
          property="og:description"
          content="Hubungi Guapatlu Bakmi Khas Jambi di Kelapa Gading. Alamat: Jl. Boulevard Raya Blok WA 2 No.25, Jakarta Utara."
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
            __html: JSON.stringify(contactStructuredData),
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
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6 }}
          >
            We'd love to hear from you. Visit us, call us, or send us a message.
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold", mb: 3 }}
                >
                  Get in Touch
                </Typography>

                <Box sx={{ display: "flex", mb: 3 }}>
                  <LocationOnIcon
                    color="primary"
                    sx={{ mr: 2, fontSize: 30 }}
                  />
                  <Box>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="body1" color="text.secondary">
                      Jl. Boulevard Raya Blok WA 2 No.25, RT.11/RW.15, Klp.
                      Gading Tim., Kec. Klp. Gading, Jkt Utara, Daerah Khusus
                      Ibukota Jakarta 14240, Indonesia
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mb: 3 }}>
                  <AccessTimeIcon
                    color="primary"
                    sx={{ mr: 2, fontSize: 30 }}
                  />
                  <Box>
                    <Typography variant="h6">Opening Hours</Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      Sunday: 7 am–8:30 pm
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Monday: 8 am–8:30 pm
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Tuesday: 8 am–8:30 pm
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Wednesday: 8 am–8:30 pm
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Thursday: 8 am–8:30 pm
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Friday: 7 am–8:30 pm
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Saturday: 7 am–8:30 pm
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mb: 3 }}>
                  <PhoneIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6">Phone</Typography>
                    <Typography variant="body1" color="text.secondary">
                      +62 857-7777-3839
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Follow Us
                  </Typography>
                  <Box>
                    {/* <IconButton color="primary" aria-label="facebook">
                      <FacebookIcon fontSize="large" />
                    </IconButton> */}
                    <IconButton
                      color="primary"
                      href="https://www.instagram.com/guapatlu.bakmi"
                      target="_blank"
                      aria-label="instagram"
                    >
                      <InstagramIcon fontSize="large" />
                    </IconButton>
                    <IconButton
                      color="primary"
                      href="https://www.tiktok.com/@guapatlubakmi"
                      target="_blank"
                      aria-label="tiktok"
                    >
                      <SvgIcon fontSize="large">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </SvgIcon>
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={3}
                sx={{ height: "100%", minHeight: 400, overflow: "hidden" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2087445876447!2d106.89881287499654!3d-6.234999193757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f54df9a12dad%3A0xb4c0de41f0390bdf!2sguapatlu%20bakmi!5e0!3m2!1sen!2sid!4v1701363762000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default ContactPage;
