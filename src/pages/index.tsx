import * as React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutBakmi from "../components/AboutBakmi";
import BakmiComparison from "../components/BakmiComparison";
import ValueProps from "../components/ValueProps";
import MenuPreview from "../components/MenuPreview";
import RewardsTeaser from "../components/RewardsTeaser";
import CtaBanner from "../components/CtaBanner";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutBakmi />
      <BakmiComparison />
      <ValueProps />
      <MenuPreview />
      <RewardsTeaser />
      <CtaBanner />
    </Layout>
  );
}
