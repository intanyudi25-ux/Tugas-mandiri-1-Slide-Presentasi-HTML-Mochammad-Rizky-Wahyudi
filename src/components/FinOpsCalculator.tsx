import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingDown, Server, HardDrive, Wifi, ShieldCheck, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export const FinOpsCalculator: React.FC = () => {
  const [storageTB, setStorageTB] = useState<number>(1.0);
  const [egressTB, setEgressTB] = useState<number>(1.0);
  const [instances, setInstances] = useState<number>(2);
  const [provider, setProvider] = useState<'aws' | 'gcp'>('aws');
  const [applyOptimizations, setApplyOptimizations] = useState<boolean>(false);

  // Pricing constants (Standard US East)
  // AWS S3: $0.023/GB -> $23.55/TB
  // AWS Egress: $0.09/GB -> $90/TB (first 10TB tier)
  // AWS t4g.medium (2 vCPU, 4GB): ~$0.0336/hr -> ~$24.53/instance/month
  // AWS Aurora PostgreSQL Serverless v2 base: ~$35/month
  // Netlify Free: $0/month (up to 100GB bandwidth, 300 build mins)

  const rawStorageCost = storageTB * 1024 * 0.023; // $ per TB
  const rawEgressCost = egressTB * 1024 * 0.09;
  const instanceUnitPrice = provider === 'aws' ? 24.53 : 26.80; // t4g.medium vs e2-medium
  const rawComputeCost = instances * instanceUnitPrice;
  const rawDatabaseCost = 35.00;
  const dnsAndOpsCost = 5.00;

  // Optimized multipliers:
  // CDN cache offload cuts egress by 70%
  // WebP/AVIF cuts storage by 65%
  // 1-Yr Compute Savings Plan cuts compute by 38%
  const storageDiscount = applyOptimizations ? 0.35 : 1.0;
  const egressDiscount = applyOptimizations ? 0.30 : 1.0;
  const computeDiscount = applyOptimizations ? 0.62 : 1.0;

  const finalStorage = rawStorageCost * storageDiscount;
  const finalEgress = rawEgressCost * egressDiscount;
  const finalCompute = rawComputeCost * computeDiscount;
  const finalDb = rawDatabaseCost;
  const finalOps = dnsAndOpsCost;

  const totalCloudCost = finalStorage + finalEgress + finalCompute + finalDb + finalOps;
  const unoptimizedTotal = rawStorageCost + rawEgressCost + rawComputeCost + rawDatabaseCost + dnsAndOpsCost;
  const monthlySavings = unoptimizedTotal - totalCloudCost;

  const formatUSD = (val: number) => `$${val.toFixed(2)}`;
  const formatIDR = (usd: number) => `Rp ${(usd * 16200).toLocaleString('id-ID')}`;

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-1">
            <Calculator className="w-4 h-4" />
            <span>FinOps Interactive Engine • Scale-Up 1 TB Simulation</span>
          </div>
          <h3 className="text-xl font-bold text-white">Kalkulasi Biaya Skalabilitas Cloud (AWS vs GCP vs Netlify PaaS)</h3>
          <p className="text-xs text-slate-400 mt-1">
            Simulasi beban lonjakan trafik dari Free Tier Netlify ke arsitektur production-grade public cloud.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-800 p-1 rounded-xl flex items-center border border-slate-700 text-xs font-medium">
            <button
              onClick={() => setProvider('aws')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                provider === 'aws' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              AWS Stack
            </button>
            <button
              onClick={() => setProvider('gcp')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                provider === 'gcp' ? 'bg-sky-500 text-slate-950 font-bold shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              GCP Stack
            </button>
          </div>

          <button
            onClick={() => setApplyOptimizations(!applyOptimizations)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
              applyOptimizations
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${applyOptimizations ? 'fill-emerald-400 text-emerald-400' : ''}`} />
            <span>FinOps Optimization: {applyOptimizations ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {/* Control Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        {/* Storage Controller */}
        <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
              <HardDrive className="w-3.5 h-3.5 text-blue-400" />
              Cloud Storage (S3 / GCS)
            </span>
            <span className="text-sm font-bold text-blue-400">{storageTB.toFixed(1)} TB</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.5"
            value={storageTB}
            onChange={(e) => setStorageTB(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-2">
            <span>500 GB</span>
            <span className="font-semibold text-slate-300">Target Tugas: 1.0 TB</span>
            <span>5 TB</span>
          </div>
          <div className="mt-3 text-xs flex justify-between items-center text-slate-400 border-t border-slate-800/80 pt-2">
            <span>Biaya Storage:</span>
            <span className="font-mono text-slate-200 font-bold">{formatUSD(finalStorage)}/bln</span>
          </div>
        </div>

        {/* Egress Bandwidth */}
        <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
              <Wifi className="w-3.5 h-3.5 text-amber-400" />
              Egress Transfer (Outbound)
            </span>
            <span className="text-sm font-bold text-amber-400">{egressTB.toFixed(1)} TB</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.5"
            value={egressTB}
            onChange={(e) => setEgressTB(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-2">
            <span>500 GB</span>
            <span className="font-semibold text-slate-300">1.0 TB Egress</span>
            <span>5 TB</span>
          </div>
          <div className="mt-3 text-xs flex justify-between items-center text-slate-400 border-t border-slate-800/80 pt-2">
            <span>Biaya Bandwidth:</span>
            <span className="font-mono text-slate-200 font-bold">{formatUSD(finalEgress)}/bln</span>
          </div>
        </div>

        {/* Compute Instances */}
        <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
              <Server className="w-3.5 h-3.5 text-emerald-400" />
              Compute Instances ({provider === 'aws' ? 't4g.medium' : 'e2-medium'})
            </span>
            <span className="text-sm font-bold text-emerald-400">{instances} Node(s)</span>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={instances}
            onChange={(e) => setInstances(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-2">
            <span>1 Node (Min)</span>
            <span className="font-semibold text-slate-300">2 Node (HA Pair)</span>
            <span>6 Nodes</span>
          </div>
          <div className="mt-3 text-xs flex justify-between items-center text-slate-400 border-t border-slate-800/80 pt-2">
            <span>Biaya Compute:</span>
            <span className="font-mono text-slate-200 font-bold">{formatUSD(finalCompute)}/bln</span>
          </div>
        </div>
      </div>

      {/* Summary Cards Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Current Netlify PaaS */}
        <div className="p-4 rounded-xl bg-gradient-to-b from-teal-950/40 to-slate-950 border border-teal-800/40 relative">
          <div className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 mb-2">
            Status Proyek Saat Ini
          </div>
          <h4 className="text-sm font-semibold text-white">Netlify Free Tier (PaaS)</h4>
          <div className="my-2">
            <div className="text-2xl font-extrabold text-teal-400">$0.00 <span className="text-xs font-normal text-slate-400">/bulan</span></div>
            <div className="text-xs text-slate-400 font-mono">Rp 0 (Zero Cost)</div>
          </div>
          <ul className="text-[11px] text-slate-300 space-y-1.5 mt-3 pt-3 border-t border-slate-800">
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Bandwidth: Max 100 GB/bln</span>
            </li>
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Build Minutes: 300 menit/bln</span>
            </li>
            <li className="flex items-center gap-1.5 text-amber-300/80">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0"></span>
              <span>Keterbatasan: Tidak ada DB & Storage 1TB</span>
            </li>
          </ul>
        </div>

        {/* AWS / GCP Standard Paid Tier */}
        <div className="p-4 rounded-xl bg-gradient-to-b from-slate-950 to-indigo-950/40 border border-indigo-800/50 relative">
          <div className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 mb-2">
            Scale-Up Paid Architecture
          </div>
          <h4 className="text-sm font-semibold text-white">{provider.toUpperCase()} Production Tier</h4>
          <div className="my-2">
            <div className="text-2xl font-extrabold text-white">
              {formatUSD(totalCloudCost)} <span className="text-xs font-normal text-slate-400">/bulan</span>
            </div>
            <div className="text-xs text-indigo-300 font-mono font-medium">{formatIDR(totalCloudCost)}</div>
          </div>
          <div className="space-y-1 mt-3 pt-3 border-t border-slate-800 text-[11px]">
            <div className="flex justify-between text-slate-400">
              <span>Compute ({instances}x Node):</span>
              <span className="font-mono text-slate-200">{formatUSD(finalCompute)}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Storage ({storageTB} TB S3/GCS):</span>
              <span className="font-mono text-slate-200">{formatUSD(finalStorage)}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Egress ({egressTB} TB Network):</span>
              <span className="font-mono text-slate-200">{formatUSD(finalEgress)}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Managed Database + DNS:</span>
              <span className="font-mono text-slate-200">{formatUSD(finalDb + finalOps)}</span>
            </div>
          </div>
        </div>

        {/* FinOps Efficiency Metric */}
        <div className="p-4 rounded-xl bg-gradient-to-b from-slate-950 to-emerald-950/40 border border-emerald-800/40 flex flex-col justify-between">
          <div>
            <div className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 mb-2">
              FinOps Value Optimization
            </div>
            <h4 className="text-sm font-semibold text-white">Potensi Efisiensi Biaya</h4>
            <div className="my-2">
              <div className="text-2xl font-extrabold text-emerald-400">
                {applyOptimizations ? formatUSD(monthlySavings) : '$0.00'}
                <span className="text-xs font-normal text-slate-400">/bln hemat</span>
              </div>
              <div className="text-xs text-emerald-300/80 font-mono">
                {applyOptimizations ? `Hemat ~${((monthlySavings / unoptimizedTotal) * 100).toFixed(0)}% dari tagihan awal` : 'Klik tombol "FinOps Optimization"'}
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-300 space-y-1 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <div className="font-semibold text-white text-[10px] uppercase tracking-wider text-emerald-400">Kunci Penghematan:</div>
            <div>• CDN Caching 70% memangkas egress cost</div>
            <div>• Kompresi WebP memangkas 1TB storage jadi ~350GB</div>
            <div>• 1-Year Savings Plan memotong compute 38%</div>
          </div>
        </div>
      </div>

      {/* Comparison Detailed Breakdown Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800">
            <tr>
              <th className="py-2.5 px-3">Komponen Infrastruktur</th>
              <th className="py-2.5 px-3">Netlify PaaS (Saat Ini)</th>
              <th className="py-2.5 px-3">AWS Standard (1 TB Scale-Up)</th>
              <th className="py-2.5 px-3">GCP Standard (1 TB Scale-Up)</th>
              <th className="py-2.5 px-3">Rekomendasi FinOps</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-mono">
            <tr className="hover:bg-slate-800/30">
              <td className="py-2.5 px-3 font-sans font-medium text-slate-200">
                Compute / Application Runtime
              </td>
              <td className="py-2.5 px-3 text-teal-400 font-bold">$0 (Serverless Edge)</td>
              <td className="py-2.5 px-3 text-slate-300">$49.06 (2x t4g.medium)</td>
              <td className="py-2.5 px-3 text-slate-300">$53.60 (2x e2-medium)</td>
              <td className="py-2.5 px-3 font-sans text-slate-400">Gunakan Cloud Run / Container Auto-sleep saat idle</td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="py-2.5 px-3 font-sans font-medium text-slate-200">
                Object Storage (1 TB Catalog & PDF)
              </td>
              <td className="py-2.5 px-3 text-amber-400">N/A (Terbatas ke Git Repo)</td>
              <td className="py-2.5 px-3 text-slate-300">$23.55 (S3 Standard 1TB)</td>
              <td className="py-2.5 px-3 text-slate-300">$20.48 (GCS Standard 1TB)</td>
              <td className="py-2.5 px-3 font-sans text-slate-400">Lifecycle Rule: Pindah ke Glacier ($1/bln) setelah 90 hari</td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="py-2.5 px-3 font-sans font-medium text-slate-200">
                Outbound Egress (1 TB Data Transfer)
              </td>
              <td className="py-2.5 px-3 text-teal-400">Termasuk (Free s/d 100GB)</td>
              <td className="py-2.5 px-3 text-amber-400 font-bold">$90.00 (AWS Internet Egress)</td>
              <td className="py-2.5 px-3 text-amber-400 font-bold">$85.00 (GCP Internet Egress)</td>
              <td className="py-2.5 px-3 font-sans text-emerald-400 font-bold">Wajib pasang CloudFront / Cloudflare CDN edge cache</td>
            </tr>
            <tr className="hover:bg-slate-800/30">
              <td className="py-2.5 px-3 font-sans font-medium text-slate-200">
                Relational Database (PostgreSQL)
              </td>
              <td className="py-2.5 px-3 text-slate-400">Client LocalStorage</td>
              <td className="py-2.5 px-3 text-slate-300">$35.00 (RDS Aurora db.t4g)</td>
              <td className="py-2.5 px-3 text-slate-300">$38.00 (Cloud SQL Postgres)</td>
              <td className="py-2.5 px-3 font-sans text-slate-400">Gunakan Supabase / Neon Serverless Postgres tier</td>
            </tr>
            <tr className="bg-slate-950/80 font-bold">
              <td className="py-3 px-3 font-sans text-white">TOTAL ESTIMASI PER BULAN</td>
              <td className="py-3 px-3 text-teal-400 text-sm">$0.00 / bln</td>
              <td className="py-3 px-3 text-indigo-400 text-sm">$197.61 / bln</td>
              <td className="py-3 px-3 text-sky-400 text-sm">$197.08 / bln</td>
              <td className="py-3 px-3 font-sans text-emerald-400 text-xs">
                {applyOptimizations ? `Hemat jadi $${totalCloudCost.toFixed(2)}/bln (-58%)` : 'Potensi hemat s/d $85/bln'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
