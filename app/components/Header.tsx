"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="p-4 bg-black border-b border-accent">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold">Logo</h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          <Link href="/" className="text-white hover:text-accent">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              className="text-white hover:text-accent flex items-center gap-1"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services ▼
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-black border border-accent rounded-lg shadow-lg min-w-48 z-50">
                <Link
                  href="/service-pages/network-security"
                  className="block px-4 py-2 text-white hover:text-accent hover:bg-accent/10"
                >
                  Network Security
                </Link>
                <Link
                  href="/service-pages/network-security"
                  className="block px-4 py-2 text-white hover:text-accent hover:bg-accent/10"
                >
                  Penetration Testing
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-white hover:text-accent hover:bg-accent/10"
                >
                  Incident Response
                </Link>
              </div>
            )}
          </div>

          <Link href="#" className="text-white hover:text-accent">
            About
          </Link>
          <Link href="#" className="text-white hover:text-accent">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-2 mt-4 lg:hidden">
          <Link href="/" className="text-white hover:text-accent">
            Home
          </Link>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              className="text-white hover:text-accent flex items-center gap-1 w-full text-left"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services ▼
            </button>

            {isServicesOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-1">
                <Link
                  href="/services/network-security"
                  className="text-white hover:text-accent text-sm"
                >
                  Network Security
                </Link>
                <Link
                  href="/services/penetration-testing"
                  className="text-white hover:text-accent text-sm"
                >
                  Penetration Testing
                </Link>
                <Link
                  href="/services/incident-response"
                  className="text-white hover:text-accent text-sm"
                >
                  Incident Response
                </Link>
              </div>
            )}
          </div>

          <Link href="#" className="text-white hover:text-accent">
            About
          </Link>
          <Link href="#" className="text-white hover:text-accent">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
