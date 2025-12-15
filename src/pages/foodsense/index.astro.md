---
import SiteLayout from "../../layouts/SiteLayout.astro";
import "../../styles/global.css";

const app = {
  name: "FoodSense",
  status: "Concept",
  description:
    "A lightweight way to log food-related measurements, symptoms, and routines—so you can keep a clear history and observe descriptive patterns over time.",
  how: [
    "Log a quick observation or measurement.",
    "Add context (meal timing, notes, routine).",
    "Review history and descriptive summaries.",
  ],
  bullets: [
    "Fast logging that fits real routines",
    "Descriptive patterns (no diagnosis, no probabilities)",
    "Privacy-first, local-first design",
  ],
  privacyPath: "/foodsense/privacy",
  termsPath: "/foodsense/terms",
};
---

<SiteLayout title={`${app.name} — Omnise`} description="Track simple food signals and habits over time.">
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
              {b.includes("Fast logging")
                ? "Focuses on simple inputs you can actually maintain over time."
                : b.includes("Descriptive patterns")
                ? "Summaries stay observational—helpful for reflection, not conclusions."
                : "Logs can stay on-device; sharing is always your choice."}
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
          FoodSense provides descriptive tracking and educational information only. It does not provide medical advice or diagnosis.
        </p>
        <div class="mt-4 flex flex-wrap gap-3">
          <a class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white" href={app.privacyPath}>
            FoodSense Privacy
          </a>
          <a class="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900" href={app.termsPath}>
            FoodSense Terms
          </a>
        </div>
      </section>
    </div>
  </main>
</SiteLayout>
