// lib/i18n.js
// Semua teks website dalam 2 bahasa (ID & EN)
// Cara pakai: import { translations } from "@/lib/i18n"

export const translations = {
  id: {
    navbar: {
      links: [
        { label: "Layanan",   href: "#layanan" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Harga",     href: "#harga" },
        { label: "Testimoni", href: "#testimoni" },
        { label: "Tentang",   href: "#tentang" },
      ],
      cta: "Konsultasi Gratis",
    },

    hero: {
      kicker: "Web Development · UMKM & Startup",
      headline1: "Website yang",
      headline2: "benar-benar",
      headline3: "bekerja.",
      body: "Kami bangun platform digital profesional yang meningkatkan kredibilitas bisnis kamu —",
      bodyBold: "selesai tepat waktu, transparan, tanpa drama vendor",
      ctaPrimary: "Mulai konsultasi gratis",
      ctaSecondary: "Lihat portfolio",
      trust: [
        "Konsultasi gratis",
        "Revisi sampai puas",
        "No hidden cost",
        "Support pasca-launch",
      ],
      online: {
        title: "Lagi online sekarang",
        sub: "Biasanya balas dalam <1 jam",
        cta: "Chat →",
      },
      terminal: {
        status: "ready to deploy — 0 errors, 0 warnings",
      },
    },

    services: {
      kicker: "Layanan Kami",
      title: "Solusi Lengkap untuk Bisnis Anda",
      subtitle: "Dari company profile hingga toko online, kami siap membantu mewujudkan website impian Anda",
      items: [
        {
          title: "Company Profile",
          desc: "Website profesional untuk memperkenalkan bisnis Anda secara online.",
          features: ["Profil Perusahaan", "Galeri Foto", "Kontak & Maps"],
        },
        {
          title: "Toko Online",
          desc: "Platform e-commerce lengkap untuk jualan produk digital atau fisik.",
          features: ["Katalog Produk", "Keranjang Belanja", "Integrasi WhatsApp"],
        },
        {
          title: "Landing Page",
          desc: "Halaman khusus untuk campaign marketing dengan konversi tinggi.",
          features: ["Call to Action", "Form Lead", "Analytics"],
        },
        {
          title: "Responsive Design",
          desc: "Website yang tampil sempurna di desktop, tablet, dan smartphone.",
          features: ["Mobile First", "Touch Friendly", "Fast Loading"],
        },
        {
          title: "Performa Cepat",
          desc: "Optimasi kecepatan loading untuk pengalaman pengguna terbaik.",
          features: ["Score 90+", "Image Optimized", "Cache System"],
        },
        {
          title: "Dukungan 24/7",
          desc: "Tim support siap membantu kapanpun Anda membutuhkan bantuan.",
          features: ["Fast Response", "Maintenance", "Training"],
        },
      ],
    },

    portfolio: {
      kicker: "Portfolio",
      title: "Hasil Kerja Nyata",
      subtitle: "Beberapa project yang sudah kami bantu wujudkan untuk UMKM Indonesia.",
      cta: "Konsultasi Gratis",
    },

    pricing: {
      kicker: "Harga Terjangkau",
      title: "Pilih Sesuai Kebutuhan",
      subtitle: "Mulai dari Rp 500rb untuk mahasiswa. Konsultasi gratis sebelum order.",
      footnote1: "* Harga untuk mahasiswa bisa nego & cicil. Domain & hosting bisa ditambahkan sesuai kebutuhan.",
      footnote2: "Hubungi kami via WhatsApp untuk konsultasi gratis — tim siap membantu.",
      plans: [
        {
          name: "Mahasiswa",
          price: "500",
          unit: "rb",
          duration: "≤ 1 minggu",
          description: "Untuk portofolio, tugas akhir, atau UKM",
          features: [
            "Landing page / 1 halaman",
            "Desain modern & responsive",
            "Form kontak / Tombol WhatsApp",
            "Revisi 2x",
            "Tanpa domain & hosting",
          ],
          popular: false,
          buttonText: "Pilih Paket Ini",
          waMessage: "Halo, saya tertarik dengan paket Mahasiswa (Rp 500rb).",
        },
        {
          name: "Standar",
          price: "1.2",
          unit: "jt",
          duration: "≤ 2 minggu",
          description: "Company profile + domain & hosting",
          features: [
            "Multi halaman (Home, Tentang, Layanan, Kontak)",
            "Katalog produk / portfolio",
            "Google Maps integrasi",
            "Domain .id / .com gratis 1 tahun",
            "Hosting ringan 1 tahun",
            "Revisi 3x",
          ],
          popular: true,
          buttonText: "Pilih Paket Ini",
          waMessage: "Halo, saya tertarik dengan paket Standar (Rp 1.2jt).",
        },
        {
          name: "Profesional",
          price: "3",
          unit: "jt",
          duration: "≤ 2 minggu",
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
          popular: false,
          buttonText: "Konsultasi Gratis",
          waMessage: "Halo, saya tertarik dengan paket Profesional. Boleh konsultasi dulu?",
        },
      ],
    },

    faq: {
      kicker: "FAQ",
      title: "Pertanyaan yang Sering Ditanyakan",
      subtitle: "Tidak menemukan jawaban yang kamu cari? Langsung tanya via WhatsApp.",
      cta: "Tanya via WhatsApp",
      ctaSub: "Masih ada pertanyaan lain?",
      items: [
        {
          q: "Berapa lama website selesai?",
          a: "Tergantung paket yang dipilih. Paket Mahasiswa selesai dalam 1 minggu, paket Standar dan Profesional dalam 2 minggu.",
        },
        {
          q: "Apakah bisa cicil atau nego harga?",
          a: "Bisa. Khusus paket Mahasiswa harga sangat fleksibel dan bisa cicil. Untuk paket lain silakan konsultasi dulu via WhatsApp.",
        },
        {
          q: "Revisi itu maksudnya gimana?",
          a: "Revisi adalah perubahan desain atau konten setelah website selesai dibuat. Jumlah revisi sesuai paket — Mahasiswa 2x, Standar 3x, Profesional unlimited.",
        },
        {
          q: "Apakah saya perlu menyiapkan materi sendiri?",
          a: "Iya, kamu perlu menyiapkan teks konten, foto, dan logo bisnis kamu. Kami akan bantu susun dan desainnya.",
        },
        {
          q: "Domain dan hosting diurus sendiri atau bantu setup?",
          a: "Kami bantu setup semuanya dari awal sampai website live. Paket Standar dan Profesional sudah termasuk domain dan hosting 1 tahun.",
        },
        {
          q: "Setelah website jadi, siapa yang maintenance?",
          a: "Kami menyediakan support pasca-launch via WhatsApp. Untuk update konten kecil-kecilan biasanya bisa kami bantu gratis.",
        },
        {
          q: "Teknologi apa yang dipakai?",
          a: "Kami pakai Next.js atau Laravel tergantung kebutuhan. Semua website dioptimasi untuk kecepatan loading dan SEO dasar.",
        },
        {
          q: "Bagaimana cara mulai order?",
          a: "Cukup chat WhatsApp kami, ceritakan kebutuhan website kamu, dan kami akan bantu tentukan paket yang paling sesuai. Konsultasi pertama gratis.",
        },
      ],
    },

    testimonials: {
      kicker: "Testimoni",
      title: "Apa Kata Mereka?",
      subtitle: "Dipercaya oleh 30+ klien UMKM di seluruh Indonesia.",
      items: [
        {
          name: "Ahmad Rizki",
          role: "Owner Warung Kopi Kenangan",
          text: "Website yang dibuat sangat profesional dan cepat. Setelah pakai website ini, omzet saya naik 40% dalam 3 bulan.",
          rating: 5,
        },
        {
          name: "Siti Nurjanah",
          role: "Founder Fashion Store",
          text: "Pelayanannya ramah dan hasilnya sesuai ekspektasi. Toko online saya sekarang lebih terpercaya di mata pelanggan.",
          rating: 5,
        },
        {
          name: "Budi Santoso",
          role: "Property Agent",
          text: "Proses cepat, kurang dari 14 hari website sudah jadi. Desainnya modern dan tampil sempurna di semua perangkat.",
          rating: 5,
        },
      ],
    },

    about: {
      kicker: "Tentang Kami",
      title: "Ngodingin.id — Partner Digital untuk UMKM",
      subtitle: "Kami percaya setiap bisnis berhak punya website profesional tanpa ribet.",
      body1: "Ngodingin.id hadir sebagai solusi pembuatan website untuk UMKM Indonesia yang ingin naik kelas. Kami paham bahwa memiliki website profesional itu penting, tapi sering terasa mahal dan rumit.",
      body2: "Makanya kami hadir dengan harga terjangkau, proses mudah, dan hasil yang memuaskan. Mulai dari konsultasi gratis hingga website siap online dalam waktu singkat.",
      body3: "Dengan pengalaman mengerjakan puluhan project, kami siap membantu bisnis Anda tampil lebih profesional dan menjangkau lebih banyak pelanggan.",
      ctaPrimary: "Lihat Layanan",
      ctaSecondary: "Konsultasi Gratis",
      valuesTitle: "Kenapa Pilih Kami?",
      values: [
        { title: "Terpercaya",      desc: "Sudah dipercaya 30+ klien UMKM di Indonesia" },
        { title: "Tepat Waktu",     desc: "Pengerjaan sesuai deadline yang disepakati" },
        { title: "Ramah",           desc: "Konsultasi tanpa tekanan, kami siap membantu" },
        { title: "Tim Profesional", desc: "Dikerjakan oleh developer berpengalaman" },
        { title: "Berkualitas",     desc: "Kode bersih dan terstruktur dengan baik" },
        { title: "Cepat",           desc: "Website dioptimalkan untuk performa terbaik" },
      ],
      stats: [
        { n: "30+",  label: "Project selesai" },
        { n: "100%", label: "Klien puas" },
        { n: "≤14",  label: "Hari pengerjaan" },
        { n: "24/7", label: "Dukungan" },
      ],
    },

    footer: {
      tagline: "Solusi web development Laravel, Next.js & Fullstack untuk UMKM dan bisnis Indonesia. Aman, rapi, dan beres tepat waktu.",
      links: {
        Layanan: [
          { label: "Landing Page",    href: "#layanan" },
          { label: "Company Profile", href: "#layanan" },
          { label: "Toko Online",     href: "#layanan" },
          { label: "Fullstack App",   href: "#layanan" },
        ],
        Navigasi: [
          { label: "Portfolio",  href: "#portfolio" },
          { label: "Harga",      href: "#harga" },
          { label: "Testimoni",  href: "#testimoni" },
          { label: "Tentang",    href: "#tentang" },
          { label: "FAQ",        href: "#faq" },
        ],
      },
      copyright: "All rights reserved.",
      madeWith: "Built with",
    },
  },

  en: {
    navbar: {
      links: [
        { label: "Services",    href: "#layanan" },
        { label: "Portfolio",   href: "#portfolio" },
        { label: "Pricing",     href: "#harga" },
        { label: "Testimonials",href: "#testimoni" },
        { label: "About",       href: "#tentang" },
      ],
      cta: "Free Consultation",
    },

    hero: {
      kicker: "Web Development · SMEs & Startups",
      headline1: "A website that",
      headline2: "actually",
      headline3: "works.",
      body: "We build professional digital platforms that boost your business credibility —",
      bodyBold: "on time, transparent, no vendor drama",
      ctaPrimary: "Start free consultation",
      ctaSecondary: "View portfolio",
      trust: [
        "Free consultation",
        "Unlimited revisions",
        "No hidden cost",
        "Post-launch support",
      ],
      online: {
        title: "We're online now",
        sub: "Usually replies within <1 hour",
        cta: "Chat →",
      },
      terminal: {
        status: "ready to deploy — 0 errors, 0 warnings",
      },
    },

    services: {
      kicker: "Our Services",
      title: "Complete Solutions for Your Business",
      subtitle: "From company profiles to online stores, we're ready to build your dream website",
      items: [
        {
          title: "Company Profile",
          desc: "Professional website to introduce your business online.",
          features: ["Company Profile", "Photo Gallery", "Contact & Maps"],
        },
        {
          title: "Online Store",
          desc: "Complete e-commerce platform to sell digital or physical products.",
          features: ["Product Catalog", "Shopping Cart", "WhatsApp Integration"],
        },
        {
          title: "Landing Page",
          desc: "Dedicated page for marketing campaigns with high conversion rates.",
          features: ["Call to Action", "Lead Form", "Analytics"],
        },
        {
          title: "Responsive Design",
          desc: "Website that looks perfect on desktop, tablet, and smartphone.",
          features: ["Mobile First", "Touch Friendly", "Fast Loading"],
        },
        {
          title: "Fast Performance",
          desc: "Speed optimized for the best user experience.",
          features: ["Score 90+", "Image Optimized", "Cache System"],
        },
        {
          title: "24/7 Support",
          desc: "Support team ready to help whenever you need assistance.",
          features: ["Fast Response", "Maintenance", "Training"],
        },
      ],
    },

    portfolio: {
      kicker: "Portfolio",
      title: "Real Work Results",
      subtitle: "Some projects we've helped bring to life for Indonesian SMEs.",
      cta: "Free Consultation",
    },

    pricing: {
      kicker: "Affordable Pricing",
      title: "Choose What Fits Your Needs",
      subtitle: "Starting from Rp 500k for students. Free consultation before ordering.",
      footnote1: "* Student pricing is negotiable and can be paid in installments.",
      footnote2: "Contact us via WhatsApp for a free consultation — our team is ready to help.",
      plans: [
        {
          name: "Student",
          price: "500",
          unit: "k",
          duration: "≤ 1 week",
          description: "For portfolios, final projects, or student organizations",
          features: [
            "Landing page / 1 page",
            "Modern & responsive design",
            "Contact form / WhatsApp button",
            "2x revisions",
            "Without domain & hosting",
          ],
          popular: false,
          buttonText: "Choose This Plan",
          waMessage: "Hi, I'm interested in the Student package (Rp 500k).",
        },
        {
          name: "Standard",
          price: "1.2",
          unit: "M",
          duration: "≤ 2 weeks",
          description: "Company profile + domain & hosting",
          features: [
            "Multi-page (Home, About, Services, Contact)",
            "Product catalog / portfolio",
            "Google Maps integration",
            "Free .id / .com domain for 1 year",
            "Lightweight hosting for 1 year",
            "3x revisions",
          ],
          popular: true,
          buttonText: "Choose This Plan",
          waMessage: "Hi, I'm interested in the Standard package (Rp 1.2M).",
        },
        {
          name: "Professional",
          price: "3",
          unit: "M",
          duration: "≤ 2 weeks",
          description: "Custom features tailored to your business needs",
          features: [
            "All Standard features",
            "Online store / booking system",
            "Simple admin dashboard",
            "Domain & hosting for 1 year",
            "Unlimited revisions",
            "Priority support",
            "Additional features on request",
          ],
          popular: false,
          buttonText: "Free Consultation",
          waMessage: "Hi, I'm interested in the Professional package. Can we consult first?",
        },
      ],
    },

    faq: {
      kicker: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Can't find the answer you're looking for? Ask us directly via WhatsApp.",
      cta: "Ask via WhatsApp",
      ctaSub: "Still have more questions?",
      items: [
        {
          q: "How long does it take to finish a website?",
          a: "Depends on the package. Student package is done within 1 week, Standard and Professional within 2 weeks.",
        },
        {
          q: "Can I negotiate the price or pay in installments?",
          a: "Yes. The Student package is very flexible and can be paid in installments. For other packages, please consult via WhatsApp first.",
        },
        {
          q: "What does revision mean?",
          a: "Revision means changes to the design or content after the website is finished. Number of revisions depends on the package — Student 2x, Standard 3x, Professional unlimited.",
        },
        {
          q: "Do I need to prepare the content myself?",
          a: "Yes, you'll need to prepare the text, photos, and business logo. We'll help arrange and design everything.",
        },
        {
          q: "Do you handle domain and hosting setup?",
          a: "Yes, we handle everything from start until the website is live. Standard and Professional packages already include domain and hosting for 1 year.",
        },
        {
          q: "Who handles maintenance after the website is done?",
          a: "We provide post-launch support via WhatsApp. Small content updates are usually free of charge.",
        },
        {
          q: "What technology do you use?",
          a: "We use Next.js or Laravel depending on the needs. All websites are optimized for speed and basic SEO.",
        },
        {
          q: "How do I start an order?",
          a: "Just chat us on WhatsApp, tell us your website needs, and we'll help you choose the right package. First consultation is free.",
        },
      ],
    },

    testimonials: {
      kicker: "Testimonials",
      title: "What Do They Say?",
      subtitle: "Trusted by 30+ SME clients across Indonesia.",
      items: [
        {
          name: "Ahmad Rizki",
          role: "Owner, Warung Kopi Kenangan",
          text: "The website built was very professional and fast. After using it, my revenue increased by 40% in 3 months.",
          rating: 5,
        },
        {
          name: "Siti Nurjanah",
          role: "Founder, Fashion Store",
          text: "The service was friendly and the result matched my expectations. My online store is now more trusted by customers.",
          rating: 5,
        },
        {
          name: "Budi Santoso",
          role: "Property Agent",
          text: "Fast process, the website was done in under 14 days. The design is modern and looks perfect on all devices.",
          rating: 5,
        },
      ],
    },

    about: {
      kicker: "About Us",
      title: "Ngodingin.id — Digital Partner for SMEs",
      subtitle: "We believe every business deserves a professional website without the hassle.",
      body1: "Ngodingin.id is here as a website development solution for Indonesian SMEs that want to level up. We understand that having a professional website is important, but often feels expensive and complicated.",
      body2: "That's why we offer affordable prices, an easy process, and satisfying results. From free consultation to a live website in a short time.",
      body3: "With experience handling dozens of projects, we're ready to help your business look more professional and reach more customers.",
      ctaPrimary: "View Services",
      ctaSecondary: "Free Consultation",
      valuesTitle: "Why Choose Us?",
      values: [
        { title: "Trusted",         desc: "Trusted by 30+ SME clients in Indonesia" },
        { title: "On Time",         desc: "Work completed according to agreed deadlines" },
        { title: "Friendly",        desc: "Consultation without pressure, we're here to help" },
        { title: "Pro Team",        desc: "Handled by experienced developers" },
        { title: "Quality",         desc: "Clean and well-structured code" },
        { title: "Fast",            desc: "Website optimized for best performance" },
      ],
      stats: [
        { n: "30+",  label: "Projects done" },
        { n: "100%", label: "Happy clients" },
        { n: "≤14",  label: "Days to finish" },
        { n: "24/7", label: "Support" },
      ],
    },

    footer: {
      tagline: "Laravel, Next.js & Fullstack web development for Indonesian SMEs and businesses. Reliable, clean, and delivered on time.",
      links: {
        Services: [
          { label: "Landing Page",    href: "#layanan" },
          { label: "Company Profile", href: "#layanan" },
          { label: "Online Store",    href: "#layanan" },
          { label: "Fullstack App",   href: "#layanan" },
        ],
        Navigation: [
          { label: "Portfolio",     href: "#portfolio" },
          { label: "Pricing",       href: "#harga" },
          { label: "Testimonials",  href: "#testimoni" },
          { label: "About",         href: "#tentang" },
          { label: "FAQ",           href: "#faq" },
        ],
      },
      copyright: "All rights reserved.",
      madeWith: "Built with",
    },
  },
};