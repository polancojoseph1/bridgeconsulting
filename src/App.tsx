import {
  ArrowRight,
  Bot,
  Box,
  Briefcase,
  Calendar,
  ChevronRight,
  GraduationCap,
  Layers3,
  MessageSquare,
  Sparkles,
  Workflow,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  caseStudies,
  differentiators,
  processSteps,
  services,
  stats,
} from './data';
import './index.css';

const iconMap = {
  consulting: Briefcase,
  automation: Workflow,
  education: GraduationCap,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: -20 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

function App() {
  return (
    <div className="min-h-screen relative text-[var(--on-surface)] bg-[var(--surface)] overflow-x-hidden">

      {/* ── Ambient background blobs ─────────────────────────────── */}
      <div aria-hidden className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="float-slow absolute -top-[12%] -left-[8%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-[var(--primary-fixed)] blur-[160px] opacity-[0.04]" />
        <div className="absolute -bottom-[14%] -right-[8%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[var(--secondary-fixed-dim)] blur-[180px] opacity-[0.04]" />
        <div className="absolute top-[40%] right-[18%] w-[28vw] h-[28vw] max-w-[400px] max-h-[400px] rounded-full bg-[var(--accent-fixed)] blur-[140px] opacity-[0.03]" />
      </div>

      {/* ── Navigation ───────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 nav-blur">
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="Bridge AI home">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary-fixed)] via-[var(--accent-fixed)] to-[var(--secondary-fixed-dim)] p-[1.5px] flex-shrink-0">
              <div className="w-full h-full rounded-[6px] bg-[var(--surface-lowest)] flex items-center justify-center">
                <Box className="w-4 h-4 text-[var(--primary-fixed)]" />
              </div>
            </div>
            <span className="font-bold text-base tracking-tight font-[Manrope] text-[var(--on-surface)]">
              Bridge AI
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: '#services', label: 'Services' },
              { href: '#how-we-work', label: 'Process' },
              { href: '#why-us', label: 'Why Us' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[var(--on-surface-variant)] hover:text-[var(--on-surface)] rounded-lg hover:bg-white/5 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="mailto:josephpolanco909@gmail.com?subject=Bridge%20AI%20Inquiry"
            className="btn-primary gap-2"
          >
            <MessageSquare className="w-4 h-4 flex-shrink-0" />
            Book a Call
          </a>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-24 flex flex-col gap-24 md:gap-32">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-col gap-6 max-w-4xl"
          >
            {/* Eyebrow */}
            <div className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[var(--primary-fixed)]/15 glow-pulse">
              <Sparkles className="w-3.5 h-3.5 text-[var(--primary-fixed)] flex-shrink-0" />
              <span className="text-xs font-semibold tracking-wide text-[var(--on-surface-variant)]">
                AI Consulting · Automation Systems · Executive Training
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-[82px] font-black leading-[1.04] tracking-tight font-[Manrope] text-[var(--on-surface)]">
              Bridge AI builds{' '}
              <span className="text-gradient">usable AI systems</span>{' '}
              for real teams.
            </h1>

            {/* Sub */}
            <p className="text-base md:text-xl text-[var(--on-surface-variant)] max-w-2xl leading-relaxed font-light">
              From multi-agent workflows to internal automation and executive training — we help companies turn AI interest into production-grade systems that save time, reduce manual work, and actually get adopted.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="mailto:josephpolanco909@gmail.com?subject=Bridge%20AI%20Project"
                className="btn-primary gap-2 px-6 py-3 text-sm"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </a>
              <a
                href="#how-we-work"
                className="btn-ghost gap-2 px-6 py-3 text-sm"
              >
                See How We Work
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              </a>
            </div>

            <div className="gradient-line w-20 mt-2" />
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.2}
            variants={fadeUp}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--outline-variant)]/30 rounded-[var(--radius-xl)] overflow-hidden border border-[var(--outline-variant)]/30"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--surface-low)] px-6 py-5 flex flex-col gap-1"
              >
                <span className="text-3xl font-black font-[Manrope] text-gradient leading-none">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-[var(--on-surface-variant)] uppercase tracking-wide mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── Services ─────────────────────────────────────────────── */}
        <section id="services" className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="section-label mb-3">Core Services</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[Manrope]">
                Three ways to make AI useful<br className="hidden md:block" /> inside your business
              </h2>
            </div>
            <p className="text-sm text-[var(--on-surface-variant)] max-w-sm leading-relaxed">
              Strategy is only useful if it turns into shipped systems. Every engagement is built around execution, adoption, and measurable lift.
            </p>
          </div>

          <hr className="divider" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.article
                  key={service.title}
                  initial="hidden"
                  whileInView="show"
                  custom={idx * 0.08}
                  variants={fadeUp}
                  viewport={{ once: true, amount: 0.15 }}
                  className="relative rounded-[var(--radius-xl)] bg-[var(--surface-low)] border border-[var(--outline-variant)]/60 overflow-hidden flex flex-col card-hover card-top-stripe"
                >
                  <div className="p-6 flex flex-col gap-5 h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="icon-box">
                        <Icon className="w-5 h-5 text-[var(--primary-fixed)]" />
                      </div>
                      <span className="section-label text-right">{service.kicker}</span>
                    </div>

                    {/* Title + description */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold font-[Manrope] text-[var(--on-surface)]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Offerings */}
                    <ul className="flex flex-col gap-2 mt-auto">
                      {service.offerings.map((offering) => (
                        <li
                          key={offering}
                          className="flex items-start gap-2.5 text-sm text-[var(--on-surface-variant)]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[var(--primary-fixed)] flex-shrink-0 mt-0.5" />
                          <span>{offering}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA link */}
                    <a
                      href={service.ctaHref}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary-fixed)] hover:opacity-80 transition-opacity pt-2"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ── Process ──────────────────────────────────────────────── */}
        <section id="how-we-work" className="grid lg:grid-cols-[1fr_1.3fr] gap-8 items-start">

          {/* Left — description panel */}
          <div className="glass-card rounded-[var(--radius-xl)] p-7 md:p-9 flex flex-col gap-4 ambient-glow lg:sticky lg:top-24">
            <p className="section-label">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[Manrope]">
              Structured enough to ship fast. Flexible enough to fit your team.
            </h2>
            <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
              The process moves from opportunity mapping to production rollout without turning the engagement into a research exercise that never lands.
            </p>
            <div className="gradient-line w-16 mt-2" />
          </div>

          {/* Right — steps */}
          <div className="flex flex-col gap-3">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="show"
                custom={idx * 0.07}
                variants={fadeRight}
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start gap-5 rounded-[var(--radius-xl)] bg-[var(--surface-low)] border border-[var(--outline-variant)]/60 p-5 md:p-6 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--surface-lowest)] border border-[var(--outline-variant)]/60 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold font-[Manrope] text-[var(--primary-fixed)]">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold font-[Manrope] mb-1.5">{step.title}</h3>
                  <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Why Us + Case Studies ─────────────────────────────────── */}
        <section id="why-us" className="grid lg:grid-cols-2 gap-5 items-start">

          {/* Differentiators */}
          <div className="rounded-[var(--radius-xl)] bg-[var(--surface-low)] border border-[var(--outline-variant)]/60 p-7 md:p-9 flex flex-col gap-6 h-full">
            <div>
              <p className="section-label mb-3">Why Bridge AI</p>
              <h2 className="text-2xl md:text-3xl font-bold font-[Manrope]">
                Technical depth with operator-level pragmatism
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius-lg)] bg-[var(--surface-lowest)] border border-[var(--outline-variant)]/50 p-5"
                >
                  <h3 className="text-sm font-bold font-[Manrope] text-[var(--primary-fixed)] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="rounded-[var(--radius-xl)] bg-[var(--surface-low)] border border-[var(--outline-variant)]/60 p-7 md:p-9 flex flex-col gap-6 h-full">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-label mb-3">Case Studies</p>
                <h2 className="text-2xl md:text-3xl font-bold font-[Manrope]">
                  Results from real engagements
                </h2>
              </div>
              <div className="icon-box flex-shrink-0 mt-1">
                <Calendar className="w-5 h-5 text-[var(--accent-fixed)]" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--surface-lowest)] border border-[var(--outline-variant)]/50 p-5"
                >
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[var(--primary-fixed)] to-[var(--secondary-fixed-dim)] rounded-l-full" />
                  <div className="pl-4">
                    <p className="section-label mb-1.5">{study.type}</p>
                    <h3 className="text-sm font-bold font-[Manrope] mb-2">{study.title}</h3>
                    <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed mb-2.5">
                      {study.summary}
                    </p>
                    <p className="text-xs font-semibold text-[var(--primary-fixed)]">
                      {study.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────────────────────── */}
        <section className="rounded-[var(--radius-xl)] overflow-hidden border border-[var(--outline-variant)]/60 bg-[var(--surface-low)]">
          <div className="grid lg:grid-cols-[1fr_auto] items-stretch">

            {/* Left copy */}
            <div className="p-8 md:p-12 flex flex-col gap-4 max-w-2xl">
              <p className="section-label">Next Step</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[Manrope]">
                Need AI systems, not slide decks?
              </h2>
              <p className="text-sm md:text-base text-[var(--on-surface-variant)] leading-relaxed">
                Bridge AI works best with teams that already know AI matters and need a partner who can translate that urgency into shipped tooling, automation, and training programs that stick.
              </p>
            </div>

            {/* Right panel */}
            <div className="relative bg-[var(--surface-lowest)] border-t lg:border-t-0 lg:border-l border-[var(--outline-variant)]/60 p-8 md:p-12 flex flex-col justify-center gap-5 min-w-[280px]">
              <div aria-hidden className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,101,0.06),transparent_55%)]" />
              <div className="relative flex flex-col gap-4">
                <div>
                  <h3 className="text-base font-bold font-[Manrope] mb-1.5">
                    Start with a focused conversation
                  </h3>
                  <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
                    Share the workflow, bottleneck, or training need. We will map the fastest path to something real.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="mailto:josephpolanco909@gmail.com?subject=Bridge%20AI%20Discovery%20Call"
                    className="btn-primary gap-2"
                  >
                    Email Bridge AI
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </a>
                  <a
                    href="https://linkedin.com/in/joseph-polanco"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost gap-2"
                  >
                    View LinkedIn
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-[var(--outline-variant)]/40 bg-[var(--surface-lowest)]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary-fixed)] via-[var(--accent-fixed)] to-[var(--secondary-fixed-dim)] p-[1.5px] flex-shrink-0">
                  <div className="w-full h-full rounded-[6px] bg-[var(--surface-lowest)] flex items-center justify-center">
                    <Box className="w-4 h-4 text-[var(--primary-fixed)]" />
                  </div>
                </div>
                <span className="font-bold text-base font-[Manrope]">Bridge AI</span>
              </div>
              <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed max-w-xs">
                AI consulting, automation systems, and training for teams that want deployed outcomes instead of vague experimentation.
              </p>
            </div>

            {/* Focus areas */}
            <div className="flex flex-col gap-3">
              <h4 className="section-label mb-1">Focus Areas</h4>
              {[
                { label: 'AI Consulting', href: '#services' },
                { label: 'Automation Systems', href: '#services' },
                { label: 'AI Education & Training', href: '#services' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <h4 className="section-label mb-1">Contact</h4>
              <div className="mb-1">
                <p className="text-sm font-semibold text-[var(--on-surface)]">Joseph Polanco</p>
                <p className="text-xs text-[var(--on-surface-variant)]">AI systems & automation specialist</p>
              </div>
              {[
                { label: 'josephpolanco909@gmail.com', href: 'mailto:josephpolanco909@gmail.com' },
                { label: '(646) 675-0765', href: 'tel:6466750765' },
                { label: 'linkedin.com/in/joseph-polanco', href: 'https://linkedin.com/in/joseph-polanco', external: true },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="text-sm text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <hr className="divider mt-10 mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[var(--on-surface-variant)]">
              © {new Date().getFullYear()} Bridge AI. All rights reserved.
            </p>
            <p className="text-xs text-[var(--on-surface-variant)]">Engineered in New York</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
