/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Projects Section inspired by Axevia reference (image_5735be92.png)
 * Features primary project BPharmHub (bpharmhub.xyz) and secondary project Ludo Ianx.
 * Enhanced with Framer Motion AnimatePresence transitions and interactive modals.
 */

import React, { useState } from 'react';
import { portfolioConfig, ProjectItem } from '../config/portfolio.config';
import { ArrowUpRight, ExternalLink, CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioConfig;
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectItem | null>(null);

  const currentProject = projects[activeProjectIndex] || projects[0];

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 overflow-hidden transition-colors duration-200"
    >
      <div className="absolute inset-0 bg-dot-matrix pointer-events-none opacity-40 dark:opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6 sm:pb-8 mb-10 sm:mb-16 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-600 dark:text-cyan-400 tracking-wider mb-2">
              <span>04.</span>
              <span className="uppercase font-semibold">FEATURED CREATIONS</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-tech">
              Academic Platforms &amp; Interactive Browser Software
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-right flex items-baseline gap-4 justify-end"
          >
            <span className="text-xl sm:text-2xl font-tech font-bold text-cyan-600 dark:text-cyan-400 tabular-nums">
              0{activeProjectIndex + 1} <span className="text-zinc-400 dark:text-zinc-600">/ 0{projects.length}</span>
            </span>
            <span className="text-4xl sm:text-6xl font-display font-black tracking-tight text-zinc-900 dark:text-white uppercase select-none leading-none">
              PROJECTS
            </span>
          </motion.div>
        </motion.div>

        {/* Mobile Horizontal Selector Tabs (< lg) */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {projects.map((proj, idx) => {
            const isActive = activeProjectIndex === idx;
            return (
              <motion.button
                key={proj.id}
                type="button"
                onClick={() => setActiveProjectIndex(idx)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className={`cursor-pointer px-4 py-2.5 rounded-lg border text-xs font-tech font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 shadow-sm'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/60 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <span>{proj.index}</span>
                <span>{proj.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Axevia Projects Layout: Left Index Bar + Center Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Vertical Index Bar (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 hidden lg:flex flex-col gap-3 sticky top-28"
          >
            <span className="text-[10px] font-tech text-zinc-500 uppercase tracking-widest mb-1 font-bold">
              PROJECT INDEX
            </span>
            {projects.map((proj, idx) => {
              const isActive = activeProjectIndex === idx;
              return (
                <motion.button
                  key={proj.id}
                  type="button"
                  onClick={() => setActiveProjectIndex(idx)}
                  whileHover={{ x: 6, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    isActive
                      ? 'border-cyan-500 bg-cyan-50 dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm'
                      : 'border-zinc-200 dark:border-zinc-800/60 bg-white dark:bg-zinc-950/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-tech text-xs text-cyan-600 dark:text-cyan-400 font-bold">
                      {proj.index}
                    </span>
                    <span className="font-tech text-xs font-semibold truncate max-w-[130px]">
                      {proj.title}
                    </span>
                  </div>
                  <motion.span
                    animate={{ scale: isActive ? 1.25 : 0.8, opacity: isActive ? 1 : 0 }}
                    className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"
                  />
                </motion.button>
              );
            })}
          </motion.div>

          {/* Center Showcase Card with Animated Switching */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-9"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 sm:p-10 rounded-2xl bg-white dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-2xl relative"
              >
                
                {/* Corner HUD Brackets */}
                <div className="hud-corner-tl text-zinc-400 dark:text-zinc-600" />
                <div className="hud-corner-tr text-zinc-400 dark:text-zinc-600" />
                <div className="hud-corner-bl text-zinc-400 dark:text-zinc-600" />
                <div className="hud-corner-br text-zinc-400 dark:text-zinc-600" />

                {/* Project Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-zinc-100 dark:border-zinc-800/80 text-xs font-tech">
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">{currentProject.index}</span>
                    <span>·</span>
                    <span className="uppercase">{currentProject.category}</span>
                  </div>
                  <div className="text-zinc-500 uppercase font-semibold tabular-nums">
                    {currentProject.year}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="py-5 sm:py-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">
                    <motion.h3
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 }}
                      className="text-3xl sm:text-5xl font-display font-black uppercase text-zinc-900 dark:text-white tracking-tight"
                    >
                      {currentProject.title}
                    </motion.h3>

                    {currentProject.isPrimary && (
                      <span className="self-start md:self-auto text-[11px] font-tech text-cyan-700 dark:text-cyan-300 uppercase tracking-wider font-bold">
                        ★ Primary Featured Project
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal">
                    {currentProject.subtitle}
                  </p>
                </div>

                {/* Project Mockup Image with Zoom & Hover CTA */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="relative aspect-video w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 my-4 sm:my-6 group shadow-inner"
                >
                  <img
                    src={currentProject.image}
                    alt={`${currentProject.title} Interface Showcase`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay link button */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <motion.a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-lg bg-white text-zinc-950 font-tech font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl hover:bg-zinc-100 transition-colors"
                    >
                      <span>Launch Live Platform</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Problem Solved & Purpose Narrative */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 py-5 sm:py-6 border-y border-zinc-100 dark:border-zinc-800/80">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="space-y-2"
                  >
                    <span className="text-[11px] font-tech text-amber-600 dark:text-amber-400 uppercase tracking-wider block font-bold">
                      THE PROBLEM ADDRESSED
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {currentProject.problem}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.22 }}
                    className="space-y-2"
                  >
                    <span className="text-[11px] font-tech text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block font-bold">
                      PURPOSE &amp; SOLUTION
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {currentProject.purpose}
                    </p>
                  </motion.div>
                </div>

                {/* Key Features List with Staggered Entrance */}
                <div className="py-5 sm:py-6">
                  <span className="text-[11px] font-tech text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block font-bold mb-3">
                    KEY CAPABILITIES &amp; ARCHITECTURE
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-tech">
                    {currentProject.features.map((feat, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.18 + idx * 0.06 }}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Footer CTA & Modal Brief Toggle */}
                <div className="pt-5 sm:pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-tech text-zinc-500 dark:text-zinc-400">
                    {currentProject.tags.map((tag, tIdx) => (
                      <span key={tag}>
                        {tag}
                        {tIdx < currentProject.tags.length - 1 && <span className="ml-2 text-zinc-400 dark:text-zinc-600">·</span>}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <motion.button
                      type="button"
                      onClick={() => setSelectedModalProject(currentProject)}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="cursor-pointer w-full sm:w-auto px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-xs font-tech font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 transition-colors text-center"
                    >
                      View Project Brief
                    </motion.button>

                    <motion.a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-tech font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-md"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.a>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

      </div>

      {/* Case Study Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedModalProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 p-6 sm:p-8 text-zinc-900 dark:text-white shadow-2xl z-10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <span className="text-xs font-tech text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                    CASE STUDY BRIEF // {selectedModalProject.index}
                  </span>
                  <h4 className="text-2xl font-display font-black uppercase text-zinc-900 dark:text-white mt-1">
                    {selectedModalProject.title}
                  </h4>
                </div>
                <motion.button
                  onClick={() => setSelectedModalProject(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="space-y-6 py-6 text-sm text-zinc-700 dark:text-zinc-300 font-sans">
                <div>
                  <h5 className="font-tech text-xs uppercase font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                    Academic &amp; Student Context
                  </h5>
                  <p className="leading-relaxed">
                    {selectedModalProject.problem}
                  </p>
                </div>

                <div>
                  <h5 className="font-tech text-xs uppercase font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    Engineering Purpose
                  </h5>
                  <p className="leading-relaxed">
                    {selectedModalProject.purpose}
                  </p>
                </div>

                <div>
                  <h5 className="font-tech text-xs uppercase font-bold text-amber-600 dark:text-amber-400 mb-2">
                    Implemented Features
                  </h5>
                  <ul className="space-y-2 text-xs font-tech">
                    {selectedModalProject.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-500">▹</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="font-tech text-xs text-zinc-500 truncate max-w-xs">
                    {selectedModalProject.liveUrl}
                  </span>
                  <motion.a
                    href={selectedModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-4 py-2.5 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-black font-tech text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-md"
                  >
                    <span>Open URL</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
