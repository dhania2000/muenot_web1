import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function ContentOperationsPage() {
  const service = await getServiceDetail("content-operations");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("content-operations");
  return <ServicePage service={service} related={related} />;
}
