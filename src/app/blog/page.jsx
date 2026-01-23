import Link from "next/link";
import { BookOpen, Sparkles, Palette, Grid, Clock, AlertTriangle, Calendar, Flame, Wrench, PaletteIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";

const blogs = [
  {
    slug: "pixel-art-for-beginners",
    title: "Pixel Art for Beginners",
    description: "A complete beginner-friendly guide to pixel art.",
    icon: Grid,
    color: "text-pixel-neon-cyan",
  },
  {
    slug: "pixel-art-ideas-and-prompts-for-beginners",
    title: "Pixel Art Ideas & Daily Prompts",
    description: "Easy ideas and prompts to build consistency.",
    icon: Sparkles,
    color: "text-pixel-neon-pink",
  },
  {
    slug: "pixel-art-color-theory",
    title: "Pixel Art Color Theory",
    description: "Simple color rules that actually work.",
    icon: Palette,
    color: "text-pixel-neon-green",
  },
  {
    slug: "pixel-art-vs-digital-art",
    title: "Pixel Art vs Digital Art",
    description: "Understand the real differences between the two.",
    icon: BookOpen,
    color: "text-pixel-neon-cyan",
  },
  {
    slug: "how-long-does-it-take-to-get-good-at-pixel-art",
    title: "How Long Does It Take to Get Good at Pixel Art?",
    description: "A realistic timeline and expectations.",
    icon: Clock,
    color: "text-pixel-neon-pink",
  },
  {
    slug: "common-pixel-art-mistakes-and-how-to-fix-them",
    title: "Common Pixel Art Mistakes (And How to Fix Them)",
    description:
      "Learn the most common beginner pixel art mistakes and practical ways to fix them fast.",
    icon: AlertTriangle,
    color: "text-pixel-neon-pink",
  },
  {
    slug: "how-to-practice-pixel-art-daily-without-burnout",
    title: "How to Practice Pixel Art Daily Without Burnout",
    description:
      "Build a sustainable daily pixel art habit without losing motivation or creativity.",
    icon: Calendar,
    color: "text-pixel-neon-cyan",
  },
  {
    slug: "pixel-art-shading-techniques",
    title: "Pixel Art Shading Techniques (Beginner to Intermediate)",
    description:
      "Simple pixel art shading techniques to add depth, light, and clarity to your sprites.",
    icon: Flame,
    color: "text-pixel-neon-green",
  },
  {
    slug: "pixel-art-tools-and-softwares",
    title: "Best Pixel Art Tools & Software for Beginners",
    description:
      "A beginner-friendly breakdown of the best pixel art tools, apps, and software.",
    icon: Wrench,
    color: "text-pixel-neon-cyan",
  },
  {
    slug: "choosing-pixel-art-colors",
    title: "How to Choose Colors for Pixel Art",
    description:
      "Learn how to pick pixel art colors that look clean, readable, and intentional.",
    icon: Palette,
    color: "text-pixel-neon-pink",
  },
  {
    slug: "best-pixel-art-grid-sizes",
    title: "Best Pixel Art Grid Sizes (And When to Use Them)",
    description:
      "Not sure what canvas size to use? Learn the best grid sizes for pixel art projects.",
    icon: Grid,
    color: "text-pixel-neon-green",
  },
];

export const metadata = {
  title: "Pixel Art Blog",
  description:
    "Beginner-friendly pixel art guides, tips, and daily practice ideas.",
};

export default function BlogIndexPage() {
  return (
    <Layout>
      <main className="relative min-h-screen bg-background text-foreground px-4 py-12 overflow-hidden">
        {/* Pixel Grid Background */}
        <div
          aria-hidden
          className="absolute inset-0 bg-pixel-grid opacity-[0.15]"
          style={{ backgroundSize: "24px 24px" }}
        />

        <section className="relative max-w-5xl mx-auto">
          {/* Header */}
          <header className="mb-14 text-center border-4 border-border bg-card p-6 shadow-[6px_6px_0_rgba(0,0,0,0.5)]">
            <h1 className="font-mono font-bold text-3xl md:text-4xl mb-4">
              <span className="text-pixel-neon-cyan">Pixel Art</span>{" "}
              <span className="text-pixel-neon-pink">Blog</span>
            </h1>
            <p className="text-muted-foreground font-mono text-sm md:text-base">
              Guides, ideas, and practice tips to help you improve at pixel art
              — one pixel at a time.
            </p>
          </header>

          {/* Blog Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {blogs.map(({ slug, title, description, icon: Icon, color }) => (
              <li key={slug}>
                <Link
                  href={`/blog/${slug}`}
                  className="group block border-4 border-border bg-background p-6 font-mono transition hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,0.6)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      size={20}
                      className={`${color} transition group-hover:scale-110`}
                    />
                    <h2 className={`font-bold text-lg ${color}`}>{title}</h2>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>

                  <span className="inline-block mt-4 text-xs uppercase tracking-wide text-muted-foreground">
                    Read Guide →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer CTA */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            Want hands-on practice?{" "}
            <Link href="/create" className="underline">
              Try today’s pixel art prompt
            </Link>
            .
          </footer>
        </section>
      </main>
    </Layout>
  );
}
