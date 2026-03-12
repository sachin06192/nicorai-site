import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Artificial Intelligence — NicorAI",
  description:
    "Custom AI solutions including machine learning, computer vision, NLP, and generative AI.",
};

function getHtmlSection(html: string, startLine: number, endLine: number): string {
  const lines = html.split("\n");
  return lines.slice(startLine - 1, endLine).join("\n");
}

export default function AIServicePage() {
  const html = loadHtml("service-ai");

  // Steps section
  const stepsHtml = getHtmlSection(html, 653, 783);
  // Solutions listing
  const solutionsHtml = getHtmlSection(html, 789, 1124);
  // Testimonials + carousel
  const testimonialsHtml = getHtmlSection(html, 1127, 1500);

  return (
    <main>
      {/* Page Heading */}
      <section className="c-page-head typo-h1 container">
        <div className="typo-h1 c-page-head_heading">
          <p className="c-page-head_title color-accent">Expertise</p>
          <h1 className="c-page-head_subtitle" id="page-heading" tabIndex={-1}>
            Artificial Intelligence
          </h1>
        </div>

        <div className="c-page-head_after">
          <div className="c-page-head_after_inner">
            <div className="typo-body || grid sm:grid-cols-2 md:grid-cols-3 gap-x-gutter gap-y-5 || mt-fluid-3xl">
              No matter where you&apos;re starting from, whether it&apos;s a rough idea or a fully
              structured plan, we help you build AI projects that are tangible, profitable, and
              perfectly aligned with your reality.
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="aspect-[16/10]">
        <div className="c-image -cover -lazy-load is-loaded">
          <picture className="c-image_inner">
            <img
              className="c-image_img is-loaded"
              alt="Artificial Intelligence"
              width={2000}
              height={830}
              src="uploads/services/Texture8-2.2000x000.png"
              loading="lazy"
            />
          </picture>
          <div className="c-image_caption">
            <span className="typo-mono">Artificial Intelligence</span>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div dangerouslySetInnerHTML={{ __html: stepsHtml }} />

      {/* Solutions Listing */}
      <div dangerouslySetInnerHTML={{ __html: solutionsHtml }} />

      {/* Testimonials */}
      <div className="c-article || pt-fluid-2xl" dangerouslySetInnerHTML={{ __html: testimonialsHtml }} />

      {/* CTA Banner */}
      <CTABanner
        title="Discover how NicorAI can transform your projects with innovative technological solutions."
        ctaText="Contact us"
        ctaHref="/contact"
      />
    </main>
  );
}
