import Image from "next/image";

export default function PixelArtImage({ pixelArt }) {
  return (
    <div className="relative flex-1 flex items-center aspect-square w-full rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-t-none justify-center overflow-hidden">
      <Image
        src={pixelArt.imageUrl}
        alt={pixelArt.title}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
