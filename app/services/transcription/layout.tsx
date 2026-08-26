import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transcription Services | Audio & Video to Text | Muenot",
  description: "Professional transcription services for audio, video, meetings, interviews, and podcasts. Fast turnaround, 99%+ accuracy, multilingual support across all industries.",
  keywords: "transcription services, audio transcription, video transcription, meeting notes, interview transcripts, podcast transcription, multilingual transcription",
  openGraph: {
    title: "Transcription Services | Audio & Video to Text",
    description: "Professional transcription services with fast turnaround and 99%+ accuracy.",
    type: "website",
  },
};

export default function TranscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
