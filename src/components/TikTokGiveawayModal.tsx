import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { CaaiTm } from './BadgesSection';
import { X, Sparkles, Copy, Check, Ticket, Gift, ExternalLink, ShieldCheck } from 'lucide-react';

interface TikTokGiveawayModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectCoupon: (code: string) => void;
}

export const TikTokGiveawayModal: React.FC<TikTokGiveawayModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectCoupon,
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const t = translations[lang];

  if (!isOpen) return null;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-indigo-500/30 rounded-2xl max-w-lg w-full p-6 text-white shadow-2xl relative overflow-hidden">
        {/* Glowing Background Accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-tr from-rose-500 to-indigo-600 rounded-xl text-white shadow-lg shadow-rose-500/30">
            <Gift className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              10.000 Followers TikTok Campaign
            </span>
            <h3 className="text-xl font-extrabold text-white leading-snug">
              {t.tiktokBannerTitle}
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-5 leading-relaxed">{t.tiktokBannerDesc}</p>

        {/* Event Booth Badge Note */}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs mb-3 flex items-start gap-2">
          <Ticket className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
          <span>{t.eventBoothBadge}</span>
        </div>

        {/* TikTok Live Info Badge */}
        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs mb-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </span>
            <span>{t.tiktokLiveNote}</span>
          </div>
          <a
            href="https://www.tiktok.com/@maxy.academy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-amber-300 underline hover:text-amber-200 flex items-center gap-1 shrink-0"
          >
            <span>Live TikTok</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Voucher Cards Options */}
        <div className="space-y-3 mb-6">
          {/* Voucher Option 1 */}
          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-indigo-500/40 flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-cyan-400 text-sm">BEASISWAMAXI</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Tier 1 Gratis (Rp0)
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'id'
                  ? 'Gratis 100% untuk 21 Hari Self-Paced + 21 JP Certificate'
                  : '100% Free for 21 Days Self-Paced + 21 JP Certificate'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy('BEASISWAMAXI')}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
                title="Copy code"
              >
                {copiedCode === 'BEASISWAMAXI' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => {
                  onSelectCoupon('BEASISWAMAXI');
                  onClose();
                }}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow"
              >
                Pakai
              </button>
            </div>
          </div>

          {/* Voucher Option 2 */}
          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-purple-500/40 flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-purple-300 text-sm">TIKTOKUPSELL</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Diskon Rp150.000
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                Tier 2 <CaaiTm /> Mentoring Rp300.000 {'->'} Rp150.000
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy('TIKTOKUPSELL')}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
                title="Copy code"
              >
                {copiedCode === 'TIKTOKUPSELL' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => {
                  onSelectCoupon('TIKTOKUPSELL');
                  onClose();
                }}
                className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow"
              >
                Pakai
              </button>
            </div>
          </div>

          {/* Voucher Option 3: Event Booth */}
          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-amber-500/40 flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-amber-300 text-sm">IDEAFEST50</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Booth Free Claim
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'id'
                  ? 'Khusus 50 Pengunjung Awal Booth DTICX & IdeaFest MAXY'
                  : 'Exclusive for First 50 Visitors at MAXY DTICX & IdeaFest Booth'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy('IDEAFEST50')}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
                title="Copy code"
              >
                {copiedCode === 'IDEAFEST50' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => {
                  onSelectCoupon('IDEAFEST50');
                  onClose();
                }}
                className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-all shadow"
              >
                Pakai
              </button>
            </div>
          </div>
        </div>

        {/* Footer Link to TikTok */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Official MAXY Academy Promo
          </span>
          <a
            href="https://www.tiktok.com/@maxy.academy"
            target="_blank"
            rel="noreferrer"
            className="text-[#ffb034] hover:underline flex items-center gap-1 font-semibold"
          >
            TikTok @maxy.academy <ExternalLink className="w-3 h-3 text-[#ffb034]" />
          </a>
        </div>
      </div>
    </div>
  );
};
