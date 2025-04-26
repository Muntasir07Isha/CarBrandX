'use client';

import { useParams } from "next/navigation";
import { sampleCars } from "@/data/sampleCars";
import { generateCarImageUrl } from "@/utils/generateCarUrl";
import Image from "next/image";
import { notFound } from "next/navigation";
import { strong } from "framer-motion/client";

export default function CarDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const car = sampleCars.find((c) => {
    const carSlug = `${c.make.toLowerCase()}-${c.model.toLowerCase()}-${c.year}`;
    return carSlug === slug;
  });

  if (!car) return notFound();

  const imageUrl = generateCarImageUrl(car.make, car.model, car.year); // default is front

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{car.make} {car.model}</h1>
      <p className="text-lg text-gray-300 mb-6">Year: {car.year}</p>
  
      {/* Car Image */}
      <div className="relative w-full h-[400px] bg-white border rounded-lg shadow mb-8">
        <Image
          src={generateCarImageUrl(car.make, car.model, car.year)}
          alt={`${car.make} ${car.model}`}
          fill
          className="object-contain p-6"
        />
      </div>
  
      {/* Specs */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-8">
        <p><strong className="text-white">Make:</strong> {car.make}</p>
        <p><strong className="text-white">Model:</strong> {car.model}</p>
        <p><strong className="text-white">Year:</strong> {car.year}</p>
        <p><strong className="text-white">Category:</strong> {car.category}</p>
      </div>
  
      {/* CTA */}
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition">
        Book Test Drive
      </button>
    </div>
  );
  
}
