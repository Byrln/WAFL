export default function FooterSection() {
  return (
    <footer className="flex flex-col items-center self-stretch justify-between rounded-[20px] bg-[#1a237e] py-6 sm:py-8 lg:py-[16px] px-4 sm:px-6 lg:px-8 xl:px-[88px] min-h-[200px] sm:min-h-[250px] lg:h-[289px] gap-6 sm:gap-8 lg:gap-[93px]">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start self-stretch gap-6 sm:gap-8 lg:gap-[104px] w-full">
        {/* Title */}
        <div className="flex-shrink-0 text-center lg:text-left">
          <h2 className="text-[#fafafa] font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] leading-tight lg:leading-[51px] lg:w-[519px] font-pt-sans-caption">
            World Armlifting Federation
          </h2>
        </div>

        {/* Info Section */}
        <div className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-[20px] flex-grow text-center sm:text-left">
          {/* Description */}
          <div className="flex-1">
            <p className="text-[#fafafa] text-sm sm:text-base lg:text-lg xl:text-[20px] leading-relaxed font-pt-sans-caption">
              The official global organization dedicated to promoting and developing the sport of armlifting worldwide.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex-1">
            <div className="text-[#fafafa] text-sm sm:text-base lg:text-lg xl:text-[20px] leading-relaxed font-pt-sans-caption space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span>📍</span>
                <span>Ulaanbaatar, Mongolia</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span>✉️</span>
                <span>info@waf.org</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span>🌐</span>
                <span>www.waf.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center self-stretch gap-3 sm:gap-4 lg:gap-[11px] w-full">
        <div className="h-[1px] self-stretch bg-white/30" />
        <div className="text-center px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
            <span className="text-[#fafafa] text-xs sm:text-sm lg:text-[14px] font-pt-sans-caption">
              © 2025 World Armlifting Federation (WALF). All rights reserved.
            </span>
            <span className="hidden sm:inline text-[#fafafa]">•</span>
            <div className="flex items-center gap-1">
              <span className="text-white text-xs sm:text-sm lg:text-[14px] font-pt-sans-caption">
                Designed & Developed by
              </span>
              <span className="text-white text-sm sm:text-base lg:text-[16px] font-bold font-pt-sans-caption">
                Byrln
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
