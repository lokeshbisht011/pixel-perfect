import Link from "next/link";
import {
  Sparkles,
  Pencil,
  Grid3X3,
  Lightbulb,
  Flame,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "How to Start Pixel Art With No Drawing Experience",
  description:
    "Never drawn before? Learn how to start pixel art from scratch with simple steps, beginner tips, and zero drawing background.",
};

export default function StartPixelArtNoExperiencePage() {
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
              <span className="text-pixel-neon-cyan">How to Start Pixel Art</span>{" "}
              <span className="text-pixel-neon-pink">With No Drawing Experience</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Think you need to know how to draw to make pixel art? You don’t.
              Pixel art is about pixels, decisions, and clarity—not sketching
              skills.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#no-drawing-needed" className="hover:underline">
                  Do You Need Drawing Skills?
                </a>
              </li>
              <li>
                <a href="#why-pixel-art" className="hover:underline">
                  Why Pixel Art Is Beginner-Friendly
                </a>
              </li>
              <li>
                <a href="#first-steps" className="hover:underline">
                  Your First Steps
                </a>
              </li>
              <li>
                <a href="#what-to-practice" className="hover:underline">
                  What to Practice First
                </a>
              </li>
              <li>
                <a href="#mistakes" className="hover:underline">
                  Mistakes to Avoid Early
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="no-drawing-needed">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Pencil size={18} />
                Do You Need Drawing Skills?
              </h2>
              <p className="text-muted-foreground">
                No. Pixel art doesn’t rely on freehand drawing. Instead of lines
                and strokes, you place individual pixels intentionally.
                Beginners often do better in pixel art than traditional drawing.
              </p>
            </section>

            {/* Section 2 */}
            <section id="why-pixel-art">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Sparkles size={18} />
                Why Pixel Art Is Beginner-Friendly
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Small canvases reduce overwhelm</li>
                <li>Mistakes are easy to fix</li>
                <li>You focus on shapes, not realism</li>
                <li>Progress is visible quickly</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                This is why many beginners start with{" "}
                <Link
                  href="/blog/pixel-art-for-beginners"
                  className="underline"
                >
                  Pixel Art for Beginners
                </Link>{" "}
                before moving into more complex styles.
              </p>
            </section>

            {/* Section 3 */}
            <section id="first-steps">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Grid3X3 size={18} />
                Your First Steps
              </h2>
              <p className="text-muted-foreground mb-4">
                Keep your setup simple. Complexity kills motivation early.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Use a small grid (8×8 or 16×16)</li>
                <li>Limit yourself to 4–6 colors</li>
                <li>Draw one object, not a scene</li>
                <li>Finish the piece—even if it feels imperfect</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="what-to-practice">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Lightbulb size={18} />
                What to Practice First
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Simple objects (fruit, tools, icons)</li>
                <li>Clear silhouettes</li>
                <li>Light and shadow with just 2 tones</li>
                <li>Consistency across pixels</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="mistakes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Flame size={18} />
                Mistakes to Avoid Early
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Starting with huge canvases</li>
                <li>Using too many colors</li>
                <li>Chasing realism too early</li>
                <li>Comparing yourself to experts</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If you want a deeper breakdown, read{" "}
                <Link
                  href="/blog/common-pixel-art-mistakes-and-how-to-fix-them"
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
            Ready to start? Begin with{" "}
            <Link href="/blog/pixel-art-for-beginners" className="underline">
              Pixel Art for Beginners
            </Link>{" "}
            and practice daily with small, fun prompts.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
