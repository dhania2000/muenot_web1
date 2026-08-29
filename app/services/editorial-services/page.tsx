import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function EditorialServicesPage() {
  const service = await getServiceDetail("editorial-services");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("editorial-services");
  return <ServicePage service={service} related={related} />;
}
