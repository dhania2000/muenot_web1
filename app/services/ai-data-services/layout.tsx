import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Data Services | Training Data Pipelines | Muenot",
  description:
    "Managed annotation, curation, RLHF, and evaluation pipelines with documented quality gates and audit trails on every batch. Production-ready training data at scale.",
  keywords:
    "AI data services, data annotation, data curation, model training, RLHF, human in the loop, LLM evaluation, training data pipeline",
  openGraph: {
    title: "AI Data Services | Training Data Pipelines",
    description:
      "Production-grade annotation, curation, and evaluation pods with quality gates on every batch.",
    type: "website",
  },
};

export default function AiDataServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
