import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Llm Services | Muenot",
  description: "Managed llm services delivery pods with documented quality gates, SLAs and a named delivery manager.",
};

export default async function LlmServicesPage() {
  const service = await getServiceDetail("llm-services");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("llm-services");
  return <ServicePage service={service} related={related} />;
}
