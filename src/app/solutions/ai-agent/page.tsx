import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "AI Agent — NicorAI",
  description: "Intelligent AI agents that automate complex business processes.",
};

export default function Page() {
  const html = loadHtml("solution-ai-agent");
  return <PageContent html={html} template="solution" theme="blue" />;
}
