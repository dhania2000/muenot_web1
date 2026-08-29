import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function ArtProductionPage() {
  const service = await getServiceDetail("art-production");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("art-production");
  return <ServicePage service={service} related={related} />;
}
