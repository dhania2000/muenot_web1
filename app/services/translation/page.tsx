import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function TranslationPage() {
  const service = await getServiceDetail("translation");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("translation");
  return <ServicePage service={service} related={related} />;
}
