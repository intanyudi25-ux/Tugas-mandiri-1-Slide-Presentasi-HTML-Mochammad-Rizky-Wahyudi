import React, { useState } from 'react';
import { Bot, Sparkles, Copy, Check, MessageSquare, Terminal, AlertTriangle, Lightbulb } from 'lucide-react';
import { promptLogs } from '../data/slidesData';

export const PromptLogViewer: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<number>(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const current = promptLogs[selectedPrompt];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Dokumentasi Prompt AI &amp; Refleksi Akademik • Slide 6</span>
          </div>
          <h3 className="text-xl font-bold text-white">Refleksi Generative AI: Prompt Engineering &amp; Evaluasi Hasil</h3>
          <p className="text-xs text-slate-400 mt-1">
            Transparansi penuh atas instruksi AI (Gemini / ChatGPT / Claude) dan perbaikan manual (Human-in-the-Loop).
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {promptLogs.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedPrompt(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                selectedPrompt === idx
                  ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/20'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              {p.id}: {p.phase.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Prompt Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left: Prompt & Model Card */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-slate-200">{current.phase}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/20">
                  {current.aiTool}
                </span>
                <button
                  onClick={() => handleCopy(current.promptText, current.id)}
                  className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 px-2"
                  title="Copy Prompt"
                >
                  {copiedId === current.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px]">{copiedId === current.id ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>
            </div>

            <div className="mt-3">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Raw Prompt Input:</span>
              <pre className="mt-1.5 font-mono text-xs text-slate-300 bg-slate-900 p-3.5 rounded-lg border border-slate-800 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                {current.promptText}
              </pre>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {current.tags.map((tag, i) => (
                <span key={i} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Output Evaluation & Human In The Loop */}
        <div className="lg:col-span-5 space-y-4">
          {/* AI Output Evaluation */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Terminal className="w-4 h-4" />
              <span>Evaluasi Kualitas Generate AI</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {current.rawOutputSummary}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Akurasi Logika:</span>
              <div className="flex text-amber-400 text-sm">
                {"★".repeat(current.qualityRating)}
                {"☆".repeat(5 - current.qualityRating)}
              </div>
            </div>
          </div>

          {/* Human-in-the-Loop Refinements */}
          <div className="bg-slate-950 p-4 rounded-xl border border-indigo-800/40 bg-indigo-950/10">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Lightbulb className="w-4 h-4" />
              <span>Perbaikan Manual (Human-in-the-Loop)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {current.manualRefinement}
            </p>
          </div>
        </div>
      </div>

      {/* Summary Reflection Bar */}
      <div className="mt-6 p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-purple-200">
          <AlertTriangle className="w-4 h-4 text-purple-400 shrink-0" />
          <span>
            <strong>Refleksi Akademis:</strong> AI mempercepat pembuatan boilerplate &amp; layout sebesar 75%, tetapi tetap membutuhkan rekayasa manual pada path routing, CSP Netlify, dan verifikasi rumus FinOps.
          </span>
        </div>
        <div className="font-mono text-purple-300 text-[11px] font-semibold bg-purple-500/20 px-3 py-1 rounded-lg">
          Metode: Constraint-Based Prompting
        </div>
      </div>
    </div>
  );
};
