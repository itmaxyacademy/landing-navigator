import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

interface BadgesSectionProps {
  lang: Language;
}

// Background perspective wireframe grid lines matching reference image
const BackgroundGridLines = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
    <svg
      className="w-full h-full opacity-40 sm:opacity-60"
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Curved perspective lines emanating outward */}
      <path d="M-100 200 C 300 150, 900 150, 1300 200" stroke="#e3d6b0" strokeWidth="1.2" />
      <path d="M-100 300 C 300 220, 900 220, 1300 300" stroke="#e3d6b0" strokeWidth="1.2" />
      <path d="M-100 420 C 300 320, 900 320, 1300 420" stroke="#e3d6b0" strokeWidth="1.2" />
      <path d="M-100 560 C 300 450, 900 450, 1300 560" stroke="#e3d6b0" strokeWidth="1.2" />
      <path d="M-100 720 C 300 600, 900 600, 1300 720" stroke="#e3d6b0" strokeWidth="1.2" />

      {/* Perspective fan rays */}
      <path d="M600 -100 L -200 900" stroke="#e3d6b0" strokeWidth="1" opacity="0.7" />
      <path d="M600 -100 L 0 900" stroke="#e3d6b0" strokeWidth="1" opacity="0.7" />
      <path d="M600 -100 L 200 900" stroke="#e3d6b0" strokeWidth="1" opacity="0.7" />
      <path d="M600 -100 L 400 900" stroke="#e3d6b0" strokeWidth="1" opacity="0.7" />
      <path d="M600 -100 L 600 900" stroke="#e3d6b0" strokeWidth="1" opacity="0.7" />
      <path d="M600 -100 L 800 900" stroke="#e3d6b0" strokeWidth="1" opacity="0.7" />
      <path d="M600 -100 L 1000 900" stroke="#e3d6b0" strokeWidth="1" opacity="0.7" />
      <path d="M600 -100 L 1200 900" stroke="#e3d6b0" strokeWidth="1" opacity="0.7" />
      <path d="M600 -100 L 1400 900" stroke="#e3d6b0" strokeWidth="1" opacity="0.7" />
    </svg>
  </div>
);

// Level 1 Badge (Amateur)
const BadgeLevel1SVG = () => (
  <div className="relative w-28 h-32 mx-auto flex items-center justify-center">
    <svg viewBox="0 0 160 190" className="w-full h-full filter drop-shadow">
      <defs>
        <linearGradient id="cyanBadgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00b4d8" />
          <stop offset="100%" stopColor="#0077b6" />
        </linearGradient>
      </defs>
      {/* Outer Shield */}
      <path d="M80 12 L138 36 V96 C138 138 80 168 80 168 C80 168 22 138 22 96 V36 Z" fill="url(#cyanBadgeGrad)" stroke="#023e8a" strokeWidth="2.5" />
      {/* Inner Shield */}
      <path d="M80 20 L130 40 V92 C130 130 80 156 80 156 C80 156 30 130 30 92 V40 Z" fill="#0f172a" opacity="0.2" />
      {/* Top MAXY Icon */}
      <circle cx="80" cy="42" r="10" fill="#ffffff" />
      <path d="M75 45 L78 37 L80 41 L82 37 L85 45" stroke="#0077b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* CERTIFIED Banner */}
      <rect x="22" y="58" width="116" height="26" rx="3" fill="#ffffff" stroke="#0077b6" strokeWidth="1.5" />
      <text x="80" y="75" fill="#0077b6" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="0.8">
        CERTIFIED
      </text>
      {/* Subtext */}
      <rect x="38" y="88" width="84" height="22" rx="2" fill="#023e8a" opacity="0.9" />
      <text x="80" y="97" fill="#ffffff" fontSize="6.5" fontWeight="800" textAnchor="middle">APPLIED AI FOR</text>
      <text x="80" y="105" fill="#ffffff" fontSize="6" fontWeight="700" textAnchor="middle">LECTURERS</text>
      {/* Level Circle */}
      <circle cx="80" cy="128" r="13" fill="#ffffff" stroke="#0077b6" strokeWidth="2" />
      <text x="80" y="133" fill="#0077b6" fontSize="12" fontWeight="900" textAnchor="middle">1</text>
    </svg>
  </div>
);

// Level 2 Badge (Foundational)
const BadgeLevel2SVG = () => (
  <div className="relative w-28 h-32 mx-auto flex items-center justify-center">
    <svg viewBox="0 0 160 190" className="w-full h-full filter drop-shadow">
      <defs>
        <linearGradient id="blueBadgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      {/* Outer Shield */}
      <path d="M80 12 L138 36 V96 C138 138 80 168 80 168 C80 168 22 138 22 96 V36 Z" fill="url(#blueBadgeGrad)" stroke="#1e3a8a" strokeWidth="2.5" />
      {/* Top MAXY Icon */}
      <circle cx="80" cy="42" r="10" fill="#ffffff" />
      <path d="M75 45 L78 37 L80 41 L82 37 L85 45" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* CERTIFIED Banner */}
      <rect x="22" y="58" width="116" height="26" rx="3" fill="#ffffff" stroke="#1d4ed8" strokeWidth="1.5" />
      <text x="80" y="75" fill="#1e3a8a" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="0.8">
        CERTIFIED
      </text>
      {/* Subtext */}
      <rect x="38" y="88" width="84" height="22" rx="2" fill="#1e3a8a" opacity="0.9" />
      <text x="80" y="97" fill="#ffffff" fontSize="6.5" fontWeight="800" textAnchor="middle">APPLIED AI FOR</text>
      <text x="80" y="105" fill="#ffffff" fontSize="6" fontWeight="700" textAnchor="middle">LECTURERS</text>
      {/* Level Shield Ribbon */}
      <path d="M64 116 L80 108 L96 116 L96 142 L80 149 L64 142 Z" fill="#1e3a8a" stroke="#ffffff" strokeWidth="1.5" />
      <text x="80" y="134" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle">2</text>
    </svg>
  </div>
);

// Level 3 Badge (Profesional)
const BadgeLevel3SVG = () => (
  <div className="relative w-28 h-32 mx-auto flex items-center justify-center">
    <svg viewBox="0 0 160 190" className="w-full h-full filter drop-shadow">
      <defs>
        <linearGradient id="purpleBadgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7e22ce" />
          <stop offset="100%" stopColor="#581c87" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
      </defs>
      {/* Gold Ribbon Tails */}
      <path d="M52 140 L38 178 L56 168 L70 178 L66 142 Z" fill="url(#goldGrad)" />
      <path d="M108 140 L122 178 L104 168 L90 178 L94 142 Z" fill="url(#goldGrad)" />
      {/* Outer Shield */}
      <path d="M80 12 L138 36 V96 C138 138 80 168 80 168 C80 168 22 138 22 96 V36 Z" fill="url(#purpleBadgeGrad)" stroke="url(#goldGrad)" strokeWidth="3" />
      {/* Top MAXY Icon */}
      <circle cx="80" cy="40" r="10" fill="url(#goldGrad)" />
      <path d="M75 43 L78 35 L80 39 L82 35 L85 43" stroke="#581c87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* CERTIFIED Banner */}
      <rect x="22" y="56" width="116" height="26" rx="3" fill="url(#purpleBadgeGrad)" stroke="url(#goldGrad)" strokeWidth="2" />
      <text x="80" y="73" fill="#fef08a" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="0.8">
        CERTIFIED
      </text>
      {/* Subtext */}
      <rect x="38" y="86" width="84" height="22" rx="2" fill="#581c87" />
      <text x="80" y="95" fill="#ffffff" fontSize="6.5" fontWeight="800" textAnchor="middle">APPLIED AI FOR</text>
      <text x="80" y="103" fill="#ffffff" fontSize="6" fontWeight="700" textAnchor="middle">LECTURERS</text>
      {/* Level Star */}
      <polygon points="80,118 83,125 91,126 85,131 87,139 80,135 73,139 75,131 69,126 77,125" fill="url(#goldGrad)" />
      <text x="80" y="133" fill="#581c87" fontSize="10" fontWeight="900" textAnchor="middle">3</text>
    </svg>
  </div>
);

// HolonIQ by QS Southeast Asia EdTech 50 Graphic
const HolonIqGraphic = () => (
  <div className="w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-700/40 flex flex-col mx-auto bg-slate-950 p-1.5">
    <img
      src="/edtech50-badge.png"
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        if (!target.src.includes('v=2')) {
          target.src = '/edtech50-badge.png?v=2';
        }
      }}
      alt="Southeast Asia EdTech 50 - HolonIQ by QS"
      className="w-full h-full object-contain rounded-xl"
    />
  </div>
);

export const BadgesSection: React.FC<BadgesSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="badges" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 2xl:px-16 max-w-7xl 2xl:max-w-[1536px] mx-auto overflow-hidden scroll-mt-20">
      <BackgroundGridLines />

      {/* Main Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-1.5"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2347] tracking-tight">
          Level & Progression
        </h2>
      </motion.div>

      {/* 3 Badge Cards matching reference image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch mb-12 sm:mb-16">
        {/* Card 1: Amateur (Level 1) - Highlighted as Program Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
          className="relative p-7 sm:p-8 rounded-2xl bg-white border-2 border-[#122b5c] shadow-lg flex flex-col items-center text-center space-y-5 group cursor-default"
        >
          {/* Active Level 1 Banner */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-3.5 bg-[#0052ff] text-white font-black text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5"
          >
            <CheckCircle className="w-3.5 h-3.5 text-white" />
            <span>Sertifikasi Program Ini</span>
          </motion.div>

          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.08 }}
            transition={{ duration: 0.4 }}
            className="pt-2"
          >
            <BadgeLevel1SVG />
          </motion.div>

          <div className="space-y-3 flex-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#0052ff] transition-colors">
              Amateur
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Start your journey in applied AI with the basics. Build a solid foundation of knowledge and skills to grow further.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Foundational (Level 2) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
          className="p-7 sm:p-8 rounded-2xl bg-white border-2 border-[#122b5c] shadow-md flex flex-col items-center text-center space-y-5 group cursor-default"
        >
          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.08 }}
            transition={{ duration: 0.4 }}
            className="pt-2"
          >
            <BadgeLevel2SVG />
          </motion.div>

          <div className="space-y-3 flex-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#2563eb] transition-colors">
              Foundational
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Gain deeper understanding and hands-on experience. Strengthen your ability to apply AI concepts to real-world scenarios.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Profesional (Level 3) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
          className="p-7 sm:p-8 rounded-2xl bg-white border-2 border-[#122b5c] shadow-md flex flex-col items-center text-center space-y-5 group cursor-default"
        >
          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.08 }}
            transition={{ duration: 0.4 }}
            className="pt-2"
          >
            <BadgeLevel3SVG />
          </motion.div>

          <div className="space-y-3 flex-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#00296b] transition-colors">
              Profesional
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Demonstrate mastery in applied AI. Lead projects, design advanced solutions, and showcase expertise at the highest level.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 1 - 2 - 3 Timeline Bar matching reference image exactly */}
      <div className="max-w-4xl mx-auto relative my-8 px-6">
        {/* Vibrant Blue Connecting Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute top-1/2 left-10 right-10 h-1.5 bg-[#0052ff] -translate-y-1/2 rounded-full z-0 origin-left"
        />

        {/* Numbered Nodes 1, 2, 3 */}
        <div className="relative z-10 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#17254d] text-white font-black text-xl sm:text-2xl flex items-center justify-center border-4 border-white shadow-lg cursor-pointer"
          >
            1
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#17254d] text-white font-black text-xl sm:text-2xl flex items-center justify-center border-4 border-white shadow-lg cursor-pointer"
          >
            2
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#17254d] text-white font-black text-xl sm:text-2xl flex items-center justify-center border-4 border-white shadow-lg cursor-pointer"
          >
            3
          </motion.div>
        </div>
      </div>

      {/* Description text matching reference image */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold mt-6 mb-16 px-4"
      >
        Professionals can progress through badge levels by gaining experience, completing advanced training, and passing higher-level examinations. Each level requires demonstration of increased competency in applied AI.
      </motion.p>

      {/* Institutional Benefit Section: HolonIQ by QS Recognition */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-4 flex justify-center">
            <HolonIqGraphic />
          </div>

          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-extrabold text-xs">
              <Award className="w-4 h-4 text-amber-400" />
              <span>GLOBAL RECOGNITION BENEFIT</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {t.holonIqTitle}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {t.holonIqDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                Standar Kurikulum Internasional
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <Award className="w-4 h-4" />
                QS EdTech Top 50 Accredited
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
