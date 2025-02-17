"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Item {
  title: string;
  image: string;
}

const rows = [
  [
    { title: "web", image: "/images/grid-image.jpg" },
    { title: "abc", image: "/images/grid-image.jpg" },
    { title: "abc", image: "/images/grid-image.jpg" },
    { title: "google", image: "/images/grid-image.jpg" },
    { title: "production", image: "/images/grid-image.jpg" },
  ],
  [
    { title: "abc", image: "/images/grid-image.jpg" },
    { title: "abc", image: "/images/grid-image.jpg" },
    { title: "google", image: "/images/grid-image.jpg" },
    { title: "googffle", image: "/images/grid-image.jpg" },
    { title: "prodgvuction", image: "/images/grid-image.jpg" },
  ],
  [
    { title: "wveb", image: "/images/grid-image.jpg" },
    { title: "abc", image: "/images/grid-image.jpg" },
    { title: "abc", image: "/images/grid-image.jpg" },
    { title: "goovgle", image: "/images/grid-image.jpg" },
    { title: "prfoduction", image: "/images/grid-image.jpg" },
  ],
];

export default function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className=" bg-white py-6 md:py-12 overflow-hidden my-[30px] md:my-[70px] ">
      <div className="w-[100%] md:w-[80%] xl:w-[60%] p-5 md:mx[20px] mx-auto text-left md:text-center">
          {/* Responsive Title */}
      <h2 className=" mb-6  text-2xl md:text-4xl lg:text-7xl font-semibold text-zinc-900">
      Transform Your Online Presence – Drive Growth, Engagement, and Results
      </h2>
      {/* Responsive Subtitle */}
      <p className=" text-md md:text-lg text-gray-500 font-semibold">In today’s digital landscape, standing out is crucial. At OrganicX Media, we create tailored strategies—from SEO and social media to paid ads and content—to drive measurable results. Whether boosting traffic, conversions, or customer loyalty, we turn clicks into customers and ideas into impact. Your success is our mission. Your go-to destination for the best TV shows and movies.
      </p>
      </div>
    

      {/* Grid */}
      <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
        {rows.map((row, rowIndex) => {
          // Create independent movement for each row
          const xMovement = useTransform(
            scrollYProgress,
            [0, 1],
            rowIndex % 2 === 0 ? ["-20%", "10%"] : ["10%", "-20%"]
          );

          return (
            <div key={rowIndex} className="w-full overflow-hidden">
              <motion.div
                className="flex gap-2 sm:gap-4 px-4 sm:px-6"
                style={{ x: xMovement }}
              >
                {row.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 w-[150px] h-[90px] sm:w-[200px] sm:h-[120px] md:w-[300px] md:h-[180px] lg:w-[400px] lg:h-[220px] overflow-hidden rounded-xl cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}