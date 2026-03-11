import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Production Planning — NicorAI",
  description: "AI-optimized production planning and scheduling solutions.",
};

export default function Page() {
  const html = loadHtml("solution-production");
  return <PageContent html={html} template="solution" theme="blue" />;
}
