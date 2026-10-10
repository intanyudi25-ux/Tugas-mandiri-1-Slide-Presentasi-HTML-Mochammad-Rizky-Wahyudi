import React, { useState } from 'react';
import { GitBranch, Globe, Server, Cloud, Database, Cpu, ArrowRight, ShieldCheck, CheckCircle2, Zap, Layers } from 'lucide-react';

export const CloudArchitectureDiagram: React.FC = () => {
  const [activeView, setActiveView] = useState<'current' | 'scaleup' | 'comparison'>('current');

  return (
    <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl backdrop-blur-md">
      {/* Header and View Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs tracking-wider uppercase mb-1">
            <Layers className="w-4 h-4" />
            <span>Infrastruktur Cloud Diagram • Slide 3 & 4</span>
          </div>
          <h3 className="text-xl font-bold text-white">Topologi Arsitektur Cloud: VCS, PaaS, CDN & Storage</h3>
        </div>

        <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs font-medium self-start sm:self-auto">
          <button
            onClick={() => setActiveView('current')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeView === 'current'
                ? 'bg-indigo-600 text-white font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            PaaS Netlify (Saat Ini)
          </button>
          <button
            onClick={() => setActiveView('scaleup')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeView === 'scaleup'
                ? 'bg-amber-600 text-white font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Scale-Up AWS/GCP (1 TB)
          </button>
          <button
            onClick={() => setActiveView('comparison')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeView === 'comparison'
                ? 'bg-teal-600 text-white font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            PaaS vs On-Premise
          </button>
        </div>
      </div>

      {/* VIEW 1: Current Netlify PaaS Architecture */}
      {activeView === 'current' && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {/* Layer 1: VCS GitHub */}
            <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl flex flex-col justify-between hover:border-indigo-500/50 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                    Layer 1 • VCS
                  </span>
                  <GitBranch className="w-5 h-5 text-indigo-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">GitHub Repository</h4>
                <p className="text-xs text-slate-400 mb-3">
                  Repositori kontrol versi terpusat menyimpan 5 file HTML (index, dashboard, fitur, layanan, laporan).
                </p>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800/80 font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="text-emerald-400">$ git push origin main</div>
                  <div className="text-slate-500">→ Webhook trigger dispatched</div>
                  <div className="text-slate-400 font-sans text-[10px]">SHA: commit a1f89c0</div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                <span className="text-white font-semibold">Tanggung Jawab:</span> Source code integrity, version tagging, commit history.
              </div>
            </div>

            {/* Layer 2: Netlify CI/CD & PaaS */}
            <div className="bg-slate-950/80 border border-indigo-800/40 p-5 rounded-xl flex flex-col justify-between hover:border-teal-500/50 transition-all relative">
              <div className="absolute -top-2.5 right-4 bg-teal-500 text-slate-950 font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                PaaS Edge Engine
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/20">
                    Layer 2 • CI/CD & PaaS
                  </span>
                  <Cloud className="w-5 h-5 text-teal-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Netlify Platform</h4>
                <p className="text-xs text-slate-400 mb-3">
                  Automated container build, zero-downtime atomic deployment, dan instant SSL/TLS Let's Encrypt.
                </p>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800/80 font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="text-teal-300">Netlify Build: Success in 12s</div>
                  <div className="text-slate-400">Deploy URL: cloudcart.netlify.app</div>
                  <div className="text-emerald-400 text-[10px]">Headers: Cache-Control & _redirects</div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                <span className="text-white font-semibold">Keuntungan:</span> No server patching, zero OS configuration, multi-region CDN.
              </div>
            </div>

            {/* Layer 3: Cloud Asset CDN */}
            <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl flex flex-col justify-between hover:border-purple-500/50 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                    Layer 3 • Edge CDN
                  </span>
                  <Globe className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Cloud Asset Layer</h4>
                <p className="text-xs text-slate-400 mb-3">
                  Pemuatan library dependency dinamis langsung melalui CDN global tanpa memberatkan payload server.
                </p>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800/80 text-[11px] space-y-1.5 text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-300">Tailwind CSS</span>
                    <span className="text-slate-500 font-mono text-[10px]">cdn.tailwindcss.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-300">Chart.js v4.4</span>
                    <span className="text-slate-500 font-mono text-[10px]">cdn.jsdelivr.net</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-300">Lucide Icons</span>
                    <span className="text-slate-500 font-mono text-[10px]">unpkg.com</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                <span className="text-white font-semibold">Efisiensi:</span> Browser cache reuse, HTTP/3 multiplexing, geo-distributed pops.
              </div>
            </div>
          </div>

          {/* Data Flow Bar */}
          <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-white">Alur Data Client-Side:</span>
              <span>Browser request HTML → Fetch assets via CDN → Render di DOM → State di LocalStorage</span>
            </div>
            <div className="text-emerald-400 font-mono text-xs font-semibold bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
              Latency TTFB &lt; 35ms (Global Edge)
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Scale-Up 1 TB Architecture (AWS / GCP) */}
      {activeView === 'scaleup' && (
        <div className="mt-6 space-y-6">
          <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded-xl text-amber-200 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Arsitektur Scale-Up Produksi:</strong> Saat volume katalog &amp; invoice mencapai 1 TB dan transaksi simultan melonjak ke puluhan ribu RPS.
              </span>
            </div>
            <span className="font-mono text-amber-300 font-bold hidden sm:inline">Tier: AWS Enterprise HA</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Box 1: Edge & CDN */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="text-xs font-bold text-amber-400 uppercase mb-1">01. Edge Gateway</div>
              <div className="text-sm font-bold text-white mb-2">CloudFront + Route 53</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Menyerap DDoS traffic (AWS Shield Standard), SSL termination, dan me-route trafik dinamis ke API &amp; statis ke S3.
              </p>
              <div className="mt-3 text-[10px] text-slate-300 font-mono bg-slate-900 p-2 rounded">
                Cache Hit Ratio: &gt;85%
              </div>
            </div>

            {/* Box 2: Compute Layer */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="text-xs font-bold text-amber-400 uppercase mb-1">02. Compute Cluster</div>
              <div className="text-sm font-bold text-white mb-2">ALB + Auto-Scaling EC2</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                2 hingga 6 instance ARM Graviton (t4g.medium) berjalan di Multi-AZ dengan target CPU utilization 65%.
              </p>
              <div className="mt-3 text-[10px] text-slate-300 font-mono bg-slate-900 p-2 rounded">
                Healthcheck: /healthz 200 OK
              </div>
            </div>

            {/* Box 3: 1 TB Object Storage */}
            <div className="bg-slate-950 p-4 rounded-xl border border-amber-700/50 relative">
              <div className="text-xs font-bold text-amber-400 uppercase mb-1">03. 1 TB Storage Tier</div>
              <div className="text-sm font-bold text-white mb-2">Amazon S3 Standard</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Menyimpan 1 Terabyte foto katalog produk, bukti pembayaran, dan invoice PDF. Lifecycle rule ke Glacier setelah 90 hari.
              </p>
              <div className="mt-3 text-[10px] text-amber-300 font-mono bg-slate-900 p-2 rounded">
                Cost: $23.55/TB/bulan
              </div>
            </div>

            {/* Box 4: Database & Cache */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="text-xs font-bold text-amber-400 uppercase mb-1">04. Relational Data</div>
              <div className="text-sm font-bold text-white mb-2">Aurora PostgreSQL + Redis</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                ACID compliant ledger untuk pesanan dan stok di PostgreSQL, dikombinasikan Redis ElastiCache untuk cart session.
              </p>
              <div className="mt-3 text-[10px] text-slate-300 font-mono bg-slate-900 p-2 rounded">
                Read Replicas: Multi-AZ
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: PaaS vs On-Premise Comparison Table */}
      {activeView === 'comparison' && (
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Parameter Komparasi</th>
                <th className="py-3 px-4 text-teal-400 font-bold">PaaS Netlify (Cloud)</th>
                <th className="py-3 px-4 text-slate-400">On-Premises / VPS Tradisional</th>
                <th className="py-3 px-4">Keuntungan Ilmiah untuk CloudCart</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-sans">
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-semibold text-slate-200">Waktu Deployment &amp; CI/CD</td>
                <td className="py-3 px-4 text-teal-300 font-mono">10 - 20 detik (Otomatis)</td>
                <td className="py-3 px-4 text-slate-400">30 - 60 menit (Manual SSH/FTP)</td>
                <td className="py-3 px-4 text-slate-300">Setiap git commit langsung ter-deploy tanpa downtime</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-semibold text-slate-200">Biaya Awal (CapEx vs OpEx)</td>
                <td className="py-3 px-4 text-teal-300 font-mono">$0 (Free Tier 100% OpEx)</td>
                <td className="py-3 px-4 text-red-300">CapEx Tinggi (Server fisik / sewa VPS bulanan)</td>
                <td className="py-3 px-4 text-slate-300">Zero investment modal awal untuk mahasiswa &amp; startup</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-semibold text-slate-200">SSL / TLS Certificate</td>
                <td className="py-3 px-4 text-teal-300">Otomatis Let's Encrypt (Auto-Renew)</td>
                <td className="py-3 px-4 text-slate-400">Konfigurasi manual Certbot / Nginx crontab</td>
                <td className="py-3 px-4 text-slate-300">HTTPS otomatis aktif tanpa risiko expired certificate</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-semibold text-slate-200">Global Scalability &amp; Latensi</td>
                <td className="py-3 px-4 text-teal-300">Global Multi-Edge CDN</td>
                <td className="py-3 px-4 text-slate-400">Single Datacenter (Latensi tinggi lintas wilayah)</td>
                <td className="py-3 px-4 text-slate-300">Pengguna di Indonesia dan global mendapat cache di PoP terdekat</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-semibold text-slate-200">Maintenance &amp; Patching</td>
                <td className="py-3 px-4 text-teal-300">Zero SysAdmin maintenance</td>
                <td className="py-3 px-4 text-slate-400">Wajib patch OS, firewall, security vulnerability</td>
                <td className="py-3 px-4 text-slate-300">Tim developer fokus ke produk bukan manajemen server</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
