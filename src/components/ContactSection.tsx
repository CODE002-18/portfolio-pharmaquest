/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Contact Section inspired by Axevia references (image_7f10eaf4.png & image_587beb0d.png)
 * Recreates the [ TRANSMISSION_FORM ] layout with interactive micro-animations.
 */

import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  localTimeString: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ localTimeString }) => {
  const { personal } = portfolioConfig;

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('0x01 ACADEMIC / PHARMA');
  const [budgetScope, setBudgetScope] = useState('Academic Collab');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'ready' | 'transmitting' | 'transmitted' | 'error'>('ready');
  const [submittedName, setSubmittedName] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const WEB3FORMS_ACCESS_KEY = '88a015e3-5033-4912-b918-67744bdc9be6';

  const projectTypes = [
    { code: '0x00', label: 'WEBSITE' },
    { code: '0x01', label: 'ACADEMIC / PHARMA' },
    { code: '0x02', label: 'WEB APP' },
    { code: '0x03', label: '3D / INTERACTIVE' },
    { code: '0x04', label: 'OTHER' },
  ];

  const budgetOptions = ['< $1K', '$1K – $3K', 'Academic Collab', 'Open Source'];

  const formattedSubject = `Portfolio Inquiry [${projectType}] from ${name.trim() || 'Visitor'}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const currentName = name.trim();
    setStatus('transmitting');

    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('name', currentName);
      formData.append('email', email.trim());
      formData.append('subject', formattedSubject);
      formData.append('inquiry_type', projectType);
      formData.append('scope', budgetScope);
      formData.append('message', message.trim());

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSubmittedName(currentName);
        setName('');
        setEmail('');
        setMessage('');
        setStatus('transmitted');
        window.setTimeout(() => {
          setStatus('ready');
        }, 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
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
              <span>06.</span>
              <span className="uppercase font-semibold">CONTACT</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-tech">
              HOME / CONTACT
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
              CONTACT
            </span>
          </motion.div>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="max-w-2xl mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase text-zinc-900 dark:text-white tracking-tight leading-none mb-4">
            SEND A MESSAGE
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Tell me about your project — what you want to build, your timeline, or any academic inquiry. I usually reply within 24 hours.
          </p>
        </motion.div>

        {/* Axevia Transmission Form with Staggered Row Animations */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          onSubmit={handleSubmit}
          className="space-y-8 sm:space-y-10 max-w-4xl"
        >
          
          {/* Row 1: Name and Email */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            <div className="space-y-2">
              <label htmlFor="contact-name" className="block text-xs font-tech text-zinc-600 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                01 YOUR NAME *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 pb-2.5 pt-1 text-sm sm:text-base text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors font-tech"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="block text-xs font-tech text-zinc-600 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                02 EMAIL ADDRESS *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 pb-2.5 pt-1 text-sm sm:text-base text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors font-tech"
              />
            </div>
          </motion.div>

          {/* Row 2: Project Type Chips */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="space-y-3"
          >
            <span className="block text-xs font-tech text-zinc-600 dark:text-zinc-400 uppercase tracking-wider font-semibold">
              03 PROJECT / INQUIRY TYPE
            </span>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {projectTypes.map((pt) => {
                const isSelected = projectType === `${pt.code} ${pt.label}`;
                return (
                  <motion.button
                    key={pt.code}
                    type="button"
                    onClick={() => setProjectType(`${pt.code} ${pt.label}`)}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`cursor-pointer px-3 sm:px-3.5 py-2 rounded-lg border text-xs font-tech transition-colors flex items-center gap-2 ${
                      isSelected
                        ? 'border-cyan-500 bg-cyan-100 dark:bg-cyan-950/50 text-cyan-800 dark:text-cyan-300 font-bold shadow-sm'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/60 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300'
                    }`}
                  >
                    <span className="text-zinc-400 dark:text-zinc-500 text-[10px]">{pt.code}</span>
                    <span>{pt.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Row 3: Budget Scope */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="space-y-3"
          >
            <span className="block text-xs font-tech text-zinc-600 dark:text-zinc-400 uppercase tracking-wider font-semibold">
              04 SCOPE / COLLABORATION NATURE
            </span>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {budgetOptions.map((opt) => {
                const isSelected = budgetScope === opt;
                return (
                  <motion.button
                    key={opt}
                    type="button"
                    onClick={() => setBudgetScope(opt)}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`cursor-pointer px-3.5 sm:px-4 py-2 rounded-lg border text-xs font-tech transition-colors ${
                      isSelected
                        ? 'border-cyan-500 bg-cyan-100 dark:bg-cyan-950/50 text-zinc-900 dark:text-white font-bold shadow-sm'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/60 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300'
                    }`}
                  >
                    {opt}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Row 4: Message Textarea with Live Counter */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <label htmlFor="contact-message" className="block text-xs font-tech text-zinc-600 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                05 MESSAGE *
              </label>
              <span className="text-[11px] font-tech text-zinc-500 tabular-nums">
                {message.length} / 5000
              </span>
            </div>
            <textarea
              id="contact-message"
              required
              rows={4}
              maxLength={5000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, timeline, or academic query..."
              className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 pb-2.5 pt-1 text-sm sm:text-base text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors font-sans resize-y"
            />
          </motion.div>

          {/* Submit Button & Status Indicator */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3"
          >
            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                type="submit"
                disabled={status === 'transmitting'}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`cursor-pointer w-full sm:w-auto px-7 py-3.5 rounded-lg font-tech font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  status === 'transmitted'
                    ? 'bg-emerald-600 text-white border border-emerald-500'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border dark:border-zinc-700 dark:hover:border-cyan-400'
                }`}
              >
                {status === 'transmitted' ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>MESSAGE SENT</span>
                  </>
                ) : status === 'transmitting' ? (
                  <span>SENDING...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                  </>
                )}
              </motion.button>

              <div className="flex items-center gap-2 text-xs font-tech">
                <span
                  className={`w-2 h-2 rounded-full ${
                    status === 'transmitted'
                      ? 'bg-emerald-500'
                      : status === 'error'
                      ? 'bg-rose-500'
                      : status === 'transmitting'
                      ? 'bg-amber-500 animate-pulse'
                      : 'bg-cyan-500'
                  }`}
                />
                <span className="text-zinc-600 dark:text-zinc-400 uppercase text-[11px] font-semibold">
                  {status === 'transmitted'
                    ? `THANKS ${submittedName.toUpperCase()} — MESSAGE DELIVERED TO ARYAN`
                    : status === 'error'
                    ? 'CONNECTION ERROR — PLEASE TRY AGAIN'
                    : status === 'transmitting'
                    ? 'TRANSMITTING...'
                    : 'STATUS: READY'}
                </span>
              </div>
            </div>

            {/* Direct Email Copy Button */}
            <motion.button
              type="button"
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs font-tech text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 transition-colors shadow-sm dark:shadow-none"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </motion.button>
          </motion.div>

        </motion.form>

        {/* Direct Connect Footnote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-xs font-tech"
        >
          <div>
            <span className="text-zinc-500 block uppercase text-[10px] font-semibold">DIRECT EMAIL</span>
            <a
              href={`mailto:${personal.socials.email}`}
              className="text-zinc-800 dark:text-zinc-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-semibold"
            >
              {personal.socials.email}
            </a>
          </div>

          <div className="sm:text-center sm:flex sm:flex-col sm:items-center">
            <span className="text-zinc-500 block uppercase text-[10px] font-semibold">CODE REPOSITORY</span>
            <a
              href={personal.socials.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-800 dark:text-zinc-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-semibold inline-flex items-center gap-1"
            >
              github.com/code002-18 <ArrowUpRight className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
            </a>
          </div>

          <div className="sm:text-right">
            <span className="text-zinc-500 block uppercase text-[10px] font-semibold">LOCAL CLOCK</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-semibold tabular-nums">
              {localTimeString}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
