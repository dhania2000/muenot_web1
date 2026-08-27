import { DataAnnotationPage as DataAnnotationServicePage } from "@/components/services/data-annotation-page";
import { getRelatedServices, getService } from "@/lib/services-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Annotation | Muenot",
  description: "Expert image, video, text, audio and 3D annotation delivered by dedicated pods with documented quality gates, SLAs and a named delivery manager.",
};

export default function DataAnnotationPage() {
  return (
    <DataAnnotationServicePage
      service={getService("data-annotation")}
      related={getRelatedServices("data-annotation")}
    />
  );
}
