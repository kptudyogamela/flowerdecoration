"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-primary mb-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg text-center mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          With over a decade of experience in floral art, we are one of the most loved flower decoration companies based in{" "}
          <span className="text-pink-600 font-semibold">Mysore</span> and{" "}
          <span className="text-pink-600 font-semibold">Chamarajanagar</span>, Karnataka.
          We specialize in crafting vibrant, traditional, and elegant floral decorations for weddings, housewarming ceremonies,
          temple events, naming ceremonies, and more. Our dedicated team blends creativity and tradition to create unforgettable
          atmospheres for your most cherished events.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-pink-100 rounded-xl p-6 shadow hover:shadow-lg transition">
            <FaHeart className="mx-auto text-pink-500 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              To spread beauty and joy through artistic floral arrangements, while preserving the essence of Indian tradition in every celebration.
            </p>
          </div>
          <div className="bg-pink-100 rounded-xl p-6 shadow hover:shadow-lg transition">
            <FaMapMarkerAlt className="mx-auto text-pink-500 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Where We Work</h3>
            <p>
              We serve clients in and around <strong>Mysore</strong> and <strong>Chamarajanagar</strong>, and are open to travel for larger events.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
