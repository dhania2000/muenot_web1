import { notFound } from "next/navigation";
import { TechnologyPage } from "@/components/services/technology-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function TechnologyRoute() {
  const service = await getServiceDetail("technology");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("technology");
  return <TechnologyPage service={service} related={related} />;
}
