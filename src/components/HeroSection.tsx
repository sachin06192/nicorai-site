import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative flex items-center justify-center min-h-[480px] lg:min-h-[560px] overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-[#151f26]/75" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#151f26]" />
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <div className="mt-10">
            <Link
              href={ctaLink}
              className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent-dark transition-colors"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
