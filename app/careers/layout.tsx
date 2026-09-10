import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Muenot - Join Our Team",
  description:
    "Explore career opportunities at Muenot. Join a growing team delivering AI data, e-learning, localization, technology and publishing services. View and apply to open positions on our careers portal.",
  keywords: [
    "muenot careers",
    "jobs at muenot",
    "muenot hiring",
    "AI data jobs",
    "localization careers",
    "e-learning jobs",
    "technology careers India",
    "Jaipur jobs",
    "work at muenot",
    "open positions",
  ],
  openGraph: {
    title: "Careers | Muenot",
    description:
      "Join a growing team delivering enterprise data, learning and localization services. View open roles and apply today.",
    type: "website",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
