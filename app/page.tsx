// Server component page to support Next.js metadata exports

import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WAFHighlightSection from "@/components/sections/WAFHighlightSection";
import CountriesSection from "@/components/sections/CountriesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import TeamSection from "@/components/sections/TeamSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FooterSection from "@/components/sections/FooterSection";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <PageTransition className="bg-white overflow-hidden">
      <main className="min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />

        {/* All Sections */}
        <div className="pt-16 sm:pt-20">
          <HeroSection />
        </div>

        <AnimatedSection delay={0.1}>
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <WAFHighlightSection />
        </AnimatedSection>

        <AnimatedSection delay={0.1} direction="left">
          <CountriesSection />
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="right">
          <PartnersSection />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <TeamSection />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ExperienceSection />
        </AnimatedSection>
      </main>
      <Script id="ld-org-home" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "World Armlifting Federation (WAF)",
          url: getSiteUrl(),
          logo: `${getSiteUrl()}/assets/logo.png`,
          sameAs: [
            "https://twitter.com/waf",
            "https://instagram.com/waf",
          ],
        })}
      </Script>
    </PageTransition>
  );
}

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover WAF highlights, partners, teams, and global armlifting community.",
  alternates: {
    canonical: getSiteUrl(),
  },
  openGraph: {
    url: getSiteUrl(),
  },
};
