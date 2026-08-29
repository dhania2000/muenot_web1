import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function AccessibilityServicesPage() {
  const service = await getServiceDetail("accessibility-services");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("accessibility-services");
  return <ServicePage service={service} related={related} />;
}
