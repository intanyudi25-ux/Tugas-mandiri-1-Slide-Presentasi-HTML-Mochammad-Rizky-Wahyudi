import React from 'react';
import { BookOpen, CheckCircle2, Award, FileText, ArrowRight, ShieldAlert, Sparkles, X, Layers, ExternalLink } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AssignmentGuideModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 text-slate-100 shadow-2xl relative animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="sticky top-0 float-right p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
          <div className="p-3 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-400">Panduan Akademik &amp; Strategi Nilai A (15%)</div>
            <h2 className="text-xl font-bold text-white">Apa yang Harus Anda Lakukan untuk Tugas Mandiri 1?</h2>
          </div>
        </div>

        {/* Step-by-Step Action Plan */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 text-sm font-bold text-teal-400 mb-2">
              <span className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-xs">1</span>
              <span>Pahami Inti Tugas: Analisis Arsitektur Cloud &amp; FinOps 5 File HTML</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Anda tidak hanya menyajikan web biasa, melainkan <strong>membongkar landasan teknis arsitektur cloud</strong> dari proyek e-commerce <em>CloudCart Hub</em> (yang terdiri dari <code>index.html</code>, <code>dashboard.html</code>, <code>fitur-sistem.html</code>, <code>detail-layanan.html</code>, dan <code>laporan-data.html</code>). Dosen ingin melihat:
            </p>
            <ul className="text-xs text-slate-400 mt-2 space-y-1 list-disc list-inside">
              <li>Bagaimana kode dari GitHub otomatis di-deploy ke PaaS Netlify (CI/CD pipeline).</li>
              <li>Bagaimana aset eksternal (Tailwind, Chart.js) dimuat efisien via CDN.</li>
              <li>Simulasi kalkulasi biaya jika penyimpanan membengkak ke <strong>1 Terabyte (1 TB)</strong> di AWS/GCP (FinOps).</li>
            </ul>
          </div>

          {/* Step 2: Rubric breakdown */}
          <div className="bg-slate-950 p-4 rounded-xl border border-indigo-800/50 bg-indigo-950/10">
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-400 mb-2">
              <Award className="w-5 h-5" />
              <span>Kunci Penilaian Dosen (Bobot 15% dari Total Nilai Mata Kuliah)</span>
            </div>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-900 text-slate-400 text-[10px] uppercase">
                  <tr>
                    <th className="py-2 px-3">Komponen</th>
                    <th className="py-2 px-3">Bobot</th>
                    <th className="py-2 px-3">Kriteria Kunci Kelulusan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-[11px]">
                  <tr>
                    <td className="py-2 px-3 font-semibold text-white">Arsitektur Cloud &amp; FinOps</td>
                    <td className="py-2 px-3 text-indigo-400 font-bold">80%</td>
                    <td className="py-2 px-3 text-slate-300">
                      Diagram arsitektur jelas (Git + Netlify + CDN) dan kalkulasi biaya 1 TB Storage, Bandwidth &amp; Compute logis.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-white">Dokumentasi AI &amp; Troubleshooting</td>
                    <td className="py-2 px-3 text-purple-400 font-bold">10%</td>
                    <td className="py-2 px-3 text-slate-300">
                      Kejujuran prompt AI (Gemini/ChatGPT) dan catatan penyelesaian error 404 / build failure di Netlify.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-white">Kelengkapan Materi</td>
                    <td className="py-2 px-3 text-teal-400 font-bold">10%</td>
                    <td className="py-2 px-3 text-slate-300">
                      Struktur slide rapi minimal 10 slide (pendahuluan, alur data, analisis, dan link live site).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Step 3: What to do right now */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-400 mb-2">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">2</span>
              <span>Langkah Eksekusi Menggunakan Aplikasi Slide Ini</span>
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Langkah 1:</strong> Klik tombol <strong>"Identitas Mahasiswa"</strong> di navbar atas untuk memasukkan Nama, NIM, link GitHub, dan link Netlify Anda.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Langkah 2:</strong> Telusuri 10 Slide yang telah disiapkan secara lengkap (sudah mencakup arsitektur 3-layer, kalkulasi 1TB FinOps interaktif, dokumentasi prompt AI riil, log error 404, dan demo interaktif 5 modul).
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Langkah 3:</strong> Klik tombol <strong>"Bagikan / Embed / PDF"</strong>:
                  <br />• Anda bisa mengunduh slide ini sebagai PDF (Cetak / Save as PDF).
                  <br />• Anda bisa menyalin kode iframe embed untuk ditempelkan di live Netlify Anda.
                  <br />• Atau gunakan langsung mode Presenter saat demo di depan dosen pada Pertemuan 15!
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold"
          >
            Mengerti, Lanjutkan ke Slide
          </button>
        </div>
      </div>
    </div>
  );
};
