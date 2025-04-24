import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-20">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center space-y-6">

        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/car.png"
            alt="CarBrandX"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-semibold">CarBrandX</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Brands</a>
          <a href="#" className="hover:text-white transition">Explore</a>
          <a href="#" className="hover:text-white transition">Support</a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} CarBrandX Muntasir Hossen. All rights reserved.</p>
      </div>
    </footer>
  );
}
