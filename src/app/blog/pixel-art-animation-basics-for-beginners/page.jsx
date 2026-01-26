import Link from "next/link";
import {
  Play,
  Layers,
  Clock,
  Lightbulb,
  Flame,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Pixel Art Animation Basics (For Complete Beginners)",
  description:
    "New to pixel art animation? Learn frames, timing, and simple animation principles without prior experience.",
};

export default function PixelArtAnimationBasicsPage() {
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
              <span className="text-pixel-neon-cyan">Pixel Art Animation</span>{" "}
              <span className="text-pixel-neon-pink">Basics</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Pixel art animation looks complex, but it starts with just a few
              frames. This guide breaks animation down into simple, beginner-
              friendly steps.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#what-is-animation" className="hover:underline">
                  What Pixel Art Animation Is
                </a>
              </li>
              <li>
                <a href="#frames" className="hover:underline">
                  Understanding Frames
                </a>
              </li>
              <li>
                <a href="#timing" className="hover:underline">
                  Timing & Speed
                </a>
              </li>
              <li>
                <a href="#simple-animations" className="hover:underline">
                  Easy Animations to Start With
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
            <section id="what-is-animation">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Play size={18} />
                What Pixel Art Animation Is
              </h2>
              <p className="text-muted-foreground">
                Pixel art animation is simply a sequence of still images shown
                quickly to create the illusion of movement. Each image is called
                a frame.
              </p>
            </section>

            {/* Section 2 */}
            <section id="frames">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Layers size={18} />
                Understanding Frames
              </h2>
              <p className="text-muted-foreground mb-4">
                Beginners often think they need many frames. In reality, most
                pixel animations use very few.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>2–3 frames: blinking lights, idle motion</li>
                <li>4–6 frames: walking, bouncing</li>
                <li>8+ frames: complex or smooth motion</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="timing">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Clock size={18} />
                Timing & Speed
              </h2>
              <p className="text-muted-foreground">
                Timing matters more than detail. A simple animation with good
                timing feels better than a detailed one with poor pacing.
              </p>

              <p className="mt-4 text-muted-foreground">
                Shading also affects how motion reads—subtle highlights can make
                movement feel smoother. Learn more in{" "}
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
            <section id="simple-animations">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Lightbulb size={18} />
                Easy Animations to Start With
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Bouncing ball</li>
                <li>Flickering candle</li>
                <li>Idle character breathing</li>
                <li>Spinning coin</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Most pixel tools make animation approachable with timelines and
                onion-skinning. If you’re unsure what to use, check{" "}
                <Link
                  href="/blog/pixel-art-tools-and-softwares"
                  className="underline"
                >
                  Pixel Art Tools & Software
                </Link>
                .
              </p>
            </section>

            {/* Section 5 */}
            <section id="common-mistakes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Flame size={18} />
                Common Beginner Mistakes
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Animating too many pixels at once</li>
                <li>Using too many frames too early</li>
                <li>Ignoring timing and spacing</li>
                <li>Overcomplicating the first animation</li>
              </ul>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            New to pixel art? Start simple, animate small, and use the right
            tools. Explore{" "}
            <Link
              href="/blog/pixel-art-tools-and-softwares"
              className="underline"
            >
              Pixel Art Tools & Software
            </Link>{" "}
            to get set up properly.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
