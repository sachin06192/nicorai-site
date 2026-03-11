import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Automated Quality Control — NicorAI",
  description: "Computer vision and AI for automated quality inspection.",
};

export default function Page() {
  const html = loadHtml("solution-quality");
  return <PageContent html={html} template="solution" theme="blue" />;
}
