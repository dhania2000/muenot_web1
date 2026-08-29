import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ai Analytics | Muenot",
  description: "Managed ai analytics delivery pods with documented quality gates, SLAs and a named delivery manager.",
};

export default async function AiAnalyticsPage() {
  const service = await getServiceDetail("ai-analytics");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("ai-analytics");
  return <ServicePage service={service} related={related} />;
}
