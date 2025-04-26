import Image from "next/image";
import { useRouter } from "next/navigation";

interface CarCardProps {
  image: string;
  label?: string;
  title: string;
  subtitle?: string;
}

export default function CarCard({ image, label, title, subtitle }: CarCardProps) {
  const router = useRouter(); // ✅ Now it's inside the component

  const slug = `${label?.toLowerCase()}-${title.toLowerCase()}-${subtitle}`;

  return (
    <div className="bg-gray-100 border rounded-lg overflow-hidden shadow-sm w-full max-w-sm">
      <div className="w-full h-48 relative bg-white">
        <Image src={image} alt={title} fill className="object-contain p-4" />
        {label && (
          <div className="absolute top-2 left-2 text-xs font-medium text-blue-600">
            ● {label}
          </div>
        )}
      </div>
      <div className="p-4 border-t">
        <h3 className="text-lg font-semibold text-black mb-1">{title}</h3>
        {subtitle && (
          <p className="text-sm text-gray-600 mb-2">{subtitle}</p>
        )}
        <button
          onClick={() => router.push(`/cars/${slug}`)}
          className="text-sm font-semibold text-black hover:text-red-600 transition"
        >
          Explore →
        </button>
      </div>
    </div>
  );
}
