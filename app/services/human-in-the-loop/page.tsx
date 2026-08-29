import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Human In The Loop | Muenot",
  description: "Managed human in the loop delivery pods with documented quality gates, SLAs and a named delivery manager.",
};

export default async function HumanInTheLoopPage() {
  const service = await getServiceDetail("human-in-the-loop");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("human-in-the-loop");
  return <ServicePage service={service} related={related} />;
}
