import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function VideoAudioPage() {
  return (
    <ServicePage
      service={getService("video-audio")}
      related={getRelatedServices("video-audio")}
    />
  );
}
