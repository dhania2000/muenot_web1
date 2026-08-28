import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publishing Services | Editorial & Accessibility | Muenot",
  description:
    "Editorial, composition, conversion, and accessibility remediation for publishers moving large backlists into compliant digital formats — EPUB3, XML, and WCAG-aligned delivery.",
  keywords:
    "publishing services, editorial services, copy editing, accessibility remediation, EPUB3, XML conversion, backlist conversion, content operations, WCAG, European Accessibility Act",
  openGraph: {
    title: "Publishing Services | Editorial & Accessibility",
    description:
      "Copy editing, composition, conversion, and accessibility remediation for digital catalogues at backlist scale.",
    type: "website",
  },
};

export default function PublishingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
