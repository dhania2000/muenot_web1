import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function TranscriptionPage() {
  const service = await getServiceDetail("transcription");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("transcription");
  return <ServicePage service={service} related={related} />;
}
