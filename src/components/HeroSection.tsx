import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HerSection.module.css';

// Define the type for a slide
interface Slide {
  image: string;
  logoFilter: string; // CSS filter for logo color
}

const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Sample data for slides with explicit type
  const slides: Slide[] = [
    {
      image: '/images/slider_image_1.avif', // Replace with your image paths
     
      logoFilter: 'invert(20%) sepia(100%) saturate(1000%) hue-rotate(0deg)', // Black logo
    },
    {
      image: '/images/slider_image_2.avif',
      logoFilter: 'invert(100%)', // White logo
    },
    {
      image: '/images/slider_image_3.avif',
      logoFilter: 'invert(0%)',// Red logo
    },
  ];

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div className={styles.heroSection}>

      <div className={styles.logo} style={{ filter: slides[activeSlide].logoFilter }}>
        <Image
          src="/images/OX_Logo_black.png" // Replace with your logo path
          alt="Logo"
          width={150}
          height={100}
        />
      </div>
      {/* Logo in the top-left corner */}

      {/* Image Slider */}
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === activeSlide ? styles.active : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              transition: 'opacity 1s ease-in-out', // Smooth transition between slides
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;