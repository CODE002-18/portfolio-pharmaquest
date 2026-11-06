/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Axevia-Inspired Personal Portfolio for Aryan Tiwari
 * Fourth-Year Bachelor of Pharmacy Student & Digital Creator
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { NavigationDrawer } from './components/NavigationDrawer';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PharmaQuestSection } from './components/PharmaQuestSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CanvasMode } from './components/InteractiveHeroCanvas';
import { portfolioConfig } from './config/portfolio.config';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'pharmaquest', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [designMode, setDesignMode] = useState<CanvasMode>('particles');
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('theme_preference');
      if (savedTheme) return savedTheme === 'dark';
      return true; // Default dark theme like Axevia
    } catch {
      return true;
    }
  });
  const [localTime, setLocalTime] = useState<string>('');

  // Lock ref to prevent scroll-spy from overriding activeSection during programmatic smooth scroll
  const isProgrammaticScrollRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Synchronize theme with <html> element and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      try {
        localStorage.setItem('theme_preference', 'dark');
      } catch {}
    } else {
      root.classList.remove('dark');
      try {
        localStorage.setItem('theme_preference', 'light');
      } catch {}
    }
  }, [isDark]);

  // Live Clock updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setLocalTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Accurate scroll-spy to update activeSection based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Top of page -> home
      if (scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Near bottom of page -> contact
      if (scrollY + viewportHeight >= docHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // Find section currently crossing the upper-third trigger line
      const triggerOffset = scrollY + Math.min(220, viewportHeight * 0.32);
      let currentId = 'home';

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (triggerOffset >= top) {
            currentId = id;
          }
        }
      }

      setActiveSection(currentId);
    };

    const releaseProgrammaticLock = () => {
      if (isProgrammaticScrollRef.current) {
        isProgrammaticScrollRef.current = false;
        if (scrollTimeoutRef.current) {
          window.clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = null;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', releaseProgrammaticLock, { passive: true });
    window.addEventListener('touchmove', releaseProgrammaticLock, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', releaseProgrammaticLock);
      window.removeEventListener('touchmove', releaseProgrammaticLock);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Smooth scroll handler that works reliably from both Navbar and Drawer
  const handleNavigate = useCallback((sectionId: string) => {
    // Immediately unlock body scroll in case Drawer was open
    document.body.style.overflow = '';
    setIsDrawerOpen(false);
    setActiveSection(sectionId);

    // Lock scroll-spy during smooth scroll animation
    isProgrammaticScrollRef.current = true;
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 900);

    requestAnimationFrame(() => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        const headerEl = document.querySelector('header');
        const navHeight = headerEl ? headerEl.getBoundingClientRect().height : 72;
        const targetTop = Math.max(
          0,
          element.getBoundingClientRect().top + window.scrollY - navHeight + 2
        );
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-[#f4f4f5] font-sans antialiased selection:bg-cyan-500 selection:text-white transition-colors duration-200">
      
      {/* Top Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenMenu={() => setIsDrawerOpen(true)}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection
          onNavigate={handleNavigate}
          canvasMode={designMode}
          onSelectCanvasMode={setDesignMode}
          localTimeString={localTime}
          isDark={isDark}
        />

        <AboutSection onNavigate={handleNavigate} />

        <SkillsSection />

        <ProjectsSection />

        <PharmaQuestSection onNavigate={handleNavigate} />

        <ContactSection localTimeString={localTime} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Axevia Navigation Drawer & Mode Switcher */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        currentDesignMode={designMode}
        onSelectDesignMode={setDesignMode}
        localTimeString={localTime}
        userEmail={portfolioConfig.personal.socials.email}
      />

    </div>
  );
}
