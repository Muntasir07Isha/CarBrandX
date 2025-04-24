import CategoryCard from "./CategoryCard";

export default function VehicleEntryButtons() {

    return (
      <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl font-bold mb-4">Find your ideal ride</h2>
        <p className="text-lg text-gray-700 mb-2">Browse our vehicles.</p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-black text-white rounded">New</button>
          <button className="px-4 py-2 border border-black text-black rounded">Pre-owned</button>
        </div>
        <section className="bg-white px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-10">Vehicle Categories</h2>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <CategoryCard
      image="/categories/sedanhashback.jpg"
      title="Hatch and sedans"
      description="City cars with everything you need for urban living."
    />
    <CategoryCard
      image="/categories/suv.avif"
      title="SUVs and 4WDs"
      description="Smart companions designed to thrive in Australian terrain."
    />
    <CategoryCard
      image="/categories/vans.jpg"
      title="Utes and vans"
      description="Tough and intelligent vehicles built for hard work."
    />
     <CategoryCard
      image="/categories/performance.jpg"
      title="performance cars"
      description="Tough and intelligent vehicles built for hard work."
    />

  </div>
      </section>
      </section>
    );
  }
  