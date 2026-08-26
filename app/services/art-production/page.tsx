import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function ArtProductionPage() {
  return (
    <ServicePage
      service={getService("art-production")}
      related={getRelatedServices("art-production")}
    />
  );
}
