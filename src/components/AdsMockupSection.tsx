"use client";
import { motion } from "framer-motion";
import { SiGoogleads } from "react-icons/si";
import { FaMeta, FaTiktok, FaFacebookF } from "react-icons/fa6";

const icons = [
  <FaMeta key="meta" className="w-12 md:w-16 h-12 md:h-16 text-gray-400" />, 
  <SiGoogleads key="google" className="w-12 md:w-16 h-12 md:h-16 text-gray-400" />, 
  <FaTiktok key="tiktok" className="w-12 md:w-16 h-12 md:h-16 text-gray-400" />,  
  <FaFacebookF key="facebook" className="w-12 md:w-16 h-12 md:h-16 text-gray-400" />
];

const Marquee = () => (
  <div className="absolute w-full overflow-hidden">
    <motion.div
      className="flex space-x-10 md:space-x-20 w-max"
      animate={{ x: ["0%", "-50%"] }} 
      transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
    >
      {[...icons, ...icons, ...icons].map((icon, i) => (
        <div key={i} className="flex items-center justify-center">
          {icon}
        </div>
      ))}
    </motion.div>
  </div>
);

export default function AdsMockup() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#F6F5F4] overflow-hidden w-full px-4 sm:px-8">
      {/* White Box */}
      <div className="relative w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[60vw] bg-white rounded-[2rem] md:rounded-[5rem] p-6 md:p-10 flex flex-col items-center justify-center shadow-lg overflow-hidden">
        
        {/* Moving Icons */}
        <div className="absolute top-[25%] md:top-[30%] left-0 w-full opacity-20">
          <Marquee />
        </div>
        <div className="absolute bottom-[30%] md:bottom-[40%] left-0 w-full opacity-20">
          <Marquee />
        </div>

        {/* Mobile Mockup with Video */}
        <div className="relative w-56 md:w-72 lg:w-80 h-auto z-10 flex items-center justify-center">
          <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border border-gray-200">
            <video autoPlay loop muted playsInline className="w-full h-full">
              <source src="/images/mobilemockup.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Text + Icon Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-6 mt-8 md:mt-12 space-y-6 md:space-y-0">
          {/* Text */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-rebond font-semibold text-black text-center md:text-left flex-1 leading-tight">
            Check cosmetics' fit  
            <br className="hidden md:block" /> with no brand affiliation
          </h2>
          
          {/* Styled Icon */}
          <div className="p-4 md:p-5 rounded-full bg-gray-100 shadow-lg">
            <FaFacebookF className="w-10 md:w-12 h-10 md:h-12 text-gray-600" />
          </div>
        </div>

      </div>
    </div>
  );
}
