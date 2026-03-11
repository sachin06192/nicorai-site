import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Production Planning Solution — NicorAI",
  description:
    "AI-optimized production scheduling and resource allocation that maximizes throughput, reduces waste, and adapts to changing conditions in real time.",
};

const steps = [
  {
    number: "01",
    title: "Data Integration",
    description:
      "We connect to your ERP, MES, supply chain systems, and historical production data to build a complete picture of capacities, constraints, and demand signals.",
  },
  {
    number: "02",
    title: "Constraint Modeling",
    description:
      "Our team models your production constraints — machine capacities, labor availability, material lead times, changeover costs, and quality requirements.",
  },
  {
    number: "03",
    title: "AI Optimization",
    description:
      "Advanced optimization algorithms evaluate millions of scheduling scenarios to find the plan that maximizes throughput while minimizing costs and respecting all constraints.",
  },
  {
    number: "04",
    title: "Dynamic Replanning",
    description:
      "When conditions change — rush orders, equipment breakdowns, or supply delays — the system automatically recalculates the optimal plan and alerts your team.",
  },
];

const benefits = [
  {
    title: "Higher Throughput",
    description:
      "Optimized sequencing and resource allocation increase production output by 10-20% without additional capital investment.",
  },
  {
    title: "Reduced Changeover Time",
    description:
      "Intelligent job sequencing minimizes changeovers and setup times, keeping machines running productively for longer.",
  },
  {
    title: "Better On-Time Delivery",
    description:
      "Accurate, constraint-aware scheduling improves on-time delivery rates to 95%+ by preventing overcommitment and identifying bottlenecks early.",
  },
  {
    title: "Lower Inventory Costs",
    description:
      "Synchronized production and demand planning reduces work-in-progress inventory and raw material buffers by up to 30%.",
  },
];

export default function ProductionPlanningPage() {
  return (
    <>
      <HeroSection
        title="Production Planning"
        subtitle="AI-powered scheduling and resource optimization that maximizes throughput, minimizes waste, and adapts to change in real time."
        ctaText="Optimize Your Production"
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
              Production planning in modern manufacturing is a combinatorial
              challenge that spreadsheets and legacy systems cannot solve
              effectively. Planners juggle hundreds of orders, dozens of
              machines, shifting priorities, and unpredictable disruptions —
              often relying on experience and intuition rather than data. The
              result is suboptimal schedules, missed deadlines, excess
              inventory, and wasted capacity.
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
        title="Plan Smarter, Produce More"
        subtitle="Replace guesswork with AI-driven production planning that adapts to your reality."
        ctaText="See It in Action"
        ctaLink="/contact"
      />
    </>
  );
}
