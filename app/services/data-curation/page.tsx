import { notFound } from "next/navigation";
import { DataCurationPage as DataCurationPageComponent } from "@/components/services/data-curation-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Curation | Muenot",
  description: "Managed data curation delivery pods with documented quality gates, SLAs and a named delivery manager.",
};

export default async function DataCurationPage() {
  const service = await getServiceDetail("data-curation");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("data-curation");
  return <DataCurationPageComponent service={service} related={related} />;
}
