import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function ContentProductionPage() {
  return (
    <ServicePage
      service={getService("content-production")}
      related={getRelatedServices("content-production")}
    />
  );
}
