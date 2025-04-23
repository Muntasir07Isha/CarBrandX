'use client';

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import lexusImage from '@/../../public/herolexus.jpg'

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main>
      {/* ✅ NAVBAR - not inside hero anymore */}
      <header className="w-full flex justify-between items-center px-6 py-4 border-b bg-white">
        <div className="flex items-center gap-3">
          <Image
            src="/car.png"
            alt="CarBrandX Logo"
            width={64}
            height={64}
            className="object-contain"
          />
          <span className="text-2xl font-extrabold text-black">CarBrandX</span>
        </div>
        <nav className="flex gap-6 text-gray-700 text-sm font-medium">
          <a href="#">Brands</a>
          <a href="#">Explore</a>
          <a href="#">Support</a>
          <a href="#">👤</a>
        </nav>
      </header>

      {/* ✅ HERO SECTION */}
      <section ref={ref} className="relative h-screen overflow-hidden">
        {/* Background Image with Scroll Zoom */}
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <Image
            src={lexusImage}
            alt="Hero Car"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text and Button on Image */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black/30 px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to CarBrandX</h1>
          <p className="text-lg md:text-xl mb-6">Your journey starts here...</p>
          <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Tell me more
          </button>

          {/* Scroll Icon */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white animate-bounce rounded-full" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ✅ NEXT SECTION */}
      <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl font-bold mb-4">Find your ideal ride</h2>
        <p className="text-lg text-gray-700 mb-2">Browse our vehicles.</p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-black text-white rounded">New</button>
          <button className="px-4 py-2 border border-black text-black rounded">Pre-owned</button>
        </div>
      </section>
    </main>
  );
}
