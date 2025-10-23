export default function FooterSection() {
  return (
    <footer className="bg-white pb-4">
      <div className="mx-auto" style={{ width: "1410px" }}>
        <div
          className="flex flex-col items-center justify-end rounded-[20px] bg-[#1a237e] py-[16px] px-[3px]"
          style={{ height: "300px", rowGap: "93px" }}
        >
          {/* Top row */}
          <div className="inline-flex items-center self-stretch gap-[104px] mr-[88px] ml-[88px]">
            <p
              className="text-[#fafafa] font-bold text-[58px] leading-[51px] w-[519px] font-pt-sans-caption"
            >
              World Armlifting Federation
            </p>

            <div className="inline-flex items-center gap-[20px]">
              <p
                className="text-[#fafafa] text-[18px] w-[293px] font-pt-sans-caption"
              >
                The official global organization dedicated to promoting and
                developing the sport of arm lifting.
              </p>
              <p
                className="text-[#fafafa] text-[18px] w-[293px] font-pt-sans-caption"
              >
                📍 Headquarters: Ulaanbaatar, Mongolia
                <br /> ✉️ Email: info@waf.org
                <br /> 🌐 Website: www.waf.org
              </p>
            </div>
          </div>

          {/* Divider and copyright */}
          <div className="flex flex-col items-center self-stretch gap-[11px]">
            <div className="h-[1px] w-full bg-white" />
            <p className="text-center text-[0px] text-black">
              <span
                className="text-[#fafafa] text-[14px] font-pt-sans-caption"
              >
                © 2025 World Arm Lifting Federation (WAF). All rights reserved.
              </span>
              <span className="text-[#fafafa] text-[16px]">&nbsp;</span>
              <span
                className="text-white text-[16px] font-pt-sans-caption"
              >
                Designed & Developed by
              </span>
              <span className="text-[#fafafa] text-[16px]">&nbsp;</span>
              <span
                className="text-white text-[20px] font-bold font-pt-sans-caption"
              >
                Byrln
              </span>
              <span className="text-[#0097a7] text-[16px]">&nbsp;</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
