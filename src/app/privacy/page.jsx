export const metadata = {
    title: "Privacy Policy - Pixel Art Daily",
    description:
      "Learn how Pixel Art Daily collects, uses, and protects your data while you create and share pixel art online.",
  };
  
  export default function PrivacyPage() {
    return (
      <main className="min-h-screen px-4 py-16 flex justify-center">
        <div className="w-full max-w-4xl space-y-10 font-mono">
          {/* Header */}
          <div className="pixel-card p-6 sm:p-10 text-center space-y-4">
            <h1 className="text-3xl font-bold neon-glow text-primary">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
  
          {/* Intro */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pixel Art Daily respects your privacy. This Privacy Policy explains
              how we collect, use, and protect your information when you use our
              online pixel art maker, gallery, and community features.
            </p>
          </div>
  
          {/* Data We Collect */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">Information We Collect</h2>
  
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>Account information (username, email, profile details)</li>
              <li>Pixel art you create, upload, remix, or share</li>
              <li>Comments, likes, and community interactions</li>
              {/* <li>Basic usage analytics to improve the platform</li> */}
            </ul>
          </div>
  
          {/* How We Use Data */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">How We Use Your Data</h2>
  
            <p className="text-muted-foreground text-sm leading-relaxed">
              We use your data to operate and improve Pixel Art Daily, including:
            </p>
  
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>Providing the pixel art creation and sharing experience</li>
              <li>Displaying your artwork and profile in the gallery</li>
              <li>Supporting community features like likes, comments, and remixes</li>
              <li>Maintaining platform safety and preventing abuse</li>
            </ul>
          </div>
  
          {/* Data Protection */}
          <div className="pixel-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold">Data Protection</h2>
  
            <p className="text-muted-foreground text-sm leading-relaxed">
              We take reasonable steps to protect your data. Your content remains
              yours, and we do not sell personal data to third parties.
            </p>
          </div>
  
          {/* Contact */}
          <div className="pixel-card p-6 sm:p-8 space-y-4 text-center">
            <h3 className="text-lg font-bold">Questions?</h3>
            <p className="text-muted-foreground text-sm">
              Contact us at{" "}
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
  