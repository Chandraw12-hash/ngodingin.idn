/**
 * Dictionary terpusat — Indonesia (default) + English.
 * `en` bertipe `typeof id` supaya kalau ada key kurang, build gagal.
 */

const id = {
  nav: {
    links: [
      { label: "Layanan",   href: "#layanan" },
      { label: "Proses",    href: "#proses" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Harga",     href: "#harga" },
      { label: "Testimoni", href: "#testimoni" },
      { label: "Tentang",   href: "#tentang" },
    ],
    cta: "Kontak",
    drawerCta: "Konsultasi Gratis",
    drawerNote: "Respon cepat <1 jam ⚡",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    navLabel: "Navigasi utama",
    drawerLabel: "Menu navigasi",
    drawerNavLabel: "Menu mobile",
    langGroup: "Pilih bahasa",
    homeLabel: "ngodingin.id — halaman utama",
  },

  hero: {
    sectionLabel: "Hero — ngodingin.id",
    kicker: "Jasa Pembuatan Website · UMKM Indonesia",
    titleA: "Website yang",
    titleAccent: "benar-benar",
    titleB: "bekerja untuk bisnis kamu.",
    desc: "ngodingin.id membantu UMKM, sekolah, dan startup Indonesia tampil lebih terpercaya lewat website yang cepat, rapi, dan mudah dikelola — dari company profile sampai fullstack custom.",
    links: [
      { label: "Lihat layanan",   href: "#layanan" },
      { label: "Lihat portfolio", href: "#portfolio" },
      { label: "Lihat harga",     href: "#harga" },
    ],
    ctaPrimary: "Konsultasi Gratis",
    ctaSecondary: "Paket & Harga",
    meta: [
      { label: "Harga",  value: "Mulai Rp 500rb" },
      { label: "Durasi", value: "≤ 14 hari" },
      { label: "Fokus",  value: "Company Profile · Landing Page · Fullstack App" },
    ],
    waAria: "Konsultasi gratis via WhatsApp (buka tab baru)",
    priceAria: "Lihat paket dan harga",
  },

  visual: {
    caption: "Fig 01 — Proses build website",
    brand: "ngodingin.id",
    alt: "Animasi proses ngodingin.id membangun dan meluncurkan website bisnis",
    miniNav: "Kontak",
    miniPrimary: "Konsultasi",
    miniSecondary: "Harga",
    deploy: "Deploy",
    building: "Membangun…",
    live: "Live ✓",
    badge1: "Lighthouse 98",
    badge2: "Mobile First",
  },

  marquee: {
    label: "Teknologi yang kami gunakan",
  },

  services: {
    num: "02",
    kicker: "Layanan",
    title: "Solusi lengkap untuk bisnis Anda.",
    subtitle: "Dari company profile hingga website sekolah — kami bantu wujudkan digital presence yang sesuai kebutuhan bisnis Anda.",
    headingId: "services-heading",
    listLabel: "Layanan inti",
    items: [
      {
        title: "Company Profile",
        desc: "Tampilkan profil bisnis, layanan, dan portofolio Anda secara profesional di satu tempat.",
      },
      {
        title: "Website Sekolah & Instansi",
        desc: "Website resmi dengan manajemen berita, data guru/siswa, galeri, dan dashboard admin.",
      },
      {
        title: "Landing Page",
        desc: "Halaman fokus konversi untuk campaign, promo, atau peluncuran produk baru.",
      },
    ],
    includedLabel: "Sudah termasuk",
    includedAria: "Sudah termasuk di semua paket",
    included: [
      "Responsive di semua device",
      "Loading cepat & teroptimasi",
      "Support pasca-launch",
    ],
  },

  process: {
    num: "03",
    kicker: "Proses",
    title: "Cara kerja kami.",
    subtitle: "Transparan dari awal sampai live — kamu selalu tahu posisi project, tanpa drama vendor.",
    headingId: "process-heading",
    listLabel: "Langkah kerja",
    steps: [
      {
        title: "Konsultasi",
        desc: "Ceritakan kebutuhan bisnis kamu. Kami usulkan solusi, paket, dan estimasi biaya yang jelas — gratis, tanpa komitmen.",
        timing: "Hari ke-1",
      },
      {
        title: "Desain",
        desc: "Susun struktur halaman dan desain antarmuka. Kamu review dulu sebelum satu baris kode pun ditulis.",
        timing: "Hari ke-2–3",
      },
      {
        title: "Development",
        desc: "Coding fullstack: halaman, konten, integrasi peta, form, dan fitur lainnya. Update progres via WhatsApp.",
        timing: "Hari ke-4–12",
      },
      {
        title: "Launch",
        desc: "Deploy ke domain & hosting, pasang SSL, setting SEO dasar, lalu serah terima singkat beserta dokumentasinya.",
        timing: "Hari ke-13–14",
      },
    ],
  },

  portfolio: {
    num: "04",
    kicker: "Portfolio",
    title: "Proyek pilihan.",
    subtitle: "Beberapa project yang sudah kami kerjakan untuk UMKM, sekolah, dan instansi di Indonesia.",
    headingId: "portfolio-heading",
    listLabel: "Daftar project",
    projects: [
      {
        category: "Sistem Informasi Desa",
        description:
          "Sistem informasi desa digital — surat online, booking fasilitas, pengaduan + peta, dan notifikasi WhatsApp.",
      },
      {
        category: "Education",
        description:
          "Website resmi sekolah dengan manajemen berita, galeri, data guru & siswa, dan dashboard admin.",
      },
      {
        category: "Landing Page",
        description:
          "Landing page modern untuk bengkel dengan booking service online dan testimoni pelanggan.",
      },
      {
        category: "Web Application",
        description:
          "Aplikasi web untuk digitalisasi layanan administrasi desa — pengajuan surat online dan pengelolaan data pelayanan.",
      },
      {
        category: "Monitoring Kesehatan",
        description:
          "Aplikasi Laravel untuk pengelolaan data balita, ibu hamil, dan monitoring status gizi secara terpusat.",
      },
      {
        category: "Project berikutnya",
        description:
          "Slot ini menunggu project Anda. Ceritakan kebutuhan website bisnis kamu, dan kami wujudkan.",
        title: "Website bersama kami",
        ctaBadge: "Konsultasi sekarang ↗",
      },
    ],
    visit: "Kunjungi website",
    visitAria: "Lihat project",
    cardAria: "Project",
  },

  pricing: {
    num: "05",
    kicker: "Harga",
    title: "Pilih sesuai kebutuhan.",
    subtitle: "Harga transparan, konsultasi gratis sebelum order. Khusus mahasiswa bisa nego & cicil.",
    headingId: "pricing-heading",
    listLabel: "Daftar paket harga",
    popularNote: "Paling dipilih",
    durationPrefix: "Selesai dalam",
    cta: "Pilih Paket Ini",
    ctaAria: "Pilih paket via WhatsApp",
    plans: [
      {
        name: "Mahasiswa",
        description: "Untuk portofolio, tugas akhir, atau UKM",
        features: [
          "Landing page / 1 halaman",
          "Desain modern & responsive",
          "Form kontak / tombol WhatsApp",
          "Revisi 2x",
          "Tanpa domain & hosting",
        ],
      },
      {
        name: "Standar",
        description: "Company profile + domain & hosting",
        features: [
          "Multi halaman (Home, Tentang, Layanan, Kontak)",
          "Katalog produk / portfolio",
          "Google Maps integrasi",
          "Domain .id / .com gratis 1 tahun",
          "Hosting ringan 1 tahun",
          "Revisi 3x",
        ],
      },
      {
        name: "Profesional",
        description: "Fitur custom sesuai kebutuhan bisnis kamu",
        features: [
          "Semua fitur Standar",
          "Toko online / sistem booking",
          "Dashboard admin sederhana",
          "Domain & hosting 1 tahun",
          "Revisi unlimited",
          "Support prioritas",
          "Fitur tambahan sesuai request",
        ],
      },
    ],
    footnote:
      "* Domain & hosting bisa ditambahkan sesuai kebutuhan. Konsultasi pertama gratis tanpa komitmen — hubungi kami via WhatsApp untuk diskusi.",
  },

  testimonials: {
    num: "06",
    kicker: "Testimoni",
    title: "Apa kata mereka.",
    subtitle: "Dipercaya oleh klien UMKM, sekolah, dan pelaku bisnis lokal Indonesia.",
    headingId: "testimonials-heading",
    listLabel: "Daftar testimoni klien",
    ratingAria: "Penilaian",
    items: [
      {
        name: "Tim Manajemen Sekolah",
        role: "SMP Negeri 3 Lubuk Pakam",
        text: "Hasilnya rapi dan profesional banget. Prosesnya juga cepet, komunikasi lancar dari awal sampai selesai.",
      },
      {
        name: "Dewi Sartika",
        role: "Pemilik Toko Fashion Lokal",
        text: "Awalnya ragu mau bikin website, tapi setelah konsultasi langsung paham. Website-nya sesuai ekspektasi, desain clean dan enak dilihat.",
      },
      {
        name: "Fajar Nugroho",
        role: "Mahasiswa & Pelaku UMKM",
        text: "Dikerjain beneran dari nol, bukan template asal pakai. Codenya juga rapi jadi gampang kalau mau dikembangin lagi ke depannya.",
      },
    ],
  },

  faq: {
    num: "07",
    kicker: "FAQ",
    title: "Pertanyaan yang sering ditanyakan.",
    subtitle: "Tidak menemukan jawaban yang kamu cari? Langsung tanya via WhatsApp.",
    headingId: "faq-heading",
    listLabel: "Daftar pertanyaan",
    cta: "Tanya via WhatsApp",
    ctaAria: "Tanya via WhatsApp (buka tab baru)",
    items: [
      {
        q: "Berapa lama website selesai?",
        a: "Tergantung paket yang dipilih. Paket Mahasiswa selesai dalam 1 minggu, paket Standar dan Profesional dalam 2 minggu. Durasi bisa lebih cepat tergantung kelengkapan materi dari kamu.",
      },
      {
        q: "Apakah bisa cicil atau nego harga?",
        a: "Bisa. Khusus paket Mahasiswa harga sangat fleksibel dan bisa cicil. Untuk paket lain silakan konsultasi dulu via WhatsApp — kami terbuka untuk diskusi.",
      },
      {
        q: "Revisi itu maksudnya gimana?",
        a: "Revisi adalah perubahan desain atau konten setelah website selesai dibuat. Jumlah revisi sesuai paket — Mahasiswa 2x, Standar 3x, Profesional unlimited. Satu sesi revisi bisa mencakup beberapa perubahan sekaligus.",
      },
      {
        q: "Apakah saya perlu menyiapkan materi sendiri?",
        a: "Iya, kamu perlu menyiapkan teks konten, foto, dan logo bisnis kamu. Kami akan bantu susun dan desainnya. Kalau belum punya foto, kami bisa bantu cari alternatif foto dari library gratis.",
      },
      {
        q: "Domain dan hosting diurus sendiri atau bantu setup?",
        a: "Kami bantu setup semuanya dari awal sampai website live. Paket Standar dan Profesional sudah termasuk domain dan hosting 1 tahun. Paket Mahasiswa bisa ditambahkan dengan biaya terpisah.",
      },
      {
        q: "Setelah website jadi, siapa yang maintenance?",
        a: "Kami menyediakan support pasca-launch via WhatsApp. Untuk update konten kecil-kecilan biasanya bisa kami bantu gratis. Untuk perubahan besar bisa didiskusikan terpisah.",
      },
      {
        q: "Teknologi apa yang dipakai?",
        a: "Kami pakai Next.js atau Laravel tergantung kebutuhan. Semua website dioptimasi untuk kecepatan loading, SEO dasar, dan tampil sempurna di semua perangkat.",
      },
    ],
  },

  about: {
    num: "08",
    kicker: "Tentang",
    title: "Partner digital untuk UMKM.",
    subtitle: "Kami percaya setiap bisnis berhak punya website profesional — tanpa mahal, tanpa ribet.",
    headingId: "about-heading",
    p1: "ngodingin.id hadir sebagai solusi pembuatan website untuk UMKM Indonesia yang ingin naik kelas. Setiap project ditangani secara fullstack — dari desain antarmuka, pengembangan sistem, hingga deploy ke server — dengan komunikasi langsung tanpa perantara.",
    p2: "Dari company profile, landing page, hingga website resmi sekolah dan instansi — kami siap membantu bisnis Anda tampil lebih profesional dan menjangkau lebih banyak pelanggan.",
    cta1: "Lihat Paket",
    cta2: "Konsultasi Gratis",
    cta2Aria: "Konsultasi gratis via WhatsApp (buka tab baru)",
    whyLabel: "Kenapa kami",
    valuesAria: "Keunggulan kami",
    values: [
      { title: "Terpercaya",  desc: "Dipercaya klien UMKM & instansi di Indonesia" },
      { title: "Tepat Waktu", desc: "Pengerjaan sesuai deadline yang disepakati" },
      { title: "Fullstack",   desc: "End-to-end, dari desain sampai deploy" },
      { title: "Berkualitas", desc: "Kode bersih dan terstruktur dengan baik" },
    ],
    statsAria: "Statistik kami",
    stats: [
      { label: "Project selesai" },
      { label: "Klien puas" },
      { label: "Hari pengerjaan" },
      { label: "Dukungan" },
    ],
  },

  cta: {
    num: "09",
    kicker: "Mulai project",
    headingId: "cta-heading",
    title: "Punya ide website? Mari wujudkan.",
    desc: "Konsultasi pertama gratis — ceritakan kebutuhanmu, kami bantu tentukan paket dan estimasi yang paling masuk akal.",
    primary: "Konsultasi Gratis",
    secondary: "Lihat Paket & Harga",
    note: "Respon <1 jam · Tanpa komitmen",
    waAria: "Konsultasi gratis via WhatsApp (buka tab baru)",
  },

  footer: {
    label: "Footer",
    homeLabel: "ngodingin.id — halaman utama",
    desc: "Jasa pembuatan website profesional untuk UMKM dan bisnis Indonesia — aman, rapi, dan beres tepat waktu.",
    socialsLabel: "Media sosial",
    socialInstagram: "Instagram ngodingin.id",
    socialEmail: "Email ngodingin.id",
    tabNote: "(buka tab baru)",
    rights: "ngodingin.id — All rights reserved.",
    built: "Next.js · Laravel · Tailwind CSS",
    groups: {
      layanan: {
        heading: "Layanan",
        items: [
          { label: "Company Profile",  href: "#layanan" },
          { label: "Website Sekolah",  href: "#layanan" },
          { label: "Landing Page",     href: "#layanan" },
        ],
      },
      navigasi: {
        heading: "Navigasi",
        items: [
          { label: "Proses",     href: "#proses" },
          { label: "Portfolio",  href: "#portfolio" },
          { label: "Harga",      href: "#harga" },
          { label: "Testimoni",  href: "#testimoni" },
          { label: "FAQ",        href: "#faq" },
          { label: "Tentang",    href: "#tentang" },
        ],
      },
      kontak: {
        heading: "Kontak",
        items: [{ label: "Konsultasi WhatsApp", href: "WA" }],
      },
    },
  },
};

type DictShape = typeof id;

const en: DictShape = {
  nav: {
    links: [
      { label: "Services",   href: "#layanan" },
      { label: "Process",    href: "#proses" },
      { label: "Portfolio",  href: "#portfolio" },
      { label: "Pricing",    href: "#harga" },
      { label: "Testimonials", href: "#testimoni" },
      { label: "About",      href: "#tentang" },
    ],
    cta: "Contact",
    drawerCta: "Free Consultation",
    drawerNote: "Replies in <1 hour ⚡",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navLabel: "Main navigation",
    drawerLabel: "Navigation menu",
    drawerNavLabel: "Mobile menu",
    langGroup: "Choose language",
    homeLabel: "ngodingin.id — homepage",
  },

  hero: {
    sectionLabel: "Hero — ngodingin.id",
    kicker: "Website Development · Indonesian SMBs",
    titleA: "Websites that",
    titleAccent: "actually work",
    titleB: "for your business.",
    desc: "ngodingin.id helps Indonesian SMBs, schools, and startups look more credible with a website that is fast, tidy, and easy to manage — from company profiles to custom fullstack builds.",
    links: [
      { label: "View services",   href: "#layanan" },
      { label: "View portfolio",  href: "#portfolio" },
      { label: "View pricing",    href: "#harga" },
    ],
    ctaPrimary: "Free Consultation",
    ctaSecondary: "Packages & Pricing",
    meta: [
      { label: "Price",    value: "From Rp 500k" },
      { label: "Timeline", value: "≤ 14 days" },
      { label: "Focus",    value: "Company Profile · Landing Page · Fullstack App" },
    ],
    waAria: "Free consultation via WhatsApp (opens in a new tab)",
    priceAria: "View packages and pricing",
  },

  visual: {
    caption: "Fig 01 — Website build process",
    brand: "ngodingin.id",
    alt: "Animation of ngodingin.id building and launching a business website",
    miniNav: "Contact",
    miniPrimary: "Consult",
    miniSecondary: "Pricing",
    deploy: "Deploy",
    building: "Building…",
    live: "Live ✓",
    badge1: "Lighthouse 98",
    badge2: "Mobile First",
  },

  marquee: {
    label: "Technologies we use",
  },

  services: {
    num: "02",
    kicker: "Services",
    title: "Complete solutions for your business.",
    subtitle: "From company profiles to school websites — we build the digital presence your business actually needs.",
    headingId: "services-heading",
    listLabel: "Core services",
    items: [
      {
        title: "Company Profile",
        desc: "Present your business profile, services, and portfolio professionally in one place.",
      },
      {
        title: "School & Institution Websites",
        desc: "Official websites with news management, teacher/student data, galleries, and an admin dashboard.",
      },
      {
        title: "Landing Page",
        desc: "A conversion-focused page for campaigns, promotions, or new product launches.",
      },
    ],
    includedLabel: "Included in every package",
    includedAria: "Included in every package",
    included: [
      "Responsive on every device",
      "Fast, optimized loading",
      "Post-launch support",
    ],
  },

  process: {
    num: "03",
    kicker: "Process",
    title: "How we work.",
    subtitle: "Transparent from first chat to launch — you always know where your project stands, no vendor drama.",
    headingId: "process-heading",
    listLabel: "Working steps",
    steps: [
      {
        title: "Consultation",
        desc: "Tell us about your business. We propose a solution, package, and a clear cost estimate — free, no commitment.",
        timing: "Day 1",
      },
      {
        title: "Design",
        desc: "We structure the pages and design the interface. You review it before a single line of code is written.",
        timing: "Days 2–3",
      },
      {
        title: "Development",
        desc: "Fullstack coding: pages, content, map integration, forms, and any other features. Progress updates on WhatsApp.",
        timing: "Days 4–12",
      },
      {
        title: "Launch",
        desc: "Deploy to domain & hosting, install SSL, set up basic SEO, then a short handover with documentation.",
        timing: "Days 13–14",
      },
    ],
  },

  portfolio: {
    num: "04",
    kicker: "Portfolio",
    title: "Selected work.",
    subtitle: "A few of the projects we have built for SMBs, schools, and institutions across Indonesia.",
    headingId: "portfolio-heading",
    listLabel: "Project list",
    projects: [
      {
        category: "Integrated Village Information System",
        description:
          "Digital village information system — online letters, facility booking, complaints + map, and WhatsApp notifications.",
      },
      {
        category: "Education",
        description:
          "Official school website with news management, gallery, teacher & student data, and an admin dashboard.",
      },
      {
        category: "Landing Page",
        description:
          "Modern landing page for a workshop with online service booking and customer testimonials.",
      },
      {
        category: "Web Application",
        description:
          "Web app for digitizing village administration — online letter requests and service data management.",
      },
      {
        category: "Health Monitoring",
        description:
          "Laravel app for managing toddler and pregnant-woman data with centralized nutrition-status monitoring.",
      },
      {
        category: "Next project",
        description:
          "This slot is waiting for your project. Tell us your website needs, and we will build it.",
        title: "Your website here",
        ctaBadge: "Start now ↗",
      },
    ],
    visit: "Visit website",
    visitAria: "View project",
    cardAria: "Project",
  },

  pricing: {
    num: "05",
    kicker: "Pricing",
    title: "Pick what fits.",
    subtitle: "Transparent pricing, free consultation before you order. Student packages can be negotiated & paid in instalments.",
    headingId: "pricing-heading",
    listLabel: "Pricing packages",
    popularNote: "Most chosen",
    durationPrefix: "Completed in",
    cta: "Choose This Package",
    ctaAria: "Choose package via WhatsApp",
    plans: [
      {
        name: "Student",
        description: "For portfolios, final projects, or student organizations",
        features: [
          "Landing page / single page",
          "Modern & responsive design",
          "Contact form / WhatsApp button",
          "2 revisions",
          "No domain & hosting",
        ],
      },
      {
        name: "Standard",
        description: "Company profile + domain & hosting",
        features: [
          "Multi page (Home, About, Services, Contact)",
          "Product catalog / portfolio",
          "Google Maps integration",
          "Free .id / .com domain for 1 year",
          "Lightweight hosting for 1 year",
          "3 revisions",
        ],
      },
      {
        name: "Professional",
        description: "Custom features for your business needs",
        features: [
          "All Standard features",
          "Online store / booking system",
          "Simple admin dashboard",
          "Domain & hosting for 1 year",
          "Unlimited revisions",
          "Priority support",
          "Custom features on request",
        ],
      },
    ],
    footnote:
      "* Domain & hosting can be added as needed. The first consultation is free with no commitment — reach us on WhatsApp to talk it through.",
  },

  testimonials: {
    num: "06",
    kicker: "Testimonials",
    title: "What they say.",
    subtitle: "Trusted by SMB clients, schools, and local businesses across Indonesia.",
    headingId: "testimonials-heading",
    listLabel: "Client testimonials",
    ratingAria: "Rating",
    items: [
      {
        name: "School Management Team",
        role: "SMP Negeri 3 Lubuk Pakam",
        text: "The result was neat and truly professional. The process was fast and communication was smooth from start to finish.",
      },
      {
        name: "Dewi Sartika",
        role: "Local Fashion Store Owner",
        text: "I was hesitant about building a website at first, but after the consultation it all made sense. The site matched our expectations — clean design, easy on the eyes.",
      },
      {
        name: "Fajar Nugroho",
        role: "Student & Small Business Owner",
        text: "Built from scratch, not a rushed template. The code is clean too, so it is easy to keep improving later.",
      },
    ],
  },

  faq: {
    num: "07",
    kicker: "FAQ",
    title: "Frequently asked questions.",
    subtitle: "Did not find the answer you were looking for? Just ask on WhatsApp.",
    headingId: "faq-heading",
    listLabel: "Question list",
    cta: "Ask on WhatsApp",
    ctaAria: "Ask on WhatsApp (opens in a new tab)",
    items: [
      {
        q: "How long does a website take?",
        a: "It depends on the package you choose. The Student package is done in 1 week, Standard and Professional in 2 weeks. It can be faster depending on how ready your materials are.",
      },
      {
        q: "Can I pay in instalments or negotiate the price?",
        a: "Yes. The Student package is very flexible and can be paid in instalments. For other packages, let us talk first on WhatsApp — we are open to discussion.",
      },
      {
        q: "What do you mean by revisions?",
        a: "A revision is a change to the design or content after the site is built. The number depends on the package — Student 2x, Standard 3x, Professional unlimited. One revision session can cover several changes at once.",
      },
      {
        q: "Do I need to prepare the materials myself?",
        a: "Yes, please prepare your text, photos, and logo. We will help structure and design them. If you do not have photos yet, we can suggest free stock alternatives.",
      },
      {
        q: "Do I set up domain and hosting myself?",
        a: "We set everything up from the start until the site is live. Standard and Professional already include domain and hosting for 1 year. For Student it can be added for a separate fee.",
      },
      {
        q: "Who maintains the site after launch?",
        a: "We provide post-launch support via WhatsApp. Small content updates are usually free. Bigger changes can be discussed separately.",
      },
      {
        q: "What technologies do you use?",
        a: "We use Next.js or Laravel depending on the needs. Every site is optimized for loading speed, basic SEO, and looks perfect on every device.",
      },
    ],
  },

  about: {
    num: "08",
    kicker: "About",
    title: "A digital partner for SMBs.",
    subtitle: "We believe every business deserves a professional website — without the high cost or the hassle.",
    headingId: "about-heading",
    p1: "ngodingin.id is the website solution for Indonesian businesses ready to level up. Every project is handled fullstack — from interface design to development and deployment — with direct communication, no middlemen.",
    p2: "From company profiles and landing pages to official school and institution websites — we help your business look more professional and reach more customers.",
    cta1: "View Packages",
    cta2: "Free Consultation",
    cta2Aria: "Free consultation via WhatsApp (opens in a new tab)",
    whyLabel: "Why us",
    valuesAria: "Our advantages",
    values: [
      { title: "Trusted",    desc: "Trusted by SMB & institution clients in Indonesia" },
      { title: "On Time",    desc: "Delivered within the deadline we agreed on" },
      { title: "Fullstack",  desc: "End to end, from design to deployment" },
      { title: "Quality",    desc: "Clean, well-structured code" },
    ],
    statsAria: "Our statistics",
    stats: [
      { label: "Projects done" },
      { label: "Happy clients" },
      { label: "Days of work" },
      { label: "Support" },
    ],
  },

  cta: {
    num: "09",
    kicker: "Start a project",
    headingId: "cta-heading",
    title: "Have a website idea? Let us build it.",
    desc: "The first consultation is free — tell us what you need and we will help you pick the right package and estimate.",
    primary: "Free Consultation",
    secondary: "View Packages & Pricing",
    note: "Reply <1 hour · No commitment",
    waAria: "Free consultation via WhatsApp (opens in a new tab)",
  },

  footer: {
    label: "Footer",
    homeLabel: "ngodingin.id — homepage",
    desc: "Professional website development for Indonesian SMBs — safe, tidy, and delivered on time.",
    socialsLabel: "Social media",
    socialInstagram: "ngodingin.id on Instagram",
    socialEmail: "Email ngodingin.id",
    tabNote: "(opens in a new tab)",
    rights: "ngodingin.id — All rights reserved.",
    built: "Next.js · Laravel · Tailwind CSS",
    groups: {
      layanan: {
        heading: "Services",
        items: [
          { label: "Company Profile",   href: "#layanan" },
          { label: "School Website",    href: "#layanan" },
          { label: "Landing Page",      href: "#layanan" },
        ],
      },
      navigasi: {
        heading: "Navigation",
        items: [
          { label: "Process",      href: "#proses" },
          { label: "Portfolio",    href: "#portfolio" },
          { label: "Pricing",      href: "#harga" },
          { label: "Testimonials", href: "#testimoni" },
          { label: "FAQ",          href: "#faq" },
          { label: "About",        href: "#tentang" },
        ],
      },
      kontak: {
        heading: "Contact",
        items: [{ label: "WhatsApp Consultation", href: "WA" }],
      },
    },
  },
};

export const dict = { id, en };
export type Lang = keyof typeof dict;
export type Dict = typeof id;
