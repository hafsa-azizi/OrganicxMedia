// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";

// export default function SectionWithStickyBox() {
//   const sectionRef = useRef(null);
//   const [activeCard, setActiveCard] = useState(0);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Get scroll progress inside the section
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"], // Track section scroll
//   });

//   // Move the text up/down based on scroll
//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

//   const backgroundImages = [
//     "/images/slider_image_1.avif",
//     "/images/slider_image_2.avif",
//     "/images/slider_image_3.avif",
//     "/images/grid-image.jpg",
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       // Change the sticky box background after every 80vh instead of 100vh
//       setIsScrolled(scrollPosition >= window.innerHeight * 0.8);

//       // Define 80vh as the new section height reference
//       const sectionHeight = window.innerHeight * 0.5;

//       // Calculate which "80vh section" is currently in view
//       const currentSection = Math.floor(scrollPosition / sectionHeight);

//       setActiveCard(currentSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
// }, []);





"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Section = {
  icon: string;
  title: string;
  description: string;
};

const Sections: Section[] = [
  {
    icon: "/images/OX_Logo_white.png",
    title: "Section 1",
    description: "Favori filmlerinizi uzmanlar tarafından titizlikle derlenmiş tek bir uygulamadan kiralayın veya satın alın. Altı adede kadar aile üyesi için herhangi bir yeni uygulama, hesap veya parola gerekmeden tam olarak istediğiniz kanallara abone olun."
  },
  {
    icon: "/images/OX_Logo_black.png",
    title: "Section 2",
    description: "Favori filmlerinizi uzmanlar tarafından titizlikle derlenmiş tek bir uygulamadan kiralayın veya satın alın. Altı adede kadar aile üyesi için herhangi bir yeni uygulama, hesap veya parola gerekmeden tam olarak istediğiniz kanallara abone olun."
  },
  {
    icon: "/images/neon_png2.png",
    title: "Section 3",
    description: "Favori filmlerinizi uzmanlar tarafından titizlikle derlenmiş tek bir uygulamadan kiralayın veya satın alın. Altı adede kadar aile üyesi için herhangi bir yeni uygulama, hesap veya parola gerekmeden tam olarak istediğiniz kanallara abone olun."
  },
  {
    icon: "/images/OX_Logo_black.png",
    title: "Section 4",
    description: "Favori filmlerinizi uzmanlar tarafından titizlikle derlenmiş tek bir uygulamadan kiralayın veya satın alın. Altı adede kadar aile üyesi için herhangi bir yeni uygulama, hesap veya parola gerekmeden tam olarak istediğiniz kanallara abone olun."
  },
];

export default function SectionWithStickyBox() {
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isLastImage, setIsLastImage] = useState(false);

  // Get scroll progress inside the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // Track section scroll
  });

  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
  ];

  const sections = images.length; // Total sections = total images
  const sectionHeight = 100; // Each section is 100vh

  // Track the active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const currentSection = Math.floor(scrollPosition / (window.innerHeight * 0.9)); // Adjusted to align better

      if (currentSection !== activeCard && currentSection < sections) {
        setActiveCard(currentSection);
      }


      // Stop scrolling when the last image reaches the sticky box
      if (currentSection >= sections - 1) {
        setIsLastImage(true);
      } else {
        setIsLastImage(false);
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCard]);
  // Image Move Effect (Stops at Last Image)
  const imageY = useTransform(
    scrollYProgress,
    [0, isLastImage ? 0.99 : 1], // Stops movement when last image reaches sticky box
    ["0%", `-${(sections - 1) * 100}%`]
  );
  return (
    <div className="relative w-full h-full bg-white">
      {/* Scrollable Section */}
      <div ref={sectionRef} className="relative w-full h-[400vh] md:h-[320vh] lg:h-[400vh]">
        {/* Sticky Box (Limited to this section) */}
        <div className="sticky top-14 lg:top-0 h-screen w-full flex items-start md:items-center justify-end z-20">
          <div className="w-[90vw] h-[40vh] md:w-[50vw] md:h-[40vh] lg:h-[55vh] flex items-center justify-center rounded-sm overflow-hidden relative border-2 border-black">
            {/* Animated Image Wrapper - Moves Up/Down Exactly with Sections */}
            <motion.div className="absolute w-full h-full flex flex-col" style={{ y: imageY }}>
              {images.map((src, index) => (
                <img key={index} src={src} className="w-full h-[600px] object-cover" alt={`Slide ${index + 1}`} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dynamic Scrollable Sections */}
        <div className="absolute inset-0 w-full">
          {Sections.map((item: Section, index) => (
            <div
              key={index}
              className={`w-full min-h-[100vh] md:min-h-[80vh] lg:min-h-[100vh] pb-14 justify-end flex flex-col md:justify-center sm:pb-0 ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-400"
                }`}
            >
              <div className="pl-4 md:pl-10 lg:pl-20 w-[100%] md:w-[40%] lg:w-[40%]">
                <Image src={item.icon} alt={item.title} width={150} height={150} />
                <h2 className="text-4xl font-bold text-white ">{item.title}</h2>
                <p className="text-white/80 text-lg mt-4 ">{item.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

