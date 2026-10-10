import React from 'react';
import { AlertCircle, CheckCircle2, FileCode, Wrench, ShieldAlert } from 'lucide-react';
import { troubleshootingLogs } from '../data/slidesData';

export const TroubleshootingTable: React.FC = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs tracking-wider uppercase mb-1">
            <Wrench className="w-4 h-4" />
            <span>Troubleshooting &amp; Deployment Log • Slide 7</span>
          </div>
          <h3 className="text-xl font-bold text-white">Log Kendala Teknis Deployment Netlify &amp; Solusi Rekayasa</h3>
          <p className="text-xs text-slate-400 mt-1">
            Rekam jejak error nyata selama proses CI/CD hingga tercapai status deployment 100% Build Success.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-lg border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Semua Masalah Teratasi (4/4 Resolved)</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {troubleshootingLogs.map((item) => (
          <div key={item.id} className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {item.id}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.severity === 'Critical' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                    item.severity === 'High' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                    'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {item.severity}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {item.status}
                  </span>
                </div>
              </div>

              <h4 className="text-sm font-bold text-white mb-2">{item.issue}</h4>

              {/* Symptom & Root Cause */}
              <div className="space-y-2 text-xs">
                <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80 text-rose-300/90 font-mono text-[11px]">
                  <strong className="text-rose-400 font-sans">Gejala Error: </strong>
                  {item.symptom}
                </div>
                <div className="text-slate-400 text-xs">
                  <strong className="text-slate-200">Akar Masalah (Root Cause): </strong>
                  {item.rootCause}
                </div>
              </div>
            </div>

            {/* Solution Box */}
            <div className="mt-4 pt-3 border-t border-slate-800/80">
              <div className="text-xs text-emerald-300 bg-emerald-950/20 border border-emerald-800/40 p-2.5 rounded-lg">
                <strong className="text-emerald-400 flex items-center gap-1 mb-1">
                  <Wrench className="w-3.5 h-3.5" />
                  Solusi &amp; Tindakan Perbaikan:
                </strong>
                <span className="text-[11px] text-slate-200 leading-relaxed font-mono">
                  {item.solution}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Netlify Config snippet */}
      <div className="mt-6 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
            <FileCode className="w-4 h-4 text-teal-400" />
            File Konfigurasi Netlify Penuntas Error 404: <code>public/_redirects</code>
          </span>
          <span className="text-[10px] font-mono text-slate-500">HTTP Status 200 Rewrite</span>
        </div>
        <pre className="bg-slate-900 p-3 rounded-lg text-xs font-mono text-emerald-300 border border-slate-800/80 overflow-x-auto">
{`# Solusi Netlify Multi-Page & Client Rewrite
/api/*          https://api.cloudcart.internal/:splat  200!
/*              /index.html                            200`}
        </pre>
      </div>
    </div>
  );
};
