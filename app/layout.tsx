import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import {
  Geist,
  Geist_Mono,
  REM,
  PT_Sans_Caption,
  PT_Sans_Narrow,
  Just_Another_Hand,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rem = REM({
  variable: "--font-rem",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ptSansCaption = PT_Sans_Caption({
  variable: "--font-pt-sans-caption",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSansNarrow = PT_Sans_Narrow({
  variable: "--font-pt-sans-narrow",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const justAnotherHand = Just_Another_Hand({
  variable: "--font-just-another-hand",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "World Armlifting Federation (WAF)",
    template: "%s | WAF",
  },
  description:
    "The official World Armlifting Federation (WAF). Uniting strength athletes worldwide with events, rankings, and community.",
  keywords: [
    "armlifting",
    "WAF",
    "strength sports",
    "grip sport",
    "World Armlifting Federation",
  ],
  authors: [{ name: "World Armlifting Federation (WAF)", url: getSiteUrl() }],
  openGraph: {
    type: "website",
    siteName: "World Armlifting Federation (WAF)",
    url: getSiteUrl(),
    title: "World Armlifting Federation (WAF)",
    description:
      "Official federation for armlifting. Discover events, leaders, partners, and global teams.",
    images: [
      {
        url: `${getSiteUrl()}/assets/Herosection.png`,
        width: 1200,
        height: 630,
        alt: "WAF Hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Armlifting Federation (WAF)",
    description:
      "Official federation for armlifting. Discover events, leaders, partners, and global teams.",
    images: [`${getSiteUrl()}/assets/Herosection.png`],
    site: "@waf",
    creator: "@waf",
  },
  alternates: {
    canonical: getSiteUrl(),
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rem.variable} ${ptSansCaption.variable} ${ptSansNarrow.variable} ${justAnotherHand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
