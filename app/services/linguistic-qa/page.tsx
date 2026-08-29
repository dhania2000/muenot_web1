import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function LinguisticQaPage() {
  const service = await getServiceDetail("linguistic-qa");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("linguistic-qa");
  return <ServicePage service={service} related={related} />;
}
