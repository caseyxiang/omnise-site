---
import SiteLayout from "../../layouts/SiteLayout.astro";
import "../../styles/global.css";

const app = {
  name: "PoolSense",
  status: "Prototype",
  description:
    "Scan common pool test strips with your phone and keep a clean maintenance history. PoolSense focuses on repeatable capture, organized logs, and descriptive trends.",
  how: [
    "Capture or confirm strip readings.",
    "Log pool context (time, weather, notes).",
    "Review history and spot stable patterns over time.",
  ],
  bullets: [
    "Camera-assisted capture (when available)",
    "History & trend views for consistency",
    "Designed for everyday lighting variation",
  ],
  privacyPath: "/poolsense/privacy",
  termsPath: "/poolsense/terms",
};
---

<SiteLayout title={`${app.name} — Omnise`} description="Read pool test strips with your phone camera.">
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
              {b === "Camera-assisted capture (when available)"
                ? "Designed for practical capture flows. When camera tools are enabled, results are still presented descriptively."
                : b === "History & trend views for consistency"
                ? "Keeps your maintenance history organized so you can see what changes when you adjust routines."
                : "Focuses on repeatability in common real-world conditions—no hype, just usability."}
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
          PoolSense provides descriptive tracking and educational information only. It does not replace manufacturer instructions or professional service.
        </p>
        <div class="mt-4 flex flex-wrap gap-3">
          <a class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white" href={app.privacyPath}>
            PoolSense Privacy
          </a>
          <a class="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900" href={app.termsPath}>
            PoolSense Terms
          </a>
        </div>
      </section>
    </div>
  </main>
</SiteLayout>
