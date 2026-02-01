export const metadata = {
    title: "Terms of Service - Pixel Art Daily",
    description:
      "Rules, guidelines, and community standards for using Pixel Art Daily, including content restrictions and remix policies.",
  };
  
  export default function TermsPage() {
    return (
      <main className="min-h-screen px-4 py-16 flex justify-center">
        <div className="w-full max-w-4xl space-y-10 font-mono">
          {/* Header */}
          <div className="pixel-card p-6 sm:p-10 text-center space-y-4">
            <h1 className="text-3xl font-bold neon-glow text-primary">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
  
          {/* Introduction */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              These Terms of Service govern your access to and use of Pixel Art
              Daily, including our online pixel art maker, gallery, remix tools,
              and community features. By using Pixel Art Daily, you agree to these
              terms.
            </p>
          </div>
  
          {/* Eligibility */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">Eligibility</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              You must be at least 13 years old to use Pixel Art Daily. If you are
              under the age required by your local laws, you may not create an
              account or upload content.
            </p>
          </div>
  
          {/* Account Responsibility */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">Account Responsibility</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              You are responsible for maintaining the security of your account and
              for all activities that occur under your account. Do not share your
              login credentials with others.
            </p>
          </div>
  
          {/* Acceptable Use */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">Acceptable Use</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pixel Art Daily is a creative platform intended for positive,
              respectful expression. You agree not to misuse the platform or
              interfere with its normal operation.
            </p>
          </div>
  
          {/* Prohibited Content */}
          <div className="pixel-card p-6 sm:p-8 space-y-4 border border-red-500/30">
            <h2 className="text-xl font-bold text-red-500">
              Prohibited Content
            </h2>
  
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>Sexual or pornographic imagery of any kind</li>
              <li>Sexually explicit or suggestive pixel art</li>
              <li>Sexual words, phrases, or erotic descriptions</li>
              <li>Content involving minors in any sexual context</li>
              <li>Hate speech, harassment, or discriminatory content</li>
              <li>Violence, self-harm, or graphic imagery</li>
              <li>Spam, scams, or misleading content</li>
            </ul>
  
            <p className="text-muted-foreground text-sm">
              Content that violates these rules may be removed without notice.
            </p>
          </div>
  
          {/* Remix Rules */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">Remixes & Derivative Works</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pixel Art Daily allows users to remix artwork where remixing is
              enabled. When remixing:
            </p>
  
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>The original creator will be credited automatically</li>
              <li>You may not claim the original work as entirely your own</li>
              <li>You may not remove attribution to the original artist</li>
            </ul>
          </div>
  
          {/* Intellectual Property */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">Intellectual Property</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              You retain ownership of the pixel art you create. By uploading
              content, you grant Pixel Art Daily a non-exclusive license to host,
              display, and share your content within the platform.
            </p>
          </div>
  
          {/* Moderation */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">Content Moderation</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We reserve the right to review, moderate, or remove content that
              violates these Terms or harms the community. Moderation decisions
              are final.
            </p>
          </div>
  
          {/* Service Availability */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">Service Availability</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pixel Art Daily is provided “as is.” We do not guarantee uninterrupted
              access and may modify or discontinue features at any time.
            </p>
          </div>
  
          {/* Termination */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">Account Suspension & Termination</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We may suspend or terminate accounts that repeatedly violate these
              Terms, abuse the platform, or engage in prohibited behavior.
            </p>
          </div>
  
          {/* Limitation of Liability */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">Limitation of Liability</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pixel Art Daily is not liable for any indirect or consequential
              damages resulting from your use of the platform.
            </p>
          </div>
  
          {/* Changes */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">Changes to These Terms</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We may update these Terms from time to time. Continued use of Pixel
              Art Daily means you accept the updated Terms.
            </p>
          </div>
  
          {/* Contact */}
          <div className="pixel-card p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="text-muted-foreground text-sm">
              Questions about these Terms? Email us at{" "}
              <a
                href="mailto:hello@pixelartdaily.com"
                className="text-pixel-neon-cyan hover:underline"
              >
                hello@pixelartdaily.com
              </a>
            </p>
          </div>
        </div>
      </main>
    );
  }
  