/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * PharmaQuest: Explore My Journey
 * An interactive, gamified journey explorer featuring 4 interactive stations.
 * Enhanced with Framer Motion animations for progress, transitions, and milestone reveals.
 */

import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import {
  Sparkles,
  Compass,
  Hammer,
  FlaskConical,
  Trophy,
  RotateCcw,
  CheckCircle2,
  Lock,
  ArrowRight,
  Send,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PharmaQuestSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const PharmaQuestSection: React.FC<PharmaQuestSectionProps> = ({ onNavigate }) => {
  const { pharmaQuest } = portfolioConfig;

  const [visitedStationIds, setVisitedStationIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pharmaquest_visited');
      return saved ? JSON.parse(saved) : ['discover'];
    } catch {
      return ['discover'];
    }
  });

  const [activeStationId, setActiveStationId] = useState<string>('discover');

  useEffect(() => {
    try {
      localStorage.setItem('pharmaquest_visited', JSON.stringify(visitedStationIds));
    } catch {
      // Ignore
    }
  }, [visitedStationIds]);

  const totalStations = pharmaQuest.stations.length;
  const visitedCount = visitedStationIds.length;
  const progressPercent = Math.round((visitedCount / totalStations) * 100);
  const isAllUnlocked = visitedCount === totalStations;

  const handleSelectStation = (stationId: string) => {
    setActiveStationId(stationId);
    if (!visitedStationIds.includes(stationId)) {
      setVisitedStationIds((prev) => [...prev, stationId]);
    }
  };

  const handleResetQuest = () => {
    setVisitedStationIds(['discover']);
    setActiveStationId('discover');
    try {
      localStorage.removeItem('pharmaquest_visited');
    } catch {
      // Ignore
    }
  };

  const stationIcons: Record<string, React.ReactNode> = {
    discover: <Compass className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    build: <Hammer className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    experiment: <FlaskConical className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    future: <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
  };

  const currentStation =
    pharmaQuest.stations.find((s) => s.id === activeStationId) || pharmaQuest.stations[0];

  return (
    <section
      id="pharmaquest"
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
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6 sm:pb-8 mb-10 sm:mb-12 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-600 dark:text-cyan-400 tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>05.</span>
              <span className="uppercase font-semibold">INTERACTIVE JOURNEY ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              PHARMAQUEST: EXPLORE MY JOURNEY
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-tech mt-2">
              Step through the four evolutionary stations of Aryan's scientific &amp; digital trajectory.
            </p>
          </div>

          {/* Progress Telemetry Card with Animated Progress Fill */}
          <motion.div
            whileHover={{ y: -3 }}
            className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-right min-w-[240px] shadow-sm dark:shadow-none"
          >
            <div className="flex items-center justify-between text-xs font-tech text-zinc-600 dark:text-zinc-400 mb-2">
              <span className="uppercase font-bold">QUEST PROGRESS</span>
              <span className="font-bold text-cyan-600 dark:text-cyan-400 tabular-nums">
                {visitedCount} / {totalStations} ({progressPercent}%)
              </span>
            </div>
            
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progressPercent / 100 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`h-full w-full origin-left ${
                  isAllUnlocked ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' : 'bg-cyan-500'
                }`}
              />
            </div>

            <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-900 text-[10px] font-tech">
              <span className="text-zinc-500 font-semibold">
                {isAllUnlocked ? '★ FINAL DISCOVERY UNLOCKED' : 'EXPLORE ALL 4 STATIONS'}
              </span>
              <motion.button
                type="button"
                onClick={handleResetQuest}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                className="cursor-pointer text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1 transition-colors font-bold"
                title="Reset Quest Progress"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                <span>Reset</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* 4 Interactive Station Selector Grid with Staggered Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8"
        >
          {pharmaQuest.stations.map((station, idx) => {
            const isVisited = visitedStationIds.includes(station.id);
            const isActive = activeStationId === station.id;

            return (
              <motion.button
                key={station.id}
                type="button"
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 260, damping: 22 },
                  },
                }}
                onClick={() => handleSelectStation(station.id)}
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer p-4 sm:p-5 rounded-xl border text-left transition-colors relative group flex flex-col justify-between ${
                  isActive
                    ? 'bg-white dark:bg-zinc-900/90 border-cyan-500 ring-2 ring-cyan-500/20 shadow-lg'
                    : isVisited
                    ? 'bg-white/90 dark:bg-zinc-950/60 border-zinc-300 dark:border-zinc-700/80 hover:border-zinc-400 dark:hover:border-zinc-500 shadow-sm dark:shadow-none'
                    : 'bg-white/60 dark:bg-zinc-950/30 border-zinc-200 dark:border-zinc-800/60 opacity-80 hover:opacity-100 hover:border-zinc-400'
                }`}
              >
                {/* Corner indicator */}
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="font-tech text-xs text-cyan-600 dark:text-cyan-400 font-bold">
                    0{idx + 1}.
                  </span>
                  {isVisited ? (
                    <span className="flex items-center gap-1 text-[10px] font-tech text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>VISITED</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] font-tech text-zinc-400 dark:text-zinc-500">
                      <Lock className="w-3 h-3" />
                      <span>UNEXPLORED</span>
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1 text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    <motion.span
                      animate={isActive ? { rotate: [0, -8, 8, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {stationIcons[station.id]}
                    </motion.span>
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight">
                      {station.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-tech text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">
                    {station.domain}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-tech text-zinc-500 dark:text-zinc-400">
                  <span className="tabular-nums">Step 0{idx + 1}</span>
                  <span className="text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                    Inspect <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Active Station Detail Inspection Container with AnimatePresence */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStation.id}
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.985 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-10 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-2xl relative mb-10 sm:mb-12"
            >
              {/* Corner HUD Brackets */}
              <div className="hud-corner-tl text-cyan-600 dark:text-cyan-400" />
              <div className="hud-corner-tr text-cyan-600 dark:text-cyan-400" />
              <div className="hud-corner-bl text-cyan-600 dark:text-cyan-400" />
              <div className="hud-corner-br text-cyan-600 dark:text-cyan-400" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 sm:pb-6 border-b border-zinc-100 dark:border-zinc-800/80 gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-tech text-cyan-600 dark:text-cyan-400 mb-1 font-bold">
                    <span>ACTIVE STATION:</span>
                    <span className="uppercase">{currentStation.title}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-display font-black uppercase text-zinc-900 dark:text-white">
                    {currentStation.subtitle}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-tech text-zinc-600 dark:text-zinc-400 font-semibold">
                    DOMAIN: {currentStation.domain}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 py-6 sm:py-8 items-start">
                {/* Narrative text */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 }}
                  className="lg:col-span-7 space-y-4"
                >
                  <span className="text-[11px] font-tech text-zinc-500 uppercase tracking-wider block font-bold">
                    JOURNEY RECORD
                  </span>
                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed font-sans">
                    {currentStation.narrative}
                  </p>

                  <div className="pt-3 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs font-tech text-zinc-700 dark:text-zinc-300">
                    <span className="text-cyan-600 dark:text-cyan-400 uppercase font-bold block mb-1">
                      HISTORICAL MILESTONE:
                    </span>
                    <p>{currentStation.milestone}</p>
                  </div>
                </motion.div>

                {/* Key insight block */}
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.14 }}
                  whileHover={{ y: -3 }}
                  className="lg:col-span-5 p-5 sm:p-6 rounded-xl bg-zinc-50 dark:bg-gradient-to-br dark:from-zinc-900/90 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-tech font-bold uppercase">
                    <Sparkles className="w-4 h-4" />
                    <span>CORE SCIENTIFIC / PRODUCT INSIGHT</span>
                  </div>
                  <blockquote className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 italic font-sans leading-relaxed">
                    "{currentStation.keyInsight}"
                  </blockquote>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-tech text-zinc-500">
                    <span>STATION TELEMETRY</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">RECORD LOGGED ✓</span>
                  </div>
                </motion.div>
              </div>

            {/* Quick next station navigation */}
            <div className="pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-tech text-zinc-500">
                Station {pharmaQuest.stations.findIndex((s) => s.id === activeStationId) + 1} of {totalStations}
              </span>

              <div className="flex items-center gap-2 sm:gap-3">
                {pharmaQuest.stations.map((st) => (
                  <motion.button
                    key={st.id}
                    onClick={() => handleSelectStation(st.id)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-tech flex items-center justify-center border transition-all ${
                      activeStationId === st.id
                        ? 'bg-cyan-500 text-zinc-950 font-bold border-cyan-500 shadow-sm'
                        : visitedStationIds.includes(st.id)
                        ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700'
                        : 'bg-zinc-50 dark:bg-zinc-950 text-zinc-400 dark:text-zinc-600 border-zinc-200 dark:border-zinc-800'
                    }`}
                    title={`Jump to ${st.title}`}
                  >
                    {st.id[0].toUpperCase()}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        </motion.div>

        {/* Final Discovery Unlocked Card */}
        <AnimatePresence>
          {isAllUnlocked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="p-6 sm:p-12 rounded-2xl bg-gradient-to-b from-cyan-50 via-white to-white dark:from-cyan-950/40 dark:via-zinc-950 dark:to-zinc-950 border-2 border-cyan-500 dark:border-cyan-400/80 shadow-2xl relative"
            >
              {/* Corner HUD Brackets */}
              <div className="hud-corner-tl text-cyan-600 dark:text-cyan-400" />
              <div className="hud-corner-tr text-cyan-600 dark:text-cyan-400" />
              <div className="hud-corner-bl text-cyan-600 dark:text-cyan-400" />
              <div className="hud-corner-br text-cyan-600 dark:text-cyan-400" />

              <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-400/60 text-cyan-800 dark:text-cyan-300 text-xs font-tech uppercase tracking-wider font-bold shadow-sm"
                >
                  <Trophy className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>ALL 4 STATIONS EXPLORED · DISCOVERY SYNTHESIS</span>
                </motion.div>

                <h3 className="text-2xl sm:text-5xl font-display font-black uppercase text-zinc-900 dark:text-white tracking-tight leading-tight">
                  {pharmaQuest.finalDiscovery.headline}
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                  {pharmaQuest.finalDiscovery.message}
                </p>

                <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/70 border border-cyan-200 dark:border-zinc-800 font-tech text-cyan-800 dark:text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                  {pharmaQuest.finalDiscovery.quote}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                  <motion.button
                    onClick={() => onNavigate('contact')}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 font-tech font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>Transmit a Message to Aryan</span>
                    <Send className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    onClick={handleResetQuest}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto px-4 py-3.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-xs font-tech text-zinc-800 dark:text-zinc-300 uppercase tracking-wider flex items-center justify-center gap-2 transition-colors font-semibold"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restart Journey</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
