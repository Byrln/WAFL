export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white pt-20 mx-auto max-w-7xl">
      <div className=" px-8">
        <div style={{ display: "flex", alignItems: "center", gap: "87px" }}>
          {/* Left Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "52px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignSelf: "stretch",
                gap: "20px",
              }}
            >
              <p
                className="capitalize font-pt-sans-caption"
                style={{
                  fontSize: "20px",
                  color: "#212121",
                  letterSpacing: "0",
                  lineHeight: "26px",
                  textTransform: "none",
                }}
              >
                About Us
              </p>
              <p
                className="font-pt-sans-caption"
                style={{
                  fontSize: "40px",
                  color: "#212121",
                  fontWeight: 700,
                  lineHeight: "52px",
                  letterSpacing: "0",
                  textTransform: "none",
                }}
              >
                know about who we are
              </p>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                alignSelf: "stretch",
                marginRight: "207px",
                border: "2px solid #000000",
                borderRadius: "56px",
                padding: "8px 18px",
                height: "67px",
                width: "fit-content",
              }}
            >
              <p
                className="font-pt-sans-caption"
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#212121",
                  lineHeight: "26px",
                  letterSpacing: "0",
                  width: "200px",
                }}
              >
                Read More About Us
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ width: "24px", height: "24px", overflow: "hidden" }}
              >
                <path
                  d="M7 7h10v10M7 17L17 7"
                  stroke="#212121"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Right Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: "15px",
              width: "666px",
            }}
          >
            <p
              className="font-pt-sans-caption"
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#212121",
                lineHeight: "41px",
                letterSpacing: "0",
                textAlign: "right",
              }}
            >
              World Arm Lifting Federation (WAF)
            </p>
            <p
              className="font-pt-sans-caption"
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#5a5a5a",
                lineHeight: "23px",
                letterSpacing: "0",
                textAlign: "right",
                width: "506px",
              }}
            >
              The World Arm Lifting Federation (WAF) is the official global
              organization dedicated to promoting and developing the sport of
              arm lifting worldwide.
              <br /> Founded to unify athletes, coaches, and enthusiasts under
              one federation, WAF sets international standards for
              competitions, athlete rankings, and fair play.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div
          style={{
            position: "relative",
            marginTop: "-160px",
            height: "530px",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: "192px",
              left: 0,
              alignItems: "flex-start",
              borderRadius: "25px",
              paddingTop: "280px",
              paddingLeft: "1160px",
              width: "1236px",
              height: "334px",
              backgroundImage: "url('/assets/about-bg.png')",
              backgroundPosition: "-49px -35px",
              backgroundSize: "104.6% 117.32%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                background: "#f5f5f5",
                padding: "6px 18px",
                borderTopLeftRadius: "46px",
                borderBottomRightRadius: "22px",
              }}
            >
              <img
                src="/assets/logo.png"
                alt="WAF Logo"
                style={{
                  borderRadius: "9999px",
                  width: "42px",
                  height: "42px",
                }}
              />
            </div>
          </div>
          <img
            src="/assets/about-pick.png"
            alt="About visual"
            style={{
              position: "absolute",
              top: "-8px",
              left: "393px",
              width: "446px",
              height: "440px",
            }}
          />
        </div>
      </div>
    </section>
  );
}