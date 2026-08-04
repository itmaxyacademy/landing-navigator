import React from 'react';
import { X, Monitor, Coffee } from 'lucide-react';

interface TikTokGiveawayModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: string;
  onSelectCoupon?: (code: string) => void;
}

export const TikTokGiveawayModal: React.FC<TikTokGiveawayModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-[#0b0f19] border border-slate-800 rounded-3xl max-w-md w-full p-6 text-white shadow-2xl relative overflow-hidden">
        {/* Close Icon Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with TikTok Logo & Community Goal Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-purple-500/40 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-500/10">
            <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.05a8.16 8.16 0 0 0 4.91 1.62v-3.98a4.85 4.85 0 0 1-1-.02z"/>
            </svg>
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[10px] font-black uppercase tracking-wider mb-1">
              <span className="text-amber-400">⚡</span> COMMUNITY GOAL
            </div>
            <h3 className="text-lg font-black text-white leading-tight">
              Target: 10.000 Followers di TikTok! 🚀
            </h3>
          </div>
        </div>

        {/* Body Description */}
        <p className="text-xs text-slate-300 leading-relaxed mb-5">
          Bantu MaxyAI mencapai target ini! Jika target terpenuhi, kami akan membuka MaxyAI Hub di Jakarta untuk Pelatihan AI GRATIS seharian penuh dan Kopi FREE-FLOW gratis!
        </p>

        {/* Feature Cards Grid (Pelatihan AI & Kopi Gratis) */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#111625] border border-slate-800 rounded-2xl p-3 flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Monitor className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-white uppercase tracking-tight">PELATIHAN AI</div>
              <div className="text-[10px] text-slate-400 leading-tight">Gratis seharian penuh</div>
            </div>
          </div>

          <div className="bg-[#111625] border border-slate-800 rounded-2xl p-3 flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-white uppercase tracking-tight">KOPI GRATIS</div>
              <div className="text-[10px] text-slate-400 leading-tight">Sepuasnya / Free-flow</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.tiktok.com/@maxy.academy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-rose-400 to-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-all cursor-pointer"
          >
            <span>🎵</span>
            <span>Ikuti TikTok Kami</span>
          </a>

          <button
            onClick={onClose}
            className="py-3 px-5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
