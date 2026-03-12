import Link from "next/link";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
}

export default function CTABanner({ title, subtitle, ctaText, ctaHref }: CTABannerProps) {
  return (
    <section className="c-highlighted-paragraph" data-scroll="" data-scroll-offset="20%, 20%">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-y-fluid-xl">
          {subtitle && (
            <p className="typo-mono color-accent">{subtitle}</p>
          )}
          <h2 className="typo-h2">{title}</h2>
          <Link className="c-button -color-accent" href={ctaHref}>
            <span className="c-button_inner">
              <span className="c-button_label typo-button">
                <span>{ctaText}</span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
