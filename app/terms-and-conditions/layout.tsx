import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Muenot",
  description:
    "Read Muenot's Terms & Conditions covering the use of our website and services, intellectual property, payments, liability, and the responsibilities of both parties.",
  keywords: [
    "muenot terms and conditions",
    "terms of service",
    "terms of use",
    "website terms",
    "service agreement",
    "legal terms",
  ],
  openGraph: {
    title: "Terms & Conditions | Muenot",
    description:
      "Understand the terms that govern the use of Muenot's website and services, including intellectual property, payments, and liability.",
    type: "website",
  },
};

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
