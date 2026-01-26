import Link from "next/link";
import {
  Cpu,
  Sparkles,
  TrendingUp,
  Gamepad2,
  BookOpen,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Is Pixel Art Still Worth Learning in 2026?",
  description:
    "With AI art and modern tools everywhere, is pixel art still worth learning in 2026? A realistic take for beginners and creators.",
};

export default function IsPixelArtWorthLearningPage() {
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
              <span className="text-pixel-neon-cyan">Is Pixel Art Still Worth</span>{" "}
              <span className="text-pixel-neon-pink">Learning in 2026?</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              AI art is everywhere. Tools are faster than ever. So does pixel art
              still make sense to learn in 2026? Let’s answer honestly.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-this-question" className="hover:underline">
                  Why People Ask This in 2026
                </a>
              </li>
              <li>
                <a href="#what-pixel-art-teaches" className="hover:underline">
                  What Pixel Art Teaches You
                </a>
              </li>
              <li>
                <a href="#pixel-art-today" className="hover:underline">
                  Where Pixel Art Is Used Today
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:underline">
                  Pixel Art vs Other Digital Art
                </a>
              </li>
              <li>
                <a href="#who-should-learn" className="hover:underline">
                  Who Should (and Shouldn’t) Learn Pixel Art
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-this-question">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Cpu size={18} />
                Why People Ask This in 2026
              </h2>
              <p className="text-muted-foreground">
                In 2026, artists have access to AI generators, real-time brushes,
                and insanely powerful tools. Compared to that, pixel art can
                feel slow and restrictive.
              </p>

              <p className="mt-3 text-muted-foreground">
                That’s exactly why people wonder if learning it is still worth
                the effort.
              </p>
            </section>

            {/* Section 2 */}
            <section id="what-pixel-art-teaches">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Sparkles size={18} />
                What Pixel Art Teaches You
              </h2>

              <p className="text-muted-foreground mb-4">
                Pixel art strips art down to fundamentals.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Strong shape design</li>
                <li>Color discipline</li>
                <li>Intentional lighting</li>
                <li>Visual clarity at small scales</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                These skills transfer directly to UI design, illustration,
                game art, and even motion design.
              </p>
            </section>

            {/* Section 3 */}
            <section id="pixel-art-today">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <TrendingUp size={18} />
                Where Pixel Art Is Used Today
              </h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Indie games and mobile games</li>
                <li>Nostalgia-driven marketing</li>
                <li>Web illustrations and hero art</li>
                <li>Social media loops and GIFs</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Pixel art hasn’t disappeared—it’s just more intentional now.
              </p>
            </section>

            {/* Section 4 */}
            <section id="comparison">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Gamepad2 size={18} />
                Pixel Art vs Other Digital Art
              </h2>

              <p className="text-muted-foreground mb-4">
                Pixel art isn’t better or worse—it’s different.
              </p>

              <p className="text-muted-foreground">
                If you’re deciding between styles, read{" "}
                <Link
                  href="/blog/pixel-art-vs-digital-art"
                  className="underline"
                >
                  Pixel Art vs Digital Art
                </Link>{" "}
                to understand the trade-offs clearly.
              </p>
            </section>

            {/* Section 5 */}
            <section id="who-should-learn">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <BookOpen size={18} />
                Who Should (and Shouldn’t) Learn Pixel Art
              </h2>

              <p className="text-muted-foreground mb-3">
                Pixel art is worth learning in 2026 if you:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
                <li>Enjoy constraints</li>
                <li>Want to improve fundamentals</li>
                <li>Like games, retro aesthetics, or UI art</li>
              </ul>

              <p className="text-muted-foreground">
                If you’re brand new, start with{" "}
                <Link
                  href="/blog/pixel-art-for-beginners"
                  className="underline"
                >
                  Pixel Art for Beginners
                </Link>{" "}
                to see if the process clicks for you.
              </p>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Pixel art isn’t outdated in 2026—it’s selective. And that’s what
            makes it powerful.
          </footer>
        </article>
      </main>
    </Layout>
  );
}
