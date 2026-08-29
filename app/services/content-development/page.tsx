import { notFound } from "next/navigation";
import { ContentDevelopmentPage } from "@/components/services/content-development-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function ContentDevelopmentRoute() {
  const service = await getServiceDetail("content-development");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("content-development");
  return <ContentDevelopmentPage service={service} related={related} />;
}
