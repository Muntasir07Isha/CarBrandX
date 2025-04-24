'use client';

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import lexusImage from "@/../../public/herolexus.jpg";

export default function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
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
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          2025 Lexus LC Sports car
        </h1>
        <p>It's hard to get Luxury and Sports both at a time</p>
        <button className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
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
  );
}
