"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        title: "Dental Clinics",
        description: "Grow your money with up to 5% AER/Gross (variable) interest rate on savings, paid every day.",
        paragraph: "AER stands for Annual Equivalent Rate and illustrates what the interest rate would be if interest was paid and compounded once each year. Gross is the interest rate without tax deducted. The interest rate is variable and subject to your selected plan. T&Cs apply.²",
        category: "Dental Clinics",
        bg: "/images/nicheslide1.webp",
        card: "/images/card1.webp",
    },
    {
        title: "Medical Tourism",
        description: "Grow your money with up to 5% AER/Gross (variable) interest rate on savings, paid every day.",
        paragraph: "AER stands for Annual Equivalent Rate and illustrates what the interest rate would be if interest was paid and compounded once each year. Gross is the interest rate without tax deducted. The interest rate is variable and subject to your selected plan. T&Cs apply.²",
        category: "Medical Tourism",
        bg: "/images/slider_image_1.avif",
        card: "/images/card1.webp",
    },
    {
        title: "Health & Wellness",
        description: "Grow your money with up to 5% AER/Gross (variable) interest rate on savings, paid every day.",
        paragraph: "AER stands for Annual Equivalent Rate and illustrates what the interest rate would be if interest was paid and compounded once each year. Gross is the interest rate without tax deducted. The interest rate is variable and subject to your selected plan. T&Cs apply.²",
        category: "Health & Wellness",
        bg: "/images/slider_image_2.avif",
        card: "/images/card1.webp",
    },
];

export default function NicheSliding() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={slides[currentSlide].bg}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="mt-3 text-sm sm:text-base md:text-md lg:text-xl leading-5 font-semibold">
                            {slides[currentSlide].description}
                        </p>
                        <p className="mt-3 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-2xl">
                            {slides[currentSlide].paragraph}
                        </p>
                        <button className="mt-4 px-4 py-2 md:px-6 md:py-3 bg-white text-black rounded-lg text-sm md:text-lg font-medium hover:bg-gray-200 transition">
                            Explore savings
                        </button>
                    </motion.div>
                </AnimatePresence>

                {/* Card Animation (Fixed Your Original Design) */}
                <div className="relative flex justify-center items-center w-full h-[450px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute w-[350px] h-[450px] flex justify-center items-center"
                        >
                            <Image
                                src={slides[currentSlide].card}
                                alt="Card"
                                layout="fill"
                                objectFit="cover" // Restored your original styling
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full border transition text-xs sm:text-sm md:text-base ${
                                index === currentSlide
                                    ? "bg-white text-black"
                                    : "border-white text-white hover:bg-gray-200 hover:text-black"
                            }`}
                            onClick={() => setCurrentSlide(index)}
                        >
                            {slide.category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
