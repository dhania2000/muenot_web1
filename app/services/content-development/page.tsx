import { ContentDevelopmentPage } from "@/components/services/content-development-page";
import { getRelatedServices, getService } from "@/lib/services-data";

export default function ContentDevelopmentRoute() {
  return (
    <ContentDevelopmentPage
      service={getService("content-development")}
      related={getRelatedServices("content-development")}
    />
  );
}
