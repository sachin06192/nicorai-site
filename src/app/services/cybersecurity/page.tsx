import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Cybersecurity — NicorAI",
  description:
    "Cyberattack preparedness, compliance, and AI-powered security solutions.",
};

function getHtmlSection(html: string, startLine: number, endLine: number): string {
  const lines = html.split("\n");
  return lines.slice(startLine - 1, endLine).join("\n");
}

export default function CybersecurityServicePage() {
  const html = loadHtml("service-cyber");

  // Content sections after hero image
  const contentHtml = getHtmlSection(html, 648, 1500);

  return (
    <main>
      {/* Page Heading */}
      <section className="c-page-head typo-h1 container">
        <div className="typo-h1 c-page-head_heading">
          <p className="c-page-head_title color-accent">Expertise</p>
          <h1 className="c-page-head_subtitle" id="page-heading" tabIndex={-1}>
            Cybersecurity
          </h1>
        </div>

        <div className="c-page-head_after">
          <div className="c-page-head_after_inner">
            <div className="typo-body || grid sm:grid-cols-2 md:grid-cols-3 gap-x-gutter gap-y-5 || mt-fluid-3xl">
              No matter where you stand, whether you&apos;re preparing for a cyberattack or working
              toward security certification, we help you build a robust cybersecurity posture,
              tailored to your reality and ready to face today&apos;s threats.
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
              alt="Cybersecurity"
              width={2000}
              height={1333}
              src="uploads/services/Texture9.2000x000.png"
              loading="lazy"
            />
          </picture>
          <div className="c-image_caption">
            <span className="typo-mono">Cybersecurity</span>
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
