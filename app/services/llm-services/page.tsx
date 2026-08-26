import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Llm Services | Muenot",
  description: "Managed llm services delivery pods with documented quality gates, SLAs and a named delivery manager.",
};

export default function LlmServicesPage() {
  return (
    <ServicePage
      service={getService("llm-services")}
      related={getRelatedServices("llm-services")}
    />
  );
}
