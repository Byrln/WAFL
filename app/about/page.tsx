// Server component page to support Next.js metadata exports

import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import LeadersSlider from "../../components/sections/LeadersSlider";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import FooterSection from "@/components/sections/FooterSection";

export default function About() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Navigation */}
        <Navbar />
        <div className="bg-gradient-to-b from-white via-blue-700 to-blue-600 py-20">
          {/* Hero Section */}
          <div className="relative flex items-center justify-center mx-1 sm:mx-3 lg:mx-5 rounded-xl sm:rounded-2xl lg:rounded-4xl overflow-hidden min-h-[500px] lg:min-h-[600px] md:max-h-full lg:max-h-[650px]">
            {/* Background with multiple layers */}
            <div
              className="absolute inset-0 bg-cover bg-top bg-no-repeat"
              style={{
                backgroundImage: "url('/assets/about-back.png')",
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

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-[1900px] mx-auto gap-3 sm:gap-4 lg:gap-[18px] px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24 xl:py-48">
              <div className="flex flex-col items-center justify-center w-full">
                {/* Federation Details Badge */}
                <div className="mb-4 sm:mb-6 lg:mb-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20">
                    <span className="text-xs sm:text-sm lg:text-base font-pt-sans-caption font-medium">
                      Established 1995 • Global Federation
                    </span>
        </div>
      </div>

                {/* Main Title with Gradient */}
                <h1 className="uppercase text-center leading-[0.8] sm:leading-[0.85] lg:leading-[1.2] mb-3 sm:mb-4 lg:mb-6 font-rem text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[95px] font-extrabold bg-gradient-to-b from-gray-100 to-gray-800 bg-clip-text text-transparent">
                  WORLD
                  <br />
                  ARMLIFTING FEDERATION
                </h1>

                {/* Subtitle with Gradient */}
                <div className="relative w-full max-w-[758px] mx-auto mb-4 sm:mb-6 lg:mb-8">
                  <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-tight mb-3 sm:mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent font-rem">
                    UNITING STRENGTH ATHLETES WORLDWIDE
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 -mt-[260px] sm:-mt-60 lg:-mt-72">
          {/* Mission & Vision Section */}
          <AnimatedSection delay={0.1} direction="up">
            <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-blue-300 rounded-full blur-3xl"></div>
              </div>

              <div className="max-w-7xl mx-auto relative z-10">
                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
                  {/* Mission Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/20"></div>
                    <div className="relative p-5 sm:p-6 lg:p-8">
                      <div className="flex items-center xs:items-center mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center xs:mb-0 mr-3 sm:mr-4">
                          <svg
                            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl xs:text-2xl sm:text-2xl lg:text-3xl font-bold text-white font-rem">
                          MISSION
                        </h3>
                      </div>
                      <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed font-pt-sans-caption mb-4 sm:mb-6">
                        To promote and develop the sport of armlifting globally,
                        providing athletes with fair competition opportunities,
                        world-class training resources, and a supportive
                        community that celebrates strength, dedication, and
                        sportsmanship.
                      </p>
                    </div>
                  </div>

                  {/* Vision Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/20"></div>
                    <div className="relative p-5 sm:p-6 lg:p-8">
                      <div className="flex items-center xs:items-center mb-4 sm:mb-6">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center xs:mb-0 mr-3 sm:mr-4">
                          <svg
                            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl xs:text-2xl sm:text-2xl lg:text-3xl font-bold text-white font-rem">
                          VISION
                        </h3>
                      </div>
                      <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed font-pt-sans-caption mb-4 sm:mb-6">
                        To establish armlifting as a globally recognized sport,
                        inspiring millions to pursue strength training while
                        fostering international unity through competition,
                        education, and the shared pursuit of human potential.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Core Values */}
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-8 sm:mb-10 lg:mb-12 font-rem">
                    CORE VALUES
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {[
                      {
                        icon: "💪",
                        title: "STRENGTH",
                        desc: "Physical and mental fortitude",
                      },
                      {
                        icon: "🤝",
                        title: "INTEGRITY",
                        desc: "Fair play and honesty",
                      },
                      {
                        icon: "🌍",
                        title: "UNITY",
                        desc: "Global community building",
                      },
                      {
                        icon: "🚀",
                        title: "INNOVATION",
                        desc: "Continuous improvement",
                      },
                    ].map((value, index) => (
                      <div key={index} className="text-center group">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-white/20 transition-colors">
                          <span className="text-2xl sm:text-3xl">
                            {value.icon}
                          </span>
                        </div>
                        <h4 className="text-white font-bold text-sm sm:text-base lg:text-lg font-rem mb-1 sm:mb-2">
                          {value.title}
                        </h4>
                        <p className="text-blue-200 text-xs sm:text-sm font-pt-sans-caption px-1">
                          {value.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* President Section */}
          <AnimatedSection delay={0.3} direction="up">
            <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
              <div className="max-w-6xl mx-auto">
                {/* Simple, clean header */}
                <div className="mb-12 lg:mb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-rem">
                    Our President
                  </h2>
                  <div className="w-16 h-1 bg-blue-600 mb-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                  {/* President Content - Left Side (3/5 width) */}
                  <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
                    {/* Personal intro */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-rem">
                        Michael Brown
                      </h3>
                      <p className="text-blue-600 text-lg font-medium mb-4">
                        President, World Armlifting Federation
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        I've been involved in strength sports for over two
                        decades, first as a competitor, then as a coach, and now
                        as president of WALF. What started as a personal passion
                        has become a mission to grow this incredible sport
                        worldwide.
                      </p>
                    </div>

                    {/* Personal quote - more authentic */}
                    <blockquote className="border-l-4 border-blue-600 pl-6 py-4 bg-gray-50">
                      <p className="text-lg text-gray-800 leading-relaxed italic mb-4">
                        "When I first picked up a weight in 1998, I never
                        imagined I'd be leading a global federation. But that's
                        the beauty of this sport—it takes you places you never
                        expected and connects you with people who share your
                        passion for pushing limits."
                      </p>
                      <cite className="text-gray-600 font-medium not-italic">
                        — Michael Brown
                      </cite>
                    </blockquote>

                    {/* Background - more personal */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          My Journey
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          I started competing in armlifting in college and
                          quickly fell in love with the technical precision and
                          raw strength required. After winning nationals three
                          times, I transitioned into coaching and sports
                          administration.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Since becoming president in 2018, we've grown from 28
                          to 52 member countries. But more importantly, we've
                          maintained the sport's core values: respect, fair
                          play, and the pursuit of personal excellence.
                        </p>
                      </div>

                      {/* Key achievements - simplified */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-bold text-gray-900 mb-2">
                            Competition Background
                          </h5>
                          <ul className="text-gray-700 space-y-1 text-sm">
                            <li>• 3x National Champion (2001-2003)</li>
                            <li>• World Championships medalist</li>
                            <li>• 22 years competing experience</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-2">
                            Leadership
                          </h5>
                          <ul className="text-gray-700 space-y-1 text-sm">
                            <li>• WALF President since 2018</li>
                            <li>• Expanded to 52 countries</li>
                            <li>• Sports Science PhD, UCLA</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Current focus */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        Current Priorities
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Right now, I'm focused on three main areas: developing
                        youth programs to bring in the next generation,
                        improving our judging standards for consistency across
                        all competitions, and working with the IOC on potential
                        Olympic recognition.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        We're also launching a new athlete support program next
                        year to help competitors from developing nations access
                        better training and competition opportunities.
                      </p>
                    </div>

                    {/* Simple CTA */}
                    <div className="pt-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read full biography
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* President Image - Right Side (2/5 width) */}
                  <div className="lg:col-span-2 order-1 lg:order-2">
                    <div className="relative">
                      {/* Simple, clean image container */}
                      <div className="aspect-auto lg:aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <div className="rounded-lg">
                          <Image
                            src="/assets/portrait1.png"
                            alt="President"
                            width={500}
                            height={500}
                            className="w-full h-full"
                          />
                        </div>
                      </div>

                      {/* Simple caption */}
                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                          Michael at the 2023 World Championships in Prague
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Leaders Section */}
          <AnimatedSection delay={0.4} direction="up">
            <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 font-rem uppercase">
                    LEADERS
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto font-pt-sans-caption px-4">
                    Meet the dedicated leaders and experts who drive the World
                    Armlifting Federation forward with their expertise and
                    vision.
                  </p>
                </div>

                {/* Leaders Slider (same behavior and styles as PartnersSection) */}
                {/* Partners-style slider */}
                {/* Import LeadersSlider client component and pass the leaders array */}
                <LeadersSlider
                  leaders={[
                    {
                      name: "Alex Johnson",
                      role: "Technical Director",
                      description:
                        "Leading technical development and competition standards with over 15 years of experience in strength sports and athletic performance.",
                      image: "/assets/speakers/speaker1.png",
                    },
                    {
                      name: "Maria Rodriguez",
                      role: "International Relations",
                      description:
                        "Fostering global partnerships and expanding the federation's reach across continents with expertise in international sports diplomacy.",
                      image: "/assets/speakers/speaker2.png",
                    },
                    {
                      name: "David Chen",
                      role: "Training & Development",
                      description:
                        "Developing world-class training programs and coaching standards to elevate the sport of armlifting to new heights.",
                      image: "/assets/speakers/speaker3.png",
                    },
                    {
                      name: "Sarah Williams",
                      role: "Sports Science Director",
                      description:
                        "Advancing the scientific understanding of armlifting through research and innovation in sports performance and athlete safety.",
                      image: "/assets/speakers/speaker4.png",
                    },
                  ]}
                />

                {/* Call to Action */}
                <div className="text-center mt-10 sm:mt-12 lg:mt-16 mx-10 sm:mx-12 lg:mx-16">
                  <button className="bg-white text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors font-pt-sans-caption w-full sm:w-auto">
                    Meet Our Full Leadership Team →
                  </button>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Teams Section */}
          <div className="relative">
            <AnimatedSection delay={0.4}>
              <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0" />
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "url('/assets/grain.png')",
                      backgroundSize: "200px 200px",
                      backgroundRepeat: "repeat",
                    }}
                  />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Section Header */}
                  <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 font-rem uppercase">
                      Our Teams
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto font-pt-sans-caption px-4">
                      Meet the incredible teams from around the world that make
                      up the global armlifting community. Each team brings
                      unique strength, culture, and dedication to our sport.
                    </p>
                  </div>

                  {/* Teams Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
                    {[
                      {
                        name: "Team China",
                        country: "China",
                        members: "45+ Athletes",
                        description:
                          "Powerhouse team known for their disciplined training and exceptional technique in competitive armlifting.",
                        achievements: "3x World Champions",
                        image: "/assets/teams/China.png",
                        flag: "🇨🇳",
                      },
                      {
                        name: "Team Russia",
                        country: "Russia",
                        members: "60+ Athletes",
                        description:
                          "Legendary team with a rich history in strength sports, bringing decades of experience and innovation.",
                        achievements: "5x World Champions",
                        image: "/assets/teams/Russia.png",
                        flag: "🇷🇺",
                      },
                      {
                        name: "Team Japan",
                        country: "Japan",
                        members: "35+ Athletes",
                        description:
                          "Technical masters who combine traditional martial arts principles with modern armlifting techniques.",
                        achievements: "2x World Champions",
                        image: "/assets/teams/Japan.png",
                        flag: "🇯🇵",
                      },
                      {
                        name: "Team India",
                        country: "India",
                        members: "50+ Athletes",
                        description:
                          "Rising force in armlifting with incredible determination and rapidly growing competitive presence.",
                        achievements: "Regional Champions",
                        image: "/assets/teams/India.png",
                        flag: "🇮🇳",
                      },
                      {
                        name: "Team Mongolia",
                        country: "Mongolia",
                        members: "25+ Athletes",
                        description:
                          "Warriors with incredible natural strength, carrying forward their nomadic heritage into modern competition.",
                        achievements: "Continental Champions",
                        image: "/assets/teams/Mongolia.png",
                        flag: "🇲🇳",
                      },
                    ].map((team, index) => (
                      <div
                        key={index}
                        className="group relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        {/* Team Image */}
                        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                          <Image
                            src={team.image}
                            alt={team.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                          {/* Flag and Achievement Badge */}
                          <div className="absolute top-4 left-4 flex items-center gap-2">
                            <span className="text-2xl">{team.flag}</span>
                            <span className="bg-blue-600/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                              {team.achievements}
                            </span>
                          </div>
                        </div>

                        {/* Team Info */}
                        <div className="p-4 sm:p-6">
                          <div className="mb-3">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-rem">
                              {team.name}
                            </h3>
                            <p className="text-blue-300 text-sm font-medium font-pt-sans-caption">
                              {team.members}
                            </p>
                          </div>

                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-pt-sans-caption mb-4">
                            {team.description}
                          </p>

                          {/* Stats */}
                          <div className="flex justify-between items-center pt-3 border-t border-white/10">
                            <span className="text-blue-400 text-xs font-medium uppercase tracking-wide">
                              {team.country}
                            </span>
                            <span className="text-white text-sm font-semibold">
                              Active Team
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Call to Action */}
                  <div className="text-center mt-10 sm:mt-12 lg:mt-16">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-colors font-pt-sans-caption w-full sm:w-auto">
                        Join a Team →
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-colors font-pt-sans-caption w-full sm:w-auto">
                        View All Teams
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </AnimatedSection>
          </div>

          {/* Footer */}
          <div className="mx-4 sm:mx-8 md:mx-12 pb-4">
            <FooterSection />
          </div>
        </div>
        <Script id="ld-org-about" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "World Armlifting Federation (WAF)",
            url: `${getSiteUrl()}/about`,
            logo: `${getSiteUrl()}/assets/logo.png`,
          })}
        </Script>
      </main>
    </PageTransition>
  );
}

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the World Armlifting Federation (WAF), mission, vision, leaders and teams.",
  alternates: {
    canonical: `${getSiteUrl()}/about`,
  },
  openGraph: {
    url: `${getSiteUrl()}/about`,
  },
};
