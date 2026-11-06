/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Hero Section inspired by Axevia reference
 * Runs the interactive canvas across the entire screen backdrop.
 * Enhanced with Framer Motion animations for high-impact visual entrance.
 */

import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, ExternalLink, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { InteractiveHeroCanvas, CanvasMode } from './InteractiveHeroCanvas';
import { portfolioConfig } from '../config/portfolio.config';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  canvasMode: CanvasMode;
  onSelectCanvasMode: (mode: CanvasMode) => void;
  localTimeString: string;
  isDark: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  canvasMode,
  onSelectCanvasMode,
  localTimeString,
  isDark,
}) => {
  const { personal } = portfolioConfig;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 sm:pt-32 lg:pt-24 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 transition-colors"
    >
      {/* FULLSCREEN Interactive Canvas running across the entire screen */}
      <InteractiveHeroCanvas mode={canvasMode} isDark={isDark} />

      {/* Subtle Dot Matrix Grid overlay */}
      <div className="absolute inset-0 bg-dot-matrix pointer-events-none opacity-40 dark:opacity-60" />

      {/* Main Content Layout (Layered over the full-screen canvas) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto py-4 sm:py-8 lg:py-12 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Powerhouse (Axevia Layout) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.05 },
              },
            }}
            className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6 pointer-events-auto"
          >
            
            {/* Top Micro-label */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-tech text-cyan-600 dark:text-cyan-400 tracking-wider"
            >
              <span>[</span>
              <span className="uppercase font-semibold">B.PHARM (4TH YEAR) · TECH EXPLORER · CREATOR</span>
              <span>]</span>
            </motion.div>

            {/* Giant Display Headlines with Staggered Word Reveal */}
            <div className="space-y-1 sm:space-y-1.5">
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-extrabold uppercase leading-[0.92] tracking-tight text-stroke-white select-none drop-shadow-sm"
              >
                CURIOUS BY SCIENCE.
              </motion.h1>
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-black uppercase leading-[0.92] tracking-tight text-zinc-900 dark:text-white select-none drop-shadow-sm"
              >
                DRIVEN TO CREATE.
              </motion.h2>
            </div>

            {/* Sub-Header Bracketed Tagline with Animated Rule */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-tech text-zinc-600 dark:text-zinc-400 pt-0.5"
            >
              <span className="truncate uppercase font-medium tracking-wider">
                [ PHARMACEUTICAL SCIENCES · REACT · PROBLEM SOLVING ]
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
                className="h-[1px] flex-1 bg-zinc-300 dark:bg-zinc-800 origin-left hidden sm:block"
              />
            </motion.div>

            {/* Supporting Bio Quote Block */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="p-3.5 sm:p-4 space-y-1.5 sm:space-y-2 max-w-xl bg-white/55 dark:bg-zinc-900/45 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-sm rounded-xl shadow-xs"
            >
              <p className="text-xs sm:text-sm md:text-base text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed">
                Hi, I'm <strong className="text-zinc-950 dark:text-white font-semibold">Aryan Tiwari</strong> — a fourth-year Bachelor of Pharmacy student exploring the intersection of science, technology, and problem-solving.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                I enjoy learning new things, experimenting with ideas, and building digital experiences that can make everyday problems easier to solve.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2"
            >
              <motion.button
                type="button"
                onClick={() => onNavigate('projects')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="cursor-pointer px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 font-tech font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => onNavigate('pharmaquest')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="cursor-pointer px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700/80 font-tech font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>PharmaQuest</span>
              </motion.button>

              <motion.button
                type="button"
                onClick={() => onNavigate('about')}
                whileHover={{ scale: 1.05, y: 2 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-zinc-600 dark:text-zinc-400 font-tech text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <span>About</span>
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowDown className="w-3.5 h-3.5" />
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Quick Canvas Mode Switcher under buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="pt-1 sm:pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-tech text-zinc-600 dark:text-zinc-400"
            >
              <span className="uppercase text-zinc-500 font-bold">Scene Mode:</span>
              {(['particles', 'crt', 'atom', 'solarsystem'] as CanvasMode[]).map((m) => (
                <motion.button
                  key={m}
                  type="button"
                  onClick={() => onSelectCanvasMode(m)}
                  whileHover={{ scale: 1.06, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer px-2.5 py-1 rounded border uppercase transition-colors text-[10px] sm:text-[11px] ${
                    canvasMode === m
                      ? 'border-cyan-500 text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/60 font-bold shadow-sm'
                      : 'border-zinc-300 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {m === 'solarsystem' ? 'Solar System' : m}
                </motion.button>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column: Axevia Explorer Stats HUD Box with Gentle Floating Motion */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 pointer-events-auto mt-4 lg:mt-0"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="animate-float relative p-4 sm:p-6 rounded-xl bg-white/80 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800/80 hover:border-cyan-500/70 dark:hover:border-cyan-400/70 backdrop-blur-md shadow-xl dark:shadow-2xl text-zinc-800 dark:text-zinc-300 transition-colors"
            >
              {/* Corner HUD Brackets */}
              <div className="hud-corner-tl text-zinc-400 dark:text-zinc-600" />
              <div className="hud-corner-tr text-zinc-400 dark:text-zinc-600" />
              <div className="hud-corner-bl text-zinc-400 dark:text-zinc-600" />
              <div className="hud-corner-br text-zinc-400 dark:text-zinc-600" />

              {/* HUD Header */}
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-zinc-200 dark:border-zinc-800/70 text-[11px] font-tech">
                <span className="uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-bold">
                  DEVELOPER STATS
                </span>
                <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">
                  ACTIVE PROFILE
                </span>
              </div>

              {/* Dual Meters with Animated Fill */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4 border-b border-zinc-200 dark:border-zinc-800/70">
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl sm:text-2xl font-tech font-bold text-zinc-900 dark:text-white tabular-nums">4th</span>
                    <span className="text-[10px] font-tech text-zinc-400 dark:text-zinc-500">01</span>
                  </div>
                  <span className="block text-[10px] font-tech text-zinc-600 dark:text-zinc-400 uppercase tracking-tight mt-0.5">
                    ACADEMIC_YEAR
                  </span>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full mt-1.5 sm:mt-2 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 0.85 }}
                      viewport={{ once: false }}
                      transition={{ duration: 1.1, delay: 0.25, ease: 'easeOut' }}
                      className="bg-cyan-500 dark:bg-cyan-400 h-full w-full origin-left rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl sm:text-2xl font-tech font-bold text-zinc-900 dark:text-white tabular-nums">2027</span>
                    <span className="text-[10px] font-tech text-zinc-400 dark:text-zinc-500">02</span>
                  </div>
                  <span className="block text-[10px] font-tech text-zinc-600 dark:text-zinc-400 uppercase tracking-tight mt-0.5">
                    GRAD_TARGET
                  </span>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full mt-1.5 sm:mt-2 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 0.75 }}
                      viewport={{ once: false }}
                      transition={{ duration: 1.1, delay: 0.35, ease: 'easeOut' }}
                      className="bg-emerald-500 dark:bg-emerald-400 h-full w-full origin-left rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Metadata Spec Table */}
              <div className="pt-2.5 sm:pt-3 space-y-2 text-xs font-tech">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-zinc-500 uppercase">ROLE</span>
                  <span className="text-zinc-900 dark:text-zinc-200 font-semibold text-right">STUDENT &amp; BUILDER</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-zinc-500 uppercase">DEGREE</span>
                  <span className="text-zinc-900 dark:text-zinc-200 font-semibold">B.PHARM (4TH YEAR)</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-zinc-500 uppercase">PRIMARY</span>
                  <a
                    href="https://bpharmhub.xyz/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    BPharmHub.xyz <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-zinc-500 uppercase">GITHUB</span>
                  <a
                    href={personal.socials.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    code002-18 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-zinc-500 uppercase">FOCUS</span>
                  <span className="text-zinc-900 dark:text-zinc-200">SCI-TECH / WEB</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-zinc-500 uppercase">AVAILABILITY</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">OPEN FOR WORK</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-zinc-500 uppercase">RESPONSE</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{personal.responseTarget}</span>
                </div>
              </div>

              {/* Quick Contact Link inside HUD */}
              <div className="mt-3.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
                <motion.button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer w-full py-2.5 px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700/60 text-center font-tech text-xs text-zinc-900 dark:text-white uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Send Direct Message</span>
                </motion.button>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Axevia Ticker Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="relative z-10 w-full border-t border-zinc-200 dark:border-zinc-800/90 bg-white/85 dark:bg-zinc-950/80 backdrop-blur-md transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs font-tech">
          
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-zinc-700 dark:text-zinc-400">
            {/* Active Canvas Engine Badge - integrated cleanly so it never overlaps with anything */}
            <div className="flex items-center gap-1.5 sm:gap-2 border border-cyan-500/30 dark:border-cyan-500/40 px-2 sm:px-2.5 py-1 rounded bg-cyan-50/70 dark:bg-cyan-950/40">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-zinc-500 dark:text-zinc-400 uppercase text-[9px] sm:text-[10px]">ENGINE</span>
              <span className="font-bold text-cyan-600 dark:text-cyan-400 uppercase text-[10px] sm:text-[11px]">
                {canvasMode === 'solarsystem' ? 'SOLAR SYSTEM' : canvasMode}
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 border border-zinc-300 dark:border-zinc-800 px-2 sm:px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900/50">
              <span className="text-zinc-500 uppercase text-[9px] sm:text-[10px]">AVAILABILITY</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">OPEN</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 border border-zinc-300 dark:border-zinc-800 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900/50">
              <span className="text-zinc-500 uppercase text-[10px]">RENDERING</span>
              <span className="font-bold text-zinc-900 dark:text-white uppercase">REACT / TS / VITE</span>
            </div>
            <div className="hidden md:flex items-center gap-2 border border-zinc-300 dark:border-zinc-800 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900/50">
              <span className="text-zinc-500 uppercase text-[10px]">CORE_ID</span>
              <span className="font-bold text-cyan-600 dark:text-cyan-400">ARYAN TIWARI</span>
            </div>
          </div>

          {/* Say Hello Email & Live Clock */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 ml-auto sm:ml-0">
            <div>
              <span className="text-zinc-500 block text-[9px] sm:text-[10px] uppercase">Wanna Say Hello?</span>
              <a
                href={`mailto:${personal.socials.email}`}
                className="font-semibold text-zinc-800 dark:text-zinc-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-[11px] sm:text-xs"
              >
                {personal.socials.email}
              </a>
            </div>

            <div className="text-right">
              <span className="text-zinc-500 block text-[9px] sm:text-[10px] uppercase">Local Time</span>
              <span className="font-tech text-zinc-900 dark:text-zinc-200 font-semibold tabular-nums text-[11px] sm:text-xs">
                {localTimeString}
              </span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
