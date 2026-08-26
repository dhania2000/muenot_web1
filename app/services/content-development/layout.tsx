import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Development Services | E-Learning Solutions | Muenot",
  description: "Professional e-learning content development services including instructional design, assessment writing, animation design, and creative art. Transform your educational content with our expert team.",
  keywords: "content development, instructional design, assessment writing, e-learning content, educational content, animation design, creative art, alt text creation",
  openGraph: {
    title: "Content Development Services | E-Learning Solutions",
    description: "Create engaging digital learning content with our professional content development services.",
    type: "website",
  },
};

export default function ContentDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
