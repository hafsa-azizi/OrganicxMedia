'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa6';

const VideoProduction = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[70vh] lg:min-h-screen bg-[#F6F5F4] overflow-hidden w-full px-4 sm:px-8">
      {/* White Box */}
      <div className="relative w-full max-w-[80vw] md:max-w-[80vw] lg:max-w-[60vw] bg-[#ffffff] rounded-[2rem] md:rounded-[5rem] p-6 md:p-10 flex flex-col items-center justify-center shadow-lg overflow-hidden">
        {/* Mobile Mockups and Video */}
        <div className="relative z-20 flex justify-center items-center  mt-10">
          {/* Before Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50, skewX: -10 }}
            animate={{ opacity: 1, x: 0, skewX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="transform skew-x-[-3deg]"
          >
            <Image
              src="/images/before.avif"
              alt="Before"
              width={250}
              height={400}
              className="rounded-lg shadow-lg transform skew-x-[3deg]"
            />
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-[270px] h-[200px] md:h-[400px] lg:h-[530px] z-30"
          >
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-contain rounded-lg shadow-lg"
            >
              <source src="/images/mobilemockup.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* After Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50, skewX: 10 }}
            animate={{ opacity: 1, x: 0, skewX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="transform skew-x-[3deg]"
          >
            <Image
              src="/images/after.avif"
              alt="After"
              width={250}
              height={400}
              className="rounded-lg shadow-lg transform skew-x-[-3deg]"
            />
          </motion.div>
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
};

export default VideoProduction;