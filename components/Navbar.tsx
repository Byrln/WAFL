"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="justify-between px-8">
        <div className="flex items-center justify-between h-12 lg:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/assets/logo.png"
              alt="WAF Logo"
              width={40}
              height={40}
              className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-black leading-tight">
                World Armlifting
              </span>
              <span className="text-xs sm:text-sm font-medium text-black leading-tight">
                Federation
              </span>
            </div>
          </Link>

          {/* Centered Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-12">
            <div className="flex items-center gap-10">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors px-8 py-1 rounded-full ${
                  pathname === "/"
                    ? "border-2 border-black text-black shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors px-5 py-2.5 rounded-full ${
                  pathname === "/about"
                    ? "border-2 border-black text-black shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                About
              </Link>
              <a
                href="#events"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors px-5 py-2.5 rounded-full"
              >
                Events
              </a>
              <a
                href="#records"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors px-5 py-2.5 rounded-full"
              >
                Records
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors px-5 py-2.5 rounded-full"
              >
                Contact Us
              </a>
            </div>
          </nav>

          {/* Right Side - Social Icons */}
          <div className="flex items-center gap-3">
            {/* Social Icons */}
            <div className="hidden lg:flex items-center gap-2">
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
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
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

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) {
                  menu.classList.toggle("hidden");
                }
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden lg:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100">
            <Link
              href="/"
              className={`block px-5 py-3 text-base font-medium rounded-lg transition-colors ${
                pathname === "/"
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-5 py-3 text-base font-medium rounded-lg transition-colors ${
                pathname === "/about"
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              About
            </Link>
            <a
              href="#events"
              className="block px-5 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
            >
              Events
            </a>
            <a
              href="#records"
              className="block px-5 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
            >
              Records
            </a>
            <a
              href="#contact"
              className="block px-5 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
            >
              Contact Us
            </a>

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-3 px-4 pt-4 border-t border-gray-100">
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
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
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
      </div>
    </nav>
  );
}
