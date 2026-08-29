import type { Metadata } from "next";
import { getSection } from "@/lib/content";
import { ContactPageClient } from "@/components/contact/contact-page-client";

export const metadata: Metadata = {
  title: "Contact Muenot | Start a Conversation",
  description:
    "Share your requirement and a Muenot delivery lead will respond within one business day with next steps.",
};

export default async function ContactPage() {
  const content = await getSection("contact_page");
  return <ContactPageClient content={content} />;
}
