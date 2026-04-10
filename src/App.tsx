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

function App() {
  return (
    <div className="min-h-screen relative font-sans text-[var(--on-surface)] bg-[var(--surface)] pb-24">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-70">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--primary-fixed)] rounded-full blur-[160px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--secondary-fixed-dim)] rounded-full blur-[180px] opacity-10"></div>
        <div className="absolute top-[35%] right-[20%] w-[24rem] h-[24rem] bg-[var(--accent-fixed)] rounded-full blur-[180px] opacity-10"></div>
      </div>

      <header className="fixed top-0 w-full z-40 nav-blur px-4 md:px-6 py-3 md:py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary-fixed)] via-[var(--accent-fixed)] to-[var(--secondary-fixed-dim)] flex items-center justify-center p-[1px]">
              <div className="w-full h-full bg-[var(--surface-lowest)] rounded-xl flex items-center justify-center overflow-hidden relative">
                <Box className="w-5 h-5 text-[var(--primary-fixed)] relative z-10" />
                <div className="absolute inset-0 bg-[var(--primary-fixed)] opacity-10"></div>
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight font-[Manrope] whitespace-nowrap">
              Bridge AI
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#services"
              className="hidden sm:inline-flex px-4 py-2 rounded-full text-sm font-medium text-[var(--on-surface-variant)] bg-[var(--surface-low)] hover:bg-[var(--surface-variant)] hover:text-white transition-all"
            >
              Services
            </a>
            <a
              href="mailto:josephpolanco909@gmail.com?subject=Bridge%20AI%20Inquiry"
              className="inline-flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-lg text-sm font-medium btn-primary"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book a Call</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-24 md:pt-32 px-4 md:px-6 lg:px-12 max-w-7xl mx-auto flex flex-col gap-10 md:gap-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,420px)] gap-8 md:gap-12 items-end"
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4 md:mb-6 ghost-border glow-pulse">
              <Sparkles className="w-4 h-4 text-[var(--primary-fixed)]" />
              <span className="text-xs md:text-sm font-medium text-[var(--on-surface-variant)] whitespace-nowrap">
                AI Consulting · Automation Systems · Training
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-4 md:mb-8 font-[Manrope] tracking-tight [text-wrap:balance]">
              Bridge AI builds <span className="text-gradient">usable AI systems</span> for real teams.
            </h1>
            <p className="text-base md:text-xl text-[var(--on-surface-variant)] max-w-3xl leading-relaxed font-light [text-wrap:pretty]">
              From multi agent workflows to internal automation and executive training, Bridge AI helps companies turn AI interest into production grade systems that save time, reduce manual work, and actually get adopted.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="mailto:josephpolanco909@gmail.com?subject=Bridge%20AI%20Project"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 btn-primary shadow-lg shadow-[var(--primary-fixed)]/20"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how-we-work"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium glass-card ghost-border text-[var(--on-surface)] hover:bg-[var(--surface-variant)] transition-all"
              >
                See How We Work
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="gradient-line w-24 mt-6 md:mt-8 rounded-full"></div>
          </div>

          <div className="glass-card rounded-[var(--radius-xl)] border border-[var(--outline-variant)] p-5 md:p-6 ambient-glow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--on-surface-variant)] mb-1">
                  Engagement Snapshot
                </p>
                <h2 className="text-2xl font-bold font-[Manrope]">What Bridge AI delivers</h2>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-[var(--surface-low)] border border-[var(--outline-variant)] flex items-center justify-center">
                <Layers3 className="w-5 h-5 text-[var(--accent-fixed)]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-[var(--surface-low)] border border-[var(--outline-variant)]/60 p-4"
                >
                  <p className="text-2xl md:text-3xl font-black font-[Manrope] text-[var(--primary-fixed)]">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--on-surface-variant)] mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl bg-[var(--surface-lowest)] border border-[var(--outline-variant)]/60 p-4">
              <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
                Built by a senior engineer focused on AI agents, internal tooling, and workflows that fit the way teams already operate.
              </p>
            </div>
          </div>
        </motion.section>

        <section
          id="services"
          className="flex flex-col gap-6 md:gap-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--on-surface-variant)] mb-3">
                Core Services
              </p>
              <h2 className="text-2xl md:text-4xl font-bold font-[Manrope] [text-wrap:balance]">
                Three ways to make AI useful inside your business
              </h2>
            </div>
            <p className="text-sm md:text-base text-[var(--on-surface-variant)] max-w-xl">
              Strategy is only useful if it turns into shipping systems. Every engagement is built around execution, adoption, and measurable operational lift.
            </p>
          </div>

          <div className="border-b border-[var(--outline-variant)] opacity-60 -mx-4 md:mx-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon];

              return (
                <motion.article
                  key={service.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.25, 1, 0.5, 1] }}
                  className="group relative rounded-[var(--radius-xl)] bg-[var(--surface-low)] border border-[var(--outline-variant)] overflow-hidden hover:border-[var(--primary-fixed)]/40 hover-elevate"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--primary-fixed)] via-[var(--accent-fixed)] to-[var(--secondary-fixed-dim)] opacity-70"></div>
                  <div className="p-6 md:p-7 flex flex-col gap-6 h-full">
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--surface-lowest)] border border-[var(--outline-variant)] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[var(--primary-fixed)]" />
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--on-surface-variant)]">
                        {service.kicker}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-[Manrope] mb-3 text-[var(--primary-fixed)]">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-[15px] text-[var(--on-surface-variant)] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {service.offerings.map((offering) => (
                        <div
                          key={offering}
                          className="flex gap-3 p-3 rounded-xl bg-[var(--surface-lowest)] border border-[var(--outline-variant)]/50"
                        >
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-[var(--primary-fixed)]/10 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-3 h-3 text-[var(--primary-fixed)]" />
                          </div>
                          <span className="text-sm text-[var(--on-surface)]">{offering}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={service.ctaHref}
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--on-surface)] hover:text-[var(--primary-fixed)] transition-colors"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section
          id="how-we-work"
          className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-6 md:gap-8 items-start"
        >
          <div className="glass-card rounded-[var(--radius-xl)] border border-[var(--outline-variant)] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--on-surface-variant)] mb-3">
              How We Work
            </p>
            <h2 className="text-2xl md:text-4xl font-bold font-[Manrope] mb-4 [text-wrap:balance]">
              Structured enough to ship fast, flexible enough to fit your team
            </h2>
            <p className="text-sm md:text-base text-[var(--on-surface-variant)] leading-relaxed">
              The process is designed to move from opportunity mapping to production rollout without turning the engagement into a research exercise that never lands.
            </p>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="rounded-[var(--radius-xl)] bg-[var(--surface-low)] border border-[var(--outline-variant)] p-5 md:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--surface-lowest)] border border-[var(--outline-variant)] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold font-[Manrope] text-[var(--primary-fixed)]">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-[Manrope] mb-2">{step.title}</h3>
                    <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 md:gap-8">
          <div className="rounded-[var(--radius-xl)] bg-[var(--surface-low)] border border-[var(--outline-variant)] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--on-surface-variant)] mb-3">
              Why Bridge AI
            </p>
            <h2 className="text-2xl md:text-4xl font-bold font-[Manrope] mb-6 [text-wrap:balance]">
              Technical depth with operator level pragmatism
            </h2>
            <div className="grid gap-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-[var(--surface-lowest)] border border-[var(--outline-variant)]/60 p-4 md:p-5"
                >
                  <h3 className="text-base font-bold font-[Manrope] mb-2 text-[var(--primary-fixed)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-xl)] bg-[var(--surface-low)] border border-[var(--outline-variant)] p-6 md:p-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--on-surface-variant)] mb-3">
                  Case Studies
                </p>
                <h2 className="text-2xl md:text-4xl font-bold font-[Manrope] [text-wrap:balance]">
                  Placeholder proof, ready for live client stories
                </h2>
              </div>
              <Calendar className="w-6 h-6 text-[var(--accent-fixed)] flex-shrink-0" />
            </div>

            <div className="grid gap-4">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="relative overflow-hidden rounded-2xl border border-[var(--outline-variant)] bg-[var(--surface-lowest)] p-5"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[var(--primary-fixed)] to-[var(--accent-fixed)]"></div>
                  <div className="pl-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--on-surface-variant)] mb-2">
                      {study.type}
                    </p>
                    <h3 className="text-lg font-bold font-[Manrope] mb-2">{study.title}</h3>
                    <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed mb-3">
                      {study.summary}
                    </p>
                    <p className="text-sm font-semibold text-[var(--primary-fixed)]">{study.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[var(--radius-xl)] border border-[var(--outline-variant)] bg-[var(--surface-low)] overflow-hidden">
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div className="p-6 md:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--on-surface-variant)] mb-3">
                Next Step
              </p>
              <h2 className="text-2xl md:text-4xl font-bold font-[Manrope] mb-4 [text-wrap:balance]">
                Need AI systems, not slide decks?
              </h2>
              <p className="text-sm md:text-base text-[var(--on-surface-variant)] leading-relaxed max-w-2xl">
                Bridge AI works best with teams that already know AI matters and need a partner who can translate that urgency into shipped tooling, automation, and training.
              </p>
            </div>
            <div className="relative bg-[var(--surface-lowest)] border-t lg:border-t-0 lg:border-l border-[var(--outline-variant)] p-6 md:p-10 flex flex-col justify-between gap-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,158,88,0.12),transparent_45%)] pointer-events-none"></div>
              <div className="relative">
                <h3 className="text-lg font-bold font-[Manrope] mb-3">Start with a focused conversation</h3>
                <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
                  Share the workflow, team bottleneck, or training need. Bridge AI will map the fastest path to something real.
                </p>
              </div>
              <div className="relative flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href="mailto:josephpolanco909@gmail.com?subject=Bridge%20AI%20Discovery%20Call"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 btn-primary"
                >
                  Email Bridge AI
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/joseph-polanco"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium glass-card ghost-border text-[var(--on-surface)] hover:bg-[var(--surface-variant)] transition-all"
                >
                  View LinkedIn
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-[var(--surface-lowest)] border-t border-[var(--outline-variant)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--primary-fixed)] via-[var(--accent-fixed)] to-[var(--secondary-fixed-dim)] flex items-center justify-center p-[1px]">
                  <div className="w-full h-full bg-[var(--surface-lowest)] rounded-xl flex items-center justify-center">
                    <Box className="w-4 h-4 text-[var(--primary-fixed)]" />
                  </div>
                </div>
                <span className="font-bold text-lg font-[Manrope]">Bridge AI</span>
              </div>
              <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed max-w-xs">
                AI consulting, automation systems, and education for teams that want deployed outcomes instead of vague experimentation.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--on-surface-variant)] mb-1">
                Focus Areas
              </h4>
              <div className="flex flex-col gap-3">
                <a href="#services" className="text-sm text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors">
                  AI Consulting
                </a>
                <a href="#services" className="text-sm text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors">
                  Automation Solutions
                </a>
                <a href="#services" className="text-sm text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors">
                  AI Education and Training
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--on-surface-variant)] mb-1">
                Contact
              </h4>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-[var(--on-surface)]">Joseph Polanco</p>
                <p className="text-xs text-[var(--on-surface-variant)]">AI systems and automation specialist</p>
              </div>
              <div className="flex flex-col gap-3 mt-1">
                <a href="mailto:josephpolanco909@gmail.com" className="text-sm text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors">
                  josephpolanco909@gmail.com
                </a>
                <a href="tel:6466750765" className="text-sm text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors">
                  (646)-675-0765
                </a>
                <a
                  href="https://linkedin.com/in/joseph-polanco"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors"
                >
                  linkedin.com/in/joseph-polanco
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-[var(--outline-variant)]/50 flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="text-xs text-[var(--on-surface-variant)]">
              © {new Date().getFullYear()} Bridge AI. All rights reserved.
            </span>
            <span className="text-xs text-[var(--on-surface-variant)]">Engineered in New York</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
