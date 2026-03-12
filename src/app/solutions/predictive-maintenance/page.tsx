import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Predictive Maintenance — NicorAI",
  description:
    "AI-powered predictive maintenance to reduce downtime and costs.",
};

export default function PredictiveMaintenancePage() {
  return (
    <main>
      <section className="c-solution">
        <div className="c-solution_gradient" aria-hidden="true" />

        <div className="container grid grid-cols-12 gap-x-gutter">
          <div className="col-start-1 sm:col-start-3 md:col-start-4 col-end-13 sm:col-end-11 md:col-end-10">
            <div className="c-solution_inner" id="page-heading">
              <div className="c-solution_main || theme-light">
                <div className="c-solution_main_inner">
                  <h1 className="typo-h5 color-accent">Predictive Maintenance</h1>
                  <p className="typo-h5">
                    To reduce unplanned downtime and extend the lifespan of your equipment, we
                    develop predictive models capable of detecting failures before they occur.
                  </p>
                </div>
              </div>
              <div className="c-solution_bottom || theme-blue">
                <div className="c-solution_bottom_ratio">
                  <div className="c-solution_bottom_inner">
                    <p className="c-solution_stats || typo-h2">-50%</p>
                    <p className="c-solution_description || typo-body">
                      AI has the potential to reduce unplanned downtime by up to 50% and lower
                      maintenance costs by 10 to 40%.
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
