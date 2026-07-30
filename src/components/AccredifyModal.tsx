import React from 'react';
import { Language, UserState } from '../types';
import { translations } from '../data/translations';
import { X, ShieldCheck, Download, Share2, Award, QrCode, CheckCircle2, Globe, ExternalLink } from 'lucide-react';

interface AccredifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  userState: UserState;
}

export const AccredifyModal: React.FC<AccredifyModalProps> = ({ isOpen, onClose, lang, userState }) => {
  const t = translations[lang];

  if (!isOpen) return null;

  const isTier2 = userState.tier === 'tier2';
  const certificateTitle = isTier2
    ? 'Certified Applied AI Specialist (CAAI™ Level 1)'
    : 'Certificate of Completion - AI Navigator';
  const jpCount = isTier2 ? 28 : 21;
  const accredifyHash = isTier2
    ? '0x8f92a4b82d3e1109a27c1f8801be9c4a52'
    : '0x3c711200fa923e1109a27c1f8801cc2b98';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-indigo-500/40 rounded-2xl max-w-xl w-full p-6 text-white shadow-2xl relative overflow-hidden">
        {/* Background Decorative Seals */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Verification Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-xl text-slate-950 shadow-lg shadow-cyan-500/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                Official Blockchain Verified
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 font-mono">
                <CheckCircle2 className="w-3 h-3" /> VERIFIED
              </span>
            </div>
            <h3 className="text-xl font-black text-white leading-tight">{t.certModalTitle}</h3>
          </div>
        </div>

        {/* Interactive Certificate Mockup Box */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/50 border-2 border-indigo-500/30 mb-6 relative shadow-inner">
          {/* Certificate Corner Stamped Seal */}
          <div className="absolute top-4 right-4 text-right">
            <div className="w-14 h-14 rounded-full border-2 border-amber-400/60 bg-amber-500/10 flex flex-col items-center justify-center p-1 text-center shadow-md">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-[9px] font-extrabold text-amber-300 uppercase leading-none mt-0.5">
                {jpCount} JP
              </span>
            </div>
          </div>

          <div className="text-xs text-indigo-300 font-mono tracking-widest uppercase mb-1">MAXY ACADEMY</div>
          <h4 className="text-lg font-black text-white mb-3 max-w-sm">{certificateTitle}</h4>

          <div className="space-y-1.5 text-xs text-slate-300 mb-6 font-sans">
            <div>
              <span className="text-slate-400">{t.certIssuedTo} </span>
              <strong className="text-cyan-300 font-semibold">{userState.name || 'Johan Participant'}</strong>
            </div>
            <div>
              <span className="text-slate-400">Program: </span>
              <span>AI Navigator Certified Applied AI (CAAI™ Level 1)</span>
            </div>
            <div>
              <span className="text-slate-400">Total Credits: </span>
              <span className="font-mono text-amber-300 font-bold">{jpCount} Jam Pelajaran (JP)</span>
            </div>
          </div>

          {/* QR Code & Hash Verification Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4 font-mono text-[11px]">
            <div className="space-y-1 flex-1">
              <div className="text-slate-400 flex items-center gap-1">
                <Globe className="w-3 h-3 text-[#ffb034]" />
                <span>Issuer: navigator.maxy.academy</span>
              </div>
              <div className="text-slate-400 truncate">
                <span>Hash: </span>
                <span className="text-[#ffb034]">{accredifyHash}</span>
              </div>
            </div>

            <div className="p-1.5 bg-white rounded-lg shrink-0">
              <QrCode className="w-10 h-10 text-slate-950" />
            </div>
          </div>
        </div>

        {/* Action Buttons: PDF & LinkedIn Share */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => alert('Mengunduh Sertifikat PDF Resmi (Simulasi)...')}
            className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-white flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>{t.downloadPdf}</span>
          </button>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white flex items-center justify-center gap-2 transition-colors shadow"
          >
            <Share2 className="w-4 h-4" />
            <span>{t.shareLinkedin}</span>
          </a>
        </div>

        <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
          <span>Official verification direct link:</span>
          <span className="text-cyan-400 flex items-center gap-0.5">
            navigator.maxy.academy/verify <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};
