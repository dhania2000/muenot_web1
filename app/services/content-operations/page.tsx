import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function ContentOperationsPage() {
  return (
    <ServicePage
      service={getService("content-operations")}
      related={getRelatedServices("content-operations")}
    />
  );
}
