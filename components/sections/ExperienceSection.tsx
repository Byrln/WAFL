"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative bg-white overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20"
    >
      <div className="flex flex-col items-start w-full py-5">
        {/* CTA Section */}
        <div className="flex items-start self-stretch h-auto lg:h-[651px]">
          <div className="flex flex-col items-center flex-grow mt-4 sm:mt-0 lg:-mt-[39px]">
            <div className="flex flex-col items-center self-stretch lg:mx-[89px]">
              {/* Header */}
              <div className="inline-flex flex-col items-start justify-center self-stretch">
                <p className="text-[#212121] font-bold text-xl sm:text-2xl md:text-4xl lg:text-[64px] leading-tight sm:leading-[1.2] lg:leading-[83px] font-pt-sans-caption">
                  We aim to empower athletes
                </p>
                <div className="flex  sm:flex-row items-center sm:items-center self-stretch justify-center gap-4 sm:gap-6 lg:gap-[96px] mt-2 sm:-mt-2 lg:mt-[-12px] mr-0 lg:mr-[330px]">
                  <p className="text-[#1a237e] text-xl sm:text-2xl md:text-4xl lg:text-[64px] leading-tight sm:leading-[1.2] lg:leading-[83px] font-pt-sans-caption">
                    by instilling confidence
                  </p>
                  <div className="flex-shrink-0 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[64px] lg:h-[64px] overflow-hidden bg-[#1A237E]">
                    <Image
                      src="/assets/dumbbell.svg"
                      alt="Dumbbell"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Experience + CTA */}
              <div className="flex items-start sm:items-center justify-between self-stretch mx-2 sm:mx-4 md:mx-8 lg:mx-[34px] my-8 sm:my-4 lg:my-0 mt-8 sm:mt-2 lg:mt-[-123px] min-w-0 lg:min-w-[1160px] h-auto lg:h-[425px] gap-6 sm:gap-4 lg:gap-0">
                <div className="flex flex-col items-start gap-2 lg:gap-[4px] text-left">
                  <p className="text-[#1a237e] text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-bold font-pt-sans-caption">
                    Experience
                  </p>
                  <p className="text-[#1a237e] text-base sm:text-lg md:text-xl lg:text-[24px] w-full sm:w-auto lg:w-[240px] font-pt-sans-caption max-w-xs sm:max-w-none">
                    Our Coaching staff has over 12 years of experience
                  </p>
                </div>

                <Link
                  href={"#contact"}
                  className="inline-flex items-center justify-center gap-2 lg:gap-[10px] rounded-full bg-[#1A237E] h-12 sm:h-16 md:h-20 lg:h-[101px] px-4 sm:px-6 md:px-8 lg:px-[38px] py-3 sm:py-4 md:py-6 lg:py-[38px] cursor-pointer flex-shrink-0 self-start sm:self-center"
                >
                  <span className="text-white text-lg sm:text-2xl md:text-3xl lg:text-[64px] leading-tight lg:leading-[45px] font-just-another-hand cursor-pointer">
                    Join Us
                  </span>
                  <Image
                    src="/assets/north-east.svg"
                    alt="Arrow Up Right"
                    width={52}
                    height={52}
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-[52px] lg:h-[52px] flex-shrink-0"
                  />
                </Link>
              </div>
            </div>

            {/* Background Images */}
            <div className="relative self-stretch -mt-14 sm:-mt-16 md:-mt-[200px] lg:-mt-[300px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] mr-0 lg:mr-12">
              <div className="absolute top-[40px] sm:top-[60px] md:top-[250px] lg:top-[200px] rounded-[20px] w-full h-[180px] sm:h-[200px] md:h-[270px] lg:h-[340px] overflow-hidden">
                <Image
                  src="/assets/footercta.png"
                  alt="CTA Rectangle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-[80px] sm:-top-[90px] md:top-[20px] lg:-top-[80px] left-2 sm:left-12 md:left-[0px] lg:left-[5px] w-full max-w-[380px] sm:max-w-[450px] md:max-w-[800px] lg:max-w-[1138px] h-[300px] sm:h-[350px] md:h-[500px] lg:h-[620px]">
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

        {/* Footer Section */}
        <div className="flex flex-col items-center self-stretch justify-end rounded-[20px] bg-[#1a237e] py-6 sm:py-8 md:py-12 lg:py-[16px] h-auto md:h-[250px] lg:h-[289px] gap-6 sm:gap-8 md:gap-10 lg:gap-[93px] -mt-[180px] sm:-mt-[190px] md:mt-[20px] lg:mt-[6px]">
          <div className="flex flex-col md:flex-row lg:flex-row items-center self-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-[104px] mx-4 sm:mx-8 md:mx-12 lg:mx-[88px]">
            <h2 className="text-[#fafafa] font-bold text-xl sm:text-2xl md:text-4xl lg:text-[62px] leading-tight md:leading-[48px] lg:leading-[51px] text-center md:text-left lg:text-left w-full md:w-[450px] lg:w-[519px] font-pt-sans-caption flex-shrink-0">
              World Armlifting Federation
            </h2>

            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[20px] flex-shrink-0">
              <p className="text-[#fafafa] text-sm sm:text-base md:text-lg lg:text-[20px] w-full md:w-[320px] lg:w-[293px] font-pt-sans-caption text-center md:text-left lg:text-left">
                The official global organization dedicated to promoting and
                developing the sport of arm lifting.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center self-stretch gap-2 md:gap-[8px] lg:gap-[11px]">
            <div className="h-[1px] self-stretch bg-white" />
            <div className="text-center px-4 sm:px-6 md:px-8">
              <span className="text-[#fafafa] text-xs sm:text-sm md:text-base lg:text-[14px] font-pt-sans-caption">
                © 2025 World Arm Lifting Federation (WAF). All rights reserved.
              </span>
              <span className="text-[#fafafa] text-xs sm:text-sm md:text-base lg:text-[16px]">
                {" "}
              </span>
              <span className="text-white text-xs sm:text-sm md:text-base lg:text-[16px] font-pt-sans-caption">
                Designed & Developed by
              </span>
              <span className="text-[#fafafa] text-xs sm:text-sm md:text-base lg:text-[16px]">
                {" "}
              </span>
              <span className="text-white text-sm sm:text-base md:text-lg lg:text-[20px] font-bold font-pt-sans-caption">
                Byrln
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
