import Image from "next/image";
import InfoCard
 from "./InfoCard";
export default function InfoSection() {
  return (
    <>
      {/* 🔹 Info Cards */}
      <section className="bg-white px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard
            image="/cards/modify.jpg"
            title="Build you own custom car"
            subtitle="Personalise your vehicle"
            buttonText="Explore Garage"
          />
          <InfoCard
            image="/cards/finance.png"
            title="Toyota Finance"
            subtitle="Start your journey"
            buttonText="Get my repayment"
          />
        </div>
      </section>

      {/* 🔹 What's New Section */}
      <section className="bg-gray-50 px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-2">See what’s new</h2>
        <p className="text-gray-600 text-sm mb-10">
          We’re here for tomorrow, as well as today.
        </p>

        <div className="relative h-[500px] md:h-[550px]">
          <Image
            src="/cards/future.webp"
            alt="supercar"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center px-10 text-white bg-black/30">
            <h3 className="text-2xl font-semibold mb-2">EYD ELECTRIC SUPERCAR</h3>
            <p className="text-sm mb-4">Where roads Start,  Speeding begins with fuel effeciency</p>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-black hover:text-white border transition">
              Dive in
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
