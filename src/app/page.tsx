import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "NicorAI — AI & Digital Transformation Solutions",
  description:
    "NicorAI helps businesses leverage artificial intelligence, data engineering, web development, and cybersecurity to drive growth and operational excellence.",
};

const services = [
  {
    title: "Artificial Intelligence",
    description:
      "From machine learning models to generative AI, we build intelligent solutions that automate processes, uncover insights, and create competitive advantages.",
    href: "/services/artificial-intelligence",
  },
  {
    title: "Web & Mobile Development",
    description:
      "Enterprise-grade web and mobile applications built with modern frameworks, delivering exceptional user experiences and scalable architectures.",
    href: "/services/web-mobile-development",
  },
  {
    title: "Data Engineering & BI",
    description:
      "End-to-end data solutions — from governance and warehousing to real-time dashboards — turning raw data into actionable business intelligence.",
    href: "/services/data-engineering-bi",
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security services including threat assessment, compliance, and AI-driven cyber defense to protect your digital assets.",
    href: "/services/cybersecurity",
  },
];

const stats = [
  { value: "200+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "10+", label: "Years" },
  { value: "4", label: "Offices" },
];

const solutions = [
  {
    title: "AI Agent",
    description:
      "Autonomous AI agents that handle complex workflows, customer interactions, and decision-making processes.",
    href: "/solutions/ai-agent",
  },
  {
    title: "Chatbot",
    description:
      "Intelligent conversational interfaces powered by large language models for customer support and engagement.",
    href: "/solutions/chatbot",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Sensor-driven AI models that forecast equipment failures before they occur, reducing downtime and costs.",
    href: "/solutions/predictive-maintenance",
  },
  {
    title: "Automated Quality Control",
    description:
      "Computer vision and ML systems that detect defects in real time on production lines.",
    href: "/solutions/automated-quality-control",
  },
  {
    title: "Production Planning",
    description:
      "AI-optimized scheduling and resource allocation for manufacturing and logistics operations.",
    href: "/solutions/production-planning",
  },
  {
    title: "Sales & Demand Forecasting",
    description:
      "Predictive analytics that anticipate market demand, optimize inventory, and drive revenue growth.",
    href: "/solutions/sales-and-demand-forecasting",
  },
];

const clients = [
  "Familiprix",
  "Pomerleau",
  "QSL",
  "Kruger",
  "Dolbec",
  "Canam",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="AI & Digital Transformation Solutions for Smarter Business"
        subtitle="We partner with forward-thinking organizations to design, build, and deploy AI-powered solutions that drive measurable results."
        ctaText="Get Started"
        ctaLink="/contact"
      />

      {/* Services */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology services tailored to your business
              objectives.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                description={s.description}
                href={s.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#151f26]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-5xl font-extrabold text-[#2563eb]">
                  {s.value}
                </p>
                <p className="mt-2 text-lg text-gray-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Purpose-built AI and technology solutions that address real
              business challenges.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="group rounded-2xl border border-gray-200 p-8 transition hover:border-[#2563eb] hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#151f26] group-hover:text-[#2563eb]">
                  {s.title}
                </h3>
                <p className="mt-3 text-gray-600">{s.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-[#2563eb]">
                  Learn more &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-10">
            Trusted by Industry Leaders
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {clients.map((name) => (
              <span
                key={name}
                className="text-2xl font-bold text-gray-400 hover:text-[#151f26] transition"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Let our experts guide you through AI adoption, digital modernization, and data-driven decision making."
        ctaText="Contact Us"
        ctaLink="/contact"
      />
    </>
  );
}
