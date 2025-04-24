import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
}

export default function CategoryCard({ image, title, description }: Props) {
  return (
    <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300">
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
        <button className="text-red-600 font-medium text-sm hover:underline flex items-center gap-1">
          See them all <span>→</span>
        </button>
      </div>
    </div>
  );
}
