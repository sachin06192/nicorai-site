import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "About — NicorAI",
  description: "Learn about NicorAI, our team, values, and offices across Canada.",
};

export default function Page() {
  const html = loadHtml("about");
  return <PageContent html={html} template="about" theme="light" />;
}
