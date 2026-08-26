import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Human In The Loop | Muenot",
  description: "Managed human in the loop delivery pods with documented quality gates, SLAs and a named delivery manager.",
};

export default function HumanInTheLoopPage() {
  return (
    <ServicePage
      service={getService("human-in-the-loop")}
      related={getRelatedServices("human-in-the-loop")}
    />
  );
}
