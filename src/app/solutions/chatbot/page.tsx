import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Chatbot — NicorAI",
  description: "Custom chatbot solutions for customer service and internal operations.",
};

export default function Page() {
  const html = loadHtml("solution-chatbot");
  return <PageContent html={html} template="solution" theme="blue" />;
}
