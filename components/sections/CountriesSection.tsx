"use client";

import Image from "next/image";

export default function CountriesSection() {
  const countries = [
    { src: "/assets/flags/Japan.svg", name: "JAPAN" },
    { src: "/assets/flags/India.svg", name: "INDIA" },
    { src: "/assets/flags/Malaysia.svg", name: "MALAYSIA" },
    { src: "/assets/flags/Mongolia.svg", name: "MONGOLIA" },
    { src: "/assets/flags/China.svg", name: "CHINA" },
    { src: "/assets/flags/Russia.svg", name: "RUSSIA" },
  ];

  const FlagItem = ({ flag, index }: { flag: any; index: number }) => (
    <div className="flex items-center mr-8 sm:mr-12 lg:mr-[60px] flex-shrink-0">
      <Image
        src={flag.src}
        alt={`${flag.name} flag`}
        width={35}
        height={35}
        className="flex-shrink-0 w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] lg:w-[50px] lg:h-[50px]"
      />
      <span className="font-bold uppercase mx-2 sm:mx-3 lg:mx-4 font-pt-sans-caption text-sm sm:text-base lg:text-[20px] text-white leading-tight whitespace-nowrap">
        {flag.name}
      </span>
      <Image
        src="/assets/teams.svg"
        alt="Line"
        width={10}
        height={10}
        className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
      />
    </div>
  );

  return (
    <section
      id="countries"
      className="relative overflow-hidden bg-white h-[300px] sm:h-[350px] lg:h-[350px]"
    >
      <h3 className="absolute text-center font-bold uppercase z-10 font-pt-sans-caption left-1/2 transform -translate-x-1/2 top-8 sm:top-10 lg:top-[30px] text-xl sm:text-2xl lg:text-[36px] text-[#212121] leading-tight w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[480px] px-4">
        MEMBER OF COUNTRIES
      </h3>

      {/* Top scrolling ribbon */}
      <div className="absolute overflow-hidden w-full h-[60px] sm:h-[70px] lg:h-[80px] top-[130px] sm:top-[155px] lg:top-[180px] left-0 transform rotate-[-2deg] sm:rotate-[-3deg] lg:rotate-[-4deg] origin-center blur-[2px] sm:blur-[3px] lg:blur-[4px]">
        <div
          className="absolute flex items-center top-0 left-0 h-[60px] sm:h-[70px] lg:h-[80px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #0097a7 0%, #4689b3 51.44%, #1a237e 100%)",
            animation: "scrollLeft 25s linear infinite",
            width: "max-content",
          }}
        >
          {/* Multiple sets for seamless infinite scroll */}
          {Array.from({ length: 4 }, (_, setIndex) => (
            <div
              key={setIndex}
              className="flex items-center px-4 sm:px-5 lg:px-[20px]"
            >
              {countries.map((flag, index) => (
                <FlagItem
                  key={`${setIndex}-${flag.name}-${index}`}
                  flag={flag}
                  index={index}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scrolling ribbon */}
      <div
        className="absolute overflow-hidden left-0 w-full h-[60px] sm:h-[70px] lg:h-[80px]"
        style={{
          top: "90px",
          transformOrigin: "center",
        }}
      >
        <div
          className="absolute flex items-center bottom-0 left-0 h-[60px] sm:h-[70px] lg:h-[80px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #1a237e 0%, #4689b3 51.44%, #0097a7 100%)",
            animation: "scrollRight 25s linear infinite",
            width: "max-content",
          }}
        >
          {/* Multiple sets for seamless infinite scroll */}
          {Array.from({ length: 4 }, (_, setIndex) => (
            <div
              key={setIndex}
              className="flex items-center px-4 sm:px-5 lg:px-[20px]"
            >
              {countries.map((flag, index) => (
                <FlagItem
                  key={`${setIndex}-${flag.name}-${index}`}
                  flag={flag}
                  index={index}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 4));
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(calc(-100% / 4));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
