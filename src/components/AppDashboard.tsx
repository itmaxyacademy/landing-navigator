import React, { useState } from 'react';
import { Language, UserState, CourseModule, UserTier } from '../types';
import { translations } from '../data/translations';
import { COURSE_MODULES } from '../data/courseData';
import {
  BookOpen,
  CheckCircle2,
  Lock,
  Play,
  Award,
  Sparkles,
  HelpCircle,
  FileUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  ExternalLink,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';

interface AppDashboardProps {
  lang: Language;
  userState: UserState;
  setUserState: React.Dispatch<React.SetStateAction<UserState>>;
  onOpenCheckout: (tier: 'tier1' | 'tier2') => void;
  onOpenCertificate: () => void;
}

export const AppDashboard: React.FC<AppDashboardProps> = ({
  lang,
  userState,
  setUserState,
  onOpenCheckout,
  onOpenCertificate,
}) => {
  const [selectedDayNum, setSelectedDayNum] = useState<number>(11); // Default to day 11 to showcase "11/28" status
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [projectTitleInput, setProjectTitleInput] = useState('');
  const [projectUrlInput, setProjectUrlInput] = useState('');

  const t = translations[lang];

  const currentModule: CourseModule =
    COURSE_MODULES.find((m) => m.day === selectedDayNum) || COURSE_MODULES[0];

  const totalCompleted = userState.completedModules.length;
  const progressPercent = Math.round((totalCompleted / 28) * 100);

  const isTier2Locked = currentModule.tierRequired === 'tier2' && userState.tier !== 'tier2';

  const toggleModuleComplete = (dayNum: number) => {
    setUserState((prev) => {
      const alreadyDone = prev.completedModules.includes(dayNum);
      const updated = alreadyDone
        ? prev.completedModules.filter((d) => d !== dayNum)
        : [...prev.completedModules, dayNum];
      return {
        ...prev,
        completedModules: updated,
      };
    });
  };

  const handleQuizSubmit = () => {
    if (!currentModule.quiz.length) return;
    let correctCount = 0;
    currentModule.quiz.forEach((q) => {
      if (selectedQuizAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });
    const scorePct = Math.round((correctCount / currentModule.quiz.length) * 100);

    setUserState((prev) => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [selectedDayNum]: scorePct,
      },
    }));
    setQuizSubmitted(true);

    if (scorePct >= 70 && !userState.completedModules.includes(selectedDayNum)) {
      toggleModuleComplete(selectedDayNum);
    }
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectTitleInput || !projectUrlInput) return;

    setUserState((prev) => ({
      ...prev,
      projectSubmissions: {
        ...prev.projectSubmissions,
        [selectedDayNum]: {
          day: selectedDayNum,
          projectTitle: projectTitleInput,
          repoOrDocUrl: projectUrlInput,
          submissionDate: new Date().toISOString().split('T')[0],
          status: 'pending',
        },
      },
    }));
  };

  const currentSubmission = userState.projectSubmissions[selectedDayNum];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Student Banner & Progress Indicator */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                {t.appHeaderTitle}
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono font-bold">
                {userState.tier === 'free'
                  ? 'FREE ACCESS'
                  : userState.tier === 'tier1'
                  ? 'TIER 1 (21 JP Self-Paced)'
                  : 'TIER 2 (28 JP CAAI™ Mentoring)'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              {lang === 'id' ? 'Progres Pelatihan:' : 'Course Progress:'}{' '}
              <span className="text-blue-600 font-extrabold">{totalCompleted}/28</span>{' '}
              {lang === 'id' ? 'Modul Selesai' : 'Modules Completed'}
            </h1>

            {/* Visual Progress Bar */}
            <div className="w-full max-w-md bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200 p-0.5">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Upgrade Banner or Certificate Claim Action */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {userState.tier !== 'tier2' ? (
              <button
                onClick={() => onOpenCheckout('tier2')}
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>{t.upgradeBtn}</span>
              </button>
            ) : (
              <button
                onClick={onOpenCertificate}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
              >
                <Award className="w-4 h-4" />
                <span>Lihat Sertifikat Accredify (28 JP)</span>
              </button>
            )}

            <a
              href="https://ai.maxy.academy"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 border border-slate-200 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>ai.maxy.academy Mentoring</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
            </a>
          </div>
        </div>

        {/* Upgrade Callout if User is Free / Tier 1 */}
        {userState.tier !== 'tier2' && (
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-slate-900 text-xs flex items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
              <span className="font-medium">{t.appUpgradeBanner}</span>
            </div>
            <button
              onClick={() => onOpenCheckout('tier2')}
              className="font-bold text-blue-600 hover:underline shrink-0"
            >
              Dapatkan Akses Full Mentoring
            </button>
          </div>
        )}

        {/* Main Grid Layout: Left Day Selector, Right Module Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: 28 Days Navigator List */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-5 space-y-3 h-[720px] flex flex-col shadow-sm">
            <div className="p-2 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Roadmap 28 Hari Pelatihan
              </span>
              <span className="text-[11px] font-mono text-blue-600 font-bold">28 JP Total</span>
            </div>

            <div className="flex-1 overflow-y-auto pr-1 space-y-2 custom-scrollbar">
              {COURSE_MODULES.map((mod) => {
                const isDone = userState.completedModules.includes(mod.day);
                const isSelected = selectedDayNum === mod.day;
                const isLocked = mod.tierRequired === 'tier2' && userState.tier !== 'tier2';

                return (
                  <div
                    key={mod.day}
                    onClick={() => {
                      setSelectedDayNum(mod.day);
                      setQuizSubmitted(false);
                      setSelectedQuizAnswers({});
                    }}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-blue-50 border-blue-300 text-slate-900 shadow-sm'
                        : isDone
                        ? 'bg-slate-50 border-emerald-300 text-slate-800 hover:bg-slate-100'
                        : isLocked
                        ? 'bg-slate-50 border-slate-200 text-slate-400'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <div
                        className={`w-7 h-7 rounded-xl text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                          isDone
                            ? 'bg-emerald-600 text-white'
                            : isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {mod.day}
                      </div>

                      <div className="truncate">
                        <p className="text-xs font-bold truncate text-slate-900">{mod.title[lang]}</p>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5">
                          <span>{mod.durationJP} JP</span>
                          {mod.isMentoring && (
                            <span className="text-purple-600 font-semibold">• Mentoring</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5">
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : isLocked ? (
                        <Lock className="w-4 h-4 text-amber-500" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Module Content Viewer */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Module Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                      HARI {currentModule.day} OF 28
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono font-medium">
                      {currentModule.category[lang]}
                    </span>
                    {currentModule.isMentoring && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-semibold">
                        Mentoring ai.maxy.academy
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {currentModule.title[lang]}
                  </h2>
                </div>

                <button
                  onClick={() => toggleModuleComplete(currentModule.day)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 ${
                    userState.completedModules.includes(currentModule.day)
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>
                    {userState.completedModules.includes(currentModule.day)
                      ? 'Modul Selesai'
                      : 'Tandai Selesai'}
                  </span>
                </button>
              </div>

              {/* Locked State if Tier 2 required but user is Tier 1/Free */}
              {isTier2Locked ? (
                <div className="p-8 text-center bg-amber-50/50 rounded-2xl border border-amber-200 space-y-4">
                  <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto border border-amber-200">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Modul Khusus Tier 2 Mentoring & Sertifikasi CAAI™
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Hari 22-28 mencakup sesi Live Mentoring 1-on-1 via ai.maxy.academy, bimbingan capstone project, dan penerbitan Sertifikat Resmi CAAI™ Level 1 (28 JP) terverifikasi Accredify.
                  </p>
                  <button
                    onClick={() => onOpenCheckout('tier2')}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition-all shadow-md shadow-blue-500/20"
                  >
                    Upgrade ke Tier 2 Sekarang
                  </button>
                </div>
              ) : (
                <>
                  {/* Summary / Reading Content Box */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-sm leading-relaxed space-y-2">
                    <div className="flex items-center gap-2 font-bold text-blue-600 text-xs uppercase tracking-wider">
                      <BookOpen className="w-4 h-4" />
                      Rangkuman Materi Modul (1 JP)
                    </div>
                    <p>{currentModule.summaryContent[lang]}</p>
                  </div>

                  {/* Learning Objectives List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Tujuan Pembelajaran:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {currentModule.learningObjectives[lang].map((obj, idx) => (
                        <li
                          key={idx}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Multiple Choice Quiz (Kuis Pilihan Ganda) */}
                  {currentModule.quiz.length > 0 && (
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-bold text-blue-600 text-xs uppercase tracking-wider">
                          <HelpCircle className="w-4 h-4 text-blue-600" />
                          Kuis Pilihan Ganda (Evaluasi Pemahaman)
                        </div>
                        {userState.quizScores[selectedDayNum] !== undefined && (
                          <span className="text-xs font-mono font-bold text-emerald-800 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full">
                            Skor: {userState.quizScores[selectedDayNum]}%
                          </span>
                        )}
                      </div>

                      {currentModule.quiz.map((q) => (
                        <div key={q.id} className="space-y-3 pt-2">
                          <p className="text-sm font-semibold text-slate-900">{q.question[lang]}</p>
                          <div className="space-y-2">
                            {q.options[lang].map((opt, optIdx) => {
                              const isSelected = selectedQuizAnswers[q.id] === optIdx;
                              const isCorrect = optIdx === q.correctIndex;
                              let btnClass = 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100';

                              if (quizSubmitted) {
                                if (isCorrect) {
                                  btnClass = 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold';
                                } else if (isSelected && !isCorrect) {
                                  btnClass = 'bg-rose-50 border-rose-300 text-rose-900';
                                }
                              } else if (isSelected) {
                                btnClass = 'bg-blue-50 border-blue-400 text-blue-900 font-semibold';
                              }

                              return (
                                <button
                                  key={optIdx}
                                  disabled={quizSubmitted}
                                  onClick={() =>
                                    setSelectedQuizAnswers({
                                      ...selectedQuizAnswers,
                                      [q.id]: optIdx,
                                    })
                                  }
                                  className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between ${btnClass}`}
                                >
                                  <span>{opt}</span>
                                  {quizSubmitted && isCorrect && (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {quizSubmitted && (
                            <p className="text-xs text-blue-900 bg-blue-50 p-3 rounded-xl border border-blue-200 mt-2">
                              💡 Penjelasan: {q.explanation[lang]}
                            </p>
                          )}
                        </div>
                      ))}

                      {!quizSubmitted ? (
                        <button
                          onClick={handleQuizSubmit}
                          disabled={Object.keys(selectedQuizAnswers).length === 0}
                          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold text-xs transition-all shadow-sm"
                        >
                          {t.submitQuiz}
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setQuizSubmitted(false);
                            setSelectedQuizAnswers({});
                          }}
                          className="py-2.5 px-4 rounded-xl bg-slate-200 text-slate-800 hover:bg-slate-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>{t.retakeQuiz}</span>
                        </button>
                      )}
                    </div>
                  )}

                  {/* Capstone Project Submission Portal */}
                  {currentModule.requiresProjectSubmission && (
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                      <div className="flex items-center gap-2 font-bold text-purple-700 text-xs uppercase tracking-wider">
                        <FileUp className="w-4 h-4 text-purple-600" />
                        {t.projectSubmissionTitle}
                      </div>

                      {currentSubmission ? (
                        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900">{currentSubmission.projectTitle}</span>
                            <span
                              className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                                currentSubmission.status === 'approved'
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                  : 'bg-amber-100 text-amber-800 border border-amber-200'
                              }`}
                            >
                              {currentSubmission.status === 'approved' ? 'DISETUJUI MENTOR' : 'TERKIRIM'}
                            </span>
                          </div>
                          <p className="text-slate-500 font-mono text-[11px]">
                            URL: {currentSubmission.repoOrDocUrl}
                          </p>

                          {currentSubmission.status === 'approved' ? (
                            <div className="pt-2">
                              <p className="text-emerald-800 font-medium mb-3">
                                {t.projectApprovedStatus}
                              </p>
                              <button
                                onClick={onOpenCertificate}
                                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-sm"
                              >
                                Terbitkan Sertifikat Accredify Sekarang
                              </button>
                            </div>
                          ) : (
                            <p className="text-amber-800 font-medium">{t.projectSubmittedStatus}</p>
                          )}
                        </div>
                      ) : (
                        <form onSubmit={handleProjectSubmit} className="space-y-3">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              {t.projectTitleInput}
                            </label>
                            <input
                              type="text"
                              value={projectTitleInput}
                              onChange={(e) => setProjectTitleInput(e.target.value)}
                              placeholder="e.g. AI Customer Support Bot with Gemini RAG"
                              className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              {t.projectUrlInput}
                            </label>
                            <input
                              type="text"
                              value={projectUrlInput}
                              onChange={(e) => setProjectUrlInput(e.target.value)}
                              placeholder="e.g. https://github.com/myusername/ai-navigator-capstone"
                              className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-sm"
                          >
                            {t.submitProjectBtn}
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
