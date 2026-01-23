import Link from "next/link";
import {
  Clock,
  TrendingUp,
  Lightbulb,
  Calendar,
  Flame,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "How Long Does It Take to Get Good at Pixel Art?",
  description:
    "Wondering how long it takes to get good at pixel art? A realistic timeline, what affects progress, and how beginners can improve faster.",
};

export default function HowLongPixelArtPage() {
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
              <span className="text-pixel-neon-cyan">How Long Does It Take</span>{" "}
              <span className="text-pixel-neon-pink">to Get Good at Pixel Art?</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Short answer: it depends. Long answer: with the right practice,
              beginners can see real progress much faster than they expect.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#short-answer" className="hover:underline">
                  The Short Answer
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:underline">
                  A Realistic Pixel Art Timeline
                </a>
              </li>
              <li>
                <a href="#what-affects-progress" className="hover:underline">
                  What Affects How Fast You Improve
                </a>
              </li>
              <li>
                <a href="#practice-better" className="hover:underline">
                  How to Improve Faster
                </a>
              </li>
              <li>
                <a href="#common-mistakes" className="hover:underline">
                  Common Beginner Mistakes
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="short-answer">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Clock size={18} />
                The Short Answer
              </h2>
              <p className="text-muted-foreground">
                Most beginners start feeling “okay” at pixel art after a few
                weeks of consistent practice. Feeling genuinely confident
                usually takes a few months.
              </p>
            </section>

            {/* Section 2 */}
            <section id="timeline">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Calendar size={18} />
                A Realistic Pixel Art Timeline
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>
                  <strong>Week 1–2:</strong> Learning tools, grids, and basic shapes
                </li>
                <li>
                  <strong>Month 1:</strong> Simple objects and readable sprites
                </li>
                <li>
                  <strong>Month 2–3:</strong> Better colors, shading, and consistency
                </li>
                <li>
                  <strong>3–6 months:</strong> Confident style and cleaner work
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="what-affects-progress">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <TrendingUp size={18} />
                What Affects How Fast You Improve
              </h2>
              <p className="text-muted-foreground mb-4">
                Progress isn’t just about time—it’s about how you practice.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Consistency matters more than long sessions</li>
                <li>Studying good pixel art accelerates learning</li>
                <li>Limiting canvas size helps beginners</li>
                <li>Feedback speeds up improvement</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="practice-better">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Lightbulb size={18} />
                How to Improve Faster
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Draw something small every day</li>
                <li>Use limited color palettes</li>
                <li>Finish pieces instead of endlessly tweaking</li>
                <li>Compare your work weekly, not daily</li>
              </ul>

              <p className="mt-4">
                One of the easiest ways to stay consistent is using prompts.
              </p>

              <Link
                href="/create"
                className="inline-block mt-6 border-4 border-border px-6 py-3 bg-background hover:bg-muted transition font-mono font-bold text-pixel-neon-green"
              >
                Try Today’s Pixel Art Daily Prompt
              </Link>
            </section>

            {/* Section 5 */}
            <section id="common-mistakes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Flame size={18} />
                Common Beginner Mistakes
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Using huge canvases too early</li>
                <li>Adding too many colors</li>
                <li>Comparing yourself to experts</li>
                <li>Quitting before patterns emerge</li>
              </ul>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            New to pixel art? Start with{" "}
            <Link href="/blog/pixel-art-for-beginners" className="underline">
              Pixel Art for Beginners
            </Link>{" "}
            or get ideas from{" "}
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
