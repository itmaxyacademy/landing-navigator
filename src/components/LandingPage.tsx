import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BadgesSection, CaaiTm } from './BadgesSection';
import { AIToolsSection } from './AIToolsSection';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Globe,
  Clock,
  ExternalLink,
  Users,
  Check,
  BarChart2,
  Zap,
} from 'lucide-react';

const formatRupiah = (val?: number | string | null, fallback?: string) => {
  if (val === undefined || val === null || val === '') return fallback || '';
  const num = typeof val === 'number' ? val : parseFloat(String(val));
  if (isNaN(num)) return fallback || String(val);
  return `Rp ${Math.round(num).toLocaleString('id-ID')}`;
};

interface LandingPageProps {
  lang: Language;
  packages?: Record<string, { price: number; fake_price: number; name?: string }>;
  onOpenCheckout: (tier: 'free' | 'tier1' | 'tier2') => void;
  onOpenGiveaway: () => void;
  onOpenApp?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  lang,
  packages,
  onOpenCheckout,
}) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const t = translations[lang];

  const handleScrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#ffb034] selection:text-slate-950 font-sans">
      {/* Full-width Hero Section */}
      <section id="hero" className="relative w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-12 2xl:px-16 bg-gradient-to-b from-amber-50/80 via-slate-50 to-slate-50 overflow-hidden scroll-mt-20">
        {/* Soft Modern Tech Background Image Overlay */}
        <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Background Texture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-[0.06] mix-blend-multiply scale-105"
          />
        </div>

        {/* Dynamic Floating Background Ambient Glow Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            x: [-40, 40, -40],
            y: [-15, 15, -15],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-amber-300/35 via-amber-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [30, -30, 30],
            y: [20, -20, 20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-amber-400/20 via-orange-300/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
        />

        {/* Floating Spark Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 1200 - 600,
                y: Math.random() * 600,
                opacity: 0.2,
                scale: 0.6,
              }}
              animate={{
                y: [0, -80, 0],
                x: [0, i % 2 === 0 ? 30 : -30, 0],
                opacity: [0.25, 0.8, 0.25],
              }}
              transition={{
                duration: 6 + i * 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.35,
              }}
              className="absolute left-1/2 top-1/3 w-1.5 h-1.5 rounded-full bg-[#d98200] shadow-[0_0_12px_#ffb034]"
            />
          ))}
        </div>

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center max-w-3xl 2xl:max-w-4xl mx-auto space-y-7"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50/90 border border-amber-300/80 text-xs sm:text-sm font-bold text-slate-800 shadow-sm backdrop-blur-md cursor-default"
            >
              <span className="text-base">🎓</span>
              <span>{t.recognizedBadge || 'Maxy Academy is Recognized by HolonIQ EdTech Top 50'}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.12]"
            >
              {t.heroTitlePrefix}{' '}
              <span className="text-[#d98200] block mt-1">
                {t.heroTitleHighlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl 2xl:max-w-3xl mx-auto font-medium"
            >
              {t.heroSubtitle}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleScrollToPricing}
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#ffb034] hover:bg-[#e59d2a] text-slate-900 font-black text-sm lg:text-base flex items-center justify-center gap-2.5 transition-all shadow-md shadow-[#ffb034]/25 hover:shadow-xl"
              >
                <span>
                  {packages?.tier1?.price
                    ? (lang === 'id' ? `Daftar Sekarang (Mulai ${formatRupiah(packages.tier1.price, 'Rp 49.900')})` : `Enroll Now (From ${formatRupiah(packages.tier1.price, 'Rp 49.900')})`)
                    : t.enrollNow}
                </span>
                <ArrowRight className="w-4.5 h-4.5 text-slate-900" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Highlight Stats Bar inside Hero Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 max-w-6xl 2xl:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-7 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg"
          >
            <div className="space-y-1.5 p-3 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg sm:text-xl 2xl:text-2xl">
                <Clock className="w-5 h-5 text-[#d98200]" />
                <span>28 JP</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">{t.statMeetings}</p>
              <p className="text-[11px] sm:text-xs text-slate-500">{t.statMeetingsSub}</p>
            </div>

            <div className="space-y-1.5 p-3 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg sm:text-xl 2xl:text-2xl">
                <img
                  src="https://cms.maxy.academy/uploads/edtech50-badge.png"
                  alt="HolonIQ"
                  className="w-5.5 h-5.5 object-contain"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/edtech50-badge.png'; }}
                />
                <span>HolonIQ</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">{t.statHolonIqTitle || 'EdTech Top 50'}</p>
              <p className="text-[11px] sm:text-xs text-slate-500">{t.statHolonIqSub || 'Maxy Academy direkognisi Oleh HolonIQ'}</p>
            </div>

            <div className="space-y-1.5 p-3 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg sm:text-xl 2xl:text-2xl">
                <ShieldCheck className="w-5 h-5 text-[#d98200]" />
                <span>Sertifikat</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">{t.statAccredify}</p>
              <p className="text-[11px] sm:text-xs text-slate-500">{t.statAccredifySub}</p>
            </div>

            <div className="space-y-1.5 p-3 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg sm:text-xl 2xl:text-2xl">
                <Zap className="w-5 h-5 text-[#d98200]" />
                <span>Rp150rb Off</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">{t.statDiscountTier}</p>
              <p className="text-[11px] sm:text-xs text-slate-500">{t.statDiscountTierSub}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Page: Features / Keunggulan Section with id="features" */}
      <section id="features" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 2xl:px-16 max-w-7xl 2xl:max-w-[1536px] mx-auto scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="p-7 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div className="flex items-center gap-3.5">
              <div className="p-3.5 bg-amber-100/90 text-slate-900 rounded-2xl border border-amber-200 shadow-sm">
                <BarChart2 className="w-6 h-6 text-[#d98200]" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 text-xs font-mono font-bold text-amber-800 uppercase tracking-wider bg-amber-100/80 border border-amber-200 rounded-md mb-1">
                  {t.tiktokProgramBadge || 'PROGRAM 1 JUTA BEASISWA'}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                  {t.tiktokSectionTitle || 'Follow dan Ikuti Live Tiktok Kami'}
                </h2>
              </div>
            </div>

            <a
              href="https://www.tiktok.com/@maxy.academy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#ffb034] hover:bg-[#e59d2a] text-slate-900 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm shrink-0"
            >
              <span>{t.tiktokFollowBtn || 'Follow @maxy.academy'}</span>
              <ExternalLink className="w-4 h-4 text-slate-900" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2 hover:border-slate-300 transition-colors">
              <span className="text-xs text-slate-500 font-semibold">{t.tiktokCard1Header || 'Bagi-Bagi Voucher'}</span>
              <div className="text-2xl font-black text-slate-900">{t.tiktokCard1Value || 'SETIAP HARI'}</div>
              <p className="text-xs text-slate-500 font-medium">{t.tiktokCard1Desc || 'Undian dan Voucher Dibagikan di Live TIKTOK'}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2 hover:border-slate-300 transition-colors">
              <span className="text-xs text-slate-500 font-semibold">{t.tiktokCard2Header || 'Voucher'}</span>
              <div className="text-2xl font-black text-emerald-600">{t.tiktokCard2Value || '1.284+ Klaim'}</div>
              <p className="text-xs text-slate-500 font-medium">{t.tiktokCard2Desc || 'Lulusan CAAI Level 1'}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2 hover:border-slate-300 transition-colors">
              <span className="text-xs text-slate-500 font-semibold">{t.tiktokCard3Header || 'Upsell Conversion Tier 2'}</span>
              <div className="text-2xl font-black text-[#d98200]">{t.tiktokCard3Value || '342+ Alumni'}</div>
              <p className="text-xs text-slate-500 font-medium">{t.tiktokCard3Desc || 'Peserta CAAI™ Full Mentoring'}</p>
            </div>
          </div>

          {/* TikTok Live Scholarship Notice Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-amber-100/40 to-slate-50 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-extrabold text-slate-900">Info Klaim Beasiswa: </span>
                <span className="text-slate-700 font-medium">{t.tiktokLiveNote}</span>
              </div>
            </div>

            <a
              href="https://www.tiktok.com/@maxy.academy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center gap-2 transition-colors shrink-0 shadow-sm"
            >
              <span>{t.tiktokJoinLiveBtn || 'Follow TikTok'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#ffb034]" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 2xl:px-16 max-w-7xl 2xl:max-w-[1536px] mx-auto scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl 2xl:max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <span className="text-xs font-mono font-bold text-[#d98200] uppercase tracking-widest px-3.5 py-1.5 bg-amber-100/70 rounded-full border border-amber-200">
            Pilihan Paket Belajar
          </span>
          <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-black text-slate-900">{t.pricingTitle}</h2>
          <p className="text-sm sm:text-base 2xl:text-lg text-slate-600 leading-relaxed">{t.pricingSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10 max-w-6xl 2xl:max-w-7xl mx-auto items-stretch">
          {/* Free Tier / Starter Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            transition={{ duration: 0.4 }}
            className="p-7 sm:p-8 rounded-[2rem] bg-white border-2 border-emerald-500/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden"
          >
            {/* Promo Soft Launching Tag */}
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-black text-[10px] px-3.5 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-200" />
              <span>PROMO SOFT LAUNCHING</span>
            </div>

            <div className="space-y-5 pt-2">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono text-emerald-600 font-black uppercase tracking-wider">FREE TRIAL</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-0.5">{t.freeTierTitle}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-black shrink-0 shadow-sm">
                  3 HARI
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.freeTierSubtitle}</p>

              <div className="pt-2">
                <div className="text-3xl font-black text-slate-900">{t.freeTierPrice}</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Akses Coba Tanpa Komitmen
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pt-4 border-t border-slate-100">
                {t.freeTierFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenCheckout('free')}
              className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm transition-colors shadow-sm"
            >
              {t.selectFreeTier}
            </motion.button>
          </motion.div>

          {/* Tier 1 Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-9 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono text-[#d98200] font-extrabold uppercase tracking-wider">BASIC TIER</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-0.5">{t.tier1Title}</h3>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#ffb034]/20 border border-[#ffb034]/50 text-slate-900 text-xs font-mono font-black shrink-0 shadow-sm">
                  21 JP
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.tier1Subtitle}</p>

              <div className="pt-2">
                <div className="text-3xl font-black text-slate-900">
                  {packages?.tier1?.price ? formatRupiah(packages.tier1.price) : t.tier1Price}
                </div>
                <div className="text-xs text-slate-400 line-through mt-0.5">
                  Normal: {packages?.tier1?.fake_price ? formatRupiah(packages.tier1.fake_price) : t.tier1OriginalPrice}
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 pt-4 border-t border-slate-100">
                {t.tier1Features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenCheckout('tier1')}
              className="w-full py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-xs sm:text-sm border border-slate-200 transition-colors shadow-sm"
            >
              {packages?.tier1?.price
                ? (lang === 'id' ? `Pilih Tier 1 (${formatRupiah(packages.tier1.price)})` : `Select Tier 1 (${formatRupiah(packages.tier1.price)})`)
                : t.selectTier1}
            </motion.button>
          </motion.div>

          {/* Tier 2 Card (Featured Sleek Gold/Amber & Dark) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="p-8 sm:p-9 rounded-[2rem] bg-slate-900 text-white border-2 border-[#ffb034] shadow-2xl shadow-[#ffb034]/10 relative flex flex-col justify-between space-y-8"
          >
            <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-[#ffb034] text-slate-900 font-black text-[10px] uppercase tracking-wider shadow-md">
              RECOMMENDED CERTIFICATION
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono text-[#ffb034] font-extrabold uppercase tracking-wider flex items-center gap-1">
                    PRO <CaaiTm /> TIER
                  </span>
                  <h3 className="text-2xl font-black text-white mt-0.5">{t.tier2Title}</h3>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#ffb034] text-slate-900 text-xs font-mono font-black shrink-0 shadow-md">
                  28 JP
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{t.tier2Subtitle}</p>

              <div className="pt-2">
                <div className="flex items-baseline gap-2.5">
                  <div className="text-3xl font-black text-[#ffb034]">
                    {packages?.tier2?.price ? formatRupiah(packages.tier2.price) : t.tier2DiscountedPrice}
                  </div>
                  <div className="text-xs text-slate-400 line-through">
                    {packages?.tier2?.fake_price ? formatRupiah(packages.tier2.fake_price) : t.tier2Price}
                  </div>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200 pt-4 border-t border-slate-800">
                {t.tier2Features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ffb034] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenCheckout('tier2')}
              className="w-full py-4 rounded-xl bg-[#ffb034] hover:bg-[#e59d2a] text-slate-900 font-black text-xs sm:text-sm transition-all shadow-lg shadow-[#ffb034]/25 hover:shadow-xl hover:shadow-[#ffb034]/35"
            >
              {packages?.tier2?.price
                ? (lang === 'id' ? `Pilih Tier 2 (${formatRupiah(packages.tier2.price)})` : `Select Tier 2 (${formatRupiah(packages.tier2.price)})`)
                : t.selectTier2}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Badges Level & Progression Section */}
      <BadgesSection lang={lang} />

      {/* AI Tools & Platforms Section */}
      <AIToolsSection lang={lang} />

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto space-y-8 scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <span className="text-xs font-mono font-bold text-[#d98200] uppercase tracking-widest px-3 py-1 bg-amber-100/60 rounded-full border border-amber-200">
            Pusat Bantuan
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{t.faqTitle}</h2>
        </motion.div>

        <div className="space-y-4">
          {[
            { q: t.faq1Q, a: t.faq1A },
            { q: t.faq2Q, a: t.faq2A },
            { q: t.faq3Q, a: t.faq3A },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md cursor-pointer transition-all"
            >
              <div className="flex justify-between items-center font-bold text-sm sm:text-base text-slate-900">
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                    expandedFaq === idx ? 'rotate-180 text-[#d98200]' : ''
                  }`}
                />
              </div>
              <AnimatePresence>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs sm:text-sm text-slate-600 mt-4 pt-4 border-t border-slate-100 leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-center text-xs text-slate-400 space-y-3 border-t border-slate-800">
        <div className="flex items-center justify-center gap-2 font-mono text-slate-300">
          <Globe className="w-3.5 h-3.5 text-[#ffb034]" />
          <span>navigator.maxy.academy • ai.maxy.academy</span>
        </div>
        <p className="text-slate-400 max-w-md mx-auto">{t.footerTagline}</p>
        <p className="text-slate-500 pt-2">{t.footerRights}</p>
      </footer>
    </div>
  );
};
