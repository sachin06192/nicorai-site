import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About NicorAI — Our Story, Values & Offices",
  description:
    "Learn about NicorAI, our mission to democratize AI for businesses, our core values, and our offices across Canada.",
};

const values = [
  {
    title: "Innovation First",
    description:
      "We stay at the cutting edge of technology, continuously exploring new frameworks, models, and methodologies to deliver the best outcomes for our clients.",
  },
  {
    title: "Client Partnership",
    description:
      "We don't just deliver projects — we build lasting partnerships. Every engagement is a collaboration where your success is our success.",
  },
  {
    title: "Ethical AI",
    description:
      "We design AI systems that are transparent, fair, and accountable. Responsible technology is at the heart of everything we build.",
  },
  {
    title: "Continuous Learning",
    description:
      "Our team invests in ongoing education and knowledge-sharing, ensuring we bring world-class expertise to every project.",
  },
];

const offices = [
  {
    city: "Montreal",
    address: "1200 McGill College Ave, Suite 1100",
    region: "Montreal, QC H3B 4G7",
  },
  {
    city: "Toronto",
    address: "100 King Street West, Suite 5700",
    region: "Toronto, ON M5X 1C7",
  },
  {
    city: "Quebec City",
    address: "2875 Laurier Blvd, Suite 500",
    region: "Quebec City, QC G1V 2M2",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="About NicorAI"
        subtitle="A team of technologists, strategists, and problem-solvers dedicated to helping businesses thrive in the age of AI."
      />

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                NicorAI was founded with a clear mission: make the power of
                artificial intelligence and digital transformation accessible to
                businesses of every size. What started as a small consultancy
                has grown into a full-service technology partner trusted by
                leading organizations across industries.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Over the past decade, we have delivered more than 200 projects
                spanning AI, data engineering, web and mobile development, and
                cybersecurity. Our multidisciplinary team combines deep
                technical expertise with strategic business thinking, ensuring
                every solution we build drives measurable impact.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Today, with offices in Montreal, Toronto, and Quebec City, we
                serve clients across Canada and beyond — from mid-market
                companies to large enterprises navigating digital change.
              </p>
            </div>
            <div className="bg-[#f8fafc] rounded-2xl p-10 flex flex-col gap-6">
              <div>
                <p className="text-4xl font-extrabold text-[#2563eb]">2014</p>
                <p className="mt-1 text-gray-600">Founded in Montreal</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[#2563eb]">200+</p>
                <p className="mt-1 text-gray-600">Projects delivered</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[#2563eb]">50+</p>
                <p className="mt-1 text-gray-600">
                  Clients across industries
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[#2563eb]">80+</p>
                <p className="mt-1 text-gray-600">
                  Engineers, data scientists & strategists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision, project, and
              partnership.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-[#151f26]">
                  {v.title}
                </h3>
                <p className="mt-3 text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              Our Offices
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Strategically located to serve clients across Canada and
              internationally.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {offices.map((o) => (
              <div
                key={o.city}
                className="rounded-2xl border border-gray-200 p-8 text-center hover:border-[#2563eb] transition"
              >
                <h3 className="text-2xl font-bold text-[#151f26]">
                  {o.city}
                </h3>
                <p className="mt-3 text-gray-600">{o.address}</p>
                <p className="text-gray-600">{o.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to Work With Us?"
        subtitle="Whether you need strategic guidance or hands-on engineering, our team is ready to help."
        ctaText="Get in Touch"
        ctaLink="/contact"
      />
    </>
  );
}
