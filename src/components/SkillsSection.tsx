/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Skills Section inspired by Axevia reference (image_c42c0c31.png)
 * Features 'A TOOLKIT CHOSEN FOR THE JOB' layout with 4 verified sectors.
 * Enhanced with Framer Motion staggered entrance and interactive hover responses.
 */

import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import { Microscope, BrainCircuit, Code, Sparkles, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioConfig;

  const sectorIcons: Record<string, React.ReactNode> = {
    SECTOR_01: <Microscope className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    SECTOR_02: <BrainCircuit className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    SECTOR_03: <Code className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    SECTOR_04: <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
  };

  return (
    <section
      id="skills"
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
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6 sm:pb-8 mb-12 sm:mb-16 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-600 dark:text-cyan-400 tracking-wider mb-2">
              <span>03.</span>
              <span className="uppercase font-semibold">CAPABILITIES &amp; DISCIPLINES</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-tech">
              Four years in, working with science and code
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
              SKILLS
            </span>
          </motion.div>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase text-zinc-900 dark:text-white tracking-tight leading-none mb-4">
            A TOOLKIT CHOSEN FOR THE JOB
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            None of this is a badge collection. These are the scientific disciplines and digital technologies I focus on — grounded in honest academic study and verified project implementation.
          </p>
        </motion.div>

        {/* Axevia Sectors Layout with Staggered Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="space-y-4 sm:space-y-6"
        >
          {skills.map((category, idx) => (
            <motion.div
              key={category.sector}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 250, damping: 24 },
                },
              }}
              whileHover={{ y: -4 }}
              className="group p-5 sm:p-6 rounded-xl border bg-white dark:bg-zinc-950/70 border-zinc-200 dark:border-zinc-800/80 hover:border-cyan-500/70 dark:hover:border-cyan-400/70 transition-colors shadow-sm dark:shadow-none"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <span className="font-tech text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                    0{idx + 1}.
                  </span>
                  <div className="flex items-center gap-2">
                    <motion.span
                      whileHover={{ rotate: 15, scale: 1.15 }}
                      className="inline-flex items-center justify-center"
                    >
                      {sectorIcons[category.sector]}
                    </motion.span>
                    <h3 className="font-tech text-base sm:text-lg font-bold uppercase tracking-wider text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-tech text-zinc-600 dark:text-zinc-400">
                  {category.description}
                </span>
              </div>

              {/* Clean Unboxed Skills Tags with High-Contrast Light & Dark Mode Text */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-3 border-t border-zinc-100 dark:border-zinc-900">
                {category.skills.map((skill, sIdx) => (
                  <React.Fragment key={skill}>
                    <motion.span
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.18 }}
                      className="font-tech text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1 cursor-default inline-block"
                    >
                      {skill}
                    </motion.span>
                    {sIdx < category.skills.length - 1 && (
                      <span className="text-zinc-400 dark:text-zinc-600 text-xs select-none" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Rigor Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          className="mt-10 sm:mt-12 p-4 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-tech text-zinc-600 dark:text-zinc-400 shadow-sm dark:shadow-none"
        >
          <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Honest representation: Grounded in verified coursework and live repositories.</span>
          </div>
          <span className="text-zinc-500 font-semibold tabular-nums">
            Expected B.Pharm Graduation: June 2027
          </span>
        </motion.div>

      </div>
    </section>
  );
};
