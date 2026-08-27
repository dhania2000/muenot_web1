import { TechnologyPage } from "@/components/services/technology-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function TechnologyRoute() {
  return (
    <TechnologyPage
      service={getService("technology")}
      related={getRelatedServices("technology")}
    />
  );
}
