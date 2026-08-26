import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function VoiceoverPage() {
  return (
    <ServicePage
      service={getService("voiceover")}
      related={getRelatedServices("voiceover")}
    />
  );
}
