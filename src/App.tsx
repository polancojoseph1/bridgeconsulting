import React, { useState } from 'react';
import { Settings, Plus, X, Box, ExternalLink, Code2, Cloud, Network, Bot, ChevronLeft } from 'lucide-react';
import { useUser, useClerk, UserButton } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import { prototypes, type Prototype } from './data';

interface Pill {
  id: string;
  label: string;
}

function App() {
  const { user, isLoaded } = useUser();
  const { openSignIn } = useClerk();

  const allowedEmails = ['josephpolanco909@gmail.com', 'diony.monday@gmail.com', 'dionymonday@gmail.com', 'jhanielbonilla@gmail.com'];
  const userEmail = user?.primaryEmailAddress?.emailAddress?.toLowerCase() || '';
  const isAdmin = allowedEmails.includes(userEmail);
  const [pills, setPills] = useState<Pill[]>([
    { id: '1', label: 'All' },
    { id: '2', label: 'AI Agents' },
    { id: '3', label: 'Web Apps' },
    { id: '4', label: 'Data Vis' },
    { id: '5', label: 'Infrastructure' }
  ]);
  const [activePill, setActivePill] = useState('1');
  const [isEditingPill, setIsEditingPill] = useState(false);
  const [newPillLabel, setNewPillLabel] = useState('');
  const [selectedPrototype, setSelectedPrototype] = useState<Prototype | null>(null);



  const handleAddPill = () => {
    if (newPillLabel.trim()) {
      setPills([...pills, { id: Date.now().toString(), label: newPillLabel.trim() }]);
      setNewPillLabel('');
      setIsEditingPill(false);
    }
  };

  const handleRemovePill = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setPills(pills.filter(p => p.id !== id));
    if (activePill === id) setActivePill('1');
  };

  const filteredPrototypes = activePill === '1' 
    ? prototypes 
    : prototypes.filter(p => p.category === pills.find(pill => pill.id === activePill)?.label);

  const renderIcon = (category: string) => {
    switch (category) {
      case 'AI Agents': return <Bot size={40} style={{ color: '#60a5fa' }} />;
      case 'Web Apps': return <Box size={40} style={{ color: '#c084fc' }} />;
      case 'Infrastructure': return <Cloud size={40} style={{ color: '#8b5cf6' }} />;
      case 'Data Vis': return <Network size={40} style={{ color: '#2dd4bf' }} />;
      default: return <Code2 size={40} style={{ color: '#2dd4bf' }} />;
    }
  };

  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>

      <header>
        <div 
          className="logo"
          onClick={() => {
            setSelectedPrototype(null);
            setActivePill('1');
          }}
          style={{ cursor: 'pointer' }}
        >
          <Box style={{ color: '#3b82f6' }} />
          <span className="gradient-text">Barrage AI</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {isLoaded && user ? (
            <>
              {isAdmin && <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>Administrator</span>}
              {!isAdmin && <span className="pill" style={{ margin: 0, border: '1px dashed #eab308', color: '#eab308', background: 'transparent' }}>Prototype Mode</span>}
              <UserButton />
            </>
          ) : (
            <button 
              className="admin-toggle"
              onClick={() => openSignIn({
                appearance: {
                  elements: {
                    footerAction: { display: 'none' }
                  }
                }
              })}
            >
              Admin Login
            </button>
          )}
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>
            Building the <br/>
            <span className="gradient-text">Future of AI</span>
          </h1>
          <p>
            Welcome to my prototype repository. Explore cutting-edge AI agents, applications, and experiments engineered for next-level UX.
          </p>

          <div className="pills-container">
            {pills.map((pill) => (
              <div 
                key={pill.id}
                className={`pill ${activePill === pill.id ? 'active' : ''}`}
                onClick={() => setActivePill(pill.id)}
              >
                {pill.label}
                {isAdmin && pill.id !== '1' && (
                  <button 
                    className="pill-edit"
                    onClick={(e) => handleRemovePill(e, pill.id)}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            ))}
            {isAdmin && (
              <button 
                className="pill add-pill-btn"
                onClick={() => setIsEditingPill(true)}
              >
                <Plus size={16} /> Add Category
              </button>
            )}
          </div>
        </section>

        <section className="prototypes-grid">
          {filteredPrototypes.map((proto) => (
            <div key={proto.id} className="prototype-card" onClick={() => setSelectedPrototype(proto)} style={{ cursor: 'pointer' }}>
              <div className="card-image-placeholder">
                <div className="card-overlay"></div>
                {renderIcon(proto.category)}
              </div>
              <div className="card-content">
                <h3 className="card-title">{proto.title}</h3>
                <p className="card-desc">{proto.description}</p>
                <div className="card-footer">
                  <span className="pill" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', margin: 0, cursor: 'default' }}>
                    {proto.category}
                  </span>
                  {proto.hasUI ? (
                    <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      View <ExternalLink size={14} />
                    </button>
                  ) : (
                    <span style={{ 
                      fontSize: '0.75rem', 
                      color: 'var(--text-secondary)', 
                      fontWeight: 600, 
                      padding: '0.45rem 1rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px dashed var(--card-border)',
                      borderRadius: '0.5rem',
                      cursor: 'not-allowed',
                      userSelect: 'none'
                    }}>
                      Backend API
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          {filteredPrototypes.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
              No prototypes found in this category.
            </div>
          )}
        </section>
      </main>

      {/* Add Pill Dialog */}
      {isEditingPill && (
        <div className="dialog-overlay" onClick={() => setIsEditingPill(false)}>
          <div className="dialog-content" onClick={e => e.stopPropagation()}>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: 'white' }}>Add New Category Pill</h3>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g. LLM Tools"
              value={newPillLabel}
              onChange={(e) => setNewPillLabel(e.target.value)}
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleAddPill()}
            />
            <div className="dialog-actions">
              <button className="btn-secondary" onClick={() => setIsEditingPill(false)}>Cancel</button>
              <button className="btn-primary" onClick={handleAddPill}>Add Pill</button>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedPrototype && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="project-details-overlay"
          >
            <div className="pd-header">
              <button className="pd-back-btn" onClick={() => setSelectedPrototype(null)}>
                <ChevronLeft size={18} /> Back to Projects
              </button>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span className="pill" style={{ margin: 0, cursor: 'default' }}>{selectedPrototype.category}</span>
                <span className="pill" style={{ margin: 0, background: 'rgba(255,255,255,0.05)', cursor: 'default' }}>
                  {selectedPrototype.hasUI ? 'Full Stack Interface' : 'Backend Engine'}
                </span>
              </div>
            </div>

            <div className="pd-hero">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                  className="pd-title gradient-text"
                >
                  {selectedPrototype.title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="pd-subtitle"
                >
                  {selectedPrototype.details}
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 100 }}
              >
                {selectedPrototype.imageUrl ? (
                  <img src={selectedPrototype.imageUrl} alt={selectedPrototype.title} className="pd-image" />
                ) : (
                  <div className="pd-image" style={{ height: '300px', background: 'var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Network size={64} color="var(--accent-color)" />
                  </div>
                )}
              </motion.div>
            </div>

            <div className="pd-content">
              {/* Introduction */}
              <motion.div className="pd-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p style={{ fontSize: '1.35rem', lineHeight: '2', color: 'white', fontWeight: 300 }}>
                  {selectedPrototype.article?.introduction || selectedPrototype.details}
                </p>
              </motion.div>

              {/* The Challenge */}
              {selectedPrototype.article?.challenge && (
                <motion.div className="pd-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h3>The Challenge</h3>
                  <p>{selectedPrototype.article.challenge}</p>
                </motion.div>
              )}

              {/* Secondary Image Mockup */}
              {selectedPrototype.secondaryImage && (
                <motion.div className="pd-section" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                  <img src={selectedPrototype.secondaryImage} alt={`${selectedPrototype.title} Interface`} className="pd-image" style={{ margin: '3rem 0', boxShadow: '0 30px 60px rgba(59, 130, 246, 0.15)' }} />
                </motion.div>
              )}

              {/* Architecture */}
              {selectedPrototype.article?.architectureOverview && (
                <motion.div className="pd-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h3>Architecture Overview</h3>
                  <p>{selectedPrototype.article.architectureOverview}</p>
                </motion.div>
              )}

              {/* Technical Implementation */}
              {selectedPrototype.article?.technicalImplementation && (
                <motion.div className="pd-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h3>Technical Implementation</h3>
                  <p>{selectedPrototype.article.technicalImplementation}</p>
                </motion.div>
              )}

              {/* Impact */}
              {selectedPrototype.article?.impactAndFuture && (
                <motion.div className="pd-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h3>Impact & Future Roadmap</h3>
                  <p>{selectedPrototype.article.impactAndFuture}</p>
                </motion.div>
              )}
            </div>
            
            <div style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--card-border)', marginTop: 'auto' }}>
              <button className="btn-primary" onClick={() => setSelectedPrototype(null)} style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
                Close Case Study
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer style={{ 
        marginTop: 'auto', 
        paddingTop: '4rem', 
        paddingBottom: '2rem', 
        borderTop: '1px solid var(--card-border)', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '1rem', 
        textAlign: 'center',
        width: '100%'
      }}>
        <div className="logo" style={{ justifyContent: 'center', marginBottom: '0.5rem' }}>
          <Box style={{ color: '#3b82f6', width: 24, height: 24 }} />
          <span className="gradient-text" style={{ fontSize: '1.25rem' }}>Barrage AI</span>
        </div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8' }}>
          <p style={{ margin: 0, fontWeight: 600 }}>Joseph Polanco</p>
          <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.8 }}>Full-Stack Software Engineer & AI Builder</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="mailto:josephpolanco909@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              josephpolanco909@gmail.com
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="tel:6466750765" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              (646)-675-0765
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="https://linkedin.com/in/josephpolanco" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
