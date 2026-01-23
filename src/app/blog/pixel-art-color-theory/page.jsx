import Link from "next/link";
import {
  Palette,
  Lightbulb,
  Layers,
  Sun,
  Droplets,
  Flame,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Pixel Art Color Theory (Simple Rules That Actually Work)",
  description:
    "Learn pixel art color theory the easy way. Simple, beginner-friendly rules for choosing colors, shading, contrast, and palettes that actually work.",
};

export default function PixelArtColorTheoryPage() {
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
              <span className="text-pixel-neon-pink">Color Theory</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Color theory doesn’t have to be complicated. These simple,
              beginner-friendly rules will help your pixel art look cleaner,
              more readable, and more professional.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-color-theory" className="hover:underline">
                  Why Color Theory Matters in Pixel Art
                </a>
              </li>
              <li>
                <a href="#limited-palettes" className="hover:underline">
                  Use Fewer Colors Than You Think
                </a>
              </li>
              <li>
                <a href="#contrast" className="hover:underline">
                  Contrast Beats Detail
                </a>
              </li>
              <li>
                <a href="#shading" className="hover:underline">
                  Simple Shading Rules
                </a>
              </li>
              <li>
                <a href="#beginner-tips" className="hover:underline">
                  Beginner Color Tips That Actually Work
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-color-theory">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Lightbulb size={18} />
                Why Color Theory Matters in Pixel Art
              </h2>
              <p className="text-muted-foreground mb-3">
                Pixel art is low-resolution by nature. You don’t have many pixels
                to work with, so every color choice matters more than in other
                art styles.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Better readability at small sizes</li>
                <li>Cleaner shapes and silhouettes</li>
                <li>More depth with fewer pixels</li>
                <li>Avoid muddy or noisy artwork</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="limited-palettes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Palette size={18} />
                Use Fewer Colors Than You Think
              </h2>
              <p className="text-muted-foreground mb-4">
                Beginners often use too many colors. Limiting your palette makes
                your art look more intentional and cohesive.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Start with 4–8 colors per artwork</li>
                <li>Reuse colors across different objects</li>
                <li>Adjust brightness instead of adding new hues</li>
                <li>Study classic game palettes for inspiration</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="contrast">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Layers size={18} />
                Contrast Beats Detail
              </h2>
              <p className="text-muted-foreground mb-4">
                High contrast helps shapes stand out. Even simple art can look
                great if the light and dark values are clear.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Separate foreground and background clearly</li>
                <li>Avoid colors with similar brightness</li>
                <li>Test your art in grayscale</li>
                <li>Strong silhouettes matter more than tiny details</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="shading">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Sun size={18} />
                Simple Shading Rules
              </h2>
              <p className="text-muted-foreground mb-4">
                Shading in pixel art is about suggestion, not realism. Keep it
                simple and consistent.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Pick one light source and stick to it</li>
                <li>Avoid pure black for shadows</li>
                <li>Shift hue slightly when shading</li>
                <li>Use fewer shade steps than you think</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="beginner-tips">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Flame size={18} />
                Beginner Color Tips That Actually Work
              </h2>
              <p className="text-muted-foreground mb-4">
                If you remember nothing else, remember these:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Limit your palette</li>
                <li>Prioritize contrast</li>
                <li>Reuse colors creatively</li>
                <li>Keep shading minimal</li>
                <li>Study pixel art you admire</li>
              </ul>

              <p className="mt-4">
                Want to practice color theory without overthinking it?
              </p>

              <Link
                href="/create"
                className="inline-block mt-6 border-4 border-border px-6 py-3 bg-background hover:bg-muted transition font-mono font-bold text-pixel-neon-green"
              >
                Try Today’s Pixel Art Daily Prompt
              </Link>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            New to pixel art? Read{" "}
            <Link href="/blog/pixel-art-for-beginners" className="underline">
              Pixel Art for Beginners
            </Link>{" "}
            or explore more{" "}
            <Link href="/blog/pixel-art-ideas-prompts" className="underline">
              Pixel Art Ideas & Prompts
            </Link>
            .
          </footer>
        </article>
      </main>
    </Layout>
  );
}
