"use client";
import Image from "next/image";
import CtaButton from "./CtaButton";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="z-10 shadow-sm h-[80] flex items-center center min-w-full backdrop-blur-xl bg-white/50 justify-between font-main relative">
      <div>
        <Image
          src={"/endorphin-logo-2.png"}
          alt="Endorphin Global Healthcare Consulting Logo"
          priority
          width={248}
          height={44}
          className="block"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="gap-10 text-gray-500 flex items-center">
        <div className="hidden md:flex gap-2 items-center hover:text-gray-900 transition-colors hover:cursor-pointer group">
          <div className="w-2 h-2 button-bg rounded-full group-hover:button-hover"></div>
          <Link href={"#method"} className="text-lg">
            Method
          </Link>
        </div>
        <div className="hidden md:flex gap-2 items-center hover:text-gray-900 transition-colors hover:cursor-pointer group">
          <div className="w-2 h-2 button-bg rounded-full group-hover:button-hover"></div>
          <Link href={"#plan"} className="text-lg">
            Plan
          </Link>
        </div>

        {/* Services Dropdown */}
        <div className="hidden md:block relative group">
          <div className="flex gap-2 items-center hover:text-gray-900 transition-colors hover:cursor-pointer">
            <div className="w-2 h-2 button-bg rounded-full group-hover:button-hover"></div>
            <span className="text-lg">Other Services</span>
          </div>
          <div className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-xl rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200">
            <div className="py-2">
              <Link
                href="https://healthcare.endorphinglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Endorphin Healthcare
              </Link>
              <Link
                href="https://technologies.endorphinglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Endorphin Technologies
              </Link>
            </div>
          </div>
        </div>

        <CtaButton text="Book a Call" />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-gray-500 hover:text-gray-900 transition-colors"
        aria-label="Toggle mobile menu"
      >
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="py-4 px-5 space-y-4">
          <div className="flex gap-2 items-center hover:text-gray-900 transition-colors hover:cursor-pointer group">
            <div className="w-2 h-2 button-bg rounded-full group-hover:button-hover"></div>
            <Link
              href={"#method"}
              className="text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Method
            </Link>
          </div>
          <div className="flex gap-2 items-center hover:text-gray-900 transition-colors hover:cursor-pointer group">
            <div className="w-2 h-2 button-bg rounded-full group-hover:button-hover"></div>
            <Link
              href={"#plan"}
              className="text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Plan
            </Link>
          </div>

          {/* Mobile Services Section */}
          <div className="pt-2">
            <div className="text-lg font-semibold text-gray-700 mb-3">
              Other Services
            </div>
            <div className="space-y-2 pl-4">
              <Link
                href="https://healthcare.endorphinglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Endorphin Healthcare
              </Link>
              <Link
                href="https://technologies.endorphinglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Endorphin Technologies
              </Link>
            </div>
          </div>

          <div className="pt-4">
            <CtaButton text="Book a Call" />
          </div>
        </div>
      </div>
    </nav>
  );
}
