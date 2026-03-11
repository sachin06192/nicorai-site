import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Artificial Intelligence — NicorAI",
  description: "Custom AI solutions including machine learning, computer vision, NLP, and generative AI.",
};

export default function Page() {
  const html = loadHtml("service-ai");
  return <PageContent html={html} template="service-details" theme="blue" />;
}
