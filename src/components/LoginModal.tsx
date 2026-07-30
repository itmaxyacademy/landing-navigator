import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, X, Mail, Lock, ArrowRight, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';

import { loginWithEmail, loginWithGoogle } from '../services/api';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onLoginSuccess: (userInfo?: { name: string; email: string }) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  lang,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('johan@student.maxy.academy');
  const [password, setPassword] = useState('••••••••');
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isLoadingEmail, setIsLoadingEmail] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const t = translations[lang];

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    setIsLoadingGoogle(true);
    setErrorMessage(null);
    const result = await loginWithGoogle('johan@student.maxy.academy', 'Johan (Mahasiswa MAXY)');
    setIsLoadingGoogle(false);

    if (result.success && result.data) {
      if (result.data.access_token) {
        localStorage.setItem('maxy_access_token', result.data.access_token);
      }
      if (result.data.refresh_token) {
        localStorage.setItem('maxy_refresh_token', result.data.refresh_token);
      }
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
        onLoginSuccess({
          name: result.data.user?.name || 'Johan (Mahasiswa MAXY)',
          email: result.data.user?.email || 'johan@student.maxy.academy',
        });
        onClose();
        if (window.location.hostname.includes('maxy.academy')) {
          window.location.href = '/app';
        }
      }, 900);
    } else {
      setErrorMessage(result.message || 'Gagal login via Google');
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingEmail(true);
    setErrorMessage(null);
    const result = await loginWithEmail(email, password);
    setIsLoadingEmail(false);

    if (result.success && result.data) {
      if (result.data.access_token) {
        localStorage.setItem('maxy_access_token', result.data.access_token);
      }
      if (result.data.refresh_token) {
        localStorage.setItem('maxy_refresh_token', result.data.refresh_token);
      }
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
        onLoginSuccess({
          name: result.data.user?.name || email.split('@')[0],
          email: result.data.user?.email || email,
        });
        onClose();
        if (window.location.hostname.includes('maxy.academy')) {
          window.location.href = '/app';
        }
      }, 900);
    } else {
      setErrorMessage(result.message || 'Gagal login. Periksa email & password.');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-8 text-slate-900 overflow-hidden z-10"
        >
          {/* Top Decorative Soft Warm Glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="text-center space-y-2 mb-6 pt-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#ffb034]/20 border border-[#ffb034]/40 text-slate-900 shadow-sm mx-auto mb-2">
              <Sparkles className="w-6 h-6 text-[#d98200]" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              {lang === 'id' ? 'Masuk ke AI Navigator' : 'Sign in to AI Navigator'}
            </h2>
            <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed font-medium">
              {lang === 'id'
                ? 'Akses portal belajar 28 hari, materi mentoring, dan sertifikat Accredify MAXY Academy'
                : 'Access 28-day learning portal, mentoring materials, and Accredify certificates'}
            </p>
          </div>

          {loginSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-3"
            >
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                {lang === 'id' ? 'Berhasil Masuk!' : 'Login Successful!'}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'id' ? 'Mengarahkan ke dashboard belajar...' : 'Redirecting to learning portal...'}
              </p>
            </motion.div>
          ) : (
            <div className="space-y-5">
              {/* Google Sign-In Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoadingGoogle || isLoadingEmail}
                className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-extrabold text-sm flex items-center justify-center gap-3 transition-all shadow-sm hover:border-slate-400 focus:outline-none disabled:opacity-60"
              >
                {isLoadingGoogle ? (
                  <div className="flex items-center gap-2 text-slate-600 text-xs">
                    <span className="w-4 h-4 border-2 border-slate-400 border-t-slate-800 rounded-full animate-spin" />
                    <span>{lang === 'id' ? 'Menghubungkan Google...' : 'Connecting Google...'}</span>
                  </div>
                ) : (
                  <>
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>{lang === 'id' ? 'Lanjutkan dengan Google' : 'Continue with Google'}</span>
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center">
                <div className="w-full border-t border-slate-200" />
                <span className="absolute bg-white px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {lang === 'id' ? 'atau email student' : 'or student email'}
                </span>
              </div>

              {/* Email Form */}
              <form onSubmit={handleEmailLogin} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Student MAXY
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. student@maxy.academy"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#d98200] focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-slate-700">Password</label>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-[11px] font-bold text-[#d98200] hover:underline"
                    >
                      {lang === 'id' ? 'Lupa Password?' : 'Forgot Password?'}
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#d98200] focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoadingGoogle || isLoadingEmail}
                  className="w-full py-3 px-4 rounded-xl bg-[#ffb034] hover:bg-[#e59d2a] text-slate-900 font-black text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-[#ffb034]/20 hover:shadow-lg disabled:opacity-60"
                >
                  {isLoadingEmail ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                      <span>{lang === 'id' ? 'Memproses...' : 'Processing...'}</span>
                    </div>
                  ) : (
                    <>
                      <span>{lang === 'id' ? 'Masuk ke Platform' : 'Sign In to Platform'}</span>
                      <ArrowRight className="w-4 h-4 text-slate-900" />
                    </>
                  )}
                </button>
              </form>

              {/* Demo Quick Account Option */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200/80"
                >
                  <UserCheck className="w-3.5 h-3.5 text-[#d98200]" />
                  <span>
                    {lang === 'id'
                      ? 'Demo Quick Login (Johan - MAXY Student)'
                      : 'Demo Quick Login (Johan - MAXY Student)'}
                  </span>
                </button>
              </div>

              {/* Security Footer Note */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Terhubung dengan SSO MAXY Academy & Accredify</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
