"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
    { href: "/BookingForm", label: "Booking" },
  ];

  return (
    <header className="bg-white sticky top-[36px] md:top-[40px] z-50 shadow-lg w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">
          <Link href="/">FlowerDecor</Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <span className="text-3xl">&#9776;</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-lg font-semibold text-gray-700 hover:text-primary hover:underline transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeMenu}></div>

          {/* Slide-in Menu */}
          <motion.div
            className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-lg z-50 p-6"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href}>
                  <div
                    onClick={closeMenu}
                    className="text-xl font-semibold text-gray-800 hover:text-primary transition-colors duration-300"
                  >
                    {label}
                  </div>
                </Link>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
