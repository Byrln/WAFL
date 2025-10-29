"use client";

import Image from "next/image";
import { useRef } from "react";

type Leader = {
  name: string;
  role: string;
  description: string;
  image: string;
};

export default function LeadersSlider({ leaders }: { leaders: Leader[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dx: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <div className="flex items-center w-full gap-4 lg:gap-[31px]">
      {/* Left Arrow - Hidden on mobile */}
      <button
        aria-label="scroll-left"
        onClick={() => scroll(-400)}
        className="hidden lg:inline-flex items-center justify-center border border-[#c3c3c3] rounded-full p-[9px] bg-gradient-to-r from-[#0000ff0d] to-[#1a237e99] transition-transform hover:scale-105 flex-shrink-0"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#FAFAFA]">
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="flex items-center w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center gap-4 sm:gap-6 lg:gap-[31px] w-full overflow-x-auto scrollbar-hide scroll-smooth touch-pan-x"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="relative w-[200px] h-[280px] xs:w-[220px] xs:h-[310px] sm:w-[250px] sm:h-[350px] md:w-[280px] md:h-[390px] lg:w-[300px] lg:h-[426px] flex-shrink-0 rounded-[20px] overflow-hidden group"
            >
              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-[#1a237e52] via-[#f5f5f5cc] to-[#1a237e] opacity-80 group-hover:opacity-0 transition-opacity" />
              {/* Image */}
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              {/* Hover: full blue patterned overlay */}
              <div
                className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: "url('/assets/hover-bg.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />

              {/* Text overlay (default) */}
              <div className="absolute bottom-0 left-0 right-0 px-3 xs:px-4 sm:px-5 lg:px-[20px] pb-4 xs:pb-5 sm:pb-6 md:pb-8 lg:pb-[39px] pr-8 xs:pr-10 sm:pr-12 md:pr-16 lg:pr-[80px] flex flex-col gap-1 sm:gap-2 lg:gap-[8px] transition-opacity group-hover:opacity-0">
                <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-[24px] font-bold font-rem">
                  {leader.name}
                </p>
                <p className="text-[#f5f5f5] text-xs lg:text-[12px] font-rem">{leader.role}</p>
              </div>

              {/* Text overlay (hover state with description) */}
              <div className="absolute inset-0 px-3 xs:px-4 sm:px-5 lg:px-[20px] pt-3 xs:pt-4 sm:pt-5 lg:pt-[20px] flex flex-col gap-1 sm:gap-2 lg:gap-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-[24px] font-bold font-rem">
                  {leader.name}
                </p>
                <p className="text-[#f5f5f5] text-xs lg:text-[12px] font-rem">{leader.role}</p>
                <div className="mt-auto pb-3 xs:pb-4 sm:pb-5 lg:pb-[20px] pr-3 xs:pr-4 sm:pr-5 lg:pr-[20px]">
                  <p className="text-[#f5f5f5] text-xs xs:text-sm lg:text-[14px] leading-relaxed font-pt-sans-caption">
                    {leader.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow - Hidden on mobile */}
      <button
        aria-label="scroll-right"
        onClick={() => scroll(400)}
        className="hidden lg:inline-flex items-center justify-center border border-[#c3c3c3] rounded-full p-[9px] bg-gradient-to-r from-[#0000ff0d] to-[#1a237e99] transition-transform hover:scale-105 flex-shrink-0"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#FAFAFA]">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}