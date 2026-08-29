import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function SubtitlingPage() {
  const service = await getServiceDetail("subtitling");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("subtitling");
  return <ServicePage service={service} related={related} />;
}
