import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function TranslationPage() {
  return (
    <ServicePage
      service={getService("translation")}
      related={getRelatedServices("translation")}
    />
  );
}
