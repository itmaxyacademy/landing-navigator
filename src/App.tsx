import React, { useState, useEffect } from 'react';
import { Language, UserState, UserTier } from './types';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { TikTokGiveawayModal } from './components/TikTokGiveawayModal';
import { CheckoutModal } from './components/CheckoutModal';
import { LoginModal } from './components/LoginModal';
import { fetchAiNavigatorPackages, fetchUserProfile, checkoutPayment } from './services/api';

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
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutTier, setCheckoutTier] = useState<'tier1' | 'tier2'>('tier2');
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
    }

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

  const processCheckoutOrRedirect = (tier: 'tier1' | 'tier2', couponCode?: string) => {
    setCheckoutTier(tier);
    setPrefilledCoupon(couponCode || '');
    setIsCheckoutOpen(true);
  };

  const handleOpenCheckout = (tier: 'free' | 'tier1' | 'tier2', couponCode?: string) => {
    if (tier === 'free') {
      // Free tier: langsung ke app (akses free trial)
      navigateToApp();
      return;
    }

    const token = localStorage.getItem('maxy_access_token');
    if (!isLoggedIn && !token) {
      // Simpan tier & coupon yang dipilih, lalu buka login
      setPendingTier(tier);
      if (couponCode) {
        setPendingCoupon(couponCode);
      }
      setIsLoginOpen(true);
      return;
    }

    // Sudah login → langsung ke payment, BUKAN ke /app
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

  const handlePaymentSuccess = (_purchasedTier: UserTier) => {
    navigateToApp();
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

    if (pendingTier) {
      const targetTier = pendingTier;
      const targetCoupon = pendingCoupon;
      setPendingTier(null);
      setPendingCoupon('');

      if (targetTier === 'free') {
        // Free tier: masuk ke app setelah login
        navigateToApp();
      } else {
        // Paid tier: langsung ke halaman payment, BUKAN ke /app
        await processCheckoutOrRedirect(targetTier, targetCoupon);
      }
    }
    // Jika tidak ada pendingTier (login manual dari Navbar): tetap di landing page
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

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        lang={lang}
        packages={cmsPackages}
        selectedTier={checkoutTier}
        prefilledCoupon={prefilledCoupon}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
}
