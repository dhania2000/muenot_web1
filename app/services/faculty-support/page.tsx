import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function FacultySupportPage() {
  return (
    <ServicePage
      service={getService("faculty-support")}
      related={getRelatedServices("faculty-support")}
    />
  );
}
