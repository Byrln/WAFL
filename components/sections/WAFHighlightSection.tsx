import Image from "next/image";

export default function WAFHighlightSection() {
  return (
    <section id="highlight" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Badge - Frame 514940 */}
        <div className="relative mb-12" style={{ height: "120px" }}>
          <div
            className="absolute top-2 left-0 rounded-3xl"
            style={{
              background: "#212121",
              width: "1230px",
              height: "101px",
              borderRadius: "24px",
            }}
          />
          <div
            className="absolute top-0 left-8 flex items-center gap-2"
            style={{ width: "1146px", height: "120px" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="flex items-center justify-center gap-2 p-2.5">
                  <p
                    className="flex-shrink-0 font-rem"
                    style={{
                      fontSize: "48px",
                      fontWeight: "600",
                      color: "#fafafa",
                      textTransform: "uppercase",
                      lineHeight: "60px",
                      letterSpacing: "0",
                    }}
                  >
                    WAF
                  </p>
                  <Image
                    src="/assets/curve-bar.png"
                    alt="Curve bar"
                    width={135}
                    height={80}
                    className="flex-shrink-0"
                  />
                </div>
                <p
                  className="flex-shrink-0 font-extrabold mx-2 font-rem"
                  style={{
                    fontSize: "96px",
                    color: "#fafafa",
                    textTransform: "uppercase",
                    lineHeight: "120px",
                    letterSpacing: "0",
                    marginLeft: "-5px",
                  }}
                >
                  HIGHLIGHT
                </p>
              </div>
            </div>
            <Image
              src="/assets/element.png"
              alt="Air balloon"
              width={80}
              height={80}
              className="flex-shrink-0"
            />
            <p
              className="flex-shrink-0 font-rem"
              style={{
                fontSize: "48px",
                fontWeight: "600",
                color: "#fafafa",
                textTransform: "uppercase",
                lineHeight: "60px",
                letterSpacing: "0",
              }}
            >
              section
            </p>
          </div>
        </div>

        {/* Main Content Grid - Frame 514954 */}
        <div
          className="flex items-start gap-3"
          style={{ alignSelf: "stretch" }}
        >
          {/* Large Featured Card - Rectangle 5591 */}
          <div
            className="flex items-center rounded-3xl"
            style={{
              backgroundImage: "url(/assets/news1.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="flex flex-col items-start justify-center flex-grow rounded-3xl px-6 py-24"
              style={{
                height: "471px",
                width: "735px",
                rowGap: "303px",
                backgroundImage:
                  "linear-gradient(180deg, #33333300 0%, #000000ad 100%)",
              }}
            >
              {/* Read More Button - Frame 514925 */}
              <div
                className="flex items-center justify-center gap-2.5 border-2 border-white rounded-full px-4 py-2 mt-2"
                style={{
                  background: "#00000099",
                  width: "131px",
                  height: "27px",
                  border: "2px solid #fafafa",
                  borderRadius: "56px",
                }}
              >
                <p
                  className="flex-shrink-0 font-pt-sans-caption"
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#fafafa",
                    lineHeight: "18px",
                    letterSpacing: "0",
                  }}
                >
                  Read More
                </p>
                <svg width="32" height="32" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M7 7h10v10M7 17L17 7"
                    stroke="#fafafa"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Content - Frame 514941 */}
              <div
                className="flex flex-col items-start self-stretch"
                style={{ rowGap: "0px" }}
              >
                <h3
                  className="flex-shrink-0 self-stretch font-rem"
                  style={{
                    fontSize: "40px",
                    fontWeight: "700",
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "0",
                  }}
                >
                  Championship final
                </h3>
                <p
                  className="flex-shrink-0 self-stretch overflow-hidden text-ellipsis line-clamp-2 font-pt-sans-caption"
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    height: "66px",
                  }}
                >
                  The World Arm Lifting Federation (WAF) is the official global
                  organization dedicated to promoting and developing the sport
                  of arm lifting worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Cards - Frame 514953 */}
          <div
            className="flex flex-col items-center justify-center"
            style={{ width: "482px", rowGap: "26px" }}
          >
            {/* Top Row - Frame 514952 */}
            <div
              className="inline-flex items-center justify-center self-stretch"
              style={{ marginRight: "-2px", marginLeft: "-2px" }}
            >
              {/* Blue Card - Frame 514948 */}
              <div className="flex items-center pr-3.5">
                <div
                  className="relative rounded-2xl"
                  style={{
                    background: "#1a237e",
                    width: "239px",
                    height: "198px",
                  }}
                >
                  <Image
                    src="/assets/muscle.svg"
                    alt="Muscle icon"
                    width={86}
                    height={86}
                    className="absolute"
                    style={{
                      top: "102px",
                      left: "-10px",
                      overflow: "hidden",
                    }}
                  />
                  <p
                    className="absolute text-center font-rem"
                    style={{
                      top: "20px",
                      left: "8px",
                      width: "231px",
                      height: "173px",
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#000000",
                      textTransform: "uppercase",
                      letterSpacing: "0",
                      lineHeight: "1.2",
                    }}
                  >
                    <span style={{ color: "#FFEB3B" }}>"UNLEASH THE</span>
                    <br />
                    <span style={{ color: "#FFEB3B" }}>POWER WITHIN.</span>
                    <br />
                    <span style={{ color: "#ffffff" }}>GRIP IT,</span>
                    <br />
                    <span style={{ color: "#ffffff" }}>LIFT IT.</span>
                    <br />
                    <span style={{ color: "#FFEB3B" }}>CONQUER THE</span>
                    <br />
                    <span style={{ color: "#FFEB3B" }}>WORLD."</span>
                  </p>
                  <Image
                    src="/assets/quote-mark.svg"
                    alt="Quote icon"
                    width={33}
                    height={33}
                    className="absolute"
                    style={{
                      top: "7px",
                      left: "193px",
                      overflow: "hidden",
                    }}
                  />
                </div>
              </div>

              {/* Image Card - Rectangle 5594 */}
              <div
                className="flex items-center rounded-2xl"
                style={{
                  backgroundImage: "url(/assets/news5.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="rounded-2xl"
                  style={{
                    width: "233px",
                    height: "198px",
                    backgroundImage:
                      "linear-gradient(180deg, #24242400 0%, #000000c7 100%)",
                  }}
                />
              </div>
            </div>

            {/* Bottom Card - Rectangle 5592 */}
            <div
              className="flex items-center self-stretch rounded-2xl"
              style={{
                backgroundImage: "url(/assets/news3.png)",
                backgroundPosition: "0px",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="flex flex-col items-start justify-center flex-grow rounded-2xl px-3"
                style={{
                  height: "246px",
                  rowGap: "131px",
                  backgroundImage:
                    "linear-gradient(180deg, #3b3a3a00 0%, #000000bf 100%)",
                }}
              >
                {/* Read More Button */}
                <div
                  className="flex items-center justify-center gap-2.5 border-2 border-white rounded-full px-4 py-2"
                  style={{
                    background: "#00000099",
                    width: "131px",
                    height: "27px",
                    border: "2px solid #fafafa",
                    borderRadius: "56px",
                  }}
                >
                  <p
                    className="flex-shrink-0 font-pt-sans-caption"
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#fafafa",
                      lineHeight: "18px",
                      letterSpacing: "0",
                    }}
                  >
                    Read More
                  </p>
                  <svg width="32" height="32" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M7 7h10v10M7 17L17 7"
                      stroke="#fafafa"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div
                  className="flex flex-col items-start self-stretch"
                  style={{ rowGap: "2px" }}
                >
                  <h4
                    className="flex-shrink-0 self-stretch font-rem"
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      letterSpacing: "0",
                    }}
                  >
                    Our new Event
                  </h4>
                  <p
                    className="flex-shrink-0 self-stretch overflow-hidden text-justify font-rem"
                    style={{
                      fontSize: "15px",
                      color: "#ffffff",
                      letterSpacing: "0",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    in this event is crazy people are came. Apollons atheletes
                    are won these time, next is who?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
