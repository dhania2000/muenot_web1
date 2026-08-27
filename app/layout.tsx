import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MotionProvider } from "@/components/ui/motion-provider";
import { AnimatedBackground } from "@/components/ui/animated-background";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b4f9e",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muenot.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muenot | AI Data Services & E-Learning Solutions",
    template: "%s | Muenot",
  },
  description:
    "Comprehensive AI Data Services, E-Learning Solutions, Localization, Technology, and Publishing services. Transform your business with our expert solutions.",
  keywords: [
    "AI Data Services",
    "E-Learning",
    "Data Annotation",
    "Localization",
    "Content Development",
    "Technology Solutions",
    "Machine Learning",
    "Training Data",
    "Language Services",
  ],
  authors: [{ name: "Muenot" }],
  creator: "Muenot",
  publisher: "Muenot",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/icon.png"],
    apple: ["/icon.png"],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Muenot",
    title: "Muenot | AI Data Services & E-Learning Solutions",
    description:
      "Comprehensive AI Data Services, E-Learning Solutions, Localization, Technology, and Publishing services. Transform your business with our expert solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muenot - AI Data Services & E-Learning Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muenot | AI Data Services & E-Learning Solutions",
    description:
      "Comprehensive AI Data Services, E-Learning Solutions, Localization, Technology, and Publishing services.",
    images: ["/og-image.png"],
    creator: "@muenot",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, sora.variable, "bg-background")}
    >
      <head>
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className="font-sans min-h-screen bg-transparent text-foreground">
        <AnimatedBackground />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
