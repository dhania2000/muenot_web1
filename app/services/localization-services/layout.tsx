import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Localization Services | 40+ Languages, One Source | Muenot",
  description:
    "End-to-end localization: translation, transcription, subtitling, media localisation, and linguistic QA across 40+ language pairs. Native linguists so your product reads as though it was written locally.",
  keywords:
    "localization services, translation, transcription, subtitling, linguistic QA, media localization, multilingual, language pairs, native linguists, internationalization",
  openGraph: {
    title: "Localization Services | 40+ Languages, One Source",
    description:
      "Native linguists, reviewers, and engineers handling translation, media localisation, and linguistic QA across 40+ language pairs.",
    type: "website",
  },
};

export default function LocalizationServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
