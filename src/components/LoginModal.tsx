import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, X, Mail, Lock, ArrowRight, CheckCircle2, ShieldCheck, AlertCircle, User, Phone, Building2 } from 'lucide-react';

import { loginWithEmail, registerUser } from '../services/api';

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
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [agreedPrivacy, setAgreedPrivacy] = useState(true);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const t = translations[lang];

  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    setIsLoadingGoogle(true);
    setErrorMessage(null);
    const apiBase = (import.meta as unknown as { env?: { VITE_MAXY_API_URL?: string } }).env?.VITE_MAXY_API_URL || 'https://api.maxy.academy/api/v1';
    // Selalu redirect kembali ke landing page agar sessionStorage pendingTier bisa dibaca
    const targetRedirect = window.location.origin;
    window.location.href = `${apiBase}/auth/google/redirect?redirect_url=${encodeURIComponent(targetRedirect)}`;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingForm(true);
    setErrorMessage(null);

    let result;
    if (authMode === 'register') {
      result = await registerUser(name, email, password, phone, institution);
    } else {
      result = await loginWithEmail(email, password);
    }
    setIsLoadingForm(false);

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
          name: result.data.user?.name || (authMode === 'register' ? name : email.split('@')[0]),
          email: result.data.user?.email || email,
        });
        onClose();
        // Tidak redirect ke /app di sini — biarkan App.tsx yang handle berdasarkan pendingTier
      }, 900);
    } else {
      setErrorMessage(
        result.message ||
          result.error ||
          (authMode === 'register'
            ? 'Gagal mendaftar akun. Pastikan email belum terdaftar.'
            : 'Gagal login. Periksa email & password Anda.')
      );
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
          <div className="text-center space-y-2 mb-4 pt-2">
            <div className="inline-flex bg-slate-900 px-4 py-2 rounded-2xl border border-slate-800 shadow-sm items-center justify-center mx-auto mb-1">
              <img
                src="https://cms.maxy.academy/uploads/LogoMaxy.png"
                alt="Maxy Academy Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              {authMode === 'login'
                ? lang === 'id'
                  ? 'Masuk ke AI Navigator'
                  : 'Sign in to AI Navigator'
                : lang === 'id'
                ? 'Daftar Akun AI Navigator'
                : 'Create AI Navigator Account'}
            </h2>
            <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed font-medium">
              {lang === 'id'
                ? 'Terhubung dengan SSO MAXY Academy & Portal Belajar Interaktif'
                : 'Connected with SSO MAXY Academy & Interactive Learning Portal'}
            </p>
          </div>

          {/* Auth Mode Switcher Tabs */}
          <div className="flex bg-slate-100 p-1 rounded-xl mb-4 border border-slate-200">
            <button
              type="button"
              onClick={() => {
                setAuthMode('login');
                setErrorMessage(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                authMode === 'login'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {lang === 'id' ? 'Masuk (Login)' : 'Sign In'}
            </button>
            <button
              type="button"
              onClick={() => {
                setAuthMode('register');
                setErrorMessage(null);
              }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                authMode === 'register'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {lang === 'id' ? 'Daftar Akun' : 'Register'}
            </button>
          </div>

          {/* Error Alert Box */}
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5 font-medium"
            >
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="flex-1">{errorMessage}</div>
            </motion.div>
          )}

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
                {authMode === 'login'
                  ? lang === 'id'
                    ? 'Berhasil Masuk!'
                    : 'Login Successful!'
                  : lang === 'id'
                  ? 'Pendaftaran Berhasil!'
                  : 'Registration Successful!'}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'id'
                  ? 'Mengarahkan ke portal belajar /app...'
                  : 'Redirecting to learning portal /app...'}
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {/* Google Sign-In Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoadingGoogle || isLoadingForm}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-extrabold text-sm flex items-center justify-center gap-3 transition-all shadow-sm hover:border-slate-400 focus:outline-none disabled:opacity-60"
              >
                {isLoadingGoogle ? (
                  <div className="flex items-center gap-2 text-slate-600 text-xs">
                    <span className="w-4 h-4 border-2 border-slate-400 border-t-slate-800 rounded-full animate-spin" />
                    <span>{lang === 'id' ? 'Mengarahkan ke Google...' : 'Redirecting to Google...'}</span>
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
                  {lang === 'id' ? 'atau formulir' : 'or form'}
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-3">
                {authMode === 'register' && (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'id' ? 'Nama Lengkap' : 'Full Name'}
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={lang === 'id' ? 'Nama Lengkap Anda' : 'Your Full Name'}
                          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#d98200] focus:bg-white transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'id' ? 'Nomor WhatsApp / Telepon' : 'WhatsApp / Phone Number'}
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 08123456789"
                          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#d98200] focus:bg-white transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'id' ? 'Asal Instansi / Universitas / Perusahaan' : 'Institution / University / Company'}
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={institution}
                          onChange={(e) => setInstitution(e.target.value)}
                          placeholder={lang === 'id' ? 'e.g. Universitas Indonesia / Maxy Academy' : 'e.g. Harvard University / Acme Corp'}
                          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#d98200] focus:bg-white transition-all"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

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
                      className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#d98200] focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-slate-700">Password</label>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#d98200] focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                {authMode === 'register' && (
                  <div className="flex items-start gap-2 pt-1 pb-1">
                    <input
                      type="checkbox"
                      id="privacy_policy_agree"
                      checked={agreedPrivacy}
                      onChange={(e) => setAgreedPrivacy(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded text-[#d98200] focus:ring-[#d98200] border-slate-300 cursor-pointer"
                      required
                    />
                    <label htmlFor="privacy_policy_agree" className="text-[11px] text-slate-600 font-medium cursor-pointer leading-tight">
                      {lang === 'id' ? (
                        <>
                          Saya menyetujui <a href="https://maxy.academy/terms" target="_blank" rel="noreferrer" className="text-amber-600 underline font-bold hover:text-amber-700">Syarat & Ketentuan</a> dan <a href="https://maxy.academy/privacy" target="_blank" rel="noreferrer" className="text-amber-600 underline font-bold hover:text-amber-700">Kebijakan Privasi</a>.
                        </>
                      ) : (
                        <>
                          I agree to the <a href="https://maxy.academy/terms" target="_blank" rel="noreferrer" className="text-amber-600 underline font-bold hover:text-amber-700">Terms & Conditions</a> and <a href="https://maxy.academy/privacy" target="_blank" rel="noreferrer" className="text-amber-600 underline font-bold hover:text-amber-700">Privacy Policy</a>.
                        </>
                      )}
                    </label>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoadingGoogle || isLoadingForm || (authMode === 'register' && !agreedPrivacy)}
                  className="w-full py-3 px-4 rounded-xl bg-[#ffb034] hover:bg-[#e59d2a] text-slate-900 font-black text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-[#ffb034]/20 hover:shadow-lg disabled:opacity-60 cursor-pointer"
                >
                  {isLoadingForm ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                      <span>{lang === 'id' ? 'Memproses...' : 'Processing...'}</span>
                    </div>
                  ) : (
                    <>
                      <span>
                        {authMode === 'login'
                          ? lang === 'id'
                            ? 'Masuk ke Platform'
                            : 'Sign In to Platform'
                          : lang === 'id'
                          ? 'Daftar Akun Baru'
                          : 'Create Account'}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-900" />
                    </>
                  )}
                </button>
              </form>

              {/* Security Footer Note */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Terhubung dengan SSO MAXY Academy</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
