import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import HighlightedParagraph from "@/components/HighlightedParagraph";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Approach — NicorAI",
  description:
    "Discover our proven approach to AI and digital transformation projects.",
};

function getHtmlSection(html: string, startLine: number, endLine: number): string {
  const lines = html.split("\n");
  return lines.slice(startLine - 1, endLine).join("\n");
}

export default function ApproachPage() {
  const html = loadHtml("approach");

  // Vision/steps animation section
  const visionHtml = getHtmlSection(html, 636, 1228);

  return (
    <main>
      {/* Page Heading */}
      <section className="c-page-head typo-h1 container">
        <div className="typo-h1 c-page-head_heading">
          <h1 className="c-page-head_title color-accent" id="page-heading" tabIndex={-1}>
            Approach
          </h1>
          <h2 className="c-page-head_subtitle">
            Where should you invest to generate the greatest impact?
          </h2>
        </div>

        <div className="c-page-head_after">
          <div className="c-page-head_after_inner">
            <div className="typo-body || grid sm:grid-cols-2 md:grid-cols-3 gap-x-gutter gap-y-5 || mt-fluid-3xl">
              <p>
                The biggest challenge in innovation is investing in the right project — one that
                will have a concrete impact on your business, that&apos;s feasible, and offers
                optimal return on investment.
              </p>
              <p>
                Whether you&apos;re modernizing an aging system or integrating AI for the first
                time, our methodology helps validate the right problem to solve and identify the
                best solution to address it effectively.
              </p>
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
              alt="Approach"
              width={2000}
              height={1333}
              src="uploads/NicorAI-NotreApproche1.2000x000.jpg"
              loading="lazy"
            />
          </picture>
          <div className="c-image_caption">
            <span className="typo-mono">Approach</span>
          </div>
        </div>
      </div>

      {/* Highlighted Paragraph */}
      <div className="mt-6">
        <HighlightedParagraph
          accentText=""
          mainText="70% of innovation projects fail due to unclear objectives. With our methodology, we guide you toward the right decisions from the very start."
        />
      </div>

      {/* Vision Steps (complex animation section) */}
      <div dangerouslySetInnerHTML={{ __html: visionHtml }} />

      {/* CTA Banner */}
      <CTABanner
        title="Ready to start? Let's talk about your next digital transformation project."
        ctaText="Contact us"
        ctaHref="/contact"
      />
    </main>
  );
}
