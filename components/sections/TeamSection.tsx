"use client";

import { useRef } from "react";
import { Facebook, Instagram } from "lucide-react";

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Hunters",
      team: "China Team",
      image: "/assets/portrait1.png",
    },
    {
      name: "Bears",
      team: "Russia Team",
      image: "/assets/portrait2.png",
    },
    {
      name: "Tiger",
      team: "India Team",
      image: "/assets/portrait1.png",
    },
    {
      name: "Samurai",
      team: "Japan Team",
      image: "/assets/portrait2.png",
    },
    {
      name: "Warrior",
      team: "Mongolia Team",
      image: "/assets/portrait1.png",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="mx-auto max-w-[1232px] px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-9">
          <h2
            className="text-[36px] font-bold text-[#212121] leading-[47px] mb-2 font-pt-sans-caption"
          >
            Meet The our team
          </h2>
          <div className="flex items-center gap-2">
            <span
              className="text-[48px] text-[#1a237e] underline leading-[48px] font-just-another-hand"
            >
              Read More
            </span>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 12 12" fill="none">
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
        <div className="w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide"
            style={{ width: "1441px" }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[271px] h-[271px] rounded-[28px] overflow-hidden"
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Social Icons */}
                <div className="absolute top-2 right-2 flex gap-1">
                  <div className="w-[42px] h-[42px] bg-[#f7f7f7]/30 backdrop-blur border border-gray-700/30 rounded-[20px] flex items-center justify-center">
                    <Facebook className="w-[22px] h-[22px] text-black" />
                  </div>
                  <div className="w-[42px] h-[42px] bg-[#f7f7f7]/30 backdrop-blur border border-gray-700/30 rounded-[20px] flex items-center justify-center">
                    <Instagram className="w-[22px] h-[22px] text-black" />
                  </div>
                </div>

                {/* Name Card */}
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-[#f7f7f7]/30 backdrop-blur border border-gray-700/30 rounded-[20px] px-[83px] py-4 text-center">
                    <p
                      className="text-[32px] font-bold text-[#212121] leading-[41px] mb-0 font-pt-sans-narrow"
                    >
                      {member.name}
                    </p>
                    <p
                      className="text-[14px] text-[#212121] leading-[18px] font-pt-sans-caption"
                    >
                      {member.team}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
      `}</style>
    </section>
  );
}
