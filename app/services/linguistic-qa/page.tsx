import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function LinguisticQaPage() {
  return (
    <ServicePage
      service={getService("linguistic-qa")}
      related={getRelatedServices("linguistic-qa")}
    />
  );
}
