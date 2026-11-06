/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Axevia-style Navigation Drawer and Design Mode Switcher
 * Animated with Framer Motion slide-in and stagger transitions.
 */

import React, { useEffect } from 'react';
import { X, Mail, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CanvasMode } from './InteractiveHeroCanvas';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  currentDesignMode: CanvasMode;
  onSelectDesignMode: (mode: CanvasMode) => void;
  localTimeString: string;
  userEmail: string;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
  currentDesignMode,
  onSelectDesignMode,
  localTimeString,
  userEmail,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const navItems = [
    { id: 'home', index: '[1]', label: 'HOME' },
    { id: 'about', index: '[2]', label: 'ABOUT' },
    { id: 'skills', index: '[3]', label: 'SKILLS' },
    { id: 'projects', index: '[4]', label: 'PROJECTS' },
    { id: 'pharmaquest', index: '[5]', label: 'PHARMAQUEST' },
    { id: 'contact', index: '[6]', label: 'CONTACT' },
  ];

  const designPresets: Array<{ id: CanvasMode; num: string; label: string }> = [
    { id: 'particles', num: '01', label: 'HOME PARTICLES' },
    { id: 'crt', num: '02', label: 'HOME CRT' },
    { id: 'atom', num: '03', label: 'HOME ATOM' },
    { id: 'solarsystem', num: '04', label: 'HOME SOLAR SYSTEM' },
  ];

  const handleItemClick = (sectionId: string) => {
    document.body.style.overflow = '';
    onClose();
    onNavigate(sectionId);
  };

  const handlePresetClick = (mode: CanvasMode) => {
    document.body.style.overflow = '';
    onSelectDesignMode(mode);
    onClose();
    onNavigate('home');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 flex justify-end"
        >
          {/* Backdrop click with fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Drawer Panel with slide */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 320 }}
            className="relative w-full max-w-md h-full bg-white dark:bg-[#0e0e11] text-zinc-900 dark:text-zinc-100 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl p-5 sm:p-8 flex flex-col justify-between overflow-y-auto z-10 transition-colors duration-200"
          >
            {/* Top Header */}
            <div>
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-zinc-200 dark:border-zinc-800/80">
                <div>
                  <h2 className="text-xl font-bold font-tech tracking-wider text-zinc-900 dark:text-white">Menu</h2>
                  <p className="text-[11px] font-tech text-zinc-500 uppercase tracking-widest mt-0.5">NAVIGATION</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="cursor-pointer p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links List */}
              <nav className="mt-4 sm:mt-6 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleItemClick(item.id)}
                      className={`cursor-pointer group w-full flex items-center justify-between px-4 py-3 sm:py-3.5 rounded-xl border transition-all text-left active:scale-[0.99] ${
                        isActive
                          ? 'border-cyan-500 bg-cyan-50 dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm'
                          : 'border-zinc-200 dark:border-zinc-800/50 bg-zinc-50 dark:bg-zinc-950/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-tech text-xs text-zinc-400 dark:text-zinc-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {item.index}
                        </span>
                        <span className="font-tech text-sm sm:text-base font-semibold tracking-wide">
                          {item.label}
                        </span>
                      </div>
                      <span
                        className={`w-2 h-2 rounded-full transition-all ${
                          isActive ? 'bg-cyan-500 dark:bg-cyan-400 ring-4 ring-cyan-500/20' : 'bg-zinc-300 dark:bg-zinc-700 group-hover:bg-zinc-400 dark:group-hover:bg-zinc-500'
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Design Modes Switcher (Axevia 04 DESIGNS) */}
            <div className="mt-6 pt-5 sm:pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-tech uppercase tracking-widest text-zinc-500 font-bold">
                  DESIGNS [CANVAS MODES]
                </span>
                <span className="text-[11px] font-tech text-cyan-600 dark:text-cyan-400 font-bold">04 PRESETS</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {designPresets.map((preset) => {
                  const isSelected = currentDesignMode === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handlePresetClick(preset.id)}
                      className={`cursor-pointer p-2.5 sm:p-3 rounded-lg border text-left transition-all flex flex-col justify-between active:scale-95 ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-100 dark:bg-cyan-950/40 text-cyan-900 dark:text-white font-bold shadow-sm'
                          : 'border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="text-[10px] font-tech text-zinc-400 dark:text-zinc-500">{preset.num}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />}
                      </div>
                      <span className="text-xs font-tech tracking-tight">
                        {preset.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer / Direct Contact */}
            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col gap-2 text-xs font-tech text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" /> Direct:
                </span>
                <a
                  href={`mailto:${userEmail}`}
                  className="text-zinc-800 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-semibold truncate max-w-[200px]"
                >
                  {userEmail}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" /> Local Time:
                </span>
                <span className="text-zinc-800 dark:text-zinc-200 tabular-nums font-semibold">{localTimeString}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
