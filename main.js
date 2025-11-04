/* =========================================
   Gennisys - main.js
   - Animação de background (digital, em grid)
   - Menu mobile toggle (hamburger)
   - Tradução EN/PT (clique nas flags)
   - Fechar mobile menu ao clicar fora
   - Animação do logo ao carregar
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Digital Grid Particles (leve, fundo animado) ---------- */
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);
  let particles = [];
  const particleCount = () => Math.round(Math.max(60, Math.min(150, w / 10)));
  const gridSpacing = 40;

  window.addEventListener("resize", () => {
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
      this.density = Math.random() * 40 + 5;
      this.alpha = 0.5 + Math.random() * 0.5;
    }
    step() {
      const distance = Math.sqrt(
        Math.pow(this.x - mouse.x, 2) + Math.pow(this.y - mouse.y, 2),
      );
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
    radius: 120,
  };

  window.addEventListener("mousemove", (event) => {
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
    particles.forEach((p) => {
      p.step();
      p.draw();
    });
    requestAnimationFrame(loopParticles);
  }

  initParticles();
  loopParticles();

  /* ---------- Mobile menu toggle ---------- */
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  function toggleMobileMenu(forceState) {
    if (!mobileMenu || !hamburger) return;
    const isOpen = mobileMenu.classList.contains("open");
    const willOpen = typeof forceState === "boolean" ? forceState : !isOpen;
    mobileMenu.classList.toggle("open", willOpen);
    hamburger.setAttribute("aria-expanded", String(willOpen));
    mobileMenu.setAttribute("aria-hidden", String(!willOpen));
  }

  if (hamburger) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Close menu when a link is clicked
  document.querySelectorAll(".mobile-menu a").forEach((a) => {
    a.addEventListener("click", () => toggleMobileMenu(false));
  });

  // Close menu if user clicks outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".mobile-menu") && !e.target.closest(".hamburger")) {
      toggleMobileMenu(false);
    }
  });

  // Close menu on resize
  window.addEventListener("resize", () => {
    toggleMobileMenu(false);
  });

  /* ---------- Translations EN/PT ---------- */
  const translations = {
    en: {
      nav_home: "Home",
      nav_leadership: "Leadership",
      nav_vision: "Vision",
      nav_solutions: "Solutions",
      nav_ecosystem: "Ecosystem",
      nav_news: "News",
      nav_contact: "Contact",
      hero_badge: "Independent App Studio",
      hero_title: "Our Products, Built with Vision",
      hero_text:
        'At <strong class="brand-highlight">Gennisys</strong>, we conceive, design, and operate a proprietary portfolio of applications—no outsourced work, only experiences driven by our product vision.',
      btn_contact: "Contact the Team",
      btn_news: "Product Updates",
      hero_point_1:
        "Integrated product squads advancing our proprietary mobile, web, and XR platforms.",
      hero_point_2:
        "AI-first design and engineering powering an ambitious internal roadmap.",
      hero_point_3:
        "Continuous analytics, live operations, and structured community engagement around our apps.",
      hero_stack_title: "Core focus areas:",
      metric_products: "Products on the roadmap",
      metric_users: "Users we plan to reach",
      metric_markets: "Markets we're entering",
      metric_uptime: "Reliability across our stack",
      ceo_badge: "Leadership",
      ceo_section_title: "Meet the Founder",
      ceo_name: "Tiago Cardoso",
      ceo_title: "Founder & CEO",
      ceo_text:
        "Tiago sets the strategic agenda for Gennisys, commanding execution across product, engineering, and audience expansion to uphold our independent vision.",
      ceo_highlight_1_title: "Product Governance",
      ceo_highlight_1_text:
        "Directs the proprietary roadmap and enforces disciplined delivery for every launch.",
      ceo_highlight_2_title: "Engineering Stewardship",
      ceo_highlight_2_text:
        "Leads technical excellence, resilient infrastructure, and continuous innovation standards.",
      ceo_highlight_3_title: "Market Relationships",
      ceo_highlight_3_text:
        "Activates strategic alliances that extend distribution and stakeholder value.",
      ceo_quote:
        "“We design, validate, and scale the digital products we believe must exist—precise, responsive, and built for leadership.”",
      vision_badge: "Vision 2025",
      vision_title: "End-to-end execution, fully internal.",
      vision_text:
        "Cross-functional teams align strategy, design, and engineering to convert proprietary innovation into global platforms.",
      vision_kpi_1: "Platforms deployed",
      vision_kpi_2: "Prototypes in validation",
      vision_kpi_3: "Operational coverage",
      vision_card_1_title: "Acceleration Pods",
      vision_card_1_text:
        "Modular squads converting validated concepts into production-ready applications within weeks.",
      vision_card_2_title: "AI-First Experiences",
      vision_card_2_text:
        "Intelligent systems embedded in every product we operate.",
      vision_card_3_title: "Global Readiness",
      vision_card_3_text:
        "Localization, compliance, and infrastructure engineered for worldwide launches.",
      apps_badge: "Gennisys Portfolio",
      apps_title: "Our Applications",
      apps_subtitle:
        "Explore the proprietary applications engineered entirely in-house.",
      app_calculator_title: "GenCalc",
      app_calculator_desc:
        "Advanced calculator with scientific functions, history tracking, and an intuitive interface.",
      app_calendar_title: "BudgetBox",
      app_calendar_desc:
        "Smart financial manager to track expenses, set budgets, and achieve your financial goals.",
      app_maps_title: "FazendaRPG",
      app_maps_desc:
        "Immersive farming RPG game where you build and manage your own virtual farm.",
      app_games_title: "Mobile Games",
      app_games_desc:
        "Immersive 2D and 3D games produced by our internal game laboratory.",
      app_utilities_title: "Utility Suite",
      app_utilities_desc:
        "Essential productivity and optimization tools spanning our ecosystem.",
      app_music_title: "Audio Studio",
      app_music_desc:
        "Professional audio creation and editing tools from our creator stack.",
      ecosystem_badge: "Build Engine",
      ecosystem_title: "An internal pipeline for breakthrough products.",
      ecosystem_text:
        "Every discipline collaborates to operate the applications we own, from research through live operations.",
      ecosystem_column_1_title: "Product Research",
      ecosystem_column_1_item_1: "Audience intelligence & roadmap validation",
      ecosystem_column_1_item_2: "Brand systems & design language for our apps",
      ecosystem_column_1_item_3: "Concept sprints & prototype labs",
      ecosystem_column_2_title: "Engineering Core",
      ecosystem_column_2_item_1:
        "Native and cross-platform builds across our stack",
      ecosystem_column_2_item_2: "AI-driven personalization frameworks",
      ecosystem_column_2_item_3: "Secure, scalable cloud backbone",
      ecosystem_column_3_title: "Operations & Growth",
      ecosystem_column_3_item_1: "Analytics frameworks & experimentation",
      ecosystem_column_3_item_2: "LiveOps orchestration & release cadence",
      ecosystem_column_3_item_3:
        "Monetization experiments & ecosystem alliances",
      partner_caption: "Strategic partners",
      partner_slot: "",
      partner_note:
        "Global technology partners amplifying the reach of our proprietary applications.",
      news_badge: "Newsroom",
      news_title: "Latest from Gennisys",
      news_subtitle: "Follow the milestones shaping our proprietary roadmap.",
      btn_subscribe: "Notify me",
      news_note: "We share release notes and corporate milestones regularly.",
      contact_badge: "Contact",
      contact_title: "Reach Gennisys",
      contact_text:
        "For inquiries about our apps, media coverage, or strategic partnerships, connect with our studio team.",
      contact_channel_title: "Media & Partnerships",
      contact_channel_text:
        "Press, distribution, and strategic collaboration requests are welcome.",
      contact_cta_title: "Connect with the Studio",
      contact_bullet_1: "Portfolio briefings & beta access",
      contact_bullet_2: "Product roadmap briefings & community initiatives",
      contact_bullet_3: "Strategic alliances that amplify our apps",
      btn_project: "Contact us",
    },
    pt: {
      nav_home: "Início",
      nav_leadership: "Liderança",
      nav_vision: "Visão",
      nav_solutions: "Soluções",
      nav_ecosystem: "Ecossistema",
      nav_news: "Notícias",
      nav_contact: "Contato",
      hero_badge: "Estúdio Independente de Apps",
      hero_title: "Nossos Produtos, Construídos com Visão",
      hero_text:
        'Na <strong class="brand-highlight">Gennisys</strong>, concebemos, projetamos e operamos nosso portfólio proprietário de aplicativos — nada terceirizado, apenas experiências guiadas pela nossa visão de produto.',
      btn_contact: "Falar com a Equipe",
      btn_news: "Atualizações de Produto",
      hero_point_1:
        "Squads integrados evoluindo nossas plataformas proprietárias para mobile, web e XR.",
      hero_point_2:
        "Design e engenharia IA-first impulsionando um roadmap interno ambicioso.",
      hero_point_3:
        "Analytics contínuos, operações ao vivo e engajamento estruturado da comunidade em torno dos nossos apps.",
      hero_stack_title: "Áreas de foco:",
      metric_products: "Produtos no roadmap",
      metric_users: "Usuários que planejamos alcançar",
      metric_markets: "Mercados em que estamos entrando",
      metric_uptime: "Confiabilidade do nosso stack",
      ceo_badge: "Liderança",
      ceo_section_title: "Conheça o fundador",
      ceo_name: "Tiago Cardoso",
      ceo_title: "Fundador & CEO",
      ceo_text:
        "Tiago define a agenda estratégica da Gennisys, coordenando execução em produto, engenharia e expansão de audiência para sustentar nossa visão independente.",
      ceo_highlight_1_title: "Governança de Produto",
      ceo_highlight_1_text:
        "Direciona o roadmap proprietário e assegura entregas disciplinadas em cada lançamento.",
      ceo_highlight_2_title: "Liderança de Engenharia",
      ceo_highlight_2_text:
        "Comanda excelência técnica, infraestrutura resiliente e padrões contínuos de inovação.",
      ceo_highlight_3_title: "Relacionamentos de Mercado",
      ceo_highlight_3_text:
        "Ativa alianças estratégicas que ampliam distribuição e valor para stakeholders.",
      ceo_quote:
        "“Projetamos, validamos e escalamos os produtos digitais que acreditamos que precisam existir — precisos, responsivos e com liderança.”",
      vision_badge: "Visão 2025",
      vision_title: "Execução de ponta a ponta, 100% interna.",
      vision_text:
        "Equipes multidisciplinares alinham estratégia, design e engenharia para converter inovação proprietária em plataformas globais.",
      vision_kpi_1: "Plataformas implantadas",
      vision_kpi_2: "Protótipos em validação",
      vision_kpi_3: "Cobertura operacional",
      vision_card_1_title: "Pods de Aceleração",
      vision_card_1_text:
        "Squads modulares transformando conceitos validados em aplicações prontas para produção em semanas.",
      vision_card_2_title: "Experiências IA-first",
      vision_card_2_text:
        "Sistemas inteligentes incorporados em cada produto que operamos.",
      vision_card_3_title: "Prontos para o mundo",
      vision_card_3_text:
        "Localização, compliance e infraestrutura projetadas para lançamentos globais.",
      apps_badge: "Portfólio Gennisys",
      apps_title: "Nossos Aplicativos",
      apps_subtitle:
        "Explore os aplicativos proprietários projetados integralmente in-house.",
      app_calculator_title: "GenCalc",
      app_calculator_desc:
        "Calculadora avançada com funções científicas, histórico e interface intuitiva.",
      app_calendar_title: "BudgetBox",
      app_calendar_desc:
        "Gerenciador financeiro inteligente para controlar despesas, definir orçamentos e alcançar suas metas.",
      app_maps_title: "FazendaRPG",
      app_maps_desc:
        "Jogo RPG de fazenda imersivo onde você constrói e gerencia sua própria fazenda virtual.",
      app_games_title: "Jogos Mobile",
      app_games_desc:
        "Jogos 2D e 3D imersivos produzidos pelo nosso laboratório interno.",
      app_utilities_title: "Suíte de Utilitários",
      app_utilities_desc:
        "Ferramentas essenciais de produtividade e otimização que percorrem nosso ecossistema.",
      app_music_title: "Estúdio de Áudio",
      app_music_desc:
        "Ferramentas profissionais de criação e edição de áudio do nosso stack para criadores.",
      ecosystem_badge: "Motor de Construção",
      ecosystem_title: "Um pipeline interno para produtos de ruptura.",
      ecosystem_text:
        "Cada disciplina opera em sincronia para evoluir os apps que nos pertencem, da pesquisa às operações ao vivo.",
      ecosystem_column_1_title: "Pesquisa de Produto",
      ecosystem_column_1_item_1:
        "Inteligência de audiência & validação de roadmap",
      ecosystem_column_1_item_2:
        "Sistemas de marca & linguagem de design dos nossos apps",
      ecosystem_column_1_item_3:
        "Sprints de conceito & laboratórios de protótipos",
      ecosystem_column_2_title: "Núcleo de Engenharia",
      ecosystem_column_2_item_1:
        "Builds nativos e multiplataforma em todo o nosso stack",
      ecosystem_column_2_item_2: "Frameworks de personalização movidos por IA",
      ecosystem_column_2_item_3: "Backbone seguro e escalável em nuvem",
      ecosystem_column_3_title: "Operações & Crescimento",
      ecosystem_column_3_item_1: "Frameworks de analytics & experimentação",
      ecosystem_column_3_item_2:
        "Orquestração de LiveOps & cadência de lançamentos",
      ecosystem_column_3_item_3:
        "Experimentos de monetização & alianças de ecossistema",
      partner_caption: "Parceiros estratégicos",
      partner_slot: "",
      partner_note:
        "Parceiros globais de tecnologia que ampliam o alcance dos nossos aplicativos proprietários.",
      news_badge: "Sala de Imprensa",
      news_title: "Atualizações da Gennisys",
      news_subtitle:
        "Acompanhe os marcos que moldam nosso roadmap proprietário.",
      btn_subscribe: "Quero ser notificado",
      news_note:
        "Compartilhamos notas de versão e marcos corporativos regularmente.",
      contact_badge: "Contato",
      contact_title: "Conecte-se com a Gennisys",
      contact_text:
        "Para solicitações sobre nossos apps, cobertura de imprensa ou parcerias estratégicas, conecte-se com a nossa equipe de estúdio.",
      contact_channel_title: "Imprensa & Parcerias",
      contact_channel_text:
        "Pedidos de imprensa, distribuição e colaborações estratégicas são bem-vindos.",
      contact_cta_title: "Conecte-se ao Estúdio",
      contact_bullet_1: "Briefings do portfólio & acesso a betas",
      contact_bullet_2: "Briefings de roadmap & iniciativas de comunidade",
      contact_bullet_3: "Alianças estratégicas que amplificam nossos apps",
      btn_project: "Fale conosco",
    },
  };

  const newsEntries = {
    en: [
      {
        date: "Sep 2025",
        tag: "Launch",
        title: "Gennisys AI Studio enters private beta",
        excerpt:
          "Our AI-powered co-creation environment is rolling out to early design partners with real-time copilots and workflow automations.",
      },
      {
        date: "Aug 2025",
        tag: "Partnership",
        title: "Strategic alliance expands our cloud reach",
        excerpt:
          "We are partnering with leading providers to deliver low-latency, secure distribution for our global user base.",
      },
      {
        date: "Jul 2025",
        tag: "Update",
        title: "Navigation Plus adds adaptive offline routing",
        excerpt:
          "The latest release introduces smart caching, multi-city packs, and predictive routing for commuters everywhere.",
      },
    ],
    pt: [
      {
        date: "Set 2025",
        tag: "Lançamento",
        title: "Gennisys AI Studio inicia beta privado",
        excerpt:
          "Nosso ambiente de co-criação com IA chega aos parceiros iniciais com copilotos em tempo real e automações de fluxo de trabalho.",
      },
      {
        date: "Ago 2025",
        tag: "Parceria",
        title: "Aliança estratégica amplia nossa presença em nuvem",
        excerpt:
          "Estamos unindo forças com provedores líderes para entregar distribuição segura e de baixa latência para nossa base global de usuários.",
      },
      {
        date: "Jul 2025",
        tag: "Atualização",
        title: "Navigation Plus ganha rotas offline adaptativas",
        excerpt:
          "A nova versão introduz cache inteligente, pacotes multi-cidade e rotas preditivas para consumidores em qualquer lugar.",
      },
    ],
  };

  // set default language
  let currentLang = "pt";
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  function observeReveal(element) {
    if (!element) return;
    if (prefersReducedMotion) {
      element.classList.add("is-visible");
      return;
    }
    revealObserver.observe(element);
  }

  document.querySelectorAll("[data-reveal]").forEach(observeReveal);

  const counters = Array.from(document.querySelectorAll("[data-count]"));

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.55 },
  );

  function formatCounterValue(value, el) {
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const formatted =
      decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
    return `${prefix}${formatted}${suffix}`;
  }

  function setCounterFinal(el) {
    const target = parseFloat(el.dataset.count || "0");
    el.textContent = formatCounterValue(target, el);
    el.dataset.animated = "true";
  }

  function animateCounter(el) {
    if (!el || el.dataset.animated === "true") return;
    if (prefersReducedMotion) {
      setCounterFinal(el);
      return;
    }
    const target = parseFloat(el.dataset.count || "0");
    const duration = parseInt(el.dataset.duration || "1600", 10);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    el.dataset.animated = "true";
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = target * eased;
      const displayValue =
        decimals > 0
          ? currentValue.toFixed(decimals)
          : Math.round(currentValue).toString();
      el.textContent = `${prefix}${displayValue}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        const finalValue =
          decimals > 0
            ? target.toFixed(decimals)
            : Math.round(target).toString();
        el.textContent = `${prefix}${finalValue}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }

  counters.forEach((counterEl) => {
    if (!counterEl) return;
    if (prefersReducedMotion) {
      setCounterFinal(counterEl);
    } else {
      counterEl.textContent = formatCounterValue(0, counterEl);
      counterObserver.observe(counterEl);
    }
  });

  function renderNews(lang) {
    const grid = document.getElementById("newsGrid");
    if (!grid) return;
    const entries =
      newsEntries[lang] && newsEntries[lang].length
        ? newsEntries[lang]
        : newsEntries.en || [];
    grid.innerHTML = "";

    entries.forEach((item) => {
      const article = document.createElement("article");
      article.className = "news-item";
      article.setAttribute("data-reveal", "");
      article.innerHTML = `
        <div class="news-meta">
          <span>${item.date}</span>
          <span class="news-tag">${item.tag}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
      `;
      grid.appendChild(article);
      observeReveal(article);
    });
  }

  function initAnchorLinks() {
    document.querySelectorAll("[data-go]").forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        const targetSelector = trigger.dataset.go;
        if (!targetSelector) return;
        const target = document.querySelector(targetSelector);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function initNewsSubscription() {
    const subscribeBtn = document.getElementById("subscribeNews");
    if (!subscribeBtn) return;
    subscribeBtn.addEventListener("click", () => {
      window.location.href =
        "mailto:info@gennisys.com?subject=Subscribe%20to%20Gennisys%20Newsroom";
    });
  }

  function initAppLinks() {
    const appCards = document.querySelectorAll(".apps-grid .app-item");
    if (!appCards.length) return;
    appCards.forEach((card) => {
      card.addEventListener("click", (event) => {
        const rawUrl = card.dataset.appUrl || card.getAttribute("href") || "";
        const url = rawUrl.trim();
        if (!url || url === "#") {
          event.preventDefault();
          return;
        }
        event.preventDefault();
        const targetPref = (card.dataset.appTarget || "new").toLowerCase();
        if (targetPref === "self") {
          window.location.href = url;
        } else {
          window.open(url, "_blank", "noopener");
        }
      });
    });
  }

  function initTilt() {
    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    if (!pointerFine || prefersReducedMotion) return;
    const tiltElements = document.querySelectorAll(".tilt");

    tiltElements.forEach((el) => {
      const maxTilt = parseFloat(el.dataset.tiltMax || "10");
      el.addEventListener("mousemove", (event) => {
        const rect = el.getBoundingClientRect();
        const relativeX = (event.clientX - rect.left) / rect.width;
        const relativeY = (event.clientY - rect.top) / rect.height;
        const tiltX = (0.5 - relativeY) * maxTilt;
        const tiltY = (relativeX - 0.5) * maxTilt;
        el.style.transform = `perspective(1200px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
      });
    });
  }

  function applyTranslations(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.dataset.key;
      if (!key) return;
      const value = translations[lang][key];
      if (value !== undefined) el.innerHTML = value;
    });
    renderNews(lang);
  }

  applyTranslations(currentLang);
  initAnchorLinks();
  initNewsSubscription();
  initTilt();
  initAppLinks();

  // Flags click -> change language
  document.querySelectorAll(".flag").forEach((img) => {
    img.addEventListener("click", () => {
      const lang = img.dataset.lang;
      if (lang && translations[lang]) applyTranslations(lang);
    });
  });

  /* ---------- Logo Animation with Rotating G ---------- */
  function initLogoAnimation() {
    // Animate G in mobile logo
    const mobileLogoText = document.querySelector(".mobile-only-logo");
    if (mobileLogoText && mobileLogoText.textContent.includes("Gennisys")) {
      const text = mobileLogoText.textContent;
      mobileLogoText.innerHTML = `<span class="rotating-g">${text.charAt(0)}</span>${text.slice(1)}`;
    }
  }

  // Initialize logo animation
  initLogoAnimation();
});
