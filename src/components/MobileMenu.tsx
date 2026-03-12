"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

const services = [
  { href: "/en/expertises/services/artificial-intelligence", label: "Artificial Intelligence" },
  { href: "/en/expertises/services/web-mobile-development", label: "Web + Mobile Development" },
  { href: "/en/expertises/services/data-engineering-bi", label: "Data Engineering + BI" },
  { href: "/en/expertises/services/cybersecurity", label: "Cybersecurity" },
];

const primaryNav = [
  { href: "/en/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
  { href: "/en/about", label: "About" },
];

const secondaryNav = [
  { href: "/en/articles", label: "Articles", external: false },
  { href: "/en/webinars", label: "Webinars", external: false },
  { href: "/en/events-and-trainings", label: "Events and Trainings", external: false },
  { href: "/en/speakers", label: "Speakers", external: false },
  { href: "https://careers.nicorai.com/", label: "Careers", external: true },
];

export default function MobileMenu() {
  const [expertisesOpen, setExpertisesOpen] = useState(false);

  return (
    <div className="c-menu || modal" data-lenis-prevent="" data-modal-name="menu">
      <div className="c-menu_container || modal_container" data-menu-target="">
        <div className="c-menu_inner || modal_inner">

          {/* Head */}
          <div className="c-menu_head">
            <div className="c-menu_logo">
              <Link href="/">
                <Icon name="logo" />
              </Link>
            </div>

            <button className="c-menu-toggler" data-menu-toggler="" aria-expanded={false} aria-label="Close menu">
              <span className="pointer-events-none">
                <span className="sr-only">Close menu</span>
                <Icon name="close" />
              </span>
            </button>

            <Link className="c-chat-button c-menu_chat-button" href="/contact">
              <Icon name="decagon" className="c-chat-button_background" />
              <span className="c-chat-button_inner">
                <span className="c-chat-button_icon">
                  <Icon name="chat" />
                </span>
                <span className="c-chat-button_icon">
                  <Icon name="chat" />
                </span>
              </span>
            </Link>
          </div>

          {/* Primary Nav */}
          <nav className="c-menu_primary">
            <ul>
              {/* Expertises accordion */}
              <li className="c-menu_item" style={{ "--index": 0 } as React.CSSProperties}>
                <div className="c-accordion">
                  <details
                    className="c-accordion_details"
                    open={expertisesOpen}
                    onClick={(e) => {
                      e.preventDefault();
                      setExpertisesOpen(!expertisesOpen);
                    }}
                  >
                    <summary className="c-accordion_summary hover-parent typo-h3">
                      <div className="max-w-[400px] hover-underline">
                        Expertises
                      </div>
                      <Icon name="plus" className="c-accordion_icon" />
                    </summary>
                    <div
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="pt-2">
                        <div className="grid grid-cols-2 gap-x-gutter gap-y-9 pb-9 pt-4">
                          <ul>
                            <li>
                              <p className="typo-mono mb-3">Services</p>
                              <ul>
                                {services.map((service) => (
                                  <li key={service.href}>
                                    <Link
                                      href={service.href}
                                      className="typo-medium"
                                      role="menuitem"
                                    >
                                      <span className="hover-underline">
                                        {service.label}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </li>

              {/* Other primary items */}
              {primaryNav.map((item, i) => (
                <li key={item.href} className="c-menu_item" style={{ "--index": i + 1 } as React.CSSProperties}>
                  <Link href={item.href} className="typo-h3 hover-parent">
                    <span className="hover-underline">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Secondary Nav */}
          <nav className="c-menu_secondary" style={{ "--menu-items-delay": "0.2s" } as React.CSSProperties}>
            <ul className="grid grid-cols-2 gap-x-gutter">
              {secondaryNav.map((item, i) => (
                <li key={item.href} className="c-menu_item" style={{ "--index": i } as React.CSSProperties}>
                  <a
                    href={item.href}
                    className="typo-medium hover-parent"
                    target={item.external ? "_blank" : "_self"}
                  >
                    <span className="hover-underline">
                      {item.label}
                    </span>
                    {item.external && (
                      <Icon name="arrow-external" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="pt-4">
              <li className="c-menu_item" style={{ "--index": 5 } as React.CSSProperties}>
                <Link href="/" className="typo-medium hover-parent" data-no-swup="">
                  <span className="hover-underline">Fran&ccedil;ais</span>
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </div>
  );
}
