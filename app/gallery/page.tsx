"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const galleryItems = [
  { id: 1, src: "/gallery/wedding1.jpg", category: "Wedding" },
  { id: 2, src: "/gallery/temple1.jpg", category: "Temple" },
  { id: 3, src: "/gallery/house1.jpg", category: "Housewarming" },
  { id: 4, src: "/gallery/wedding2.jpg", category: "Wedding" },
  { id: 5, src: "/gallery/temple2.jpg", category: "Temple" },
  { id: 6, src: "/gallery/house2.jpg", category: "Housewarming" },
  // Add more images with proper public path (public/gallery)
];

const categories = ["All", "Wedding", "Temple", "Housewarming"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-primary mb-10"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Gallery
        </motion.h2>

        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-4 py-2 rounded-full border transition-all text-sm font-medium",
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-primary border-primary hover:bg-pink-50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={item.src}
                  alt={item.category}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
