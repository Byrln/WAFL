import Image from "next/image";

export default function WAFHighlightSection() {
  return (
    <section id="highlight" className=" bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Badge - Frame 514940 */}
        {/* Responsive Header Badge - Frame 514940 */}
        <div className="relative  w-full h-16 sm:h-20 md:h-28 lg:h-[120px]">
          {/* Background bar - responsive height */}
          <div className="absolute top-1 sm:top-1 md:top-2 left-0 right-0 rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#212121] h-12 sm:h-16 md:h-20 lg:h-24" />

          {/* Content wrapper - responsive layout */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-center gap-1 sm:gap-2 md:gap-4 px-2 sm:px-4 h-full">
            {/* Left group: WAF + curve + HIGHLIGHT */}
            <div className="flex items-center gap-1 sm:gap-1 md:gap-2">
              <p className="font-rem flex-shrink-0 text-sm sm:text-lg md:text-2xl lg:text-4xl font-semibold text-white uppercase leading-tight">
                WAF
              </p>
              <Image
                src="/assets/curve-bar.png"
                alt="Curve bar"
                width={100}
                height={24}
                className="flex-shrink-0 w-20 h-5 sm:w-20 sm:h-7 md:w-32 md:h-10 lg:w-48 lg:h-12"
              />
              <p className="font-rem font-extrabold flex-shrink-0 text-lg sm:text-2xl md:text-4xl lg:text-6xl text-white uppercase leading-tight -ml-1">
                HIGHLIGHT
              </p>
            </div>

            {/* Right group: balloon + section */}
            <div className="flex items-center gap-1 sm:gap-1 md:gap-2">
              <Image
                src="/assets/element.png"
                alt="Air balloon"
                width={100}
                height={100}
                className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
              />
              <p className="font-rem flex-shrink-0 text-sm sm:text-lg md:text-2xl lg:text-4xl font-semibold text-white uppercase leading-tight">
                section
              </p>
            </div>
          </div>
        </div>
        {/* Main Content Grid - Layout matching provided image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Large Featured Card - Left side, spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div
              className="relative h-64 sm:h-72 md:h-82 lg:h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden"
              style={{
                backgroundImage: "url(/assets/news1.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #33333300 0%, #000000ad 100%)",
                }}
              >
                {/* Read More Button */}
                <div className="self-start">
                  <div className="inline-flex items-center justify-center gap-2.5 border-2 border-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 bg-black/60">
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Read More
                    </p>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="sm:w-4 sm:h-4"
                    >
                      <path
                        d="M7 7h10v10M7 17L17 7"
                        stroke="#fafafa"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                    Championship final
                  </h3>
                  <p className="text-sm sm:text-base lg:text-xl text-white line-clamp-2 sm:line-clamp-3">
                    The World Arm Lifting Federation (WAF) is the official
                    global organization dedicated to promoting and developing
                    the sport of arm lifting worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Cards - 2x2 Grid Layout */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-3 lg:gap-4 h-full">
              {/* Quote Card */}
              <div className="h-full">
                <div
                  className="relative h-56 sm:h-64 md:h-80 lg:h-48 rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4"
                  style={{ background: "#1a237e" }}
                >
                  <Image
                    src="/assets/muscle.svg"
                    alt="Muscle icon"
                    width={30}
                    height={30}
                    className="absolute bottom-1 -left-1 lg:bottom-2 lg:-left-2 w-20 h-20 lg:w-8 lg:h-8"
                  />
                  <Image
                    src="/assets/quote-mark.svg"
                    alt="Quote icon"
                    width={16}
                    height={16}
                    className="absolute top-2 right-2 lg:top-3 lg:right-3 w-10 h-10 lg:w-4 lg:h-4"
                  />
                  <div className="text-center h-full flex items-center justify-center px-1">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-sm font-bold uppercase leading-tight">
                      <span className="text-yellow-400">"UNLEASH THE</span>
                      <br />
                      <span className="text-yellow-400">POWER WITHIN.</span>
                      <br />
                      <span className="text-white">GRIP IT,</span>
                      <br />
                      <span className="text-white">LIFT IT.</span>
                      <br />
                      <span className="text-yellow-400">CONQUER THE</span>
                      <br />
                      <span className="text-yellow-400">WORLD."</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Card */}
              <div className="h-full">
                <div
                  className="relative h-56 sm:h-64 md:h-82 lg:h-48 rounded-xl lg:rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: "url(/assets/news5.png)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl lg:rounded-2xl"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #24242400 0%, #000000c7 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Bottom Event Card - Spans both columns */}
              <div className="col-span-2">
                <div
                  className="relative h-56 sm:h-64 md:h-80 lg:h-[190px] rounded-xl lg:rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: "url(/assets/news3.png)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="absolute inset-0 flex flex-col justify-between p-2 sm:p-3 lg:p-4 rounded-xl lg:rounded-2xl"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #3b3a3a00 0%, #000000bf 100%)",
                    }}
                  >
                    {/* Read More Button */}
                    <div className="self-start">
                      <div className="inline-flex items-center justify-center gap-1.5 lg:gap-2.5 border-2 border-white rounded-full px-2 sm:px-3 py-1 sm:py-1.5 bg-black/60">
                        <p className="text-xs sm:text-sm lg:text-sm font-bold text-white">
                          Read More
                        </p>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="lg:w-3 lg:h-3"
                        >
                          <path
                            d="M7 7h10v10M7 17L17 7"
                            stroke="#fafafa"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white uppercase">
                        Our new Event
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-sm text-white line-clamp-2">
                        in this event is crazy people are came. Apollons
                        athletes are won these time, next is who?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
