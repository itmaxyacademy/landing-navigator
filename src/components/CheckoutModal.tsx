import React, { useState } from 'react';
import { Language, UserTier } from '../types';
import { translations } from '../data/translations';
import { CaaiTm } from './BadgesSection';
import { INITIAL_COUPONS } from '../data/courseData';
import { X, CheckCircle2, ShieldCheck, Tag, CreditCard, QrCode, ArrowRight, Sparkles } from 'lucide-react';

import { verifyVoucher, checkoutPayment } from '../services/api';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  packages?: Record<string, { price: number; fake_price: number; name?: string }>;
  selectedTier: 'tier1' | 'tier2';
  prefilledCoupon?: string;
  onPaymentSuccess: (purchasedTier: UserTier) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  lang,
  packages,
  selectedTier,
  prefilledCoupon = '',
  onPaymentSuccess,
}) => {
  const [couponInput, setCouponInput] = useState(prefilledCoupon);
  const [activeCoupon, setActiveCoupon] = useState<string | null>(prefilledCoupon || null);
  const [serverDiscountAmount, setServerDiscountAmount] = useState<number | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'qris' | 'gopay' | 'va'>('qris');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const t = translations[lang];

  if (!isOpen) return null;

  const basePrice = selectedTier === 'tier1'
    ? (packages?.tier1?.price ?? 49500)
    : (packages?.tier2?.price ?? 299500);

  // Calculate discount
  let discountAmount = 0;
  if (activeCoupon) {
    if (serverDiscountAmount !== null) {
      discountAmount = serverDiscountAmount;
    } else {
      const found = INITIAL_COUPONS.find((c) => c.code.toUpperCase() === activeCoupon.toUpperCase());
      if (found) {
        if (found.isFreePass && selectedTier === 'tier1') {
          discountAmount = basePrice;
        } else if (found.discountAmount) {
          discountAmount = found.discountAmount;
        }
      }
    }
  }

  const finalTotal = Math.max(0, basePrice - discountAmount);

  const handleApplyCoupon = async () => {
    setCouponError(null);
    const cleaned = couponInput.trim().toUpperCase();
    if (!cleaned) return;

    const res = await verifyVoucher(cleaned, basePrice);
    const serverData = res?.data || res;

    if (res && (res.success || res.valid) && res.data && res.data.valid) {
      setActiveCoupon(cleaned);
      const discount = typeof res.data.discount_amount === 'number' ? res.data.discount_amount : 0;
      setServerDiscountAmount(discount);
    } else if (serverData && serverData.valid === true) {
      setActiveCoupon(cleaned);
      const discount = typeof serverData.discount_amount === 'number' ? serverData.discount_amount : 0;
      setServerDiscountAmount(discount);
    } else {
      setActiveCoupon(null);
      setServerDiscountAmount(null);
      const errorMsg =
        res?.data?.message ||
        serverData?.message ||
        res?.message ||
        (lang === 'id'
          ? 'Kode voucher tidak valid atau sudah kadaluwarsa.'
          : 'Invalid or expired voucher code.');
      setCouponError(errorMsg);
    }
  };

  const handlePayNow = async () => {
    setIsProcessing(true);
    const pkg = selectedTier === 'tier1' ? packages?.tier1 : packages?.tier2;
    const res = await checkoutPayment({
      amount: finalTotal,
      package_id: pkg?.id,
      voucher_code: activeCoupon || undefined,
      description: `Pembelian Paket ${selectedTier === 'tier1' ? 'Tier 1' : 'Tier 2'} AI Navigator`,
      redirect_url: `${window.location.origin}/app`,
    });
    setIsProcessing(false);

    if (res.success && res.data?.invoice_url) {
      window.location.href = res.data.invoice_url;
      return;
    }

    setIsSuccess(true);
    setTimeout(() => {
      onPaymentSuccess(selectedTier);
      onClose();
      setIsSuccess(false);
      if (window.location.hostname.includes('maxy.academy')) {
        window.location.href = '/app';
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-indigo-500/30 rounded-2xl max-w-md w-full p-6 text-white shadow-2xl relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-[#ffb034] rounded-xl text-slate-900 shadow-md">
                <CreditCard className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{t.checkoutTitle}</h3>
                <p className="text-xs text-slate-400">navigator.maxy.academy / In-Site Payment</p>
              </div>
            </div>

            {/* Selected Tier Package Summary */}
            <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 mb-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#ffb034] uppercase tracking-wider flex items-center gap-1">
                  {selectedTier === 'tier1' ? 'Tier 1: Basic Self-Paced' : <>Tier 2: Full Mentoring & <CaaiTm /></>}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#ffb034]/20 text-[#ffb034] font-mono font-bold border border-[#ffb034]/40">
                  {selectedTier === 'tier1' ? '21 JP' : '28 JP'}
                </span>
              </div>
              <p className="text-xs text-slate-300 flex items-center gap-1 flex-wrap">
                {selectedTier === 'tier1'
                  ? '21 Hari Modul Self-Paced + Certificate of Completion'
                  : <>28 Hari (21 Hari Self-Paced + 7 Hari Live Mentoring ai.maxy.academy) + Sertifikat <CaaiTm /> Level 1</>}
              </p>
            </div>

            {/* Coupon Code Input */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                {t.couponCodeLabel}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder={lang === 'id' ? 'Masukkan kode voucher' : 'Enter voucher code'}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono uppercase text-white focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-lg border border-slate-600 transition-colors"
                >
                  {t.applyCoupon}
                </button>
              </div>
              {activeCoupon && (
                <div className="mt-2 text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Voucher `{activeCoupon}` berhasil diterapkan!
                </div>
              )}
              {couponError && <p className="mt-2 text-xs text-rose-400">{couponError}</p>}
            </div>

            {/* Payment Method Selector */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-slate-300 mb-2">{t.paymentMethod}</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('qris')}
                  className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'qris'
                      ? 'bg-indigo-600/20 border-indigo-500 text-white'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-cyan-400" />
                  <span>QRIS / GoPay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('gopay')}
                  className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'gopay'
                      ? 'bg-indigo-600/20 border-indigo-500 text-white'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span>ShopeePay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('va')}
                  className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'va'
                      ? 'bg-indigo-600/20 border-indigo-500 text-white'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-indigo-400" />
                  <span>Virtual Acc</span>
                </button>
              </div>
            </div>

            {/* Price Calculations */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs mb-6 font-mono">
              <div className="flex justify-between text-slate-400">
                <span>{t.subtotal}</span>
                <span>Rp {basePrice.toLocaleString('id-ID')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>{t.discount}</span>
                  <span>- Rp {discountAmount.toLocaleString('id-ID')}</span>
                </div>
              )}
              <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-sm text-white">
                <span>{t.totalPayment}</span>
                <span className="text-[#ffb034] font-black text-base">
                  Rp {finalTotal.toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayNow}
              disabled={isProcessing}
              className="w-full py-3 px-4 rounded-xl bg-[#ffb034] hover:bg-[#e59d2a] text-slate-900 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#ffb034]/20 disabled:opacity-50"
            >
              {isProcessing ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  Memproses Transaksi...
                </span>
              ) : (
                <>
                  <span>{t.payNowBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="mt-3 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Midtrans & MAXY Academy Payment Gateway Protected</span>
            </div>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-white">Pembayaran Berhasil!</h3>
            <p className="text-xs text-slate-300 max-w-xs mx-auto">
              Akses akun Anda telah ditingkatkan menjadi{' '}
              <strong className="text-cyan-400 font-semibold flex items-center justify-center gap-1">
                {selectedTier === 'tier1' ? 'Tier 1 (Self-Paced)' : <>Tier 2 (Full Mentoring & <CaaiTm />)</>}
              </strong>
              . Membuka Dashboard Pembelajaran...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
