'use client'
import Image from "next/image";
import { useState } from "react";
import SplashScreen from '../components/SplashScreen';
import styles from '../components/SplashScreen.module.css';
import HeroSectionSwiper from "@/components/HeroSectionSwiper";
import ServicesGrid from "@/components/OXservicesGrid";
import StickyScroll from "@/components/stickyscroll";
import AdsMockup from "@/components/AdsMockupSection";
import Sparkling from "@/components/SparklingSection";
import AdsSection from "@/components/Advertisement";
import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";
import NicheSliding from "@/components/NicheSlidingSection";
import VideoProduction from "@/components/VideoProduction";
import ClientsLogo from "@/components/ClientslogoMarque";

export default function Home() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setIsSplashVisible(false);
  };
  return (
    <div className={styles.container}>
    {isSplashVisible && <SplashScreen onFinish={handleSplashFinish} />}

    <main >
    {/* <HeroSection /> */}
    <HeroSectionSwiper />
    <ServicesGrid/>
    <StickyScroll />
    <AdsMockup />
    <Sparkling />
    <VideoProduction />
    <AdsSection/>
    <ClientsLogo />
    <NicheSliding />
    <Footer />
    </main> 
  </div>
  );
}
