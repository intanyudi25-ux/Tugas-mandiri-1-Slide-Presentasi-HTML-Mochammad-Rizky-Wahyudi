import React, { useState } from 'react';
import { ShoppingCart, LayoutDashboard, Layers, ShieldCheck, FileSpreadsheet, ExternalLink, RefreshCw, Check, ArrowRight, Eye, Code, Search, Plus } from 'lucide-react';

export const CloudCartAppPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'index' | 'dashboard' | 'fitur' | 'layanan' | 'laporan'>('index');
  const [cartCount, setCartCount] = useState<number>(3);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewCode, setViewCode] = useState<boolean>(false);

  const mockProducts = [
    { id: 1, name: "Cloud VPS High Memory 8GB", category: "Cloud SaaS", price: "Rp 320.000/bln", stock: 45, rating: 4.9 },
    { id: 2, name: "SSL Wildcard Certificate (1 Yr)", category: "Security", price: "Rp 650.000", stock: 120, rating: 4.8 },
    { id: 3, name: "Storage S3 Bucket 500GB", category: "Storage", price: "Rp 180.000/bln", stock: 80, rating: 4.7 },
    { id: 4, name: "Managed Redis Cluster Cache", category: "Database", price: "Rp 450.000/bln", stock: 24, rating: 5.0 },
  ];

  const mockTransactions = [
    { id: "TX-9021", date: "2026-10-10", customer: "PT Digital Solusindo", service: "Cloud VPS 8GB", amount: "Rp 3.840.000", status: "Completed" },
    { id: "TX-9022", date: "2026-10-10", customer: "Studio Kreasi Asia", service: "S3 Bucket 1TB", amount: "Rp 4.320.000", status: "Processing" },
    { id: "TX-9023", date: "2026-10-09", customer: "Fintech Prima Mandiri", service: "Redis Cluster", amount: "Rp 5.400.000", status: "Completed" },
    { id: "TX-9024", date: "2026-10-09", customer: "EduTech Nusantara", service: "SSL Wildcard", amount: "Rp 650.000", status: "Completed" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Browser Bar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="ml-2 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            https://cloudcart-hub-demo.netlify.app/{activeTab === 'index' ? 'index.html' : `${activeTab}-sistem.html`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewCode(!viewCode)}
            className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1.5"
          >
            <Code className="w-3.5 h-3.5" />
            <span>{viewCode ? "Tampilan Web" : "Kode Sumber HTML"}</span>
          </button>
        </div>
      </div>

      {/* 5 HTML File Tabs */}
      <div className="bg-slate-950/60 px-4 pt-2 border-b border-slate-800 flex overflow-x-auto gap-1">
        {[
          { id: 'index', file: 'index.html', title: 'Storefront & Katalog', icon: ShoppingCart },
          { id: 'dashboard', file: 'dashboard.html', title: 'Merchant Operations', icon: LayoutDashboard },
          { id: 'fitur', file: 'fitur-sistem.html', title: 'Arsitektur & Fitur', icon: Layers },
          { id: 'layanan', file: 'detail-layanan.html', title: 'Detail Layanan & SLA', icon: ShieldCheck },
          { id: 'laporan', file: 'laporan-data.html', title: 'Laporan Data Hub', icon: FileSpreadsheet },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-t-lg transition-all flex items-center gap-2 shrink-0 border-t border-x ${
                isActive
                  ? 'bg-slate-900 text-indigo-400 border-indigo-500/40 border-b-transparent shadow'
                  : 'bg-transparent text-slate-400 hover:text-slate-200 border-transparent'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
              <span>{tab.file}</span>
            </button>
          );
        })}
      </div>

      {/* Simulator Content Area */}
      <div className="p-6 bg-slate-900 min-h-[380px] max-h-[500px] overflow-y-auto">
        {viewCode ? (
          <div className="font-mono text-xs text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto">
            <div className="text-slate-500 mb-2">// Cuplikan Struktur {activeTab}.html (PaaS Cloud Optimized)</div>
            {activeTab === 'index' && (
              <pre>{`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CloudCart Hub - Cloud E-Commerce Storefront</title>
  <!-- Tailwind CSS & Font CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-slate-950 text-slate-100">
  <!-- Global Navigation & Cart Counter -->
  <header class="border-b border-slate-800 px-6 py-4 flex justify-between items-center">
    <div class="text-xl font-bold text-indigo-400">CloudCart Hub</div>
    <div class="flex items-center gap-4">
      <a href="dashboard.html" class="hover:text-indigo-300">Dashboard</a>
      <a href="fitur-sistem.html" class="hover:text-indigo-300">Fitur</a>
      <div class="relative cursor-pointer" onclick="toggleCart()">
        <i class="fa-solid fa-cart-shopping"></i>
        <span id="cartCount" class="absolute -top-2 -right-2 bg-indigo-500 text-xs px-1.5 rounded-full">3</span>
      </div>
    </div>
  </header>
  ...
</body>
</html>`}</pre>
            )}

            {activeTab === 'dashboard' && (
              <pre>{`<!DOCTYPE html>
<html lang="id">
<head>
  <title>CloudCart Hub - Merchant Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-slate-950 text-slate-100">
  <!-- Real-time Chart.js Integration -->
  <canvas id="revenueChart"></canvas>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const ctx = document.getElementById('revenueChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
          datasets: [{ label: 'GMV (Juta IDR)', data: [12, 19, 15, 24, 28, 35, 42], borderColor: '#6366f1' }]
        }
      });
    });
  </script>
</body>
</html>`}</pre>
            )}

            {activeTab === 'fitur' && (
              <pre>{`<!-- fitur-sistem.html: Arsitektur Multi-tenant & Security Matrix -->
<section class="max-w-6xl mx-auto py-12">
  <h2 class="text-2xl font-bold text-white mb-4">Arsitektur Multi-Tenant Cloud</h2>
  <div class="grid grid-cols-3 gap-6">
    <div class="p-6 bg-slate-900 rounded-xl border border-slate-800">
      <h3 class="font-bold text-indigo-400">Edge Caching</h3>
      <p class="text-sm text-slate-400">Netlify High-Performance Edge menyajikan HTML statis dalam waktu &lt;30ms.</p>
    </div>
    ...
  </div>
</section>`}</pre>
            )}

            {activeTab === 'layanan' && (
              <pre>{`<!-- detail-layanan.html: Cloud Tiers & SLA Catalog -->
<div class="grid grid-cols-3 gap-6">
  <!-- Starter Tier -->
  <div class="p-6 border border-slate-800 rounded-xl">
    <h3 class="text-xl font-bold">Starter Free</h3>
    <div class="text-3xl font-extrabold my-2">Rp 0</div>
    <p>100 Transaksi / Bulan, SLA 99.5%</p>
  </div>
  <!-- Cloud Pro Tier -->
  <div class="p-6 border border-indigo-500 rounded-xl bg-indigo-950/20">
    <h3 class="text-xl font-bold text-indigo-400">Cloud Growth</h3>
    <div class="text-3xl font-extrabold my-2">Rp 450.000</div>
    <p>Unlimited Catalog, Dedicated Redis, SLA 99.9%</p>
  </div>
</div>`}</pre>
            )}

            {activeTab === 'laporan' && (
              <pre>{`<!-- laporan-data.html: Ledger Transaksi & CSV Export -->
<script>
  function exportCSV() {
    const data = [ ["ID", "Customer", "Total", "Status"], ... ];
    let csvContent = "data:text/csv;charset=utf-8," + data.map(e => e.join(",")).join("\\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "cloudcart_laporan_data.csv");
    link.click();
  }
</script>`}</pre>
            )}
          </div>
        ) : (
          <div>
            {/* INDEX: Storefront Simulator */}
            {activeTab === 'index' && (
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>Cloud Retail Storefront</span>
                      <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30">
                        Live Client Preview
                      </span>
                    </h4>
                    <p className="text-xs text-slate-400">Katalog layanan cloud &amp; produk digital dengan keranjang dinamis.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
                      <input
                        type="text"
                        placeholder="Cari SKU cloud..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div className="bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-indigo-400" />
                      <span>Keranjang: {cartCount} Item</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                  {mockProducts.map((p) => (
                    <div key={p.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-slate-700 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-medium text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                            {p.category}
                          </span>
                          <span className="text-[10px] text-amber-400 font-bold">★ {p.rating}</span>
                        </div>
                        <h5 className="text-sm font-semibold text-white mb-1">{p.name}</h5>
                        <div className="text-indigo-400 font-bold text-sm mb-3">{p.price}</div>
                      </div>
                      <button
                        onClick={() => setCartCount(cartCount + 1)}
                        className="w-full py-1.5 text-xs rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Tambah ke Keranjang</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DASHBOARD: Merchant Operations */}
            {activeTab === 'dashboard' && (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-5">
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-400">Total GMV (Bulan Ini)</div>
                    <div className="text-xl font-bold text-white mt-1">Rp 148.500.000</div>
                    <div className="text-[10px] text-emerald-400 mt-1">↑ +18.4% vs bulan lalu</div>
                  </div>
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-400">Total Transaksi Selesai</div>
                    <div className="text-xl font-bold text-white mt-1">1.428 Order</div>
                    <div className="text-[10px] text-emerald-400 mt-1">↑ 99.8% Payment Success</div>
                  </div>
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-400">Edge Cache Hit Ratio</div>
                    <div className="text-xl font-bold text-teal-400 mt-1">89.2%</div>
                    <div className="text-[10px] text-slate-400 mt-1">Netlify CDN PoP SG/ID</div>
                  </div>
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-400">System Uptime (SLA)</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">99.98%</div>
                    <div className="text-[10px] text-emerald-400 mt-1">Normal • Zero Incidents</div>
                  </div>
                </div>

                {/* Simulated Chart Container */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-xs font-bold text-slate-200">Tren Volume Penjualan 7 Hari Terakhir (Chart.js Visualization)</h5>
                    <span className="text-[10px] text-indigo-400 font-mono">CDN Loaded v4.4.0</span>
                  </div>
                  <div className="h-32 flex items-end gap-3 pt-4 px-2">
                    {[
                      { day: 'Sen', val: 40, amt: 'Rp 14M' },
                      { day: 'Sel', val: 65, amt: 'Rp 22M' },
                      { day: 'Rab', val: 55, amt: 'Rp 18M' },
                      { day: 'Kam', val: 80, amt: 'Rp 31M' },
                      { day: 'Jum', val: 95, amt: 'Rp 38M' },
                      { day: 'Sab', val: 70, amt: 'Rp 26M' },
                      { day: 'Min', val: 85, amt: 'Rp 33M' },
                    ].map((bar, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 group">
                        <span className="text-[9px] text-indigo-300 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                          {bar.amt}
                        </span>
                        <div
                          className="w-full bg-gradient-to-t from-indigo-600 to-teal-400 rounded-t-md transition-all hover:brightness-125"
                          style={{ height: `${bar.val}%` }}
                        ></div>
                        <span className="text-[10px] text-slate-400">{bar.day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* FITUR: Architecture & Specs */}
            {activeTab === 'fitur' && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white mb-2">Spesifikasi Arsitektur Cloud &amp; Keamanan</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold mb-3">
                      1
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">PaaS Auto-Atomic Deploy</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Setiap push ke branch main diuji dan di-build dalam container terisolasi Netlify dengan instant rollbacks jika terjadi failure.
                    </p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold mb-3">
                      2
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">Global Edge Asset Delivery</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Semua dependency CSS/JS di-fetch dari multi-CDN tier (Cloudflare, jsDelivr, unpkg) dengan cache TTL 365 hari.
                    </p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold mb-3">
                      3
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">Enterprise Security &amp; TLS 1.3</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Sertifikat SSL Let's Encrypt terpasang otomatis, dilengkapi proteksi header CSP, HSTS, dan Anti-DDoS rate limiting.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* LAYANAN: Tiers & SLA */}
            {activeTab === 'layanan' && (
              <div>
                <h4 className="text-sm font-bold text-white mb-3">Katalog Layanan &amp; Service Level Agreement (SLA)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Starter Tier</span>
                    <h5 className="text-base font-bold text-white mt-1">PaaS Community</h5>
                    <div className="text-xl font-extrabold text-teal-400 my-2">Rp 0 <span className="text-xs text-slate-400">/bulan</span></div>
                    <ul className="text-xs text-slate-400 space-y-1.5">
                      <li>• Kuota 100 GB Bandwidth</li>
                      <li>• Max 50 SKU Produk</li>
                      <li>• SLA Garansi 99.5%</li>
                    </ul>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/50 bg-indigo-950/20">
                    <span className="text-[10px] text-indigo-400 font-bold uppercase">Growth Tier</span>
                    <h5 className="text-base font-bold text-white mt-1">Cloud Pro Business</h5>
                    <div className="text-xl font-extrabold text-indigo-300 my-2">Rp 450.000 <span className="text-xs text-slate-400">/bulan</span></div>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li>• Kuota 1 TB Bandwidth</li>
                      <li>• Unlimited SKU Katalog</li>
                      <li>• SLA Garansi 99.9%</li>
                    </ul>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-amber-400 font-bold uppercase">Enterprise Tier</span>
                    <h5 className="text-base font-bold text-white mt-1">Dedicated Multi-AZ</h5>
                    <div className="text-xl font-extrabold text-amber-400 my-2">Rp 2.800.000 <span className="text-xs text-slate-400">/bulan</span></div>
                    <ul className="text-xs text-slate-400 space-y-1.5">
                      <li>• Multi-Cloud Failover</li>
                      <li>• Dedicated 1 TB S3 + Redis</li>
                      <li>• SLA FinOps 99.99%</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* LAPORAN: Data Hub & Ledger */}
            {activeTab === 'laporan' && (
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-sm font-bold text-white">Ledger Data Transaksi &amp; Rekonsiliasi Keuangan</h4>
                  <button
                    onClick={() => alert("Simulasi Ekspor CSV Berhasil: File cloudcart_transaksi_2026.csv diunduh!")}
                    className="text-xs px-3 py-1 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-medium flex items-center gap-1.5"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>Ekspor CSV Data</span>
                  </button>
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-950 text-slate-400 text-[10px] uppercase">
                      <tr>
                        <th className="py-2.5 px-3">Order ID</th>
                        <th className="py-2.5 px-3">Tanggal</th>
                        <th className="py-2.5 px-3">Pelanggan</th>
                        <th className="py-2.5 px-3">Layanan Cloud</th>
                        <th className="py-2.5 px-3">Nominal</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 font-mono">
                      {mockTransactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-slate-800/40">
                          <td className="py-2 px-3 text-indigo-400 font-bold">{tx.id}</td>
                          <td className="py-2 px-3 text-slate-400">{tx.date}</td>
                          <td className="py-2 px-3 font-sans text-slate-200">{tx.customer}</td>
                          <td className="py-2 px-3 font-sans text-slate-300">{tx.service}</td>
                          <td className="py-2 px-3 text-emerald-400 font-bold">{tx.amount}</td>
                          <td className="py-2 px-3">
                            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                              tx.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                            }`}>
                              {tx.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
