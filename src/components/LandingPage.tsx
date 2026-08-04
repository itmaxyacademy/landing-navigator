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
  Gift,
  MessageCircle,
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
  onOpenGiveaway,
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
              {lang === 'id' ? (
                <>
                  <div>
                    Master AI Dalam <span className="text-[#d98200]">21 Hari</span> +
                  </div>
                  <div className="mt-1">
                    Sertifikasi Internasional Dalam <span className="text-[#d98200]">29 Hari</span>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    Master AI in <span className="text-[#d98200]">21 Days</span> +
                  </div>
                  <div className="mt-1">
                    International Certification in <span className="text-[#d98200]">29 Days</span>
                  </div>
                </>
              )}
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

      {/* Footer matching reference image */}
      <footer className="relative bg-[#050914] text-slate-300 pt-16 pb-12 px-6 lg:px-16 border-t border-slate-800/80 font-sans">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#d98200] to-[#ffb034] flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-[#d98200]/20">
                M
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Maxy<span className="text-[#ffb034]">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pr-4 font-normal">
              {lang === 'id'
                ? 'Lingkungan pembelajaran sandbox visual premium, 100% gratis. Sama sekali tidak memerlukan login, pendaftaran, atau langkah pembayaran.'
                : 'Premium visual sandbox learning environment, 100% free. Absolutely no login, registration, or payment steps required.'}
            </p>
          </div>

          {/* Col 2: PRODUK AI GRATIS */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#d98200] uppercase tracking-wider">
              {lang === 'id' ? 'PRODUK AI GRATIS' : 'FREE AI PRODUCTS'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="https://ai.maxy.academy" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffb034] transition-colors flex items-center gap-1.5 group">
                  <span>Sandbox MaxyBlock</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#ffb034] transition-colors" />
                </a>
              </li>
              <li>
                <a href="https://ai.maxy.academy" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffb034] transition-colors flex items-center gap-1.5 group">
                  <span>Taman Bermain MaxyBox</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#ffb034] transition-colors" />
                </a>
              </li>
              <li>
                <a href="https://ai.maxy.academy" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffb034] transition-colors flex items-center gap-1.5 group">
                  <span>Strategis MaxyCanvas</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#ffb034] transition-colors" />
                </a>
              </li>
              <li>
                <a href="https://ai.maxy.academy" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffb034] transition-colors flex items-center gap-1.5 group">
                  <span>Keamanan Siber MaXyber</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#ffb034] transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: MEDIA SOSIAL */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#d98200] uppercase tracking-wider">
              {lang === 'id' ? 'MEDIA SOSIAL' : 'SOCIAL MEDIA'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="https://facebook.com/maxy.academy" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffb034] transition-colors flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 fill-current text-slate-400" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/maxy.academy" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffb034] transition-colors flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 fill-current text-slate-400" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/maxyacademy" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffb034] transition-colors flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 fill-current text-slate-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@maxy.academy" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffb034] transition-colors flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 fill-current text-slate-400" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.32 1.55-1.36 2.55-.06 1.15.54 2.27 1.5 2.87 1.05.67 2.43.71 3.52.12.97-.53 1.57-1.57 1.6-2.68.05-3.62.01-7.24.02-10.86z"/></svg>
                  <span>TikTok</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: KEBIJAKAN PENGGUNAAN INSTAN Card */}
          <div className="lg:col-span-3">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-xl space-y-2.5">
              <h4 className="font-mono text-xs font-bold text-[#d98200] uppercase tracking-wider">
                {lang === 'id' ? 'KEBIJAKAN PENGGUNAAN INSTAN' : 'INSTANT USE POLICY'}
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                {lang === 'id'
                  ? 'Kami tidak pernah melacak sesi browser Anda atau meminta cookie pendaftaran. Semua progres disimpan secara ketat di dalam sandbox lokal browser Anda. Belajar tidak pernah semudah ini.'
                  : 'We never track your browser sessions or request registration cookies. All progress is strictly saved inside your browser local sandbox. Learning has never been easier.'}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar Separator & Text */}
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Maxy AI & Maxy Academy. Hak cipta dilindungi undang-undang.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <span className="text-amber-400">💛</span>
            <span>untuk pembelajaran digital tanpa hambatan.</span>
          </p>
        </div>

        {/* Floating Quick Action Buttons (Bottom-Right) */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
          {/* Gift / Voucher Floating Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={onOpenGiveaway}
            className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white flex items-center justify-center shadow-xl backdrop-blur-md hover:bg-slate-800 hover:border-amber-400/50 transition-all group"
            title="Klaim Beasiswa / Voucher"
          >
            <Gift className="w-5 h-5 text-[#ffb034] group-hover:scale-110 transition-transform" />
          </motion.button>

          {/* WhatsApp Support Floating Button */}
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            href="https://wa.me/6281132200888?text=Halo%20Admin%20Maxy%20Academy,%20saya%20ingin%20tanya%20mengenai%20Program%20Certified%20AI%20Navigator"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl bg-[#25D366] text-slate-950 flex items-center justify-center shadow-xl shadow-[#25D366]/25 hover:bg-[#20bd5a] transition-all"
            title="Hubungi WhatsApp Support"
          >
            <MessageCircle className="w-6 h-6 fill-current text-slate-950" />
          </motion.a>
        </div>
      </footer>
    </div>
  );
};
