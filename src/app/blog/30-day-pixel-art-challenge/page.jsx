import Link from "next/link";
import {
  Calendar,
  Flame,
  Pencil,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Daily Pixel Art Challenge: 30 Days to Improve Your Skills",
  description:
    "A beginner-friendly 30-day pixel art challenge designed to help you improve consistently without burnout.",
};

export default function DailyPixelArtChallengePage() {
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
              <span className="text-pixel-neon-cyan">Daily Pixel Art Challenge:</span>{" "}
              <span className="text-pixel-neon-pink">
                30 Days to Improve Your Skills
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Want to get better at pixel art without feeling overwhelmed? This
              30-day daily pixel art challenge focuses on small wins,
              consistency, and momentum.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-daily-challenge" className="hover:underline">
                  Why a Daily Pixel Art Challenge Works
                </a>
              </li>
              <li>
                <a href="#how-30-days-works" className="hover:underline">
                  How the 30-Day Challenge Is Structured
                </a>
              </li>
              <li>
                <a href="#what-to-draw" className="hover:underline">
                  What to Draw Each Day
                </a>
              </li>
              <li>
                <a href="#avoid-burnout" className="hover:underline">
                  How to Avoid Burnout
                </a>
              </li>
              <li>
                <a href="#use-pixelartdaily" className="hover:underline">
                  Using PixelArtDaily for the Challenge
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-daily-challenge">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Flame size={18} />
                Why a Daily Pixel Art Challenge Works
              </h2>
              <p className="text-muted-foreground">
                The biggest blocker in learning pixel art isn’t talent—it’s
                inconsistency. A daily challenge removes the need to decide
                when and what to draw.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Builds a daily creative habit</li>
                <li>Reduces decision fatigue</li>
                <li>Creates visible progress over time</li>
                <li>Makes practice feel lighter and fun</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If you struggle with ideas, start with{" "}
                <Link
                  href="/blog/pixel-art-ideas-prompts"
                  className="underline"
                >
                  Pixel Art Ideas & Prompts
                </Link>{" "}
                to keep things simple.
              </p>
            </section>

            {/* Section 2 */}
            <section id="how-30-days-works">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Calendar size={18} />
                How the 30-Day Pixel Art Challenge Works
              </h2>

              <p className="text-muted-foreground mb-4">
                This challenge is intentionally lightweight.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Draw one small pixel piece per day</li>
                <li>Limit canvas size (16×16, 24×24, or 32×32)</li>
                <li>Spend 15–30 minutes max</li>
                <li>Finish every piece, even if imperfect</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                The goal is completion, not perfection.
              </p>
            </section>

            {/* Section 3 */}
            <section id="what-to-draw">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Pencil size={18} />
                What to Draw Each Day
              </h2>

              <p className="text-muted-foreground mb-4">
                You don’t need complex scenes. Simple subjects work best.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Everyday objects</li>
                <li>Food items</li>
                <li>Simple characters</li>
                <li>Icons and symbols</li>
                <li>Mini environments</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Reusing prompts is fine. Repetition builds skill.
              </p>
            </section>

            {/* Section 4 */}
            <section id="avoid-burnout">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <TrendingUp size={18} />
                How to Avoid Burnout During the Challenge
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Keep sessions short</li>
                <li>Lower expectations on busy days</li>
                <li>Don’t restart pieces endlessly</li>
                <li>Skip a day if needed—then continue</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                For a deeper breakdown, read{" "}
                <Link
                  href="/blog/how-to-practice-pixel-art-daily-without-burnout"
                  className="underline"
                >
                  How to Practice Pixel Art Daily Without Burnout
                </Link>
                .
              </p>
            </section>

            {/* Section 5 */}
            <section id="use-pixelartdaily">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Lightbulb size={18} />
                Use PixelArtDaily to Complete the Challenge
              </h2>

              <p className="text-muted-foreground mb-4">
                The easiest way to stick to this challenge is to remove friction
                entirely.
              </p>

              <p className="text-muted-foreground mb-4">
                <strong>pixelartdaily.com</strong> gives you:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>A new pixel art prompt every day</li>
                <li>An in-browser pixel editor</li>
                <li>No setup, no downloads</li>
                <li>A clear reason to show up daily</li>
              </ul>

              <Link
                href="/create"
                className="inline-block mt-6 border-4 border-border px-6 py-3 bg-background hover:bg-muted transition font-mono font-bold text-pixel-neon-green"
              >
                Start Today’s Pixel Art Challenge
              </Link>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Consistency beats talent. One pixel a day adds up.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
