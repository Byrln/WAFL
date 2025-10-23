import type { Metadata } from "next";
import { Geist, Geist_Mono, REM, PT_Sans_Caption, PT_Sans_Narrow, Just_Another_Hand } from "next/font/google";
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
  title: "Horeca | WALF",
  description:
    "Horeca-inspired homepage built with Next.js, Tailwind, and shadcn.",
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
