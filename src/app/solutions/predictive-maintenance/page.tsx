import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Predictive Maintenance Solution — NicorAI",
  description:
    "AI-driven predictive maintenance that forecasts equipment failures before they occur, reducing downtime, extending asset life, and cutting maintenance costs.",
};

const steps = [
  {
    number: "01",
    title: "Sensor Data Collection",
    description:
      "We connect to your existing IoT sensors, SCADA systems, and maintenance logs to build a comprehensive view of equipment health and operating conditions.",
  },
  {
    number: "02",
    title: "Pattern Recognition",
    description:
      "Machine learning models analyze vibration, temperature, pressure, and other signals to identify early-warning patterns that precede equipment failures.",
  },
  {
    number: "03",
    title: "Failure Prediction",
    description:
      "The system generates probabilistic forecasts — telling you which assets are at risk, what is likely to fail, and when — so maintenance can be scheduled proactively.",
  },
  {
    number: "04",
    title: "Alert & Action",
    description:
      "Automated alerts are sent to maintenance teams with recommended actions, spare parts requirements, and optimal maintenance windows to minimize production impact.",
  },
];

const benefits = [
  {
    title: "Reduced Downtime",
    description:
      "Catch problems before they cause unplanned outages. Clients typically see a 35-50% reduction in unplanned downtime within the first year.",
  },
  {
    title: "Lower Maintenance Costs",
    description:
      "Shift from costly reactive and time-based maintenance to condition-based strategies that reduce maintenance spend by up to 25%.",
  },
  {
    title: "Extended Asset Life",
    description:
      "Optimized operating conditions and timely interventions extend equipment lifespan, deferring capital expenditure on replacements.",
  },
  {
    title: "Safety Improvements",
    description:
      "Early detection of potential failures reduces the risk of catastrophic breakdowns that endanger workers and the environment.",
  },
];

export default function PredictiveMaintenancePage() {
  return (
    <>
      <HeroSection
        title="Predictive Maintenance"
        subtitle="Forecast equipment failures before they happen with AI models trained on your sensor data and maintenance history."
        ctaText="Reduce Your Downtime"
        ctaLink="/contact"
      />

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              The Challenge
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Unplanned equipment downtime costs industrial manufacturers an
              estimated $50 billion annually. Traditional maintenance
              strategies — either reactive (fix when broken) or preventive
              (maintain on a schedule) — are either too late or too wasteful.
              Reactive maintenance leads to costly emergency repairs and
              production losses, while scheduled maintenance often replaces
              parts that still have useful life remaining.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              How It Works
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#2563eb] flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#151f26]">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#151f26] sm:text-4xl">
              Key Benefits
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-gray-200 p-8 hover:border-[#2563eb] hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-[#151f26]">
                  {b.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Stop Reacting, Start Predicting"
        subtitle="Our predictive maintenance solution pays for itself by preventing the failures that cost you the most."
        ctaText="Schedule a Demo"
        ctaLink="/contact"
      />
    </>
  );
}
