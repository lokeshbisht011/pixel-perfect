import Link from "next/link";
import {
  Calendar,
  Timer,
  Heart,
  Layers,
  Coffee,
  Flame,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "How to Practice Pixel Art Daily (Without Burnout)",
  description:
    "Learn how to build a daily pixel art practice without burnout. Simple routines, small canvases, and sustainable habits for long-term improvement.",
};

export default function PracticePixelArtDailyPage() {
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
              <span className="text-pixel-neon-cyan">Practice Pixel Art</span>{" "}
              <span className="text-pixel-neon-pink">Daily</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Daily practice is powerful — but only if it’s sustainable. Learn
              how to improve your pixel art every day without burning out.
            </p>
          </header>

          {/* Table of Contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#small-daily-goal" className="hover:underline">
                  Set a Small Daily Goal
                </a>
              </li>
              <li>
                <a href="#time-boxing" className="hover:underline">
                  Time-Box Your Practice
                </a>
              </li>
              <li>
                <a href="#low-pressure-prompts" className="hover:underline">
                  Use Low-Pressure Prompts
                </a>
              </li>
              <li>
                <a href="#repeat-canvases" className="hover:underline">
                  Repeat Canvas Sizes
                </a>
              </li>
              <li>
                <a href="#rest-days" className="hover:underline">
                  Take Guilt-Free Rest Days
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="small-daily-goal">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Calendar size={18} />
                Set a Small Daily Goal
              </h2>
              <p className="text-muted-foreground mb-3">
                Burnout usually starts when your expectations are too high.
                Drawing “something amazing” every day is exhausting.
              </p>
              <p>
                <strong>Fix:</strong> Set a goal so small it feels almost too
                easy — one icon, one object, or a single pose.
              </p>
            </section>

            {/* Section 2 */}
            <section id="time-boxing">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Timer size={18} />
                Time-Box Your Practice
              </h2>
              <p className="text-muted-foreground mb-3">
                Long, open-ended sessions drain energy and motivation.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-3">
                <li>10–15 minutes is enough</li>
                <li>Stop when the timer ends</li>
                <li>Leave while you still enjoy it</li>
              </ul>
              <p>
                <strong>Rule:</strong> Consistency beats intensity.
              </p>
            </section>

            {/* Section 3 */}
            <section id="low-pressure-prompts">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Heart size={18} />
                Use Low-Pressure Prompts
              </h2>
              <p className="text-muted-foreground mb-3">
                Staring at a blank canvas every day is mentally tiring.
              </p>
              <p className="text-muted-foreground mb-3">
                Prompts remove decision fatigue and keep practice playful.
              </p>
              <p>
                <strong>Tip:</strong> Use simple daily prompts instead of complex
                ideas.
              </p>
            </section>

            {/* Section 4 */}
            <section id="repeat-canvases">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Layers size={18} />
                Repeat the Same Canvas Sizes
              </h2>
              <p className="text-muted-foreground mb-3">
                Constantly changing canvas sizes slows learning.
              </p>
              <p>
                <strong>Fix:</strong> Stick to familiar grids like{" "}
                <span className="text-pixel-neon-green">16×16</span> or{" "}
                <span className="text-pixel-neon-green">32×32</span> so your brain
                focuses on design, not setup.
              </p>
            </section>

            {/* Section 5 */}
            <section id="rest-days">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Coffee size={18} />
                Take Guilt-Free Rest Days
              </h2>
              <p className="text-muted-foreground mb-4">
                Missing a day doesn’t mean you failed. Burnout comes from
                guilt-driven consistency.
              </p>
              <p>
                <strong>Mindset:</strong> Rest is part of the practice.
              </p>

              <Link
                href="/create"
                className="inline-block mt-6 border-4 border-border px-6 py-3 bg-background hover:bg-muted transition font-mono font-bold text-pixel-neon-green"
              >
                Start Today’s Pixel Art Prompt
              </Link>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Want faster progress? Read{" "}
            <Link href="/blog/common-pixel-art-mistakes" className="underline">
              Common Pixel Art Mistakes
            </Link>{" "}
            or join the{" "}
            <Link href="/" className="underline">
              Pixel Art Daily Challenge
            </Link>
            .
          </footer>
        </article>
      </main>
    </Layout>
  );
}
