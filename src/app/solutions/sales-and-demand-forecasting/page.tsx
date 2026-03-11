import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import PageContent from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Sales and Demand Forecasting — NicorAI",
  description: "Accurate demand forecasting powered by machine learning.",
};

export default function Page() {
  const html = loadHtml("solution-sales");
  return <PageContent html={html} template="solution" theme="blue" />;
}
