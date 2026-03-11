import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Contact Us — NicorAI",
  description: "Get in touch with NicorAI. Let us help you transform your business with AI and digital innovation.",
};

export default function Page() {
  const html = loadHtml("contact");
  return <PageContent html={html} template="contact" theme="light" />;
}
