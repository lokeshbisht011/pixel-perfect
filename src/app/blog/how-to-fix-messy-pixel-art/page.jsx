import Link from "next/link";
import {
  ZoomOut,
  Eye,
  Layers,
  CheckCircle,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { FaBroom } from "react-icons/fa";

export const metadata = {
  title: "How to Fix Messy Pixel Art (A Step-by-Step Cleanup Guide)",
  description:
    "Messy pixel art is fixable. Learn a clear step-by-step process to clean up outlines, shapes, colors, and readability—without starting over.",
};

export default function FixMessyPixelArtPage() {
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
                How to Fix Messy Pixel Art
              </span>{" "}
              <span className="text-pixel-neon-pink">
                (A Step-by-Step Cleanup Guide)
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              If your pixel art feels noisy, unreadable, or “off,” don’t start
              over. Use this cleanup process to turn messy pixels into clean,
              intentional art.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-pixel-art-gets-messy" className="hover:underline">
                  Why Pixel Art Gets Messy
                </a>
              </li>
              <li>
                <a href="#step-1-zoom-out" className="hover:underline">
                  Step 1: Zoom Out and Judge Readability
                </a>
              </li>
              <li>
                <a href="#step-2-clean-outlines" className="hover:underline">
                  Step 2: Clean the Outlines
                </a>
              </li>
              <li>
                <a href="#step-3-fix-shapes" className="hover:underline">
                  Step 3: Fix the Shapes
                </a>
              </li>
              <li>
                <a href="#step-4-simplify-colors" className="hover:underline">
                  Step 4: Simplify Colors and Shading
                </a>
              </li>
              <li>
                <a href="#final-checklist" className="hover:underline">
                  Final Cleanup Checklist
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-pixel-art-gets-messy">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Eye size={18} />
                Why Pixel Art Gets Messy
              </h2>

              <p className="text-muted-foreground">
                Messy pixel art usually isn’t about lack of skill—it’s about
                working without structure.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Too many details too early</li>
                <li>No clear silhouette</li>
                <li>Random pixel placement</li>
                <li>Over-shading</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                These problems are discussed in more depth in{" "}
                <Link
                  href="/blog/why-your-pixel-art-looks-bad-and-how-to-fix-it"
                  className="underline"
                >
                  Why Your Pixel Art Looks Bad (And How to Fix It)
                </Link>
                .
              </p>
            </section>

            {/* Step 1 */}
            <section id="step-1-zoom-out">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <ZoomOut size={18} />
                Step 1: Zoom Out and Judge Readability
              </h2>

              <p className="text-muted-foreground">
                If your art only looks good zoomed in, it doesn’t actually look
                good.
              </p>

              <p className="mt-4 text-muted-foreground">
                Shrink the canvas and ask:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                <li>Can I recognize the subject?</li>
                <li>Is the silhouette clear?</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                This idea is one of the core rules explained in{" "}
                <Link
                  href="/blog/what-makes-good-pixel-art"
                  className="underline"
                >
                  What Makes Good Pixel Art?
                </Link>
                .
              </p>
            </section>

            {/* Step 2 */}
            <section id="step-2-clean-outlines">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <FaBroom size={18} />
                Step 2: Clean the Outlines First
              </h2>

              <p className="text-muted-foreground">
                Outlines come before color, shading, or detail.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Remove stray pixels</li>
                <li>Smooth jagged curves</li>
                <li>Keep line thickness consistent</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If outlines are a struggle, read{" "}
                <Link
                  href="/blog/pixel-art-line-art-how-to-draw-clean-outlines"
                  className="underline"
                >
                  Pixel Art Line Art: How to Draw Clean Outlines
                </Link>
                .
              </p>
            </section>

            {/* Step 3 */}
            <section id="step-3-fix-shapes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Layers size={18} />
                Step 3: Fix the Underlying Shapes
              </h2>

              <p className="text-muted-foreground">
                Messy pixel art often hides bad shapes under detail.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Simplify forms</li>
                <li>Remove unnecessary bumps</li>
                <li>Focus on big shapes first</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Beginners should review{" "}
                <Link
                  href="/blog/pixel-art-for-beginners"
                  className="underline"
                >
                  Pixel Art for Beginners
                </Link>
                to build better shape habits.
              </p>
            </section>

            {/* Step 4 */}
            <section id="step-4-simplify-colors">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Eye size={18} />
                Step 4: Simplify Colors and Shading
              </h2>

              <p className="text-muted-foreground">
                Too many colors create visual noise.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Reduce your palette</li>
                <li>Remove unnecessary highlights</li>
                <li>Use shading to support form—not replace it</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If you’re unsure whether your work is improving, read{" "}
                <Link
                  href="/blog/how-to-know-if-your-pixel-art-is-actually-improving"
                  className="underline"
                >
                  How to Know If Your Pixel Art Is Actually Improving
                </Link>
                .
              </p>
            </section>

            {/* Checklist */}
            <section id="final-checklist">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <CheckCircle size={18} />
                Final Pixel Art Cleanup Checklist
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Clear silhouette at small sizes</li>
                <li>Clean, consistent outlines</li>
                <li>Simple, readable shapes</li>
                <li>Limited, intentional color use</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If your art passes this checklist, it’s no longer messy—it’s
                intentional.
              </p>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Cleanup is a skill. Practice it daily.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
