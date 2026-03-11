import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Artificial Intelligence Services — NicorAI",
  description:
    "Machine learning, computer vision, NLP, generative AI, and MLOps services to help your business harness the full potential of artificial intelligence.",
};

const offerings = [
  {
    title: "Machine Learning",
    description:
      "Custom ML models for classification, regression, clustering, and recommendation systems. We handle the full lifecycle — from feature engineering and model training to deployment and monitoring.",
  },
  {
    title: "Computer Vision",
    description:
      "Image and video analysis solutions including object detection, defect inspection, facial recognition, and document processing powered by state-of-the-art deep learning architectures.",
  },
  {
    title: "Natural Language Processing",
    description:
      "Text analytics, sentiment analysis, entity extraction, and document understanding solutions that turn unstructured text into structured, actionable data.",
  },
  {
    title: "Generative AI",
    description:
      "Large language model integration, RAG pipelines, AI-powered content generation, and custom fine-tuned models that bring generative capabilities into your workflows.",
  },
  {
    title: "MLOps",
    description:
      "End-to-end machine learning operations — CI/CD for models, experiment tracking, automated retraining, model versioning, and production monitoring for reliable, scalable AI systems.",
  },
];

const relatedSolutions = [
  { title: "AI Agent", href: "/solutions/ai-agent" },
  { title: "Chatbot", href: "/solutions/chatbot" },
  { title: "Predictive Maintenance", href: "/solutions/predictive-maintenance" },
  {
    title: "Automated Quality Control",
    href: "/solutions/automated-quality-control",
  },
  { title: "Production Planning", href: "/solutions/production-planning" },
  {
    title: "Sales & Demand Forecasting",
    href: "/solutions/sales-and-demand-forecasting",
  },
];

export default function ArtificialIntelligencePage() {
  return (
    <>
      <HeroSection
        title="Artificial Intelligence Services"
        subtitle="From strategy to production — we design, build, and scale AI solutions that deliver measurable business impact."
        ctaText="Discuss Your AI Project"
        ctaLink="/contact"
      />

      {/* Offerings */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              Key Offerings
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI practice covers every layer of the intelligence stack.
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

      {/* Related Solutions */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              Related Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the AI-powered solutions we have built for our clients.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSolutions.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="group flex items-center justify-between rounded-xl bg-white border border-gray-200 px-6 py-5 hover:border-[#2563eb] hover:shadow-md transition"
              >
                <span className="font-medium text-[#151f26] group-hover:text-[#2563eb]">
                  {s.title}
                </span>
                <span className="text-[#2563eb] text-lg">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Leverage AI?"
        subtitle="Our AI specialists will help you identify opportunities, build prototypes, and scale to production."
        ctaText="Start Your AI Journey"
        ctaLink="/contact"
      />
    </>
  );
}
