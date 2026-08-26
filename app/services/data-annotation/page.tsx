import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Annotation | Muenot",
  description: "Managed data annotation delivery pods with documented quality gates, SLAs and a named delivery manager.",
};

export default function DataAnnotationPage() {
  return (
    <ServicePage
      service={getService("data-annotation")}
      related={getRelatedServices("data-annotation")}
    />
  );
}
