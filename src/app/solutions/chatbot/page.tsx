import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Chatbot — NicorAI",
  description:
    "Custom chatbot solutions for customer service and internal operations.",
};

export default function ChatbotPage() {
  return (
    <main>
      <section className="c-solution">
        <div className="c-solution_gradient" aria-hidden="true" />

        <div className="container grid grid-cols-12 gap-x-gutter">
          <div className="col-start-1 sm:col-start-3 md:col-start-4 col-end-13 sm:col-end-11 md:col-end-10">
            <div className="c-solution_inner" id="page-heading">
              <div className="c-solution_main || theme-light">
                <div className="c-solution_main_inner">
                  <h1 className="typo-h5 color-accent">Chatbot</h1>
                  <p className="typo-h5">
                    Unlike generic solutions, we design custom chatbots trained on your own
                    documents, so they respond accurately based on your processes and business
                    reality&mdash;whether for internal use by your teams or externally with your
                    clients.
                  </p>
                </div>
              </div>
              <div className="c-solution_bottom || theme-blue">
                <div className="c-solution_bottom_ratio">
                  <div className="c-solution_bottom_inner">
                    <p className="c-solution_stats || typo-h2">+25%</p>
                    <p className="c-solution_description || typo-body">
                      AI chatbots can improve customer satisfaction scores by up to 25% when
                      tailored to a company&apos;s specific knowledge and workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Discover how NicorAI can transform your projects with innovative technological solutions."
        ctaText="Contact us"
        ctaHref="/contact"
      />
    </main>
  );
}
