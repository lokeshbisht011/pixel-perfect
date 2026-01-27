import Link from "next/link";
import {
  Pencil,
  Eye,
  Repeat,
  CheckCircle,
  Layers,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Pixel Art Line Art: How to Draw Clean Outlines",
  description:
    "Clean outlines are the foundation of good pixel art. Learn how to draw crisp, readable pixel art line art without jagged edges or messy pixels.",
};

export default function PixelArtLineArtPage() {
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
              <span className="text-pixel-neon-cyan">Pixel Art Line Art:</span>{" "}
              <span className="text-pixel-neon-pink">
                How to Draw Clean Outlines
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Messy outlines are the fastest way to ruin pixel art. This guide
              shows beginners how to draw clean, readable line art that makes
              everything else easier.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-line-art-matters" className="hover:underline">
                  Why Line Art Matters in Pixel Art
                </a>
              </li>
              <li>
                <a href="#common-outline-mistakes" className="hover:underline">
                  Common Outline Mistakes
                </a>
              </li>
              <li>
                <a href="#drawing-clean-lines" className="hover:underline">
                  How to Draw Clean Pixel Outlines
                </a>
              </li>
              <li>
                <a href="#curves-corners" className="hover:underline">
                  Handling Curves and Corners
                </a>
              </li>
              <li>
                <a href="#outline-checklist" className="hover:underline">
                  A Simple Line Art Checklist
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-line-art-matters">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Eye size={18} />
                Why Line Art Matters in Pixel Art
              </h2>

              <p className="text-muted-foreground">
                Pixel art is built from outlines. If the line art is unclear,
                no amount of color or shading will fix it.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Defines silhouette</li>
                <li>Improves readability at small sizes</li>
                <li>Makes shading easier later</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                This is one of the most overlooked rules in{" "}
                <Link
                  href="/blog/what-makes-good-pixel-art"
                  className="underline"
                >
                  What Makes Good Pixel Art?
                </Link>
                .
              </p>
            </section>

            {/* Section 2 */}
            <section id="common-outline-mistakes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Repeat size={18} />
                Common Pixel Art Outline Mistakes
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Single stray pixels sticking out</li>
                <li>Uneven thickness</li>
                <li>Jaggies (stair-step curves)</li>
                <li>Overly complex outlines</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                These mistakes usually happen when working on large canvases too
                early.
              </p>

              <p className="mt-4 text-muted-foreground">
                If this feels familiar, read{" "}
                <Link
                  href="/blog/why-your-pixel-art-looks-bad-and-how-to-fix-it"
                  className="underline"
                >
                  Why Your Pixel Art Looks Bad (And How to Fix It)
                </Link>
                .
              </p>
            </section>

            {/* Section 3 */}
            <section id="drawing-clean-lines">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Pencil size={18} />
                How to Draw Clean Pixel Art Outlines
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Start with the silhouette</li>
                <li>Use straight segments for curves</li>
                <li>Avoid diagonal zig-zags</li>
                <li>Erase aggressively</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Always zoom out and ask: “Does this read clearly?”
              </p>

              <p className="mt-4 text-muted-foreground">
                If you’re new, begin with advice from{" "}
                <Link
                  href="/blog/pixel-art-for-beginners"
                  className="underline"
                >
                  Pixel Art for Beginners
                </Link>
                .
              </p>
            </section>

            {/* Section 4 */}
            <section id="curves-corners">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Layers size={18} />
                Drawing Curves and Corners Cleanly
              </h2>

              <p className="text-muted-foreground">
                Good pixel curves are illusions created by spacing pixels
                carefully.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Use gradual step patterns</li>
                <li>Avoid sudden pixel jumps</li>
                <li>Keep spacing consistent</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Mastering curves makes characters and objects feel intentional
                instead of shaky.
              </p>
            </section>

            {/* Section 5 */}
            <section id="outline-checklist">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <CheckCircle size={18} />
                A Clean Pixel Art Line Art Checklist
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Readable silhouette at small size</li>
                <li>No stray single pixels</li>
                <li>Consistent line thickness</li>
                <li>Simple shapes first, details later</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Once your outline passes this checklist, coloring and shading
                become much easier.
              </p>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Clean outlines make everything else easier.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
