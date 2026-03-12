import type { Metadata } from "next";
import { loadHtml } from "@/lib/loadHtml";
import HighlightedParagraph from "@/components/HighlightedParagraph";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About — NicorAI",
  description:
    "Learn about NicorAI, our team, values, and offices across Canada.",
};

function getHtmlSection(html: string, startLine: number, endLine: number): string {
  const lines = html.split("\n");
  return lines.slice(startLine - 1, endLine).join("\n");
}

export default function AboutPage() {
  const html = loadHtml("about");

  // Image cards gallery section
  const imageCardsHtml = getHtmlSection(html, 609, 861);
  // Mission/Vision floating cards
  const floatingCardsHtml = getHtmlSection(html, 903, 993);
  // Values listing
  const valuesHtml = getHtmlSection(html, 1024, 1145);
  // Easter egg / brand story
  const easterEggHtml = getHtmlSection(html, 1147, 1218);
  // Timeline
  const timelineHtml = getHtmlSection(html, 1227, 1353);
  // Locations listing
  const locationsHtml = getHtmlSection(html, 1355, 1531);
  // Team listing
  const teamHtml = getHtmlSection(html, 1533, 1726);

  return (
    <main>
      {/* Page Heading */}
      <section className="c-page-head typo-h1 container">
        <div className="typo-h1 c-page-head_heading">
          <h1 className="c-page-head_title color-accent" id="page-heading" tabIndex={-1}>
            About
          </h1>
          <h2 className="c-page-head_subtitle">
            225 talents, one bold mission: transforming the future through the power of AI.
          </h2>
        </div>
      </section>

      {/* Image Cards Gallery */}
      <div dangerouslySetInnerHTML={{ __html: imageCardsHtml }} />

      {/* Highlighted Paragraph - Company Story */}
      <div className="mt-fluid-2xl">
        <HighlightedParagraph
          accentText="About"
          mainText="Based in Canada, a global hub for artificial intelligence, NicorAI is a national leader and a pioneer in applied AI."
          body="Since 2011, we've been helping businesses reinvent themselves by designing custom solutions that integrate artificial intelligence, data, and software development."
        />
      </div>

      {/* Mission / Vision */}
      <div className="mt-fluid-3xl" dangerouslySetInnerHTML={{ __html: floatingCardsHtml }} />

      {/* Synergy Quote */}
      <div className="mt-fluid-3xl">
        <HighlightedParagraph
          accentText=""
          mainText="Our true strength lies in our ability to deliver complex and innovative projects through the synergy of our expertise."
        />
      </div>

      {/* Values */}
      <div className="mt-fluid-3xl" dangerouslySetInnerHTML={{ __html: valuesHtml }} />

      {/* Easter Egg / Brand Story */}
      <div className="mt-fluid-4xl" dangerouslySetInnerHTML={{ __html: easterEggHtml }} />

      {/* Timeline */}
      <div dangerouslySetInnerHTML={{ __html: timelineHtml }} />

      {/* Locations */}
      <div className="mt-fluid-4xl" dangerouslySetInnerHTML={{ __html: locationsHtml }} />

      {/* Team */}
      <div className="mt-fluid-4xl" dangerouslySetInnerHTML={{ __html: teamHtml }} />

      {/* CTA Banner */}
      <CTABanner
        title="Discover how NicorAI can transform your projects with innovative technological solutions."
        ctaText="Contact us"
        ctaHref="/contact"
      />
    </main>
  );
}
