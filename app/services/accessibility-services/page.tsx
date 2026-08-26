import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function AccessibilityServicesPage() {
  return (
    <ServicePage
      service={getService("accessibility-services")}
      related={getRelatedServices("accessibility-services")}
    />
  );
}
