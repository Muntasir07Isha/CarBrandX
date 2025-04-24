"use client";

import { useState } from "react";

const categories = ["All", "EV", "SUV", "Sports", "Super", "Sedan", "Luxury"];

export default function CategoryBar({
  onSelect,
  activeCategory,
}: {
  onSelect: (category: string) => void;
  activeCategory: string;
}) {
  return (
    <div className="w-full mb-6">
      {/* Desktop layout */}
      <div className="hidden md:flex gap-6 flex-wrap text-sm font-semibold text-gray-700">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`hover:text-red-600 transition ${
              activeCategory === cat ? "text-red-600 underline" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile slider layout */}
      <div className="md:hidden overflow-x-auto no-scrollbar whitespace-nowrap space-x-4 text-sm font-semibold text-gray-700">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`inline-block px-4 py-2 rounded-full ${
              activeCategory === cat ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
