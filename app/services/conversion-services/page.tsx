import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function ConversionServicesPage() {
  return (
    <ServicePage
      service={getService("conversion-services")}
      related={getRelatedServices("conversion-services")}
    />
  );
}
