import Link from "next/link";
import {
  Shapes,
  Grid3X3,
  Box,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Pixel Art Style Guide: Chibi, Isometric, Retro & Modern",
  description:
    "A beginner-friendly guide to popular pixel art styles like chibi, isometric, retro, and modern—and how to choose the right one.",
};

export default function PixelArtStyleGuidePage() {
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
              <span className="text-pixel-neon-cyan">Pixel Art Style Guide:</span>{" "}
              <span className="text-pixel-neon-pink">
                Chibi, Isometric, Retro & Modern
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Pixel art isn’t one style—it’s many. This guide breaks down the
              most popular pixel art styles and helps you choose one to start
              with.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-styles-matter" className="hover:underline">
                  Why Pixel Art Styles Matter
                </a>
              </li>
              <li>
                <a href="#chibi-style" className="hover:underline">
                  Chibi Pixel Art Style
                </a>
              </li>
              <li>
                <a href="#isometric-style" className="hover:underline">
                  Isometric Pixel Art Style
                </a>
              </li>
              <li>
                <a href="#retro-modern" className="hover:underline">
                  Retro vs Modern Pixel Art
                </a>
              </li>
              <li>
                <a href="#choosing-style" className="hover:underline">
                  How to Choose Your Style
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-styles-matter">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Shapes size={18} />
                Why Pixel Art Styles Matter
              </h2>
              <p className="text-muted-foreground">
                Pixel art styles define how much detail you use, how you shade,
                and even what subjects feel “right” to draw.
              </p>

              <p className="mt-3 text-muted-foreground">
                As a beginner, choosing a style helps you avoid overwhelm and
                practice with clearer constraints.
              </p>

              <p className="mt-3 text-muted-foreground">
                If you’re just starting out, begin with{" "}
                <Link
                  href="/blog/pixel-art-for-beginners"
                  className="underline"
                >
                  Pixel Art for Beginners
                </Link>{" "}
                to understand the fundamentals first.
              </p>
            </section>

            {/* Section 2 */}
            <section id="chibi-style">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Sparkles size={18} />
                Chibi Pixel Art Style
              </h2>

              <p className="text-muted-foreground mb-4">
                Chibi pixel art focuses on cute, exaggerated proportions.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Big heads, small bodies</li>
                <li>Simple shapes and minimal detail</li>
                <li>Great for characters and avatars</li>
                <li>Very beginner-friendly</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Chibi is ideal if you enjoy character design and fast results.
              </p>
            </section>

            {/* Section 3 */}
            <section id="isometric-style">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Grid3X3 size={18} />
                Isometric Pixel Art Style
              </h2>

              <p className="text-muted-foreground mb-4">
                Isometric pixel art uses a fixed angled grid to create a 3D-like
                perspective.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Perfect for buildings and environments</li>
                <li>Requires strict grid discipline</li>
                <li>Harder for complete beginners</li>
                <li>Popular in games and simulations</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                This style rewards patience and planning more than speed.
              </p>
            </section>

            {/* Section 4 */}
            <section id="retro-modern">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Box size={18} />
                Retro vs Modern Pixel Art
              </h2>

              <p className="text-muted-foreground mb-4">
                Retro and modern pixel art differ mainly in constraints.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>
                  <strong>Retro:</strong> Limited colors, low resolution, strict
                  hardware-like rules
                </li>
                <li>
                  <strong>Modern:</strong> Higher resolutions, smoother shading,
                  flexible palettes
                </li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Retro teaches fundamentals. Modern allows expressive freedom.
              </p>
            </section>

            {/* Section 5 */}
            <section id="choosing-style">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Lightbulb size={18} />
                How to Choose Your Pixel Art Style
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Choose the style that excites you</li>
                <li>Start with smaller canvases</li>
                <li>Stick to one style for a few weeks</li>
                <li>Switch styles intentionally, not randomly</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Need inspiration? Try prompts from{" "}
                <Link
                  href="/blog/pixel-art-ideas-prompts"
                  className="underline"
                >
                  Pixel Art Ideas & Prompts
                </Link>{" "}
                and explore styles naturally.
              </p>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Styles change. Fundamentals stay. Master both.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
