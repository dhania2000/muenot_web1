import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Services | Professional Editing & Indexing | Muenot",
  description: "Professional editorial services including indexing, pre-editing, style editing, copy editing, proofreading, and language editing. Expert editors for publication-ready content.",
  keywords: "editorial services, indexing, pre-editing, style editing, copy editing, proofreading, language editing, manuscript editing, professional editors",
  openGraph: {
    title: "Editorial Services | Professional Editing & Indexing",
    description: "Professional editorial services that transform good writing into exceptional content.",
    type: "website",
  },
};

export default function EditorialServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
