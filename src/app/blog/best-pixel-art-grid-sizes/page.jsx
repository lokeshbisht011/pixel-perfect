import Link from "next/link";
import { Grid, Pencil, Eye, Layers } from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Best Pixel Art Grid Sizes: 8x8 to 128x128 Explained",
  description:
    "Discover the best pixel art grid sizes for icons, characters, and illustrations. Learn how 8x8, 16x16, 32x32, 64x64, and 128x128 grids impact your art.",
};

export default function BestPixelArtGridSizesPage() {
  return (
    
      <main className="relative min-h-screen bg-background text-foreground px-4 py-12 overflow-hidden">
        {/* Pixel Grid Background */}
        <div
          aria-hidden
          className="absolute inset-0 bg-pixel-grid opacity-[0.15]"
          style={{ backgroundSize: "24px 24px" }}
        />

        <article className="relative max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center border-4 border-border bg-card p-6 shadow-[6px_6px_0_rgba(0,0,0,0.5)]">
            <h1 className="font-mono font-bold text-3xl md:text-4xl mb-4">
              <span className="text-pixel-neon-cyan">Pixel Art</span>{" "}
              <span className="text-pixel-neon-pink">Grid Sizes</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Learn the ideal pixel art grid sizes for icons, characters,
              sprites, and detailed illustrations — from 8×8 up to 128×128.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-grid-size-matters" className="hover:underline">
                  Why Grid Size Matters
                </a>
              </li>
              <li>
                <a href="#8x8" className="hover:underline">
                  8×8 Grids
                </a>
              </li>
              <li>
                <a href="#16x16" className="hover:underline">
                  16×16 Grids
                </a>
              </li>
              <li>
                <a href="#32x32" className="hover:underline">
                  32×32 Grids
                </a>
              </li>
              <li>
                <a href="#64x64" className="hover:underline">
                  64×64 Grids
                </a>
              </li>
              <li>
                <a href="#128x128" className="hover:underline">
                  128×128 Grids
                </a>
              </li>
              <li>
                <a href="#choosing-grid-size" className="hover:underline">
                  Choosing the Right Grid Size
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Why grid size matters */}
            <section id="why-grid-size-matters">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Eye size={18} />
                Why Grid Size Matters
              </h2>
              <p className="text-muted-foreground">
                Grid size defines the resolution of your pixel art. Smaller
                grids force simplicity, while larger grids allow more detail.
                Picking the right grid size affects readability, style, and the
                time required to create your artwork.
              </p>
            </section>

            {/* 8x8 */}
            <section id="8x8">
              <h2 className="text-xl font-bold text-pixel-neon-pink mb-3">
                8×8 Grids
              </h2>
              <p className="text-muted-foreground">
                8×8 is the smallest practical grid size. Ideal for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Icons</li>
                <li>Favicons</li>
                <li>Simple emojis</li>
              </ul>
              <p className="mt-2">
                With only 64 pixels, you must be very intentional about each
                one.
              </p>
            </section>

            {/* 16x16 */}
            <section id="16x16">
              <h2 className="text-xl font-bold text-pixel-neon-cyan mb-3">
                16×16 Grids
              </h2>
              <p className="text-muted-foreground">
                16×16 is the most common beginner size for characters and
                sprites:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Game sprites</li>
                <li>Small characters</li>
                <li>Pixel icons</li>
              </ul>
              <p className="mt-2">
                Allows enough room for basic shading and color variation without
                being overwhelming.
              </p>
            </section>

            {/* 32x32 */}
            <section id="32x32">
              <h2 className="text-xl font-bold text-pixel-neon-green mb-3">
                32×32 Grids
              </h2>
              <p className="text-muted-foreground">
                32×32 is great for more detailed characters, tiles, or small
                scenes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Detailed game sprites</li>
                <li>Icons with shading</li>
                <li>Simple pixel illustrations</li>
              </ul>
              <p className="mt-2">
                Still manageable, but you can add more personality and detail.
              </p>
            </section>

            {/* 64x64 */}
            <section id="64x64">
              <h2 className="text-xl font-bold text-pixel-neon-pink mb-3">
                64×64 Grids
              </h2>
              <p className="text-muted-foreground">
                64×64 grids are for more advanced art:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Detailed characters</li>
                <li>Sprites with multiple animations</li>
                <li>Small pixel scenes</li>
              </ul>
              <p className="mt-2">
                This size allows good shading, highlights, and more complex
                shapes.
              </p>
            </section>

            {/* 128x128 */}
            <section id="128x128">
              <h2 className="text-xl font-bold text-pixel-neon-cyan mb-3">
                128×128 Grids
              </h2>
              <p className="text-muted-foreground">
                128×128 is considered a high-resolution pixel canvas:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Large illustrations</li>
                <li>Detailed characters and landscapes</li>
                <li>Pixel portraits</li>
              </ul>
              <p className="mt-2">
                Use this when you want smooth shading, gradients, or detailed
                compositions.
              </p>
            </section>

            {/* Choosing grid size */}
            <section id="choosing-grid-size">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Layers size={18} />
                Choosing the Right Grid Size
              </h2>
              <p className="text-muted-foreground mb-4">To pick a grid size:</p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Start small if you’re learning</li>
                <li>Pick larger grids for complex projects</li>
                <li>Consider the platform (games, icons, web)</li>
              </ul>

              <p className="mt-4">
                Remember, practice is more important than grid size. Use daily
                prompts to experiment and improve faster.
              </p>

              <Link
                href="/create"
                className="inline-block mt-6 border-4 border-border px-6 py-3 bg-background hover:bg-muted transition font-mono font-bold text-pixel-neon-cyan"
              >
                Start Today’s Pixel Art Challenge
              </Link>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Want more tips? Check out our{" "}
            <Link href="/blog/pixel-art-for-beginners" className="underline">
              Beginner Pixel Art Guide
            </Link>{" "}
            or join the{" "}
            <Link href="/" className="underline">
              Pixel Art Daily Challenge
            </Link>
            .
          </footer>
        </article>
      </main>
    
  );
}
