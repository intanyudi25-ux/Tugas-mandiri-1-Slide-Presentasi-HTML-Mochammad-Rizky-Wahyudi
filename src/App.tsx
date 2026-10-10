/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialStudentProfile, slidesMeta } from './data/slidesData';
import { StudentProfile } from './types';
import { SlideViewer } from './components/SlideViewer';
import { StudentProfileModal } from './components/StudentProfileModal';
import { AssignmentGuideModal } from './components/AssignmentGuideModal';
import { ExportEmbedModal } from './components/ExportEmbedModal';
import { SlideContent } from './components/SlideContent';

export default function App() {
  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem('cloudcart_student_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name === 'Intan Yudi Pratama' || !parsed.name) {
          parsed.name = 'Moch Rizky Wahyudi';
          parsed.nim = '2422416853';
        }
        parsed.githubUrl = 'https://github.com/intanyudi25-ux';
        if (!parsed.prodi || parsed.prodi === 'Teknik Informatika / Sistem Informasi') {
          parsed.prodi = 'Teknik Informatika / Software Engineering';
        }
        if (parsed.course && parsed.course.includes('Pertemuan 15')) {
          parsed.course = parsed.course.replace(/\s*-\s*Pertemuan 15/gi, '').replace(/Pertemuan 15/gi, '').trim();
        }
        localStorage.setItem('cloudcart_student_profile', JSON.stringify(parsed));
        return parsed;
      }
    } catch (e) {
      // ignore
    }
    return initialStudentProfile;
  });

  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  const handleSaveProfile = (updated: StudentProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem('cloudcart_student_profile', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Interactive Presentation Mode (Screen View) */}
      <div className="no-print">
        <SlideViewer
          profile={profile}
          onOpenProfile={() => setIsProfileModalOpen(true)}
          onOpenGuide={() => setIsGuideModalOpen(true)}
          onOpenExport={() => setIsExportModalOpen(true)}
        />
      </div>

      {/* Print Document View (Prints all 10 slides when Ctrl+P or Cetak PDF is clicked) */}
      <div className="hidden print:block p-8 bg-white text-slate-900">
        <div className="text-center mb-10 pb-6 border-b border-slate-300">
          <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">
            Tugas Mandiri 1 • Mata Kuliah Cloud Computing (2 SKS)
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">
            Analisis Arsitektur Cloud &amp; FinOps: CloudCart Hub
          </h1>
          <div className="mt-3 text-sm text-slate-600 font-mono">
            {profile.name} (NIM: {profile.nim}) • {profile.prodi}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            GitHub: {profile.githubUrl} | Netlify: {profile.netlifyUrl}
          </div>
        </div>

        {slidesMeta.map((slide, idx) => (
          <div key={slide.id} className="print-page-break py-6">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
              <span className="font-bold text-xs uppercase tracking-wider text-indigo-700">
                Slide {slide.id}: {slide.title}
              </span>
              <span className="text-xs text-slate-500 font-mono">{slide.badge}</span>
            </div>
            <div className="bg-slate-900 text-white p-6 rounded-xl">
              <SlideContent
                slide={slide}
                profile={profile}
                onOpenProfile={() => {}}
                onOpenGuide={() => {}}
                onOpenExport={() => {}}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      <StudentProfileModal
        profile={profile}
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onSave={handleSaveProfile}
      />

      <AssignmentGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />

      <ExportEmbedModal
        profile={profile}
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
