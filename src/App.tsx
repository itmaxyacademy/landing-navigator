import React, { useState } from 'react';
import { Language, UserState, UserTier } from './types';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { AdminPanel } from './components/AdminPanel';
import { TikTokGiveawayModal } from './components/TikTokGiveawayModal';
import { CheckoutModal } from './components/CheckoutModal';
import { AccredifyModal } from './components/AccredifyModal';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [activeView, setActiveView] = useState<'landing' | 'admin'>('landing');

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

  const handleOpenCheckout = (tier: 'tier1' | 'tier2', couponCode?: string) => {
    setCheckoutTier(tier);
    if (couponCode) {
      setPrefilledCoupon(couponCode);
    }
    setIsCheckoutOpen(true);
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
    window.open('https://navigator.maxy.academy', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white antialiased selection:bg-[#ffb034] selection:text-slate-950">
      <Navbar
        lang={lang}
        setLang={setLang}
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenGiveaway={() => setIsGiveawayOpen(true)}
      />

      <main>
        {activeView === 'landing' && (
          <LandingPage
            lang={lang}
            onOpenCheckout={(tier) => handleOpenCheckout(tier)}
            onOpenGiveaway={() => setIsGiveawayOpen(true)}
          />
        )}

        {activeView === 'admin' && (
          <AdminPanel lang={lang} userState={userState} setUserState={setUserState} />
        )}
      </main>

      {/* Modals */}
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
