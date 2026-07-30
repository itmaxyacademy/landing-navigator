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

    const token = localStorage.getItem('maxy_access_token');
    if (token) {
      fetchUserProfile(token).then((res) => {
        if (res?.success && res?.data) {
          setIsLoggedIn(true);
          const sub = res.data.subscription;
          const user = res.data.user;
          const rawTier = sub?.tier || (sub?.is_paid ? 'tier1' : 'free');
          setUserState((prev) => ({
            ...prev,
            name: user?.name || prev.name,
            email: user?.email || prev.email,
            tier: rawTier as UserTier,
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
    window.location.href = '/app';
  };

  const processCheckoutOrRedirect = async (tier: 'tier1' | 'tier2', couponCode?: string) => {
    // 1. Check user profile to verify current active tier status
    const token = localStorage.getItem('maxy_access_token');
    const profileRes = await fetchUserProfile(token || undefined);

    if (profileRes?.success && profileRes?.data?.subscription) {
      const sub = profileRes.data.subscription;
      const isPaid = sub?.is_paid === true || sub?.is_paid === 1 || sub?.is_paid === '1';
      const rawTier = sub?.tier || (isPaid ? 'tier1' : 'free');
      const currentTier = (rawTier === 'tier_2' || rawTier === 'tier2') ? 'tier2' : (rawTier === 'tier_1' || rawTier === 'tier1') ? 'tier1' : 'free';

      // User has access only if they have paid and own the target tier or higher
      const userHasAccess = isPaid && (currentTier === tier || (tier === 'tier1' && currentTier === 'tier2'));

      if (userHasAccess) {
        navigateToApp();
        return;
      }
    }

    // 2. If coupon is provided, open CheckoutModal for coupon discount preview
    if (couponCode) {
      setCheckoutTier(tier);
      setPrefilledCoupon(couponCode);
      setIsCheckoutOpen(true);
      return;
    }

    // 3. Otherwise, directly initiate Xendit payment checkout
    const pkg = tier === 'tier1' ? cmsPackages?.tier1 : cmsPackages?.tier2;
    const amount = pkg?.price ?? (tier === 'tier1' ? 49500 : 299500);
    const package_id = pkg?.id;

    const description = `Pembelian Paket ${tier === 'tier1' ? 'Tier 1' : 'Tier 2'} AI Navigator`;
    const res = await checkoutPayment({
      amount,
      package_id,
      description,
      redirect_url: `${window.location.origin}/app`,
    });

    const invoiceUrl =
      res?.data?.payment_url ||
      res?.data?.invoice_url ||
      res?.data?.data?.payment_url ||
      res?.data?.data?.invoice_url ||
      res?.payment_url ||
      res?.invoice_url;

    if (invoiceUrl) {
      window.location.href = invoiceUrl;
      return;
    }

    // Fallback to CheckoutModal if instant checkout fails
    setCheckoutTier(tier);
    setIsCheckoutOpen(true);
  };

  const handleOpenCheckout = (tier: 'free' | 'tier1' | 'tier2', couponCode?: string) => {
    if (tier === 'free') {
      navigateToApp();
      return;
    }

    const token = localStorage.getItem('maxy_access_token');
    if (!isLoggedIn && !token) {
      setPendingTier(tier);
      if (couponCode) {
        setPendingCoupon(couponCode);
      }
      setIsLoginOpen(true);
      return;
    }

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
        navigateToApp();
      } else {
        await processCheckoutOrRedirect(targetTier, targetCoupon);
      }
    } else {
      const profileRes = await fetchUserProfile();
      if (profileRes?.success && profileRes?.data?.subscription?.is_paid) {
        navigateToApp();
      }
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
