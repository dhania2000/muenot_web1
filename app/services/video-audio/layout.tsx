import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video & Audio Production Services | E-Learning Multimedia | Muenot",
  description: "Professional video and audio production for e-learning including video editing, video creation, audio recording, voiceover services, animation, and motion graphics. Immersive learning experiences.",
  keywords: "video production, audio production, video editing, voiceover, animation, motion graphics, e-learning video, educational multimedia",
  openGraph: {
    title: "Video & Audio Production Services | E-Learning Multimedia",
    description: "Professional multimedia production services that create immersive learning experiences.",
    type: "website",
  },
};

export default function VideoAudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
