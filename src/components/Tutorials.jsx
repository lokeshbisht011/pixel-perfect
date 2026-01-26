import Link from "next/link";
import { Pencil, Layers, Palette, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PixelStepGrid from "@/components/PixelArtStepGrid";
import { pikachuBaseColors, pikachuFinal, pikachuOutline, pikachuShaded } from "@/lib/pixelArtStepsData";

export const metadata = {
  title: "How to Draw Pixel Art Pikachu (Step by Step)",
  description:
    "Learn how to draw a simple pixel art Pikachu step by step, from outline to final shading.",
};

export default function PixelArtPikachuPage() {
  return (
    <Layout>
      <main className="relative min-h-screen bg-background text-foreground px-4 py-12 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-pixel-grid opacity-[0.15]"
          style={{ backgroundSize: "24px 24px" }}
        />

        <article className="relative max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center border-4 border-border bg-card p-6 shadow-[6px_6px_0_rgba(0,0,0,0.5)]">
            <h1 className="font-mono font-bold text-3xl md:text-4xl mb-4">
              <span className="text-pixel-neon-cyan">How to Draw</span>{" "}
              <span className="text-pixel-neon-pink">Pixel Art Pikachu</span>
            </h1>

            <p className="text-muted-foreground font-mono text-sm md:text-base">
              A beginner-friendly step-by-step pixel art tutorial using a small grid.
            </p>
          </header>

          {/* Content */}
          <section className="space-y-16 font-mono leading-relaxed">
            {/* Step 1 */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-cyan mb-3">
                <Pencil size={18} />
                Step 1: Draw the Outline
              </h2>

              <p className="text-muted-foreground mb-4">
                Start by drawing a clean outline using a dark color. Focus on
                silhouette, not details.
              </p>

              <PixelStepGrid
                size={32}
                pixels={pikachuOutline}
              />
            </section>

            {/* Step 2 */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-pink mb-3">
                <Palette size={18} />
                Step 2: Fill Base Colors
              </h2>

              <p className="text-muted-foreground mb-4">
                Fill Pikachu with flat yellow, red cheeks, and black eyes.
                Avoid shading for now.
              </p>

              <PixelStepGrid
                size={32}
                pixels={pikachuBaseColors}
              />
            </section>

            {/* Step 3 */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-green mb-3">
                <Layers size={18} />
                Step 3: Add Simple Shading
              </h2>

              <p className="text-muted-foreground mb-4">
                Add one darker shade to suggest depth. Keep it subtle.
              </p>

              <PixelStepGrid
                size={32}
                pixels={pikachuShaded}
              />
            </section>

            {/* Step 4 */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-bold text-pixel-neon-yellow mb-3">
                <Sparkles size={18} />
                Step 4: Final Polish
              </h2>

              <p className="text-muted-foreground mb-4">
                Clean stray pixels and adjust contrast. Stop early—overworking
                kills pixel art.
              </p>

              <PixelStepGrid
                size={32}
                pixels={pikachuFinal}
              />
            </section>
          </section>

          {/* CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Want to try this yourself?{" "}
            <Link href="/create" className="underline">
              Draw today's pixel art prompt on PixelArtDaily
            </Link>
            .
          </footer>
        </article>
      </main>
    </Layout>
  );
}
