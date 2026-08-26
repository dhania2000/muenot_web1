import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Operations Services | E-Learning Solutions | Muenot",
  description: "Streamlined e-learning content operations including testing, QA, indexing, translation, data curation, script tagging, and content review. Efficient management for educational content.",
  keywords: "content operations, testing and QA, indexing services, translation services, data curation, script tagging, content review, educational content management",
  openGraph: {
    title: "Content Operations Services | E-Learning Solutions",
    description: "End-to-end content operations that ensure quality, accessibility, and efficiency.",
    type: "website",
  },
};

export default function ContentOperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
