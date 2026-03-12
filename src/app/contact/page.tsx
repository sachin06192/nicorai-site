"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <main id="page-heading">
      {/* Page Heading */}
      <section
        className="c-highlighted-paragraph"
        data-scroll=""
        data-scroll-offset="20%, 20%"
        style={{ paddingTop: 180, paddingBottom: 60 }}
      >
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="flex flex-col gap-y-fluid-2xl lg:col-start-1 lg:col-span-12">
            <h1 className="typo-h1">Contact Us</h1>
            <p className="typo-body" style={{ maxWidth: 700 }}>
              Ready to transform your business with AI? Let us know how we can help. Fill out the
              form below and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section style={{ paddingBottom: 120 }}>
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7">
            <form
              id="contact-form"
              className="c-form"
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
              onSubmit={handleSubmit}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                  <label
                    className="typo-mono text-royal"
                    style={{
                      display: "block",
                      marginBottom: 8,
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="c-input"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid rgba(21,31,38,0.15)",
                      borderRadius: 8,
                      fontFamily: "inherit",
                      fontSize: 16,
                      transition: "border-color 0.2s",
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="typo-mono text-royal"
                    style={{
                      display: "block",
                      marginBottom: 8,
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="c-input"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid rgba(21,31,38,0.15)",
                      borderRadius: 8,
                      fontFamily: "inherit",
                      fontSize: 16,
                      transition: "border-color 0.2s",
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                  <label
                    className="typo-mono text-royal"
                    style={{
                      display: "block",
                      marginBottom: 8,
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="c-input"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid rgba(21,31,38,0.15)",
                      borderRadius: 8,
                      fontFamily: "inherit",
                      fontSize: 16,
                      transition: "border-color 0.2s",
                    }}
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label
                    className="typo-mono text-royal"
                    style={{
                      display: "block",
                      marginBottom: 8,
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="c-input"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid rgba(21,31,38,0.15)",
                      borderRadius: 8,
                      fontFamily: "inherit",
                      fontSize: 16,
                      transition: "border-color 0.2s",
                    }}
                    placeholder="+1 (xxx) xxx-xxxx"
                  />
                </div>
              </div>

              <div>
                <label
                  className="typo-mono text-royal"
                  style={{
                    display: "block",
                    marginBottom: 8,
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  How can we help? *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="c-input"
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "1px solid rgba(21,31,38,0.15)",
                    borderRadius: 8,
                    fontFamily: "inherit",
                    fontSize: 16,
                    resize: "vertical",
                    transition: "border-color 0.2s",
                  }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <div>
                <button type="submit" className="c-button -color-accent">
                  <span className="c-button_inner">
                    <span className="c-button_label typo-button">
                      <span>Send Message</span>
                    </span>
                  </span>
                </button>
              </div>

              {submitted && (
                <div
                  style={{
                    padding: 20,
                    background: "#e8f5e9",
                    borderRadius: 8,
                    color: "#2e7d32",
                  }}
                >
                  <p className="typo-body">
                    Thank you! Your message has been sent. We&apos;ll get back to you shortly.
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-start-9 lg:col-span-4">
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              <div>
                <p
                  className="typo-mono"
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.5,
                    marginBottom: 12,
                  }}
                >
                  Email
                </p>
                <a href="mailto:hello@nicorai.com" className="typo-body hover-underline">
                  hello@nicorai.com
                </a>
              </div>
              <div>
                <p
                  className="typo-mono"
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.5,
                    marginBottom: 12,
                  }}
                >
                  Phone
                </p>
                <a href="tel:18448000027" className="typo-body hover-underline">
                  1 844-800-0027
                </a>
              </div>
              <div>
                <p
                  className="typo-mono"
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.5,
                    marginBottom: 12,
                  }}
                >
                  Montreal
                </p>
                <address className="typo-small" style={{ fontStyle: "normal", opacity: 0.7 }}>
                  2050 rue Bleury Suite 700
                  <br />
                  Montreal, QC H3A 2J5
                </address>
              </div>
              <div>
                <p
                  className="typo-mono"
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.5,
                    marginBottom: 12,
                  }}
                >
                  Toronto
                </p>
                <address className="typo-small" style={{ fontStyle: "normal", opacity: 0.7 }}>
                  207 Adelaide Street East, Suite 201
                  <br />
                  Toronto, ON M5A 1M8
                </address>
              </div>
              <div>
                <p
                  className="typo-mono"
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.5,
                    marginBottom: 12,
                  }}
                >
                  Quebec City
                </p>
                <address className="typo-small" style={{ fontStyle: "normal", opacity: 0.7 }}>
                  510-1015 av. Wilfrid-Pelletier
                  <br />
                  Quebec, QC G1W 0C4
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
