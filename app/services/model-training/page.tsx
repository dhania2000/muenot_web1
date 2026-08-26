import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Model Training | Muenot",
  description: "Managed model training delivery pods with documented quality gates, SLAs and a named delivery manager.",
};

export default function ModelTrainingPage() {
  return (
    <ServicePage
      service={getService("model-training")}
      related={getRelatedServices("model-training")}
    />
  );
}
