import Link from "next/link";
import {
  CheckCircle,
  Flame,
  Clock,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "How to Finish Pixel Art Instead of Abandoning It",
  description:
    "Struggling to finish pixel art? Learn why artists abandon pieces and how to build a habit of finishing pixel art consistently.",
};

export default function FinishPixelArtPage() {
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
                How to Finish Pixel Art
              </span>{" "}
              <span className="text-pixel-neon-pink">
                Instead of Abandoning It
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Starting pixel art is easy. Finishing it is the hard part.
              Here’s how to stop abandoning pieces and actually complete your work.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-we-abandon" className="hover:underline">
                  Why Pixel Art Gets Abandoned
                </a>
              </li>
              <li>
                <a href="#define-finished" className="hover:underline">
                  Redefine What “Finished” Means
                </a>
              </li>
              <li>
                <a href="#small-canvases" className="hover:underline">
                  Use Smaller Canvases
                </a>
              </li>
              <li>
                <a href="#time-box" className="hover:underline">
                  Time-Box Your Pixel Art
                </a>
              </li>
              <li>
                <a href="#build-habit" className="hover:underline">
                  Build a Finishing Habit
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-we-abandon">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Flame size={18} />
                Why Pixel Art Gets Abandoned
              </h2>

              <p className="text-muted-foreground">
                Most unfinished pixel art isn’t abandoned because it’s bad —
                it’s abandoned because expectations creep in.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>The piece doesn’t match the image in your head</li>
                <li>You start comparing it to expert-level art</li>
                <li>You don’t know what the next step is</li>
                <li>You keep tweaking instead of progressing</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If your art feels “off,” you’re not alone. Read{" "}
                <Link
                  href="/blog/why-your-pixel-art-looks-bad-and-how-to-fix-it"
                  className="underline"
                >
                  Why Your Pixel Art Looks Bad (And How to Fix It)
                </Link>
                .
              </p>
            </section>

            {/* Section 2 */}
            <section id="define-finished">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <CheckCircle size={18} />
                Redefine What “Finished” Means
              </h2>

              <p className="text-muted-foreground">
                Finished does not mean perfect.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>The silhouette is clear</li>
                <li>Colors are readable at 100% zoom</li>
                <li>No obvious broken pixels</li>
                <li>You learned something from it</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Knowing when to stop is a skill. This helps:{" "}
                <Link
                  href="/blog/when-to-stop-adding-details-in-pixel-art"
                  className="underline"
                >
                  When to Stop Adding Details in Pixel Art
                </Link>
                .
              </p>
            </section>

            {/* Section 3 */}
            <section id="small-canvases">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <TrendingUp size={18} />
                Use Smaller Canvases to Finish More
              </h2>

              <p className="text-muted-foreground">
                Big canvases invite endless tweaking. Small canvases force decisions.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>16×16 for icons and symbols</li>
                <li>24×24 for simple objects</li>
                <li>32×32 for characters</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If you’re unsure what to pick, start with{" "}
                <Link
                  href="/blog/best-pixel-art-grid-sizes"
                  className="underline"
                >
                  Best Pixel Art Grid Sizes
                </Link>
                .
              </p>
            </section>

            {/* Section 4 */}
            <section id="time-box">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Clock size={18} />
                Time-Box Your Pixel Art Sessions
              </h2>

              <p className="text-muted-foreground">
                Finishing becomes easier when there’s a clear end.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Set a 15–30 minute timer</li>
                <li>Stop when the timer ends</li>
                <li>Export and move on</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                This approach also helps avoid burnout. See{" "}
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
            <section id="build-habit">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Lightbulb size={18} />
                Build a Habit of Finishing, Not Perfecting
              </h2>

              <p className="text-muted-foreground">
                Finishing is a muscle — the more you use it, the stronger it gets.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Finish one small piece per day</li>
                <li>Track completed work, not quality</li>
                <li>Reflect weekly instead of mid-piece</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                The easiest way to do this is with daily prompts.
              </p>

              <Link
                href="/create"
                className="inline-block mt-6 border-4 border-border px-6 py-3 bg-background hover:bg-muted transition font-mono font-bold text-pixel-neon-green"
              >
                Finish Today’s Pixel Art Prompt
              </Link>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Finished imperfect art beats perfect unfinished art — every time.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
