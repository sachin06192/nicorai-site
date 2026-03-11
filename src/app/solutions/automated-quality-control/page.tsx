import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Automated Quality Control Solution — NicorAI",
  description:
    "AI-powered visual inspection and quality control systems that detect defects in real time on production lines, improving yield and reducing waste.",
};

const steps = [
  {
    number: "01",
    title: "Image Capture Setup",
    description:
      "We install or integrate with high-resolution cameras positioned at critical inspection points on your production line, optimized for lighting and angle consistency.",
  },
  {
    number: "02",
    title: "Model Training",
    description:
      "Using your historical defect data and production samples, we train computer vision models to recognize defect types specific to your products and tolerances.",
  },
  {
    number: "03",
    title: "Real-Time Inference",
    description:
      "The trained model runs inference on live production images at line speed, classifying each item as pass or fail and categorizing any detected defects.",
  },
  {
    number: "04",
    title: "Feedback & Optimization",
    description:
      "Defect data feeds back into production analytics dashboards and triggers alerts, enabling root-cause analysis and continuous process improvement.",
  },
];

const benefits = [
  {
    title: "Higher Detection Rates",
    description:
      "AI vision systems detect subtle defects that human inspectors miss, achieving detection rates above 99% even at high line speeds.",
  },
  {
    title: "Reduced Waste & Rework",
    description:
      "Catch defects early in the production process before value-added steps, reducing scrap rates and costly downstream rework.",
  },
  {
    title: "Consistent Standards",
    description:
      "Eliminate variability caused by inspector fatigue, subjective judgment, and shift changes. Every product is evaluated identically.",
  },
  {
    title: "Production Intelligence",
    description:
      "Defect trend analytics reveal systemic issues — worn tooling, material variations, or process drift — enabling proactive corrections.",
  },
];

export default function AutomatedQualityControlPage() {
  return (
    <>
      <HeroSection
        title="Automated Quality Control"
        subtitle="Computer vision and machine learning systems that inspect every product on your line in real time, catching defects human eyes miss."
        ctaText="Improve Your Quality"
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
              Manual quality inspection is slow, inconsistent, and expensive.
              Human inspectors can only sample a fraction of production output,
              miss subtle defects due to fatigue, and introduce subjective
              variability. As production speeds increase and customer quality
              expectations rise, manual inspection becomes a critical bottleneck
              — leading to costly recalls, warranty claims, and damaged brand
              reputation.
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
        title="Achieve Zero-Defect Production"
        subtitle="Our AI quality control systems pay for themselves through reduced scrap, fewer returns, and higher customer satisfaction."
        ctaText="Request a Demo"
        ctaLink="/contact"
      />
    </>
  );
}
