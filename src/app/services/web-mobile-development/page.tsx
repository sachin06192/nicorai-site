import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Web & Mobile Development — NicorAI",
  description:
    "Enterprise software, mobile apps, SaaS platforms, API integration, and application modernization services built with modern technologies.",
};

const offerings = [
  {
    title: "Enterprise Software",
    description:
      "Custom web applications and internal tools built with scalable architectures. From ERPs and CRMs to workflow automation platforms, we deliver software that streamlines operations and drives efficiency.",
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android. We build performant, user-friendly apps with offline capabilities, push notifications, and seamless backend integration.",
  },
  {
    title: "SaaS Platforms",
    description:
      "Multi-tenant SaaS products designed for scale — including subscription management, role-based access, analytics dashboards, and white-label configurations.",
  },
  {
    title: "API Integration",
    description:
      "RESTful and GraphQL API design, third-party integrations, and middleware solutions that connect your systems, eliminate data silos, and enable real-time data flow.",
  },
  {
    title: "App Modernization",
    description:
      "Legacy system migration and modernization — re-architecting monoliths into microservices, upgrading tech stacks, and improving performance without disrupting business operations.",
  },
];

export default function WebMobileDevelopmentPage() {
  return (
    <>
      <HeroSection
        title="Web & Mobile Development"
        subtitle="Modern, scalable, and user-centric applications built by experienced engineering teams."
        ctaText="Start Your Project"
        ctaLink="/contact"
      />

      {/* Offerings */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              Our Development Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end software development from concept to launch and beyond.
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

      {/* Tech Stack */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
            Technologies We Use
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We choose the right tools for each project, drawing from a broad
            and proven technology stack.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "React Native",
              "Flutter",
              "PostgreSQL",
              "AWS",
              "Azure",
              "Docker",
              "Kubernetes",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white border border-gray-200 px-5 py-2 text-sm font-medium text-[#151f26]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Something Great"
        subtitle="From MVPs to enterprise platforms — our development team is ready to bring your vision to life."
        ctaText="Get a Free Estimate"
        ctaLink="/contact"
      />
    </>
  );
}
