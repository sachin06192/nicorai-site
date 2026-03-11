import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Data Engineering & BI — NicorAI",
  description:
    "Data governance, data warehousing, integration, report automation, and visualization services that turn raw data into strategic business intelligence.",
};

const offerings = [
  {
    title: "Data Governance",
    description:
      "Establish clear data ownership, quality standards, lineage tracking, and access policies. We help you build a governance framework that ensures your data is accurate, secure, and compliant.",
  },
  {
    title: "Data Warehouse",
    description:
      "Modern cloud data warehouses on Snowflake, BigQuery, or Redshift — designed for performance, scalability, and cost efficiency. We handle schema design, ETL pipelines, and optimization.",
  },
  {
    title: "Data Integration",
    description:
      "Connect disparate data sources — ERPs, CRMs, IoT sensors, APIs, and flat files — into a unified, reliable data platform with real-time and batch ingestion pipelines.",
  },
  {
    title: "Report Automation",
    description:
      "Eliminate manual reporting with automated pipelines that generate, schedule, and distribute business reports. Free your team from spreadsheet work and focus on analysis.",
  },
  {
    title: "Data Visualization",
    description:
      "Interactive dashboards and self-service analytics built on Power BI, Tableau, or Looker. We design visualizations that make complex data intuitive and actionable for every stakeholder.",
  },
];

export default function DataEngineeringBIPage() {
  return (
    <>
      <HeroSection
        title="Data Engineering & Business Intelligence"
        subtitle="Transform raw data into a strategic asset with modern data infrastructure and insightful analytics."
        ctaText="Unlock Your Data"
        ctaLink="/contact"
      />

      {/* Offerings */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              Our Data Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              From raw data to boardroom-ready insights — we cover the full data
              value chain.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-gray-200 p-8 hover:border-[#2563eb] hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#151f26]">
                  {o.title}
                </h3>
                <p className="mt-3 text-gray-600">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
                Why Data Engineering Matters
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                AI and analytics are only as good as the data they run on. Poor
                data quality, fragmented sources, and manual processes cost
                organizations millions in lost productivity and missed
                opportunities.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Our data engineering team builds the foundation that makes
                advanced analytics and AI possible — reliable pipelines, clean
                data, and governed access for every team in your organization.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10x", label: "Faster reporting" },
                { value: "99.9%", label: "Data pipeline uptime" },
                { value: "60%", label: "Reduction in manual data work" },
                { value: "100%", label: "Data lineage visibility" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white border border-gray-200 p-6 text-center"
                >
                  <p className="text-3xl font-extrabold text-[#2563eb]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Become Data-Driven?"
        subtitle="Let us design a data architecture that scales with your business and fuels smarter decisions."
        ctaText="Talk to a Data Expert"
        ctaLink="/contact"
      />
    </>
  );
}
