import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Data Deletion | Muenot",
  description:
    "Request the deletion of your personal data held by Muenot. Learn what data we store, how to submit a deletion request, and what to expect after you submit one.",
  keywords: [
    "user data deletion",
    "delete my data",
    "data removal request",
    "muenot privacy",
    "personal data deletion",
    "GDPR data deletion",
  ],
  openGraph: {
    title: "User Data Deletion | Muenot",
    description:
      "Request the deletion of your personal data held by Muenot and learn how the process works.",
    type: "website",
  },
};

export default function UserDataDeletionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
