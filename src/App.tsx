import React, { useState, useEffect } from 'react';
import { Language, UserState, UserTier } from './types';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { TikTokGiveawayModal } from './components/TikTokGiveawayModal';
import { LoginModal } from './components/LoginModal';
import { fetchAiNavigatorPackages, fetchUserProfile } from './services/api';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [cmsPackages, setCmsPackages] = useState<Record<string, { price: number; fake_price: number; name?: string }>>({});

  const [userState, setUserState] = useState<UserState>({
    name: 'Mahasiswa MAXY',
    email: 'student@maxy.academy',
    tier: 'free',
    completedModules: [],
    quizScores: {},
    projectSubmissions: {},
    claimedCoupons: [],
  });

  // Modal States
  const [isGiveawayOpen, setIsGiveawayOpen] = useState<boolean>(false);
  const [prefilledCoupon, setPrefilledCoupon] = useState<string>('');
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [pendingTier, setPendingTier] = useState<'free' | 'tier1' | 'tier2' | null>(null);
  const [pendingCoupon, setPendingCoupon] = useState<string>('');

  useEffect(() => {
    fetchAiNavigatorPackages().then((res) => {
      if (res.success && res.data) {
        setCmsPackages(res.data);
      }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    const token = tokenFromUrl || localStorage.getItem('maxy_access_token');

    if (tokenFromUrl) {
      localStorage.setItem('maxy_access_token', tokenFromUrl);
      // Bersihkan token dari URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Cek apakah ada pendingTier yang tersimpan sebelum Google OAuth redirect
    const savedTier = sessionStorage.getItem('pending_tier') as 'tier1' | 'tier2' | null;
    const savedCoupon = sessionStorage.getItem('pending_coupon') || '';

    if (token) {
      fetchUserProfile(token).then((res) => {
        if (res?.success && res?.data) {
          setIsLoggedIn(true);
          const sub = res.data.subscription;
          const user = res.data.user;
          const rawTier = sub?.active_tier || sub?.tier || (sub?.is_paid ? 'tier1' : 'free');
          const tier: UserTier = (rawTier === 'tier_2' || rawTier === 'tier2') ? 'tier2' : (rawTier === 'tier_1' || rawTier === 'tier1') ? 'tier1' : 'free';
          const paidTiers: UserTier[] = sub?.paid_tiers ? (sub.paid_tiers.map((t: string) => (t === 'tier_2' ? 'tier2' : t === 'tier_1' ? 'tier1' : t))) : (tier !== 'free' ? [tier] : []);
          const hasTier1 = Boolean(sub?.has_tier1 || paidTiers.includes('tier1'));
          const hasTier2 = Boolean(sub?.has_tier2 || paidTiers.includes('tier2'));

          setUserState((prev) => ({
            ...prev,
            name: user?.name || prev.name,
            email: user?.email || prev.email,
            tier,
            paidTiers,
            hasTier1,
            hasTier2,
          }));

          // Jika ada pending tier dari sebelum Google OAuth → langsung redirect
          if (savedTier && tokenFromUrl) {
            sessionStorage.removeItem('pending_tier');
            sessionStorage.removeItem('pending_coupon');
            const APP_URL_INIT = window.location.hostname.includes('localhost')
              ? window.location.origin
              : 'https://ainavigator.maxy.academy';
            const params: Record<string, string> = { upgrade: 'true', tier: savedTier };
            if (savedCoupon) params.voucher = savedCoupon;
            const query = new URLSearchParams(params).toString();
            window.location.href = `${APP_URL_INIT}/app?${query}`;
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('login') === 'true') {
      setIsLoginOpen(true);
    }
  }, []);

  const navigateToApp = () => {
    const targetUrl = window.location.hostname.includes('localhost')
      ? '/app'
      : 'https://ainavigator.maxy.academy/app';
    window.location.href = targetUrl;
  };

  const APP_URL = typeof window !== 'undefined' && window.location.hostname.includes('localhost')
    ? window.location.origin
    : 'https://ainavigator.maxy.academy';

  const redirectToApp = (path = '', params?: Record<string, string>) => {
    let url = `${APP_URL}${path}`;
    if (params) {
      const query = new URLSearchParams(params).toString();
      url += `?${query}`;
    }
    window.location.href = url;
  };

  const processCheckoutOrRedirect = (tier: 'tier1' | 'tier2', couponCode?: string) => {
    // Redirect ke ai-navigator dengan query params untuk langsung buka UpgradeModal
    const params: Record<string, string> = { upgrade: 'true', tier };
    if (couponCode) params.voucher = couponCode;
    redirectToApp('/app', params);
  };

  const handleOpenCheckout = (tier: 'free' | 'tier1' | 'tier2', couponCode?: string) => {
    if (tier === 'free') {
      // Free tier: langsung ke app
      redirectToApp('/app');
      return;
    }

    const token = localStorage.getItem('maxy_access_token');
    if (!isLoggedIn && !token) {
      // Simpan tier & coupon ke sessionStorage (survive Google OAuth redirect)
      sessionStorage.setItem('pending_tier', tier);
      if (couponCode) sessionStorage.setItem('pending_coupon', couponCode);
      else sessionStorage.removeItem('pending_coupon');
      setPendingTier(tier);
      if (couponCode) setPendingCoupon(couponCode);
      setIsLoginOpen(true);
      return;
    }

    // Sudah login → redirect ke ai-navigator UpgradeModal
    processCheckoutOrRedirect(tier, couponCode);
  };

  const handleSelectCouponFromGiveaway = (code: string) => {
    setPrefilledCoupon(code);
    if (code === 'BEASISWAMAXI') {
      handleOpenCheckout('tier1', code);
    } else {
      handleOpenCheckout('tier2', code);
    }
  };

  const handleLoginSuccess = async (userInfo?: { name: string; email: string }) => {
    setIsLoggedIn(true);
    if (userInfo) {
      setUserState((prev) => ({
        ...prev,
        name: userInfo.name,
        email: userInfo.email,
      }));
    }

    // Ambil pending dari state atau sessionStorage
    const targetTier = (pendingTier || sessionStorage.getItem('pending_tier')) as 'tier1' | 'tier2' | null;
    const targetCoupon = pendingCoupon || sessionStorage.getItem('pending_coupon') || '';

    // Bersihkan pending
    setPendingTier(null);
    setPendingCoupon('');
    sessionStorage.removeItem('pending_tier');
    sessionStorage.removeItem('pending_coupon');

    if (targetTier && targetTier !== 'free') {
      // Paid tier: redirect ke ai-navigator UpgradeModal
      processCheckoutOrRedirect(targetTier, targetCoupon);
    } else {
      // Free atau login manual dari Navbar → masuk ke app
      redirectToApp('/app');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white antialiased selection:bg-[#ffb034] selection:text-slate-950">
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenGiveaway={() => setIsGiveawayOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        isLoggedIn={isLoggedIn}
        userName={userState.name}
      />

      <main>
        <LandingPage
          lang={lang}
          packages={cmsPackages}
          onOpenCheckout={(tier) => handleOpenCheckout(tier)}
          onOpenGiveaway={() => setIsGiveawayOpen(true)}
        />
      </main>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        lang={lang}
        onLoginSuccess={handleLoginSuccess}
      />

      <TikTokGiveawayModal
        isOpen={isGiveawayOpen}
        onClose={() => setIsGiveawayOpen(false)}
        lang={lang}
        onSelectCoupon={handleSelectCouponFromGiveaway}
      />
    </div>
  );
}
