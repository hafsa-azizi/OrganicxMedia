"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    bg: string;
    description: string;
    icon?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#796bf2",
    "#d62c3f",
    "#000000",
  ];
  const backgroundImages = [
    "url('/images/slider_image_1.avif')",
    "url('/images/slider_image_2.avif')",
    "url('/images/slider_image_3.avif')",
  ];
  
//   const linearGradients = [
//     "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
//     "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
//     "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
//   ];

  const [backImage, setBackgroundImage] = useState(
    backgroundImages[0]
  );

  useEffect(() => {
    setBackgroundImage(backgroundImages[activeCard % backgroundImages.length]);
  }, [activeCard]);




  return (
    
  <motion.div
      animate={{
        backgroundColor : `${content[activeCard].bg}`
        //backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[100vh] w-[100%] overflow-y-auto flex justify-center relative  scrollbar-hide items-center py-14 "
      ref={ref}
    >
        <div className={`w-full div relative flex items-center justify-center ${content[activeCard].bg}`}>
        <div className=" h-screen ">
          {content.map((item, index) => (
            <div key={item.title + index} className="h-[100vh] w-[100%] flex flex-col justify-center bg-red">
                <motion.image
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                
              >
                {item.icon}
              </motion.image>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-white max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          {/* <div className="h-40 bg-red" /> */}
        </div>
      </div>

    
      <div
        style={{backgroundSize: 'cover' ,background: backImage }}
        className={cn(
          "hidden lg:block h-[70vh] w-[70vw] border border-[2px] border-gray-200 bg-white sticky top-1/2 bottom-1/2 -translate-y-1/2 overflow-hidden",
          contentClassName
        )}
      >
        {/* {content[activeCard].icon ?? null} */}
      </div>
        
     
    </motion.div>
    
  );
};
