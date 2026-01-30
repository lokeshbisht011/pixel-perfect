import Link from "next/link";
import {
  Maximize2,
  TrendingUp,
  Clock,
  CheckCircle,
  Lightbulb,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Why Limiting Your Pixel Art Canvas Makes You Better Faster",
  description:
    "Learn why small pixel art canvases accelerate skill growth, reduce overwhelm, and help beginners improve faster.",
};

export default function LimitCanvasPixelArtPage() {
  return (
    
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
                Why Limiting Your Pixel Art Canvas
              </span>{" "}
              <span className="text-pixel-neon-pink">
                Makes You Better Faster
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Bigger canvases don’t make better pixel artists. Smaller ones do.
              Here’s why limiting your canvas size accelerates learning.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-big-canvases-hurt" className="hover:underline">
                  Why Big Canvases Slow You Down
                </a>
              </li>
              <li>
                <a href="#decision-making" className="hover:underline">
                  Small Canvases Improve Decision-Making
                </a>
              </li>
              <li>
                <a href="#finish-more" className="hover:underline">
                  You Finish More Pixel Art
                </a>
              </li>
              <li>
                <a href="#recommended-sizes" className="hover:underline">
                  Recommended Canvas Sizes
                </a>
              </li>
              <li>
                <a href="#how-to-practice" className="hover:underline">
                  How to Practice With Small Canvases
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-big-canvases-hurt">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Maximize2 size={18} />
                Why Big Canvases Slow Beginners Down
              </h2>

              <p className="text-muted-foreground">
                Large canvases feel productive, but they hide mistakes and delay
                learning.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Too much space encourages over-detailing</li>
                <li>Errors become harder to spot</li>
                <li>Pieces take longer to finish</li>
                <li>Motivation drops midway</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                This often leads to unfinished work. If that sounds familiar,
                read{" "}
                <Link
                  href="/blog/how-to-finish-pixel-art-instead-of-abandoning-it"
                  className="underline"
                >
                  How to Finish Pixel Art Instead of Abandoning It
                </Link>
                .
              </p>
            </section>

            {/* Section 2 */}
            <section id="decision-making">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <TrendingUp size={18} />
                Small Canvases Force Better Decisions
              </h2>

              <p className="text-muted-foreground">
                With fewer pixels, every decision matters.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Clearer silhouettes</li>
                <li>More intentional color choices</li>
                <li>Stronger shapes</li>
                <li>Less unnecessary noise</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                These are the same fundamentals explained in{" "}
                <Link
                  href="/blog/what-makes-good-pixel-art-7-rules-beginners-miss"
                  className="underline"
                >
                  What Makes Good Pixel Art? 7 Rules Beginners Miss
                </Link>
                .
              </p>
            </section>

            {/* Section 3 */}
            <section id="finish-more">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <CheckCircle size={18} />
                You Finish More Pixel Art (And Learn Faster)
              </h2>

              <p className="text-muted-foreground">
                Finishing artwork is where learning locks in.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>More completed pieces per week</li>
                <li>Faster feedback loops</li>
                <li>Clearer sense of progress</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If you’re unsure whether you’re improving, see{" "}
                <Link
                  href="/blog/how-to-know-if-your-pixel-art-is-actually-improving"
                  className="underline"
                >
                  How to Know If Your Pixel Art Is Actually Improving
                </Link>
                .
              </p>
            </section>

            {/* Section 4 */}
            <section id="recommended-sizes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Clock size={18} />
                Recommended Pixel Art Canvas Sizes
              </h2>

              <p className="text-muted-foreground mb-4">
                These sizes are ideal for learning:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>16×16 – icons and symbols</li>
                <li>24×24 – small objects</li>
                <li>32×32 – characters and creatures</li>
                <li>48×48 – slightly detailed sprites</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                For a deeper breakdown, read{" "}
                <Link
                  href="/blog/best-pixel-art-grid-sizes"
                  className="underline"
                >
                  Best Pixel Art Grid Sizes
                </Link>
                .
              </p>
            </section>

            {/* Section 5 */}
            <section id="how-to-practice">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Lightbulb size={18} />
                How to Practice Using Small Canvases
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Limit yourself to one canvas size per week</li>
                <li>Set a 20–30 minute timer</li>
                <li>Finish even imperfect pieces</li>
                <li>Reflect weekly, not mid-draw</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Daily prompts make this effortless.
              </p>

              <Link
                href="/create"
                className="inline-block mt-6 border-4 border-border px-6 py-3 bg-background hover:bg-muted transition font-mono font-bold text-pixel-neon-green"
              >
                Practice on a Small Canvas Today
              </Link>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Fewer pixels. Better decisions. Faster improvement.
          </footer>
        </article>
      </main>
    
  );
}
