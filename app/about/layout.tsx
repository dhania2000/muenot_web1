import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Muenot - Infinite Learning, Endless Possibilities",
  description: "Learn about Muenot's vision, mission, and core values. Discover how we're transforming businesses through AI Data Services, E-Learning, Localization, Technology, and Publishing solutions.",
  keywords: [
    "about muenot",
    "company vision",
    "company mission",
    "core values",
    "technology services company",
    "AI data services",
    "e-learning solutions",
    "global technology partner",
    "innovation",
    "quality excellence"
  ],
  openGraph: {
    title: "About Us | Muenot",
    description: "Transforming Ideas Into Digital Excellence. Learn about our vision, mission, values, and journey.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
