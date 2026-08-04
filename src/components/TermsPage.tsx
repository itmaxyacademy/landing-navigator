import React from 'react';
import { ShieldCheck, FileText, ArrowLeft, CheckCircle2, Lock, BookOpen } from 'lucide-react';
import { Language } from '../types';

interface TermsPageProps {
  lang: Language;
  onBack: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ lang, onBack }) => {
  const isId = lang === 'id';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#ffb034] selection:text-slate-950">
      {/* Top Header Navigation */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-700/60 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isId ? 'Kembali ke Beranda' : 'Back to Home'}</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-400">MAXY Academy • Official Terms</span>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Title Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#ffb034] text-xs font-bold mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>{isId ? 'Dokumen Legal Resmi' : 'Official Legal Document'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            {isId ? 'Syarat & Ketentuan Layanan' : 'Terms & Conditions of Service'}
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {isId
              ? 'Terakhir diperbarui: 4 Agustus 2026. Mohon baca syarat dan ketentuan penggunaan platform AI Navigator MAXY Academy dengan seksama.'
              : 'Last updated: August 4, 2026. Please read the terms of service for MAXY Academy AI Navigator carefully.'}
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-sm text-slate-300 text-sm leading-relaxed shadow-xl">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <ShieldCheck className="w-5 h-5 text-[#ffb034]" />
              <span>1. {isId ? 'Ketentuan Umum & Pendaftaran' : 'General Provisions & Registration'}</span>
            </h2>
            <p>
              {isId
                ? 'Dengan mendaftar, mengakses, atau menggunakan platform AI Navigator MAXY Academy (selanjutnya disebut "Platform"), Anda menyatakan setuju untuk terikat oleh Syarat dan Ketentuan ini. Pengguna wajib berusia minimal 17 tahun atau memiliki persetujuan orang tua/wali yang sah.'
                : 'By registering, accessing, or using the MAXY Academy AI Navigator platform, you agree to be bound by these Terms and Conditions. Users must be at least 17 years old or have legal parental/guardian consent.'}
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-xs sm:text-sm">
              <li>
                {isId
                  ? 'Pengguna wajib memberikan informasi pendaftaran yang akurat, meliputi Nama Lengkap, Alamat Email Aktif, Nomor Telepon (WhatsApp), dan Asal Instansi/Universitas.'
                  : 'Users must provide accurate registration details, including Full Name, Active Email, Phone Number, and Institution/University.'}
              </li>
              <li>
                {isId
                  ? 'Pengguna bertanggung jawab penuh atas kerahasiaan akun dan kata sandi milik pengguna.'
                  : 'Users are fully responsible for maintaining the confidentiality of their account credentials.'}
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <BookOpen className="w-5 h-5 text-[#ffb034]" />
              <span>2. {isId ? 'Hak Akses & Fitur Paket (Free Tier, Tier 1, Tier 2)' : 'Access Rights & Package Tiers'}</span>
            </h2>
            <p>
              {isId
                ? 'MAXXY Academy menawarkan skema akses bertingkat untuk pembelajaran AI Navigator:'
                : 'MAXY Academy offers tiered access levels for AI Navigator learning:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="font-bold text-xs text-slate-300 mb-1">Free Trial</div>
                <div className="text-xs text-slate-400">
                  {isId
                    ? 'Akses Uji Coba 3 Modul Pertama. Tidak terbatas oleh durasi hari.'
                    : 'Trial access to First 3 Modules. Not limited by day duration.'}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-amber-500/30">
                <div className="font-bold text-xs text-amber-400 mb-1">Tier 1: Self-Paced Basic</div>
                <div className="text-xs text-slate-400">
                  {isId
                    ? 'Akses 22 Modul Mandiri & Kuis + Certificate of Completion.'
                    : 'Access to 22 Self-Paced Modules & Quizzes + Certificate of Completion.'}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-amber-500/50">
                <div className="font-bold text-xs text-[#ffb034] mb-1">Tier 2: Full Mentoring</div>
                <div className="text-xs text-slate-400">
                  {isId
                    ? 'Akses 29 Modul Lengkap + Sesi Live Mentoring 7 Hari + Sertifikat Resmi CAAI™ Level 1.'
                    : 'Access to 29 Full Modules + 7 Days Live Mentoring + Official CAAI™ Level 1 Certificate.'}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <Lock className="w-5 h-5 text-[#ffb034]" />
              <span>3. {isId ? 'Hak Kekayaan Intelektual (HAKI)' : 'Intellectual Property Rights'}</span>
            </h2>
            <p>
              {isId
                ? 'Seluruh konten, materi pembelajaran, modul interaktif, simulator prompt, video, dan desain pada platform AI Navigator adalah hak milik intelektual eksklusif MAXY Academy. Pengguna dilarang keras menyalin, mendistribusikan ulang, atau menjual kembali materi tanpa izin tertulis.'
                : 'All content, learning materials, interactive modules, prompt simulators, videos, and design elements on AI Navigator are exclusive IP of MAXY Academy. Users are strictly prohibited from copying or reselling materials without written consent.'}
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-[#ffb034]" />
              <span>4. {isId ? 'Sertifikasi CAAI™ & Verifikasi Digital' : 'CAAI™ Certification & Verification'}</span>
            </h2>
            <p>
              {isId
                ? 'Sertifikat Resmi Certified Applied AI (CAAI™ Level 1) hanya diberikan kepada peserta Tier 2 yang telah menyelesaikan seluruh modul (29 Modul) serta mengunggah dan lulus evaluasi Capstone Project.'
                : 'Official Certified Applied AI (CAAI™ Level 1) certificates are only issued to Tier 2 participants who complete all 29 modules and successfully submit their Capstone Project.'}
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <span>5. {isId ? 'Hukum yang Berlaku & Kontak Support' : 'Applicable Law & Support Contact'}</span>
            </h2>
            <p>
              {isId
                ? 'Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Apabila Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, hubungi tim kami di:'
                : 'These Terms & Conditions are governed by the laws of the Republic of Indonesia. If you have questions, contact us at:'}
            </p>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
              <div><strong>Email Support:</strong> help@maxy.academy / info@maxy.academy</div>
              <div><strong>Website:</strong> https://maxy.academy</div>
            </div>
          </section>
        </div>

        {/* Footer Back Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-xl bg-[#ffb034] hover:bg-[#e59d2a] text-slate-950 font-black text-xs transition-all shadow-lg shadow-[#ffb034]/20 cursor-pointer"
          >
            {isId ? 'Saya Mengerti & Kembali ke Beranda' : 'I Understand & Return Home'}
          </button>
        </div>
      </main>
    </div>
  );
};
