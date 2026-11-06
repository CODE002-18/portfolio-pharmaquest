/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Minimalist Editorial Footer inspired by Axevia
 * Complete Light/Dark theme compatibility with micro-interactions.
 */

import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import { ArrowUp, Github } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const { personal } = portfolioConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zinc-100 dark:bg-[#070709] border-t border-zinc-200 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-500 py-10 sm:py-12 text-xs font-tech transition-colors duration-200 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        
        {/* Left: Identity & Degree */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-7 h-7 rounded-md overflow-hidden border border-cyan-500/40 dark:border-cyan-400/40 flex items-center justify-center bg-zinc-950 shrink-0">
            <img
              src="/assets/media/Gemini_Generated_Image_7ng3et7ng3et7ng3_746b13a4.png"
              alt="Monogram"
              className="w-full h-full object-cover scale-[1.36]"
            />
          </div>
          <div>
            <span className="text-zinc-900 dark:text-zinc-300 font-semibold">{personal.name}</span>
            <span className="hidden sm:inline text-zinc-400 dark:text-zinc-700 mx-2">·</span>
            <span className="text-zinc-600 dark:text-zinc-500">4th-Year B.Pharm Student &amp; Creator</span>
          </div>
        </div>

        {/* Center: GitHub link */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <motion.a
            href={personal.socials.githubUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github/{personal.socials.githubUsername}</span>
          </motion.a>

          <motion.a
            href="https://bpharmhub.xyz/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            className="text-zinc-700 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            BPharmHub.xyz
          </motion.a>
        </div>

        {/* Right: Scroll to top */}
        <div className="flex items-center gap-4">
          <span className="text-zinc-500 text-[11px] tabular-nums">
            Graduating June 2027
          </span>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -4, scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="cursor-pointer p-2 sm:p-2.5 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-sm"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

      </motion.div>
    </footer>
  );
};
