"use client";

import { useState, type FormEvent } from "react";
import HeroSection from "@/components/HeroSection";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Have a project in mind? Let's talk about how we can help you achieve your goals."
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#151f26]">
                Send Us a Message
              </h2>
              <p className="mt-2 text-gray-600">
                Fill out the form below and a member of our team will get back
                to you within 24 hours.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-green-50 border border-green-200 p-8">
                  <h3 className="text-xl font-semibold text-green-800">
                    Thank you!
                  </h3>
                  <p className="mt-2 text-green-700">
                    Your message has been received. We will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#151f26]"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-[#151f26] placeholder-gray-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#151f26]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-[#151f26] placeholder-gray-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-[#151f26]"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-[#151f26] placeholder-gray-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#151f26]"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-[#151f26] placeholder-gray-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#151f26]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-[#151f26] placeholder-gray-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto rounded-lg bg-[#2563eb] px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#1d4ed8] transition focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Side Info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-[#151f26]">
                  Contact Information
                </h3>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-[#151f26]">
                      <a
                        href="mailto:info@nicorai.com"
                        className="hover:text-[#2563eb] transition"
                      >
                        info@nicorai.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 text-[#151f26]">
                      <a
                        href="tel:+15145551234"
                        className="hover:text-[#2563eb] transition"
                      >
                        +1 (514) 555-1234
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#151f26]">
                  Our Offices
                </h3>
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="font-medium text-[#151f26]">Montreal</p>
                    <p className="text-gray-600">
                      1200 McGill College Ave, Suite 1100
                    </p>
                    <p className="text-gray-600">Montreal, QC H3B 4G7</p>
                  </div>
                  <div>
                    <p className="font-medium text-[#151f26]">Toronto</p>
                    <p className="text-gray-600">
                      100 King Street West, Suite 5700
                    </p>
                    <p className="text-gray-600">Toronto, ON M5X 1C7</p>
                  </div>
                  <div>
                    <p className="font-medium text-[#151f26]">Quebec City</p>
                    <p className="text-gray-600">
                      2875 Laurier Blvd, Suite 500
                    </p>
                    <p className="text-gray-600">Quebec City, QC G1V 2M2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
