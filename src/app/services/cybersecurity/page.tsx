import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Cybersecurity — NicorAI",
  description: "Cyberattack preparedness, compliance, and AI-powered security solutions.",
};

export default function Page() {
  const html = loadHtml("service-cyber");
  return <PageContent html={html} template="service-details" theme="blue" />;
}
