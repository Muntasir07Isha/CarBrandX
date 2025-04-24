import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
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
      <Link href="/brands" className="hover:text-black transition">
         Brands
      </Link>

        <a href="#">Explore</a>
        <a href="#">Support</a>
        <a href="#">👤</a>
      </nav>
    </header>
  );
}
