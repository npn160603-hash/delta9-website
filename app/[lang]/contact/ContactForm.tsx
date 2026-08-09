"use client";

import { FormEvent, useState } from "react";

type ContactFormContent = {
  readonly nameLabel: string;
  readonly namePlaceholder: string;
  readonly emailLabel: string;
  readonly emailPlaceholder: string;
  readonly messageLabel: string;
  readonly messagePlaceholder: string;
  readonly submitButton: string;
  readonly sendingButton: string;
  readonly successMessage: string;
  readonly errorMessage: string;
  readonly notice: string;
};

type ContactFormProps = {
  content: ContactFormContent;
  lang: "vi" | "en";
};

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ content, lang }: ContactFormProps) {
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
          locale: lang,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit contact form");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm">
          {content.nameLabel}
        </label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          minLength={2}
          maxLength={100}
          required
          placeholder={content.namePlaceholder}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-yellow-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm">
          {content.emailLabel}
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          placeholder={content.emailPlaceholder}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-yellow-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm">
          {content.messageLabel}
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          minLength={10}
          maxLength={5000}
          required
          placeholder={content.messagePlaceholder}
          className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-yellow-400"
        />
      </div>

      <div
        className="absolute -left-[10000px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-yellow-500 px-6 py-4 font-bold text-slate-950 transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? content.sendingButton : content.submitButton}
      </button>

      <div aria-live="polite" role="status">
        {status === "success" && (
          <p className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm leading-6 text-emerald-300">
            {content.successMessage}
          </p>
        )}

        {status === "error" && (
          <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-300">
            {content.errorMessage}
          </p>
        )}
      </div>

      <p className="text-sm leading-6 text-slate-400">{content.notice}</p>
    </form>
  );
}
