import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Settings, ExternalLink, LogIn, BookOpen, UserCheck } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  onOpenGiveaway: () => void;
  onOpenLogin: () => void;
  isLoggedIn?: boolean;
  userName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onOpenGiveaway,
  onOpenLogin,
  isLoggedIn = false,
  userName = 'Johan',
}) => {
  const t = translations[lang];

  const navigateToApp = () => {
    window.location.href = '/app';
  };

  const handleScrollToHero = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToFaq = () => {
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAiTools = () => {
    document.getElementById('ai-tools')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-sm">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleScrollToHero}>
          <div className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shadow-sm flex items-center justify-center">
            <img
              src="https://cms.maxy.academy/uploads/LogoMaxy.png"
              alt="Maxy Academy Logo"
              className="h-7 w-auto object-contain shrink-0"
            />
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
            onClick={handleScrollToAiTools}
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            AI Tools
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
          <button
            onClick={navigateToApp}
            className="text-slate-600 hover:text-[#d98200] transition-colors flex items-center gap-1 font-semibold"
          >
            <span>ai.maxy.academy</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#d98200]" />
          </button>
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

          {/* Modal Trigger for Login */}
          {isLoggedIn ? (
            <button
              onClick={navigateToApp}
              className="px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md bg-slate-900 text-white hover:bg-slate-800"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#ffb034]" />
              <span>Portal Belajar ({userName.split(' ')[0]})</span>
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              className="px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md bg-[#ffb034] text-slate-900 hover:bg-[#e59d2a]"
            >
              <LogIn className="w-3.5 h-3.5 text-slate-900" />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
