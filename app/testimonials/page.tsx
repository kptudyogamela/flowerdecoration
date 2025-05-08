"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Anita Rao",
    event: "Wedding",
    message: "Absolutely stunning decor! Everyone praised the flower arrangements at my daughter's wedding. Thank you for making it magical!",
  },
  {
    name: "Rajesh Shetty",
    event: "Temple Event",
    message: "Beautiful floral decorations done for our temple festival. Traditional yet elegant. Highly recommended!",
  },
  {
    name: "Deepika N.",
    event: "Housewarming",
    message: "They transformed our home with fresh flowers during our griha pravesh. Punctual and very professional service!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-pink-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-primary mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                {Array(5).fill(0).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">“{testimonial.message}”</p>
              <div className="text-sm text-gray-600 font-semibold">
                — {testimonial.name}, <span className="italic">{testimonial.event}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
