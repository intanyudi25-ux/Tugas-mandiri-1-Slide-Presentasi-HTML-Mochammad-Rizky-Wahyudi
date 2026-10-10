import React, { useState } from 'react';
import { Share2, Printer, Copy, Check, Code, ExternalLink, X, FileText } from 'lucide-react';
import { StudentProfile } from '../types';

interface Props {
  profile: StudentProfile;
  isOpen: boolean;
  onClose: () => void;
}

export const ExportEmbedModal: React.FC<Props> = ({ profile, isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!isOpen) return null;

  const embedCode = `<!-- Embed Slide Presentasi CloudCart Hub di Netlify -->
<div style="position: relative; width: 100%; height: 85vh; min-height: 650px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
  <iframe 
    src="${window.location.origin}" 
    title="CloudCart Hub - Slide Presentasi & FinOps"
    width="100%" 
    height="100%" 
    frameborder="0" 
    allow="clipboard-write; fullscreen"
    loading="lazy">
  </iframe>
</div>`;

  const lmsSubmissionText = `TUGAS MANDIRI 1: SLIDE ANALISIS ARSITEKTUR CLOUD & REFLEKSI AI
Mata Kuliah: Cloud Computing (2 SKS)

Identitas Mahasiswa:
- Nama Lengkap: ${profile.name}
- NIM: ${profile.nim}
- Program Studi: ${profile.prodi}
- Tema Proyek: E-Commerce CloudCart Hub (5 File HTML)

Tautan Pengumpulan:
1. Live Web Netlify: ${profile.netlifyUrl}
2. Repositori GitHub: ${profile.githubUrl}
3. Slide Presentasi Interaktif: ${window.location.href}
4. Demo 5 Modul: ${profile.demoUrl}

Catatan FinOps:
- Perhitungan Skalabilitas 1 TB Storage (AWS S3 vs GCP Cloud Storage)
- Analisis Egress Bandwidth & Edge Caching CDN
- Catatan Resolusi Error 404 Netlify & Dokumentasi Prompt Generative AI Terlampir di Slide.`;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl p-6 text-slate-100 shadow-2xl relative animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800">
          <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Ekspor Slide, Cetak PDF &amp; Kode Embed Netlify</h3>
            <p className="text-xs text-slate-400">Pilihan format pengumpulan tugas sesuai instruksi dosen.</p>
          </div>
        </div>

        <div className="space-y-5">
          {/* Option 1: PDF Export */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Printer className="w-4 h-4 text-teal-400" />
                <span>Cetak / Simpan Sebagai Dokumen PDF</span>
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Format resmi untuk diunggah ke Google Classroom / LMS dalam bentuk dokumen cetak presentasi.
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white flex items-center gap-2 shrink-0 transition-colors shadow-lg shadow-teal-600/20"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak ke PDF</span>
            </button>
          </div>

          {/* Option 2: Embed Code for Netlify */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-indigo-400" />
                <span>Kode Embed iFrame untuk Web Netlify</span>
              </h4>
              <button
                onClick={() => handleCopy(embedCode, 'embed')}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5"
              >
                {copiedType === 'embed' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'embed' ? 'Tersalin!' : 'Salin Kode'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-2">
              Sesuai instruksi: <em>"Slide presentasi bisa juga di embed di link Netlify agar bisa dinilai di satu tempat"</em>.
            </p>
            <pre className="p-3 bg-slate-900 rounded-lg text-slate-300 font-mono text-[11px] overflow-x-auto border border-slate-800/80 max-h-28">
              {embedCode}
            </pre>
          </div>

          {/* Option 3: LMS Submission Template */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Teks Format Pengumpulan Tugas di LMS</span>
              </h4>
              <button
                onClick={() => handleCopy(lmsSubmissionText, 'lms')}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5"
              >
                {copiedType === 'lms' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'lms' ? 'Tersalin!' : 'Salin Teks LMS'}</span>
              </button>
            </div>
            <pre className="p-3 bg-slate-900 rounded-lg text-slate-300 font-mono text-[11px] overflow-x-auto border border-slate-800/80 max-h-28 whitespace-pre-wrap">
              {lmsSubmissionText}
            </pre>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
