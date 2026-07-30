import React, { useState } from 'react';
import { Language, UserState, ProjectSubmission } from '../types';
import { translations } from '../data/translations';
import { COURSE_MODULES } from '../data/courseData';
import {
  Settings,
  CheckCircle2,
  AlertCircle,
  FileText,
  Calendar,
  Layers,
  BarChart2,
  SlidersHorizontal,
} from 'lucide-react';

interface AdminPanelProps {
  lang: Language;
  userState: UserState;
  setUserState: React.Dispatch<React.SetStateAction<UserState>>;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ lang, userState, setUserState }) => {
  const [publishedDays, setPublishedDays] = useState<number[]>(
    Array.from({ length: 28 }, (_, i) => i + 1)
  );
  const [activeAdminTab, setActiveAdminTab] = useState<'settings' | 'launch' | 'submissions' | 'coupons'>('settings');

  const t = translations[lang];

  const toggleDayPublish = (dayNum: number) => {
    if (publishedDays.includes(dayNum)) {
      setPublishedDays(publishedDays.filter((d) => d !== dayNum));
    } else {
      setPublishedDays([...publishedDays, dayNum]);
    }
  };

  const handleApproveProject = (dayNum: number) => {
    setUserState((prev) => {
      const currentSub = prev.projectSubmissions[dayNum];
      if (!currentSub) return prev;
      return {
        ...prev,
        projectSubmissions: {
          ...prev.projectSubmissions,
          [dayNum]: {
            ...currentSub,
            status: 'approved',
            mentorFeedback: 'Project disetujui oleh Mentor MAXY! Sangat inovatif dan memenuhi kriteria CAAI™ Level 1.',
          },
        },
      };
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-[#ffb034]/20 text-[#d98200] rounded-2xl border border-[#ffb034]/40">
              <Settings className="w-8 h-8 text-[#d98200]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#d98200] uppercase tracking-wider">
                  Pengaturan & Panel Kontrol
                </span>
              </div>
              <h1 className="text-2xl font-black text-slate-900">{t.adminTitle}</h1>
              <p className="text-xs text-slate-500 mt-0.5">{t.adminSub}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveAdminTab('settings')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeAdminTab === 'settings'
                  ? 'bg-[#ffb034] text-slate-900 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Setting</span>
            </button>
            <button
              onClick={() => setActiveAdminTab('launch')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeAdminTab === 'launch'
                  ? 'bg-[#ffb034] text-slate-900 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Status Modul (1-28)</span>
            </button>
            <button
              onClick={() => setActiveAdminTab('submissions')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeAdminTab === 'submissions'
                  ? 'bg-[#ffb034] text-slate-900 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Submissions Capstone</span>
            </button>
          </div>
        </div>

        {/* Setting Tab (Empty Placeholder as requested) */}
        {activeAdminTab === 'settings' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-3 shadow-sm">
            <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto border border-slate-200">
              <Settings className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Pengaturan Kosong</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Fitur pengaturan sistem saat ini belum diatur / dikosongkan.
            </p>
          </div>
        )}

        {/* Admin Tab 1: Module Release Status */}
        {activeAdminTab === 'launch' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  {t.togglePublish}
                </h2>
                <p className="text-xs text-slate-500">
                  Status terbit modul pertemuan AI Navigator.
                </p>
              </div>
              <span className="text-xs font-mono px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full font-bold">
                {publishedDays.length} / 28 Modul Active
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {COURSE_MODULES.map((mod) => {
                const isPub = publishedDays.includes(mod.day);
                return (
                  <button
                    key={mod.day}
                    onClick={() => toggleDayPublish(mod.day)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      isPub
                        ? 'bg-blue-50 border-blue-300 text-slate-900'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold">Day {mod.day}</span>
                      {isPub ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </div>
                    <p className="text-[10px] truncate text-slate-600">{mod.title[lang]}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Admin Tab 2: Capstone Project Reviews */}
        {activeAdminTab === 'submissions' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-6 shadow-sm">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Review Capstone Project & Issuance CAAI™ Level 1
              </h2>
              <p className="text-xs text-slate-500">
                Pengumpulan wajib peserta Tier 2 untuk verifikasi penerbitan sertifikat resmi.
              </p>
            </div>

            {Object.keys(userState.projectSubmissions).length > 0 ? (
              <div className="space-y-4">
                {Object.entries(userState.projectSubmissions).map(([dayStr, subItem]) => {
                  const sub = subItem as ProjectSubmission;
                  return (
                    <div
                      key={dayStr}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-bold text-blue-600">Day {dayStr} Capstone</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                              sub.status === 'approved'
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                : 'bg-amber-100 text-amber-800 border border-amber-200'
                            }`}
                          >
                            {sub.status === 'approved' ? 'DISETUJUI' : 'MENUNGGU REVIEW'}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">{sub.projectTitle}</h4>
                        <p className="text-xs text-slate-500 font-mono mt-1">Repo URL: {sub.repoOrDocUrl}</p>
                        {sub.mentorFeedback && (
                          <p className="text-xs text-emerald-800 mt-2 bg-emerald-50 p-2 rounded-xl border border-emerald-200">
                            Feedback: {sub.mentorFeedback}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {sub.status !== 'approved' && (
                          <button
                            onClick={() => handleApproveProject(Number(dayStr))}
                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-sm"
                          >
                            Setujui Proyek
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-xs">
                Belum ada submission proyek baru dari peserta. Anda dapat memicu pengumpulan di Dashboard Siswa (/app).
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
