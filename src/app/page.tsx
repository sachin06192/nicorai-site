import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "NicorAI | AI & Digital Transformation Solutions for Smarter Business",
  description: "NicorAI helps organizations harness the power of AI and digital innovation to boost productivity, sustainability, and long-term growth.",
};

export default function Page() {
  const html = loadHtml("home");
  return <PageContent html={html} template="home" theme="blue" />;
}
