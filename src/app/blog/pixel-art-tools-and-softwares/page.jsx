import Link from "next/link";
import { Sparkles, Laptop, Laptop2Icon } from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Pixel Art Tools and Software for Beginners",
  description:
    "Discover the best tools and software for creating pixel art, from free apps to professional software. Perfect for beginners looking to start pixel art daily.",
};

export default function PixelArtToolsSoftwaresPage() {
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
              <span className="text-pixel-neon-cyan">Pixel Art</span>{" "}
              <span className="text-pixel-neon-pink">Tools & Software</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Explore the best software and tools to create pixel art as a
              beginner. Start your pixel art daily journey with the right setup.
            </p>
          </header>

          {/* Table of Contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#free-tools" className="hover:underline">
                  Free Pixel Art Tools
                </a>
              </li>
              <li>
                <a href="#paid-tools" className="hover:underline">
                  Paid Software for Beginners
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:underline">
                  Tips for Choosing the Right Tool
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:underline">
                  Start Pixel Art Daily
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section */}
            <section id="free-tools">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Laptop2Icon size={18} />
                Free Pixel Art Tools
              </h2>
              <p className="text-muted-foreground mb-4">
                Beginners can start pixel art without spending a dime. Some free
                tools are surprisingly powerful.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Aseprite (trial version)</li>
                <li>Piskel (web-based, free)</li>
                <li>Pixilart (web & community)</li>
                <li>GIMP (general image editor)</li>
              </ul>
            </section>

            {/* Section */}
            <section id="paid-tools">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Laptop size={18} />
                Paid Software for Beginners
              </h2>
              <p className="text-muted-foreground mb-4">
                Investing in software can improve workflow and provide extra
                features like layers, animation, and palette management.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Aseprite (full version)</li>
                <li>GraphicsGale</li>
                <li>Pro Motion NG</li>
              </ul>
            </section>

            {/* Section */}
            <section id="tips">
              <h2 className="text-xl font-bold text-pixel-neon-green mb-3">
                Tips for Choosing the Right Tool
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Start simple – avoid overwhelming features</li>
                <li>Web-based tools are good for testing ideas</li>
                <li>Pick software that fits your daily workflow</li>
                <li>Look for a community for support</li>
              </ul>
            </section>

            {/* CTA */}
            <section
              id="practice"
              className="border-4 border-border bg-card p-6 text-center shadow-[6px_6px_0_rgba(0,0,0,0.5)]"
            >
              <h2 className="text-xl font-bold text-pixel-neon-pink mb-3">
                Start Pixel Art Daily
              </h2>
              <p className="text-muted-foreground mb-6">
                Pick any of the tools above and start creating small pixel art
                every day. Join Pixel Art Daily for inspiration and prompts.
              </p>

              <Link
                href="/create"
                className="inline-flex items-center gap-2 border-4 border-border px-5 py-3 bg-background hover:bg-muted transition"
              >
                <Sparkles size={18} />
                Try Today’s Pixel Art Prompt
              </Link>
            </section>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Want to improve faster? Join the{" "}
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
