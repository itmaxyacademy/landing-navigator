import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Search, CheckCircle2, Zap, ArrowUpRight, Shield, Layers, Award } from 'lucide-react';

interface AIToolsSectionProps {
  lang: Language;
}

export interface AIToolItem {
  id: string;
  name: string;
  provider: string;
  category: 'LLM & Chat' | 'Art & Image' | 'Research & Productivity' | 'Video & Design';
  description: string;
  badge: string;
  brandColor: string; // Hex color for glowing background & accent
  glowColor: string;  // CSS glow value
  borderAccent: string;
  iconSvg: React.ReactNode;
  useCases: string[];
}

// Crisp SVGs for AI Tools
const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-emerald-400">
    <path d="M22.28 10.33a5.55 5.55 0 0 0-.49-4.73 5.68 5.68 0 0 0-6.27-2.6 5.55 5.55 0 0 0-4.33-1.95 5.68 5.68 0 0 0-5.43 3.97 5.55 5.55 0 0 0-3.8 2.76 5.68 5.68 0 0 0 .84 6.74 5.55 5.55 0 0 0 .49 4.73 5.68 5.68 0 0 0 6.27 2.6 5.55 5.55 0 0 0 4.33 1.95 5.68 5.68 0 0 0 5.43-3.97 5.55 5.55 0 0 0 3.8-2.76 5.68 5.68 0 0 0-.84-6.72zm-8.8 10.15a3.9 3.9 0 0 1-2.45-.87l.14-.08 4.08-2.36a.88.88 0 0 0 .44-.76v-5.75l1.72 1a.08.08 0 0 1 .05.06v4.75a3.92 3.92 0 0 1-3.98 4.01zm-7.66-3.41a3.87 3.87 0 0 1-.53-2.55l.14.09 4.08 2.35a.88.88 0 0 0 .88 0l4.98-2.88v2l-.05.04-4.11 2.37a3.92 3.92 0 0 1-5.39-1.42zm-1.12-8.39a3.87 3.87 0 0 1 1.93-1.68l-.01.16v4.71a.88.88 0 0 0 .44.76l4.98 2.88-1.73 1a.08.08 0 0 1-.07 0l-4.11-2.38a3.92 3.92 0 0 1-1.43-5.45zm11.33 2.82-4.98-2.88 1.73-1a.08.08 0 0 1 .07 0l4.11 2.38a3.92 3.92 0 0 1 1.43 5.45 3.87 3.87 0 0 1-1.93 1.68v-4.87a.88.88 0 0 0-.43-.76zm1.96-3.23a3.87 3.87 0 0 1 .53 2.55l-.14-.09-4.08-2.35a.88.88 0 0 0-.88 0l-4.98 2.88v-2l.05-.04 4.11-2.37a3.92 3.92 0 0 1 5.39 1.42zm-6.28-4.78a3.9 3.9 0 0 1 2.45.87l-.14.08-4.08 2.36a.88.88 0 0 0-.44.76v5.75l-1.72-1a.08.08 0 0 1-.05-.06v-4.75a3.92 3.92 0 0 1 3.98-4.01z" />
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-amber-500">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z" fill="url(#geminiGradPrem)" />
    <defs>
      <linearGradient id="geminiGradPrem" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="50%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
    </defs>
  </svg>
);

const PerplexityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-cyan-400">
    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.3L18 8v8l-6 3.7L6 16V8l6-3.7zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
  </svg>
);

const CopilotIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-sky-400">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
  </svg>
);

const MetaAIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-blue-500">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const StableDiffusionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-indigo-400 fill-current">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
  </svg>
);

const GoogleStitchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-violet-400 fill-current">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
  </svg>
);

const LeonardoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-rose-400 fill-current">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const GoogleFlowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-teal-400 fill-current">
    <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z" />
  </svg>
);

const GeminiNotebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-400 fill-current">
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-0.75L9 9V4zm9 16H6V4h1v9l2.5-1.88L12 13V4h6v16z" />
  </svg>
);

const DeepSeekIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500 fill-current">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
  </svg>
);

const OpenArtIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-pink-400 fill-current">
    <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 20c-.2.36.06.8.47.8h14.36c.41 0 .67-.44.47-.8l-.62-2.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9zm0 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
  </svg>
);

const CraiyonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-amber-400 fill-current">
    <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" />
  </svg>
);

export const aiToolsList: AIToolItem[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    provider: 'OpenAI (GPT-4o)',
    category: 'LLM & Chat',
    description: 'Prompt engineering tingkat lanjut, analisis dokumen, reasoning kompleks, & pembuatan agen kustom.',
    badge: 'LLM Standard',
    brandColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    borderAccent: 'hover:border-emerald-500/70',
    iconSvg: <ChatGPTIcon />,
    useCases: ['Advanced Prompting', 'Data Analysis', 'Custom GPTs'],
  },
  {
    id: 'claude',
    name: 'Claude 3.5',
    provider: 'Anthropic',
    category: 'LLM & Chat',
    description: 'Riset akademis konteks panjang, analisis koding presisi tinggi, & kepatuhan instruksi ketat.',
    badge: 'Top Code & Logic',
    brandColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    borderAccent: 'hover:border-amber-500/70',
    iconSvg: <ClaudeIcon />,
    useCases: ['Code Generation', 'Research Artifacts', 'Long Docs'],
  },
  {
    id: 'gemini',
    name: 'Gemini 1.5 Pro',
    provider: 'Google AI',
    category: 'LLM & Chat',
    description: 'Multimodal naskah, video, audio & integrasi ekosistem Google Workspace & Cloud.',
    badge: 'Google Core AI',
    brandColor: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    borderAccent: 'hover:border-blue-500/70',
    iconSvg: <GeminiIcon />,
    useCases: ['Video/Audio Context', 'Google Search Grounding', '1M Tokens'],
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    provider: 'Perplexity',
    category: 'Research & Productivity',
    description: 'Pencarian riset akademis dengan sitasi sumber otomatis langsung dari web terkini.',
    badge: 'Research Standard',
    brandColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    borderAccent: 'hover:border-cyan-500/70',
    iconSvg: <PerplexityIcon />,
    useCases: ['Academic Citations', 'Live Search', 'Deep Research'],
  },
  {
    id: 'copilot',
    name: 'Microsoft Copilot',
    provider: 'Microsoft',
    category: 'Research & Productivity',
    description: 'Otomatisasi dokumen Word, presentasi PowerPoint, formulir Excel, & asistensi koding.',
    badge: 'Workplace AI',
    brandColor: '#0ea5e9',
    glowColor: 'rgba(14, 165, 233, 0.25)',
    borderAccent: 'hover:border-sky-500/70',
    iconSvg: <CopilotIcon />,
    useCases: ['Word/PPT Auto', 'Excel Data Logic', 'Enterprise Security'],
  },
  {
    id: 'meta-ai',
    name: 'Meta AI (Llama 3)',
    provider: 'Meta',
    category: 'LLM & Chat',
    description: 'Model open-weights Llama 3 untuk penulisan kreatif, percakapan natural, & arsitektur lokal.',
    badge: 'Open Weights',
    brandColor: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.25)',
    borderAccent: 'hover:border-blue-600/70',
    iconSvg: <MetaAIIcon />,
    useCases: ['Llama Architecture', 'Creative Content', 'Local Models'],
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    provider: 'Stability AI',
    category: 'Art & Image',
    description: 'Sintesis gambar fotorealistik, kontrol tata letak ControlNet, & fine-tuning visual.',
    badge: 'Pro Image Engine',
    brandColor: '#6366f1',
    glowColor: 'rgba(99, 102, 241, 0.25)',
    borderAccent: 'hover:border-indigo-500/70',
    iconSvg: <StableDiffusionIcon />,
    useCases: ['ControlNet Pose', 'Photorealism', 'LoRA Fine-tuning'],
  },
  {
    id: 'google-stitch',
    name: 'Google Stitch',
    provider: 'Google Labs',
    category: 'Video & Design',
    description: 'Prototyping UI/UX berbasis AI, penggabungan elemen desain otomatis, & layouting cepat.',
    badge: 'UI Prototyping',
    brandColor: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.25)',
    borderAccent: 'hover:border-violet-500/70',
    iconSvg: <GoogleStitchIcon />,
    useCases: ['UI Prototyping', 'Design Systems', 'Layout Automation'],
  },
  {
    id: 'leonardo',
    name: 'Leonardo AI',
    provider: 'Leonardo Studio',
    category: 'Art & Image',
    description: 'Aset visual game, grafis pemasaran profesional, & kanvas desain generatif interaktif.',
    badge: 'Marketing & Game Art',
    brandColor: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.25)',
    borderAccent: 'hover:border-rose-500/70',
    iconSvg: <LeonardoIcon />,
    useCases: ['Game Assets', 'Marketing Visuals', 'Prompt Guidance'],
  },
  {
    id: 'google-flow',
    name: 'Google Flow',
    provider: 'Google AI Labs',
    category: 'Video & Design',
    description: 'Otomatisasi alur kerja media dinamis, motion graphics AI, & pengolahan konten audio-visual.',
    badge: 'Media Automation',
    brandColor: '#14b8a6',
    glowColor: 'rgba(20, 184, 166, 0.25)',
    borderAccent: 'hover:border-teal-500/70',
    iconSvg: <GoogleFlowIcon />,
    useCases: ['Motion AI', 'Video Pipeline', 'Dynamic Media'],
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    provider: 'Google Labs',
    category: 'Research & Productivity',
    description: 'Gemini Notebook sintesis ratusan PDF riset, pemicu Audio Overview, & ringkasan kuliah.',
    badge: 'Academic Study AI',
    brandColor: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    borderAccent: 'hover:border-blue-500/70',
    iconSvg: <GeminiNotebookIcon />,
    useCases: ['Multi-PDF Synthesis', 'Audio Podcast Overview', 'Notes Q&A'],
  },
  {
    id: 'deepseek',
    name: 'DeepSeek R1',
    provider: 'DeepSeek AI',
    category: 'LLM & Chat',
    description: 'Model penalaran matematika & logika koding berkinerja tinggi dengan transparansi pemikiran.',
    badge: 'Logic & Reasoning',
    brandColor: '#1d4ed8',
    glowColor: 'rgba(29, 78, 216, 0.25)',
    borderAccent: 'hover:border-blue-700/70',
    iconSvg: <DeepSeekIcon />,
    useCases: ['Math Reasoning', 'Deep Code Logic', 'Chain of Thought'],
  },
  {
    id: 'openart',
    name: 'OpenArt',
    provider: 'OpenArt AI',
    category: 'Art & Image',
    description: 'Eksplorasi gaya seni generatif, perbandingan antar-model AI, & perbaikan kualitas gambar.',
    badge: 'Creative Art Studio',
    brandColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.25)',
    borderAccent: 'hover:border-pink-500/70',
    iconSvg: <OpenArtIcon />,
    useCases: ['Multi-Model Compare', 'Style Transfer', 'Upscaling'],
  },
  {
    id: 'craiyon',
    name: 'Craiyon',
    provider: 'Craiyon',
    category: 'Art & Image',
    description: 'Sketsa ide cepat, pemetaan visual konseptual, & pembuatan draf ilustrasi instan.',
    badge: 'Concept Sketching',
    brandColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    borderAccent: 'hover:border-amber-500/70',
    iconSvg: <CraiyonIcon />,
    useCases: ['Rapid Concepting', 'Wireframe Ideas', 'Free-form Art'],
  },
];

export const AIToolsSection: React.FC<AIToolsSectionProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'LLM & Chat', 'Research & Productivity', 'Art & Image', 'Video & Design'];

  const filteredTools = aiToolsList.filter((tool) => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="ai-tools" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 2xl:px-16 bg-slate-950 text-white overflow-hidden scroll-mt-20 border-t border-slate-800/80">
      {/* High Quality Dark Tech Abstract Background Image Overlay */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2000&auto=format&fit=crop"
          alt="AI Background Pattern"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
      </div>

      {/* Dynamic Animated Background Ambient Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [-60, 60, -60],
          y: [-25, 25, -25],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#ffb034]/25 via-amber-500/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-0"
      />
      <motion.div
        animate={{
          scale: [1.25, 1, 1.25],
          x: [50, -50, 50],
          y: [35, -35, 35],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-gradient-to-bl from-blue-600/25 via-indigo-500/20 to-transparent rounded-full blur-[130px] pointer-events-none -z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-gradient-to-t from-violet-600/25 to-transparent rounded-full blur-[120px] pointer-events-none -z-0"
      />

      {/* Cyber Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_80%,transparent_100%)] pointer-events-none -z-0" />

      {/* Floating Animated Particle Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 1400 - 700,
              y: Math.random() * 900,
              opacity: 0.15 + Math.random() * 0.45,
              scale: 0.5 + Math.random() * 0.9,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, (i % 2 === 0 ? 40 : -40), 0],
              opacity: [0.2, 0.85, 0.2],
            }}
            transition={{
              duration: 7 + (i % 5) * 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
            className="absolute left-1/2 top-1/4 w-2 h-2 rounded-full bg-[#ffb034] shadow-[0_0_15px_#ffb034]"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl 2xl:max-w-4xl mx-auto space-y-5"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-900/90 border border-[#ffb034]/60 text-[#ffb034] font-mono font-black text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,176,52,0.25)] backdrop-blur-md cursor-default"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-[#ffb034]" />
            </motion.div>
            <span>Ekosistem AI Terkemuka Dunia</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black text-white tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            AI Tools & Platforms Dioperasikan
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-medium max-w-2xl 2xl:max-w-3xl mx-auto">
            Program <strong className="text-[#ffb034] font-black">CAAI™</strong> melatih Anda menguasai kombinasi ekosistem AI terpopuler dunia untuk studi akademis, riset berakurasi tinggi, pembuatan materi visual, hingga otomatisasi tugas harian.
          </p>
        </motion.div>

        {/* Filter Tabs & Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl 2xl:max-w-6xl mx-auto bg-slate-900/90 p-3 rounded-2xl border border-slate-800/90 backdrop-blur-xl shadow-2xl relative"
        >
          {/* Animated Category Pills with Framer Motion layoutId */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors relative z-10 ${
                    isActive ? 'text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#ffb034] rounded-xl shadow-lg -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat === 'All' ? 'Semua Tools' : cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari tool AI (contoh: ChatGPT, Claude)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[#ffb034] focus:ring-1 focus:ring-[#ffb034] transition-all"
            />
          </div>
        </motion.div>

        {/* Tools Premium Cards Grid with Motion Physics — Optimized for Fullscreen (up to 5 cols on 2xl) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-7xl 2xl:max-w-[1536px] mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool, idx) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.88, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.035,
                  layout: { duration: 0.3, ease: 'easeOut' },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                  transition: { type: 'spring', stiffness: 350, damping: 22 },
                }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-2xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden group ${tool.borderAccent}`}
              >
                {/* Background Brand Glow Effect on Hover */}
                <motion.div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: tool.brandColor }}
                />

                {/* Shimmer line effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.06),transparent)]" />

                {/* Top Row: Icon + Badge */}
                <div className="flex items-start justify-between gap-3 relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 shadow-inner flex items-center justify-center shrink-0 transition-shadow duration-300"
                    style={{ boxShadow: `0 0 20px ${tool.glowColor}` }}
                  >
                    {tool.iconSvg}
                  </motion.div>

                  <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700 uppercase tracking-wider shrink-0 shadow-sm">
                    {tool.badge}
                  </span>
                </div>

                {/* Name & Provider */}
                <div className="space-y-1 relative z-10 flex-1">
                  <h3 className="text-lg font-black text-white group-hover:text-[#ffb034] transition-colors flex items-center justify-between">
                    <span>{tool.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-[#ffb034] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <span className="text-xs font-mono font-semibold text-slate-400 block">
                    {tool.provider}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed pt-2 font-normal">
                    {tool.description}
                  </p>
                </div>

                {/* Competency Pills */}
                <div className="pt-3 border-t border-slate-800/80 space-y-2.5 relative z-10">
                  <div className="flex flex-wrap gap-1">
                    {tool.useCases.map((uc, i) => (
                      <span key={i} className="text-[9.5px] font-medium px-2 py-0.5 rounded bg-slate-950/80 text-slate-400 border border-slate-800">
                        {uc}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10.5px] text-slate-400 font-medium pt-1">
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Kurikulum CAAI™
                    </span>
                    <span className="font-mono text-[9.5px] text-slate-500">{tool.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Premium Feature Banner with Motion Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-2 border-[#ffb034]/40 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Pulsing Glow Effect */}
          <motion.div
            animate={{ scale: [1, 1.35, 1], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#ffb034]/20 rounded-full blur-3xl pointer-events-none"
          />

          <div className="space-y-2 text-center md:text-left relative z-10 max-w-2xl 2xl:max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold text-[#ffb034] uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#ffb034]" />
              <span>Praktik Studio Terbimbing 28 JP</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-black text-white tracking-tight">
              Kuasai Kombinasi AI Tools Ini Tanpa Perlu Langganan Mahal
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed">
              Anda akan diajarkan teknik efisiensi penggunaan API, alternatif open-source, serta studi kasus prompt engineering langsung pada skenario akademik & profesional.
            </p>
          </div>

          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="relative z-10 px-8 py-4 rounded-xl bg-[#ffb034] hover:bg-[#e59d2a] text-slate-950 font-black text-xs sm:text-sm lg:text-base shrink-0 transition-all shadow-xl shadow-[#ffb034]/20"
          >
            Pilih Paket Belajar Sekarang
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
