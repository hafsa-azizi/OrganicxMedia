import Image from "next/image";

const logos = [
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",
  "/images/logos/logo1.jpg",

  
];

const LogoSection = () => {
  return (
    <section className="bg-black  p-5 md:p-10 lg:p-20 xl:p-24 border-b-4  border-green">
      {/* Logo Grid */}
       {/* Adjusted Grid Layout */}
       <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 xl:grid-cols-12 gap-4">
        {logos.map((logo, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-2 flex items-center justify-center w-full max-w-[120px] mx-auto">
            <Image src={logo} alt={`logo-${index}`} width={100} height={60} className="object-contain" />
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      {/* <div className="mt-10 flex justify-center">
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-gray-200 transition-all flex items-center">
          <span className="border-l-4 border-green-500 mr-3 pl-2"></span>
          Gratis Performance Analyse
        </button>
      </div> */}
    </section>
  );
};

export default LogoSection;
