import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center mx-1 sm:mx-5 my-1 sm:my-2.5 rounded-xl sm:rounded-2xl lg:rounded-4xl overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[753px]">
      <Image
        src="/assets/Herosection.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <Image
        src="/assets/grain.jpg"
        alt="Grain texture"
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/64" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-[1152px] mx-auto gap-4 sm:gap-[18px] px-4 sm:px-8 py-12 sm:py-24 lg:py-48">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="uppercase text-center leading-[0.85] sm:leading-[1.2] mb-4 sm:mb-6 font-rem text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] font-extrabold bg-gradient-to-b from-gray-100 to-gray-800 bg-clip-text text-transparent">
            WORLD
            <br />
            ARMLIFTING FEDERATION
          </h1>

          <div className="relative w-full max-w-[758px] mx-auto">
            <p className="text-center font-pt-sans-caption text-sm sm:text-base lg:text-xl font-normal leading-relaxed bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-8 px-2 sm:px-4">
              The official body for armlifting worldwide. Join thousands of
              athletes competing in the ultimate test of strength, technique and
              determination.
            </p>

            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 uppercase text-center font-rem text-xs sm:text-sm lg:text-[15px] font-extrabold text-gray-900 bg-gradient-to-r from-gray-100 to-gray-500 rounded-full px-2 sm:px-6 lg:px-8 py-2 sm:py-3 hover:scale-105 transition-transform">
                be part of the federation
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 uppercase text-center font-rem text-xs sm:text-sm lg:text-[15px] font-extrabold text-white bg-transparent border-2 sm:border-3 border-white rounded-full px-0 sm:px-6 lg:px-8 py-2 sm:py-3 hover:bg-white hover:text-gray-900 transition-all">
                See upcoming Events
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-0">
          <span className="text-center font-pt-sans-caption text-sm sm:text-[15px] font-bold text-white">
            1500+
          </span>
          <span className="text-center font-pt-sans-caption text-sm sm:text-[15px] font-normal bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            active members
          </span>
        </div>
      </div>
    </section>
  );
}
