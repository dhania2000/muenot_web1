import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Services | Digital Engineering | Muenot",
  description:
    "Product engineering, cloud & DevOps, automation, data platforms, QA engineering and IT consulting delivered by senior squads embedded in your workflow.",
  keywords:
    "technology services, software development, cloud devops, automation, data platforms, QA engineering, IT consulting, digital engineering",
  openGraph: {
    title: "Technology Services | Digital Engineering",
    description:
      "Senior engineering squads that ship product and keep it running in production.",
    type: "website",
  },
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
