/* main.js
   - partículas leves
   - tradução EN/PT (clique nas flags)
   - menu hamburger (mobile)
   - comportamento: fechar mobile menu ao clicar em um link
*/

/* ================== DOM READY ================== */
document.addEventListener('DOMContentLoaded', () => {
  /* ---------- particles (leve) ---------- */
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  let particles = [];

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    initParticles();
  });

  class P {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.r = Math.random() * 2 + 0.6;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.alpha = 0.5 + Math.random() * 0.6;
    }
    step() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < -10 || this.x > w + 10 || this.y < -10 || this.y > h + 10) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.fillStyle = `rgba(56,189,248, ${this.alpha})`;
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.round(Math.max(40, Math.min(110, w / 12)));
    for (let i = 0; i < count; i++) particles.push(new P());
  }

  function loop() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.step(); p.draw(); });
    requestAnimationFrame(loop);
  }

  initParticles();
  loop();

  /* ============= Mobile menu toggle ============= */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  function toggleMobileMenu(forceState) {
    const isOpen = mobileMenu.classList.contains('open');
    const willOpen = typeof forceState === 'boolean' ? forceState : !isOpen;
    mobileMenu.classList.toggle('open', willOpen);
    hamburger.setAttribute('aria-expanded', String(willOpen));
    mobileMenu.setAttribute('aria-hidden', String(!willOpen));
  }

  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // close mobile menu when clicking a link
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => toggleMobileMenu(false));
  });

  // close mobile menu if clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.hamburger')) {
      toggleMobileMenu(false);
    }
  });

  /* ============= Translations (EN / PT) ============= */
  const translations = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_ceo: "CEO",
      nav_contact: "Contact",
      hero_title: "Building the Future in Apps",
      hero_text: "At <strong>Gennisys</strong>, we transform ideas into robust, secure, and scalable digital solutions.",
      btn_contact: "Get in Touch",
      about_title: "About Us",
      about_text: "Gennisys was born with the mission of creating applications and digital systems that combine innovation, modern design and performance. We develop reliable solutions for Android and iOS, helping businesses and entrepreneurs reach new heights.",
      ceo_name: "Tiago Cardoso",
      ceo_title: "Founder & CEO",
      ceo_text: "With vision and passion for technology, Tiago leads Gennisys to create impactful apps and digital solutions that inspire innovation and deliver results.",
      contact_title: "Contact Us",
      contact_text: "Have an idea or project? Let's talk and make it real!"
    },
    pt: {
      nav_home: "Início",
      nav_about: "Sobre",
      nav_ceo: "CEO",
      nav_contact: "Contato",
      hero_title: "Construindo o Futuro em Apps",
      hero_text: "Na <strong>Gennisys</strong>, transformamos ideias em soluções digitais robustas, seguras e escaláveis.",
      btn_contact: "Fale Conosco",
      about_title: "Sobre Nós",
      about_text: "A Gennisys nasceu com a missão de criar aplicativos e sistemas digitais que unem inovação, design moderno e performance. Desenvolvemos soluções para Android e iOS, ajudando empresas e empreendedores a alcançarem novos patamares.",
      ceo_name: "Tiago Cardoso",
      ceo_title: "Fundador & CEO",
      ceo_text: "Com visão e paixão por tecnologia, Tiago lidera a Gennisys para criar aplicativos impactantes e soluções digitais que inspiram inovação e entregam resultados.",
      contact_title: "Entre em Contato",
      contact_text: "Tem uma ideia ou projeto? Vamos conversar e transformar em realidade!"
    }
  };

  // set default language
  let currentLang = 'en';
  function applyTranslations(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.dataset.key;
      if (!key) return;
      const value = translations[lang] && translations[lang][key];
      if (value !== undefined) el.innerHTML = value;
    });
  }
  applyTranslations(currentLang);

  // flags click -> change language
  document.querySelectorAll('.flag').forEach(img => {
    img.addEventListener('click', () => {
      const lang = img.dataset.lang;
      if (lang && translations[lang]) applyTranslations(lang);
    });
  });

  /* ========= ensure that anchor clicks do not hide content under navbar ========= */
  // scroll-margin-top already set in CSS (html { scroll-padding-top: 88px; })
});
