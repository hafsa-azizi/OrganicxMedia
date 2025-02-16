import { useState, useEffect, useRef } from "react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./HerSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

// Define the type for a slide
interface Slide {
  image: string;
  logoFilter: string;
  dotFilter: string; // CSS filter for logo color
}

const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false); // State to control popup visibility

  const swiperRef = useRef<any>(null); // Ref to access the Swiper instance

  // Sample data for slides with explicit type
  const slides: Slide[] = [
    {
      image: "/images/slider_image_1.avif", // Replace with your image paths
      logoFilter: "invert(20%) sepia(100%) saturate(1000%) hue-rotate(0deg)",
      dotFilter: "invert(20%) sepia(100%) saturate(1000%) hue-rotate(0deg)",
    },
    {
      image: "/images/slider_image_2.avif",
      logoFilter: "invert(100%)", // White logo
      dotFilter: "invert(100%)", // White logo
    },
    {
      image: "/images/slider_image_3.avif",
      logoFilter: "invert(0%)", // Red logo
      dotFilter: "invert(0%)", // Red logo
    },
  ];

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext(); // Programmatically advance to the next slide
      }
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Update activeSlide when Swiper changes slides
  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.realIndex); // Use `realIndex` to get the correct index in loop mode
  };

  // Function to toggle popup visibility
  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
    }
  };

  // Function to close popup with animation
  const closePopup = () => {
    setTimeout(() => {
      setIsPopupOpen(false); // Remove popup after animation completes
    }, 500); // Match the duration of the exit animation
  };

  return (
    <div className={styles.heroSection}>
      {/* Header Section */}
      <header className={styles.header}>
        {/* Logo */}
        <div
          className={styles.logo}
          style={{ filter: slides[activeSlide].logoFilter }}
        >
          <Image
            src="/images/OX_Logo_black.png" // Replace with your logo path
            alt="Logo"
            width={150}
            height={100}
          />
        </div>

        {/* Dot in the top-right corner */}
        <div
          className={styles.dot}
          style={{ filter: slides[activeSlide].dotFilter }}
          onClick={togglePopup}
        ></div>
      </header>
      {/* Full-screen Popup */}
      {isPopupOpen && (
        <div className={styles.popupOverlay} onClick={handleOutsideClick}>
          <AnimatePresence>
            {isPopupOpen && (
              <motion.div
                initial={{ y: "-100%" }} // Start off-screen (above)
                animate={{ y: 0 }} // Slide down into view
                exit={{ y: "-100%" }} // Slide up and disappear
                transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
                className="flex justify-center items-center bg-white text-center max-w-[100%] w-full h-screen "
                onClick={(e) => e.stopPropagation()}
              >
                <header className={styles.header}>
                  {/* Logo */}
                  <div className={styles.logo}>
                    <Image
                      src="/images/OX_Logo_black.png" // Replace with your logo path
                      alt="Logo"
                      width={150}
                      height={100}
                    />
                  </div>

                  {/* cross in the top-right corner */}
                  <div>
                    <RxCross1
                      className="tex-dark-gray cursor-pointer text-2xl font-bold"
                      onClick={closePopup}
                    />
                  </div>
                </header>
                <div
                  className={`bg-white p-5 text-center max-w-[100%] w-full h-screen flex justify-center items-center relative transform -translate-y-full transition-transform duration-1500 ease-in-out ${
                    isPopupOpen ? "translate-y-0" : "-translate-y-full"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ul>
                    <li className="text-4xl md:text-6xl font-sans mb-4 lg:mb-10 font-medium text-left text-dark-gray cursor-pointer hover:text-red ">
                      Work
                    </li>
                    <li className="text-4xl md:text-6xl font-sans mb-4 lg:mb-10 font-medium text-left text-dark-gray cursor-pointer hover:text-red ">
                      About
                    </li>
                    <li className="text-4xl md:text-6xl font-sans mb-4 lg:mb-10 font-medium text-left text-dark-gray cursor-pointer hover:text-red ">
                      Contact
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Swiper Component */}
      <Swiper
        pagination={{
          dynamicBullets: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: ${
              index === activeSlide ? "white" : "light-gray"
            }; opacity: ${
              index === activeSlide ? "1" : "0.5"
            }; width: 10px; height: 10px; border-radius: 50%;"></span>`;
          },
        }}
        modules={[Pagination]}
        className={styles.slider}
        onSlideChange={handleSlideChange} // Listen for slide changes
        ref={swiperRef} // Attach ref to access Swiper instance
        speed={1000} // Set the slide transition speed to 1 second (1000ms)
        loop={true} // Enable looping of slides
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${styles.slide} ${
                index === activeSlide ? styles.active : ""
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "opacity 1s ease-in-out", // Smooth transition between slides
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
