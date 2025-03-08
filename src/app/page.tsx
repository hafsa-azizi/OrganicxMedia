'use client'
import Image from "next/image";
import { useState } from "react";
import SplashScreen from '../components/SplashScreen';
import styles from '../components/SplashScreen.module.css';
import HeroSectionSwiper from "@/components/HeroSectionSwiper";
import ServicesGrid from "@/components/OXservicesGrid";
import StickyScrollSection from "@/components/stickyscroll";
import AdsSection from "@/components/Advertisement";
import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";

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
    <StickyScrollSection />
    <AdsSection/>
    <LogoSection />
    <Footer />
    </main> 
  </div>
  );
}
