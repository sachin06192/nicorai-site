"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      setFeedback("Thanks for subscribing!");
      setShowFeedback(true);
      setEmail("");
    } catch {
      setFeedback("An error occurred. Please try again.");
      setShowFeedback(true);
    }
  }

  return (
    <div className="c-newsletter c-footer_newsletter_form">
      <form action="api/newsletter-form" method="POST" onSubmit={handleSubmit}>
        <div className="c-newsletter_input-container">
          <input
            className="c-newsletter_input"
            type="email"
            id="newsletter"
            name="EMAIL"
            placeholder="Your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="hidden" name="language" value="en" />

          <button
            className="c-button -color-accent c-newsletter_submit"
            style={{ "--master-delay": "0.05s" } as React.CSSProperties}
            type="submit"
          >
            <span className="c-button_inner">
              <span className="c-button_label typo-button">
                <span>Subscribe</span>
              </span>
            </span>
          </button>
        </div>
        {showFeedback && (
          <p className="typo-body mt-2" data-feedback="">
            {feedback}
          </p>
        )}
      </form>
    </div>
  );
}
