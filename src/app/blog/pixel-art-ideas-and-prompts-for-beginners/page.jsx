import Link from "next/link";
import {
  Lightbulb,
  Sparkles,
  Pencil,
  Coffee,
  Gamepad2,
  Flame,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Pixel Art Ideas & Prompts for Beginners",
  description:
    "Struggling with what to draw? Explore easy pixel art ideas and daily prompts for beginners to build consistency, creativity, and skill.",
};

export default function PixelArtIdeasPromptsPage() {
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
              <span className="text-pixel-neon-cyan">Pixel Art Ideas</span>{" "}
              <span className="text-pixel-neon-pink">& Daily Prompts</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Stuck staring at a blank canvas? These beginner-friendly pixel art
              ideas and prompts will help you practice consistently and improve
              faster.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-prompts" className="hover:underline">
                  Why Prompts Help You Improve Faster
                </a>
              </li>
              <li>
                <a href="#easy-object-ideas" className="hover:underline">
                  Easy Object Pixel Art Ideas
                </a>
              </li>
              <li>
                <a href="#character-ideas" className="hover:underline">
                  Beginner Character Ideas
                </a>
              </li>
              <li>
                <a href="#scene-ideas" className="hover:underline">
                  Simple Scene Ideas
                </a>
              </li>
              <li>
                <a href="#daily-prompts" className="hover:underline">
                  Daily Pixel Art Prompts
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section 1 */}
            <section id="why-prompts">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Lightbulb size={18} />
                Why Pixel Art Prompts Work
              </h2>
              <p className="text-muted-foreground mb-3">
                The hardest part of practicing art is deciding what to draw.
                Prompts remove decision fatigue so you can focus on creating.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Reduce mental friction</li>
                <li>Improve consistency</li>
                <li>Encourage experimentation</li>
                <li>Keep practice fun</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="easy-object-ideas">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Coffee size={18} />
                Easy Object Pixel Art Ideas
              </h2>
              <p className="text-muted-foreground mb-4">
                Start simple. Small objects are perfect for learning shapes,
                shading, and color control.
              </p>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 list-disc pl-6 text-muted-foreground">
                <li>Apple</li>
                <li>Coffee cup</li>
                <li>Book</li>
                <li>Key</li>
                <li>Backpack</li>
                <li>Sword</li>
                <li>Plant</li>
                <li>Lantern</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="character-ideas">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Pencil size={18} />
                Beginner Character Ideas
              </h2>
              <p className="text-muted-foreground mb-4">
                Simple characters teach anatomy, proportions, and silhouettes.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Wizard</li>
                <li>Knight</li>
                <li>Robot</li>
                <li>Cat warrior</li>
                <li>Pixel astronaut</li>
                <li>Farmer</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="scene-ideas">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Gamepad2 size={18} />
                Simple Scene Ideas
              </h2>
              <p className="text-muted-foreground mb-4">
                Small scenes help you practice composition, lighting, and depth.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Cozy bedroom</li>
                <li>Forest campfire</li>
                <li>Pixel café</li>
                <li>Floating island</li>
                <li>Village street</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="daily-prompts">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Flame size={18} />
                Daily Pixel Art Prompts (Beginner Friendly)
              </h2>
              <p className="text-muted-foreground mb-4">
                These prompts are designed to be quick, simple, and fun:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>A magic potion bottle</li>
                <li>Your favorite fruit</li>
                <li>A cozy desk setup</li>
                <li>A tiny monster</li>
                <li>A pixel house</li>
                <li>A floating sword</li>
                <li>A peaceful campfire</li>
              </ul>

              <p className="mt-4">
                Or skip the thinking entirely and use our rotating daily prompt:
              </p>

              <Link
                href="/create"
                className="inline-block mt-6 border-4 border-border px-6 py-3 bg-background hover:bg-muted transition font-mono font-bold text-pixel-neon-green"
              >
                Try Today’s Pixel Art Daily Prompt
              </Link>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Want to improve faster? Read{" "}
            <Link href="/blog/pixel-art-for-beginners" className="underline">
              Pixel Art for Beginners
            </Link>{" "}
            and join the{" "}
            <Link href="/" className="underline">
              Pixel Art Daily Challenge
            </Link>
            .
          </footer>
        </article>
      </main>
    
  );
}
