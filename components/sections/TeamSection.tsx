"use client";

import { useRef } from "react";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dx, behavior: "smooth" });
  };

  const teamMembers = [
    {
      name: "Hunters",
      team: "China Team",
      image: "/assets/teams/China.png",
    },
    {
      name: "Bears",
      team: "Russia Team",
      image: "/assets/teams/Russia.png",
    },
    {
      name: "Tiger",
      team: "India Team",
      image: "/assets/teams/India.png",
    },
    {
      name: "Samurai",
      team: "Japan Team",
      image: "/assets/teams/Japan.png",
    },
    {
      name: "Warrior",
      team: "Mongolia Team",
      image: "/assets/teams/Mongolia.png",
    },
  ];

  return (
    <section id="team" className="py-0 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 lg:mb-9">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#212121] leading-tight mb-2 sm:mb-3 lg:mb-2 font-pt-sans-caption text-center">
            Meet The our team
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-3xl sm:text-4xl lg:text-[48px] text-[#1a237e] underline leading-tight font-just-another-hand">
              Read More
            </span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                className="sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]"
              >
                <path
                  d="M1 11L11 1M11 1H1M11 1V11"
                  stroke="#1a237e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Team Carousel */}
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

          <div className="w-full overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto scrollbar-hide pb-4 scroll-smooth touch-pan-x"
              style={{
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] lg:w-[271px] lg:h-[271px] rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 250px, 271px"
                  />
                  {/* Social Icons */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-[42px] lg:h-[42px] bg-white/30 backdrop-blur border border-gray-700/30 rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] flex items-center justify-center">
                      <Facebook className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px] text-black" />
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-[42px] lg:h-[42px] bg-white/30 backdrop-blur border border-gray-700/30 rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] flex items-center justify-center">
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px] text-black" />
                    </div>
                  </div>

                  {/* Name Card */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-white/30 backdrop-blur border border-gray-700/30 rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] px-4 sm:px-6 lg:px-[83px] py-1 text-center">
                      <p className="text-lg sm:text-xl lg:text-[32px] font-bold text-[#212121] leading-tight mb-0 font-pt-sans-narrow">
                        {member.name}
                      </p>
                      <p className="text-xs sm:text-sm lg:text-[14px] text-[#212121] leading-tight font-pt-sans-caption">
                        {member.team}
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

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide::-webkit-scrollbar-track {
          display: none;
        }
        .scrollbar-hide::-webkit-scrollbar-thumb {
          display: none;
        }
      `}</style>
    </section>
  );
}
