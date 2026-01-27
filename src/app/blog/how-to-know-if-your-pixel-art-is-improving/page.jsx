import Link from "next/link";
import {
  Eye,
  TrendingUp,
  Repeat,
  CheckCircle,
  Clock,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "How to Know If Your Pixel Art Is Actually Improving",
  description:
    "Not sure if you're getting better at pixel art? Here are clear, practical signs that your skills are improving—even if it doesn’t feel like it yet.",
};

export default function PixelArtImprovingPage() {
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
                How to Know If Your Pixel Art
              </span>{" "}
              <span className="text-pixel-neon-pink">
                Is Actually Improving
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Feeling stuck is normal. Improvement in pixel art is subtle,
              uneven, and often invisible—until you know what to look for.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-it-feels-slow" className="hover:underline">
                  Why Improvement Feels Invisible
                </a>
              </li>
              <li>
                <a href="#clarity" className="hover:underline">
                  Sign 1: Your Art Reads More Clearly
                </a>
              </li>
              <li>
                <a href="#faster-decisions" className="hover:underline">
                  Sign 2: You Make Decisions Faster
                </a>
              </li>
              <li>
                <a href="#less-fixing" className="hover:underline">
                  Sign 3: You Fix Fewer Mistakes
                </a>
              </li>
              <li>
                <a href="#consistency" className="hover:underline">
                  Sign 4: Your Style Feels More Consistent
                </a>
              </li>
              <li>
                <a href="#track-progress" className="hover:underline">
                  How to Track Progress Properly
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-it-feels-slow">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Eye size={18} />
                Why Improvement Feels Invisible
              </h2>

              <p className="text-muted-foreground">
                Pixel art improvement doesn’t feel linear. One day things click.
                The next day everything looks worse.
              </p>

              <p className="mt-4 text-muted-foreground">
                This usually means your eye is improving faster than your hand.
                That’s a good thing.
              </p>

              <p className="mt-4 text-muted-foreground">
                Many artists quit at this stage, thinking they’re stuck. In
                reality, they’re leveling up.
              </p>
            </section>

            {/* Section 2 */}
            <section id="clarity">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <CheckCircle size={18} />
                Sign 1: Your Pixel Art Is Easier to Read
              </h2>

              <p className="text-muted-foreground">
                The biggest improvement signal is clarity.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Shapes read clearly at small sizes</li>
                <li>Silhouettes feel intentional</li>
                <li>Less visual noise</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If this resonates, you’re applying rules from{" "}
                <Link
                  href="/blog/what-makes-good-pixel-art"
                  className="underline"
                >
                  What Makes Good Pixel Art?
                </Link>
                .
              </p>
            </section>

            {/* Section 3 */}
            <section id="faster-decisions">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <TrendingUp size={18} />
                Sign 2: You Make Better Decisions Faster
              </h2>

              <p className="text-muted-foreground">
                You don’t hesitate as much anymore.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>Canvas size feels obvious</li>
                <li>You instinctively limit colors</li>
                <li>Shading choices feel clearer</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                This comes from repetition—not talent.
              </p>
            </section>

            {/* Section 4 */}
            <section id="less-fixing">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Repeat size={18} />
                Sign 3: You Fix Fewer Beginner Mistakes
              </h2>

              <p className="text-muted-foreground">
                You still make mistakes—but you catch them earlier.
              </p>

              <p className="mt-4 text-muted-foreground">
                Things like:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Over-shading</li>
                <li>Messy outlines</li>
                <li>Too many colors</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If these issues sound familiar, revisit{" "}
                <Link
                  href="/blog/common-pixel-art-mistakes-and-how-to-fix-them"
                  className="underline"
                >
                  Common Pixel Art Mistakes
                </Link>
                .
              </p>
            </section>

            {/* Section 5 */}
            <section id="consistency">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Clock size={18} />
                Sign 4: Your Art Feels More Consistent
              </h2>

              <p className="text-muted-foreground">
                Your last five pieces feel like they came from the same artist.
              </p>

              <p className="mt-4 text-muted-foreground">
                Consistency means your workflow is stabilizing—even if the art
                isn’t perfect yet.
              </p>

              <p className="mt-4 text-muted-foreground">
                This usually appears after steady practice over time.
              </p>
            </section>

            {/* Section 6 */}
            <section id="track-progress">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <CheckCircle size={18} />
                How to Track Pixel Art Progress Properly
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Save every finished piece</li>
                <li>Compare weekly, not daily</li>
                <li>Redraw the same subject after a month</li>
                <li>Focus on clarity, not polish</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If you’re unsure how long improvement takes, read{" "}
                <Link
                  href="/blog/how-long-does-it-take-to-get-good-at-pixel-art"
                  className="underline"
                >
                  How Long Does It Take to Get Good at Pixel Art?
                </Link>
                .
              </p>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Improvement is quiet. Keep drawing.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
