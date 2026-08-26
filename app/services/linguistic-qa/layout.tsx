import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linguistic QA Services | Translation Quality Assurance | Muenot",
  description: "Professional linguistic quality assurance including proofreading, localization testing, cultural review, terminology checks, style guide compliance, and context validation.",
  keywords: "linguistic QA, quality assurance, proofreading, localization testing, cultural review, terminology check, style guide compliance, translation quality",
  openGraph: {
    title: "Linguistic QA Services | Translation Quality Assurance",
    description: "Rigorous quality assurance that ensures your localized content meets the highest linguistic and cultural standards.",
    type: "website",
  },
};

export default function LinguisticQALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
