import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Approach — NicorAI",
  description:
    "Discover NicorAI's proven four-step approach to AI and digital transformation: Discovery, Strategy, Development, and Deployment.",
};

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin with a deep-dive into your business — understanding your processes, pain points, data landscape, and strategic goals. Through stakeholder interviews, technical audits, and competitive analysis, we identify the highest-impact opportunities for AI and digital transformation.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Armed with insights from Discovery, we craft a prioritized roadmap that balances quick wins with long-term transformation. This includes technology selection, architecture design, resource planning, and a clear ROI framework so you can measure success from day one.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our cross-functional teams of engineers, data scientists, and designers build your solution in agile sprints. Continuous integration, automated testing, and regular demos keep you involved at every stage, ensuring the final product aligns perfectly with your vision.",
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "We deploy to production with zero-downtime strategies, comprehensive monitoring, and knowledge transfer. Post-launch, we provide ongoing support, performance optimization, and iterative improvements to ensure lasting value.",
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Our Approach"
        subtitle="A proven, repeatable methodology that turns ambitious ideas into production-ready solutions — on time and on budget."
      />

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              Four Steps to Transformation
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Every engagement follows our structured yet flexible process,
              adapted to your unique context.
            </p>
          </div>
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row gap-8 items-start ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#2563eb] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#151f26]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Sprint */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
                Innovation Sprint
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Not sure where to start? Our two-week Innovation Sprint is
                designed for organizations that want to explore AI and digital
                opportunities without committing to a full engagement.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Rapid assessment of your data readiness and technical landscape",
                  "Identification of three to five high-impact AI use cases",
                  "Proof-of-concept prototype for the top opportunity",
                  "Executive presentation with a prioritized implementation roadmap",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2563eb] flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-10 shadow-sm">
              <h3 className="text-xl font-semibold text-[#151f26]">
                What You Get
              </h3>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="font-medium text-[#151f26]">
                    Duration
                  </p>
                  <p className="text-gray-600">2 weeks</p>
                </div>
                <div>
                  <p className="font-medium text-[#151f26]">
                    Team
                  </p>
                  <p className="text-gray-600">
                    AI strategist, data engineer, solutions architect
                  </p>
                </div>
                <div>
                  <p className="font-medium text-[#151f26]">
                    Deliverables
                  </p>
                  <p className="text-gray-600">
                    Technical assessment report, working prototype, and a
                    12-month transformation roadmap
                  </p>
                </div>
                <div>
                  <p className="font-medium text-[#151f26]">
                    Investment
                  </p>
                  <p className="text-gray-600">
                    Fixed-price engagement — contact us for details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Book a free consultation to discuss how our approach can accelerate your digital transformation."
        ctaText="Book a Consultation"
        ctaLink="/contact"
      />
    </>
  );
}
