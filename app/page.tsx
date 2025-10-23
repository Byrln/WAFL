import Image from "next/image";
import { Button } from "@/components/ui/button";

// Import all section components
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WAFHighlightSection from "@/components/sections/WAFHighlightSection";
import QuoteSection from "@/components/sections/QuoteSection";
import CountriesSection from "@/components/sections/CountriesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import TeamSection from "@/components/sections/TeamSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-18 items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/logo.png"
                alt="WALF Logo"
                width={60}
                height={60}
                className="h-14 w-14"
              />
              <span className="text-xl font-semibold text-white">
                World Armlifting <br /> Federation
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-10">
              <a
                href="#home"
                className="px-6 py-2.5 text-sm font-medium text-white border-2 border-white rounded-full hover:bg-gray-100 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                About
              </a>
              <a
                href="#events"
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                Events
              </a>
              <a
                href="#records"
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                Records
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                Contact Us
              </a>
            </nav>

            <div className="flex items-center gap-4">
              {/* Facebook Icon */}
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Email Icon */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* All Sections */}
      <div className="pt-20">
        <HeroSection />
      </div>
      <AboutSection />
      <WAFHighlightSection />
      <CountriesSection />
      <PartnersSection />
      <TeamSection />
      <ExperienceSection />
      <FooterSection />
    </div>
  );
}
