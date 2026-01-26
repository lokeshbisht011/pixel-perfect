import Layout from "@/components/layout/Layout";
import PixelArtClient from "@/components/pixelArt/PixelArtClient";

export async function generateMetadata({ searchParams }) {
  const id = searchParams?.id;

  if (!id) return { title: "Pixel Art Daily" };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/pixelArts/${id}`
    );
    if (!res.ok) throw new Error("Failed to fetch pixel art");

    const pixelArt = await res.json();

    const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/pixelArt?id=${pixelArt.id}`;
    const pageTitle = pixelArt.title || "Pixel Art Daily";
    const pageDesc = `Check out this pixel art by ${pixelArt.profile.username}!`;
    const pageImage = pixelArt.imageUrl;

    return {
      title: pageTitle,
      description: pageDesc,
      openGraph: {
        title: pageTitle,
        description: pageDesc,
        type: "website",
        url: pageUrl,
        images: [
          {
            url: pageImage,
            width: 800,
            height: 800,
            alt: pageTitle,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDesc,
        images: [pageImage],
      },
    };
  } catch (err) {
    console.error(err);
    return { title: "Pixel Art Daily" };
  }
}

export default function PixelArtPage({ searchParams }) {
  const id = searchParams?.id;

  return (
    <Layout>
      {/* Client component handles fetching, comments, likes, modals */}
      <PixelArtClient pixelArtId={id} />
    </Layout>
  );
}
