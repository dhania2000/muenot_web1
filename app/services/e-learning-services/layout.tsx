import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Learning Services | Course Production & Design | Muenot",
  description:
    "Instructional designers, media teams, and native linguists turning learning objectives into accessible courses — from curriculum design to LMS launch in 40+ languages.",
  keywords:
    "e-learning services, course production, instructional design, content development, SCORM, xAPI, LMS, accessible learning, faculty support",
  openGraph: {
    title: "E-Learning Services | Course Production & Design",
    description:
      "From curriculum design to LMS launch — accessible courses built to hold attention and pass review.",
    type: "website",
  },
};

export default function ELearningServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
