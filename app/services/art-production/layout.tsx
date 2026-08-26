import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Production Services | E-Learning Visual Design | Muenot",
  description: "Professional art production services for e-learning including custom illustrations, infographics, icon design, photo editing, vector graphics, and brand assets. Visual excellence for education.",
  keywords: "art production, illustration, infographics, icon design, photo editing, vector graphics, brand assets, educational design, visual design",
  openGraph: {
    title: "Art Production Services | E-Learning Visual Design",
    description: "Transform educational content with professional visual design and custom artwork.",
    type: "website",
  },
};

export default function ArtProductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
