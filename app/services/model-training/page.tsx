import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Model Training | Muenot",
  description: "Managed model training delivery pods with documented quality gates, SLAs and a named delivery manager.",
};

export default async function ModelTrainingPage() {
  const service = await getServiceDetail("model-training");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("model-training");
  return <ServicePage service={service} related={related} />;
}
