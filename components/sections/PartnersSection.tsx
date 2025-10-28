"use client";

import Image from "next/image";
import { useRef } from "react";

export default function PartnersSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cards = [
    {
      src: "/assets/portrait1.png",
      name: "David Sequiera",
      role: "North Asia’s President",
      description:
        "Long Description About That Person’s Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.",
    },
    {
      src: "/assets/portrait2.png",
      name: "David Sequiera",
      role: "North Asia’s President",
      description:
        "Long Description About That Person’s Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.",
    },
    {
      src: "/assets/portrait1.png",
      name: "David Sequiera",
      role: "North Asia’s President",
      description:
        "Long Description About That Person’s Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.",
    },
    {
      src: "/assets/portrait2.png",
      name: "Sequiera David",
      role: "North Asia’s President",
      description:
        "Long Description About That Person’s Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.",
    },
    {
      src: "/assets/portrait1.png",
      name: "David Sequiera",
      role: "North Asia’s President",
      description:
        "Long Description About That Person’s Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.",
    },
    {
      src: "/assets/portrait2.png",
      name: "David Sequiera",
      role: "North Asia’s President",
      description:
        "Long Description About That Person’s Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.",
    },
  ];

  const scroll = (dx: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <section id="partners" className="pb-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 sm:gap-8 lg:gap-[32px] max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center w-full text-center max-w-4xl">
          <p className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight text-[#212121] font-pt-sans-caption capitalize">
            partnered with most of the
          </p>
          <p className="text-3xl sm:text-4xl lg:text-[48px] leading-tight text-[#1a237e] mt-[-4px] sm:mt-[-8px] lg:mt-[-14px] font-just-another-hand">
            top people at each country
          </p>
        </div>

        {/* Carousel */}
        <div className="flex items-center w-full gap-4 lg:gap-[31px]">
          {/* Left Arrow - Hidden on mobile */}
          <button
            aria-label="scroll-left"
            onClick={() => scroll(-400)}
            className="hidden lg:inline-flex items-center justify-center border border-[#c3c3c3] rounded-full p-[9px] bg-gradient-to-r from-[#0000ff0d] to-[#1a237e99] transition-transform hover:scale-105 flex-shrink-0"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-[#FAFAFA]"
            >
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
                scrollbarWidth: "none" /* Firefox */,
                msOverflowStyle: "none" /* Internet Explorer 10+ */,
              }}
            >
              {cards.map((c, i) => (
                <div
                  key={i}
                  className="relative w-[250px] h-[350px] sm:w-[280px] sm:h-[390px] lg:w-[300px] lg:h-[426px] flex-shrink-0 rounded-[20px] overflow-hidden group"
                >
                  <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-[#1a237e52] via-[#f5f5f5cc] to-[#1a237e] opacity-80 group-hover:opacity-0 transition-opacity" />
                  {/* Image */}
                  <Image
                    src={c.src}
                    alt={c.name}
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
                  <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-5 lg:px-[20px] pb-6 sm:pb-8 lg:pb-[39px] pr-12 sm:pr-16 lg:pr-[80px] flex flex-col gap-1 sm:gap-2 lg:gap-[8px] transition-opacity group-hover:opacity-0">
                    <p className="text-white text-lg sm:text-xl lg:text-[24px] font-bold font-rem">
                      {c.name}
                    </p>
                    <p className="text-[#f5f5f5] text-xs lg:text-[12px] font-rem">
                      {c.role}
                    </p>
                  </div>

                  {/* Text overlay (hover state with description) */}
                  <div className="absolute inset-0 px-4 sm:px-5 lg:px-[20px] pt-4 sm:pt-5 lg:pt-[20px] flex flex-col gap-1 sm:gap-2 lg:gap-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-lg sm:text-xl lg:text-[24px] font-bold font-rem">
                      {c.name}
                    </p>
                    <p className="text-[#f5f5f5] text-xs lg:text-[12px] font-rem">
                      {c.role}
                    </p>
                    <div className="mt-auto pb-4 sm:pb-5 lg:pb-[20px] pr-4 sm:pr-5 lg:pr-[20px]">
                      <p className="text-[#f5f5f5] text-sm lg:text-[14px] leading-relaxed font-pt-sans-caption">
                        {c.description}
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-[#FAFAFA]"
            >
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
      </div>
    </section>
  );
}
