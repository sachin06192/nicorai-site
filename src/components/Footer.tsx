import Link from "next/link";
import Icon from "./Icon";
import NewsletterForm from "./NewsletterForm";

const footerServices = [
  { href: "/en/expertises/services/artificial-intelligence", label: "Artificial Intelligence" },
  { href: "/en/expertises/services/web-mobile-development", label: "Web + Mobile Development" },
  { href: "/en/expertises/services/data-engineering-bi", label: "Data Engineering + BI" },
  { href: "/en/expertises/services/cybersecurity", label: "Cybersecurity" },
];

const footerPrimaryLinks = [
  { href: "/en/approach", label: "Approach" },
  { href: "/en/case-studies", label: "Case studies" },
  { href: "/en/ebooks", label: "eBooks" },
];

const footerNews = [
  { href: "/en/articles", label: "Articles" },
  { href: "/en/events-and-trainings", label: "Events and Trainings" },
  { href: "/en/webinars", label: "Webinars" },
  { href: "/en/speakers", label: "Speakers" },
];

const footerAbout = [
  { href: "/en/about", label: "About", external: false },
  { href: "https://careers.nicorai.com/", label: "Careers", external: true },
];

const socials = [
  { href: "https://www.facebook.com/nicorai", icon: "facebook", label: "Visit our Facebook" },
  { href: "https://www.instagram.com/nicoraivibe/", icon: "instagram", label: "Visit our Instagram" },
  { href: "https://www.youtube.com/@nicorai7705", icon: "youtube", label: "Visit our Youtube" },
  { href: "https://www.linkedin.com/company/nicorai", icon: "linkedin", label: "Visit our LinkedIn" },
];

const locations = [
  {
    city: "Montreal",
    address: "2050 rue Bleury Suite 700\nMontreal, QC\nH3A 2J5",
    mapUrl: "https://www.google.com/maps/place/2050+Rue+de+Bleury,+Montr%C3%A9al,+QC+H3A+3S1/@45.5075,-73.5719794,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a48cbc91093:0xc9092db3ef9812ca!8m2!3d45.5075!4d-73.5697907!16s%2Fg%2F11c5jjtrw3",
  },
  {
    city: "Toronto",
    address: "207 Adelaide Street East, Suite 201,\nToronto, ON\nM5A 1M8",
    mapUrl: "https://maps.app.goo.gl/6o4aCRUoLAbxdr9r9",
  },
  {
    city: "Quebec city",
    address: "510-1015 av. Wilfrid-Pelletier\nQuebec, QC\nG1W 0C4",
    mapUrl: "https://www.google.com/maps/place/NicorAI/@46.7696459,-71.3050413,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb890d721a9234b:0x979022270b4a9fa4!8m2!3d46.7696459!4d-71.3028526",
  },
];

export default function Footer() {
  return (
    <footer className="c-footer theme-light">

      {/* Sitemap */}
      <div className="c-footer_sitemap">

        <nav className="c-footer_nav -primary">
          {/* Services column */}
          <div className="c-footer_list">
            <p className="c-footer_list_title typo-mono opacity-50">Services</p>
            <ul className="c-footer_list_inner">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block typo-body hover-parent py-1.5">
                    <span className="hover-underline pointer-events-none">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Other primary links */}
          <div className="c-footer_list">
            <ul className="c-footer_list_inner">
              {footerPrimaryLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block typo-body hover-parent py-1.5">
                    <span className="hover-underline pointer-events-none">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <nav className="c-footer_nav -secondary">
          {/* News column */}
          <div className="c-footer_list">
            <p className="c-footer_list_title typo-mono opacity-50">News</p>
            <ul className="c-footer_list_inner">
              {footerNews.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block typo-body hover-parent py-1.5">
                    <span className="hover-underline pointer-events-none">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* About column */}
          <div className="c-footer_list">
            <p className="c-footer_list_title typo-mono opacity-50">About</p>
            <ul className="c-footer_list_inner">
              {footerAbout.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    className="inline-block typo-body hover-parent py-1.5"
                  >
                    <span className="hover-underline pointer-events-none">
                      {item.label}
                    </span>
                    {item.external && (
                      <Icon name="arrow-external" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

      </div>

      {/* Contact */}
      <div className="c-footer_contact">
        <div className="c-footer_phone">
          <a href="tel:1 844-800-0027" className="typo-body hover-underline">
            1 844-800-0027
          </a>
        </div>
        <div className="c-footer_mail">
          <a href="mailto:hello@nicorai.com" className="typo-body hover-underline">
            hello@nicorai.com
          </a>
        </div>

        <ul className="c-footer_socials">
          {socials.map((social) => (
            <li key={social.icon}>
              <a href={social.href} target="_blank" className="c-footer_socials_link">
                <span className="sr-only">{social.label}</span>
                <Icon name={social.icon} />
              </a>
            </li>
          ))}
        </ul>

        <ul className="c-footer_locations">
          {locations.map((loc) => (
            <li key={loc.city}>
              <address className="c-footer_address">
                <p className="typo-body mb-2">{loc.city}</p>
                <a
                  target="_blank"
                  href={loc.mapUrl}
                  className="typo-small opacity-50 hover:opacity-100"
                >
                  {loc.address.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < loc.address.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </a>
              </address>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="c-footer_newsletter">
        <div className="max-w-[320px]">
          <p className="typo-body">
            Subscribe to our newsletter
          </p>
          <p className="typo-small opacity-50 mt-2">
            AI Horizon is your indispensable source of content dedicated to artificial intelligence and digital transformation. Webinars, articles, podcasts, events, tutorials, ebooks, case studies: don&apos;t miss a single opportunity to deepen your knowledge!
          </p>
        </div>

        <NewsletterForm />
      </div>

      {/* Legals */}
      <div className="c-footer_legals">
        <div className="c-footer_legals_item">
          <Link href="/en/privacy-policy" className="c-footer_legals_link typo-small">
            Privacy Policy
          </Link>
        </div>
        <div className="c-footer_legals_item">
          <Link href="/" className="c-footer_legals_link typo-small">
            Fran&ccedil;ais
          </Link>
        </div>
        <div className="c-footer_legals_item">
          <p className="inline-block typo-small opacity-50">&copy; {new Date().getFullYear()}</p>
        </div>
        <div className="c-footer_legals_item">
          <a href="https://locomotive.ca" target="_blank" className="c-footer_legals_link typo-small">
            Website by Locomotive
          </a>
        </div>
      </div>

    </footer>
  );
}
