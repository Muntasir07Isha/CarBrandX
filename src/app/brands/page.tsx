"use client"
import { useState } from "react";
import CarCard from "@/components/CarCard";
import { sampleCars } from "@/data/sampleCars";
import CategoryBar from "@/components/CategoryBar";
import { generateCarImageUrl } from "@/utils/generateCarUrl";

export default function BrandsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCars =
    selectedCategory === "All"
      ? sampleCars
      : sampleCars.filter((car) => car.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="bg-white min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Explore Our Cars</h1>
      <CategoryBar activeCategory={selectedCategory} onSelect={setSelectedCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {filteredCars.map((car, index) => (
          <CarCard
            key={index}
            image={generateCarImageUrl(car.make, car.model, car.year)}
            label={car.make}
            title={car.model}
            subtitle={String(car.year)}
          />
        ))}
      </div>
    </div>
  );
}
