import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Settings, ExternalLink } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  activeView: 'landing' | 'admin';
  setActiveView: (v: 'landing' | 'admin') => void;
  onOpenGiveaway: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  activeView,
  setActiveView,
}) => {
  const t = translations[lang];

  const handleScrollToHero = () => {
    if (activeView !== 'landing') {
      setActiveView('landing');
      setTimeout(() => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPricing = () => {
    if (activeView !== 'landing') {
      setActiveView('landing');
      setTimeout(() => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToFaq = () => {
    if (activeView !== 'landing') {
      setActiveView('landing');
      setTimeout(() => {
        document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveView('landing')}>
          <div className="w-10 h-10 rounded-xl bg-[#ffb034] p-0.5 flex items-center justify-center shadow-md shadow-[#ffb034]/20">
            <div className="w-full h-full bg-[#ffb034] rounded-[10px] flex items-center justify-center text-slate-900">
              <Sparkles className="w-5 h-5 text-slate-900" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-slate-900">
                {t.navTitle}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#ffb034]/20 border border-[#ffb034]/40 text-slate-900 font-bold">
                {t.byMaxi}
              </span>
            </div>
          </div>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <button
            onClick={handleScrollToHero}
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            {t.features}
          </button>
          <button
            onClick={handleScrollToPricing}
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            {t.pricing}
          </button>
          <button
            onClick={handleScrollToFaq}
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            FAQ
          </button>
          <a
            href="https://www.tiktok.com/@maxy.academy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-[#d98200] transition-colors flex items-center gap-1"
          >
            <span>TikTok</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#d98200]" />
          </a>
          <a
            href="https://ai.maxy.academy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-[#d98200] transition-colors flex items-center gap-1"
          >
            <span>ai.maxy.academy</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#d98200]" />
          </a>
        </div>

        {/* Right CTA Tools */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              onClick={() => setLang('id')}
              className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                lang === 'id' ? 'bg-[#ffb034] text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                lang === 'en' ? 'bg-[#ffb034] text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
          </div>

          {/* External Link to TikTok */}
          <a
            href="https://www.tiktok.com/@maxy.academy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md bg-[#ffb034] text-slate-900 hover:bg-[#e59d2a]"
          >
            <span>TikTok @maxy.academy</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-900" />
          </a>

          <button
            onClick={() => setActiveView(activeView === 'admin' ? 'landing' : 'admin')}
            title={t.adminMode}
            className={`p-2 rounded-xl border text-xs font-medium transition-colors ${
              activeView === 'admin'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
            }`}
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
