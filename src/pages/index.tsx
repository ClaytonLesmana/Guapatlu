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
        <title>
          Bakmi Jambi di Kelapa Gading | Guapatlu - Bakmi Khas Jambi Jakarta
        </title>
        <meta
          name="description"
          content="Guapatlu adalah restoran Bakmi Khas Jambi non-halal di Kelapa Gading, Jakarta Utara. Mie kenyal dengan kuah kaldu gurih, topping babi cincang, chasio, siobak, bakso ikan, dan otak-otak. Tersedia dine-in, takeaway, dan delivery via Gojek & GrabFood."
        />
        <meta
          name="keywords"
          content="bakmi jambi kelapa gading, bakmi jambi jakarta utara, bakmi babi kelapa gading, bakmi non halal jakarta, restoran bakmi jambi, bakmi babi enak, guapatlu bakmi, mie babi kelapa gading, kuliner kelapa gading"
        />
        <meta name="language" content="id-ID" />
        <link rel="canonical" href="https://guapatlu.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guapatlu.com/" />
        <meta
          property="og:title"
          content="Guapatlu - Bakmi Jambi Asli di Kelapa Gading Jakarta Utara"
        />
        <meta
          property="og:description"
          content="Restoran Bakmi Khas Jambi di Kelapa Gading dengan mie kenyal, kuah kaldu gurih, dan aneka topping babi. Cocok untuk makan di tempat atau pesan online via Gojek & GrabFood."
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
