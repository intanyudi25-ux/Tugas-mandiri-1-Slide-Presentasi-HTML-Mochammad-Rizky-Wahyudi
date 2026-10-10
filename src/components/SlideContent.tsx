import React from 'react';
import { 
  Globe, Github, ExternalLink, User, BookOpen, Layers, ArrowRight, ShieldCheck, 
  TrendingUp, Database, HardDrive, Wifi, Server, Zap, CheckCircle2, AlertTriangle, 
  Sparkles, FileText, Download, Terminal, Cpu, Clock, RefreshCw, ShoppingCart, LayoutDashboard
} from 'lucide-react';
import { SlideItem, StudentProfile } from '../types';
import { htmlFilesDetails } from '../data/slidesData';
import { CloudArchitectureDiagram } from './CloudArchitectureDiagram';
import { FinOpsCalculator } from './FinOpsCalculator';
import { PromptLogViewer } from './PromptLogViewer';
import { TroubleshootingTable } from './TroubleshootingTable';
import { CloudCartAppPreview } from './CloudCartAppPreview';

interface Props {
  slide: SlideItem;
  profile: StudentProfile;
  onOpenProfile: () => void;
  onOpenGuide: () => void;
  onOpenExport: () => void;
}

export const SlideContent: React.FC<Props> = ({ 
  slide, 
  profile, 
  onOpenProfile, 
  onOpenGuide, 
  onOpenExport 
}) => {
  switch (slide.id) {
    // SLIDE 1: Judul & Identitas Projek
    case 1:
      return (
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 border border-indigo-500/30 p-8 sm:p-10 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tugas Mandiri 1 • Mata Kuliah Cloud Computing (2 SKS)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Analisis Arsitektur Cloud &amp; FinOps <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-300 to-sky-400">
                  Platform E-Commerce: CloudCart Hub
                </span>
              </h1>

              <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                Studi komprehensif alur data, infrastruktur PaaS Netlify, integrasi multi-layer CDN, kalkulasi FinOps skala 1 TB di AWS/GCP, serta refleksi kritis rekayasa kode dengan Generative AI.
              </p>

              {/* Student Metadata Card */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
                <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 font-medium">
                    <User className="w-3.5 h-3.5 text-indigo-400" />
                    Identitas Penyusun
                  </div>
                  <div className="text-sm font-bold text-white mt-1">{profile.name}</div>
                  <div className="text-xs text-indigo-300 font-mono mt-0.5">NIM: {profile.nim}</div>
                  <button
                    onClick={onOpenProfile}
                    className="mt-2 text-[10px] text-indigo-400 hover:text-indigo-300 underline block"
                  >
                    Edit Profil Mahasiswa →
                  </button>
                </div>

                <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 font-medium">
                    <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                    Prodi &amp; Konsentrasi
                  </div>
                  <div className="text-sm font-bold text-white mt-1">{profile.prodi}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{profile.course}</div>
                  <div className="text-[11px] text-teal-400 mt-2 font-medium">Penilaian: 15% Bobot Akhir</div>
                </div>

                <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div className="text-[11px] text-slate-400 font-medium">Platform &amp; Media Slide</div>
                  <div className="text-sm font-bold text-white">Interactive Web Deck</div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono">Netlify PaaS</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">GitHub CI/CD</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={profile.netlifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-teal-500/20 transition-all"
                >
                  <Globe className="w-4 h-4" />
                  <span>Buka Live Web Netlify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Repositori GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenGuide}
                  className="px-4 py-2.5 rounded-xl bg-indigo-900/40 hover:bg-indigo-900/60 text-indigo-300 text-xs font-semibold flex items-center gap-2 border border-indigo-700/50"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Petunjuk Tugas &amp; Rubrik Nilai</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    // SLIDE 2: Gambaran Umum Sistem & Flow Diagram Fitur
    case 2:
      return (
        <div className="space-y-6">
          {/* Top 5 Files Grid */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2 mb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Arsitektur Modular 5 File HTML</span>
                <h3 className="text-lg font-bold text-white">Dekomposisi Fungsional Modul CloudCart Hub</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">100% Validated Static Delivery</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {htmlFilesDetails.map((file, idx) => (
                <div key={file.fileName} className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-between hover:border-indigo-500/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
                        {file.badge}
                      </span>
                    </div>
                    <div className="font-mono text-xs font-bold text-white">{file.fileName}</div>
                    <div className="text-[11px] text-teal-300 font-medium mt-0.5">{file.name}</div>
                    <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                      {file.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800/60">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider block font-bold">CDN Dependencies:</span>
                    <span className="text-[10px] text-slate-300 font-mono truncate block mt-0.5">
                      {file.cdnAssets.join(', ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Flow Interaction Diagram */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs tracking-wider uppercase mb-1">
              <Layers className="w-4 h-4" />
              <span>Diagram Alur Pengguna (User &amp; Merchant Flow)</span>
            </div>
            <h3 className="text-base font-bold text-white mb-4">Siklus Interaksi Dari Pengunjung Publik Hingga Financial Ledger</h3>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
              {[
                { step: "1. Storefront Discovery", target: "index.html", desc: "User membuka katalog, filter produk Cloud VPS/Storage, menambahkan ke keranjang.", icon: ShoppingCart },
                { step: "2. Checkout & Order Cart", target: "index.html", desc: "Sistem client-side memvalidasi total item dan kalkulasi diskon via LocalStorage.", icon: Zap },
                { step: "3. Merchant Telemetry", target: "dashboard.html", desc: "Admin merchant melihat update pesanan masuk dan grafik tren revenue real-time.", icon: LayoutDashboard },
                { step: "4. Cloud SLA Inspection", target: "detail-layanan.html", desc: "Konsumen/Enterprise meninjau tier spesifikasi dan jaminan uptime 99.99%.", icon: ShieldCheck },
                { step: "5. Audit & Data Export", target: "laporan-data.html", desc: "Bagian finance mengekspor CSV rekapitulasi penjualan dan log pembayaran.", icon: FileText },
              ].map((flow, i) => {
                const Icon = flow.icon;
                return (
                  <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 relative group hover:border-teal-500/50 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-teal-400 font-bold">{flow.target}</span>
                    </div>
                    <div className="text-xs font-bold text-white mb-1">{flow.step}</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{flow.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );

    // SLIDE 3: Arsitektur Infrastruktur Cloud (PaaS, VCS & CDN)
    case 3:
      return <CloudArchitectureDiagram />;

    // SLIDE 4: Data Architecture & Storage Strategy
    case 4:
      return (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Data Engineering &amp; Persistence</span>
                <h3 className="text-xl font-bold text-white">Strategi Alur Data: Client-Side vs Skalabilitas Cloud Database</h3>
              </div>
              <span className="text-xs bg-slate-800 px-3 py-1 rounded-lg text-slate-300 font-mono">
                Storage Target: 1.0 TB Hybrid Bucket
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current Client Side State */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                    Kondisi Saat Ini (Client-Side Memory)
                  </span>
                  <span className="text-[10px] bg-teal-500/20 text-teal-300 font-mono px-2 py-0.5 rounded">PaaS Zero-DB</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Stateless Browser Persistence</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Data katalog dan status pesanan diproses di sisi klien menggunakan memori JavaScript dan <code>window.localStorage</code>. Tidak memerlukan server runtime database yang mahal.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">Data Fetching:</span>
                    <span className="font-mono text-teal-300">Static JSON in-DOM / Local Array</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">Keranjang Belanja:</span>
                    <span className="font-mono text-teal-300">localStorage.setItem('cart', ...)</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">Ekspor Laporan:</span>
                    <span className="font-mono text-teal-300">Blob API (Data URI download)</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-teal-950/20 rounded-lg border border-teal-800/30 text-[11px] text-teal-300">
                  <strong>Kelebihan:</strong> Zero operating cost, 100% uptime SLA dari Netlify edge CDN, tidak rentan SQL Injection.
                </div>
              </div>

              {/* Upgraded Cloud Database Architecture */}
              <div className="bg-slate-950 p-5 rounded-xl border border-indigo-800/40 bg-indigo-950/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    Strategi Skalabilitas (Sistem Dinamis 1 TB)
                  </span>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 font-mono px-2 py-0.5 rounded">Cloud Multi-Tier</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Managed Cloud DB + 1 TB Object Storage</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Roadmap upgrade ketika sistem menangani transaksi concurrent ribuan merchant dan aset katalog mencapai 1 Terabyte.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">Relational DB (ACID Ledger):</span>
                    <span className="font-mono text-indigo-300">PostgreSQL (AWS RDS Aurora / Supabase)</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">Aset 1 TB (Foto &amp; PDF Invoice):</span>
                    <span className="font-mono text-indigo-300">Amazon S3 + CloudFront CDN Edge</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">Session Caching (Cart):</span>
                    <span className="font-mono text-indigo-300">Redis In-Memory (TTL 30 Menit)</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-indigo-950/30 rounded-lg border border-indigo-700/40 text-[11px] text-indigo-200">
                  <strong>FinOps Safety:</strong> Implementasi S3 Lifecycle Policy untuk otomatis memindahkan invoice &gt;90 hari ke Glacier ($1/TB).
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // SLIDE 5: Analisis Cloud Economics & FinOps (Kalkulasi Scale-Up)
    case 5:
      return <FinOpsCalculator />;

    // SLIDE 6: Dokumentasi Prompt AI (Refleksi Generative AI)
    case 6:
      return <PromptLogViewer />;

    // SLIDE 7: Troubleshooting & Resolution Log
    case 7:
      return <TroubleshootingTable />;

    // SLIDE 8: Kesimpulan & Live Demo Link
    case 8:
      return (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Rangkuman Pembelajaran (Key Takeaways)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Kesimpulan Rekayasa Cloud &amp; Refleksi Akademik
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl mb-6">
              Melalui perancangan dan deployment proyek CloudCart Hub ke PaaS Netlify, diperoleh empat kesimpulan fundamental dalam disiplin Cloud Computing &amp; FinOps:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">
                  1. Efisiensi PaaS vs On-Premise
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Kecepatan Rilis &amp; Zero SysAdmin</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  PaaS Netlify terintegrasi Git memotong siklus deployment dari 45 menit manual menjadi 12 detik otomatis, dengan keandalan edge CDN global tanpa beban biaya CapEx server fisik.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  2. Disiplin FinOps pada Data 1 TB
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Pengendalian Egress &amp; Storage Lifecycle</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Skalabilitas ke cloud publik tidak boleh sembarangan. Tanpa CDN edge caching, biaya outbound egress ($90/TB) jauh lebih mahal daripada storage ($23/TB). Caching memotong biaya hingga 70%.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
                  3. Paradigma Generative AI
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Human-in-the-Loop Engineering</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  AI adalah akselerator sintaks luar biasa, namun rekayasa sejati ada pada mitigasi bug nyata (Error 404 Netlify, pathing Linux case-sensitivity, dan kalkulasi FinOps teruji).
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
                  4. Kesiapan Evaluasi Pertemuan 15
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Live Demo &amp; Integritas Repositori</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Seluruh 5 file HTML dapat diuji live, repositori GitHub publik terdokumentasi rapi, dan slide presentasi siap diekspor maupun di-embed langsung.
                </p>
              </div>
            </div>

            {/* Final Action Links */}
            <div className="mt-8 p-5 bg-gradient-to-r from-slate-950 to-indigo-950/40 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400">Tautan Resmi Pengumpulan Tugas:</div>
                <div className="text-sm font-bold text-white mt-0.5">Netlify Live Site &amp; Repositori GitHub</div>
              </div>

              <div className="flex gap-3">
                <a
                  href={profile.netlifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-lg shadow-teal-500/20"
                >
                  <Globe className="w-4 h-4" />
                  <span>Uji Live Netlify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenExport}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Ekspor PDF / Embed Netlify</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    // SLIDE 9: FinOps Optimization Playbook & Cost Guardrails
    case 9:
      return (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2 mb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Advanced FinOps Playbook</span>
                <h3 className="text-xl font-bold text-white">Strategi Guardrails &amp; Efisiensi Penghematan Biaya Cloud</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                Target Hemat: ~65% Tagihan Bulanan
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Playbook 1 */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-3">
                  01
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Edge CDN Offload (70% - 85%)</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  Menyajikan semua gambar katalog dan static asset dari CloudFront Edge Cache. Mengurangi hit ke origin S3 bucket dan menurunkan tagihan data egress dari $90 ke kurang dari $25.
                </p>
                <div className="text-[11px] font-mono text-blue-300 bg-slate-900 p-2 rounded">
                  Cache-Control: max-age=31536000, immutable
                </div>
              </div>

              {/* Playbook 2 */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold mb-3">
                  02
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Kompresi Next-Gen (WebP / AVIF)</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  Mengompresi seluruh foto produk katalog dari JPEG/PNG ke WebP. Memotong volume total penyimpanan dari 1.0 TB menjadi sekitar 320 GB (menghemat 68% biaya S3).
                </p>
                <div className="text-[11px] font-mono text-amber-300 bg-slate-900 p-2 rounded">
                  Savings: S3 1TB $23.55 → $7.53/bln
                </div>
              </div>

              {/* Playbook 3 */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-3">
                  03
                </div>
                <h4 className="text-sm font-bold text-white mb-1">S3 Lifecycle Archiving</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  Aturan otomatis untuk memindahkan invoice transaksi yang berumur lebih dari 90 hari dari S3 Standard ke S3 Glacier Deep Archive dengan biaya hanya $0.00099/GB.
                </p>
                <div className="text-[11px] font-mono text-emerald-300 bg-slate-900 p-2 rounded">
                  Glacier Cost: $1.01 per 1 TB / bulan
                </div>
              </div>
            </div>

            {/* AWS Budgets & Alerting */}
            <div className="mt-6 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">AWS CloudWatch &amp; Budgets Automated Alarms</div>
                  <div className="text-slate-400 text-[11px]">Kirim webhook alert ke Discord/Telegram saat estimasi tagihan menyentuh 80% dari target FinOps ($100).</div>
                </div>
              </div>
              <span className="font-mono text-emerald-400 text-xs font-semibold px-3 py-1 rounded bg-slate-900 border border-slate-800">
                Zero Cost Surprise
              </span>
            </div>
          </div>
        </div>
      );

    // SLIDE 10: Showcase Interaktif 5 Modul CloudCart Hub
    case 10:
      return (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Live Simulation &amp; Evaluation Deck</span>
                <h3 className="text-xl font-bold text-white">Simulator Langsung 5 Modul CloudCart Hub</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Uji langsung fungsi antarmuka, perpindahan halaman, kode sumber, dan responsivitas.
                </p>
              </div>
              <button
                onClick={onOpenExport}
                className="text-xs px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-2 self-start sm:self-auto"
              >
                <Download className="w-4 h-4" />
                <span>Salin Embed / PDF</span>
              </button>
            </div>

            <CloudCartAppPreview />
          </div>
        </div>
      );

    default:
      return null;
  }
};
