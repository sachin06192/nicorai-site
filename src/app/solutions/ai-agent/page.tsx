import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AI Agent Solution — NicorAI",
  description:
    "Deploy autonomous AI agents that handle complex workflows, customer interactions, and decision-making processes to boost efficiency and reduce costs.",
};

const steps = [
  {
    number: "01",
    title: "Workflow Mapping",
    description:
      "We analyze your existing processes to identify tasks that can be automated or augmented by an AI agent — from customer inquiries to internal operations.",
  },
  {
    number: "02",
    title: "Agent Design",
    description:
      "We architect the agent's reasoning engine, tool integrations, knowledge base, and guardrails to ensure accurate, safe, and contextually appropriate responses.",
  },
  {
    number: "03",
    title: "Training & Testing",
    description:
      "The agent is trained on your data and extensively tested against real-world scenarios, edge cases, and failure modes before any production exposure.",
  },
  {
    number: "04",
    title: "Deployment & Monitoring",
    description:
      "We deploy with human-in-the-loop safeguards, real-time performance monitoring, and continuous learning loops that improve the agent over time.",
  },
];

const benefits = [
  {
    title: "24/7 Availability",
    description:
      "AI agents work around the clock, handling requests and completing tasks without breaks, holidays, or shift changes.",
  },
  {
    title: "Consistent Quality",
    description:
      "Every interaction follows your defined standards and policies, eliminating variability and reducing errors.",
  },
  {
    title: "Scalable Operations",
    description:
      "Handle thousands of simultaneous workflows without proportional increases in headcount or infrastructure costs.",
  },
  {
    title: "Actionable Insights",
    description:
      "Every agent interaction generates data that reveals patterns, bottlenecks, and opportunities for further optimization.",
  },
];

export default function AIAgentPage() {
  return (
    <>
      <HeroSection
        title="AI Agent"
        subtitle="Autonomous AI agents that execute complex workflows, interact with customers, and make intelligent decisions on your behalf."
        ctaText="Explore AI Agents"
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
              Businesses spend enormous resources on repetitive, rule-based
              tasks — answering customer questions, processing documents,
              routing requests, and coordinating across systems. Human teams are
              limited by working hours, cognitive load, and the volume of
              requests they can handle. As organizations scale, these manual
              processes become bottlenecks that slow growth and increase costs.
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
        title="Deploy Your AI Agent"
        subtitle="Let us build an AI agent tailored to your workflows, systems, and business rules."
        ctaText="Get Started"
        ctaLink="/contact"
      />
    </>
  );
}
