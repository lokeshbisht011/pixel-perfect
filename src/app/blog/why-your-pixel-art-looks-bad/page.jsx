import Link from "next/link";
import {
  AlertTriangle,
  Grid,
  Palette,
  Layers,
  Eye,
  TrendingUp,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Why Your Pixel Art Looks Bad (And How to Fix It)",
  description:
    "Struggling with pixel art that doesn’t look right? Learn the most common pixel art mistakes and simple fixes to improve fast.",
};

export default function WhyPixelArtLooksBadPage() {
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
              <span className="text-pixel-neon-cyan">
                Why Your Pixel Art Looks Bad
              </span>{" "}
              <span className="text-pixel-neon-pink">
                (And How to Fix It)
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              If your pixel art feels “off,” you’re not alone. Most beginner
              pixel art fails for the same few reasons—and all of them are
              fixable.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#canvas-size" className="hover:underline">
                  Your Canvas Is Too Big
                </a>
              </li>
              <li>
                <a href="#outline" className="hover:underline">
                  Messy Outlines
                </a>
              </li>
              <li>
                <a href="#colors" className="hover:underline">
                  Too Many Colors
                </a>
              </li>
              <li>
                <a href="#shading" className="hover:underline">
                  Bad Shading
                </a>
              </li>
              <li>
                <a href="#zoom-out" className="hover:underline">
                  Not Zooming Out
                </a>
              </li>
              <li>
                <a href="#fix-workflow" className="hover:underline">
                  A Simple Fix Workflow
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="canvas-size">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Grid size={18} />
                Your Canvas Is Too Big
              </h2>

              <p className="text-muted-foreground">
                Starting on a large canvas gives you too much freedom. Beginners
                add details early and lose clarity fast.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Characters: 16×16 or 32×32</li>
                <li>Objects/icons: 16×16</li>
                <li>Practice studies: even 8×8</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Smaller grids force better decisions and cleaner results.
              </p>
            </section>

            {/* Section 2 */}
            <section id="outline">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <AlertTriangle size={18} />
                Messy Outlines Kill Readability
              </h2>

              <p className="text-muted-foreground">
                Wobbly outlines, stray pixels, and jagged curves instantly make
                pixel art look amateur.
              </p>

              <p className="mt-4 text-muted-foreground">
                Focus on silhouette first. Details come later.
              </p>

              <p className="mt-4 text-muted-foreground">
                Learn more in{" "}
                <Link
                  href="/blog/common-pixel-art-mistakes-and-how-to-fix-them"
                  className="underline"
                >
                  Common Pixel Art Mistakes (And How to Fix Them)
                </Link>
                .
              </p>
            </section>

            {/* Section 3 */}
            <section id="colors">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Palette size={18} />
                You’re Using Too Many Colors
              </h2>

              <p className="text-muted-foreground">
                More colors don’t make pixel art better. They usually make it
                noisy and unfocused.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>1 outline color</li>
                <li>1 base color</li>
                <li>1 shadow color</li>
                <li>Optional highlight</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Pixel art rewards limitation. Digital art does not.
              </p>

              <p className="mt-4 text-muted-foreground">
                Related read:{" "}
                <Link
                  href="/blog/pixel-art-vs-digital-art"
                  className="underline"
                >
                  Pixel Art vs Digital Art
                </Link>
                .
              </p>
            </section>

            {/* Section 4 */}
            <section id="shading">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Layers size={18} />
                Your Shading Has No Light Direction
              </h2>

              <p className="text-muted-foreground">
                Random shading makes pixel art feel flat or muddy.
              </p>

              <p className="mt-4 text-muted-foreground">
                Pick one light source and stick to it. One shadow color is
                enough.
              </p>

              <p className="mt-4 text-muted-foreground">
                Learn proper shading in{" "}
                <Link
                  href="/blog/pixel-art-shading-techniques"
                  className="underline"
                >
                  Pixel Art Shading Techniques
                </Link>
                .
              </p>
            </section>

            {/* Section 5 */}
            <section id="zoom-out">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Eye size={18} />
                You’re Not Zooming Out Enough
              </h2>

              <p className="text-muted-foreground">
                Pixel art is meant to be seen small. If it only looks good
                zoomed in, it’s not working yet.
              </p>

              <p className="mt-4 text-muted-foreground">
                Zoom out often and ask: “Can I tell what this is instantly?”
              </p>
            </section>

            {/* Section 6 */}
            <section id="fix-workflow">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <TrendingUp size={18} />
                A Simple Fix-First Workflow
              </h2>

              <ol className="list-decimal pl-6 text-muted-foreground space-y-1">
                <li>Shrink the canvas</li>
                <li>Clean the outline</li>
                <li>Reduce colors</li>
                <li>Fix light direction</li>
                <li>Remove unnecessary pixels</li>
              </ol>

              <p className="mt-4 text-muted-foreground">
                Improvement comes from iteration, not perfection.
              </p>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Bad pixel art isn’t failure—it’s feedback. Draw today, fix one thing,
            repeat tomorrow.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
