import { motion } from "framer-motion";
import { FaGifts, FaHeartbeat, FaRegLightbulb } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Service 1 */}
          <motion.div
            className="service-card transform transition duration-300 hover:scale-105 hover:bg-pink-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <FaGifts size={48} className="text-primary mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold">Wedding Decorations</h3>
            <p className="text-gray-600 mt-2">Elegant and customized flower arrangements for your special day.</p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="service-card transform transition duration-300 hover:scale-105 hover:bg-pink-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <FaHeartbeat size={48} className="text-primary mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold">Naming Ceremonies</h3>
            <p className="text-gray-600 mt-2">Celebrate new beginnings with colorful and vibrant decorations.</p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="service-card transform transition duration-300 hover:scale-105 hover:bg-pink-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <FaRegLightbulb size={48} className="text-primary mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold">Temple Decorations</h3>
            <p className="text-gray-600 mt-2">Adding divine beauty with traditional flower arrangements for temples.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
