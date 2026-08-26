import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty Support Services | E-Learning Educator Support | Muenot",
  description: "Dedicated faculty support for online teaching including course setup, LMS integration, training, technical support, resource management, and analytics. Empowering educators for success.",
  keywords: "faculty support, educator support, course setup, LMS integration, training, technical support, resource management, learning analytics, e-learning support",
  openGraph: {
    title: "Faculty Support Services | E-Learning Educator Support",
    description: "Dedicated support services that help educators focus on teaching, not technology.",
    type: "website",
  },
};

export default function FacultySupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
