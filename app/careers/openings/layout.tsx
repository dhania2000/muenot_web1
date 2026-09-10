import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Open Positions | Muenot Careers",
  description:
    "Browse current job openings at Muenot and apply directly through our careers portal — without leaving the Muenot website.",
  alternates: {
    canonical: "/careers/openings",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b4f9e",
};

export default function CareersOpeningsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
