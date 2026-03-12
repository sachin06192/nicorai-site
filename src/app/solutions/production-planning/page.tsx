import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Production Planning — NicorAI",
  description:
    "AI-optimized production planning and scheduling solutions.",
};

export default function ProductionPlanningPage() {
  return (
    <main>
      <section className="c-solution">
        <div className="c-solution_gradient" aria-hidden="true" />

        <div className="container grid grid-cols-12 gap-x-gutter">
          <div className="col-start-1 sm:col-start-3 md:col-start-4 col-end-13 sm:col-end-11 md:col-end-10">
            <div className="c-solution_inner" id="page-heading">
              <div className="c-solution_main || theme-light">
                <div className="c-solution_main_inner">
                  <h1 className="typo-h5 color-accent">Production Planning</h1>
                  <p className="typo-h5">
                    We automate production planning, often still done in Excel, using AI. From order
                    intake to delivery, we optimize and automate every step to maximize efficiency,
                    meet deadlines, and make better use of your human and material resources.
                  </p>
                </div>
              </div>
              <div className="c-solution_bottom || theme-blue">
                <div className="c-solution_bottom_ratio">
                  <div className="c-solution_bottom_inner">
                    <p className="c-solution_stats || typo-h2">+20%</p>
                    <p className="c-solution_description || typo-body">
                      Companies using AI for production planning have seen efficiency gains of up to
                      20%.
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
