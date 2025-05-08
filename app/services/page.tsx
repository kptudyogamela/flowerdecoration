"use client";

import { motion } from "framer-motion";
import { FaHeart, FaHome } from "react-icons/fa"; // Icons for the services
import { FaChurch } from "react-icons/fa"; // Church icon for temple-related services

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold text-primary mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Floral Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Wedding Decorations */}
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <FaHeart size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Wedding Decorations</h3>
            <p className="text-gray-600 mb-4">
              We specialize in designing stunning wedding decorations, including beautiful floral arrangements,
              backdrops, and centerpieces to make your big day magical and unforgettable.
            </p>
            <a
              href="/services#wedding"
              className="inline-block bg-primary text-white py-2 px-4 rounded-full hover:bg-pink-600 transition-all"
            >
              Learn More
            </a>
          </motion.div>

          {/* Temple Floral Decor */}
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <FaChurch size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Temple Floral Decor</h3>
            <p className="text-gray-600 mb-4">
              Elevate the spiritual ambiance of your temple with our floral decorations, offering peaceful
              and divine floral displays that enhance the sacred environment.
            </p>
            <a
              href="/services#temple"
              className="inline-block bg-primary text-white py-2 px-4 rounded-full hover:bg-pink-600 transition-all"
            >
              Learn More
            </a>
          </motion.div>

          {/* Housewarming / Naming Ceremony */}
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <FaHome size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Housewarming / Naming Ceremony</h3>
            <p className="text-gray-600 mb-4">
              Celebrate new beginnings with beautiful floral arrangements for your housewarming or naming
              ceremony. Our designs add warmth and joy to these special occasions.
            </p>
            <a
              href="/services#housewarming"
              className="inline-block bg-primary text-white py-2 px-4 rounded-full hover:bg-pink-600 transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
