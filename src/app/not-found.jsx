import Link from "next/link";
import { Sparkles, ArrowLeft, Gamepad2 } from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "404 – Page Not Found | Pixel Art Daily",
  description:
    "Oops! This page doesn’t exist. Head back and create pixel art with today’s prompt.",
};

export default function NotFoundPage() {
  return (
    <Layout>
      <main className="relative min-h-screen bg-background text-foreground px-4 py-16 overflow-hidden flex justify-center">
        {/* Pixel grid background */}
        <div
          aria-hidden
          className="absolute inset-0 bg-pixel-grid opacity-[0.12]"
          style={{ backgroundSize: "24px 24px" }}
        />

        {/* Center card */}
        <section className="relative z-10 max-w-xl h-[600px] md:h-[500px] w-full border-4 border-border bg-card p-8 md:p-10 text-center shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
          {/* Floating pixels */}
          <div className="absolute -top-3 -left-3 w-5 h-5 bg-pixel-neon-pink" />
          <div className="absolute -top-3 -right-3 w-5 h-5 bg-pixel-neon-cyan" />
          <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-pixel-neon-green" />
          <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-pixel-neon-purple" />

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="border-4 border-border p-4 bg-background">
              <Gamepad2 className="w-10 h-10 text-pixel-neon-pink" />
            </div>
          </div>

          {/* 404 */}
          <h1 className="font-mono font-bold text-5xl md:text-6xl mb-4">
            <span className="text-pixel-neon-cyan">404</span>
          </h1>

          {/* Message */}
          <p className="font-mono text-muted-foreground mb-6 leading-relaxed">
            Looks like this pixel wandered off the grid.
            <br />
            The page you’re looking for doesn’t exist.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 border-4 border-border px-5 py-3 bg-background hover:bg-muted transition font-mono"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>

            <Link
              href="/create"
              className="inline-flex items-center gap-2 border-4 border-border px-5 py-3 bg-pixel-neon-pink text-black hover:opacity-90 transition font-mono"
            >
              <Sparkles size={18} />
              Create Pixel Art
            </Link>
          </div>

          {/* Fun footer text */}
          <p className="mt-8 text-xs font-mono text-muted-foreground">
            Error Code:{" "}
            <span className="text-pixel-neon-green">PIXEL_NOT_FOUND</span>
          </p>
        </section>
      </main>
    </Layout>
  );
}
