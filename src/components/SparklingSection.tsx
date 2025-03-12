'use client';

import Image from 'next/image';

const brands = [
  { id: 1, name: 'North Cardiff Dental', logo: '/images/OX_Logo_white.png' },
  { id: 2, name: 'Scottish Dental', logo: '/images/neon_png2.png' },
  { id: 3, name: 'UK Dental', logo: '/images/OX_Logo_black.png' },
  { id: 4, name: 'London Dental', logo: '/images/neon_png.png' },
  { id: 5, name: 'North Cardiff Dental', logo: '/images/OX_Logo_white.png' },
  { id: 6, name: 'Scottish Dental', logo: '/images/neon_png2.png' },
  { id: 7, name: 'UK Dental', logo: '/images/OX_Logo_black.png' },
  { id: 8, name: 'London Dental', logo: '/images/neon_png.png' },
];

export default function Sparkling() {
  return (
    <section className="relative w-full h-[70vh] lg:min-h-screen bg-black flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Sparkling Background */}
      <div className="absolute inset-0 sparkle-background"></div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-website.jpg"
          alt="Doctor Background"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium leading-normal">
          Some of the talented dental professionals we are <span className="text-yellow-100">working with.</span>
        </h2>
      </div>

      {/* Brand Logos */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 px-4 sm:px-5">
        {brands.map((brand) => (
          <div key={brand.id} className="flex justify-center items-center">
            <Image 
              src={brand.logo} 
              alt={brand.name} 
              width={180} 
              height={90} 
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}