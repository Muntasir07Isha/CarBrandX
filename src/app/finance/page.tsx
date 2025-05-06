'use client';

import { input, label } from "framer-motion/client";
import { useState } from "react";

export default function FinancePage() {
  const [price, setPrice] = useState(30000);
  const [term, setTerm] = useState(5); // in years
  const [interest, setInterest] = useState(5);
  const [monthly, setMonthly] = useState(0);

  const calculate = () => {
    const monthlyRate = interest / 100 / 12;
    const months = term * 12;
    const payment = (price * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    setMonthly(Number(payment.toFixed(2)));
  };

  return (
    <div >
    <div className="p-6 max-w-5xl mx-auto space-y-16">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-black">Finance & Quote</h1>

      {/* Finance Calculator */}
      <section className="bg-gray-50 p-6 rounded-lg shadow space-y-4 text-black">
        <h2 className="text-xl font-semibold">Finance Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
        <div className="flex flex-col">
  <label className="text-sm font-medium text-gray-700 mb-1">Car Price ($)</label>
  <input
    type="number"
    value={price}
    onChange={(e) => setPrice(Number(e.target.value))}
    className="p-2 border rounded"
  />
</div>
<div className="flex flex-col">
<label className="text-sm font-medium text-gray-700 mb-1">Loan Years</label>
          <input
            type="number"
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
            placeholder="Loan Term (years)"
            className="p-2 border rounded"
          />
          </div>
          <div className="flex flex-col"> 
          <label className="text-sm font-medium text-gray-700 mb-1">Interest Rate(%)</label>                  
          <input
            type="number"
            value={interest}
            onChange={(e) => setInterest(Number(e.target.value))}
            placeholder="Interest Rate (%)"
            className="p-2 border rounded"
          />
          </div>
        </div>
        <button
          onClick={calculate}
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Calculate Monthly Payment
        </button>
        {monthly > 0 && (
          <p className="mt-4 text-green-600 font-semibold">
            Estimated Monthly Payment: ${monthly}
          </p>
        )}
      </section>

      {/* Quote Request Form */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4 text-black">
        <h2 className="text-xl font-semibold">Request a Quote</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <input type="text" placeholder="Full Name" className="p-2 border rounded" />
  <input type="email" placeholder="Email" className="p-2 border rounded" />
  <input type="tel" placeholder="Phone Number" className="p-2 border rounded" />
  <select className="p-2 border rounded">
    <option>Select a Car</option>
    <option>GR86</option>
    <option>Hilux</option>
    <option>Model 3</option>
  </select>
  <textarea placeholder="Additional Notes" className="p-2 border rounded md:col-span-2" />
  <button
    type="submit"
    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition md:col-span-2"
  >
    Submit Request
  </button>
</form>

      </section>

      {/* About Section */}
      <section className="text-center text-black">
        <h2 className="text-xl font-semibold mb-2">About CarBrandX</h2>
        <p className="text-gray-800 max-w-xl mx-auto">
          At CarBrandX, we believe everyone deserves a smooth ride and a smart deal. We're here to
          help you drive home in style — without the stress.
        </p>
      </section>

      {/* Testimonials */}
      <section className="space-y-4 text-black">
        <h2 className="text-xl font-semibold text-center">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Jason (Sydney)",
              review: "Booking my Toyota 86 was seamless. Love the support team!",
            },
            {
              name: "Emily (Melbourne)",
              review: "They helped me get the exact model I wanted. Amazing experience!",
            },
            {
              name: "Daniel (Brisbane)",
              review: "The finance calculator helped me plan everything ahead.",
            },
          ].map((r, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded shadow text-sm">
              <p className="italic">"{r.review}"</p>
              <p className="mt-2 font-semibold text-right">— {r.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}
