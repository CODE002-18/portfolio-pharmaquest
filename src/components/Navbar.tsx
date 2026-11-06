/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Responsive Top Navigation Bar with animated sound visualizer,
 * desktop navigation links, mobile/tablet quick-jump bar, and drawer trigger.
 */

import React, { useEffect, useRef } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenMenu: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenMenu,
  isDark,
  onToggleTheme,
}) => {
  const mobileNavContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Smooth scroll progress bar at the top edge of the navbar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const sectionLabelMap: Record<string, string> = {
    home: '[1] HOME',
    about: '[2] ABOUT',
    skills: '[3] SKILLS',
    projects: '[4] PROJECTS',
    pharmaquest: '[5] PHARMAQUEST',
    contact: '[6] CONTACT',
  };

  const navLinks = [
    { id: 'home', index: '01', label: 'Home' },
    { id: 'about', index: '02', label: 'About' },
    { id: 'skills', index: '03', label: 'Skills' },
    { id: 'projects', index: '04', label: 'Projects' },
    { id: 'pharmaquest', index: '05', label: 'PharmaQuest' },
    { id: 'contact', index: '06', label: 'Contact' },
  ];

  // Keep active mobile tab scrolled into view horizontally without scrolling the page vertically
  useEffect(() => {
    const container = mobileNavContainerRef.current;
    const activeBtn = mobileButtonRefs.current[activeSection];
    if (container && activeBtn) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const scrollLeft =
        container.scrollLeft +
        (btnRect.left - containerRect.left) -
        containerRect.width / 2 +
        btnRect.width / 2;
      container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 transition-colors duration-200">
      {/* Top Scroll Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="h-[2px] bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 origin-left w-full"
      />

      {/* Main Top Row */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="text-left group flex items-center gap-2 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 shrink-0 cursor-pointer active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden border border-cyan-500/40 dark:border-cyan-400/40 flex items-center justify-center bg-zinc-950 group-hover:border-cyan-400 transition-colors shadow-sm shrink-0">
            <img
              src="/assets/aistudio/Gemini_Generated_Image_7ng3et7ng3et7ng3_746b13a4.png"
              alt="Monogram"
              className="w-full h-full object-cover scale-[1.36]"
            />
          </div>
          <span className="font-tech text-sm sm:text-lg lg:text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors whitespace-nowrap">
            Aryan Tiwari
          </span>
        </button>

        {/* Zone 2: Desktop Navigation Links (lg and up so links never crowd or overflow) */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className={`cursor-pointer px-3 xl:px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap font-tech text-xs tracking-wider uppercase relative ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-500/10 dark:bg-cyan-400/10'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="desktop-nav-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-cyan-500 dark:bg-cyan-400 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Axevia Signature Widget (Equalizer + Section Pill / Menu Trigger + Theme Switch) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          
          {/* Animated Audio Equalizer Visualizer */}
          <div
            className="hidden xl:flex items-center gap-1 px-2 py-1 h-6 text-cyan-600 dark:text-cyan-400"
            title="Audio & Motion Equalizer"
          >
            <span className="w-1 bg-current rounded-full animate-eq-1" />
            <span className="w-1 bg-current rounded-full animate-eq-2" />
            <span className="w-1 bg-current rounded-full animate-eq-3" />
            <span className="w-1 bg-current rounded-full animate-eq-4" />
            <span className="w-1 bg-current rounded-full animate-eq-5" />
          </div>

          {/* Section Indicator Pill & Drawer Trigger */}
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open navigation menu and canvas mode switcher"
            className="cursor-pointer flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/90 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700/80 text-zinc-900 dark:text-white transition-all active:scale-95 shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            title="Open Navigation Menu & Canvas Presets"
          >
            <span className="font-tech text-[11px] sm:text-xs font-bold tracking-wider text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white whitespace-nowrap">
              {sectionLabelMap[activeSection] || '[1] HOME'}
            </span>

            {/* Axevia 4-dot / menu icon */}
            <div className="w-5 h-5 rounded bg-zinc-200 dark:bg-zinc-800 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 flex items-center justify-center p-0.5 shrink-0 transition-transform group-hover:rotate-45">
              <div className="hidden sm:grid grid-cols-2 gap-0.5 w-3 h-3">
                <span className="w-1 h-1 rounded-full bg-zinc-800 dark:bg-white group-hover:bg-cyan-500 transition-colors" />
                <span className="w-1 h-1 rounded-full bg-zinc-800 dark:bg-white group-hover:bg-cyan-500 transition-colors" />
                <span className="w-1 h-1 rounded-full bg-zinc-800 dark:bg-white group-hover:bg-cyan-500 transition-colors" />
                <span className="w-1 h-1 rounded-full bg-zinc-800 dark:bg-white group-hover:bg-cyan-500 transition-colors" />
              </div>
              <Menu className="w-3.5 h-3.5 sm:hidden text-zinc-800 dark:text-white group-hover:text-cyan-500 transition-colors" />
            </div>
          </button>

          {/* Light / Dark Mode Switch */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="cursor-pointer p-2 sm:p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shrink-0"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </button>
        </div>

      </div>

      {/* Responsive Mobile & Tablet Quick-Navigation Bar (visible below lg breakpoint) */}
      <div className="lg:hidden border-t border-zinc-200/80 dark:border-white/10 bg-zinc-50/95 dark:bg-[#09090b]/95">
        <nav
          ref={mobileNavContainerRef}
          aria-label="Mobile Quick Navigation"
          className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                ref={(el) => {
                  mobileButtonRefs.current[link.id] = el;
                }}
                type="button"
                onClick={() => onNavigate(link.id)}
                className={`cursor-pointer shrink-0 px-2.5 py-1 rounded-md font-tech text-[11px] uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-cyan-500 text-zinc-950 font-bold shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-200/60 dark:bg-zinc-900/70 border border-zinc-300/60 dark:border-zinc-800'
                }`}
              >
                <span className={isActive ? 'text-zinc-950/70' : 'text-zinc-400 dark:text-zinc-500'}>
                  {link.index}
                </span>
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
