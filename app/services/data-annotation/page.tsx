import { notFound } from "next/navigation";
import { DataAnnotationPage as DataAnnotationServicePage } from "@/components/services/data-annotation-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Annotation | Muenot",
  description: "Expert image, video, text, audio and 3D annotation delivered by dedicated pods with documented quality gates, SLAs and a named delivery manager.",
};

export default async function DataAnnotationPage() {
  const service = await getServiceDetail("data-annotation");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("data-annotation");
  return <DataAnnotationServicePage service={service} related={related} />;
}
