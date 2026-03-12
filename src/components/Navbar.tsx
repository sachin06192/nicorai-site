"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Icon from "./Icon";

const services = [
  { href: "/en/expertises/services/artificial-intelligence", label: "Artificial Intelligence" },
  { href: "/en/expertises/services/web-mobile-development", label: "Web + Mobile Development" },
  { href: "/en/expertises/services/data-engineering-bi", label: "Data Engineering + BI" },
  { href: "/en/expertises/services/cybersecurity", label: "Cybersecurity" },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Sticky Nav */}
      <div className="c-sticky-nav" data-menu-target="">
        <Link href="/" className="c-sticky-nav_monogram">
          <Icon name="monogram" />
        </Link>
        <button
          className="c-sticky-nav_menu"
          data-menu-toggler=""
          aria-expanded={false}
          aria-label="Open/Close Menu"
        >
          <span className="c-sticky-nav_menu_inner typo-button" aria-hidden="true">
            <span className="c-sticky-nav_menu_label">Menu</span>
            <span className="c-sticky-nav_menu_label">Close</span>
          </span>
        </button>
      </div>

      {/* Header */}
      <header className="c-header || container">
        <div className="c-header_inner">

          {/* Logo */}
          <div className="c-header_logo">
            <Link href="/" className="c-header_logo_link c-header_background">
              <Icon name="logo" />
            </Link>
          </div>

          {/* Nav */}
          <nav className="c-header_nav c-header_background">
            <ul className="c-header_list">
              {/* Expertises Dropdown */}
              <li>
                <div
                  className={`c-dropdown c-header_dropdown${dropdownOpen ? " is-open" : ""}`}
                  ref={dropdownRef}
                >
                  <button
                    className="c-dropdown_toggler c-header_button hover-parent"
                    id="expertisesDropdownToggler"
                    type="button"
                    aria-haspopup="true"
                    aria-controls="expertises"
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className="typo-medium hover-underline">Expertises</span>
                    <Icon name="chevron-down" className="c-dropdown_icon" />
                  </button>

                  <div className="c-dropdown_container" data-dropdown-container="">
                    <ul
                      className="c-dropdown_menu"
                      id="expertisesDropdown"
                      aria-labelledby="expertisesDropdownToggler"
                      role="menu"
                      data-dropdown-menu=""
                    >
                      <li className="">
                        <p className="typo-mono text-royal mb-3">Services</p>
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
              </li>

              {/* Approach */}
              <li>
                <Link href="/en/approach" className="c-header_button typo-medium hover-parent">
                  <span className="hover-underline">
                    Approach
                  </span>
                </Link>
              </li>

              {/* Contact (replaces Case studies) */}
              <li>
                <Link href="/contact" className="c-header_button typo-medium hover-parent">
                  <span className="hover-underline">
                    Contact
                  </span>
                </Link>
              </li>

              {/* About */}
              <li>
                <Link href="/en/about" className="c-header_button typo-medium hover-parent">
                  <span className="hover-underline">
                    About
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Language Switcher */}
          <div className="c-header_tools">
            <Link href="/" className="c-header_button typo-button hover-parent c-header_background">
              <span className="hover-underline">fr</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggler */}
        <button className="c-menu-toggler" data-menu-toggler="" aria-expanded={false} aria-label="Open menu">
          <span className="pointer-events-none">
            <span className="sr-only">Open menu</span>
            <Icon name="menu" />
          </span>
        </button>

        {/* Chat Button */}
        <Link className="c-chat-button" href="/contact">
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
      </header>
    </>
  );
}
