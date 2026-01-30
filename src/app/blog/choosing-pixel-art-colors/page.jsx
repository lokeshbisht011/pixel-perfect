import Link from "next/link";
import { Sparkles, Palette, Pencil } from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Choosing the Right Pixel Art Colors",
  description:
    "Learn how to pick pixel art color palettes that pop and keep your designs readable. Tips, popular palettes, and tools for pixel art colors.",
};

export default function ChoosingPixelArtColorsPage() {
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
              <span className="text-pixel-neon-cyan">Choosing the Right</span>{" "}
              <span className="text-pixel-neon-pink">Pixel Art Colors</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Tips, palettes, and tools to pick pixel art colors that make your
              designs pop while keeping them readable.
            </p>
          </header>

          {/* Table of Contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-palettes-matter" className="hover:underline">
                  Why Palettes Matter
                </a>
              </li>
              <li>
                <a href="#limited-vs-full" className="hover:underline">
                  Limited vs Full Color Palettes
                </a>
              </li>
              <li>
                <a href="#popular-palettes" className="hover:underline">
                  Popular Pixel Art Palettes
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:underline">
                  Tools for Palette Creation
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:underline">
                  Tips for Choosing Colors
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section */}
            <section id="why-palettes-matter">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Palette size={18} />
                Why Palettes Matter
              </h2>
              <p className="text-muted-foreground">
                Pixel art thrives on clarity. Limited palettes help keep your
                designs readable, while the wrong combination can make them
                confusing. Start simple and experiment gradually.
              </p>
            </section>

            {/* Section */}
            <section id="limited-vs-full">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Palette size={18} />
                Limited vs Full Color Palettes
              </h2>
              <p className="text-muted-foreground mb-4">
                Beginners should start with 4–8 colors. Advanced artists may
                use 16–32 colors. Too many colors on a small grid can create
                clutter.
              </p>
            </section>

            {/* Section */}
            <section id="popular-palettes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Palette size={18} />
                Popular Pixel Art Palettes
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>NES Palette – Classic retro colors</li>
                <li>Game Boy Palette – Greenish monochrome look</li>
                <li>Neon Pixel Palette – Perfect for modern pixel art</li>
              </ul>
            </section>

            {/* Section */}
            <section id="tools">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Palette size={18} />
                Tools for Palette Creation
              </h2>
              <p className="text-muted-foreground mb-4">
                Use tools like{" "}
                <a
                  href="https://lospec.com/palette-list"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pixel-neon-cyan hover:underline"
                >
                  Lospec
                </a>{" "}
                or software like Aseprite and Piskel to create pixel art palettes.
              </p>
            </section>

            {/* Section */}
            <section id="tips">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Palette size={18} />
                Tips for Choosing Colors
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use high contrast for readability</li>
                <li>Stick to complementary colors for harmony</li>
                <li>Test on small grids to ensure clarity</li>
                <li>Use shades and highlights sparingly</li>
              </ul>
            </section>

            {/* CTA */}
            <section
              id="practice-daily"
              className="border-4 border-border bg-card p-6 text-center shadow-[6px_6px_0_rgba(0,0,0,0.5)]"
            >
              <h2 className="text-xl font-bold text-pixel-neon-cyan mb-3">
                Apply These Colors Today
              </h2>
              <p className="text-muted-foreground mb-6">
                Try using these palette tips on a small prompt to practice your
                color choices.
              </p>

              <Link
                href="/create"
                className="inline-flex items-center gap-2 border-4 border-border px-5 py-3 bg-background hover:bg-muted transition"
              >
                <Sparkles size={18} />
                Try Today’s Pixel Art Prompt
              </Link>
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
    
  );
}
