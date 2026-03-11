import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Approach — NicorAI",
  description: "Discover our proven approach to AI and digital transformation projects.",
};

export default function Page() {
  const html = loadHtml("approach");
  return <PageContent html={html} template="approach" theme="light" />;
}
