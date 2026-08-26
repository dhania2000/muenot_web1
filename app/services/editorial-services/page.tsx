import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function EditorialServicesPage() {
  return (
    <ServicePage
      service={getService("editorial-services")}
      related={getRelatedServices("editorial-services")}
    />
  );
}
