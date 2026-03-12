import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Web + Mobile Development — NicorAI",
  description:
    "Enterprise software, mobile apps, SaaS solutions, and application modernization.",
};

function getHtmlSection(html: string, startLine: number, endLine: number): string {
  const lines = html.split("\n");
  return lines.slice(startLine - 1, endLine).join("\n");
}

export default function WebMobileServicePage() {
  const html = loadHtml("service-web");

  // Content sections after hero image
  const contentHtml = getHtmlSection(html, 649, 1500);

  return (
    <main>
      {/* Page Heading */}
      <section className="c-page-head typo-h1 container">
        <div className="typo-h1 c-page-head_heading">
          <p className="c-page-head_title color-accent">Expertise</p>
          <h1 className="c-page-head_subtitle" id="page-heading" tabIndex={-1}>
            Web + Mobile Development
          </h1>
        </div>

        <div className="c-page-head_after">
          <div className="c-page-head_after_inner">
            <div className="typo-body || grid sm:grid-cols-2 md:grid-cols-3 gap-x-gutter gap-y-5 || mt-fluid-3xl">
              Custom web and mobile development is key to maximizing your organization&apos;s
              efficiency, innovation, and growth. Unlike off-the-shelf solutions, a custom
              application is fully tailored to your business processes, goals, and users.
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
              alt="Web + Mobile Development"
              width={2000}
              height={1125}
              src="uploads/2025/expertises/Texture9.2000x000.jpg"
              loading="lazy"
            />
          </picture>
          <div className="c-image_caption">
            <span className="typo-mono">Web + Mobile Development</span>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

      {/* CTA Banner */}
      <CTABanner
        title="Discover how NicorAI can transform your projects with innovative technological solutions."
        ctaText="Contact us"
        ctaHref="/contact"
      />
    </main>
  );
}
