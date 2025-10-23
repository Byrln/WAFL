"use client";

import Image from "next/image";

export default function CountriesSection() {
  return (
    <section
      id="countries"
      className="relative overflow-hidden bg-white"
      style={{ height: "400px" }}
    >
      <h3
        className="absolute text-center font-bold uppercase z-10 font-pt-sans-caption"
        style={{
          top: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "413px",
          height: "47px",
          fontSize: "36px",
          color: "#212121",
          lineHeight: "47px",
          letterSpacing: "0",
        }}
      >
        MEMBER OF COUNTRIES
      </h3>

      {/* Top scrolling ribbon */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: "180px",
          left: "0",
          width: "100vw",
          height: "80px",
          transform: "rotate(-4deg)",
          transformOrigin: "center",
          filter: "blur(4px)",
        }}
      >
        <div
          className="absolute flex items-center animate-scroll-left"
          style={{
            top: "0",
            left: "0",
            height: "80px",
            backgroundImage:
              "linear-gradient(90deg, #0097a7 0%, #4689b3 51.44%, #1a237e 100%)",
            width: "200%",
            animation: "scrollLeft 20s linear infinite",
          }}
        >
          {/* First set of flags */}
          <div
            className="flex items-center"
            style={{
              minWidth: "100vw",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            {[
              { src: "/assets/flags/Japan.svg", name: "JAPAN" },
              { src: "/assets/flags/India.svg", name: "INDIA" },
              { src: "/assets/flags/Mongolia.svg", name: "MONGOLIA" },
              { src: "/assets/flags/Malaysia.svg", name: "MALAYSIA" },
              { src: "/assets/flags/China.svg", name: "CHINA" },
              { src: "/assets/flags/Russia.svg", name: "RUSSIA" },
            ].map((f, index) => (
              <div
                key={f.name}
                className="flex items-center"
                style={{ marginRight: "60px" }}
              >
                <Image
                  src={f.src}
                  alt={`${f.name} flag`}
                  width={50}
                  height={50}
                  className="flex-shrink-0"
                />
                <span
                  className="font-bold uppercase mx-4 font-pt-sans-caption"
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    lineHeight: "26px",
                    letterSpacing: "0",
                  }}
                >
                  {f.name}
                </span>
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0" />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div
            className="flex items-center"
            style={{
              minWidth: "100vw",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            {[
              { src: "/assets/flags/Japan.svg", name: "JAPAN" },
              { src: "/assets/flags/India.svg", name: "INDIA" },
              { src: "/assets/flags/Malaysia.svg", name: "MALAYSIA" },
              { src: "/assets/flags/Mongolia.svg", name: "MONGOLIA" },
              { src: "/assets/flags/China.svg", name: "CHINA" },
              { src: "/assets/flags/Russia.svg", name: "RUSSIA" },
            ].map((f, index) => (
              <div
                key={`${f.name}-2`}
                className="flex items-center"
                style={{ marginRight: "60px" }}
              >
                <Image
                  src={f.src}
                  alt={`${f.name} flag`}
                  width={50}
                  height={50}
                  className="flex-shrink-0"
                />
                <span
                  className="font-bold uppercase mx-4 font-pt-sans-caption"
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    lineHeight: "26px",
                    letterSpacing: "0",
                  }}
                >
                  {f.name}
                </span>
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scrolling ribbon */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: "120px",
          left: "0",
          width: "100vw",
          height: "80px",
          transformOrigin: "center",
        }}
      >
        <div
          className="absolute flex items-center"
          style={{
            top: "0",
            left: "0",
            height: "80px",
            backgroundImage:
              "linear-gradient(90deg, #0097a7 0%, #4689b3 51.44%, #1a237e 100%)",
            width: "200%",
            animation: "scrollRight 25s linear infinite",
          }}
        >
          {/* First set of flags */}
          <div
            className="flex items-center"
            style={{
              minWidth: "100vw",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            {[
              { src: "/assets/flags/Japan.svg", name: "JAPAN" },
              { src: "/assets/flags/India.svg", name: "INDIA" },
              { src: "/assets/flags/Mongolia.svg", name: "MONGOLIA" },
              { src: "/assets/flags/Malaysia.svg", name: "MALAYSIA" },
              { src: "/assets/flags/China.svg", name: "CHINA" },
              { src: "/assets/flags/Russia.svg", name: "RUSSIA" },
            ].map((f, index) => (
              <div
                key={f.name}
                className="flex items-center"
                style={{ marginRight: "60px" }}
              >
                <Image
                  src={f.src}
                  alt={`${f.name} flag`}
                  width={50}
                  height={50}
                  className="flex-shrink-0"
                />
                <span
                  className="font-bold uppercase mx-4 font-pt-sans-caption"
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    lineHeight: "26px",
                    letterSpacing: "0",
                  }}
                >
                  {f.name}
                </span>
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0" />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div
            className="flex items-center"
            style={{
              minWidth: "100vw",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            {[
              { src: "/assets/flags/Japan.svg", name: "JAPAN" },
              { src: "/assets/flags/India.svg", name: "INDIA" },
              { src: "/assets/flags/Mongolia.svg", name: "MONGOLIA" },
              { src: "/assets/flags/Malaysia.svg", name: "MALAYSIA" },
              { src: "/assets/flags/China.svg", name: "CHINA" },
              { src: "/assets/flags/Russia.svg", name: "RUSSIA" },
            ].map((f, index) => (
              <div
                key={`${f.name}-2`}
                className="flex items-center"
                style={{ marginRight: "60px" }}
              >
                <Image
                  src={f.src}
                  alt={`${f.name} flag`}
                  width={50}
                  height={50}
                  className="flex-shrink-0"
                />
                <span
                  className="font-bold uppercase mx-4 font-pt-sans-caption"
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    lineHeight: "26px",
                    letterSpacing: "0",
                  }}
                >
                  {f.name}
                </span>
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
