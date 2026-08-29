import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function VoiceoverPage() {
  const service = await getServiceDetail("voiceover");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("voiceover");
  return <ServicePage service={service} related={related} />;
}
