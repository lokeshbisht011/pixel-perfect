import Link from "next/link";
import { Sparkles, Pencil, Grid, Palette } from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Pixel Art for Beginners: A Step-by-Step Guide",
  description:
    "Learn pixel art from scratch. Understand grid sizes, color palettes, shading, and how to practice pixel art daily with simple examples.",
};

export default function PixelArtForBeginnersPage() {
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
              <span className="text-pixel-neon-cyan">Pixel Art</span>{" "}
              <span className="text-pixel-neon-pink">for Beginners</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              A beginner-friendly guide to pixel art — covering grid sizes,
              colors, shading, tools, and how to practice daily.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#what-is-pixel-art" className="hover:underline">
                  What is Pixel Art?
                </a>
              </li>
              <li>
                <a href="#grid-sizes" className="hover:underline">
                  Understanding Grid Sizes
                </a>
              </li>
              <li>
                <a href="#color-palettes" className="hover:underline">
                  Choosing Colors
                </a>
              </li>
              <li>
                <a href="#shading" className="hover:underline">
                  Pixel Art Shading Basics
                </a>
              </li>
              <li>
                <a href="#practice-daily" className="hover:underline">
                  How to Practice Pixel Art Daily
                </a>
              </li>
              <li>
                <a href="#mistakes" className="hover:underline">
                  Common Beginner Mistakes
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section */}
            <section id="what-is-pixel-art">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Pencil size={18} />
                What Is Pixel Art?
              </h2>
              <p className="text-muted-foreground">
                Pixel art is a form of digital art where images are created and
                edited at the pixel level. Each pixel matters. Unlike regular
                digital drawing, you work with a fixed grid and intentionally
                place every color.
              </p>
            </section>

            {/* Section */}
            <section id="grid-sizes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Grid size={18} />
                Understanding Pixel Art Grid Sizes
              </h2>
              <p className="text-muted-foreground mb-4">
                Grid size defines how many pixels wide and tall your artwork is.
                Beginners should start small.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>8×8</strong> – icons, symbols
                </li>
                <li>
                  <strong>16×16</strong> – characters, emojis
                </li>
                <li>
                  <strong>32×32</strong> – detailed sprites
                </li>
                <li>
                  <strong>64×64+</strong> – advanced illustrations
                </li>
              </ul>

              <p className="mt-4">
                Smaller grids help you focus on fundamentals instead of details.
              </p>
            </section>

            {/* Section */}
            <section id="color-palettes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Palette size={18} />
                Choosing Colors for Pixel Art
              </h2>
              <p className="text-muted-foreground mb-4">
                Pixel art looks best with limited colors. Too many colors can
                make artwork messy.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Start with 4–8 colors</li>
                <li>Use contrast instead of outlines</li>
                <li>Avoid pure black and white</li>
              </ul>
            </section>

            {/* Section */}
            <section id="shading">
              <h2 className="text-xl font-bold text-pixel-neon-cyan mb-3">
                Pixel Art Shading Basics
              </h2>
              <p className="text-muted-foreground mb-4">
                Shading in pixel art is about suggestion, not realism.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use 2–3 shades per color</li>
                <li>Shift hue slightly when shading</li>
                <li>Avoid heavy gradients</li>
              </ul>
            </section>

            {/* CTA */}
            <section
              id="practice-daily"
              className="border-4 border-border bg-card p-6 text-center shadow-[6px_6px_0_rgba(0,0,0,0.5)]"
            >
              <h2 className="text-xl font-bold text-pixel-neon-pink mb-3">
                Practice Pixel Art Daily
              </h2>
              <p className="text-muted-foreground mb-6">
                The fastest way to improve pixel art is by practicing every day.
                Small prompts remove decision fatigue.
              </p>

              <Link
                href="/create"
                className="inline-flex items-center gap-2 border-4 border-border px-5 py-3 bg-background hover:bg-muted transition"
              >
                <Sparkles size={18} />
                Try Today’s Pixel Art Prompt
              </Link>
            </section>

            {/* Section */}
            <section id="mistakes">
              <h2 className="text-xl font-bold text-pixel-neon-green mb-3">
                Common Beginner Mistakes
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Using too many colors</li>
                <li>Starting with large canvases</li>
                <li>Over-shading</li>
                <li>Skipping daily practice</li>
              </ul>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Want to improve faster? Join the{" "}
            <Link href="/" className="underline">
              Pixel Art Daily Challenge
            </Link>
            .
          </footer>
        </article>
      </main>
    </Layout>
  );
}
