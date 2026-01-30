import Link from "next/link";
import {
  Star,
  Grid,
  Eye,
  Palette,
  Layers,
  Scissors,
  Repeat,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "What Makes Good Pixel Art? 7 Rules Beginners Miss",
  description:
    "Learn the core rules that make pixel art look clean, readable, and professional—even at tiny sizes.",
};

export default function WhatMakesGoodPixelArtPage() {
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
              <span className="text-pixel-neon-cyan">
                What Makes Good Pixel Art?
              </span>{" "}
              <span className="text-pixel-neon-pink">
                7 Rules Beginners Miss
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Good pixel art isn’t about drawing skill—it’s about decisions.
              These seven rules separate clean, readable pixel art from messy
              beginner work.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#readability" className="hover:underline">
                  Rule 1: Readability Comes First
                </a>
              </li>
              <li>
                <a href="#small-canvas" className="hover:underline">
                  Rule 2: Start Small
                </a>
              </li>
              <li>
                <a href="#limited-colors" className="hover:underline">
                  Rule 3: Limit Your Colors
                </a>
              </li>
              <li>
                <a href="#clean-outline" className="hover:underline">
                  Rule 4: Clean Outlines Matter
                </a>
              </li>
              <li>
                <a href="#intentional-shading" className="hover:underline">
                  Rule 5: Shading Must Be Intentional
                </a>
              </li>
              <li>
                <a href="#less-detail" className="hover:underline">
                  Rule 6: Less Detail = Better Pixel Art
                </a>
              </li>
              <li>
                <a href="#iterate" className="hover:underline">
                  Rule 7: Iterate, Don’t Restart
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Rule 1 */}
            <section id="readability">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Eye size={18} />
                Rule 1: Readability Comes First
              </h2>

              <p className="text-muted-foreground">
                If someone can’t tell what your pixel art is in one second,
                it’s not working yet.
              </p>

              <p className="mt-4 text-muted-foreground">
                Pixel art is designed to be viewed small. Clear shapes matter
                more than details.
              </p>

              <p className="mt-4 text-muted-foreground">
                This is why many beginners feel stuck. Learn more in{" "}
                <Link
                  href="/blog/why-your-pixel-art-looks-bad"
                  className="underline"
                >
                  Why Your Pixel Art Looks Bad
                </Link>
                .
              </p>
            </section>

            {/* Rule 2 */}
            <section id="small-canvas">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Grid size={18} />
                Rule 2: Start Small (Smaller Than You Think)
              </h2>

              <p className="text-muted-foreground">
                Large canvases hide mistakes. Small canvases expose them—and
                force better choices.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Icons: 16×16</li>
                <li>Characters: 16×16 or 32×32</li>
                <li>Practice studies: 8×8</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Small grids teach clarity faster than any tutorial.
              </p>
            </section>

            {/* Rule 3 */}
            <section id="limited-colors">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Palette size={18} />
                Rule 3: Limit Your Colors
              </h2>

              <p className="text-muted-foreground">
                More colors don’t equal better art. In pixel art, they often
                ruin cohesion.
              </p>

              <p className="mt-4 text-muted-foreground">
                A strong piece often uses 3–5 colors total.
              </p>

              <p className="mt-4 text-muted-foreground">
                Go deeper in{" "}
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

            {/* Rule 4 */}
            <section id="clean-outline">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Scissors size={18} />
                Rule 4: Clean Outlines Matter More Than You Think
              </h2>

              <p className="text-muted-foreground">
                Jaggies, stray pixels, and uneven curves instantly signal
                beginner work.
              </p>

              <p className="mt-4 text-muted-foreground">
                Focus on silhouette first. Details come later.
              </p>

              <p className="mt-4 text-muted-foreground">
                See real examples in{" "}
                <Link
                  href="/blog/common-pixel-art-mistakes-and-how-to-fix-them"
                  className="underline"
                >
                  Common Pixel Art Mistakes
                </Link>
                .
              </p>
            </section>

            {/* Rule 5 */}
            <section id="intentional-shading">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Layers size={18} />
                Rule 5: Shading Must Be Intentional
              </h2>

              <p className="text-muted-foreground">
                Random shading flattens forms and confuses depth.
              </p>

              <p className="mt-4 text-muted-foreground">
                Use one light source. One shadow color is usually enough.
              </p>

              <p className="mt-4 text-muted-foreground">
                Learn proper techniques in{" "}
                <Link
                  href="/blog/pixel-art-shading-techniques"
                  className="underline"
                >
                  Pixel Art Shading Techniques
                </Link>
                .
              </p>
            </section>

            {/* Rule 6 */}
            <section id="less-detail">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Star size={18} />
                Rule 6: Less Detail = Better Pixel Art
              </h2>

              <p className="text-muted-foreground">
                Beginners over-detail. Experts remove pixels.
              </p>

              <p className="mt-4 text-muted-foreground">
                If removing a pixel doesn’t hurt clarity, it probably helps.
              </p>
            </section>

            {/* Rule 7 */}
            <section id="iterate">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Repeat size={18} />
                Rule 7: Iterate, Don’t Restart
              </h2>

              <p className="text-muted-foreground">
                Constantly restarting kills progress. Small edits build skill.
              </p>

              <p className="mt-4 text-muted-foreground">
                Improvement comes from finishing and refining—not perfection.
              </p>

              <p className="mt-4 text-muted-foreground">
                If you’re unsure whether you’re improving, read{" "}
                <Link
                  href="/blog/how-to-know-if-your-pixel-art-is-improving"
                  className="underline"
                >
                  How to Know If Your Pixel Art Is Improving
                </Link>
                .
              </p>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Good pixel art is a series of good decisions—one pixel at a time.
          </footer>
        </article>
      </main>
    
  );
}
