export const PixelMenuIcon = () => (
    <div className="grid grid-cols-3 gap-[2px]">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="w-1.5 h-1.5 bg-current"
        />
      ))}
    </div>
  );
  