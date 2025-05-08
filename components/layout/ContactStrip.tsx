"use client";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactStrip() {
  return (
    <motion.div
      className="bg-primary text-white text-sm px-4 flex justify-between items-center h-[36px] md:h-[40px] z-30"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Location */}
      <div className="hidden md:block">
        📍 Mysore & Chamarajanagar, Karnataka
      </div>

      {/* Mobile: Only phone number */}
      <div className="flex items-center gap-4 md:hidden">
        <a href="tel:+919876543210" className="flex items-center gap-1 hover:underline">
          <FiPhone size={14} /> +91 98765 43210
        </a>
      </div>

      {/* Desktop: Full contact icons */}
      <div className="hidden md:flex items-center gap-4">
        <a href="tel:+919876543210" className="flex items-center gap-1 hover:underline">
          <FiPhone size={14} /> +91 98765 43210
        </a>
        <a href="mailto:info@flowerdecor.com" className="flex items-center gap-1 hover:underline">
          <FiMail size={14} /> info@flowerdecor.com
        </a>
        <a href="https://wa.me/919876543210" target="_blank" className="hover:underline flex items-center gap-1">
          <FaWhatsapp size={14} />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" className="hover:underline flex items-center gap-1">
          <FaInstagram size={14} />
        </a>
        <a href="https://facebook.com/yourpage" target="_blank" className="hover:underline flex items-center gap-1">
          <FaFacebookF size={14} />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" className="hover:underline flex items-center gap-1">
          <FaTwitter size={14} />
        </a>
        <a href="https://youtube.com/yourchannel" target="_blank" className="hover:underline flex items-center gap-1">
          <FaYoutube size={14} />
        </a>
      </div>
    </motion.div>
  );
}
