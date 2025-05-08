import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryPreviewSection() {
  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Work
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Explore some of our beautiful decorations for weddings, ceremonies, and temples.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Gallery Item 1 */}
          <motion.div
            className="relative overflow-hidden transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Image
              src="/gallery1.jpg"
              alt="Gallery Image 1"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Gallery Item 2 */}
          <motion.div
            className="relative overflow-hidden transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Image
              src="/gallery2.jpg"
              alt="Gallery Image 2"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Gallery Item 3 */}
          <motion.div
            className="relative overflow-hidden transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Image
              src="/gallery3.jpg"
              alt="Gallery Image 3"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
