import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Predictive Maintenance — NicorAI",
  description: "AI-powered predictive maintenance to reduce downtime and costs.",
};

export default function Page() {
  const html = loadHtml("solution-predictive");
  return <PageContent html={html} template="solution" theme="blue" />;
}
