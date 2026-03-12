import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import HighlightedParagraph from "@/components/HighlightedParagraph";
import ServiceTile from "@/components/ServiceTile";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "NicorAI | AI & Digital Transformation Solutions for Smarter Business",
  description:
    "NicorAI helps organizations harness the power of AI and digital innovation to boost productivity, sustainability, and long-term growth.",
};

function getHtmlSection(html: string, startLine: number, endLine: number): string {
  const lines = html.split("\n");
  return lines.slice(startLine - 1, endLine).join("\n");
}

export default function Page() {
  const html = loadHtml("home");

  const heroHtml = getHtmlSection(html, 529, 692);
  const caseStudiesHtml = getHtmlSection(html, 1207, 1977);
  const aiForGoodHtml = getHtmlSection(html, 2297, 2528);
  const statsHtml = getHtmlSection(html, 2530, 2975);
  const newsHtml = getHtmlSection(html, 2977, 3243);

  return (
    <main>
      {/* Hero Section */}
      <section dangerouslySetInnerHTML={{ __html: heroHtml }} />

      {/* Highlighted Paragraph - About */}
      <div className="mt-6 mb-fluid-4xl">
        <HighlightedParagraph
          accentText="About"
          mainText="Everyone Talks About Artificial Intelligence. At NicorAI, we Make it Work!"
        />
      </div>

      {/* Services Section */}
      <div className="py-fluid-2xl">
        <section className="c-expertises-listing container">
          <div className="flex flex-col md:grid md:grid-cols-12 md:gap-gutter md:relative md:items-start">
            <div className="flex flex-col gap-26 md:pr-4 md:col-start-1 md:col-span-6 md:sticky md:top-[1rem] md:h-[calc(100vh-2.5rem)] md:justify-between">
              <div className="c-expertises-listing_heading">
                <h2 className="typo-h3 color-accent">Expertise</h2>
                <h2 className="typo-h3">Your one-stop shop for digital transformation</h2>
              </div>
              <div className="flex gap-4 items-end">
                <div className="c-expertises-listing_image_container">
                  <div className="c-expertises-listing_image">
                    <div className="c-image -rounded -cover">
                      <picture className="c-image_inner">
                        <img
                          className="c-image_img"
                          alt="Services"
                          width={500}
                          height={333}
                          src="uploads/NicorAI_ExpertiseDeveloppement.500x000.jpg"
                          loading="eager"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <p className="typo-body">
                  Since 2011, we&apos;ve been helping businesses reinvent themselves by designing custom
                  solutions that integrate data, AI, and software development.
                </p>
              </div>
            </div>

            <div className="mt-28 flex flex-col gap-12 md:gap-40 md:col-start-7 md:col-span-6 md:mt-0">
              <div className="c-expertises-listing_section flex flex-col gap-8">
                <h3 className="typo-h3">Services</h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 gap-gutter">
                  <ServiceTile
                    title="Artificial Intelligence"
                    description="Services"
                    href="/services/artificial-intelligence"
                    backgroundImage="tile-scratch-06"
                  />
                  <ServiceTile
                    title="Web + Mobile Development"
                    description="Services"
                    href="/services/web-mobile-development"
                    backgroundImage="tile-scratch-03"
                  />
                  <ServiceTile
                    title="Data Engineering + BI"
                    description="Services"
                    href="/services/data-engineering-bi"
                    backgroundImage="tile-scratch-01"
                  />
                  <ServiceTile
                    title="Cybersecurity"
                    description="Services"
                    href="/services/cybersecurity"
                    backgroundImage="tile-scratch-03"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Approach / Case Studies Sections (complex, use dangerouslySetInnerHTML) */}
      <div dangerouslySetInnerHTML={{ __html: caseStudiesHtml }} />

      {/* Buzzwords Section */}
      <div className="mt-fluid-4xl">
        <HighlightedParagraph
          accentText=""
          mainText="Buzzwords don't run businesses. AI does."
          body="For us, choosing the right technology comes down to two criteria: solving a real problem and optimizing your performance."
        />
      </div>

      {/* AI for Good Section (complex animations, use dangerouslySetInnerHTML) */}
      <div dangerouslySetInnerHTML={{ __html: aiForGoodHtml }} />

      {/* Stats Section */}
      <div className="pt-fluid-2xl" dangerouslySetInnerHTML={{ __html: statsHtml }} />

      {/* News Section */}
      <div className="pt-fluid-2xl theme-light" dangerouslySetInnerHTML={{ __html: newsHtml }} />

      {/* CTA Banner */}
      <CTABanner
        title="Ready to start? Let's talk about your next digital transformation project."
        ctaText="Contact us"
        ctaHref="/contact"
      />
    </main>
  );
}
