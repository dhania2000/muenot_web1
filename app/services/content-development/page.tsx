import { ServicePage } from "@/components/services/service-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function ContentDevelopmentPage() {
  return (
    <ServicePage
      service={getService("content-development")}
      related={getRelatedServices("content-development")}
    />
  );
}
