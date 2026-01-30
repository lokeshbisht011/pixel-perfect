import Link from "next/link";
import {
  Eye,
  Hand,
  ZoomOut,
  Layers,
  CheckCircle,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "When to Stop Adding Details in Pixel Art",
  description:
    "Over-detailing is the fastest way to ruin good pixel art. Learn how to recognize the stop point and keep your art clean, readable, and intentional.",
};

export default function WhenToStopAddingDetailsPage() {
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
                When to Stop Adding Details
              </span>{" "}
              <span className="text-pixel-neon-pink">in Pixel Art</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              More pixels don't mean better art. Learn how to spot the exact
              moment when adding details stops helping and starts hurting.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-overdetail-happens" className="hover:underline">
                  Why Over-Detailing Happens
                </a>
              </li>
              <li>
                <a href="#zoom-test" className="hover:underline">
                  The Zoom-Out Test
                </a>
              </li>
              <li>
                <a href="#detail-vs-noise" className="hover:underline">
                  Detail vs Visual Noise
                </a>
              </li>
              <li>
                <a href="#stop-rules" className="hover:underline">
                  5 Rules for Knowing When to Stop
                </a>
              </li>
              <li>
                <a href="#practice-stopping" className="hover:underline">
                  Practice Stopping on Purpose
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-overdetail-happens">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Layers size={18} />
                Why Over-Detailing Happens
              </h2>

              <p className="text-muted-foreground">
                Over-detailing usually comes from good intentions.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Fear of art looking “unfinished”</li>
                <li>Working zoomed in for too long</li>
                <li>Confusing realism with quality</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                This mindset issue is common among beginners and is explained in{" "}
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
            <section id="zoom-test">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <ZoomOut size={18} />
                The Zoom-Out Test (Your Best Friend)
              </h2>

              <p className="text-muted-foreground">
                If a detail disappears when zoomed out, it probably doesn’t
                belong.
              </p>

              <p className="mt-4 text-muted-foreground">
                Try this simple test:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                <li>Zoom out to 100%</li>
                <li>Look away for 2 seconds</li>
                <li>Look back—what do you notice first?</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                This technique is also used when cleaning messy art in{" "}
                <Link
                  href="/blog/how-to-fix-messy-pixel-art"
                  className="underline"
                >
                  How to Fix Messy Pixel Art
                </Link>
                .
              </p>
            </section>

            {/* Section 3 */}
            <section id="detail-vs-noise">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Eye size={18} />
                Detail vs Visual Noise
              </h2>

              <p className="text-muted-foreground">
                Good detail supports the main shape. Noise competes with it.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Details should guide the eye</li>
                <li>Noise scatters attention</li>
                <li>Every pixel should have a reason</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If your art feels cluttered, revisit{" "}
                <Link
                  href="/blog/pixel-art-line-art-how-to-draw-clean-outlines"
                  className="underline"
                >
                  Pixel Art Line Art: How to Draw Clean Outlines
                </Link>
                to simplify structure first.
              </p>
            </section>

            {/* Section 4 */}
            <section id="stop-rules">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Hand size={18} />
                5 Rules for Knowing When to Stop
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The silhouette reads clearly</li>
                <li>Major forms are already defined</li>
                <li>Details don’t change readability</li>
                <li>Zooming out still looks good</li>
                <li>Removing pixels improves clarity</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                These rules pair well with the beginner principles in{" "}
                <Link
                  href="/blog/pixel-art-for-beginners"
                  className="underline"
                >
                  Pixel Art for Beginners
                </Link>
                .
              </p>
            </section>

            {/* Section 5 */}
            <section id="practice-stopping">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <CheckCircle size={18} />
                Practice Stopping on Purpose
              </h2>

              <p className="text-muted-foreground">
                Stopping is a skill. You can train it.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Set a hard time limit</li>
                <li>Limit yourself to fewer colors</li>
                <li>Submit pieces earlier than “perfect”</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Daily prompts make this easier. Try drawing with constraints
                using{" "}
                <Link href="/create" className="underline">
                  PixelArtDaily
                </Link>
                .
              </p>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Knowing when to stop is what separates good pixel art from great.
          </footer>
        </article>
      </main>
    
  );
}
