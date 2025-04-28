'use client';

import Image from "next/image";
import { ShieldCheck, KeyRound, CloudRainWind, Wrench, BadgeCheck, CarFront } from "lucide-react"; // using lucide icons

export default function BenefitsPage() {
  const benefits = [
    { icon: ShieldCheck, title: "Accident Assistance", description: "Help and protection when accidents happen." },
    { icon: KeyRound, title: "Theft Protection", description: "Security and peace of mind for your vehicle." },
    { icon: CloudRainWind, title: "Weather Damage Cover", description: "Protection from storms, hail, and flood." },
    { icon: Wrench, title: "Lifetime Repairs Guarantee", description: "We fix your CarBrandX for life." },
    { icon: BadgeCheck, title: "Genuine Parts Only", description: "Only 100% authentic CarBrandX parts used." },
    { icon: CarFront, title: "New-for-Old Replacement", description: "Replace your vehicle if seriously damaged." },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Top Banner Image */}
      <div className="relative w-full h-96">
      <Image
  src="/images/gptmodel.jpeg"
  alt="CarBrandX Owner Benefits"
  fill
  className="object-cover"
/>

      </div>

      {/* Main Heading and Subtext */}
      <div className="text-center mt-10 px-4 text-black">
        <h1 className="text-4xl font-bold mb-4">CarBrandX Owner Benefits</h1>
        <p className="text-lg text-gray-600 mb-6">Peace of mind with every drive you take.</p>

        {/* Fake Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">
            Get a Quote
          </button>
          <button className="border border-black text-black px-5 py-2 rounded hover:bg-gray-100 transition">
            Retrieve Saved Quote
          </button>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-16">
        {benefits.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <item.icon className="h-12 w-12 text-red-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-black">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
