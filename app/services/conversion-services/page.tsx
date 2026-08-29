import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function ConversionServicesPage() {
  const service = await getServiceDetail("conversion-services");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("conversion-services");
  return <ServicePage service={service} related={related} />;
}
