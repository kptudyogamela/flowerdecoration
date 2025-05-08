'use client'
import { FiPhone, FiMail } from "react-icons/fi";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      className="bg-pink-100 text-gray-800 mt-10 pt-10 pb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">🌺 Flower Decor</h2>
          <p>
            We bring beauty to your special events with stunning flower decorations
            in Mysore and Chamarajanagar.
          </p>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/help" className="hover:underline">Help</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/services" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link href="/BookingForm" className="hover:underline">Booking</Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:underline">Testimonials</Link>
            </li>
            <li>
              <Link href="/videos" className="hover:underline">Videos</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="flex justify-center md:justify-start items-center gap-1 mt-1">
            <FiMail size={14} /> Mysore & Chamarajanagar
          </p>
          <p className="flex justify-center md:justify-start items-center gap-1 mt-1">
            <FiPhone size={14} /> +91 98765 43210
          </p>
          <p className="flex justify-center md:justify-start items-center gap-1 mt-1">
            <FiMail size={14} /> info@flowerdecor.com
          </p>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="container mx-auto px-4 mt-8 border-t pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Flower Decor. All rights reserved. <br />
        </div><div className="text-sm text-center md:text-left">
          Maintained by Swasyaha Solutions.
        </div>

        <div className="flex gap-4 text-xl justify-center">
          <a href="https://wa.me/919876543210" target="_blank" className="text-green-600 hover:text-green-700">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" className="text-pink-500 hover:text-pink-600">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/yourpage" target="_blank" className="text-blue-600 hover:text-blue-700">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" className="text-sky-500 hover:text-sky-600">
            <FaTwitter />
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" className="text-red-600 hover:text-red-700">
            <FaYoutube />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
