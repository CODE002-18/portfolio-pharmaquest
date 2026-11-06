/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * About Section inspired by Axevia references (image_2a11d5c6.png & image_18b2c86f.png)
 * Features scroll-triggered entrance animations, hover elevations, and interactive philosophies.
 */

import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import { ArrowUpRight, GraduationCap, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const { personal, about } = portfolioConfig;

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 overflow-hidden transition-colors duration-200"
    >
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 bg-dot-matrix pointer-events-none opacity-40 dark:opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6 sm:pb-8 mb-12 sm:mb-16 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-600 dark:text-cyan-400 tracking-wider mb-2">
              <span>01.</span>
              <span className="uppercase font-semibold">INTRODUCTION</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-tech">
              B.Pharm Candidate · Tech Explorer · AKTU Affiliated
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-right"
          >
            <span className="text-4xl sm:text-6xl font-display font-black tracking-tight text-zinc-900 dark:text-white uppercase select-none leading-none">
              ABOUT
            </span>
          </motion.div>
        </motion.div>

        {/* 2-Column Split: Narrative on Left, Portrait Frame on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Narrative Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.65, staggerChildren: 0.12, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-2xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-tight"
            >
              I EXPLORE THE INTERSECTION OF PHARMACY &amp; DIGITAL TOOLS
            </motion.h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed">
              {about.paragraphs.map((p, idx) => (
                <motion.p
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Academic Fact Sheet with Hover Animations */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
              className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="p-4 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-cyan-500 dark:hover:border-cyan-400 shadow-sm dark:shadow-none transition-colors"
              >
                <div className="flex items-center gap-2.5 text-cyan-600 dark:text-cyan-400 mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="font-tech text-xs uppercase font-bold tracking-wider">
                    EDUCATION
                  </span>
                </div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {personal.academic.degree}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-tech mt-0.5">
                  {personal.academic.currentYear} · Graduating {personal.academic.graduationDate}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="p-4 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-emerald-500 dark:hover:border-emerald-400 shadow-sm dark:shadow-none transition-colors"
              >
                <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 mb-1">
                  <Code2 className="w-4 h-4" />
                  <span className="font-tech text-xs uppercase font-bold tracking-wider">
                    DIGITAL CRAFT
                  </span>
                </div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Self-Taught Web Engineering
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-tech mt-0.5">
                  React, TypeScript, Responsive Systems &amp; Real-time Play
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="pt-2 flex items-center gap-4"
            >
              <motion.button
                type="button"
                onClick={() => onNavigate('skills')}
                whileHover={{ scale: 1.04, x: 4 }}
                whileTap={{ scale: 0.96 }}
                className="cursor-pointer w-full sm:w-auto px-5 py-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-xs font-tech font-bold uppercase tracking-wider text-zinc-900 dark:text-white transition-colors flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Inspect Skills &amp; Domains</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Monochrome Scanline Portrait Frame with Floating & Hover Tilt */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02, rotate: -0.8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="animate-float relative w-full max-w-sm rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-700/80 bg-white dark:bg-zinc-950 shadow-xl dark:shadow-2xl p-2.5 group"
            >
              
              {/* Corner HUD Brackets */}
              <div className="hud-corner-tl text-cyan-600 dark:text-cyan-400 transition-colors group-hover:text-cyan-400" />
              <div className="hud-corner-tr text-cyan-600 dark:text-cyan-400 transition-colors group-hover:text-cyan-400" />
              <div className="hud-corner-bl text-cyan-600 dark:text-cyan-400 transition-colors group-hover:text-cyan-400" />
              <div className="hud-corner-br text-cyan-600 dark:text-cyan-400 transition-colors group-hover:text-cyan-400" />

              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
                <img
                  src="/assets/media/Contemplative_Monochrome_Portrait_with_Wristwatch_dda46732.png"
                  alt="Aryan Tiwari — Bachelor of Pharmacy Student and Digital Creator"
                  className="w-full h-full object-cover object-center grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle scanline CRT overlay */}
                <div className="absolute inset-0 crt-overlay opacity-25 pointer-events-none" />

                {/* Subtle bottom badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/90 dark:bg-zinc-950/85 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-tech shadow-md">
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block text-[10px] uppercase">IDENTITY</span>
                    <span className="font-bold text-zinc-900 dark:text-white">ARYAN TIWARI</span>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-500 block text-[10px] uppercase">STATUS</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold uppercase">B.PHARM 4TH YR</span>
                  </div>
                </div>
              </div>

              {/* Sub-label */}
              <div className="pt-2 px-1 flex items-center justify-between text-[10px] font-tech text-zinc-500">
                <span>PORTRAIT // EDITORIAL</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">VERIFIED</span>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Section 02: Core Philosophies Grid with Staggered Reveal */}
        <div className="mt-20 sm:mt-24 pt-10 sm:pt-12 border-t border-zinc-200 dark:border-zinc-800/80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <span className="text-xs font-tech text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-1 font-bold">
              02. HOW I WORK
            </span>
            <h3 className="text-xl sm:text-3xl font-display font-bold uppercase text-zinc-900 dark:text-white tracking-wide">
              CORE PHILOSOPHIES &amp; WORK PRINCIPLES
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.09 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 border-t border-zinc-200 dark:border-zinc-800 pt-6"
          >
            {about.philosophies.map((phil) => (
              <motion.div
                key={phil.number}
                variants={{
                  hidden: { opacity: 0, y: 28, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 260, damping: 22 },
                  },
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/60 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors shadow-sm dark:shadow-none"
              >
                <div>
                  <span className="font-tech text-xs text-cyan-600 dark:text-cyan-400 font-bold block mb-2">
                    {phil.number}
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {phil.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {phil.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
