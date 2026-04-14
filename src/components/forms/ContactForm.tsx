"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-[15px] text-foreground shadow-[0_1px_2px_rgba(28,25,23,0.04)] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-muted/55 hover:border-stone-300/90 hover:bg-card focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_var(--accent-muted)]";

const labelClass = "text-sm font-medium text-foreground";

type ContactFormProps = {
  id?: string;
};

export function ContactForm({ id = "contact-form" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className={labelClass}>Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Full name"
          />
        </label>
        <label className="block space-y-2">
          <span className={labelClass}>Company name</span>
          <input
            name="company"
            required
            autoComplete="organization"
            className={inputClass}
            placeholder="Company or organization"
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className={labelClass}>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.com"
          />
        </label>
        <label className="block space-y-2">
          <span className={labelClass}>Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="(555) 555-5555"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className={labelClass}>Project type</span>
        <select
          name="projectType"
          required
          className={`${inputClass} cursor-pointer text-foreground`}
          defaultValue=""
        >
          <option value="" disabled>
            Select a project type
          </option>
          <option value="new-construction">New construction</option>
          <option value="renovation-remodel">Renovation / remodel</option>
          <option value="multi-residential">Multi-residential</option>
          <option value="commercial">Commercial</option>
          <option value="custom-residential">Custom residential</option>
          <option value="repair-replacement">Repair / replacement</option>
          <option value="other">Other / multiple</option>
        </select>
      </label>

      <label className="block space-y-2">
        <span className={labelClass}>Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className={`${inputClass} min-h-[140px] resize-y`}
          placeholder="Scope, timelines, products of interest, delivery expectations, and any specification notes."
        />
      </label>

      <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status === "loading"} className="min-w-[200px] sm:w-auto">
          {status === "loading" ? "Sending…" : "Request a Quote"}
        </Button>
        {status === "success" ? (
          <p className="text-sm font-medium text-emerald-800" role="status">
            Thank you—we will follow up shortly.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-medium text-red-800" role="alert">
            Something went wrong. Please call or email us directly.
          </p>
        ) : null}
      </div>
    </form>
  );
}
