import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata = {
  title: "Contact – Pixel Art Daily",
  description:
    "Get in touch with Pixel Art Daily. Questions, feedback, collaborations, or bug reports — we’d love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className=" px-4 py-16 flex items-center justify-center">
      <div className="pixel-card w-full max-w-2xl p-6 sm:p-10 font-mono text-center space-y-6">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold neon-glow text-primary">
          Contact Pixel Art Daily
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-sm sm:text-base">
          Have feedback, feature ideas, collaboration requests, or just want to
          say hi? We'd love to hear from you.
        </p>

        {/* Email box */}
        <div className="flex items-center justify-center gap-3 bg-muted/40 border border-border rounded-lg p-4">
          <Mail className="w-5 h-5 text-pixel-neon-cyan" />
          <a
            href="mailto:hello@pixelartdaily.com"
            className="text-pixel-neon-cyan hover:underline break-all"
          >
            hello@pixleartdaily.com
          </a>
        </div>

        {/* Extra context */}
        <div className="text-xs sm:text-sm text-muted-foreground space-y-2">
          <p>
            📩 For <span className="text-foreground">support</span>, include your
            username and a short description of the issue.
          </p>
          <p>
            🎨 For <span className="text-foreground">collaborations</span>, tell
            us what you’re building or proposing.
          </p>
        </div>

        {/* Back links */}
        <div className="pt-4 flex items-center justify-center gap-4 text-sm">
          <Link
            href="/"
            className="text-pixel-neon-pink hover:underline"
          >
            ← Back to Home
          </Link>
          <Link
            href="/gallery"
            className="text-pixel-neon-green hover:underline"
          >
            Explore Gallery →
          </Link>
        </div>
      </div>
    </main>
  );
}
