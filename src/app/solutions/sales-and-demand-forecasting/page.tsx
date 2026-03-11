import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sales & Demand Forecasting Solution — NicorAI",
  description:
    "AI-powered demand forecasting that anticipates market trends, optimizes inventory, and helps sales teams focus on the highest-value opportunities.",
};

const steps = [
  {
    number: "01",
    title: "Historical Data Analysis",
    description:
      "We aggregate and cleanse your sales history, CRM data, market indicators, and external signals like seasonality, promotions, and economic trends.",
  },
  {
    number: "02",
    title: "Model Development",
    description:
      "Our data scientists build ensemble forecasting models that combine statistical methods with deep learning to capture complex demand patterns and non-linear relationships.",
  },
  {
    number: "03",
    title: "Scenario Simulation",
    description:
      "The platform lets you run what-if scenarios — testing the impact of price changes, marketing campaigns, new product launches, or supply disruptions on projected demand.",
  },
  {
    number: "04",
    title: "Actionable Forecasts",
    description:
      "Forecasts are delivered at the granularity you need — by SKU, region, channel, or customer segment — and integrated directly into your planning and replenishment systems.",
  },
];

const benefits = [
  {
    title: "Improved Forecast Accuracy",
    description:
      "AI models typically improve forecast accuracy by 20-40% over traditional methods, reducing both stockouts and overstock situations.",
  },
  {
    title: "Optimized Inventory",
    description:
      "Right-size inventory levels across your network, freeing up working capital while maintaining service levels that satisfy customers.",
  },
  {
    title: "Revenue Growth",
    description:
      "Better demand visibility enables proactive selling, targeted promotions, and optimal pricing strategies that capture more revenue.",
  },
  {
    title: "Supply Chain Agility",
    description:
      "Early demand signals give procurement and logistics teams the lead time they need to adapt, reducing expediting costs and supply risk.",
  },
];

export default function SalesAndDemandForecastingPage() {
  return (
    <>
      <HeroSection
        title="Sales & Demand Forecasting"
        subtitle="Predictive analytics that anticipate market demand, optimize inventory, and empower data-driven commercial decisions."
        ctaText="Forecast Smarter"
        ctaLink="/contact"
      />

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              The Challenge
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Inaccurate demand forecasts create a cascade of costly problems.
              Overestimate demand and you tie up capital in unsold inventory.
              Underestimate it and you lose sales, disappoint customers, and
              cede market share to competitors. Traditional forecasting methods
              based on spreadsheets and simple moving averages cannot capture
              the complexity of modern markets — where demand is shaped by
              dozens of interconnected variables that change rapidly.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              How It Works
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#2563eb] flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#151f26]">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              Key Benefits
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-gray-200 p-8 hover:border-[#2563eb] hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-[#151f26]">
                  {b.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Know What Your Market Wants — Before It Does"
        subtitle="Our AI forecasting solution turns your data into a competitive advantage."
        ctaText="Talk to Our Team"
        ctaLink="/contact"
      />
    </>
  );
}
