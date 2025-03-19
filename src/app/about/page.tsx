'use client';
import Image from 'next/image';
import { PiLinkedinLogoLight } from "react-icons/pi";


const teamMembers = [
  {
    name: 'Daragh Murphy',
    title: 'CEO, Founder',
    image: '/images/About/team01.avif',
    linkedin: '#',
  },
  {
    name: 'Mariana Coontz',
    title: 'Chief Financial Officer',
    image: '/images/About/team01.avif',
    linkedin: '#',
  },
  {
    name: 'Wael ElSahhar',
    title: 'Chief Tech. & Product Officer',
    image: '/images/About/team01.avif',
    linkedin: '#',
  },
  
  {
    name: 'Wael ElSahhar',
    title: 'Chief Tech. & Product Officer',
    image: '/images/About/team01.avif',
    linkedin: '#',
  },
  
  {
    name: 'Wael ElSahhar',
    title: 'Chief Tech. & Product Officer',
    image: '/images/About/team01.avif',
    linkedin: '#',
  },
  
  {
    name: 'Wael ElSahhar',
    title: 'Chief Tech. & Product Officer',
    image: '/images/About/team01.avif',
    linkedin: '#',
  },
];

const locations = [
  {
    name: 'New York',
    address: 'Water Street, New York, NY',
    image: '/images/About/new-york.avif',
  },
  {
    name: 'San Francisco',
    address: 'Montgomery Street, San Francisco, CA',
    image: '/images/About/san-francisco.avif',
  },
  {
    name: 'Seattle',
    address: 'Bellevue Way, Bellevue, WA',
    image: '/images/About/seattle.avif',
  },
];


export default function TeamSection() {
    return (
     
      <div>
        <div className='w-full h-[40vh] lg:h-[60vh] bg-[url("/images/About/aboutheader.avif")] bg-cover bg-center relative'>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>
</div>
{/* Team Section */}
   <section className=" mx-auto px-4 py-16 bg-gradient-to-b from-[#ffffff] to-[#f1f1f1]">
    <div className='max-w-5xl m-4 md:ml-9 lg:ml-28 mb-20 '>
    <h2 className="text-5xl lg:text-7xl font-medium font-rebond mb-6 text-gray-900">A highly talented team</h2>
   <p className="text-xl md:text-2xl lg:text-3xl font-medium font-serif  text-gray-900 mx-auto mb-12">
     We attract ambitious thinkers with deep experience across financial services and technology. Our team members
     bring an ownership mentality to their work and a relentless desire to raise the bar for the products we build—and
     the partner brands we serve.
   </p>
    </div>
  
   <div className="max-w-6xl mx-auto text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
     {teamMembers.map((member) => (
       <div key={member.name} className="text-center p-6 lg:p-12">
         <div className="rounded-xl overflow-hidden shadow-lg ">
           <img src={member.image} alt={member.name} className="w-full" />
         </div>
         <h3 className="mt-4 text-medium md:text-xl text-left font-medium text-gray-900  mb-2">{member.name}</h3>
         <p className="text-gray-700 text-sm text-left mb-2">{member.title}</p>
         <PiLinkedinLogoLight className="text-gray-500 text-2xl hover:text-gray-700" />
       </div>
     ))}
   </div>
 </section>
{/* Location */}
 <section className="p-10 lg:p-20 xl:p-32 max-w-full mx-auto bg-gradient-to-b from-[#ffffff] to-[#f1f1f1]">
      <h2 className=" text-center text-5xl lg:text-7xl font-medium font-rebond mb-10 text-gray-900">Our locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {locations.map((location, index) => (
          <div key={index} className="rounded-2xl overflow-hidden ">
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-medium mb-1">{location.name}</h3>
              <p className="text-sm text-gray-500">{location.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
      </div>
    );
  }
  