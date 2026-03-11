"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const services = [
  { label: "Artificial Intelligence", href: "/services/artificial-intelligence" },
  { label: "Web & Mobile Development", href: "/services/web-mobile-development" },
  { label: "Data Engineering & BI", href: "/services/data-engineering-bi" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
];

const solutions = [
  { label: "AI Agent", href: "/solutions/ai-agent" },
  { label: "Chatbot", href: "/solutions/chatbot" },
  { label: "Predictive Maintenance", href: "/solutions/predictive-maintenance" },
  { label: "Automated Quality Control", href: "/solutions/automated-quality-control" },
  { label: "Production Planning", href: "/solutions/production-planning" },
  { label: "Sales & Demand Forecasting", href: "/solutions/sales-and-demand-forecasting" },
];

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function DesktopDropdown({ label, items, open, onToggle, onClose }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-surface hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const toggleDropdown = (name: string) =>
    setOpenDropdown((prev) => (prev === name ? null : name));

  const closeDropdowns = () => setOpenDropdown(null);

  const toggleMobileSubmenu = (name: string) =>
    setMobileSubmenu((prev) => (prev === name ? null : name));

  return (
    <header className="sticky top-0 z-50 bg-[#151f26]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white tracking-tight">
            NicorAI
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <DesktopDropdown
              label="Services"
              items={services}
              open={openDropdown === "services"}
              onToggle={() => toggleDropdown("services")}
              onClose={closeDropdowns}
            />
            <DesktopDropdown
              label="Solutions"
              items={solutions}
              open={openDropdown === "solutions"}
              onToggle={() => toggleDropdown("solutions")}
              onClose={closeDropdowns}
            />
            <Link href="/approach" className="text-sm text-gray-300 hover:text-white transition-colors">
              Approach
            </Link>
            <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-700 pb-4">
            {/* Services accordion */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu("services")}
                className="flex w-full items-center justify-between px-2 py-3 text-sm text-gray-300 hover:text-white"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${mobileSubmenu === "services" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSubmenu === "services" && (
                <div className="pl-4">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-2 py-2 text-sm text-gray-400 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions accordion */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu("solutions")}
                className="flex w-full items-center justify-between px-2 py-3 text-sm text-gray-300 hover:text-white"
              >
                Solutions
                <svg
                  className={`w-4 h-4 transition-transform ${mobileSubmenu === "solutions" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSubmenu === "solutions" && (
                <div className="pl-4">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-2 py-2 text-sm text-gray-400 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/approach"
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-3 text-sm text-gray-300 hover:text-white"
            >
              Approach
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-3 text-sm text-gray-300 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-3 text-sm text-gray-300 hover:text-white"
            >
              Contact
            </Link>
            <div className="mt-3 px-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
