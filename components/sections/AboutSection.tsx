export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-3 pt-6">
      <div className="px-3 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-12 lg:gap-20 xl:gap-[87px]">
          {/* Left Column */}
          <div className="flex sm:flex-col flex-row items-center sm:items-start gap-6 sm:gap-12 lg:gap-[52px] flex-1">
            <div className="flex flex-col items-start gap-0 sm:gap-3  w-full">
              <p className="text-base sm:text-xl text-gray-900 font-pt-sans-caption">
                About Us
              </p>
              <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-[40px] text-gray-900 font-bold leading-tight font-pt-sans-caption">
                know about who we are
              </h2>
            </div>

            <div className="inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-black rounded-full px-3 sm:px-6 py-2 sm:py-3 h-auto sm:h-[67px] w-fit hover:bg-gray-100 transition-colors cursor-pointer">
              <p className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 font-pt-sans-caption whitespace-nowrap">
                Read More About Us
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0"
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
          <div className="flex flex-col items-start lg:items-end justify-center gap-3 sm:gap-6 lg:gap-[15px] flex-1 lg:max-w-[666px]">
            <h3 className="text-lg sm:text-2xl lg:text-3xl xl:text-[32px] font-bold text-gray-900 leading-tight font-pt-sans-caption text-left lg:text-right">
              World Arm Lifting Federation (WAF)
            </h3>
            <p className="text-xs sm:text-base lg:text-[16px] font-bold text-gray-600 leading-relaxed font-pt-sans-caption text-left lg:text-right lg:max-w-[506px]">
              The World Arm Lifting Federation (WAF) is the official global
              organization dedicated to promoting and developing the sport of
              arm lifting worldwide. Founded to unify athletes, coaches, and
              enthusiasts under one federation, WAF sets international standards
              for competitions, athlete rankings, and fair play.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative -mt-14 mb-5 sm:mt-12 lg:mt-[-160px] h-[250px] sm:h-[400px] lg:h-[530px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute top-[80px] sm:top-[150px] lg:top-[192px] left-0 right-0 lg:left-0 lg:right-auto w-full lg:w-[1236px] h-[170px] sm:h-[250px] lg:h-[334px] rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/about-bg.png')",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute bottom-0 right-0 sm:bottom-3 sm:right-3 lg:top-[280px] lg:left-[1160px] lg:bottom-auto lg:right-auto flex items-center bg-gray-100 px-3 py-2 sm:px-4 lg:px-4 lg:py-2 rounded-tl-[30px] sm:rounded-tl-[40px] lg:rounded-tl-[46px] rounded-br-[15px] sm:rounded-br-[18px] lg:rounded-br-[22px]">
              <img
                src="/assets/logo.png"
                alt="WAF Logo"
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[42px] lg:h-[42px] rounded-full"
              />
            </div>
          </div>

          {/* Main Image */}
          <img
            src="/assets/about-pick.png"
            alt="About visual"
            className="absolute top-0 sm:top-[-8px] left-1/2 transform -translate-x-1/2 lg:left-[593px] lg:transform-none w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] lg:w-[446px] lg:h-[440px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
