"use client";

import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import GalleryPreviewSection from "./GalleryPreviewSection";

export default function Homepage() {
  return (
    <div className="font-sans bg-gradient-to-b from-pink-100 to-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Gallery Preview Section */}
      <GalleryPreviewSection />
    </div>
  );
}
