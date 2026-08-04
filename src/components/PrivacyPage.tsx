import React from 'react';
import { Shield, Lock, Eye, FileText, ArrowLeft, CheckCircle2, Server, Database } from 'lucide-react';
import { Language } from '../types';

interface PrivacyPageProps {
  lang: Language;
  onBack: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ lang, onBack }) => {
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
            <span className="text-xs font-semibold text-slate-400">MAXY Academy • Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Title Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>{isId ? 'Perlindungan Data Pribadi (UU PDP No. 27/2022)' : 'PDP Law Compliant'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            {isId ? 'Kebijakan Privasi' : 'Privacy Policy'}
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {isId
              ? 'Terakhir diperbarui: 4 Agustus 2026. Komitmen MAXY Academy dalam menjaga kerahasiaan dan keamanan data pribadi Anda.'
              : 'Last updated: August 4, 2026. MAXY Academy’s commitment to protecting your personal data privacy and security.'}
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-sm text-slate-300 text-sm leading-relaxed shadow-xl">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <Database className="w-5 h-5 text-emerald-400" />
              <span>1. {isId ? 'Data Pribadi Yang Kami Kumpulkan' : 'Personal Data We Collect'}</span>
            </h2>
            <p>
              {isId
                ? 'Untuk memberikan pengalaman pembelajaran terbaik di AI Navigator, MAXY Academy mengumpulkan informasi pribadi berupa:'
                : 'To provide the best learning experience in AI Navigator, MAXY Academy collects the following personal details:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <strong className="text-white block">{isId ? 'Identitas Pengguna' : 'User Identity'}</strong>
                  <span className="text-slate-400">{isId ? 'Nama Lengkap, Alamat Email, Nomor Telepon (WhatsApp).' : 'Full Name, Email Address, Phone Number (WhatsApp).'}</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <strong className="text-white block">{isId ? 'Latar Belakang' : 'Background Information'}</strong>
                  <span className="text-slate-400">{isId ? 'Asal Instansi, Perusahaan, atau Universitas/Sekolah.' : 'Institution, Company, or University/School Name.'}</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <strong className="text-white block">{isId ? 'Aktivitas Belajar' : 'Learning Activity'}</strong>
                  <span className="text-slate-400">{isId ? 'Progress Modul, Skor Kuis, XP, dan Capstone Project.' : 'Module Progress, Quiz Scores, XP, and Capstone Submissions.'}</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <strong className="text-white block">{isId ? 'Informasi Autentikasi' : 'Authentication Data'}</strong>
                  <span className="text-slate-400">{isId ? 'Akun Google OAuth (Email & Nama Profil) jika memilih login Google.' : 'Google OAuth profile when signing in via Google.'}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <Eye className="w-5 h-5 text-emerald-400" />
              <span>2. {isId ? 'Tujuan Penggunaan Data' : 'Purpose of Data Collection'}</span>
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-xs sm:text-sm">
              <li>{isId ? 'Menyediakan dan mengelola akses akun Anda ke Platform AI Navigator.' : 'Providing and managing your access to the AI Navigator Platform.'}</li>
              <li>{isId ? 'Menyimpan progress pembelajaran mandiri (Self-Paced) dan skor kuis secara otomatis.' : 'Auto-saving self-paced module progress and quiz scores.'}</li>
              <li>{isId ? 'Menerbitkan Sertifikat Resmi CAAI™ Level 1 dan Certificate of Completion.' : 'Issuing official CAAI™ Level 1 Certificates and Certificates of Completion.'}</li>
              <li>{isId ? 'Mengirimkan notifikasi sesi live mentoring, reminder kelas, atau instruksi beasiswa TikTok.' : 'Sending notifications for live mentoring sessions, class reminders, or TikTok scholarship instructions.'}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <Lock className="w-5 h-5 text-emerald-400" />
              <span>3. {isId ? 'Keamanan & Keamanan Data (SSL & Enkripsi)' : 'Data Security & Encryption'}</span>
            </h2>
            <p>
              {isId
                ? 'Kami menerapkan protokol enkripsi TLS/SSL modern dan penyimpanan basis data terenkripsi untuk melindungi data pribadi Anda dari akses yang tidak sah, pengungkapan, atau pengubahan tanpa izin.'
                : 'We implement modern TLS/SSL encryption protocols and encrypted database storage to safeguard your personal data from unauthorized access or disclosure.'}
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <Server className="w-5 h-5 text-emerald-400" />
              <span>4. {isId ? 'Pembagian Data Kepada Pihak Ketiga' : 'Third-Party Data Sharing'}</span>
            </h2>
            <p>
              {isId
                ? 'MAXY Academy tidak pernah menjual data pribadi Anda kepada pihak ketiga manapun. Data hanya dapat dibagikan secara terbatas untuk kepentingan verifikasi sertifikat resmi (seperti platform Accredify / LinkedIn Badges) atau jika diwajibkan oleh peraturan hukum yang berlaku di Indonesia.'
                : 'MAXY Academy never sells your personal data to third parties. Data may only be shared strictly for official certificate verification (such as Accredify / LinkedIn Badges) or when mandated by Indonesian law.'}
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <FileText className="w-5 h-5 text-emerald-400" />
              <span>5. {isId ? 'Hak Pengguna (UU Perlindungan Data Pribadi)' : 'Your Rights Under PDP Law'}</span>
            </h2>
            <p>
              {isId
                ? 'Sesuai UU PDP No. 27 Tahun 2022, Pengguna berhak memperbarui, mengoreksi, atau meminta penghapusan akun beserta data pribadi dari sistem kami dengan menghubungi tim layanan pelanggan MAXY Academy.'
                : 'In accordance with PDP Law No. 27 of 2022, users have the right to request updates, corrections, or deletion of their personal data by contacting MAXY Academy support.'}
            </p>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
              <div><strong>Email Support:</strong> privacy@maxy.academy / help@maxy.academy</div>
              <div><strong>Alamat Kantor:</strong> MAXY Academy Indonesia</div>
            </div>
          </section>
        </div>

        {/* Footer Back Button */}
        <div className="mt-10 text-center">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            {isId ? 'Saya Mengerti & Kembali ke Beranda' : 'I Understand & Return Home'}
          </button>
        </div>
      </main>
    </div>
  );
};
