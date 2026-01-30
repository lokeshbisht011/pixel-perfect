import Link from "next/link";
import { Sparkles, Pencil, Palette } from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Pixel Art Shading Techniques",
  description:
    "Learn pixel art shading techniques to add depth and dimension to your pixel art. Tips on lights, shadows, and color variation.",
};

export default function PixelArtShadingTechniquesPage() {
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
              <span className="text-pixel-neon-cyan">Pixel Art</span>{" "}
              <span className="text-pixel-neon-pink">Shading Techniques</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Learn shading techniques to add depth and dimension to your pixel
              art, including lights, shadows, and color variations.
            </p>
          </header>

          {/* Table of Contents */}
          <nav className="mb-10 border-4 border-border bg-background p-4 font-mono text-sm">
            <p className="font-bold text-pixel-neon-green mb-2 uppercase tracking-wide">
              Contents
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#why-shading" className="hover:underline">
                  Why Shading Matters
                </a>
              </li>
              <li>
                <a href="#light-and-shadow" className="hover:underline">
                  Light and Shadow Basics
                </a>
              </li>
              <li>
                <a href="#color-variation" className="hover:underline">
                  Color Variation Techniques
                </a>
              </li>
              <li>
                <a href="#common-mistakes" className="hover:underline">
                  Common Shading Mistakes
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:underline">
                  Practice Daily
                </a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <section className="space-y-14 font-mono leading-relaxed">
            {/* Section */}
            <section id="why-shading">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Pencil size={18} />
                Why Shading Matters
              </h2>
              <p className="text-muted-foreground">
                Shading gives your pixel art volume and makes flat shapes look
                three-dimensional. Even simple shading can transform a basic
                sprite into a lively character.
              </p>
            </section>

            {/* Section */}
            <section id="light-and-shadow">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Palette size={18} />
                Light and Shadow Basics
              </h2>
              <p className="text-muted-foreground mb-4">
                Understand a single light source. Highlights indicate where
                light hits, and shadows show depth.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Decide on a light direction early</li>
                <li>Use darker shades to create depth</li>
                <li>Keep shadows simple on small grids</li>
              </ul>
            </section>

            {/* Section */}
            <section id="color-variation">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Palette size={18} />
                Color Variation Techniques
              </h2>
              <p className="text-muted-foreground mb-4">
                Slight hue shifts make your shading look richer and less flat.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Shift hue slightly instead of just darkening</li>
                <li>Use complementary colors for subtle highlights</li>
                <li>Apply shading consistently across your sprite</li>
              </ul>
            </section>

            {/* Section */}
            <section id="common-mistakes">
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Palette size={18} />
                Common Shading Mistakes
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Using too many shades in a small grid</li>
                <li>Ignoring light source consistency</li>
                <li>Overcomplicating shadows</li>
                <li>Neglecting contrast and readability</li>
              </ul>
            </section>

            {/* CTA */}
            <section
              id="practice"
              className="border-4 border-border bg-card p-6 text-center shadow-[6px_6px_0_rgba(0,0,0,0.5)]"
            >
              <h2 className="text-xl font-bold text-pixel-neon-cyan mb-3">
                Practice Shading Daily
              </h2>
              <p className="text-muted-foreground mb-6">
                Apply shading techniques to small prompts every day to get
                comfortable with light, shadow, and color variation.
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
            Improve faster by joining the{" "}
            <Link href="/" className="underline">
              Pixel Art Daily Challenge
            </Link>
            .
          </footer>
        </article>
      </main>
    
  );
}
