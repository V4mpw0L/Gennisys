/* ==========================================================================
   SYSCORV — CORE LOGIC & INTERACTIVITY ENGINE (main.js)
   - Interactive Canvas Mouse Spotlight (Pure ambient light, damped inertia)
   - Dual-Language (EN Default / PT-BR) Engine with LocalStorage
   - Obsidian Dark & Titanium Light Theme Controller
   - Dynamic Transmissions Stream & Article Modal
   - Scroll-Spy, Back-to-Top Button & Reveal Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. INTERACTIVE CANVAS MOUSE SPOTLIGHT (SMOOTH LERP INERTIA)
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('cyber-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const targetPos = { x: width * 0.5, y: height * 0.28 };
        const currentPos = { x: width * 0.5, y: height * 0.28 };
        let isHovered = false;
        const isMobile = window.innerWidth < 768;

        function drawSpotlight() {
            ctx.clearRect(0, 0, width, height);

            const isLight = document.body.getAttribute('data-theme-mode') === 'light';
            const spotRadius = isMobile ? 320 : 540;
            const spotGradient = ctx.createRadialGradient(
                currentPos.x, currentPos.y, 0,
                currentPos.x, currentPos.y, spotRadius
            );

            if (isLight) {
                spotGradient.addColorStop(0, 'rgba(2, 132, 199, 0.035)');
                spotGradient.addColorStop(0.5, 'rgba(14, 165, 233, 0.01)');
                spotGradient.addColorStop(1, 'rgba(248, 250, 252, 0)');
            } else {
                spotGradient.addColorStop(0, 'rgba(0, 229, 255, 0.032)');
                spotGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.01)');
                spotGradient.addColorStop(1, 'rgba(7, 9, 14, 0)');
            }

            ctx.fillStyle = spotGradient;
            ctx.beginPath();
            ctx.arc(currentPos.x, currentPos.y, spotRadius, 0, Math.PI * 2);
            ctx.fill();
        }

        function renderAtmosphere() {
            const dx = targetPos.x - currentPos.x;
            const dy = targetPos.y - currentPos.y;
            currentPos.x += dx * 0.06;
            currentPos.y += dy * 0.06;

            drawSpotlight();
            requestAnimationFrame(renderAtmosphere);
        }

        window.addEventListener('mousemove', (e) => {
            isHovered = true;
            targetPos.x = e.clientX;
            targetPos.y = e.clientY;
        }, { passive: true });

        window.addEventListener('mouseleave', () => {
            isHovered = false;
            targetPos.x = width * 0.5;
            targetPos.y = height * 0.28;
        });

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            if (!isHovered) {
                targetPos.x = width * 0.5;
                targetPos.y = height * 0.28;
            }
            drawSpotlight();
        }, { passive: true });

        renderAtmosphere();
    }

    // ----------------------------------------------------------------------
    // 2. DUAL-LANGUAGE LOCALIZATION ENGINE (EN DEFAULT / PT-BR)
    // ----------------------------------------------------------------------
    const i18n = {
        'en': {
            // Document Meta
            doc_title: 'SYSCORV — Systems Laboratory & Proprietary Software',
            doc_desc: 'Syscorv is an independent software engineering laboratory. We build proprietary, local-first architectures, spatial systems, and high-performance tools.',

            // Navigation
            nav_overview: 'Overview',
            nav_ecosystem: 'Ecosystem',
            nav_architecture: 'Directives',
            nav_transmissions: 'Dispatches',
            nav_founder: 'Leadership',
            nav_contact: 'Contact',
            nav_cta_apps: 'Explore Apps',

            // Hero
            hero_title_1: 'SYSTEMS ENGINEERING.',
            hero_title_2: 'PROPRIETARY HORIZONS.',
            hero_subtitle: '<strong class="syscorv-brand-highlight">SYSCORV</strong> is an independent software laboratory and technology entity. We design, architect, and operate resilient systems, local-first platforms, and high-fidelity spatial telemetry engines.',
            hero_cta_explore: 'Explore Ecosystem',
            hero_cta_arch: 'Engineering Directives',

            // Telemetry Strip
            telem_label_1: 'INDEPENDENCE',
            telem_val_1: 'Proprietary Core',
            telem_sub_1: 'Engineered with full architectural autonomy',
            telem_label_2: 'ARCHITECTURE',
            telem_val_2: 'Local-First',
            telem_sub_2: 'Deterministic offline availability',
            telem_label_3: 'DATA PRIVACY',
            telem_val_3: 'Client-Confined',
            telem_sub_3: 'State strictly resides on client hardware',
            telem_label_4: 'EXECUTION',
            telem_val_4: 'Hardware 60 FPS',
            telem_sub_4: 'GPU-optimized spatial rendering pipeline',

            // Ecosystem / Product Portfolio
            eco_index_title: 'PROPRIETARY ECOSYSTEM',
            eco_heading: 'Active Systems & Software',
            eco_desc: 'High-performance proprietary platforms and spatial telemetry engines in active operation.',
            passmap_subtitle: 'SPATIAL INTELLIGENCE & OFFLINE CARTOGRAPHY',
            badge_live: 'ONLINE // PRODUCTION',
            passmap_summary: '<strong>PassMap</strong> is Syscorv’s flagship cartographic suite. Engineered with an offline-first architecture, it integrates client-side vector map rendering, verified access databases, realtime environmental telemetry, and multi-sensor orientation.',
            btn_launch_passmap: 'Launch PassMap ↗',

            f1_title: '540+ Verified Points',
            f1_desc: 'Access protocols and logistics points.',
            f2_title: 'Offline-First Engine',
            f2_desc: 'Local IndexedDB persistence and tile caching.',
            f3_title: 'Environmental Telemetry',
            f3_desc: 'Realtime meteorological metrics and AQI index.',
            f4_title: 'Fluid 60 FPS Markers',
            f4_desc: 'Optimized GPU vector marker animations.',

            // Chips
            chip_offline: 'Offline PWA',
            chip_zero_cloud: 'Client-Confined State',
            chip_languages: '7 Synchronized Languages',
            chip_sw: 'Service Worker Build 168',
            chip_cross_platform: 'iOS & Android Ready',

            eco_pipeline_badge: 'RESEARCH & DEVELOPMENT',
            eco_pipeline_desc: 'Syscorv conducts continuous engineering in WebGL procedural rendering, decentralized state protocols, and resilient spatial architectures. New milestones are published through official dispatches.',

            // Architecture
            arch_index_title: 'TECHNICAL DIRECTIVES',
            arch_heading: 'Engineering Directives',
            arch_desc: 'Foundational principles governing system resilience, privacy guarantees, and software longevity.',
            pillar_1_title: 'Local-First Architecture',
            pillar_1_text: 'Systems preserve primary state locally within client storage (IndexedDB and persistent cache). Core capabilities operate deterministically regardless of network reachability.',
            pillar_2_title: 'Structural Privacy',
            pillar_2_text: 'Privacy is established through architecture rather than behavioral policies. External telemetry vectors are minimized, and sensitive session data remains on user hardware.',
            pillar_3_title: 'Computational Efficiency',
            pillar_3_text: 'Algorithmic parsimony and measured resource consumption. Built on concise Web APIs and vanilla runtimes, prioritizing rapid execution and sustained 60 FPS responsiveness.',
            pillar_4_title: 'Clarity & Aesthetic Rigor',
            pillar_4_text: 'Visual balance as an organic outcome of disciplined engineering. High-contrast typography, restrained geometry, and coherent spatial density.',

            // News
            news_index_title: 'OFFICIAL DISPATCHES',
            news_heading: 'Engineering Dispatches',
            news_desc: 'Technical notes, release reports, and development milestones from Syscorv.',
            news_read_more: 'Read Dispatch →',

            // Founder
            founder_index_title: 'LEADERSHIP & DIRECTION',
            founder_heading: 'Direction & Architecture',
            founder_desc: 'Independent foundation dedicated to resilient software design and autonomous systems.',
            founder_role: 'Founder & Systems Architect at SYSCORV',
            founder_bio: 'Focuses on local-first distributed systems, high-efficiency geospatial rendering, and data sovereignty. Directs technical architecture and proprietary software development across Syscorv.',
            btn_visit_founder: 'Personal Portal ↗',

            // Contact
            contact_index_title: 'COMMUNICATION',
            contact_heading: 'Institutional Inquiries',
            contact_desc: 'Channels for technical collaboration, software licensing, and institutional communication.',
            contact_direct_title: 'Direct Channels',
            contact_direct_desc: 'For institutional correspondence, security disclosures, and project inquiries:',
            contact_email_label: 'Official Electronic Mail',
            entity_text: '<strong class="syscorv-brand-highlight">SYSCORV</strong> operates as an independent software laboratory and technology entity. All applications, trademarks, and associated digital intellectual assets are fully registered.',
            form_title: 'Transmit Message',
            form_name: 'Name / Organization',
            form_name_ph: 'Your name or enterprise',
            form_email: 'Return Email',
            form_email_ph: 'your.email@domain.com',
            form_subject: 'Subject',
            form_subject_ph: 'e.g., Enterprise Licensing, Partnership or Inquiries',
            form_message: 'Message',
            form_message_ph: 'Detail your inquiry or proposal with clarity...',
            form_submit: 'Transmit Message',
            form_submitting: 'Transmitting...',
            form_success: '✓ Message transmitted successfully.',
            form_error: '✕ Transmission failed. Please contact us directly at contact@syscorv.com',

            // Modal & Footer
            modal_dispatch_label: 'DISPATCH ARCHIVE',
            modal_close: 'Close Dispatch',
            footer_slogan: 'Systems Intelligence. Proprietary Horizons.<br>Autonomous high-performance software laboratory.',
            footer_col_eco: 'Ecosystem',
            footer_col_arch: 'Directives',
            footer_col_contact: 'Institutional',
            footer_link_apps: 'Proprietary Software',
            footer_link_arch: 'Local-First Architecture',
            footer_link_privacy: 'Structural Privacy',
            footer_link_perf: 'Computational Efficiency',
            footer_link_news: 'Official Dispatches',
            footer_link_contact: 'Contact & Licensing',
            footer_founder_link: 'Founder Architect (v4mpw0l)',
            footer_status: 'SYSTEMS ONLINE',
            footer_rights: 'All rights reserved.',

            // Accessibility Labels
            aria_back_to_top: 'Back to top'
        },
        'pt-BR': {
            // Document Meta
            doc_title: 'SYSCORV — Laboratório de Sistemas & Software Proprietário',
            doc_desc: 'A Syscorv é um laboratório independente de engenharia de software. Desenvolvemos arquiteturas locais, sistemas espaciais e ferramentas de alto desempenho.',

            // Navigation
            nav_overview: 'Visão Geral',
            nav_ecosystem: 'Ecossistema',
            nav_architecture: 'Diretrizes',
            nav_transmissions: 'Transmissões',
            nav_founder: 'Liderança',
            nav_contact: 'Contato',
            nav_cta_apps: 'Explorar Apps',

            // Hero
            hero_title_1: 'ENGENHARIA DE SISTEMAS.',
            hero_title_2: 'HORIZONTES PROPRIETÁRIOS.',
            hero_subtitle: 'A <strong class="syscorv-brand-highlight">SYSCORV</strong> é um laboratório de engenharia de software e tecnologia independente. Concebemos, arquitetamos e operamos sistemas resilientes, plataformas locais autônomas e motores de telemetria espacial.',
            hero_cta_explore: 'Explorar Ecossistema',
            hero_cta_arch: 'Diretrizes de Engenharia',

            // Telemetry Strip
            telem_label_1: 'INDEPENDÊNCIA',
            telem_val_1: 'Núcleo Autônomo',
            telem_sub_1: 'Engenharia e governança proprietárias',
            telem_label_2: 'ARQUITETURA',
            telem_val_2: 'Local-First',
            telem_sub_2: 'Disponibilidade offline contínua',
            telem_label_3: 'PRIVACIDADE',
            telem_val_3: 'Local por Princípio',
            telem_sub_3: 'Armazenamento estritamente contido no dispositivo',
            telem_label_4: 'DESEMPENHO',
            telem_val_4: 'Aceleração Gráfica',
            telem_sub_4: 'Pipelines vetoriais otimizados em tempo real',

            // Ecosystem / Product Portfolio
            eco_index_title: 'ECOSSISTEMA PROPRIETÁRIO',
            eco_heading: 'Sistemas & Aplicações Ativas',
            eco_desc: 'Plataformas proprietárias de alto desempenho e motores de telemetria espacial em operação contínua.',
            passmap_subtitle: 'INTELIGÊNCIA ESPACIAL E CARTOGRAFIA OFFLINE',
            badge_live: 'ONLINE // PRODUÇÃO',
            passmap_summary: 'O <strong>PassMap</strong> é a suíte cartográfica proprietária da Syscorv. Estruturada sobre arquitetura offline-first, integra renderização vetorial no dispositivo, base verificada de acessos, telemetria ambiental em tempo real e orientação multissensorial.',
            btn_launch_passmap: 'Acessar PassMap ↗',

            f1_title: '540+ Pontos Verificados',
            f1_desc: 'Protocolos de acesso e notas logísticas unificadas.',
            f2_title: 'Arquitetura Offline',
            f2_desc: 'Persistência local em IndexedDB e cache vetorial.',
            f3_title: 'Telemetria Ambiental',
            f3_desc: 'Métricas meteorológicas e índice AQI em tempo real.',
            f4_title: 'Renderização a 60 FPS',
            f4_desc: 'Camada vetorial acelerada por hardware.',

            // Chips
            chip_offline: 'Offline PWA',
            chip_zero_cloud: 'Armazenamento Local',
            chip_languages: '7 Idiomas Sincronizados',
            chip_sw: 'Service Worker Build 168',
            chip_cross_platform: 'Compatível com iOS & Android',

            eco_pipeline_badge: 'PESQUISA & DESENVOLVIMENTO',
            eco_pipeline_desc: 'A Syscorv conduz pesquisa contínua em renderização procedural WebGL, protocolos de sincronização descentralizada e arquiteturas espaciais resilientes. Novos marcos são informados em comunicados oficiais.',

            // Architecture
            arch_index_title: 'DIRETRIZES TÉCNICAS',
            arch_heading: 'Diretrizes de Engenharia',
            arch_desc: 'Princípios fundamentais que regem a resiliência dos sistemas, garantias de privacidade e longevidade do software.',
            pillar_1_title: 'Arquitetura Local-First',
            pillar_1_text: 'Os sistemas mantêm seu estado primário no armazenamento local (IndexedDB e cache persistente). As funcionalidades fundamentais operam de maneira determinística, independente de conectividade.',
            pillar_2_title: 'Privacidade Estrutural',
            pillar_2_text: 'A privacidade é garantida pelo desenho arquitetural do sistema. Vetores de telemetria externa são suprimidos e dados sensíveis permanecem estritamente no dispositivo do usuário.',
            pillar_3_title: 'Eficiência Computacional',
            pillar_3_text: 'Parcimônia algorítmica e uso comedido de recursos. Construção com Web APIs modernas e código enxuto, priorizando inicialização imediata e estabilidade a 60 quadros por segundo.',
            pillar_4_title: 'Rigor Estético & Funcional',
            pillar_4_text: 'O equilíbrio visual concebido como extensão da disciplina de engenharia. Tipografia de alto contraste, geometria contida e densidade informacional equilibrada.',

            // News
            news_index_title: 'TRANSMISSÕES OFICIAIS',
            news_heading: 'Relatórios & Comunicados',
            news_desc: 'Notas técnicas, relatórios de lançamento e marcos de desenvolvimento da Syscorv.',
            news_read_more: 'Ler Comunicado →',

            // Founder
            founder_index_title: 'LIDERANÇA & DIREÇÃO',
            founder_heading: 'Direção & Arquitetura',
            founder_desc: 'Fundação independente dedicada à engenharia de software resiliente e sistemas autônomos.',
            founder_role: 'Fundador & Arquiteto de Sistemas na SYSCORV',
            founder_bio: 'Atua no desenvolvimento de sistemas locais resilientes, renderização geoespacial de alta eficiência e soberania de dados. Conduz a arquitetura técnica e o portfólio de software proprietário da Syscorv.',
            btn_visit_founder: 'Portal Pessoal ↗',

            // Contact
            contact_index_title: 'COMUNICAÇÃO',
            contact_heading: 'Contato Institucional',
            contact_desc: 'Canais para diálogo institucional, licenciamento de software e colaborações técnicas.',
            contact_direct_title: 'Canais Diretos',
            contact_direct_desc: 'Para correspondência institucional, relatórios técnicos e consultas sobre projetos:',
            contact_email_label: 'Correio Eletrônico Oficial',
            entity_text: 'A <strong class="syscorv-brand-highlight">SYSCORV</strong> atua como laboratório independente de software e tecnologia. Aplicações, marcas e ativos intelectuais associados possuem registro e titularidade proprietários.',
            form_title: 'Transmitir Mensagem',
            form_name: 'Nome / Organização',
            form_name_ph: 'Seu nome ou organização',
            form_email: 'E-mail para Resposta',
            form_email_ph: 'seu.email@dominio.com',
            form_subject: 'Assunto',
            form_subject_ph: 'ex: Licenciamento, Colaboração ou Consultas',
            form_message: 'Mensagem',
            form_message_ph: 'Descreva sua consulta ou proposta com objetividade...',
            form_submit: 'Transmitir Mensagem',
            form_submitting: 'Transmitindo...',
            form_success: '✓ Mensagem transmitida com sucesso.',
            form_error: '✕ Falha no envio. Por favor, utilize contact@syscorv.com',

            // Modal & Footer
            modal_dispatch_label: 'ARQUIVO DE NOTÍCIAS',
            modal_close: 'Fechar Artigo',
            footer_slogan: 'Inteligência de Sistemas. Horizontes Proprietários.<br>Laboratório independente de software de alto desempenho.',
            footer_col_eco: 'Ecossistema',
            footer_col_arch: 'Diretrizes',
            footer_col_contact: 'Institucional',
            footer_link_apps: 'Software Proprietário',
            footer_link_arch: 'Arquitetura Local-First',
            footer_link_privacy: 'Privacidade Estrutural',
            footer_link_perf: 'Eficiência Computacional',
            footer_link_news: 'Transmissões Oficiais',
            footer_link_contact: 'Contato & Licenciamento',
            footer_founder_link: 'Arquiteto Fundador (v4mpw0l)',
            footer_status: 'SISTEMAS OPERACIONAIS',
            footer_rights: 'Todos os direitos reservados.',

            // Accessibility Labels
            aria_back_to_top: 'Voltar ao topo'
        }
    };

    // CRITICAL: ENGLISH IS THE STRICT DEFAULT LANGUAGE
    const LANG_STORAGE_KEY = 'syscorv_language';
    let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || 'en';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem(LANG_STORAGE_KEY, lang);
        document.documentElement.lang = lang === 'pt-BR' ? 'pt-BR' : 'en';

        // Update Document Title & Description
        if (i18n[lang]) {
            if (i18n[lang].doc_title) document.title = i18n[lang].doc_title;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc && i18n[lang].doc_desc) metaDesc.setAttribute('content', i18n[lang].doc_desc);
        }

        // Update text nodes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                el.innerHTML = i18n[lang][key];
            }
        });

        // Update input/textarea placeholders
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (i18n[lang] && i18n[lang][key]) {
                el.setAttribute('placeholder', i18n[lang][key]);
            }
        });

        // Update accessibility attributes
        const backToTopBtn = document.getElementById('backToTopBtn');
        if (backToTopBtn && i18n[lang] && i18n[lang].aria_back_to_top) {
            backToTopBtn.setAttribute('aria-label', i18n[lang].aria_back_to_top);
            backToTopBtn.setAttribute('title', i18n[lang].aria_back_to_top);
        }

        // Update Footer Lang button active states
        const ptBtn = document.getElementById('footerLangPt');
        const enBtn = document.getElementById('footerLangEn');
        if (ptBtn && enBtn) {
            ptBtn.classList.toggle('active', lang === 'pt-BR');
            enBtn.classList.toggle('active', lang === 'en');
        }

        renderNewsStream();
    }

    const footerLangPt = document.getElementById('footerLangPt');
    const footerLangEn = document.getElementById('footerLangEn');
    if (footerLangPt) footerLangPt.addEventListener('click', () => applyLanguage('pt-BR'));
    if (footerLangEn) footerLangEn.addEventListener('click', () => applyLanguage('en'));

    // ----------------------------------------------------------------------
    // 3. THEME CONTROLLER (OBSIDIAN DARK & TITANIUM LIGHT)
    // ----------------------------------------------------------------------
    const THEME_STORAGE_KEY = 'syscorv_theme_mode';
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'dark';

    function applyTheme(theme) {
        document.body.setAttribute('data-theme-mode', theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);

        const darkBtn = document.getElementById('footerThemeDark');
        const lightBtn = document.getElementById('footerThemeLight');
        if (darkBtn && lightBtn) {
            darkBtn.classList.toggle('active', theme === 'dark');
            lightBtn.classList.toggle('active', theme === 'light');
        }
    }

    applyTheme(savedTheme);

    const footerThemeDark = document.getElementById('footerThemeDark');
    const footerThemeLight = document.getElementById('footerThemeLight');
    if (footerThemeDark) footerThemeDark.addEventListener('click', () => applyTheme('dark'));
    if (footerThemeLight) footerThemeLight.addEventListener('click', () => applyTheme('light'));

    // ----------------------------------------------------------------------
    // 4. DYNAMIC TRANSMISSIONS / NEWS STREAM & MODAL READER
    // ----------------------------------------------------------------------
    const newsContainer = document.getElementById('newsStreamGrid');
    const newsModal = document.getElementById('newsModal');
    const newsModalBackdrop = document.getElementById('newsModalBackdrop');
    const newsModalCloseBtn = document.getElementById('newsModalCloseBtn');
    const newsModalBackBtn = document.getElementById('newsModalBackBtn');

    function formatNewsDate(dateStr) {
        if (!dateStr) return '';
        const parts = String(dateStr).trim().split(' ');
        if (parts.length === 3) {
            return `<span class="date-num">${parts[0]}</span> <span class="date-month">${parts[1]}</span> <span class="date-num">${parts[2]}</span>`;
        }
        return dateStr;
    }

    function openNewsArticle(article) {
        if (!newsModal || !article) return;
        const isEn = currentLang === 'en';

        const category = isEn ? (article.categoriaEn || article.categoria) : article.categoria;
        const dateStr = isEn ? (article.dataEn || article.data) : article.data;
        const title = isEn ? (article.tituloEn || article.titulo) : article.titulo;
        const body = isEn ? (article.textoEn || article.texto) : article.texto;
        const authorName = article.author || 'Syscorv';
        const authorLabel = isEn ? 'AUTHOR' : 'AUTOR';

        document.getElementById('newsModalCategory').textContent = category;
        document.getElementById('newsModalTitle').textContent = title;
        document.getElementById('newsModalContent').innerHTML = body;

        const authorLabelEl = document.getElementById('newsModalAuthorLabel');
        if (authorLabelEl) authorLabelEl.textContent = authorLabel;

        const authorNameEl = document.getElementById('newsModalAuthor');
        if (authorNameEl) authorNameEl.textContent = authorName;

        const dateEl = document.getElementById('newsModalDate');
        if (dateEl) {
            dateEl.innerHTML = formatNewsDate(dateStr);
        }

        newsModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeNewsModal() {
        if (!newsModal) return;
        newsModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    if (newsModalCloseBtn) newsModalCloseBtn.addEventListener('click', closeNewsModal);
    if (newsModalBackBtn) newsModalBackBtn.addEventListener('click', closeNewsModal);
    if (newsModalBackdrop) newsModalBackdrop.addEventListener('click', closeNewsModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeNewsModal();
    });

    function renderNewsStream() {
        if (!newsContainer || !window.syscorvNoticias) return;
        const isEn = currentLang === 'en';
        const readLabel = isEn ? 'Read Full News →' : 'Ler Notícia Completa →';

        newsContainer.innerHTML = '';
        window.syscorvNoticias.forEach(item => {
            const card = document.createElement('article');
            card.className = 'news-card';
            card.setAttribute('data-reveal', '');

            const category = isEn ? (item.categoriaEn || item.categoria) : item.categoria;
            const date = isEn ? (item.dataEn || item.data) : item.data;
            const title = isEn ? (item.tituloEn || item.titulo) : item.titulo;
            const excerpt = isEn ? (item.excerptEn || item.excerpt) : item.excerpt;

            card.innerHTML = `
                <div class="news-card-header">
                    <span class="news-pill">${category}</span>
                    <span class="news-date">${formatNewsDate(date)}</span>
                </div>
                <h3 class="news-card-title">${title}</h3>
                <p class="news-card-excerpt">${excerpt}</p>
                <div class="news-read-more">
                    <span>${readLabel}</span>
                </div>
            `;

            card.addEventListener('click', () => openNewsArticle(item));
            newsContainer.appendChild(card);
        });

        initScrollObserver();
    }

    // ----------------------------------------------------------------------
    // 5. MOBILE DRAWER NAVIGATION
    // ----------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerCloseBtn = document.getElementById('drawerCloseBtn');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    function toggleDrawer(open) {
        if (!mobileDrawer) return;
        mobileDrawer.classList.toggle('open', open);
        mobileDrawer.setAttribute('aria-hidden', !open);
        if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleDrawer(true));
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', () => toggleDrawer(false));
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', () => toggleDrawer(false));
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => toggleDrawer(false));
    });

    // ----------------------------------------------------------------------
    // 6. CONTACT FORM TRANSMISSION HANDLER (LIVE FormSubmit.co Integration)
    // ----------------------------------------------------------------------
    window.handleContactSubmit = async function() {
        const nameInput = document.getElementById('contactName');
        const emailInput = document.getElementById('contactEmail');
        const subjectInput = document.getElementById('contactSubject');
        const messageInput = document.getElementById('contactMessage');
        const feedback = document.getElementById('formFeedback');
        const submitBtn = document.getElementById('formSubmitBtn');
        const isEn = currentLang === 'en';

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const subject = subjectInput ? subjectInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';

        if (!name || !email || !message) {
            return;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            const subLabel = i18n[currentLang]?.form_submitting || (isEn ? 'Transmitting...' : 'Transmitindo...');
            submitBtn.innerHTML = `<span>${subLabel}</span>`;
        }

        try {
            const response = await fetch('https://formsubmit.co/ajax/contact@syscorv.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    _subject: `[Syscorv Transmission] ${subject || 'General Inquiry'} - ${name}`,
                    subject: subject || 'General Inquiry',
                    message: message,
                    _template: 'table',
                    _captcha: 'false'
                })
            });

            const data = await response.json();

            if (response.ok || (data && (data.success === 'true' || data.success === true))) {
                if (feedback) {
                    feedback.className = 'form-feedback success';
                    feedback.textContent = i18n[currentLang]?.form_success || (isEn
                        ? '✓ Message transmitted successfully to Syscorv command servers!'
                        : '✓ Mensagem transmitida com sucesso aos servidores da Syscorv!');
                    feedback.classList.remove('hidden');
                }
                document.getElementById('contactForm')?.reset();
            } else {
                throw new Error(data?.message || 'Submission error');
            }
        } catch (err) {
            console.error('Contact transmission error:', err);
            if (feedback) {
                feedback.className = 'form-feedback error';
                const errMsg = i18n[currentLang]?.form_error || (isEn
                    ? '✕ Transmission failed. Please email contact@syscorv.com directly.'
                    : '✕ Falha na transmissão. Por favor envie para contact@syscorv.com');
                const mailtoUrl = `mailto:contact@syscorv.com?subject=${encodeURIComponent(subject || 'Inquiry')}&body=${encodeURIComponent(message)}`;
                feedback.innerHTML = `${errMsg}<br><a href="${mailtoUrl}" style="color: var(--sys-cyan); text-decoration: underline; margin-top: 6px; display: inline-block;">Open Mail Client ↗</a>`;
                feedback.classList.remove('hidden');
            }
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                const normalLabel = i18n[currentLang]?.form_submit || (isEn ? 'Transmit Message' : 'Transmitir Mensagem');
                submitBtn.innerHTML = `<span>${normalLabel}</span> <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 8l12-6-6 12-2-4-4-2z"/></svg>`;
            }
            setTimeout(() => {
                feedback?.classList.add('hidden');
            }, 8000);
        }
    };

    // ----------------------------------------------------------------------
    // 7. FLOATING BACK TO TOP BUTTON LOGIC
    // ----------------------------------------------------------------------
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ----------------------------------------------------------------------
    // 8. SCROLL-SPY & REVEAL OBSERVER
    // ----------------------------------------------------------------------
    function initScrollObserver() {
        const revealElements = document.querySelectorAll('[data-reveal]:not(.revealed)');
        if (!window.IntersectionObserver) {
            revealElements.forEach(el => el.classList.add('revealed'));
            return;
        }

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    }

    // Nav active link tracking on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sys-nav-desktop .nav-link');

    window.addEventListener('scroll', () => {
        let currentSec = '';
        const scrollPos = window.pageYOffset + 140;

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                currentSec = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentSec}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, { passive: true });

    // Initial language application (DEFAULTS TO ENGLISH)
    applyLanguage(currentLang);
    initScrollObserver();
});

// ----------------------------------------------------------------------
// 6. PWA CORE SERVICE WORKER REGISTRATION (AUTO-SYNC)
// ----------------------------------------------------------------------
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js?v=3.2.1", { updateViaCache: "none" })
            .then(reg => {
                reg.update();
                document.addEventListener("visibilitychange", () => {
                    if (document.visibilityState === "visible") reg.update();
                });
            })
            .catch(err => {
                console.warn("[SW] Registration failed:", err);
            });
    });
}
