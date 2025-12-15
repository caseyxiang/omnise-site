---
import SiteLayout from "../../layouts/SiteLayout.astro";
import "../../styles/global.css";

const app = {
  name: "BloomSense",
  status: "In development",
  tagline: "Personal wellness tracking—calm, not clinical.",
  description:
    "Log pH results, menstrual flow, symptoms, and timing. BloomSense turns quick entries into organized history and descriptive patterns—without diagnosis or treatment recommendations.",
  how: [
    "Log a quick measurement (or confirm after a test).",
    "Add context (timing, flow, symptoms, interference flags).",
    "Review history and descriptive summaries over time.",
  ],
  bullets: [
    "Local-first by default",
    "Descriptive, rule-based insights (when needed)",
    "Designed to reduce uncertainty through organization and education",
  ],
  privacyPath: "/bloomsense/privacy",
  termsPath: "/bloomsense/terms",
};
---

<SiteLayout title={`${app.name} — Omnise`} description={app.tagline}>
  <main class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
    <div class="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
      <a class="text-sm text-slate-600 hover:text-slate-900" href="/">← Back to Omnise</a>

      <h1 class="mt-6 text-4xl font-semibold tracking-tight">{app.name}</h1>

      <div class="mt-4 inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700">
        Status: {app.status}
      </div>

      <p class="mt-5 text-base leading-7 text-slate-700">{app.description}</p>

      <div class="mt-6 flex flex-wrap gap-3">
        <a class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white" href="/waitlist">
          Join waitlist
        </a>
        <a class="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900" href="mailto:support@omnise.ai">
          Contact support
        </a>
      </div>

      <section class="mt-12 grid gap-4 sm:grid-cols-2">
        {app.bullets.map((b) => (
          <div class="rounded-2xl border border-slate-200/70 bg-white/70 p-6">
            <div class="text-sm font-semibold text-slate-900">{b}</div>
            <div class="mt-2 text-sm leading-6 text-slate-700">
              {b === "Local-first by default"
                ? "Your logs can stay on-device. Any future sync would be optional and clearly explained."
                : b === "Descriptive, rule-based insights (when needed)"
                ? "Insights are deterministic summaries like trends, intervals, and reliability notes—no probabilities, no diagnosis."
                : "Plain-language education and pattern views help you understand your own history over time."}
            </div>
          </div>
        ))}
      </section>

      <section class="mt-12 rounded-2xl border border-slate-200/70 bg-white/70 p-6">
        <h2 class="text-xl font-semibold tracking-tight">How it works</h2>
        <ol class="mt-4 space-y-3 text-sm text-slate-700 list-decimal pl-5">
          {app.how.map((s) => <li>{s}</li>)}
        </ol>
      </section>

      <section class="mt-12 rounded-2xl border border-slate-200/70 bg-white/70 p-6">
        <h2 class="text-xl font-semibold tracking-tight">Legal</h2>
        <p class="mt-2 text-sm leading-6 text-slate-700">
          BloomSense provides descriptive tracking and educational information only. It does not diagnose conditions or recommend treatment.
        </p>
        <div class="mt-4 flex flex-wrap gap-3">
          <a class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white" href={app.privacyPath}>
            BloomSense Privacy
          </a>
          <a class="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900" href={app.termsPath}>
            BloomSense Terms
          </a>
        </div>
      </section>
    </div>
  </main>
</SiteLayout>
