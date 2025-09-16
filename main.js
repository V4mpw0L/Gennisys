/* =========================================
   Gennisys - main.js
   - Animação de background (digital, em grid)
   - Menu mobile toggle (hamburger)
   - Tradução EN/PT (clique nas flags)
   - Fechar mobile menu ao clicar fora
   - Animação do logo ao carregar
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Digital Grid Particles (leve, fundo animado) ---------- */
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  let particles = [];
  const particleCount = () => Math.round(Math.max(60, Math.min(150, w / 10)));
  const gridSpacing = 40;

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    initParticles();
  });

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.baseX = x;
      this.baseY = y;
      this.density = (Math.random() * 40) + 5;
      this.alpha = 0.5 + Math.random() * 0.5;
    }
    step() {
      const distance = Math.sqrt(Math.pow(this.x - mouse.x, 2) + Math.pow(this.y - mouse.y, 2));
      const forceDirectionX = (this.x - mouse.x) / distance;
      const forceDirectionY = (this.y - mouse.y) / distance;
      const maxDistance = mouse.radius;
      const force = (maxDistance - distance) / maxDistance;
      const directionX = forceDirectionX * force * this.density;
      const directionY = forceDirectionY * force * this.density;

      if (distance < mouse.radius) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        if (this.x !== this.baseX) {
          const dx = this.x - this.baseX;
          this.x -= dx / 12;
        }
        if (this.y !== this.baseY) {
          const dy = this.y - this.baseY;
          this.y -= dy / 12;
        }
      }
    }
    draw() {
      ctx.beginPath();
      ctx.fillStyle = `rgba(0,255,136,${this.alpha})`;
      ctx.arc(this.x, this.y, 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const mouse = {
    x: undefined,
    y: undefined,
    radius: 120
  };

  window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  function initParticles() {
    particles = [];
    for (let y = 0; y < h; y += gridSpacing) {
      for (let x = 0; x < w; x += gridSpacing) {
        particles.push(new Particle(x, y));
      }
    }
  }

  function loopParticles() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.step(); p.draw(); });
    requestAnimationFrame(loopParticles);
  }

  initParticles();
  loopParticles();

  /* ---------- Mobile menu toggle ---------- */
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

  // Close menu when a link is clicked
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => toggleMobileMenu(false));
  });

  // Close menu if user clicks outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.hamburger')) {
      toggleMobileMenu(false);
    }
  });
  
  // Close menu on resize
  window.addEventListener('resize', () => {
    toggleMobileMenu(false);
  });

  /* ---------- Translations EN/PT ---------- */
  const translations = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_apps: "Apps",
      nav_ceo: "CEO",
      nav_contact: "Contact",
      hero_title: "Building the Future in Apps",
      hero_text: "At <strong>Gennisys</strong>, we create innovative mobile applications and digital solutions that define the next generation of technology.",
      btn_contact: "Get in Touch",
      about_title: "About Us",
      about_text: "Gennisys specializes in developing innovative mobile applications and digital solutions. We create our own suite of professional apps including productivity tools, utilities, and games, all designed with cutting-edge technology and modern interfaces for the mobile-first world.",
      apps_title: "Our Applications",
      apps_subtitle: "Discover our suite of professional mobile applications",
      app_calculator_title: "Smart Calculator",
      app_calculator_desc: "Advanced calculator with scientific functions and history tracking",
      app_calendar_title: "Pro Calendar",
      app_calendar_desc: "Intelligent calendar with smart scheduling and reminders",
      app_maps_title: "Navigation Plus",
      app_maps_desc: "Enhanced mapping solution with offline capabilities",
      app_games_title: "Mobile Games",
      app_games_desc: "Engaging 2D and 3D games optimized for mobile experience",
      app_utilities_title: "Utility Suite",
      app_utilities_desc: "Essential tools for productivity and system optimization",
      app_music_title: "Audio Studio",
      app_music_desc: "Professional audio editing and music creation tools",
      ceo_name: "Tiago Cardoso",
      ceo_title: "Founder & CEO",
      ceo_text: "With vision and passion for technology, Tiago leads Gennisys to create impactful mobile applications that inspire innovation and deliver exceptional user experiences.",
      contact_title: "Contact Us",
      contact_text: "Ready to explore our applications? Let's connect and discuss the future of mobile technology!"
    },
    pt: {
      nav_home: "Início",
      nav_about: "Sobre",
      nav_apps: "Apps",
      nav_ceo: "CEO",
      nav_contact: "Contato",
      hero_title: "Construindo o Futuro em Apps",
      hero_text: "Na <strong>Gennisys</strong>, criamos aplicativos móveis inovadores e soluções digitais que definem a próxima geração de tecnologia.",
      btn_contact: "Fale Conosco",
      about_title: "Sobre Nós",
      about_text: "A Gennisys é especializada no desenvolvimento de aplicativos móveis inovadores e soluções digitais. Criamos nossa própria suíte de apps profissionais incluindo ferramentas de produtividade, utilitários e jogos, todos projetados com tecnologia de ponta e interfaces modernas para o mundo mobile-first.",
      apps_title: "Nossos Aplicativos",
      apps_subtitle: "Descubra nossa suíte de aplicativos móveis profissionais",
      app_calculator_title: "Calculadora Inteligente",
      app_calculator_desc: "Calculadora avançada com funções científicas e histórico",
      app_calendar_title: "Calendário Pro",
      app_calendar_desc: "Calendário inteligente com agendamento e lembretes",
      app_maps_title: "Navegação Plus",
      app_maps_desc: "Solução de mapas aprimorada com recursos offline",
      app_games_title: "Jogos Mobile",
      app_games_desc: "Jogos envolventes 2D e 3D otimizados para experiência móvel",
      app_utilities_title: "Suíte de Utilitários",
      app_utilities_desc: "Ferramentas essenciais para produtividade e otimização",
      app_music_title: "Estúdio de Áudio",
      app_music_desc: "Ferramentas profissionais de edição de áudio e criação musical",
      ceo_name: "Tiago Cardoso",
      ceo_title: "Fundador & CEO",
      ceo_text: "Com visão e paixão por tecnologia, Tiago lidera a Gennisys para criar aplicativos móveis impactantes que inspiram inovação e entregam experiências excepcionais.",
      contact_title: "Entre em Contato",
      contact_text: "Pronto para explorar nossos aplicativos? Vamos nos conectar e discutir o futuro da tecnologia móvel!"
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
      const value = translations[lang][key];
      if (value !== undefined) el.innerHTML = value;
    });
  }

  applyTranslations(currentLang);

  // Flags click -> change language
  document.querySelectorAll('.flag').forEach(img => {
    img.addEventListener('click', () => {
      const lang = img.dataset.lang;
      if (lang && translations[lang]) applyTranslations(lang);
    });
  });

  // Animate SVG Logo
  const logo = document.getElementById('logoSvg');
  if (logo) {
    setTimeout(() => {
      logo.style.strokeDashoffset = '0';
    }, 500);
  }

});
