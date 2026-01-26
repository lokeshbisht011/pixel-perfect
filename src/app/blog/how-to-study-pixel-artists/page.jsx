import Link from "next/link";
import {
  Eye,
  Search,
  Layers,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "How to Read and Study Other Pixel Artists’ Work",
  description:
    "Learning pixel art isn’t just about drawing more. Learn how to study other pixel artists’ work and improve faster.",
};

export default function StudyPixelArtistsPage() {
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
              <span className="text-pixel-neon-cyan">How to Read & Study</span>{" "}
              <span className="text-pixel-neon-pink">
                Other Pixel Artists’ Work
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Copying styles won’t make you better—but studying decisions will.
              Here’s how to learn from other pixel artists the right way.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-study" className="hover:underline">
                  Why Studying Pixel Art Works
                </a>
              </li>
              <li>
                <a href="#what-to-look-for" className="hover:underline">
                  What to Look For First
                </a>
              </li>
              <li>
                <a href="#breakdown-process" className="hover:underline">
                  How to Break Down a Pixel Artwork
                </a>
              </li>
              <li>
                <a href="#apply-learning" className="hover:underline">
                  How to Apply What You Learn
                </a>
              </li>
              <li>
                <a href="#mistakes" className="hover:underline">
                  Common Studying Mistakes
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-study">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Eye size={18} />
                Why Studying Pixel Art Works
              </h2>
              <p className="text-muted-foreground">
                Improvement doesn’t come only from drawing more—it comes from
                drawing smarter.
              </p>

              <p className="mt-3 text-muted-foreground">
                Studying strong pixel art trains your eye to recognize good
                shapes, clean color usage, and intentional lighting decisions.
              </p>
            </section>

            {/* Section 2 */}
            <section id="what-to-look-for">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Search size={18} />
                What to Look For First
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Overall silhouette and readability</li>
                <li>Canvas size and level of detail</li>
                <li>Color count and contrast</li>
                <li>Where details are *not* added</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Don’t jump straight into shading—structure comes first.
              </p>
            </section>

            {/* Section 3 */}
            <section id="breakdown-process">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Layers size={18} />
                How to Break Down a Pixel Artwork
              </h2>

              <p className="text-muted-foreground mb-4">
                Ask yourself these questions while studying:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Why did the artist choose this palette?</li>
                <li>Where is the light source?</li>
                <li>Which edges are sharp vs soft?</li>
                <li>What details were simplified or omitted?</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                For deeper lighting analysis, see{" "}
                <Link
                  href="/blog/pixel-art-shading-techniques"
                  className="underline"
                >
                  Pixel Art Shading Techniques
                </Link>
                .
              </p>
            </section>

            {/* Section 4 */}
            <section id="apply-learning">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Lightbulb size={18} />
                How to Apply What You Learn
              </h2>

              <p className="text-muted-foreground mb-4">
                Studying without applying is passive consumption.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Recreate a piece at a smaller resolution</li>
                <li>Use the same palette on a different subject</li>
                <li>Apply one technique per study session</li>
                <li>Compare before-and-after results weekly</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="mistakes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <AlertTriangle size={18} />
                Common Studying Mistakes
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Blindly copying without understanding</li>
                <li>Studying only finished art, not process</li>
                <li>Comparing skill levels instead of decisions</li>
                <li>Ignoring fundamentals</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Many of these show up again in{" "}
                <Link
                  href="/blog/common-pixel-art-mistakes"
                  className="underline"
                >
                  Common Pixel Art Mistakes
                </Link>
                .
              </p>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Studying pixel art trains your eye. Practicing trains your hand.
            You need both.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
