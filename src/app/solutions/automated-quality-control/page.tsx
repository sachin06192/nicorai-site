import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Automated Quality Control — NicorAI",
  description:
    "Computer vision and AI for automated quality inspection.",
};

export default function AutomatedQualityControlPage() {
  return (
    <main>
      <section className="c-solution">
        <div className="c-solution_gradient" aria-hidden="true" />

        <div className="container grid grid-cols-12 gap-x-gutter">
          <div className="col-start-1 sm:col-start-3 md:col-start-4 col-end-13 sm:col-end-11 md:col-end-10">
            <div className="c-solution_inner" id="page-heading">
              <div className="c-solution_main || theme-light">
                <div className="c-solution_main_inner">
                  <h1 className="typo-h5 color-accent">Automated Quality Control</h1>
                  <p className="typo-h5">
                    We use cameras and sensors combined with AI to automate quality control on your
                    production lines. This solution detects anomalies and defects in real time, with
                    consistent accuracy.
                  </p>
                </div>
              </div>
              <div className="c-solution_bottom || theme-blue">
                <div className="c-solution_bottom_ratio">
                  <div className="c-solution_bottom_inner">
                    <p className="c-solution_stats || typo-h2">-50%</p>
                    <p className="c-solution_description || typo-body">
                      Using AI for quality control can increase the efficiency of this process by up
                      to 20% and reduce inspection costs by up to 50%.
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
