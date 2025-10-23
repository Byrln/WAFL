"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-white overflow-hidden">
      <div className="mx-auto" style={{ width: "1410px" }}>
        <div className="flex items-start pr-[5px]" style={{ height: "651px" }}>
          <div className="flex flex-col items-center flex-grow w-full">
            <div className="flex flex-col items-center self-stretch mr-[89px] ml-[89px]">
              {/* Header */}
              <div className="inline-flex flex-col items-start  justify-center">
                <p className="text-[#212121] font-bold text-[64px] leading-[83px] font-pt-sans-caption">
                  We aim to empower athletes
                </p>
                <div className="inline-flex items-center justify-center gap-[96px] mt-[-12px] mr-[330px] self-stretch">
                  <p className="text-[#1a237e] text-[64px] leading-[83px] font-pt-sans-caption w-full">
                    by instilling confidence
                  </p>
                  <div className="w-[68px] h-[58px] rounded-full overflow-hidden flex items-center justify-center bg-[#1A237E]">
                    <Image
                      src="/assets/muscle.svg"
                      alt="Dumbbell"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>

              {/* Experience + CTA */}
              <div className="flex items-center justify-between self-stretch mt-[-123px] mx-[34px] min-w-[1160px] h-[425px]">
                <div className="flex flex-col items-start gap-[4px]">
                  <p className="text-[#1a237e] text-[64px] font-bold text-center self-stretch font-pt-sans-caption">
                    Experience
                  </p>
                  <p className="text-[#1a237e] text-[24px] w-[240px] font-pt-sans-caption">
                    Our Coaching staff has over 12 years of experience
                  </p>
                </div>

                <Link
                  href={"#contact"}
                  className="inline-flex items-center justify-center gap-[10px] rounded-full bg-[#1A237E] h-[101px] px-[38px] py-[38px] cursor-pointer"
                >
                  <span className="text-white text-[64px] leading-[45px] font-just-another-hand cursor-pointer">
                    Join Us
                  </span>
                  <Image
                    src="/assets/north-east.svg"
                    alt="Arrow Up Right"
                    width={52}
                    height={52}
                  />
                </Link>
              </div>
            </div>

            {/* Background imagery */}
            <div className="relative mt-[-402px] h-[800px] w-full">
              <div className="absolute top-[319px] left-0 w-[1405px] h-[280px] rounded-[20px] overflow-hidden">
                <Image
                  src="/assets/footercta.png"
                  alt="CTA Rectangle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-0 left-[5px] w-[1138px] h-[638px]">
                <Image
                  src="/assets/footer-pick.png"
                  alt="Background"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
