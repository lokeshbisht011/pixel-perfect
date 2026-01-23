import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { blogs } from "@/lib/blogData";

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
