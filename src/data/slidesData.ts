import { SlideItem, TroubleshootingItem, PromptLogItem, StudentProfile } from '../types';

export const initialStudentProfile: StudentProfile = {
  name: "Moch Rizky Wahyudi",
  nim: "2422416853",
  prodi: "Teknik Informatika / Software Engineering",
  university: "Fakultas Ilmu Komputer & Teknologi Informasi",
  course: "Cloud Computing (2 SKS)",
  lecturer: "Dosen Pengampu Mata Kuliah Cloud Computing",
  githubUrl: "https://github.com/mrizkywahyudi/cloudcart-hub-paas",
  netlifyUrl: "https://cloudcart-hub-demo.netlify.app",
  demoUrl: "https://cloudcart-hub-demo.netlify.app/dashboard.html",
};

export const slidesMeta: SlideItem[] = [
  {
    id: 1,
    title: "CloudCart Hub: Arsitektur Cloud & FinOps",
    subtitle: "Presentasi Analisis Cloud Architecture, Kalkulasi FinOps 1TB & Refleksi Generative AI",
    category: "identitas",
    badge: "Slide 1 • Identitas & Overview",
    estimatedTime: "1-2 Menit",
    presenterNotes: [
      "Buka presentasi dengan salam profesional dan perkenalkan diri (Nama, NIM, Prodi).",
      "Sebutkan judul proyek: CloudCart Hub sebagai platform cloud e-commerce multi-tier.",
      "Tunjukkan tautan live site Netlify dan repositori GitHub yang sudah terhubung CI/CD."
    ]
  },
  {
    id: 2,
    title: "Gambaran Umum Sistem & Flow Diagram Fitur",
    subtitle: "Dekomposisi 5 File HTML & Alur Interaksi Pengguna (User Flow)",
    category: "sistem",
    badge: "Slide 2 • 5 HTML Modules & User Flow",
    estimatedTime: "2-3 Menit",
    presenterNotes: [
      "Jelaskan fungsi spesifik masing-masing dari 5 file HTML: index, dashboard, fitur-sistem, detail-layanan, laporan-data.",
      "Uraikan bagaimana user berinteraksi dari storefront publik hingga manajemen order dan laporan analitik.",
      "Tekankan modularitas client-side rendering tanpa ketergantungan server runtime berat."
    ]
  },
  {
    id: 3,
    title: "Arsitektur Infrastruktur Cloud (PaaS, VCS & CDN)",
    subtitle: "Alur Kerja CI/CD Git → Netlify & Distribusi Cloud Asset Edge",
    category: "arsitektur",
    badge: "Slide 3 • Cloud Architecture (Git + PaaS + CDN)",
    estimatedTime: "2-3 Menit",
    presenterNotes: [
      "Paparkan 3 Layer utama: VCS Layer (GitHub), CI/CD & PaaS Layer (Netlify Edge), dan Cloud Asset Layer (CDN).",
      "Bandingkan keunggulan PaaS vs On-Premises: zero-server maintenance, auto SSL, instant rollback, dan global CDN latency <50ms.",
      "Ini menjawab 80% bobot evaluasi untuk pemahaman arsitektur cloud modern."
    ]
  },
  {
    id: 4,
    title: "Data Architecture & Storage Strategy",
    subtitle: "Transisi dari Client-Side State ke Database Skalabilitas Tinggi",
    category: "database",
    badge: "Slide 4 • Data Architecture & Cloud DB Strategy",
    estimatedTime: "2 Menit",
    presenterNotes: [
      "Jelaskan alur data saat ini: client-side memory, dynamic JSON rendering, dan local persistence.",
      "Paparkan roadmap upgrade jika menjadi sistem dinamis: PostgreSQL (Managed Cloud SQL/Supabase) + Redis In-Memory Caching.",
      "Uraikan penanganan blob storage untuk gambar produk dan faktur menggunakan AWS S3 / Google Cloud Storage."
    ]
  },
  {
    id: 5,
    title: "Analisis Cloud Economics & FinOps (Kalkulasi Scale-Up 1 TB)",
    subtitle: "Simulasi FinOps Lonjakan Beban: Free Tier vs AWS / GCP Paid Tier",
    category: "finops",
    badge: "Slide 5 • FinOps & Cost Calculation (1TB Scale-Up)",
    estimatedTime: "3-4 Menit",
    presenterNotes: [
      "Ini poin penilaian krusial (FinOps Calculation 80% bobot).",
      "Tunjukkan perhitungan riil: 1 TB S3 Storage ($23.55/bln), Compute 2x t4g.medium ($48.18/bln), dan Egress Bandwidth 1 TB ($90.00/bln).",
      "Jelaskan strategi FinOps untuk menekan egress cost dengan CloudFront/Cloudflare caching."
    ]
  },
  {
    id: 6,
    title: "Dokumentasi Prompt AI & Refleksi Generative AI",
    subtitle: "Strategi Prompt Engineering, Evaluasi Kualitas, dan Iterasi Kode",
    category: "ai-prompt",
    badge: "Slide 6 • Generative AI Prompting Logs",
    estimatedTime: "2 Menit",
    presenterNotes: [
      "Tunjukkan kejujuran akademik: cantumkan prompt spesifik ke Gemini/ChatGPT.",
      "Bahas evaluasi hasil: AI sangat cepat membuat wireframe & Tailwind CSS, namun perlu koreksi pada CDN library links dan event listeners.",
      "Sebutkan teknik prompt: Role-based + Constraint-based prompting."
    ]
  },
  {
    id: 7,
    title: "Troubleshooting & Deployment Resolution Log",
    subtitle: "Analisis Kendala Netlify Build, Error 404, dan Broken Path Resolution",
    category: "troubleshooting",
    badge: "Slide 7 • Troubleshooting & Error Log",
    estimatedTime: "2 Menit",
    presenterNotes: [
      "Bahas 4 kendala utama: Error 404 Netlify routing, Path resolution relative vs absolute, Linux case-sensitivity, dan CDN CSP block.",
      "Perlihatkan file konfigurasi solusi (_redirects dan netlify.toml).",
      "Tunjukkan mentalitas problem-solving dan kesiapan deployment industri."
    ]
  },
  {
    id: 8,
    title: "Kesimpulan & Tautan Live Demo",
    subtitle: "Rangkuman Pembelajaran (Key Takeaways) & Evaluasi Proyek",
    category: "kesimpulan",
    badge: "Slide 8 • Key Takeaways & Live Demo",
    estimatedTime: "1-2 Menit",
    presenterNotes: [
      "Simpulkan 3 pilar: Efisiensi PaaS Netlify, Disiplin FinOps saat scale-up, dan Efektivitas AI pair-programming.",
      "Ajak dosen/audiens membuka live site dan repositori GitHub.",
      "Buka sesi tanya jawab dengan percaya diri."
    ]
  },
  {
    id: 9,
    title: "FinOps Optimization Playbook & Cost Guardrails",
    subtitle: "Strategi Penghematan Biaya: CDN Offloading, Reserved Instances & S3 Lifecycle",
    category: "optimasi",
    badge: "Slide 9 • FinOps Best Practices & Guardrails",
    estimatedTime: "1-2 Menit",
    presenterNotes: [
      "Jelaskan bagaimana menghemat hingga 65% pengeluaran cloud di AWS/GCP.",
      "Strategi 1: Caching CDN offload hingga 85% bandwidth.",
      "Strategi 2: Image WebP compression memotong storage 1TB menjadi ~320GB.",
      "Strategi 3: S3 Lifecycle policy transisi invoice lama ke Glacier Deep Archive."
    ]
  },
  {
    id: 10,
    title: "Showcase Interaktif 5 Modul CloudCart Hub",
    subtitle: "Live Explorer & Integrasi Embed Presentation untuk Netlify",
    category: "showcase",
    badge: "Slide 10 • Live System Showcase & Embed Portal",
    estimatedTime: "2 Menit",
    presenterNotes: [
      "Tunjukkan simulasi interaktif 5 file HTML langsung di dalam slide deck ini.",
      "Klik antar halaman (index, dashboard, fitur, layanan, laporan) untuk membuktikan integritas navigasi.",
      "Gunakan tombol Embed Code untuk menyalin iframe siap pasang di Netlify."
    ]
  }
];

export const htmlFilesDetails = [
  {
    fileName: "index.html",
    name: "Storefront & Landing Page",
    badge: "Entrypoint",
    description: "Halaman katalog publik CloudCart Hub dengan hero banner cloud, kategori produk, sistem pencarian instan, dan keranjang belanja interaktif berbasis client-side memory.",
    features: ["Hero Banner & Promo Retail", "Catalog Grid Filter & Search", "Floating Cart Modal", "Responsive Tailwind UI"],
    storageImpact: "Aset gambar produk (~200MB awal, scale-up ke ribuan SKU di S3 Object Storage)",
    cdnAssets: ["Tailwind CSS CDN", "FontAwesome Icons", "Google Fonts (Plus Jakarta Sans)"]
  },
  {
    fileName: "dashboard.html",
    name: "Merchant Cloud Operations",
    badge: "Core Ops",
    description: "Panel kendali merchant e-commerce untuk memantau performa penjualan harian, live status pesanan, inventory cloud stock, dan notifikasi transaksi real-time.",
    features: ["Chart.js Revenue & Order Trends", "KPI Metrics (GMV, Conversion, Cart Abandonment)", "Quick Stock Adjustment", "Merchant Activity Feed"],
    storageImpact: "Log aktivitas & metrik operasional (ditampung dalam Redis in-memory cache)",
    cdnAssets: ["Chart.js v4.4 CDN", "Tailwind CSS", "Lucide Icons"]
  },
  {
    fileName: "fitur-sistem.html",
    name: "Arsitektur & Fitur Platform",
    badge: "System Spec",
    description: "Halaman dokumentasi teknis sistem CloudCart Hub yang merinci kapabilitas multi-tenant, proteksi DDoS via Cloud CDN, enkripsi TLS 1.3, dan webhook payment gateway.",
    features: ["Matrix Komparasi Fitur E-Commerce", "Penjelasan Keamanan Cloud (OWASP)", "Spesifikasi Integrasi API", "Status Sistem Uptime 99.98%"],
    storageImpact: "Dokumentasi statis ultra-ringan (<50KB), 100% di-cache di Edge CDN Netlify",
    cdnAssets: ["Tailwind CSS CDN", "FontAwesome CDN"]
  },
  {
    fileName: "detail-layanan.html",
    name: "Katalog Cloud Tiers & SLA",
    badge: "Service Catalog",
    description: "Katalog spesifikasi paket langganan merchant (Starter, Growth, Cloud Enterprise), SLA 99.99%, alokasi cloud resources, dan simulasi biaya add-on operasional.",
    features: ["Pricing Tier Cards (Starter vs Cloud Pro)", "Interactive Add-on Calculator", "SLA & Disaster Recovery Matrix", "Fulfillment Logistics Partner Support"],
    storageImpact: "Data komparasi paket statis; dynamic tier validation via client-side storage",
    cdnAssets: ["Tailwind CSS CDN", "FontAwesome Icons"]
  },
  {
    fileName: "laporan-data.html",
    name: "Data Hub & Financial Ledger",
    badge: "Data Ledger",
    description: "Pusat rekonsiliasi data transaksi e-commerce, ekspor CSV/PDF rekapitulasi penjualan, tabel mutasi saldo merchant, serta audit log keamanan berbasis filter dinamis.",
    features: ["Tabel Transaksi dengan Filter Tanggal & Status", "Ekspor Laporan Otomatis (CSV/JSON)", "Summary Pajak & Platform Fee", "Pagination & Sorting Tanpa Refresh"],
    storageImpact: "Dataset riwayat transaksi (skala awal client-side JSON, scale-up ke partitioned PostgreSQL table)",
    cdnAssets: ["Chart.js CDN", "Tailwind CSS CDN", "Lucide Icons CDN"]
  }
];

export const troubleshootingLogs: TroubleshootingItem[] = [
  {
    id: "LOG-01",
    issue: "Netlify 404 Page Not Found pada Sub-URL / Direct Refresh",
    symptom: "Saat pengguna merefresh browser di path selain root (misal `/dashboard.html` atau rute dinamis), Netlify merespons HTTP 404.",
    rootCause: "Netlify web server mencari file fisik sesuai URI path. Karena aplikasi menggunakan routing client-side / static mapping tanpa fallback rewrite.",
    solution: "Membuat file konfigurasi `_redirects` di folder publik dengan baris: `/* /index.html 200` atau mapping eksplisit `/_redirects` untuk static multi-pages.",
    status: "Resolved",
    severity: "Critical"
  },
  {
    id: "LOG-02",
    issue: "Case-Sensitive Filename Error pada Netlify Linux CI Runner",
    symptom: "Aplikasi berjalan normal di localhost Windows/macOS, tetapi build Netlify gagal dengan pesan error `Cannot find file './Dashboard.html'`.",
    rootCause: "Sistem operasi Windows dan macOS bersifat case-insensitive, sedangkan container build agent Netlify berjalan di Linux (Ubuntu) yang strictly case-sensitive.",
    solution: "Standardisasi seluruh nama file HTML dan asset menjadi lowercase dengan hyphen (`dashboard.html`, `fitur-sistem.html`, `detail-layanan.html`).",
    status: "Resolved",
    severity: "High"
  },
  {
    id: "LOG-03",
    issue: "Broken Asset Relative Paths setelah Deployment",
    symptom: "CSS, favicon, dan gambar tidak muncul saat halaman `detail-layanan.html` dibuka dari sub-direktori.",
    rootCause: "Penggunaan relative path bertingkat (`../../assets/style.css`) yang tidak konsisten dengan struktur build output Netlify.",
    solution: "Mengganti semua referensi aset menggunakan absolute root path (`/assets/...`) atau CDN link publik dengan secure HTTPS protocol.",
    status: "Resolved",
    severity: "High"
  },
  {
    id: "LOG-04",
    issue: "CORS & Content Security Policy (CSP) Blocking External CDN",
    symptom: "Library Chart.js dan Tailwind CSS gagal dimuat di konsol browser dengan pesan `Refused to load script from cdnjs.cloudflare.com`.",
    rootCause: "Header Content-Security-Policy bawaan template membatasi origin script hanya dari `'self'`.",
    solution: "Menambahkan meta tag CSP atau header netlify.toml yang mengizinkan origin CDN: `script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://cdn.jsdelivr.net`.",
    status: "Optimized",
    severity: "Medium"
  }
];

export const promptLogs: PromptLogItem[] = [
  {
    id: "PR-01",
    phase: "Tahap 1: Desain Arsitektur & Struktur 5 File HTML",
    aiTool: "Gemini 2.5 Pro / ChatGPT-4o",
    promptText: `Bertindaklah sebagai Senior Cloud Architect & Frontend Engineer. Rancang sistem web E-Commerce bernama 'CloudCart Hub' yang terdiri dari 5 file HTML statis modular:
1. index.html (Storefront & Katalog)
2. dashboard.html (Merchant Analytics)
3. fitur-sistem.html (Arsitektur & Spesifikasi Cloud)
4. detail-layanan.html (Cloud Tiers & Pricing)
5. laporan-data.html (Financial & Transaction Hub)
Gunakan Tailwind CSS CDN dan Chart.js CDN. Pastikan clean code, tanpa framework berat agar siap di-deploy instan ke Netlify PaaS.`,
    rawOutputSummary: "AI menghasilkan kerangka 5 file dengan styling Tailwind lengkap dan navigasi antar halaman.",
    manualRefinement: "Melakukan refaktor pada nama file agar lowercase konsisten Linux, menambahkan meta tag viewport responsif, dan menyelaraskan warna tema (Indigo + Slate Cloud).",
    qualityRating: 5,
    tags: ["System Architecture", "HTML5", "Modular Design"]
  },
  {
    id: "PR-02",
    phase: "Tahap 2: Komponen Interaktif & Grafik Dashboard",
    aiTool: "Gemini 2.5 Flash",
    promptText: `Buatkan skrip JavaScript Chart.js untuk dashboard.html CloudCart Hub yang menampilkan:
- Grafik Line Chart: Tren Gross Merchandise Value (GMV) 7 hari terakhir
- Grafik Doughnut: Distribusi kategori penjualan (Cloud SaaS, Digital Goods, Physical Retail)
- Data dummy yang realistis dalam mata uang IDR & USD
Pastikan script tidak blocking render dan grafik responsif pada mobile.`,
    rawOutputSummary: "AI memberikan implementasi Chart.js yang rapi dengan opsi responsive: true.",
    manualRefinement: "Menyesuaikan gradient background canvas, menambahkan custom tooltip currency formatter IDR (Rp), dan membungkus inisialisasi chart dalam event DOMContentLoaded.",
    qualityRating: 4,
    tags: ["Chart.js", "Data Visualization", "JavaScript"]
  },
  {
    id: "PR-03",
    phase: "Tahap 3: FinOps 1TB Cloud Cost Model Calculation",
    aiTool: "Claude 3.5 Sonnet / Gemini Pro",
    promptText: `Hitung estimasi rincian biaya bulanan (FinOps) jika sistem e-commerce ini di-scale up ke public cloud (AWS us-east-1) dengan parameter beban:
- Volume Cloud Storage: 1 Terabyte (1 TB) foto produk dan invoice PDF
- Outbound Egress Bandwidth: 1 Terabyte (1 TB) per bulan
- Compute: 2 instance t4g.medium (2 vCPU, 4GB RAM)
Bandingkan dengan biaya Free Tier Netlify saat ini. Sajikan dalam format tabel markdown analitis.`,
    rawOutputSummary: "AI memberikan kalkulasi S3 Standard $23/bln, EC2 $48/bln, dan Bandwidth $90/bln dengan total ~$161/bln.",
    manualRefinement: "Menambahkan breakdown backup Glacier Deep Archive ($1/bln), biaya DNS Route53 ($0.50), serta rekomendasi penghematan FinOps (CloudFront caching & image compression).",
    qualityRating: 5,
    tags: ["FinOps", "Cloud Economics", "AWS Cost Analysis"]
  }
];
