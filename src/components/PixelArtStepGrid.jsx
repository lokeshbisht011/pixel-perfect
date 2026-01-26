import { COLORS } from "@/lib/pixelArtStepsData";

export default function PixelStepGrid({ size, pixels }) {
  // Normalize pixels into a 2D array
  const grid = normalizePixels(pixels, size);

  return (
    <div
      className="grid gap-[1px] bg-border p-2 aspect-square"
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((key, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="w-4 h-4 md:w-5 md:h-5 touch-none select-none"
            style={{
              backgroundColor: COLORS[key] ?? "#ffffff",
            }}
          />
        ))
      )}
    </div>
  );
}

function normalizePixels(pixels, size) {
  if (Array.isArray(pixels[0])) return pixels;

  if (typeof pixels[0] === "string") {
    return pixels.map((row) => row.split(""));
  }

  const grid = [];
  for (let i = 0; i < pixels.length; i += size) {
    grid.push(pixels.slice(i, i + size));
  }
  return grid;
}
