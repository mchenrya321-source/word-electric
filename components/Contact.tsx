"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, User } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig, serviceOptions, sectionPadding } from "@/lib/site-config";

/*
 * ============================================================
 * EMAIL INTEGRATION PLACEHOLDER
 * ============================================================
 * To connect this form to an email service (EmailJS, Resend, etc.):
 *
 * 1. Create an API route at app/api/contact/route.ts
 * 2. Replace the handleSubmit success block below with a fetch
 *    call to your API endpoint
 * 3. Add your email service credentials to environment variables
 *
 * Example:
 *   const response = await fetch("/api/contact", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(formData),
 *   });
 * ============================================================
 */

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { primary, secondary } = siteConfig.contacts;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EMAIL INTEGRATION: Replace this block with your email API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <AnimatedSection id="contact" className={`bg-white ${sectionPadding}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Call us directly or request a quote below."
        />

        {/* Prominent mobile call buttons */}
        <div className="mb-6 grid gap-3 sm:hidden">
          <a
            href={`tel:${primary.tel}`}
            className="flex min-h-[52px] flex-col items-center justify-center rounded-lg bg-gold px-4 py-3 text-center font-semibold text-charcoal"
          >
            <span className="text-xs font-medium opacity-80">
              {primary.name}
            </span>
            <span className="flex items-center gap-1.5 text-base">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {primary.phone}
            </span>
          </a>
          <a
            href={`tel:${secondary.tel}`}
            className="flex min-h-[52px] flex-col items-center justify-center rounded-lg border-2 border-charcoal/15 px-4 py-3 text-center font-semibold text-charcoal"
          >
            <span className="text-xs font-medium text-muted">
              {secondary.name}
            </span>
            <span className="flex items-center gap-1.5 text-base">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {secondary.phone}
            </span>
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="hidden space-y-4 md:block lg:col-span-2 lg:space-y-5">
            {[primary, secondary].map((contact) => (
              <div
                key={contact.tel}
                className="rounded-xl border border-gray-100 bg-light-gray p-5"
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="rounded-lg bg-gold/10 p-2">
                    <User className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      {contact.name}
                    </h3>
                    <p className="text-sm text-muted">{contact.role}</p>
                  </div>
                </div>
                <a
                  href={`tel:${contact.tel}`}
                  className="inline-flex items-center gap-2 text-lg font-semibold text-charcoal transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {contact.phone}
                </a>
              </div>
            ))}

            <div className="rounded-xl border border-gray-100 bg-light-gray p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-gold/10 p-2">
                  <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">Service Area</h3>
                  <p className="mt-1 text-sm text-muted">
                    {siteConfig.location}
                    <br />
                    Serving {siteConfig.serviceArea}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-gold/30 bg-gold/5 p-6 text-center md:min-h-[360px] md:p-8">
                <div className="mb-4 rounded-full bg-gold/20 p-4">
                  <Mail className="h-8 w-8 text-gold" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">
                  Thank You!
                </h3>
                <p className="mt-2 max-w-md text-sm text-muted md:text-base">
                  Your request has been received. One of our team members will
                  contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-medium text-gold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-gray-100 bg-light-gray p-5 md:p-6"
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-medium text-charcoal"
                    >
                      Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1 block text-sm font-medium text-charcoal"
                    >
                      Phone Number <span className="text-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                      placeholder="(318) 555-0123"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-charcoal"
                    >
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="mb-1 block text-sm font-medium text-charcoal"
                    >
                      Project Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                      placeholder="Street address, city"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="service"
                      className="mb-1 block text-sm font-medium text-charcoal"
                    >
                      Service Needed <span className="text-gold">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium text-charcoal"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-5 w-full rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Request a Quote"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
