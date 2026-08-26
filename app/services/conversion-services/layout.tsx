import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversion Services | Document & Content Conversion | Muenot",
  description: "Professional conversion services including PDF, XML, ePub, HTML, Word conversion, and LMS data porting. Transform any format with quality assured processing.",
  keywords: "conversion services, PDF conversion, XML conversion, ePub conversion, HTML conversion, Word conversion, LMS data porting, document conversion, format transformation",
  openGraph: {
    title: "Conversion Services | Document & Content Conversion",
    description: "Professional document and content conversion services for all major formats.",
    type: "website",
  },
};

export default function ConversionServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
