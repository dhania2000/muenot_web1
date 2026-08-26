import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subtitling Services | Professional Video Subtitles | Muenot",
  description: "Professional subtitling services including closed captions, multilingual subtitles, SDH, forced narratives, and custom styling. ADA and WCAG compliant for all platforms.",
  keywords: "subtitling services, closed captions, multilingual subtitles, SDH subtitles, forced narratives, subtitle styling, video accessibility, subtitle sync",
  openGraph: {
    title: "Subtitling Services | Professional Video Subtitles",
    description: "Professional subtitling services that make your video content accessible and engaging for global audiences.",
    type: "website",
  },
};

export default function SubtitlingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
