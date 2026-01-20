import Image from "next/image";

export default function PixelArtImage({ pixelArt }) {
  return (
    <div className="relative flex-1 flex items-center justify-center">
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
