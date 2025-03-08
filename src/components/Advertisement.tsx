import Image from 'next/image';

const AdsSection = () => {
    return (
        <div className="bg-white">
          <div className="container mx-auto px-3 md:px-6 py-20">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-tight font-bold text-center mb-8">
                FaceTime keyfi <br className="hidden md:block" />ekranlarınızda.
              </h1>
              <div className="w-full max-w-6xl relative">
                <Image
                  src="/images/ads.jpg" // Replace with your image path
                  alt="Ads onOX"
                  width={1200}
                  height={1000}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <p className="text-[#959495] text-[14px] md:text-[17px] max-w-[300px] md:max-w-3xl xl:max-w-4xl xl:text-[20px] text-center mt-[-50px] md:mt-[-110px] lg:mt-[-150px] z-10 font-sans font-semibold mb-8 md:mb-[110px] px-4 md:px-0">
                Apple TV 4K’daki FaceTime uygulaması, <br className="hidden md:block" />Süreklilik Kamerası sayesinde iPhone veya iPad’inize <br className="hidden md:block" />sorunsuz bir şekilde bağlamarak ses ve görüntülerinizi <br className="hidden md:block" />büyük ekrana aktarıyor. Böylece sevdiklerinizle <br className="hidden md:block" />daha büyük bir ekranda, her zamankinden daha kolay bir <br className="hidden md:block" />şekilde ve daha iyi kalitede görüşmeler yapabiliyorsunuz.
              </p>
            </div>
          </div>
        </div>
      );
};

export default AdsSection;