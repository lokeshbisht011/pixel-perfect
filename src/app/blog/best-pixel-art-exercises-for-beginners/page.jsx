import Link from "next/link";
import {
  Dumbbell,
  Flame,
  Pencil,
  Eye,
  Layers,
  Timer,
  Repeat,
  TrendingUp,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "The Best Pixel Art Exercises for Beginners (That Actually Work)",
  description:
    "Struggling to improve at pixel art? These proven beginner exercises build real skill fast, without burnout or overwhelm.",
};

export default function PixelArtExercisesPage() {
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
              <span className="text-pixel-neon-cyan">The Best Pixel Art Exercises</span>{" "}
              <span className="text-pixel-neon-pink">
                for Beginners (That Actually Work)
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Stop guessing what to practice. These targeted pixel art exercises
              train the exact skills beginners need to improve fast.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li><a href="#canvas-limit" className="hover:underline">16x16 Canvas Challenge</a></li>
              <li><a href="#silhouette" className="hover:underline">One-Color Silhouette Practice</a></li>
              <li><a href="#outline" className="hover:underline">Outline Cleanup Drill</a></li>
              <li><a href="#shading" className="hover:underline">Limited Palette Shading</a></li>
              <li><a href="#copy" className="hover:underline">Copy Small Artworks</a></li>
              <li><a href="#stop-early" className="hover:underline">Stop-Early Challenge</a></li>
              <li><a href="#redraw" className="hover:underline">Redraw Practice</a></li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="canvas-limit">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Flame size={18} />
                The 16×16 Constraint Challenge
              </h2>

              <p className="text-muted-foreground">
                Drawing on tiny canvases forces clarity. You must focus on shape,
                readability, and efficient pixel placement.
              </p>

              <p className="mt-4 text-muted-foreground">
                This single exercise improves composition, proportions, and
                confidence faster than any other beginner drill.
              </p>

              <p className="mt-4 text-muted-foreground">
                Learn why this works in{" "}
                <Link
                  href="/blog/why-limiting-your-pixel-art-canvas-makes-you-better-faster"
                  className="underline"
                >
                  Why Limiting Your Pixel Art Canvas Makes You Better Faster
                </Link>
                .
              </p>
            </section>

            {/* Section 2 */}
            <section id="silhouette">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Eye size={18} />
                One-Color Silhouette Practice
              </h2>

              <p className="text-muted-foreground">
                Draw objects using only one dark color. No shading, no details.
                Just shape.
              </p>

              <p className="mt-4 text-muted-foreground">
                If your silhouette is unclear, your artwork will never read well —
                no matter how good your shading is.
              </p>

              <p className="mt-4 text-muted-foreground">
                See common beginner mistakes in{" "}
                <Link
                  href="/blog/what-makes-good-pixel-art-7-rules-beginners-miss"
                  className="underline"
                >
                  What Makes Good Pixel Art? 7 Rules Beginners Miss
                </Link>
                .
              </p>
            </section>

            {/* Section 3 */}
            <section id="outline">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Pencil size={18} />
                Outline Cleanup Drill
              </h2>

              <p className="text-muted-foreground">
                Messy outlines destroy pixel art. Practicing cleanup teaches
                precision, flow, and pixel efficiency.
              </p>

              <p className="mt-4 text-muted-foreground">
                Learn advanced outline techniques in{" "}
                <Link
                  href="/blog/pixel-art-line-art-how-to-draw-clean-outlines"
                  className="underline"
                >
                  Pixel Art Line Art: How to Draw Clean Outlines
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/how-to-fix-messy-pixel-art-a-step-by-step-cleanup-guide"
                  className="underline"
                >
                  How to Fix Messy Pixel Art
                </Link>
                .
              </p>
            </section>

            {/* Section 4 */}
            <section id="shading">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Layers size={18} />
                Limited Palette Shading
              </h2>

              <p className="text-muted-foreground">
                Using fewer colors forces you to understand light, depth, and
                contrast properly.
              </p>

              <p className="mt-4 text-muted-foreground">
                If your shading looks strange, read{" "}
                <Link
                  href="/blog/why-your-pixel-art-looks-bad-and-how-to-fix-it"
                  className="underline"
                >
                  Why Your Pixel Art Looks Bad (And How to Fix It)
                </Link>
                .
              </p>
            </section>

            {/* Section 5 */}
            <section id="copy">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Repeat size={18} />
                Copy Small Pixel Art Pieces
              </h2>

              <p className="text-muted-foreground">
                Copying small sprites teaches pixel efficiency and structure —
                without overwhelming complexity.
              </p>

              <p className="mt-4 text-muted-foreground">
                This strengthens your overall workflow. Learn more in{" "}
                <Link
                  href="/blog/a-beginner-pixel-art-workflow-from-blank-canvas-to-finished-art"
                  className="underline"
                >
                  A Beginner Pixel Art Workflow
                </Link>
                .
              </p>
            </section>

            {/* Section 6 */}
            <section id="stop-early">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Timer size={18} />
                Stop-Early Challenge
              </h2>

              <p className="text-muted-foreground">
                Set a 10–15 minute timer and stop immediately when it ends.
              </p>

              <p className="mt-4 text-muted-foreground">
                Learning when to stop prevents overworking. Read{" "}
                <Link
                  href="/blog/when-to-stop-adding-details-in-pixel-art"
                  className="underline"
                >
                  When to Stop Adding Details in Pixel Art
                </Link>
                .
              </p>
            </section>

            {/* Section 7 */}
            <section id="redraw">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <TrendingUp size={18} />
                Redraw Practice
              </h2>

              <p className="text-muted-foreground">
                Redrawing the same subject days apart makes improvement visible.
              </p>

              <p className="mt-4 text-muted-foreground">
                This answers the big question in{" "}
                <Link
                  href="/blog/how-to-know-if-your-pixel-art-is-actually-improving"
                  className="underline"
                >
                  How to Know If Your Pixel Art Is Actually Improving
                </Link>
                .
              </p>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Practice smarter, not longer. One focused pixel session per day is
            enough to grow.
          </footer>
        </article>
      </main>
    
  );
}
