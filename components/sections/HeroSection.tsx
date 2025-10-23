export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center mx-5 my-2.5 rounded-4xl overflow-hidden"
      style={{ height: "753px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/Herosection.png')",
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/grain.jpg')",
          opacity: 0.2,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/64" />

      <div
        className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-[1152px] mx-auto gap-[18px]"
        style={{ padding: "192px 83px" }}
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h1
            className="uppercase text-center leading-[1.2] mb-0 font-rem"
            style={{
              fontSize: "85px",
              fontWeight: "800",
              background:
                "radial-gradient(circle at 50% 57%, rgba(245, 245, 245, 1) 0%, rgba(33, 33, 33, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            WORLD
            <br />
            ARMLIFTING FEDERATION
          </h1>

          <div className="relative" style={{ width: "758px", height: "108px" }}>
            <p
              className="text-center absolute font-pt-sans-caption"
              style={{
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "1.294",
                background:
                  "radial-gradient(circle at 50% 57%, rgba(255, 255, 255, 1) 0%, rgba(153, 153, 153, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                left: "-54px",
                top: "0",
                width: "865px",
                height: "54px",
              }}
            >
              The official body for armlifting worldwide. Join thousands of
              athletes
              <br />
              competing in the ultiamte test of strength, technique and
              determation.
            </p>

            <div
              className="flex items-center justify-center gap-6 absolute"
              style={{
                left: "79px",
                top: "70px",
              }}
            >
              <button
                className="flex items-center justify-center gap-[10px] uppercase text-center font-rem"
                style={{
                  fontSize: "15px",
                  fontWeight: "800",
                  lineHeight: "1.2",
                  color: "#212121",
                  background:
                    "radial-gradient(ellipse at 93% 0%, rgba(245, 245, 245, 1) 26%, rgba(33, 33, 33, 1) 100%)",
                  borderRadius: "41px",
                  padding: "8px 26px",
                }}
              >
                be part of the pederation
              </button>
              <button
                className="flex items-center justify-center gap-[10px] uppercase text-center font-rem"
                style={{
                  fontSize: "15px",
                  fontWeight: "800",
                  lineHeight: "1.2",
                  color: "#FAFAFA",
                  background: "transparent",
                  border: "3px solid #FAFAFA",
                  borderRadius: "41px",
                  padding: "8px 26px",
                }}
              >
                See upcoming Events
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1">
          <span
            className="text-center font-pt-sans-caption"
            style={{
              fontSize: "15px",
              fontWeight: "700",
              lineHeight: "1.294",
              color: "#FFFFFF",
            }}
          >
            1500+
          </span>
          <span
            className="text-center font-pt-sans-caption"
            style={{
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "1.294",
              background:
                "radial-gradient(circle at 50% 57%, rgba(255, 255, 255, 1) 0%, rgba(153, 153, 153, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            active members
          </span>
        </div>
      </div>
    </section>
  );
}
