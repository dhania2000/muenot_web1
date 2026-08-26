import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Curation | Muenot",
  description: "Managed data curation delivery pods with documented quality gates, SLAs and a named delivery manager.",
};

export default function DataCurationPage() {
  return (
    <ServicePage
      service={getService("data-curation")}
      related={getRelatedServices("data-curation")}
    />
  );
}
