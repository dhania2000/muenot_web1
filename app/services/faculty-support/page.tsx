import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function FacultySupportPage() {
  const service = await getServiceDetail("faculty-support");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("faculty-support");
  return <ServicePage service={service} related={related} />;
}
