import React, { useEffect, useState } from 'react';
import { Menu, X, Search, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const menuSections = [
  {
    id: 'academics',
    label: 'Academics',
    description: 'A rigorous academic ecosystem designed to build confident scholars, innovators, and future leaders.',
    links: ['Programs', 'Departments', 'Curriculum', 'Faculty', 'Academic Calendar'],
  },
  {
    id: 'campus-life',
    label: 'Campus Life',
    description: 'A vibrant residential and co-curricular environment that shapes character, community, and confidence.',
    links: ['Hostels', 'Library', 'Sports', 'Clubs & Societies', 'Events'],
  },
  {
    id: 'admissions',
    label: 'Admissions',
    description: 'Clear pathways for talented young women to join a prestigious and supportive academic community.',
    links: ['Apply Now', 'Eligibility', 'Fees', 'Scholarships', 'Important Dates'],
  },
  {
    id: 'research',
    label: 'Research',
    description: 'Centers of excellence, applied innovation, and interdisciplinary research driving real-world impact.',
    links: ['Research Centers', 'Projects', 'Publications', 'Innovation Hub', 'Patents'],
  },
  {
    id: 'placements',
    label: 'Placements',
    description: 'Industry partnerships and career support that connect ambition with opportunity.',
    links: ['Recruiters', 'Placement Cell', 'Training', 'Internships', 'Alumni Careers'],
  },
  {
    id: 'about',
    label: 'About',
    description: 'The university’s legacy, mission, values, and institutional vision presented with clarity and pride.',
    links: ['Leadership', 'History', 'Vision & Mission', 'Accreditations', 'Contact'],
  },
  {
    id: 'news',
    label: 'News',
    description: 'Announcements, updates, and stories that reflect the university’s momentum and achievements.',
    links: ['Latest News', 'Events', 'Announcements', 'Media Gallery', 'Notices'],
  },
];

const quickActions = [
  { label: 'Apply Now', href: '#' },
  { label: 'Visit Campus', href: '#' },
  { label: 'Download Brochure', href: '#' },
];

const sectionById = Object.fromEntries(menuSections.map((section) => [section.id, section]));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const activeMenuSection = activeSection ? sectionById[activeSection] : null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        setActiveSection(null);
        setShowDetails(false);
      }
      return next;
    });
  };

  const activateSection = (sectionId) => {
    setActiveSection(sectionId);
    setShowDetails(false);
  };

  const resetPanels = () => {
    setActiveSection(null);
    setShowDetails(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-transparent py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch overflow-hidden bg-transparent rounded-none">
          <div className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-[1.02]">
              <img src="/logo.png" alt="VWU Logo" className="w-full h-full object-cover scale-[1.2] hover:scale-[1.13] transition-transform duration-500" />
            </div>
            <div className="flex flex-col text-white leading-none pr-2">
              <span className="font-heading font-semibold text-[1.65rem] sm:text-[1.9rem] tracking-[0.03em]">VISHNU</span>
              <span className="text-[0.72rem] sm:text-[0.82rem] uppercase tracking-[0.24em] opacity-90 font-semibold mt-1">Women's</span>
              <span className="text-[0.72rem] sm:text-[0.82rem] uppercase tracking-[0.24em] opacity-90 font-semibold mt-1">University</span>
            </div>
          </div>

          <div className="hidden xl:flex flex-1 items-center gap-4 px-6 text-white/95 min-w-0">
            <span className="text-[#FF7B00] text-3xl leading-none">•</span>
            <p className="text-[1.02rem] font-medium tracking-tight truncate">
              Empowering women to learn, lead, and transform the world.
            </p>
          </div>

          <div className="ml-auto flex items-stretch shrink-0">
            <button
              type="button"
              className="hidden md:flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4 text-white/95 transition-all duration-300 hover:text-[#FF7B00] hover:bg-white/5"
              aria-label="Search"
            >
              <Search size={22} />
              <span className="text-base font-medium">Search</span>
            </button>
            <button
              type="button"
              onClick={toggleMenu}
              className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4 text-white/95 transition-all duration-300 hover:text-[#FF7B00] hover:bg-white/5 border-l border-white/10"
              aria-expanded={mobileMenuOpen}
              aria-controls="site-navigation-overlay"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              <span className="hidden sm:inline text-base font-medium">Menu</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="site-navigation-overlay"
            onMouseLeave={resetPanels}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`absolute top-[calc(100%+0.75rem)] right-4 sm:right-6 xl:right-8 max-h-[calc(100vh-6rem)] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1F4D3A]/40 backdrop-blur-xl ${activeMenuSection ? 'left-4 lg:left-6 xl:left-8' : 'left-auto w-[calc(100vw-2rem)] sm:w-[50vw] lg:w-[48vw] xl:w-[46vw]'}`}
          >
            <div className="max-h-[calc(100vh-6rem)] overflow-hidden px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
              <div className={`grid h-full gap-4 lg:gap-6 items-stretch ${activeMenuSection ? (showDetails ? 'grid-cols-1 lg:grid-cols-[minmax(220px,0.82fr)_minmax(260px,1fr)_minmax(220px,0.95fr)]' : 'grid-cols-1 lg:grid-cols-[minmax(260px,1fr)_minmax(220px,0.95fr)]') : 'grid-cols-1 lg:grid-cols-[minmax(280px,0.95fr)] lg:justify-end'}`}>
                {activeMenuSection && showDetails && (
                <section className="flex flex-col border border-white/10 rounded-[1.25rem] p-4 sm:p-5 bg-transparent lg:order-1">
                  <AnimatePresence mode="wait">
                    {activeMenuSection ? (
                      <motion.div
                        key={activeMenuSection.id}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="h-full flex flex-col"
                      >
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <p className="text-xs uppercase tracking-[0.28em] text-white/55">{activeMenuSection.label}</p>
                          <span className="h-px flex-1 bg-white/10" />
                        </div>
                        <div className="grid gap-2.5">
                          {activeMenuSection.links.map((link) => (
                            <a
                              key={link}
                              href="#"
                              className="group flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm sm:text-[0.95rem] text-white/90 transition-all duration-300 hover:border-[#FF7B00]/45 hover:bg-white/5 hover:text-white"
                            >
                              <ArrowLeft size={16} className="text-[#FF7B00] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-0.5 order-2" />
                              <span className="order-1">{link}</span>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <></>
                    )}
                  </AnimatePresence>
                </section>
                )}

                {activeMenuSection && (
                <section
                  className="flex flex-col justify-between border border-white/10 rounded-[1.25rem] p-4 sm:p-5 bg-transparent lg:order-2"
                  onMouseEnter={() => activeMenuSection && setShowDetails(true)}
                  onMouseLeave={resetPanels}
                >
                  <AnimatePresence mode="wait">
                    {activeMenuSection ? (
                      <motion.div
                        key={activeMenuSection.id}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="h-full flex flex-col justify-between"
                      >
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-white/50 mb-3">Featured</p>
                          <h3 className="font-heading text-3xl sm:text-4xl text-white leading-[1.05] mb-4 max-w-[10ch]">
                            {activeMenuSection.label}
                          </h3>
                          <p className="text-sm sm:text-base leading-7 text-white/80 max-w-md">
                            {activeMenuSection.description}
                          </p>
                        </div>

                        <div className="mt-5 sm:mt-6 rounded-xl border border-white/10 bg-transparent p-4">
                          <p className="text-xs uppercase tracking-[0.24em] text-white/50 mb-3">Quick links</p>
                          <div className="flex flex-wrap gap-2">
                            {quickActions.map((action) => (
                              <a
                                key={action.label}
                                href={action.href}
                                className="rounded-full border border-white/10 px-3.5 py-2 text-sm text-white/88 transition-all duration-300 hover:border-[#FF7B00]/50 hover:bg-white/5 hover:text-[#FF7B00]"
                              >
                                {action.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <></>
                    )}
                  </AnimatePresence>
                </section>
                )}

                <section className="flex flex-col gap-3 border border-white/10 rounded-[1.25rem] p-4 sm:p-5 bg-transparent lg:order-3" onMouseLeave={() => !showDetails && resetPanels()}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/55">Navigation</p>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="flex flex-col gap-2">
                    {menuSections.map((section) => {
                      const isActive = activeSection === section.id;
                      return (
                        <button
                          key={section.id}
                          type="button"
                          onClick={() => activateSection(section.id)}
                          onMouseEnter={() => activateSection(section.id)}
                          onFocus={() => activateSection(section.id)}
                          className={`group flex items-center justify-start rounded-xl border px-4 py-3 text-left transition-all duration-300 ${isActive ? 'border-[#FF7B00]/60 bg-white/8 text-[#FF7B00]' : 'border-white/10 bg-white/2 text-white/92 hover:border-white/20 hover:bg-white/5 hover:text-white'}`}
                        >
                          <span className="font-heading text-[1.1rem] sm:text-[1.15rem] tracking-tight">
                            {section.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
