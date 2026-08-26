import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Analytics | Muenot",
  description: "Managed ai analytics delivery pods with documented quality gates, SLAs and a named delivery manager.",
};

export default function AiAnalyticsPage() {
  return (
    <ServicePage
      service={getService("ai-analytics")}
      related={getRelatedServices("ai-analytics")}
    />
  );
}
