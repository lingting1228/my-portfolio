import { useState, useEffect } from "react";

const translations = {
  en: {
    nav: { home: "Home", blog: "Blog", gallery: "Gallery" },
    hero: {
      name: "Jeng Ling-Ting",
      tagline: "English Teacher · Author · Artist",
    },
    about: {
      title: "About Me",
      text: "Hi, I'm Ling-Ting — a multifaceted creative professional. I teach English, write about life, and paint the world as I see it. With a Master's in International Business from National Taiwan University and a perfect TOEIC score in the top 1%, I bring both academic knowledge and passion into every lesson I teach.",
    },
    experience: {
      title: "Work Experience",
      items: [
        { role: "Business Management Supervisor", company: "Acer", period: "Jul 2022 – Mar 2026", desc: "Key contact window between Japan and Taiwan managing display business, including pricing, selling plan and inventory management." },
        { role: "OEM Project Management", company: "Hewlett Packard Enterprise", period: "Jul 2021 – Jun 2022", desc: "Facilitated OEM business support including customer communication, monthly presentations, and problem-solving." },
        { role: "Marketing Project Manager", company: "FarEastone Corporation", period: "Apr 2019 – Jul 2020", desc: "Led marketing campaigns for Samsung S20 5G, Sony Xperia 1, Samsung Note 10/10+, Huawei Y9 — bringing 1000+ new users/month." },
        { role: "Sales & Marketing Specialist", company: "LIPS Corporation", period: "Mar 2017 – Apr 2019", desc: "Managed annual marketing plan implementation, coordinating cross-divisional discussions and attending global exhibitions including CES, MWC, Computex." },
        { role: "English Teacher", company: "Gjun", period: "Mar 2019 – Apr 2022 (Part-time)", desc: "ESL instruction for adults covering TOEIC, vocabulary, speaking and pronunciation." },
        { role: "Intern English Teacher", company: "Kanazawa University Senior High School", period: "Jan 2016 – Apr 2016", desc: "Collaborated with Japanese teachers to develop, teach and evaluate daily lessons and English activities." },
      ],
    },
    education: {
      title: "Education",
      items: [
        { school: "National Taiwan University", degree: "Master of International Business", period: "Jul 2022", gpa: "GPA 4.3/4.3" },
        { school: "Temple University", degree: "Global Program", period: "Dec 2016", gpa: "GPA 4.0/4.0" },
        { school: "National Taiwan Normal University", degree: "Bachelor of Arts in English & Education", period: "Jun 2016", gpa: "GPA 4.0/4.3" },
      ],
    },
    certs: {
      title: "Certificates",
      items: ["TOEIC 980 — Top 1% of examinees", "Google Ads Display Certification", "Google Ads Search Certification"],
    },
    interests: { title: "Interests", items: ["Hiking", "Traveling", "Meditation", "Reading", "Playing Piano", "Language Exchange"] },
    contact: {
      title: "Get a Quote",
      sub: "Interested in English lessons, writing, or artwork? I'd love to hear from you.",
      namePlaceholder: "Your Name",
      contactPlaceholder: "Email or Phone",
      needPlaceholder: "Tell me what you need...",
      btn: "Send Inquiry",
      success: "Thank you! I'll be in touch soon.",
    },
    blog: {
      title: "Blog",
      sub: "Thoughts on language, life, and learning",
      subscribe: "Subscribe to Newsletter",
      emailPlaceholder: "Your email address",
      subscribeBtn: "Subscribe",
      subscribed: "You're subscribed!",
      readMore: "Read more",
      allCategory: "All",
      categories: ["All", "Language", "Travel", "Life"],
      posts: [
        { id: 1, title: "Why Learning English Changed My Life", date: "April 20, 2025", tag: "Language", excerpt: "Growing up between cultures taught me that language is more than words — it's a bridge between worlds. Here's how teaching English became my calling..." },
        { id: 2, title: "A Hiker's Notes from Taroko Gorge", date: "March 5, 2025", tag: "Travel", excerpt: "The mist was thick when I set out at dawn. Taroko Gorge doesn't announce itself — it simply swallows you whole, marble walls rising on every side..." },
        { id: 3, title: "Meditation and Creativity: What I've Learned", date: "February 12, 2025", tag: "Life", excerpt: "People always ask me how I manage to teach, write, and paint. The honest answer is: silence. Twenty minutes every morning before the world wakes up..." },
      ],
    },
    gallery: {
      title: "Artwork Gallery",
      sub: "Original paintings available for inquiry",
      inquire: "Inquire About This Piece",
      upload: "Upload New Artwork",
      uploadLabel: "Click or drag an image here",
      titleLabel: "Title",
      descLabel: "Description",
      addBtn: "Add to Gallery",
      pieces: [
        { id: 1, title: "Morning in Jiufen", desc: "Watercolor on paper, 2024. The red lanterns glow softly through the mountain fog.", color: "#c9a98a" },
        { id: 2, title: "Taroko Marble Light", desc: "Acrylic on canvas, 2024. Blue-green light filtering through the gorge walls.", color: "#7ab5c0" },
        { id: 3, title: "Taipei Night Market", desc: "Ink & wash, 2023. The chaos and warmth of a rainy night market in Shilin.", color: "#8b7ab5" },
        { id: 4, title: "Ocean at Yilan", desc: "Oil pastel, 2023. Golden hour along the northeast coast.", color: "#c2955a" },
      ],
    },
  },
  zh: {
    nav: { home: "首頁", blog: "部落格", gallery: "畫廊" },
    hero: {
      name: "鄭凌婷",
      tagline: "英文老師 · 作者 · 畫家",
    },
    about: {
      title: "關於我",
      text: "我是凌婷——一位多元創意工作者。我教英文、書寫生活，也以畫筆描繪世界。擁有台灣大學國際企業管理碩士學位，多益成績980分（前1%），我將學術與熱情融入每一次的教學中。",
    },
    experience: {
      title: "工作經驗",
      items: [
        { role: "營運管理主任", company: "宏碁股份有限公司", period: "07/2022 – 03/2026", desc: "日本和台灣之間管理顯示器業務的重要聯繫窗口，包括定價、銷售計劃和庫存管理。" },
        { role: "OEM 專案管理", company: "慧與科技", period: "07/2021 – 06/2022", desc: "協助OEM業務運作，包括客戶溝通、每月簡報、收集客戶需求和解決問題。" },
        { role: "行銷專案管理", company: "遠傳股份有限公司", period: "04/2019 – 07/2020", desc: "領導三星S20 5G、Sony Xperia 1、三星Note 10/10+、華為Y9新機行銷活動，每月帶來超過1000名新用戶。" },
        { role: "業務行銷專員", company: "立普思股份有限公司", period: "03/2017 – 04/2019", desc: "管理年度行銷計畫中的專案實施、協調跨部門討論，並參加CES、MWC、Computex等全球展會。" },
        { role: "英文老師", company: "巨匠美語", period: "03/2019 – 04/2022（兼職）", desc: "成人英語教學，包含多益英文、單字、口說和發音。" },
        { role: "實習英文老師", company: "金澤大學附屬高中", period: "01/2016 – 04/2016", desc: "與當地日籍老師合作企劃英語活動、教學和評估日常課程。" },
      ],
    },
    education: {
      title: "學歷",
      items: [
        { school: "台灣大學", degree: "國際企業管理碩士", period: "07/2022", gpa: "GPA 4.3/4.3" },
        { school: "天普大學（美國）", degree: "國際學程", period: "12/2016", gpa: "GPA 4.0/4.0" },
        { school: "臺灣師範大學", degree: "英語與教育學士", period: "06/2016", gpa: "GPA 4.0/4.3" },
      ],
    },
    certs: {
      title: "證照",
      items: ["多益 980 — 前1%考生", "Google Ads 多媒體廣告認證", "Google Ads 搜尋廣告認證"],
    },
    interests: { title: "興趣", items: ["健行", "旅行", "冥想", "閱讀", "彈鋼琴", "語言交換"] },
    contact: {
      title: "詢問報價",
      sub: "對英文教學、寫作或畫作有興趣？歡迎與我聯繫！",
      namePlaceholder: "您的姓名",
      contactPlaceholder: "電子信箱或電話",
      needPlaceholder: "請描述您的需求...",
      btn: "送出詢問",
      success: "謝謝！我會盡快與您聯繫。",
    },
    blog: {
      title: "部落格",
      sub: "關於語言、生活與學習的思考",
      subscribe: "訂閱電子報",
      emailPlaceholder: "您的電子信箱",
      subscribeBtn: "訂閱",
      subscribed: "訂閱成功！",
      readMore: "閱讀全文",
      allCategory: "全部",
      categories: ["全部", "語言", "旅行", "生活"],
      posts: [
        { id: 1, title: "學英文如何改變了我的人生", date: "2025年4月20日", tag: "語言", excerpt: "在兩種文化之間長大，讓我明白語言不只是文字——它是連結不同世界的橋樑。分享我如何走上英語教學這條路..." },
        { id: 2, title: "太魯閣健行記事", date: "2025年3月5日", tag: "旅行", excerpt: "出發時清晨霧氣正濃。太魯閣峽谷不會預告自己的到來——它就這樣將你整個吞沒，大理石峭壁在兩側高聳..." },
        { id: 3, title: "冥想與創作：我的心得", date: "2025年2月12日", tag: "生活", excerpt: "大家常問我如何同時兼顧教學、寫作與繪畫。老實說，關鍵是寧靜。每天早晨在世界甦醒前的二十分鐘..." },
      ],
    },
    gallery: {
      title: "畫作展覽",
      sub: "原創畫作，歡迎來信詢問報價",
      inquire: "詢問此作品報價",
      upload: "上傳新畫作",
      uploadLabel: "點擊或拖曳圖片到此",
      titleLabel: "作品名稱",
      descLabel: "作品介紹",
      addBtn: "加入展覽",
      pieces: [
        { id: 1, title: "九份晨光", desc: "水彩，2024年。紅燈籠在山間霧氣中輕柔地發光。", color: "#c9a98a" },
        { id: 2, title: "太魯閣大理石光影", desc: "壓克力，2024年。藍綠色光線穿透峽谷大理石壁。", color: "#7ab5c0" },
        { id: 3, title: "台北夜市", desc: "墨水淡彩，2023年。雨夜中士林夜市的熱鬧與溫暖。", color: "#8b7ab5" },
        { id: 4, title: "宜蘭海岸", desc: "油粉彩，2023年。東北角海岸的黃金時刻。", color: "#c2955a" },
      ],
    },
  },
};

function Tag({ text, color = "#c9a98a" }) {
  return (
    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", background: color + "22", color, padding: "3px 10px", borderRadius: 20, display: "inline-block" }}>
      {text}
    </span>
  );
}

function BlogPost({ post, t, lang }) {
  const [expanded, setExpanded] = useState(false);
  const tagColors = { Language: "#7ab5c0", Travel: "#c9a98a", Life: "#8b7ab5", 語言: "#7ab5c0", 旅行: "#c9a98a", 生活: "#8b7ab5" };
  return (
    <div style={{ borderBottom: "1px solid #e8e4de", paddingBottom: 28, marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <Tag text={post.tag} color={tagColors[post.tag] || "#c9a98a"} />
        <span style={{ fontSize: 13, color: "#a0998e" }}>{post.date}</span>
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, margin: "0 0 10px", color: "#2c2419", lineHeight: 1.3 }}>{post.title}</h3>
      <p style={{ color: "#6b6259", lineHeight: 1.75, margin: "0 0 12px", fontSize: 15 }}>{post.excerpt}</p>
      {!expanded && (
        <button onClick={() => setExpanded(true)} style={{ background: "none", border: "none", color: "#c9a98a", cursor: "pointer", fontSize: 14, fontWeight: 600, padding: 0, letterSpacing: "0.04em" }}>
          {t.blog.readMore} →
        </button>
      )}
      {expanded && (
        <p style={{ color: "#6b6259", lineHeight: 1.75, fontSize: 15, fontStyle: "italic", borderLeft: "3px solid #c9a98a", paddingLeft: 16, marginTop: 12 }}>
          {lang === "zh" ? "（此處可貼上完整文章內容）" : "(Full article content can be pasted here)"}
        </p>
      )}
    </div>
  );
}



export default function App() {
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState("home");
  const [contactForm, setContactForm] = useState({ name: "", contact: "", need: "" });
  const [contactSent, setContactSent] = useState(false);
  const [subEmail, setSubEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [uploadedPieces, setUploadedPieces] = useState([]);
  const [showUpload, setShowUpload] = useState(false);
  const [newPiece, setNewPiece] = useState({ title: "", desc: "", file: null, preview: null });
  const [scrolled, setScrolled] = useState(false);
  const [photoSrc, setPhotoSrc] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const t = translations[lang];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setNewPiece(p => ({ ...p, file, preview: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoSrc(ev.target.result);
    reader.readAsDataURL(file);
  };

  const addPiece = () => {
    if (!newPiece.title) return;
    setUploadedPieces(prev => [...prev, { id: Date.now(), title: newPiece.title, desc: newPiece.desc, preview: newPiece.preview, color: "#c9a98a" }]);
    setNewPiece({ title: "", desc: "", file: null, preview: null });
    setShowUpload(false);
  };

  const allPieces = [...t.gallery.pieces, ...uploadedPieces];

  const inputStyle = { width: "100%", border: "1px solid #e0d9d0", borderRadius: 8, padding: "12px 16px", fontSize: 15, fontFamily: "inherit", boxSizing: "border-box", outline: "none", background: "#faf8f5", color: "#2c2419", marginBottom: 12 };

  return (
    <div style={{ fontFamily: "'Lora', Georgia, serif", background: "#faf8f5", minHeight: "100vh", color: "#2c2419" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
        * { box-sizing: border-box; }
        input:focus, textarea:focus { border-color: #c9a98a !important; background: #fff !important; }
        button:active { opacity: 0.85; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #f0ece6; } ::-webkit-scrollbar-thumb { background: #c9a98a; border-radius: 3px; }
      `}</style>

      {/* Navbar */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: scrolled ? "rgba(250,248,245,0.97)" : "transparent", backdropFilter: scrolled ? "blur(8px)" : "none", borderBottom: scrolled ? "1px solid #ede8e1" : "none", transition: "all 0.3s", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: "#2c2419", letterSpacing: "0.02em", cursor: "pointer" }} onClick={() => setPage("home")}>
          {t.hero.name}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {["home", "blog", "gallery"].map(p => (
            <button key={p} onClick={() => setPage(p)} style={{ background: page === p ? "#c9a98a" : "none", color: page === p ? "#fff" : "#6b6259", border: "none", borderRadius: 6, padding: "6px 14px", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }}>
              {t.nav[p]}
            </button>
          ))}
          <div style={{ width: 1, height: 20, background: "#e0d9d0", margin: "0 8px" }} />
          <button onClick={() => setLang(lang === "en" ? "zh" : "en")} style={{ background: "none", border: "1px solid #c9a98a", borderRadius: 6, padding: "5px 12px", fontSize: 13, color: "#c9a98a", fontWeight: 600, cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.04em" }}>
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>
      </nav>

      {/* HOME PAGE */}
      {page === "home" && (
        <div>
          {/* Hero */}
          <section style={{ textAlign: "center", padding: "80px 32px 60px", background: "linear-gradient(to bottom, #fff5ec, #faf8f5)", borderBottom: "1px solid #ede8e1" }}>
            <div style={{ position: "relative", width: 110, height: 110, margin: "0 auto 24px" }}>
              {photoSrc ? (
                <img src={photoSrc} alt="profile" style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", boxShadow: "0 4px 24px rgba(201,169,138,0.35)", border: "3px solid #fff" }} />
              ) : (
                <div style={{ width: 110, height: 110, borderRadius: "50%", background: "linear-gradient(135deg, #c9a98a, #e8c9a8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42, boxShadow: "0 4px 24px rgba(201,169,138,0.3)", border: "3px solid #fff" }}>
                  👤
                </div>
              )}
              <label title={lang === "zh" ? "上傳照片" : "Upload photo"} style={{ position: "absolute", bottom: 4, right: 4, width: 28, height: 28, borderRadius: "50%", background: "#c9a98a", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", fontSize: 13, color: "#fff" }}>
                ✎
                <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ display: "none" }} />
              </label>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 42, fontWeight: 700, margin: "0 0 8px", color: "#2c2419", letterSpacing: "-0.01em" }}>{t.hero.name}</h1>
            <p style={{ fontSize: 17, color: "#c9a98a", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 32px" }}>{t.hero.tagline}</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:lingting1228@gmail.com" style={{ background: "#c9a98a", color: "#fff", borderRadius: 8, padding: "10px 24px", textDecoration: "none", fontSize: 14, fontWeight: 600, letterSpacing: "0.04em" }}>
                lingting1228@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ling-ting-jeng" target="_blank" rel="noreferrer" style={{ background: "none", color: "#c9a98a", border: "1px solid #c9a98a", borderRadius: 8, padding: "10px 24px", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
                LinkedIn
              </a>
            </div>
          </section>

          <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px" }}>
            {/* About */}
            <section style={{ padding: "52px 0 40px" }}>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 700, margin: "0 0 18px", color: "#2c2419" }}>{t.about.title}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "#6b6259" }}>{t.about.text}</p>
            </section>

            {/* Experience */}
            <section style={{ padding: "0 0 40px", borderTop: "1px solid #ede8e1" }}>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 700, margin: "40px 0 24px", color: "#2c2419" }}>{t.experience.title}</h2>
              {t.experience.items.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 20, marginBottom: 24, paddingBottom: 24, borderBottom: i < t.experience.items.length - 1 ? "1px solid #ede8e1" : "none" }}>
                  <div style={{ width: 4, borderRadius: 4, background: i === 0 ? "#c9a98a" : "#e0d9d0", flexShrink: 0, minHeight: 60 }} />
                  <div>
                    <div style={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, margin: 0, color: "#2c2419" }}>{item.role}</h3>
                      <span style={{ fontSize: 13, color: "#c9a98a", fontWeight: 600, background: "#c9a98a11", padding: "2px 8px", borderRadius: 4 }}>{item.company}</span>
                    </div>
                    <p style={{ fontSize: 12, color: "#b0a898", margin: "0 0 6px", letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: "sans-serif" }}>{item.period}</p>
                    <p style={{ fontSize: 15, color: "#6b6259", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Education + Certs + Interests grid */}
            <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, paddingBottom: 52, borderTop: "1px solid #ede8e1", paddingTop: 40 }}>
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, margin: "0 0 18px", color: "#2c2419" }}>{t.education.title}</h2>
                {t.education.items.map((item, i) => (
                  <div key={i} style={{ marginBottom: 16 }}>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#2c2419", margin: "0 0 2px" }}>{item.school}</p>
                    <p style={{ fontSize: 13, color: "#6b6259", margin: "0 0 2px" }}>{item.degree}</p>
                    <p style={{ fontSize: 12, color: "#a0998e", margin: 0 }}>{item.period} · {item.gpa}</p>
                  </div>
                ))}
              </div>
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, margin: "0 0 18px", color: "#2c2419" }}>{t.certs.title}</h2>
                {t.certs.items.map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                    <span style={{ color: "#c9a98a", marginTop: 3, fontSize: 12 }}>✦</span>
                    <p style={{ fontSize: 14, color: "#6b6259", margin: 0, lineHeight: 1.5 }}>{c}</p>
                  </div>
                ))}
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, margin: "28px 0 14px", color: "#2c2419" }}>{t.interests.title}</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {t.interests.items.map((item, i) => (
                    <span key={i} style={{ fontSize: 13, background: "#f0ece6", color: "#6b6259", padding: "5px 12px", borderRadius: 20 }}>{item}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section style={{ borderTop: "1px solid #ede8e1", paddingTop: 48, paddingBottom: 64 }}>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 700, margin: "0 0 8px", color: "#2c2419" }}>{t.contact.title}</h2>
              <p style={{ fontSize: 15, color: "#a0998e", margin: "0 0 28px" }}>{t.contact.sub}</p>
              {!contactSent ? (
                <div style={{ maxWidth: 480 }}>
                  <input value={contactForm.name} onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))} placeholder={t.contact.namePlaceholder} style={inputStyle} />
                  <input value={contactForm.contact} onChange={e => setContactForm(f => ({ ...f, contact: e.target.value }))} placeholder={t.contact.contactPlaceholder} style={inputStyle} />
                  <textarea value={contactForm.need} onChange={e => setContactForm(f => ({ ...f, need: e.target.value }))} placeholder={t.contact.needPlaceholder} rows={4} style={{ ...inputStyle, resize: "vertical", marginBottom: 16 }} />
                  <button onClick={() => { if (contactForm.name && contactForm.contact) setContactSent(true); }} style={{ background: "#c9a98a", color: "#fff", border: "none", borderRadius: 8, padding: "12px 32px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.04em", transition: "background 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#b8967a"}
                    onMouseLeave={e => e.currentTarget.style.background = "#c9a98a"}>
                    {t.contact.btn}
                  </button>
                </div>
              ) : (
                <div style={{ background: "#e8f5ee", borderRadius: 10, padding: "20px 24px", maxWidth: 480, color: "#2d6e50", fontWeight: 500 }}>
                  ✓ {t.contact.success}
                </div>
              )}
            </section>
          </div>
        </div>
      )}

      {/* BLOG PAGE */}
      {page === "blog" && (
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "52px 32px 80px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 36, fontWeight: 700, margin: "0 0 6px", color: "#2c2419" }}>{t.blog.title}</h1>
          <p style={{ color: "#a0998e", margin: "0 0 40px", fontSize: 16 }}>{t.blog.sub}</p>

          <div style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
            {/* Sidebar */}
            <aside style={{ width: 180, flexShrink: 0, position: "sticky", top: 80 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b0a898", margin: "0 0 12px", fontFamily: "sans-serif" }}>
                {lang === "zh" ? "文章分類" : "Categories"}
              </p>
              {t.blog.categories.map(cat => {
                const isAll = cat === t.blog.categories[0];
                const active = isAll ? activeCategory === "All" || activeCategory === "全部" || activeCategory === cat : activeCategory === cat;
                return (
                  <button key={cat} onClick={() => setActiveCategory(isAll ? "All" : cat)}
                    style={{ display: "block", width: "100%", textAlign: "left", background: active ? "#c9a98a" : "none", color: active ? "#fff" : "#6b6259", border: "none", borderRadius: 7, padding: "8px 14px", fontSize: 14, fontWeight: active ? 600 : 400, cursor: "pointer", fontFamily: "inherit", marginBottom: 4, transition: "all 0.15s" }}>
                    {cat}
                  </button>
                );
              })}

              {/* Post count badges */}
              <div style={{ marginTop: 24, borderTop: "1px solid #ede8e1", paddingTop: 20 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b0a898", margin: "0 0 12px", fontFamily: "sans-serif" }}>
                  {lang === "zh" ? "文章數量" : "Post Count"}
                </p>
                {t.blog.categories.slice(1).map(cat => {
                  const count = t.blog.posts.filter(p => p.tag === cat).length;
                  return (
                    <div key={cat} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 13, color: "#6b6259" }}>{cat}</span>
                      <span style={{ fontSize: 12, background: "#f0ece6", color: "#a0998e", borderRadius: 10, padding: "2px 8px", fontFamily: "sans-serif" }}>{count}</span>
                    </div>
                  );
                })}
              </div>
            </aside>

            {/* Posts */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {t.blog.posts
                .filter(p => activeCategory === "All" || activeCategory === "全部" || p.tag === activeCategory)
                .map(post => <BlogPost key={post.id} post={post} t={t} lang={lang} />)}
            </div>
          </div>

          {/* Newsletter — bottom */}
          <div style={{ background: "linear-gradient(135deg, #fff5ec, #faf8f5)", border: "1px solid #ede8e1", borderRadius: 12, padding: "28px 32px", marginTop: 56 }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, margin: "0 0 6px", color: "#2c2419" }}>{t.blog.subscribe}</h3>
            <p style={{ fontSize: 14, color: "#a0998e", margin: "0 0 16px" }}>
              {lang === "zh" ? "訂閱後，每篇新文章發布時您將收到通知。" : "Get notified whenever a new post is published."}
            </p>
            {!subscribed ? (
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <input value={subEmail} onChange={e => setSubEmail(e.target.value)} placeholder={t.blog.emailPlaceholder} style={{ flex: 1, minWidth: 220, border: "1px solid #e0d9d0", borderRadius: 8, padding: "10px 14px", fontSize: 14, fontFamily: "inherit", outline: "none", background: "#fff" }} />
                <button onClick={() => { if (subEmail) setSubscribed(true); }} style={{ background: "#c9a98a", color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                  {t.blog.subscribeBtn}
                </button>
              </div>
            ) : (
              <p style={{ color: "#7ab5c0", fontWeight: 600, margin: 0, fontSize: 15 }}>✓ {t.blog.subscribed}</p>
            )}
          </div>
        </div>
      )}

      {/* GALLERY PAGE */}
      {page === "gallery" && (
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "52px 32px 80px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 8 }}>
            <div>
              <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 36, fontWeight: 700, margin: "0 0 8px", color: "#2c2419" }}>{t.gallery.title}</h1>
              <p style={{ color: "#a0998e", margin: 0, fontSize: 16 }}>{t.gallery.sub}</p>
            </div>
            <button onClick={() => setShowUpload(!showUpload)} style={{ background: "#c9a98a", color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
              + {t.gallery.upload}
            </button>
          </div>

          {/* Upload panel */}
          {showUpload && (
            <div style={{ background: "#fff", border: "1px solid #ede8e1", borderRadius: 12, padding: "24px 28px", marginTop: 24, marginBottom: 32 }}>
              <label style={{ display: "block", background: "#faf8f5", border: "2px dashed #e0d9d0", borderRadius: 10, padding: "32px", textAlign: "center", cursor: "pointer", marginBottom: 16, color: "#a0998e", fontSize: 14 }}>
                {newPiece.preview ? <img src={newPiece.preview} alt="preview" style={{ maxHeight: 160, maxWidth: "100%", borderRadius: 8, objectFit: "cover" }} /> : t.gallery.uploadLabel}
                <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
              </label>
              <input value={newPiece.title} onChange={e => setNewPiece(p => ({ ...p, title: e.target.value }))} placeholder={t.gallery.titleLabel} style={{ ...inputStyle, marginBottom: 10 }} />
              <textarea value={newPiece.desc} onChange={e => setNewPiece(p => ({ ...p, desc: e.target.value }))} placeholder={t.gallery.descLabel} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
              <button onClick={addPiece} style={{ background: "#c9a98a", color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                {t.gallery.addBtn}
              </button>
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 24, marginTop: 32 }}>
            {allPieces.map(piece => (
              <div key={piece.id} style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", transition: "transform 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ height: 180, overflow: "hidden" }}>
                  {piece.preview ? (
                    <img src={piece.preview} alt={piece.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <div style={{ height: "100%", background: `linear-gradient(135deg, ${piece.color}88, ${piece.color}33)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44 }}>🎨</div>
                  )}
                </div>
                <div style={{ padding: "14px 18px 18px" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, margin: "0 0 5px", color: "#2c2419" }}>{piece.title}</h3>
                  <p style={{ fontSize: 13, color: "#a0998e", lineHeight: 1.6, margin: "0 0 12px" }}>{piece.desc}</p>
                  <InquireButton label={t.gallery.inquire} color={piece.color} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #ede8e1", padding: "28px 32px", textAlign: "center", background: "#fff" }}>
        <p style={{ fontSize: 13, color: "#b0a898", margin: 0 }}>
          © 2025 {lang === "zh" ? "鄭凌婷" : "Jeng Ling-Ting"} · Taipei, Taiwan · +886 976 531 325 · lingting1228@gmail.com
        </p>
      </footer>
    </div>
  );
}

function InquireButton({ label, color }) {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  if (sent) return <p style={{ color: "#7ab5c0", fontSize: 13, fontWeight: 600, margin: 0, textAlign: "center" }}>✓ Sent!</p>;
  if (open) return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" style={{ width: "100%", border: "1px solid #e0d9d0", borderRadius: 6, padding: "7px 10px", fontSize: 13, fontFamily: "inherit", outline: "none", marginBottom: 7, boxSizing: "border-box" }} />
      <button onClick={() => { if (email) setSent(true); }} style={{ background: color, color: "#fff", border: "none", borderRadius: 6, padding: "7px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", width: "100%" }}>→</button>
    </div>
  );
  return <button onClick={() => setOpen(true)} style={{ background: color, color: "#fff", border: "none", borderRadius: 6, padding: "8px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", width: "100%", fontFamily: "inherit" }}>{label}</button>;
}