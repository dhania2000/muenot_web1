import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore our success stories. See how Muenot has helped organizations achieve remarkable outcomes through AI Data Services, E-Learning, and Technology solutions.",
  openGraph: {
    title: "Case Studies | Muenot",
    description:
      "Explore our success stories. See how Muenot has helped organizations achieve remarkable outcomes.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muenot Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Muenot",
    description:
      "Explore our success stories. See how Muenot has helped organizations achieve remarkable outcomes.",
    images: ["/og-image.png"],
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
