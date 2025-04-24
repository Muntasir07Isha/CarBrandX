import Image from "next/image";

interface InfoCardProps {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function InfoCard({ image, title, subtitle, buttonText }: InfoCardProps) {
  return (
    <div className="flex flex-col items-start border rounded-md p-6 bg-white hover:shadow transition duration-300">
<div className="w-full h-[550px] relative overflow-hidden mb-4 group">
<Image
  src={image}
  alt={title}
  fill
  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
/>

</div>

      <p className="text-sm text-gray-500 mb-1">{subtitle}</p>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <button className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition text-sm">
        {buttonText}
      </button>
    </div>


  );
}
