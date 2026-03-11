import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Chatbot Solution — NicorAI",
  description:
    "Intelligent conversational AI chatbots powered by large language models for customer support, sales enablement, and internal knowledge management.",
};

const steps = [
  {
    number: "01",
    title: "Knowledge Ingestion",
    description:
      "We ingest your documentation, FAQs, product catalogs, and support history to build a rich knowledge base the chatbot draws from.",
  },
  {
    number: "02",
    title: "Conversational Design",
    description:
      "Our team designs conversation flows, tone of voice, escalation paths, and multi-language support aligned with your brand and customer expectations.",
  },
  {
    number: "03",
    title: "LLM Integration",
    description:
      "We implement retrieval-augmented generation (RAG) pipelines that ground the chatbot's responses in your verified data, minimizing hallucinations and maximizing accuracy.",
  },
  {
    number: "04",
    title: "Channel Deployment",
    description:
      "Deploy across your website, mobile app, Slack, Teams, or any messaging platform — with unified analytics and conversation history.",
  },
];

const benefits = [
  {
    title: "Instant Response Times",
    description:
      "Customers get accurate answers in seconds, not minutes. Reduce wait times and improve satisfaction scores across every channel.",
  },
  {
    title: "Cost Reduction",
    description:
      "Automate up to 80% of routine inquiries, freeing your support team to focus on complex, high-value interactions.",
  },
  {
    title: "Always On-Brand",
    description:
      "Every response follows your brand guidelines, compliance requirements, and approved messaging — consistently and at scale.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Built-in analytics track resolution rates, user satisfaction, and common queries, enabling data-driven improvements over time.",
  },
];

export default function ChatbotPage() {
  return (
    <>
      <HeroSection
        title="Chatbot"
        subtitle="Intelligent conversational interfaces powered by large language models that transform customer engagement and support operations."
        ctaText="Build Your Chatbot"
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
              Customers expect instant, accurate responses at any time of day.
              Traditional chatbots frustrate users with rigid decision trees and
              scripted answers that fail to address real questions. Meanwhile,
              support teams struggle with ticket volumes, repetitive queries,
              and the pressure to respond faster without sacrificing quality.
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
        title="Transform Your Customer Experience"
        subtitle="Deploy an AI chatbot that truly understands your customers and your business."
        ctaText="Get Started"
        ctaLink="/contact"
      />
    </>
  );
}
