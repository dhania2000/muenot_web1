import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function SubtitlingPage() {
  return (
    <ServicePage
      service={getService("subtitling")}
      related={getRelatedServices("subtitling")}
    />
  );
}
