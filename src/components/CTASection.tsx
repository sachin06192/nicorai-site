import Link from "next/link";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
}

export default function CTASection({ title, subtitle, ctaText, ctaLink }: CTASectionProps) {
  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-8">
          <Link
            href={ctaLink}
            className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-accent shadow-lg hover:bg-gray-50 transition-colors"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
