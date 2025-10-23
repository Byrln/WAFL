import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Blue Card */}
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <blockquote 
              className="text-center uppercase font-rem"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "1.4",
                letterSpacing: "0.02em",
                color: "#ffffff"
              }}
            >
              "Unleash the power within, embrace the journey ahead, and let your dreams become your reality."
            </blockquote>
            <div className="mt-6 text-center">
              <cite 
                className="not-italic font-medium font-rem"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#e3f2fd"
                }}
              >
                — WALF Team
              </cite>
            </div>
          </div>

          {/* Image Card */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/assets/news2.png"
              alt="Inspirational background"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p 
                className="text-white text-center uppercase font-rem"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "1.4",
                  letterSpacing: "0.02em"
                }}
              >
                Transform your vision into victory
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Card with Read More Button */}
        <div className="mt-8 relative rounded-2xl overflow-hidden">
          <div 
            className="relative h-64 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/news2.png')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
            <div className="relative h-full flex items-center justify-between px-8">
              <div className="text-white">
                <h3 
                  className="uppercase mb-4 font-rem"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "1.3",
                    letterSpacing: "0.02em"
                  }}
                >
                  Ready to start your journey?
                </h3>
                <p 
                  className="uppercase font-rem"
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "1.4",
                    letterSpacing: "0.02em",
                    color: "#e3f2fd"
                  }}
                >
                  Discover the possibilities that await
                </p>
              </div>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                Read More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}