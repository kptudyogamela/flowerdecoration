"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-white py-20">
      {/* Hero Text and Call to Action */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elegant Flower Decorations
        </motion.h1>
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Bringing grace and color to your weddings, ceremonies, and temple events.
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <a
            href="/contact"
            className="bg-primary hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            Book Your Decoration
          </a>
        </motion.div>
      </div>

      {/* Decorative Image (only shown on larger screens) */}
      <motion.div
        className="absolute right-0 bottom-0 w-full md:w-1/2 max-w-md hidden md:block opacity-80"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Image
          src="/flower-hero.png"
          alt="Flower Decoration"
          width={500}
          height={500}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
