import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function TranscriptionPage() {
  return (
    <ServicePage
      service={getService("transcription")}
      related={getRelatedServices("transcription")}
    />
  );
}
