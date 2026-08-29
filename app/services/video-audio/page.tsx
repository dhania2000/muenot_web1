import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServiceDetail, getRelatedServiceDetails } from "@/lib/content";

export default async function VideoAudioPage() {
  const service = await getServiceDetail("video-audio");
  if (!service) notFound();
  const related = await getRelatedServiceDetails("video-audio");
  return <ServicePage service={service} related={related} />;
}
