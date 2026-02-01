import Link from "next/link";
import { Palette, Users, Wand2, Share2, Gamepad2 } from "lucide-react";

export const metadata = {
  title: "About Pixel Art Daily – Create, Share & Remix Pixel Art",
  description:
    "Pixel Art Daily is an online pixel art platform where artists create, share, remix, and grow together using daily pixel art prompts and an online pixel art maker.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-16 flex justify-center">
      <div className="w-full max-w-4xl space-y-10 font-mono">
        {/* Hero */}
        <div className="pixel-card p-6 sm:p-10 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold neon-glow text-primary">
            About Pixel Art Daily
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Pixel Art Daily is a creative platform built for pixel artists of all
            levels to <span className="text-foreground">create </span>{"and "}
            <span className="text-foreground">share pixel art</span>, and grow
            together through daily challenges and community-driven inspiration.
          </p>
        </div>

        {/* What is Pixel Art Daily */}
        <div className="pixel-card p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-6 h-6 text-pixel-neon-pink" />
            <h2 className="text-xl font-bold">What is Pixel Art Daily?</h2>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Pixel Art Daily is an{" "}
            <strong className="text-foreground">
              online pixel art maker and community
            </strong>{" "}
            where artists receive a new prompt every day. You can create pixel
            art directly in the browser, publish your artwork, explore other
            creations, and remix pixel art made by the community.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Whether you are a beginner learning pixel art fundamentals or an
            experienced artist refining your style, Pixel Art Daily gives you a
            simple reason to show up and create — every single day.
          </p>
        </div>

        {/* Create Pixel Art */}
        <div className="pixel-card p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <Palette className="w-6 h-6 text-pixel-neon-cyan" />
            <h2 className="text-xl font-bold">Create Pixel Art Online</h2>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Our built-in{" "}
            <strong className="text-foreground">
              online pixel art maker
            </strong>{" "}
            lets you draw pixel art instantly — no downloads, no setup, just
            creativity. Use a limited canvas, pixel-perfect tools, and simple
            controls designed specifically for pixel artists.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
            The constraints are intentional. A focused canvas helps you learn
            faster, finish more artwork, and improve your pixel art skills over
            time.
          </p>
        </div>

        {/* Share & Remix */}
        <div className="pixel-card p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <Share2 className="w-6 h-6 text-pixel-neon-green" />
            <h2 className="text-xl font-bold">Share & Remix Pixel Art</h2>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Pixel Art Daily is built around sharing. Publish your artwork to the
            gallery, discover pixel art from artists around the world, and
            remix pixel art to learn new techniques or add your own creative
            twist.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Remixing encourages learning by doing — see how others build forms,
            shading, and color palettes, then experiment inside your own remix.
          </p>
        </div>

        {/* Community */}
        <div className="pixel-card p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-pixel-neon-purple" />
            <h2 className="text-xl font-bold">A Pixel Art Community</h2>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Pixel Art Daily is more than a tool — it’s a{" "}
            <strong className="text-foreground">pixel art community</strong>.
            Like artwork, leave comments, track streaks, and grow together with
            artists who love the pixel art style as much as you do.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
            The goal is consistency over perfection. Small daily creations add
            up to real progress.
          </p>
        </div>

        {/* CTA */}
        <div className="pixel-card p-6 sm:p-8 text-center space-y-4">
          <h3 className="text-xl font-bold">
            Start Creating Pixel Art Today
          </h3>
          <p className="text-muted-foreground text-sm">
            Join Pixel Art Daily and build a daily pixel art habit — one pixel at
            a time.
          </p>

          <div className="flex items-center justify-center gap-4 text-sm">
            <Link
              href="/create"
              className="text-pixel-neon-cyan hover:underline"
            >
              Create Pixel Art
            </Link>
            <Link
              href="/gallery"
              className="text-pixel-neon-pink hover:underline"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
