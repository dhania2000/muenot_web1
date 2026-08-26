import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voiceover Services | Professional Voice Talent | Muenot",
  description: "Professional voiceover services including dubbing, narration, localized audio, character voices, commercial VO, and e-learning narration. Native voice talent in 100+ languages.",
  keywords: "voiceover services, dubbing, narration, voice acting, commercial voiceover, e-learning voiceover, character voices, audio localization",
  openGraph: {
    title: "Voiceover Services | Professional Voice Talent",
    description: "Professional voice talent that connects with your audience in 100+ languages.",
    type: "website",
  },
};

export default function VoiceoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
