import Link from "next/link";
import { AlertTriangle, Eye, Palette, Grid, Zap } from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Common Pixel Art Mistakes (And How to Fix Them)",
  description:
    "Avoid the most common pixel art mistakes beginners make. Learn how to fix grid size issues, color problems, shading errors, and improve your pixel art faster.",
};

export default function CommonPixelArtMistakesPage() {
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
              <span className="text-pixel-neon-cyan">Common Pixel Art</span>{" "}
              <span className="text-pixel-neon-pink">Mistakes</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Every pixel artist makes mistakes — especially in the beginning.
              Learn the most common pixel art mistakes and exactly how to fix
              them.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#too-big-canvas" className="hover:underline">
                  Starting With a Canvas That’s Too Big
                </a>
              </li>
              <li>
                <a href="#too-many-colors" className="hover:underline">
                  Using Too Many Colors
                </a>
              </li>
              <li>
                <a href="#pillow-shading" className="hover:underline">
                  Pillow Shading
                </a>
              </li>
              <li>
                <a href="#over-detailing" className="hover:underline">
                  Over-Detailing Too Early
                </a>
              </li>
              <li>
                <a href="#not-practicing" className="hover:underline">
                  Inconsistent Practice
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Mistake 1 */}
            <section id="too-big-canvas">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Grid size={18} />
                Starting With a Canvas That’s Too Big
              </h2>
              <p className="text-muted-foreground mb-3">
                One of the biggest beginner mistakes is starting with large
                grids like 64×64 or 128×128.
              </p>
              <p className="text-muted-foreground mb-3">
                Large canvases make it harder to control shapes, colors, and
                shading.
              </p>
              <p>
                <strong>Fix:</strong> Start with small grids like{" "}
                <span className="text-pixel-neon-green">8×8</span> or{" "}
                <span className="text-pixel-neon-green">16×16</span>. Small
                grids teach pixel discipline.
              </p>
            </section>

            {/* Mistake 2 */}
            <section id="too-many-colors">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Palette size={18} />
                Using Too Many Colors
              </h2>
              <p className="text-muted-foreground mb-3">
                Beginners often use too many colors thinking it adds realism. In
                pixel art, this usually creates noise.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-3">
                <li>Makes sprites look messy</li>
                <li>Breaks visual consistency</li>
                <li>Harder to shade properly</li>
              </ul>
              <p>
                <strong>Fix:</strong> Limit yourself to{" "}
                <span className="text-pixel-neon-green">4–8 colors</span> and
                focus on contrast instead of variety.
              </p>
            </section>

            {/* Mistake 3 */}
            <section id="pillow-shading">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Eye size={18} />
                Pillow Shading
              </h2>
              <p className="text-muted-foreground mb-3">
                Pillow shading happens when you shade evenly from the edges
                toward the center, making objects look flat.
              </p>
              <p className="text-muted-foreground mb-3">
                This removes any sense of light direction.
              </p>
              <p>
                <strong>Fix:</strong> Decide on a light source first. Shade one
                side lighter and the opposite side darker.
              </p>
            </section>

            {/* Mistake 4 */}
            <section id="over-detailing">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <AlertTriangle size={18} />
                Over-Detailing Too Early
              </h2>
              <p className="text-muted-foreground mb-3">
                Adding tiny details before the main shape is readable is a
                common trap.
              </p>
              <p className="text-muted-foreground mb-3">
                If the silhouette doesn’t work, no amount of detail will fix it.
              </p>
              <p>
                <strong>Fix:</strong> Block out simple shapes first. Add details
                only after the form reads clearly.
              </p>
            </section>

            {/* Mistake 5 */}
            <section id="not-practicing">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Zap size={18} />
                Inconsistent Practice
              </h2>
              <p className="text-muted-foreground mb-4">
                Pixel art is a skill — and skills improve with consistency, not
                long random sessions.
              </p>
              <p className="text-muted-foreground mb-4">
                Many artists quit because they don’t see progress quickly.
              </p>
              <p>
                <strong>Fix:</strong> Practice a little every day using small,
                focused prompts.
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
            Want to improve faster? Read{" "}
            <Link href="/blog/pixel-art-for-beginners" className="underline">
              Pixel Art for Beginners
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
