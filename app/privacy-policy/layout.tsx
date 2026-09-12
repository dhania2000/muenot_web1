import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Muenot",
  description:
    "Read Muenot's Privacy Policy to understand what personal data we collect, how we use and protect it, who we share it with, and the rights you have over your information.",
  keywords: [
    "muenot privacy policy",
    "privacy policy",
    "data protection",
    "personal data",
    "cookies policy",
    "your privacy rights",
  ],
  openGraph: {
    title: "Privacy Policy | Muenot",
    description:
      "Understand what personal data Muenot collects, how we use and protect it, and the rights you have over your information.",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
