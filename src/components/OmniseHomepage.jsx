import React from "react";
import { motion } from "framer-motion";

/**
 * Omnise — Landing Page (single-file)
 * - No external icon deps (inline SVG only)
 * - Includes links to legal pages + app-specific legal pages
 */

const cx = (...classes) => classes.filter(Boolean).join(" ");

function Button({ children, className, variant = "default", type = "button", onClick, href, target, rel }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-slate-400/40 disabled:opacity-50 disabled:cursor-not-allowed";
  const styles =
    variant === "outline"
      ? "border border-slate-200 bg-white/70 text-slate-900 hover:bg-white"
      : "bg-slate-900 text-white hover:bg-slate-800";

  if (href) {
    const safeRel = target === "_blank" ? rel || "noopener noreferrer" : rel;
    return (
      <a href={href} target={target} rel={safeRel} className={cx(base, styles, className)}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cx(base, styles, className)}>
      {children}
    </button>
  );
}

function Card({ children, className }) {
  return (
    <div className={cx("rounded-2xl border border-slate-200/70 bg-white/70 shadow-sm backdrop-blur", className)}>
      {children}
    </div>
  );
}
function CardContent({ children, className }) {
  return <div className={cx("p-6", className)}>{children}</div>;
}

const IconBase = ({ children, className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {children}
  </svg>
);
const ArrowRightIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M13 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </IconBase>
);
const ShieldIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 3l8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </IconBase>
);
const SparklesIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 3l1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M19 12l.8 2.2L22 15l-2.2.8L19 18l-.8-2.2L16 15l2.2-.8L19 12Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </IconBase>
);
const ScanIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M7 4H5a1 1 0 0 0-1 1v2M17 4h2a1 1 0 0 1 1 1v2M7 20H5a1 1 0 0 1-1-1v-2M17 20h2a1 1 0 0 0 1-1v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </IconBase>
);
const LineChartIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M4 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M7 14l3-3 3 2 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </IconBase>
);
const LockIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M6.5 11h11A1.5 1.5 0 0 1 19 12.5v7A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-7A1.5 1.5 0 0 1 6.5 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </IconBase>
);
const CpuIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M9 9h6v6H9V9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M4 10h2M4 14h2M18 10h2M18 14h2M10 4v2M14 4v2M10 18v2M14 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </IconBase>
);
const HeartPulseIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 21s-7-4.5-9-9a5.5 5.5 0 0 1 9-6 5.5 5.5 0 0 1 9 6c-2 4.5-9 9-9 9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M4.5 12h3l1.5-3 2 6 1.5-3h3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </IconBase>
);
const DropletsIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M12 2s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </IconBase>
);
const WavesIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M3 9c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M3 15c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </IconBase>
);
const UtensilsIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M6 3v7a3 3 0 0 0 3 3v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M6 3v7M4 3v7M8 3v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
    <path d="M14 3v10a3 3 0 0 0 6 0V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </IconBase>
);
const MilkIcon = ({ className }) => (
  <IconBase className={className}>
    <path d="M10 3h4m-4 0v2m4-2v2M9.5 7h5l1 2.5V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9.5L9.5 7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
  </IconBase>
);

const Container = ({ children }) => <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: "easeOut", delay }}>
    {children}
  </motion.div>
);
const Pill = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
    <Icon className="h-3.5 w-3.5" />
    {children}
  </span>
);

const ProductCard = ({ name, tagline, description, icon: Icon, bullets, status, href }) => (
  <Card className="h-full">
    <CardContent>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">{name}</h3>
          </div>
          <p className="text-sm text-slate-600">{tagline}</p>
        </div>
        {status ? (
          <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">{status}</span>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-700">{description}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {bullets?.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-slate-900" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        <Pill icon={LockIcon}>Local-first friendly</Pill>
        <Pill icon={ShieldIcon}>Privacy-forward</Pill>
        <Pill icon={LineChartIcon}>Trends & insights</Pill>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <Button className="rounded-2xl" href={href || "#"}>
          Learn more <ArrowRightIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline" className="rounded-2xl" href="/waitlist">
          Get updates
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default function OmniseHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.10),transparent_55%)]" />

      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white shadow">
                <SparklesIcon className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">Omnise</div>
                <div className="text-[11px] text-slate-600">Personal sensing, made simple.</div>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
              <div className="relative group">
                <button className="hover:text-slate-900 inline-flex items-center gap-1">
                  Products
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                  <div className="rounded-xl border border-slate-200 bg-white shadow-lg py-2 min-w-[160px]">
                    <a className="block px-4 py-2 hover:bg-slate-50 hover:text-slate-900" href="/bloomsense">BloomSense</a>
                    <a className="block px-4 py-2 hover:bg-slate-50 hover:text-slate-900" href="/poolsense">PoolSense</a>
                    <a className="block px-4 py-2 hover:bg-slate-50 hover:text-slate-900" href="/foodsense">FoodSense</a>
                    <a className="block px-4 py-2 hover:bg-slate-50 hover:text-slate-900" href="/milksense">MilkSense</a>
                  </div>
                </div>
              </div>
              <a className="hover:text-slate-900" href="#privacy">Privacy</a>
              <a className="hover:text-slate-900" href="#legal">Legal</a>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="outline" className="hidden sm:inline-flex" href="mailto:support@omnise.ai">Contact</Button>
              <Button href="#waitlist">Join waitlist <ArrowRightIcon className="h-4 w-4" /></Button>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <section className="relative py-14 sm:py-18 lg:py-22">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <FadeIn>
                <div className="inline-flex flex-wrap gap-2">
                  <Pill icon={ShieldIcon}>Designed for privacy</Pill>
                  <Pill icon={CpuIcon}>Smart analysis</Pill>
                  <Pill icon={ScanIcon}>Camera-ready</Pill>
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                  The Omnise app family turns quick tests into clear, useful insights.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
                  Capture results with your phone, log what matters, and see patterns over time—without sharing your data.
                </p>
              </FadeIn>

              <FadeIn delay={0.08}>
                <Card className="rounded-[28px]">
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-sm font-semibold">Snapshot → Log → Insights</div>
                    <div className="mt-4 grid gap-3">
                      {[
                        { title: "Camera capture", sub: "Snap a test strip or meter", Icon: ScanIcon },
                        { title: "Trends", sub: "See patterns over time", Icon: LineChartIcon },
                        { title: "Privacy controls", sub: "Local-first by default", Icon: ShieldIcon },
                      ].map((item, idx) => (
                        <div key={idx} className="rounded-2xl border border-slate-200 bg-white/80 p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
                              <item.Icon className="h-4 w-4" />
                            </span>
                            <div>
                              <div className="text-sm font-semibold">{item.title}</div>
                              <div className="text-xs text-slate-600">{item.sub}</div>
                            </div>
                          </div>
                          <ArrowRightIcon className="h-4 w-4 text-slate-500" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section id="products" className="py-14 sm:py-18">
          <Container>
            <FadeIn>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Four apps. One philosophy.</h2>
            </FadeIn>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <FadeIn delay={0.02}>
                <ProductCard name="BloomSense" tagline="Personal wellness tracking." description="Descriptive tracking + education." icon={DropletsIcon} status="In development" href="/bloomsense" bullets={["Local-first", "Descriptive insights", "Privacy-forward"]} />
              </FadeIn>
              <FadeIn delay={0.05}>
                <ProductCard name="PoolSense" tagline="Read pool test strips." description="Scan strips, keep history." icon={WavesIcon} status="Prototype" href="/poolsense" bullets={["Camera-based", "History & trends", "Common strips"]} />
              </FadeIn>
              <FadeIn delay={0.08}>
                <ProductCard name="FoodSense" tagline="Track food signals." description="Log routines and observations." icon={UtensilsIcon} status="Concept" href="/foodsense" bullets={["Fast logging", "Descriptive patterns", "Privacy-first"]} />
              </FadeIn>
              <FadeIn delay={0.11}>
                <ProductCard name="MilkSense" tagline="Breast milk alcohol—private." description="Level 1/2/3 only. No numeric values." icon={MilkIcon} status="Concept" href="/milksense" bullets={["Level-only display", "History & timing", "No feeding decisions"]} />
              </FadeIn>
            </div>
          </Container>
        </section>

        <section id="privacy" className="py-14 sm:py-18">
          <Container>
            <FadeIn>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Privacy, by default</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
                Logs stay on-device by default. If we ever add optional sync, it will be opt-in and clearly explained.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/legal/privacy">Read privacy policy</Button>
                <Button variant="outline" href="/legal/terms">Terms &amp; Conditions</Button>
              </div>
            </FadeIn>
          </Container>
        </section>

        <section id="legal" className="py-14 sm:py-18">
          <Container>
            <FadeIn>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">App legal pages</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
                Use these URLs in your App Store / Google Play listings and inside each app.
              </p>
            </FadeIn>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <FadeIn delay={0.02}>
                <Card>
                  <CardContent>
                    <div className="text-base font-semibold tracking-tight">Omnise (master)</div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button href="/legal/privacy">Privacy Policy</Button>
                      <Button variant="outline" href="/legal/terms">Terms</Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.04}>
                <Card>
                  <CardContent>
                    <div className="text-base font-semibold tracking-tight">Per-app</div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        { name: "BloomSense", p: "/bloomsense/privacy", t: "/bloomsense/terms" },
                        { name: "PoolSense", p: "/poolsense/privacy", t: "/poolsense/terms" },
                        { name: "FoodSense", p: "/foodsense/privacy", t: "/foodsense/terms" },
                        { name: "MilkSense", p: "/milksense/privacy", t: "/milksense/terms" },
                      ].map((app) => (
                        <div key={app.name} className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                          <div className="font-semibold">{app.name}</div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <Button className="h-9" href={app.p}>Privacy</Button>
                            <Button className="h-9" variant="outline" href={app.t}>Terms</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-18">
          <Container>
            <FadeIn>
              <Card className="overflow-hidden rounded-[28px] border-slate-200/70 bg-slate-900 shadow-sm">
                <CardContent className="p-8 sm:p-10">
                  <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">Build clarity into your routine.</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-200">Get launch updates for the Omnise app family.</p>
                      <div id="waitlist" className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Button className="bg-white text-slate-900 hover:bg-white/90" href="/waitlist">
                          Join waitlist <ArrowRightIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="border-white/25 text-white hover:bg-white/10" href="mailto:press@omnise.ai">
                          Press & partnerships
                        </Button>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      {[
                        { Icon: ShieldIcon, t: "Privacy-first", d: "Local-first by default. Minimal collection." },
                        { Icon: LineChartIcon, t: "Insightful", d: "Descriptive trend views and summaries." },
                        { Icon: CpuIcon, t: "Smart capture", d: "Camera-assisted reading when appropriate." },
                      ].map((x, i) => (
                        <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center gap-2 text-white">
                            <x.Icon className="h-4 w-4" />
                            <div className="text-sm font-semibold">{x.t}</div>
                          </div>
                          <div className="mt-1 text-xs leading-5 text-slate-200">{x.d}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </Container>
        </section>
      </main>

      <footer className="border-t border-slate-200/70 bg-white/70 backdrop-blur">
        <Container>
          <div className="py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white shadow">
                  <SparklesIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Omnise</div>
                  <div className="text-xs text-slate-600">© {new Date().getFullYear()} Omnise</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
                <a className="hover:text-slate-900" href="/legal/privacy">Privacy</a>
                <a className="hover:text-slate-900" href="/legal/terms">Terms</a>
                <a className="hover:text-slate-900" href="#products">Products</a>
                <a className="hover:text-slate-900" href="#legal">Legal</a>
              </div>
            </div>
            <div className="mt-6 text-xs leading-5 text-slate-600">
              Omnise products are intended for personal tracking and educational insights. They are not medical devices and do not provide medical diagnosis.
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
