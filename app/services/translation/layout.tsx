import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Translation Services | Professional Localization | Muenot",
  description: "Professional translation services across 100+ languages. Document localization, website translation, app localization, marketing content, legal documents, and technical manuals.",
  keywords: "translation services, document localization, website localization, app localization, marketing translation, legal translation, technical translation, multilingual services",
  openGraph: {
    title: "Translation Services | Professional Localization",
    description: "Connect globally with professional translation services across 100+ languages.",
    type: "website",
  },
};

export default function TranslationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
