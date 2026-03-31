import { useState } from 'react';
import { Box, ExternalLink, Code2, Bot, ChevronLeft, Lock, ArrowRight, Zap } from 'lucide-react';
import { useUser, useClerk, UserButton } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';
import { prototypes as projects } from './data';
import './index.css';

function App() {
  const { isLoaded, user } = useUser();
  const { openSignIn } = useClerk();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories = ['All', 'AI Agents', 'Web Apps', 'Data Vis', 'Infrastructure'];
  
  const isAuthorized = user?.primaryEmailAddress?.emailAddress === 'josephpolanco909@gmail.com' ||
                       user?.primaryEmailAddress?.emailAddress === 'jlpolanco@bisonte.com' ||
                       user?.primaryEmailAddress?.emailAddress === 'jpolanco99@outlook.com' ||
                       user?.primaryEmailAddress?.emailAddress === 'joseph@barrage-ai.com' ||
                       user?.primaryEmailAddress?.emailAddress === 'alex@barrage-ai.com';

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const activeProject = projects.find(p => p.id === selectedProject);

  return (
    <div className="min-h-screen relative font-sans text-[var(--on-surface)] bg-[var(--surface)] pb-24">
      {/* Dynamic Ambient Background - The "Digital Curator" lighting effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-70">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--primary-fixed)] rounded-full blur-[160px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--secondary-fixed-dim)] rounded-full blur-[180px] opacity-10"></div>
      </div>

      {/* Header - Blurry Nav */}
      <header className="fixed top-0 w-full z-40 nav-blur px-4 md:px-6 py-3 md:py-4 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary-fixed)] to-[var(--secondary-fixed-dim)] flex items-center justify-center p-[1px]">
            <div className="w-full h-full bg-[var(--surface-lowest)] rounded-xl flex items-center justify-center overflow-hidden relative">
              <Box className="w-5 h-5 text-[var(--primary-fixed)] relative z-10" />
              <div className="absolute inset-0 bg-[var(--primary-fixed)] opacity-10"></div>
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight font-[Manrope] whitespace-nowrap">Barrage AI</span>
        </div>
        
        <div>
          {isLoaded && !user ? (
            <button 
              onClick={() => openSignIn()}
              className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-lg text-sm font-medium ghost-border text-[var(--on-surface-variant)] hover:text-white hover:bg-[var(--surface-variant)] transition-all"
            >
              <Lock className="w-4 h-4" />
              <span className="hidden sm:inline">Admin Login</span>
            </button>
          ) : isLoaded && user && isAuthorized ? (
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-xs tracking-widest uppercase whitespace-nowrap text-[var(--primary-fixed)] bg-[var(--primary-fixed)]/10 px-3 py-1 rounded-full border border-[var(--primary-fixed)]/20 shadow-[0_0_10px_rgba(125,244,255,0.2)]">PROTOTYPE MODE</span>
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "h-9 w-9 border border-[var(--outline-variant)]",
                    userButtonPopoverCard: "bg-[var(--surface-high)] border border-[var(--outline-variant)] text-white shadow-xl"
                  }
                }}
              />
            </div>
          ) : (
             <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-xs uppercase tracking-wider whitespace-nowrap text-[var(--on-surface-variant)]">Guest User</span>
              <UserButton />
            </div>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 pt-24 md:pt-32 px-4 md:px-6 lg:px-12 max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
        
        {/* Editorially Driven Hero */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4 md:mb-6 ghost-border glow-pulse">
            <Zap className="w-4 h-4 text-[var(--primary-fixed)]" />
            <span className="text-xs md:text-sm font-medium text-[var(--on-surface-variant)] whitespace-nowrap">Full-Stack Engineer · AI Agent Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-4 md:mb-8 font-[Manrope] tracking-tight [text-wrap:balance]">
            Building the <span className="text-gradient">Future of AI</span>
          </h1>
          <p className="text-base md:text-xl text-[var(--on-surface-variant)] max-w-2xl leading-relaxed font-light [text-wrap:pretty]">
            Welcome to the centralized repository and digital curator. Explore production-ready AI agents, responsive applications, and intelligent systems infrastructure engineered for scale.
          </p>
          {/* Gradient accent line */}
          <div className="gradient-line w-24 mt-6 md:mt-8 rounded-full"></div>
        </motion.section>

        {/* Prototype Interface */}
        <section className="flex flex-col gap-6 md:gap-10">
          
          {/* Heading row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-0 md:gap-6">
            <h2 className="text-xl md:text-2xl font-bold font-[Manrope] mb-3 md:mb-0">Laboratory Modules</h2>

            {/* Desktop pills — inline with heading */}
            <div className="hidden md:flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-[var(--on-surface)] text-[var(--surface-lowest)] shadow-[0_4px_12px_rgba(255,255,255,0.1)]'
                      : 'text-[var(--on-surface-variant)] bg-[var(--surface-low)] hover:bg-[var(--surface-variant)] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-[var(--outline-variant)] opacity-60 -mx-4 md:mx-0 mb-2 md:mb-0"></div>

          {/* Mobile pills — own full-width row below heading */}
          <div className="flex md:hidden gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category
                    ? 'bg-[var(--on-surface)] text-[var(--surface-lowest)] shadow-[0_4px_12px_rgba(255,255,255,0.1)]'
                    : 'text-[var(--on-surface-variant)] bg-[var(--surface-low)] hover:bg-[var(--surface-variant)] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 pb-8 md:pb-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, delay: idx * 0.04, ease: [0.25, 1, 0.5, 1] }}
                  onClick={() => setSelectedProject(project.id)}
                  className="group relative cursor-pointer hover-elevate rounded-[var(--radius-xl)] bg-[var(--surface-low)] border border-[var(--outline-variant)] overflow-hidden hover:border-[var(--primary-fixed)]/40 flex flex-col"
                >
                  {/* Subtle Light Leak */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary-fixed)] to-[var(--secondary-fixed-dim)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-[var(--radius-xl)] pointer-events-none"></div>
                  
                  {/* Image Presentation */}
                  <div className="aspect-[16/10] md:aspect-[4/3] bg-[var(--surface-lowest)] relative overflow-hidden flex items-center justify-center p-8 z-10 border-b border-[var(--outline-variant)]/50">
                    <div className="absolute inset-0 bg-cover bg-center opacity-90 transition-all duration-500"
                         style={{ backgroundImage: `url(${project.imageUrl})` }}>
                    </div>
                    {/* Fallback Icon */}
                    <div className="absolute p-4 rounded-2xl glass-card opacity-0 group-hover:opacity-80 transition-opacity">
                       <Bot className="w-10 h-10 text-[var(--on-surface-variant)]" />
                    </div>
                    
                    {/* Live Indicator */}
                    {/* fallback status for ui */}
                    {(project as any).status === 'live' && (
                      <div className="absolute top-4 right-4 flex items-center gap-2 bg-[var(--surface-high)]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[var(--primary-fixed)]/20 z-20">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-fixed)] animate-pulse shadow-[0_0_8px_rgba(125,244,255,0.8)]"></div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--primary-fixed)]">Live Prototype</span>
                      </div>
                    )}
                  </div>

                  {/* Content Meta */}
                  <div className="p-4 md:p-6 flex flex-col justify-between flex-grow bg-[var(--surface-low)] z-10">
                    <div>
                       <h3 className="text-lg md:text-xl font-bold font-[Manrope] mb-1.5 md:mb-2 text-[var(--primary-fixed)] [text-wrap:balance]">{project.title}</h3>
                       <p className="text-[var(--on-surface-variant)] text-sm leading-relaxed mb-4 md:mb-6 font-light line-clamp-3 [text-wrap:pretty]">
                        {project.description}
                       </p>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-[var(--outline-variant)]/50 pt-4">
                      <div className="flex items-center gap-1.5">
                        <Code2 className="w-4 h-4 text-[var(--on-surface-variant)]" />
                        <span className="text-xs uppercase tracking-widest text-[var(--on-surface-variant)]">{((project as any).tech || ['React', 'Python', 'AI']).slice(0, 2).join(' • ')}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[var(--primary-fixed)] flex items-center justify-center text-[var(--on-primary-fixed)] group-hover:shadow-[0_0_12px_rgba(125,244,255,0.4)] transition-shadow">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[var(--surface-lowest)] border-t border-[var(--outline-variant)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

            {/* Column 1 — Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--primary-fixed)] to-[var(--secondary-fixed-dim)] flex items-center justify-center p-[1px]">
                  <div className="w-full h-full bg-[var(--surface-lowest)] rounded-xl flex items-center justify-center">
                    <Box className="w-4 h-4 text-[var(--primary-fixed)]" />
                  </div>
                </div>
                <span className="font-bold text-lg font-[Manrope]">Barrage AI</span>
              </div>
              <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed max-w-xs">
                Production-grade AI agent systems. From autonomous sales pipelines to distributed multi-agent infrastructure.
              </p>
            </div>

            {/* Column 2 — Prototypes */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--on-surface-variant)] mb-1">Prototypes</h4>
              <div className="flex flex-col gap-3">
                {projects.slice(0, 6).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProject(p.id)}
                    className="text-sm text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors text-left"
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3 — Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--on-surface-variant)] mb-1">Get in Touch</h4>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-[var(--on-surface)]">Joseph Polanco</p>
                <p className="text-xs text-[var(--on-surface-variant)]">Full-Stack Software Engineer & AI Builder</p>
              </div>
              <div className="flex flex-col gap-3 mt-1">
                <a href="mailto:josephpolanco909@gmail.com" className="text-sm text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors">
                  josephpolanco909@gmail.com
                </a>
                <a href="tel:6466750765" className="text-sm text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors">
                  (646)-675-0765
                </a>
                <a href="https://linkedin.com/in/joseph-polanco" target="_blank" rel="noreferrer" className="text-sm text-[var(--on-surface-variant)] hover:text-[var(--primary-fixed)] transition-colors">
                  linkedin.com/in/joseph-polanco
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-[var(--outline-variant)]/50 flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="text-xs text-[var(--on-surface-variant)]">© {new Date().getFullYear()} Barrage AI. All rights reserved.</span>
            <span className="text-xs text-[var(--on-surface-variant)]">Engineered in New York</span>
          </div>
        </div>
      </footer>

      {/* Premium Detail Modal */}
      <AnimatePresence>
        {selectedProject && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
          >
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            ></div>
            
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full md:max-w-5xl md:max-h-[90vh] h-[92dvh] md:h-auto overflow-y-auto glass-card rounded-t-3xl md:rounded-2xl shadow-2xl z-10 ambient-glow flex flex-col border border-[var(--primary-fixed)]/20"
            >
              <div className="sticky top-0 z-30 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 nav-blur rounded-t-3xl md:rounded-t-2xl border-b border-[var(--outline-variant)]">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 text-sm font-medium text-[var(--on-surface-variant)] hover:text-white transition-colors group"
                >
                  <div className="p-1 rounded-md bg-[var(--surface-low)] group-hover:bg-[var(--surface-variant)] ghost-border"><ChevronLeft className="w-4 h-4" /></div>
                  <span className="hidden sm:inline">Back to Laboratory</span>
                </button>

                <div className="flex gap-2 md:gap-3">
                  {(activeProject as any).githubUrl && (
                    <a href={(activeProject as any).githubUrl} target="_blank" rel="noopener noreferrer" 
                       className="p-2 rounded-lg bg-[var(--surface-low)] hover:bg-[var(--surface-variant)] ghost-border transition-colors">
                      <Code2 className="w-4 h-4" />
                    </a>
                  )}
                  {(activeProject as any).demoUrl && (
                    <a href={(activeProject as any).demoUrl} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 btn-primary shadow-lg shadow-[var(--primary-fixed)]/20 text-sm">
                      <span>Launch</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Cover Image */}
              <div className="h-[200px] md:h-[380px] w-full relative bg-[var(--surface-lowest)] flex-shrink-0">
                <div className="absolute inset-0 bg-cover bg-center opacity-70"
                     style={{ backgroundImage: `url(${activeProject.imageUrl})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-high)] via-[var(--surface-high)]/20 to-transparent"></div>
                
                <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 right-4 md:right-auto max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-[var(--outline-variant)] mb-2 md:mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-fixed)]"></span>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold">{activeProject.category}</span>
                  </div>
                  <h2 className="text-2xl md:text-5xl font-black font-[Manrope] mb-1 md:mb-2 [text-wrap:balance]">{activeProject.title}</h2>
                  <p className="text-sm md:text-lg text-[var(--on-surface-variant)] line-clamp-2 md:line-clamp-none [text-wrap:pretty]">{activeProject.description}</p>
                </div>
              </div>

              {/* Content Region */}
              <div className="p-5 md:p-12 bg-[var(--surface-high)] rounded-b-2xl grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 flex-grow">
                 
                 <div className="lg:col-span-2 space-y-6 md:space-y-10">
                   <div>
                     <h3 className="text-base md:text-xl font-bold font-[Manrope] mb-2 md:mb-4 text-[var(--primary-fixed)]">System Architecture</h3>
                     <p className="text-[var(--on-surface-variant)] leading-relaxed text-sm md:text-[15px]">
                       The {activeProject.title} was engineered to push the boundaries of current agentic workflows. By stripping away heavy dependencies and utilizing a strictly defined modular architecture, we guarantee sub-second execution for large language model operations.
                     </p>
                   </div>
                   
                   <div className="space-y-3">
                     <h3 className="text-base md:text-xl font-bold font-[Manrope] mb-3 border-b border-[var(--outline-variant)] pb-2 inline-block">Key Modules</h3>
                     {((activeProject as any).features || ['Agent Orchestration', 'Distributed Cloud', 'RAG Verification', 'Zero-Latency Core']).map((feature: string, idx: number) => (
                       <div key={idx} className="flex gap-3 p-3.5 md:p-5 rounded-xl bg-[var(--surface-low)] border border-[var(--outline-variant)]/50 hover:border-[var(--outline-variant)] transition-colors">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-[var(--primary-fixed)]/10 flex items-center justify-center flex-shrink-0">
                            <Box className="w-3 h-3 text-[var(--primary-fixed)]" />
                          </div>
                          <span className="text-sm text-[var(--on-surface)]">{feature}</span>
                       </div>
                     ))}
                   </div>
                 </div>

                 {/* Sidebar */}
                 <div className="space-y-4 md:space-y-8">
                   <div className="p-4 md:p-6 rounded-xl bg-[var(--surface-lowest)] border border-[var(--outline-variant)] shadow-inner">
                     <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--on-surface-variant)] mb-3 md:mb-6">Technical Stack</h3>
                     <div className="flex flex-wrap gap-2 md:flex-col md:gap-3">
                       {((activeProject as any).tech || ['React', 'TypeScript', 'Python', 'PostgreSQL']).map((t: string, idx: number) => (
                         <span key={idx} className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium px-2.5 py-1 md:px-0 md:py-0 rounded-full md:rounded-none bg-[var(--surface-low)] md:bg-transparent border md:border-0 border-[var(--outline-variant)]">
                           <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-fixed-dim)] flex-shrink-0"></div>
                           {t}
                         </span>
                       ))}
                     </div>
                   </div>

                   <div className="p-4 md:p-6 rounded-xl bg-gradient-to-b from-[var(--surface-low)] to-[var(--surface-lowest)] border border-[var(--primary-fixed)]/10 relative overflow-hidden">
                     <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--secondary-fixed-dim)] rounded-full blur-[64px] opacity-10 pointer-events-none"></div>
                     <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--on-surface-variant)] mb-3 md:mb-6">Performance Profile</h3>
                     <div className="grid grid-cols-3 md:grid-cols-2 gap-3 md:gap-4">
                       <div>
                         <span className="block text-[10px] md:text-xs text-[var(--on-surface-variant)] mb-1">Latency</span>
                         <span className="text-base md:text-xl font-bold font-[Manrope] text-[var(--primary-fixed)]">{"<120ms"}</span>
                       </div>
                       <div>
                         <span className="block text-[10px] md:text-xs text-[var(--on-surface-variant)] mb-1">Uptime</span>
                         <span className="text-base md:text-xl font-bold font-[Manrope]">99.99%</span>
                       </div>
                       <div className="md:col-span-2 md:pt-2 md:border-t md:border-[var(--outline-variant)]">
                         <span className="block text-[10px] md:text-xs text-[var(--on-surface-variant)] mb-1">Throughput</span>
                         <span className="text-base md:text-xl font-bold font-[Manrope]">1.4M/s</span>
                       </div>
                     </div>
                   </div>
                 </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
