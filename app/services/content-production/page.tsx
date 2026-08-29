import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function ContentProductionPage() {
  const service = await getServiceDetail("content-production");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("content-production");
  return <ServicePage service={service} related={related} />;
}
