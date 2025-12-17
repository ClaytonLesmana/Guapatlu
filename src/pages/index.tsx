import * as React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutBakmi from "../components/AboutBakmi";
import BakmiComparison from "../components/BakmiComparison";
import ValueProps from "../components/ValueProps";
import MenuPreview from "../components/MenuPreview";
import RewardsTeaser from "../components/RewardsTeaser";
import CtaBanner from "../components/CtaBanner";
import {
  restaurantStructuredData,
  websiteStructuredData,
  organizationStructuredData,
} from "../config/structuredData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda | Guapatlu - Bakmi Khas Jambi Terenak di Jakarta</title>
        <meta
          name="description"
          content="Nikmati Bakmi Khas Jambi yang autentik dengan resep turun temurun. Guapatlu menyajikan mie kenyal dengan kuah gurih, daging babi cincang, bakso ikan, dan otak-otak. Pesan sekarang via Gojek & Grab!"
        />
        <link rel="canonical" href="https://guapatlu.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guapatlu.com/" />
        <meta
          property="og:title"
          content="Guapatlu - Bakmi Khas Jambi Terenak di Jakarta"
        />
        <meta
          property="og:description"
          content="Nikmati Bakmi Khas Jambi yang autentik dengan resep turun temurun. Guapatlu menyajikan mie kenyal dengan kuah gurih, daging babi cincang, bakso ikan, dan otak-otak. Pesan sekarang via Gojek & Grab!"
        />
        <meta
          property="og:image"
          content="https://guapatlu.com/bakmi-hero.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </Head>
      <Layout>
        <HeroSection />
        <AboutBakmi />
        <BakmiComparison />
        <ValueProps />
        <MenuPreview />
        <RewardsTeaser />
        <CtaBanner />
      </Layout>
    </>
  );
}
