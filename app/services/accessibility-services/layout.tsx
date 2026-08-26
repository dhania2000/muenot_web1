import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Services | WCAG Compliance & Remediation | Muenot",
  description: "Professional accessibility services including PPT, PDF, audio, and video accessibility, testing, and remediation. WCAG 2.1 compliant solutions for inclusive digital content.",
  keywords: "accessibility services, WCAG compliance, PDF accessibility, PPT accessibility, video accessibility, audio accessibility, accessibility testing, remediation, Section 508, ADA compliance",
  openGraph: {
    title: "Accessibility Services | WCAG Compliance & Remediation",
    description: "Make your digital content accessible to everyone with our comprehensive accessibility services.",
    type: "website",
  },
};

export default function AccessibilityServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
