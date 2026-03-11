import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Web + Mobile Development — NicorAI",
  description: "Enterprise software, mobile apps, SaaS solutions, and application modernization.",
};

export default function Page() {
  const html = loadHtml("service-web");
  return <PageContent html={html} template="service-details" theme="blue" />;
}
