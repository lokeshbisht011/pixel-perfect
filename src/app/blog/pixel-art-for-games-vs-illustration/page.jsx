import Link from "next/link";
import {
  Gamepad2,
  Brush,
  Layers,
  Wrench,
  Lightbulb,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Pixel Art for Games vs Pixel Art for Illustration",
  description:
    "What’s the real difference between pixel art for games and pixel art for illustration? Learn workflows, constraints, and which path suits you.",
};

export default function PixelArtGamesVsIllustrationPage() {
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
              <span className="text-pixel-neon-cyan">Pixel Art for Games</span>{" "}
              <span className="text-pixel-neon-pink">
                vs Pixel Art for Illustration
              </span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Pixel art is used very differently in games and illustrations.
              Understanding the distinction helps you practice the right way
              from day one.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#core-difference" className="hover:underline">
                  The Core Difference
                </a>
              </li>
              <li>
                <a href="#pixel-art-for-games" className="hover:underline">
                  Pixel Art for Games
                </a>
              </li>
              <li>
                <a href="#pixel-art-for-illustration" className="hover:underline">
                  Pixel Art for Illustration
                </a>
              </li>
              <li>
                <a href="#workflow-differences" className="hover:underline">
                  Workflow & Constraints
                </a>
              </li>
              <li>
                <a href="#which-should-you-learn" className="hover:underline">
                  Which One Should You Learn?
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="core-difference">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Layers size={18} />
                The Core Difference
              </h2>

              <p className="text-muted-foreground">
                The biggest difference is purpose.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-1">
                <li>
                  <strong>Game pixel art</strong> must function inside systems
                  like movement, animation, and scaling
                </li>
                <li>
                  <strong>Illustration pixel art</strong> is about visual impact
                  and storytelling
                </li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                This distinction also separates pixel art from general digital
                illustration, as explained in{" "}
                <Link href="/blog/pixel-art-vs-digital-art" className="underline">
                  Pixel Art vs Digital Art
                </Link>
                .
              </p>
            </section>

            {/* Section 2 */}
            <section id="pixel-art-for-games">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Gamepad2 size={18} />
                Pixel Art for Games
              </h2>

              <p className="text-muted-foreground mb-4">
                Game pixel art lives inside engines and pipelines.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Sprites must align to grids</li>
                <li>Animations need consistent proportions</li>
                <li>Assets must tile and loop cleanly</li>
                <li>Readability matters more than detail</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Constraints are stricter, but they make learning fundamentals
                faster.
              </p>
            </section>

            {/* Section 3 */}
            <section id="pixel-art-for-illustration">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Brush size={18} />
                Pixel Art for Illustration
              </h2>

              <p className="text-muted-foreground mb-4">
                Illustration pixel art focuses on standalone images.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>More freedom in canvas size</li>
                <li>Higher color counts</li>
                <li>Less concern about animation</li>
                <li>Greater emphasis on mood and lighting</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                This style is popular for posters, social media, and personal
                projects.
              </p>
            </section>

            {/* Section 4 */}
            <section id="workflow-differences">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Wrench size={18} />
                Workflow & Tool Differences
              </h2>

              <p className="text-muted-foreground mb-4">
                Tools and workflows differ depending on your goal.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Game artists prioritize sprite sheets</li>
                <li>Illustrators focus on composition and polish</li>
                <li>Export formats matter more for games</li>
                <li>Illustration allows more experimentation</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                If you’re choosing software, start with{" "}
                <Link
                  href="/blog/pixel-art-tools-and-softwares"
                  className="underline"
                >
                  Pixel Art Tools & Software
                </Link>{" "}
                to understand your options.
              </p>
            </section>

            {/* Section 5 */}
            <section id="which-should-you-learn">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Lightbulb size={18} />
                Which One Should You Learn First?
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Choose games if you like structure and systems</li>
                <li>Choose illustration if you enjoy storytelling</li>
                <li>Start with one to avoid confusion</li>
                <li>You can switch later—skills transfer well</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                The best choice is the one that keeps you drawing consistently.
              </p>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Purpose defines process. Choose wisely—and draw daily.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
