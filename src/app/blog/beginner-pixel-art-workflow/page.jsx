import Link from "next/link";
import {
  Play,
  Pencil,
  Palette,
  Layers,
  CheckCircle,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "A Beginner Pixel Art Workflow (From Blank Canvas to Finished Art)",
  description:
    "A simple, repeatable pixel art workflow for beginners—from setting up your canvas to knowing when your art is finished.",
};

export default function BeginnerPixelArtWorkflowPage() {
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
                A Beginner Pixel Art Workflow
              </span>{" "}
              <span className="text-pixel-neon-pink">
                (From Blank Canvas to Finished Art)
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              If pixel art feels chaotic, it’s not your skill—it’s your process.
              This simple workflow removes guesswork and helps you finish more
              pieces consistently.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-workflow-matters" className="hover:underline">
                  Why a Pixel Art Workflow Matters
                </a>
              </li>
              <li>
                <a href="#setup-canvas" className="hover:underline">
                  Step 1: Set Up Your Canvas
                </a>
              </li>
              <li>
                <a href="#draw-outline" className="hover:underline">
                  Step 2: Draw the Outline
                </a>
              </li>
              <li>
                <a href="#add-colors" className="hover:underline">
                  Step 3: Add Base Colors
                </a>
              </li>
              <li>
                <a href="#shade-polish" className="hover:underline">
                  Step 4: Shading and Polish
                </a>
              </li>
              <li>
                <a href="#know-finished" className="hover:underline">
                  Step 5: Know When It’s Finished
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-workflow-matters">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Play size={18} />
                Why a Pixel Art Workflow Matters
              </h2>

              <p className="text-muted-foreground">
                Most beginner pixel art problems come from jumping between
                steps randomly.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Shading before shapes are clear</li>
                <li>Adding colors too early</li>
                <li>Never knowing when to stop</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If this sounds familiar, start with{" "}
                <Link
                  href="/blog/pixel-art-for-beginners"
                  className="underline"
                >
                  Pixel Art for Beginners
                </Link>{" "}
                to build a strong foundation.
              </p>
            </section>

            {/* Section 2 */}
            <section id="setup-canvas">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Layers size={18} />
                Step 1: Set Up Your Canvas
              </h2>

              <p className="text-muted-foreground">
                A good workflow starts with constraints.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Choose a small canvas (16×16, 24×24, or 32×32)</li>
                <li>Limit your color palette early</li>
                <li>Work at high zoom (800–1200%)</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Need help choosing sizes? Read{" "}
                <Link
                  href="/blog/best-pixel-art-grid-sizes"
                  className="underline"
                >
                  Best Pixel Art Grid Sizes
                </Link>
                .
              </p>
            </section>

            {/* Section 3 */}
            <section id="draw-outline">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Pencil size={18} />
                Step 2: Draw the Outline
              </h2>

              <p className="text-muted-foreground">
                The outline defines everything that comes next.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Focus on silhouette first</li>
                <li>Avoid tiny jagged lines</li>
                <li>Fix proportions before details</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Clean outlines are explained in detail in{" "}
                <Link
                  href="/blog/pixel-art-line-art-how-to-draw-clean-outlines"
                  className="underline"
                >
                  Pixel Art Line Art: How to Draw Clean Outlines
                </Link>
                .
              </p>
            </section>

            {/* Section 4 */}
            <section id="add-colors">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Palette size={18} />
                Step 3: Add Base Colors
              </h2>

              <p className="text-muted-foreground">
                Flat colors come before shading.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Use one color per material</li>
                <li>Avoid gradients at this stage</li>
                <li>Check readability at 100% zoom</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Color mistakes are common—see{" "}
                <Link
                  href="/blog/choosing-pixel-art-colors"
                  className="underline"
                >
                  Choosing Pixel Art Colors
                </Link>
                .
              </p>
            </section>

            {/* Section 5 */}
            <section id="shade-polish">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Layers size={18} />
                Step 4: Shading and Polish
              </h2>

              <p className="text-muted-foreground">
                Shading should enhance form—not overpower it.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Add one darker shade per color</li>
                <li>Choose a single light direction</li>
                <li>Remove unnecessary pixels</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                For depth techniques, read{" "}
                <Link
                  href="/blog/pixel-art-shading-techniques"
                  className="underline"
                >
                  Pixel Art Shading Techniques
                </Link>
                .
              </p>
            </section>

            {/* Section 6 */}
            <section id="know-finished">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <CheckCircle size={18} />
                Step 5: Know When It’s Finished
              </h2>

              <p className="text-muted-foreground">
                Finishing is a skill—not a feeling.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>The silhouette reads clearly</li>
                <li>Extra details don’t improve clarity</li>
                <li>Zoomed-out version still works</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If you struggle here, read{" "}
                <Link
                  href="/blog/when-to-stop-adding-details-in-pixel-art"
                  className="underline"
                >
                  When to Stop Adding Details in Pixel Art
                </Link>
                .
              </p>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            A clear workflow beats raw talent every time.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
