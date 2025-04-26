'use client';

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WelcomeBanner from "@/components/WelcomeBanner";
import VehicleEntryButtons from "@/components/VeichleEntry";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <WelcomeBanner />
      <HeroSection />
      <VehicleEntryButtons />
      <InfoSection/>
      
    </main>
  );
}
