import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Data Engineering and BI — NicorAI",
  description: "Data governance, warehousing, integration, and business intelligence solutions.",
};

export default function Page() {
  const html = loadHtml("service-data");
  return <PageContent html={html} template="service-details" theme="blue" />;
}
