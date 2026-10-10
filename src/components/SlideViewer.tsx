import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Maximize2, Minimize2, Play, Pause, 
  RotateCcw, MessageSquare, BookOpen, User, Share2, HelpCircle, 
  CheckCircle, List, Clock, Sparkles 
} from 'lucide-react';
import { SlideItem, StudentProfile } from '../types';
import { slidesMeta } from '../data/slidesData';
import { SlideContent } from './SlideContent';

interface Props {
  profile: StudentProfile;
  onOpenProfile: () => void;
  onOpenGuide: () => void;
  onOpenExport: () => void;
}

export const SlideViewer: React.FC<Props> = ({ 
  profile, 
  onOpenProfile, 
  onOpenGuide, 
  onOpenExport 
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);

  // Presenter Stopwatch / Timer
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const currentSlide: SlideItem = slidesMeta[currentSlideIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const goToNext = () => {
    if (currentSlideIndex < slidesMeta.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col ${isFullscreen ? 'p-2 sm:p-6' : 'p-4 sm:p-8'}`}>
      {/* Top Header / Presentation Status */}
      <header className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl backdrop-blur-md no-print">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-teal-400 flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-indigo-600/30">
            CC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-white text-base">CloudCart Hub • Slide Presentasi</h1>
              <span className="text-[10px] bg-teal-500/20 text-teal-300 font-mono px-2 py-0.5 rounded-full border border-teal-500/30">
                PaaS Netlify &amp; FinOps
              </span>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span>{profile.name} ({profile.nim})</span>
              <span>•</span>
              <span className="text-slate-500">{profile.course}</span>
            </div>
          </div>
        </div>

        {/* Presenter Tools */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Presenter Stopwatch */}
          <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-teal-400" />
            <span className={timerSeconds > 900 ? 'text-rose-400 font-bold' : 'text-slate-200'}>
              {formatTimer(timerSeconds)} / 15:00
            </span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="p-1 hover:text-white text-slate-400"
              title={isTimerRunning ? 'Pause Timer' : 'Start Timer'}
            >
              {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={() => setTimerSeconds(0)}
              className="p-1 hover:text-white text-slate-400"
              title="Reset Timer"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
              showNotes
                ? 'bg-indigo-600 text-white border-indigo-500 shadow'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Catatan Dosen/Speaker</span>
          </button>

          <button
            onClick={onOpenGuide}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Panduan Tugas (15%)</span>
          </button>

          <button
            onClick={onOpenProfile}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Data Mahasiswa</span>
          </button>

          <button
            onClick={onOpenExport}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white flex items-center gap-1.5 shadow-lg shadow-teal-600/20"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Bagikan / Embed / PDF</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Slide Card Area */}
      <main className="flex-1 flex flex-col justify-between max-w-7xl mx-auto w-full">
        {/* Slide Category Header */}
        <div className="flex items-center justify-between pb-3 mb-2 px-1 text-xs text-slate-400 no-print">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full font-bold uppercase text-[10px] tracking-wider bg-slate-900 border border-slate-800 text-indigo-400">
              {currentSlide.badge}
            </span>
            <span className="text-slate-500">•</span>
            <span>Target Waktu: {currentSlide.estimatedTime}</span>
          </div>

          <div className="font-mono text-xs">
            Slide <strong className="text-white text-sm">{currentSlideIndex + 1}</strong> dari {slidesMeta.length}
          </div>
        </div>

        {/* Dynamic Slide Content */}
        <div className="flex-1">
          <SlideContent 
            slide={currentSlide} 
            profile={profile}
            onOpenProfile={onOpenProfile}
            onOpenGuide={onOpenGuide}
            onOpenExport={onOpenExport}
          />
        </div>

        {/* Collapsible Presenter Notes Drawer */}
        {showNotes && (
          <div className="mt-4 p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/40 text-slate-200 text-xs animate-in slide-in-from-bottom-2 no-print">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-indigo-300 flex items-center gap-1.5 uppercase text-[10px] tracking-wider">
                <MessageSquare className="w-3.5 h-3.5" />
                Catatan Presenter (Poin Penyampaian Lisan di Depan Dosen / Pertemuan 15):
              </span>
              <button onClick={() => setShowNotes(false)} className="text-slate-400 hover:text-white text-xs">
                Tutup
              </button>
            </div>
            <ul className="space-y-1 text-slate-300 list-disc list-inside">
              {currentSlide.presenterNotes.map((note, idx) => (
                <li key={idx} className="leading-relaxed">{note}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Bottom Slide Navigation Control Bar */}
        <footer className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
          {/* Thumbnails Quick Switcher */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 sm:pb-0">
            {slidesMeta.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all shrink-0 ${
                  currentSlideIndex === idx
                    ? 'bg-indigo-600 text-white ring-2 ring-indigo-400/50 shadow-lg'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                }`}
                title={`Slide ${s.id}: ${s.title}`}
              >
                {s.id}
              </button>
            ))}
          </div>

          {/* Previous / Next Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={goToPrev}
              disabled={currentSlideIndex === 0}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                currentSlideIndex === 0
                  ? 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              [← / → / Spasi]
            </span>

            <button
              onClick={goToNext}
              disabled={currentSlideIndex === slidesMeta.length - 1}
              className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg ${
                currentSlideIndex === slidesMeta.length - 1
                  ? 'bg-slate-900 text-slate-600 border border-slate-800 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
              }`}
            >
              <span>Selanjutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};
