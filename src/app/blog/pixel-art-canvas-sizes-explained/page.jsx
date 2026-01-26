import Link from "next/link";
import {
  Grid3X3,
  Layers,
  Ruler,
  Lightbulb,
  Flame,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Pixel Art Canvas Sizes Explained (8x8, 16x16, 32x32, 64x64)",
  description:
    "Confused about pixel art canvas sizes? Learn when to use 8x8, 16x16, 32x32, and 64x64 grids with beginner-friendly examples.",
};

export default function PixelArtCanvasSizesPage() {
  return (
    <Layout>
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
              <span className="text-pixel-neon-cyan">Pixel Art Canvas Sizes</span>{" "}
              <span className="text-pixel-neon-pink">Explained</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Choosing the right canvas size can make pixel art feel easy—or
              frustrating. This guide explains when to use 8x8, 16x16, 32x32,
              and 64x64 grids.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-sizes-matter" className="hover:underline">
                  Why Canvas Size Matters
                </a>
              </li>
              <li>
                <a href="#8x8" className="hover:underline">
                  8x8 Pixel Art
                </a>
              </li>
              <li>
                <a href="#16x16" className="hover:underline">
                  16x16 Pixel Art
                </a>
              </li>
              <li>
                <a href="#32x32" className="hover:underline">
                  32x32 Pixel Art
                </a>
              </li>
              <li>
                <a href="#64x64" className="hover:underline">
                  64x64 Pixel Art
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-sizes-matter">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Grid3X3 size={18} />
                Why Canvas Size Matters
              </h2>
              <p className="text-muted-foreground">
                Canvas size determines how much detail you can add—and how
                complex your decisions become. Smaller grids force clarity,
                while larger grids allow detail but demand control.
              </p>
            </section>

            {/* Section 2 */}
            <section id="8x8">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Ruler size={18} />
                8x8 Pixel Art
              </h2>
              <p className="text-muted-foreground">
                8x8 is extremely restrictive. It’s perfect for icons,
                micro-sprites, and learning how to communicate ideas with very
                few pixels.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-3">
                <li>Best for icons and symbols</li>
                <li>Forces strong shape design</li>
                <li>Great practice for beginners</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="16x16">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Layers size={18} />
                16x16 Pixel Art
              </h2>
              <p className="text-muted-foreground">
                This is the most common beginner canvas size. It offers just
                enough space for readable characters without overwhelming you.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-3">
                <li>Ideal for sprites and characters</li>
                <li>Easy to finish quickly</li>
                <li>Perfect daily practice size</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="32x32">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Lightbulb size={18} />
                32x32 Pixel Art
              </h2>
              <p className="text-muted-foreground">
                32x32 gives you room for expression while still feeling
                “pixel-art tight.” Many game assets live comfortably here.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-3">
                <li>Good balance of detail and control</li>
                <li>Allows shading and texture</li>
                <li>Popular for indie games</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="64x64">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Flame size={18} />
                64x64 Pixel Art
              </h2>
              <p className="text-muted-foreground">
                64x64 is where many beginners struggle. The grid is large enough
                to hide mistakes—but also to create inconsistency.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-3">
                <li>Better for intermediate artists</li>
                <li>Requires strong fundamentals</li>
                <li>Easy to over-detail</li>
              </ul>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            New to pixel art? Start with{" "}
            <Link href="/blog/pixel-art-for-beginners" className="underline">
              Pixel Art for Beginners
            </Link>{" "}
            and learn more in{" "}
            <Link href="/blog/best-pixel-art-grid-sizes" className="underline">
              Best Pixel Art Grid Sizes
            </Link>
            .
          </footer>
        </article>
      </main>
    </Layout>
  );
}
