'use client'
import Image from "next/image";
import { useState } from "react";
import SplashScreen from '../components/SplashScreen';
import styles from '../components/SplashScreen.module.css';
import HeroSection from "@/components/HeroSection";
import HeroSectionSwiper from "@/components/HeroSectionSwiper";

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
    </main>
  </div>
  );
}
