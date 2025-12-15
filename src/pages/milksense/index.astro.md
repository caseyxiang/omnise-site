---
import SiteLayout from "../../layouts/SiteLayout.astro";
import "../../styles/global.css";
---

<SiteLayout title="MilkSense — Omnise" description="Check breast milk alcohol levels privately with clear, descriptive tracking.">
  <main class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
    <div class="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
      <a class="text-sm text-slate-600 hover:text-slate-900" href="/">← Back to Omnise</a>

      <h1 class="mt-6 text-4xl font-semibold tracking-tight">MilkSense</h1>
      <p class="mt-4 text-base leading-7 text-slate-700">
        Capture a test result, log timing, and keep a clear history—privately.
        MilkSense is designed for descriptive tracking and education.
      </p>

      <div class="mt-6 flex flex-wrap gap-3">
        <a class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white" href="/waitlist">
          Join waitlist
        </a>
        <a class="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900" href="mailto:support@omnise.ai">
          Contact support
        </a>
      </div>

      <section class="mt-12 grid gap-4 sm:grid-cols-2">
        <div class="rounded-2xl border border-slate-200/70 bg-white/70 p-6">
          <div class="font-semibold">Level-only display</div>
          <p class="mt-2 text-sm leading-6 text-slate-700">
            Shows Level 1 / Level 2 / Level 3 for organization and education.
            No numeric alcohol values.
          </p>
        </div>
        <div class="rounded-2xl border border-slate-200/70 bg-white/70 p-6">
          <div class="font-semibold">Local-first privacy</div>
          <p class="mt-2 text-sm leading-6 text-slate-700">
            Logs can stay on your device by default. Any future sync would be opt-in.
          </p>
        </div>
      </section>

      <section class="mt-12 rounded-2xl border border-slate-200/70 bg-white/70 p-6">
        <h2 class="text-xl font-semibold tracking-tight">How it works</h2>
        <ol class="mt-4 space-y-3 text-sm text-slate-700 list-decimal pl-5">
          <li>Capture a test photo (optional) or confirm a result.</li>
          <li>Log timing and context.</li>
          <li>Review your history and descriptive summaries.</li>
        </ol>
      </section>

      <section class="mt-12 rounded-2xl border border-slate-200/70 bg-white/70 p-6">
        <h2 class="text-xl font-semibold tracking-tight">Legal</h2>
        <p class="mt-2 text-sm leading-6 text-slate-700">
          MilkSense provides descriptive tracking and educational information only. It does not determine safety or provide recommendations.
        </p>
        <div class="mt-4 flex flex-wrap gap-3">
          <a class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white" href="/milksense/privacy">MilkSense Privacy</a>
          <a class="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900" href="/milksense/terms">MilkSense Terms</a>
        </div>
      </section>
    </div>
  </main>
</SiteLayout>
