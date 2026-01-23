import Link from "next/link";
import {
  Grid,
  PenTool,
  Layers,
  Monitor,
  Lightbulb,
  Flame,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Pixel Art vs Digital Art: What’s the Difference?",
  description:
    "Pixel art vs digital art explained simply. Learn the key differences in tools, style, workflow, and when to choose each art form.",
};

export default function PixelArtVsDigitalArtPage() {
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
              <span className="text-pixel-neon-pink">vs Digital Art</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Both are digital art styles—but they follow very different rules.
              This guide breaks down the real differences so you know which one
              fits your goals best.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#what-is-pixel-art" className="hover:underline">
                  What Is Pixel Art?
                </a>
              </li>
              <li>
                <a href="#what-is-digital-art" className="hover:underline">
                  What Is Digital Art?
                </a>
              </li>
              <li>
                <a href="#key-differences" className="hover:underline">
                  Key Differences at a Glance
                </a>
              </li>
              <li>
                <a href="#which-to-choose" className="hover:underline">
                  Which One Should You Learn?
                </a>
              </li>
              <li>
                <a href="#common-myths" className="hover:underline">
                  Common Myths
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="what-is-pixel-art">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Grid size={18} />
                What Is Pixel Art?
              </h2>
              <p className="text-muted-foreground mb-3">
                Pixel art is a digital art form where every pixel is placed
                intentionally. Artists work on small canvases and embrace the
                grid instead of hiding it.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Low resolution, visible pixels</li>
                <li>Manual pixel placement</li>
                <li>Limited color palettes</li>
                <li>Common in games and retro-style art</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="what-is-digital-art">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <PenTool size={18} />
                What Is Digital Art?
              </h2>
              <p className="text-muted-foreground mb-3">
                Digital art is a broad category that includes illustration,
                painting, concept art, and more—created using digital tools and
                brushes.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>High or infinite resolution</li>
                <li>Brush-based workflows</li>
                <li>Advanced blending and effects</li>
                <li>Used in illustration, films, and design</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="key-differences">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Layers size={18} />
                Key Differences at a Glance
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Pixel art uses grids; digital art hides them</li>
                <li>Pixel art focuses on clarity; digital art on detail</li>
                <li>Pixel art limits colors; digital art allows millions</li>
                <li>Pixel art is about restraint; digital art about freedom</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="which-to-choose">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Lightbulb size={18} />
                Which One Should You Learn?
              </h2>
              <p className="text-muted-foreground mb-4">
                The right choice depends on your goals, not your skill level.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Choose pixel art for games, icons, and retro aesthetics</li>
                <li>Choose digital art for illustration and concept art</li>
                <li>Pixel art builds discipline and fundamentals</li>
                <li>Digital art allows expressive, painterly styles</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="common-myths">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Flame size={18} />
                Common Myths
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>“Pixel art is easier” — it’s just different</li>
                <li>“Pixel art is outdated” — it’s widely used today</li>
                <li>“You must choose one forever” — many artists do both</li>
              </ul>

              <p className="mt-4">
                Want to try pixel art hands-on instead of just reading?
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
            Just starting out? Read{" "}
            <Link href="/blog/pixel-art-for-beginners" className="underline">
              Pixel Art for Beginners
            </Link>{" "}
            or explore{" "}
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
