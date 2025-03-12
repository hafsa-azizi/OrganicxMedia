'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  { id: 1, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 2, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 3, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 4, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 5, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 6, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 7, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 8, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 9, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 10, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 11, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 12, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 13, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 14, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 15, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 16, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
  { id: 17, src: '/images/logos/logo1.jpg', alt: 'Logo 1' },
];

const MarqueeRow = ({ direction = 'left', speed = 40 }) => {
  return (
    <motion.div
      className="flex space-x-8"
      animate={{
        x: direction === 'left' ? '-100%' : '100%',
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
    
      }}
    >
      {logos.map((logo) => (
        <div key={`${logo.id}`}className="flex-shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
      ))}
      {/* Duplicate logos for seamless looping */}
      {logos.map((logo) => (
        <div key={`${logo.id}-duplicate`} className="flex-shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
      ))}
    </motion.div>
  );
};

const ClientsLogo = () => {
  return (
    <section className="bg-white overflow-hidden py-10">
        <div className='pl-10'>
        <h1 className="text-8xl font-bold font-rebond">
        <span className="text-black">IN GOOD </span>
        <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">COMPANY</span><span className="text-blue-800">.</span>
        </h1>
        </div>

      <div className="flex flex-col w-[100%] mx-auto px-4">
        {/* First Row */}
        <div className="mb-4 overflow-hidden">
          <MarqueeRow direction="left" speed={40} />
        </div>
        {/* Second Row */}
        <div className="mb-4 overflow-hidden">
          <MarqueeRow direction="right" speed={40} />
        </div>
        {/* Third Row */}
        <div className="overflow-hidden">
          <MarqueeRow direction="left" speed={40} />
        </div>
      </div>
    </section>
  );
};

export default ClientsLogo;