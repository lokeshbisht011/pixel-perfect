import Link from "next/link";
import {
  Palette,
  Droplet,
  Layers,
  Lightbulb,
  Flame,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Pixel Art Color Palettes: How Many Colors Should You Use?",
  description:
    "How many colors do you really need for pixel art? Learn how palette size affects clarity, style, and beginner progress.",
};

export default function PixelArtColorPalettesPage() {
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
              <span className="text-pixel-neon-cyan">Pixel Art Color Palettes:</span>{" "}
              <span className="text-pixel-neon-pink">How Many Colors Should You Use?</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Using too many colors is one of the most common pixel art mistakes.
              This guide explains how many colors you actually need—and why fewer
              often looks better.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#what-is-palette" className="hover:underline">
                  What Is a Color Palette?
                </a>
              </li>
              <li>
                <a href="#why-limit-colors" className="hover:underline">
                  Why Fewer Colors Work Better
                </a>
              </li>
              <li>
                <a href="#palette-sizes" className="hover:underline">
                  Common Palette Sizes
                </a>
              </li>
              <li>
                <a href="#choosing-colors" className="hover:underline">
                  Choosing the Right Colors
                </a>
              </li>
              <li>
                <a href="#common-mistakes" className="hover:underline">
                  Common Palette Mistakes
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="what-is-palette">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Palette size={18} />
                What Is a Color Palette?
              </h2>
              <p className="text-muted-foreground">
                A color palette is the limited set of colors you allow yourself
                to use in a pixel art piece. Limiting colors creates consistency
                and forces smarter color decisions.
              </p>
            </section>

            {/* Section 2 */}
            <section id="why-limit-colors">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Droplet size={18} />
                Why Fewer Colors Work Better
              </h2>
              <p className="text-muted-foreground mb-4">
                Beginners often assume more colors equal more detail. In pixel
                art, the opposite is usually true.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Limited palettes improve readability</li>
                <li>Shading becomes more intentional</li>
                <li>Your style looks more cohesive</li>
                <li>Fixing mistakes becomes easier</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="palette-sizes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Layers size={18} />
                Common Palette Sizes
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>
                  <strong>2–4 colors:</strong> Icons, silhouettes, simple studies
                </li>
                <li>
                  <strong>5–8 colors:</strong> Characters, objects, daily practice
                </li>
                <li>
                  <strong>9–16 colors:</strong> Scenes, detailed sprites
                </li>
                <li>
                  <strong>16+ colors:</strong> Advanced or polished work
                </li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Most beginner-friendly pixel art lives comfortably under 8
                colors.
              </p>
            </section>

            {/* Section 4 */}
            <section id="choosing-colors">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Lightbulb size={18} />
                Choosing the Right Colors
              </h2>
              <p className="text-muted-foreground mb-4">
                Palette size matters—but so does color choice.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Use hue shifting instead of pure brightness</li>
                <li>Reuse colors across materials</li>
                <li>Avoid pure black and white</li>
                <li>Test readability at 100% zoom</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                For a deeper breakdown, read{" "}
                <Link
                  href="/blog/choosing-pixel-art-colors"
                  className="underline"
                >
                  Choosing Pixel Art Colors
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/pixel-art-color-theory"
                  className="underline"
                >
                  Pixel Art Color Theory
                </Link>
                .
              </p>
            </section>

            {/* Section 5 */}
            <section id="common-mistakes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Flame size={18} />
                Common Palette Mistakes
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Adding new colors instead of reusing existing ones</li>
                <li>Using gradients instead of clean ramps</li>
                <li>Over-shading tiny sprites</li>
                <li>Ignoring contrast</li>
              </ul>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            When in doubt, use fewer colors. Strong palettes make pixel art feel
            intentional, readable, and timeless.
          </footer>
        </article>
      </main>
    
  );
}
