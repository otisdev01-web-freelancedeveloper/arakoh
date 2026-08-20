"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { studioContent } from "@/data/studio";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";

type FormState = {
  name: string;
  email: string;
  phone: string;
  studentAge: string;
  experience: string;
  format: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  studentAge: "",
  experience: "",
  format: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) {
    errors.message = "Please include a short message.";
  }
  return errors;
}

function buildMailto(values: FormState) {
  const subject = encodeURIComponent(
    `Private Piano Lesson Inquiry — ${values.name}`,
  );
  const body = encodeURIComponent(
    [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "—"}`,
      `Student age: ${values.studentAge || "—"}`,
      `Experience level: ${values.experience || "—"}`,
      `Preferred lesson format: ${values.format || "—"}`,
      "",
      "Message:",
      values.message,
    ].join("\n"),
  );
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const { contact } = studioContent;
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatus("idle");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Frontend-ready: opens the visitor's email client with a prefilled inquiry.
    // Replace with an API/email service integration when available.
    window.location.href = buildMailto(values);
    setStatus("ready");
  };

  return (
    <section id="inquire" className="section-pad bg-obsidian text-ivory">
      <div className="site-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <RevealText>
            <p className="eyebrow text-brass-soft">09 / Inquire</p>
            <h2 className="display mt-4 text-[clamp(2.4rem,5vw,4.2rem)]">
              {contact.heading}
            </h2>
          </RevealText>
          <RevealText as="p" className="mt-6 max-w-md text-ivory/70">
            {contact.supporting}
          </RevealText>
          <RevealText className="mt-8 space-y-2 text-sm text-ivory/60">
            <p>
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-ivory underline decoration-brass/40 underline-offset-4 focus-ring"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="text-warm-gray">{studioContent.hero.location}</p>
          </RevealText>
        </div>

        <RevealText>
          <form
            onSubmit={onSubmit}
            className="grid gap-6 sm:grid-cols-2"
            noValidate
          >
            <div className="field sm:col-span-1">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={onChange}
                className="!border-ivory/20 !text-ivory placeholder:text-ivory/30"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? (
                <p id="name-error" className="error !text-[#e8b4a8]">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={onChange}
                className="!border-ivory/20 !text-ivory"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="error !text-[#e8b4a8]">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={onChange}
                className="!border-ivory/20 !text-ivory"
              />
            </div>

            <div className="field">
              <label htmlFor="studentAge">Student age</label>
              <input
                id="studentAge"
                name="studentAge"
                value={values.studentAge}
                onChange={onChange}
                className="!border-ivory/20 !text-ivory"
              />
            </div>

            <div className="field">
              <label htmlFor="experience">Experience level</label>
              <select
                id="experience"
                name="experience"
                value={values.experience}
                onChange={onChange}
                className="!border-ivory/20 !text-ivory"
              >
                <option value="" className="bg-obsidian">
                  Select
                </option>
                <option value="Beginner" className="bg-obsidian">
                  Beginner
                </option>
                <option value="Intermediate" className="bg-obsidian">
                  Intermediate
                </option>
                <option value="Advanced" className="bg-obsidian">
                  Advanced
                </option>
                <option value="Returning adult" className="bg-obsidian">
                  Returning adult
                </option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="format">Preferred lesson format</label>
              <select
                id="format"
                name="format"
                value={values.format}
                onChange={onChange}
                className="!border-ivory/20 !text-ivory"
              >
                <option value="" className="bg-obsidian">
                  Select
                </option>
                <option value="30 minutes" className="bg-obsidian">
                  30 minutes
                </option>
                <option value="45 minutes" className="bg-obsidian">
                  45 minutes
                </option>
                <option value="60 minutes" className="bg-obsidian">
                  60 minutes
                </option>
                <option value="Not sure yet" className="bg-obsidian">
                  Not sure yet
                </option>
              </select>
            </div>

            <div className="field sm:col-span-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={onChange}
                className="!border-ivory/20 !text-ivory"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="error !text-[#e8b4a8]">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button type="submit" variant="brass" arrow>
                Send Inquiry
              </Button>
              {status === "ready" ? (
                <p className="text-sm text-ivory/65" role="status">
                  Opening your email client to send the inquiry…
                </p>
              ) : (
                <p className="text-xs text-warm-gray">
                  Submits via email. Connect an API later if preferred.
                </p>
              )}
            </div>
          </form>
        </RevealText>
      </div>
    </section>
  );
}
