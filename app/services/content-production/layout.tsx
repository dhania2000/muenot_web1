import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Production Services | E-Learning Solutions | Muenot",
  description: "Professional e-learning content production services including cover design, quality control, LaTeX and InDesign composition, template creation, and layout design. Excellence in every detail.",
  keywords: "content production, cover design, quality control, LaTeX composition, InDesign composition, template creation, layout design, educational publishing",
  openGraph: {
    title: "Content Production Services | E-Learning Solutions",
    description: "Professional production services that transform content into polished, publication-ready materials.",
    type: "website",
  },
};

export default function ContentProductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
