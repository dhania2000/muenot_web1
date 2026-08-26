import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Muenot for AI Data Services, E-Learning Solutions, and more. We're here to help transform your business.",
  openGraph: {
    title: "Contact Us | Muenot",
    description:
      "Get in touch with Muenot for AI Data Services, E-Learning Solutions, and more. We're here to help transform your business.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Muenot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Muenot",
    description:
      "Get in touch with Muenot for AI Data Services, E-Learning Solutions, and more.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
