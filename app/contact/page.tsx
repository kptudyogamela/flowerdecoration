"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-primary mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info and Map */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Our Office</h4>
                <p className="text-gray-600">Mysore & Chamarajanagar, Karnataka, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-primary text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <a href="tel:+919876543210" className="text-gray-600 hover:underline">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-primary text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <a href="mailto:info@flowerdecor.com" className="text-gray-600 hover:underline">
                  info@flowerdecor.com
                </a>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2077857429837!2d76.6393802!3d12.2958106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b8e158f253f%3A0x8dd7d8e4cb088ff0!2sMysore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Inquiry Form */}
          <motion.form
            className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your event..."
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-all w-full"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
