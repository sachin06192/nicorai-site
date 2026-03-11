import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Cybersecurity Services — NicorAI",
  description:
    "Cyberattack preparedness, security optimization, compliance, AI-powered cyber defense, and virtual CISO services to protect your organization.",
};

const offerings = [
  {
    title: "Cyberattack Preparedness",
    description:
      "Penetration testing, vulnerability assessments, and incident response planning that prepare your organization to detect, contain, and recover from cyber threats before they cause damage.",
  },
  {
    title: "Security Optimization",
    description:
      "Comprehensive security audits and architecture reviews that identify gaps in your defenses. We optimize firewalls, IAM policies, encryption, and endpoint protection across your infrastructure.",
  },
  {
    title: "Compliance",
    description:
      "Navigate regulatory requirements including SOC 2, ISO 27001, GDPR, PIPEDA, and industry-specific standards. We implement controls, documentation, and audit-ready processes.",
  },
  {
    title: "Cyber AI Agent",
    description:
      "An AI-powered security agent that continuously monitors your environment, detects anomalies in real time, correlates threat signals, and triggers automated response playbooks.",
  },
  {
    title: "Virtual CISO",
    description:
      "On-demand executive security leadership for organizations that need strategic guidance without a full-time hire. Our virtual CISOs develop security roadmaps, manage vendor relationships, and report to your board.",
  },
];

export default function CybersecurityPage() {
  return (
    <>
      <HeroSection
        title="Cybersecurity Services"
        subtitle="Protect your digital assets with proactive security strategies, AI-driven threat detection, and expert guidance."
        ctaText="Assess Your Security"
        ctaLink="/contact"
      />

      {/* Offerings */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              Our Cybersecurity Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A layered approach to security that covers prevention, detection,
              response, and governance.
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

      {/* Threat Landscape */}
      <section className="py-20 bg-[#151f26]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Threat Landscape is Evolving
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Ransomware, supply chain attacks, and AI-powered phishing are
            growing in sophistication. Organizations need proactive,
            intelligence-driven security — not reactive patches.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                value: "71%",
                label:
                  "of organizations experienced a ransomware attack in the last year",
              },
              {
                value: "$4.5M",
                label: "average cost of a data breach in 2025",
              },
              {
                value: "277 days",
                label:
                  "average time to identify and contain a breach without AI monitoring",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-extrabold text-[#2563eb]">
                  {stat.value}
                </p>
                <p className="mt-3 text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Secure Your Organization Today"
        subtitle="Don't wait for a breach. Let our cybersecurity experts assess your risk and build a defense strategy."
        ctaText="Book a Security Assessment"
        ctaLink="/contact"
      />
    </>
  );
}
