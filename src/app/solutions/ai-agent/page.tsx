import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "AI Agent — NicorAI",
  description:
    "Intelligent AI agents that automate complex business processes.",
};

export default function AIAgentPage() {
  return (
    <main>
      <section className="c-solution">
        <div className="c-solution_gradient" aria-hidden="true" />

        <div className="container grid grid-cols-12 gap-x-gutter">
          <div className="col-start-1 sm:col-start-3 md:col-start-4 col-end-13 sm:col-end-11 md:col-end-10">
            <div className="c-solution_inner" id="page-heading">
              <div className="c-solution_main || theme-light">
                <div className="c-solution_main_inner">
                  <h1 className="typo-h5 color-accent">AI Agent</h1>
                  <p className="typo-h5">
                    We design custom AI agents that automate specific tasks, meet your business
                    needs, and integrate seamlessly with your existing tools, whether it&apos;s
                    interacting with an ERP, handling internal requests, or enhancing the customer
                    experience.
                  </p>
                </div>
              </div>
              <div className="c-solution_bottom || theme-blue">
                <div className="c-solution_bottom_ratio">
                  <div className="c-solution_bottom_inner">
                    <p className="c-solution_stats || typo-h2">+30%</p>
                    <p className="c-solution_description || typo-body">
                      Companies that use AI agents have reported up to a 30% increase in operational
                      efficiency, thanks to the automation of repetitive tasks and the optimization
                      of internal processes.
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
