import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay informed with the latest trends, insights, and news from the world of AI, e-learning, technology, and localization. Read our expert articles and industry updates.",
  openGraph: {
    title: "Blog | Muenot",
    description:
      "Stay informed with the latest trends, insights, and news from the world of AI, e-learning, technology, and localization.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muenot Blog - Industry Insights & Updates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Muenot",
    description:
      "Stay informed with the latest trends, insights, and news from the world of AI, e-learning, technology, and localization.",
    images: ["/og-image.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
