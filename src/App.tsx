import React, { useState } from 'react';
import { Language, UserState, UserTier } from './types';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { AppDashboard } from './components/AppDashboard';
import { AdminPanel } from './components/AdminPanel';
import { TikTokGiveawayModal } from './components/TikTokGiveawayModal';
import { CheckoutModal } from './components/CheckoutModal';
import { AccredifyModal } from './components/AccredifyModal';
import { LoginModal } from './components/LoginModal';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [activeView, setActiveView] = useState<'landing' | 'dashboard' | 'admin'>('landing');

  // Initial user state with progress 11/28 modules completed as noted in meeting requirements
  const [userState, setUserState] = useState<UserState>({
    name: 'Johan (Mahasiswa MAXY)',
    email: 'johan@student.maxy.academy',
    tier: 'tier1', // Tier 1 initial state (or upgrade to tier 2 via modal)
    completedModules: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // 11/28 modules
    quizScores: {
      1: 100,
      2: 100,
      3: 100,
      4: 100,
      5: 100,
      6: 100,
      7: 100,
      8: 100,
      9: 100,
      10: 100,
      11: 100,
    },
    projectSubmissions: {},
    claimedCoupons: [],
  });

  // Modal States
  const [isGiveawayOpen, setIsGiveawayOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutTier, setCheckoutTier] = useState<'tier1' | 'tier2'>('tier2');
  const [prefilledCoupon, setPrefilledCoupon] = useState<string>('');
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [pendingTier, setPendingTier] = useState<'free' | 'tier1' | 'tier2' | null>(null);
  const [pendingCoupon, setPendingCoupon] = useState<string>('');

  const handleOpenCheckout = (tier: 'free' | 'tier1' | 'tier2', couponCode?: string) => {
    if (!isLoggedIn) {
      setPendingTier(tier);
      if (couponCode) {
        setPendingCoupon(couponCode);
      }
      setIsLoginOpen(true);
      return;
    }

    if (tier === 'free') {
      setActiveView('dashboard');
    } else {
      setCheckoutTier(tier);
      if (couponCode) {
        setPrefilledCoupon(couponCode);
      }
      setIsCheckoutOpen(true);
    }
  };

  const handleSelectCouponFromGiveaway = (code: string) => {
    setPrefilledCoupon(code);
    if (code === 'BEASISWAMAXI') {
      handleOpenCheckout('tier1', code);
    } else {
      handleOpenCheckout('tier2', code);
    }
  };

  const handlePaymentSuccess = (purchasedTier: UserTier) => {
    setUserState((prev) => ({
      ...prev,
      tier: purchasedTier,
    }));
    setActiveView('dashboard');
  };

  const handleLoginSuccess = (userInfo?: { name: string; email: string }) => {
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
        setActiveView('dashboard');
      } else {
        setCheckoutTier(targetTier);
        if (targetCoupon) {
          setPrefilledCoupon(targetCoupon);
        }
        setIsCheckoutOpen(true);
      }
    } else {
      setActiveView('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white antialiased selection:bg-[#ffb034] selection:text-slate-950">
      <Navbar
        lang={lang}
        setLang={setLang}
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenGiveaway={() => setIsGiveawayOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        isLoggedIn={isLoggedIn}
        userName={userState.name}
      />

      <main>
        {activeView === 'landing' && (
          <LandingPage
            lang={lang}
            onOpenCheckout={(tier) => handleOpenCheckout(tier)}
            onOpenGiveaway={() => setIsGiveawayOpen(true)}
          />
        )}

        {activeView === 'dashboard' && (
          <AppDashboard
            lang={lang}
            userState={userState}
            setUserState={setUserState}
            onOpenCheckout={(tier) => handleOpenCheckout(tier)}
            onOpenCertificate={() => setIsCertificateOpen(true)}
          />
        )}

        {activeView === 'admin' && (
          <AdminPanel lang={lang} userState={userState} setUserState={setUserState} />
        )}
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
        selectedTier={checkoutTier}
        prefilledCoupon={prefilledCoupon}
        onPaymentSuccess={handlePaymentSuccess}
      />

      <AccredifyModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        lang={lang}
        userState={userState}
      />
    </div>
  );
}
