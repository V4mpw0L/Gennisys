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
                spotGradient.addColorStop(0, 'rgba(2, 132, 199, 0.09)');
                spotGradient.addColorStop(0.5, 'rgba(14, 165, 233, 0.025)');
                spotGradient.addColorStop(1, 'rgba(248, 250, 252, 0)');
            } else {
                spotGradient.addColorStop(0, 'rgba(0, 229, 255, 0.12)');
                spotGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.035)');
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
            doc_title: 'SYSCORV — Autonomous Software & Spatial Systems Lab',
            doc_desc: 'Syscorv is an independent software engineering corporation and research laboratory. We forge proprietary, local-first, zero-knowledge digital systems and spatial applications.',

            // Navigation
            nav_overview: 'Overview',
            nav_ecosystem: 'Ecosystem',
            nav_architecture: 'Architecture',
            nav_transmissions: 'Transmissions',
            nav_founder: 'Leadership',
            nav_contact: 'Contact',
            nav_cta_apps: 'Explore Apps',

            // Hero
            hero_badge: 'AUTONOMOUS SOFTWARE & SPATIAL SYSTEMS LAB',
            hero_title_1: 'SYSTEMS ENGINEERING.',
            hero_title_2: 'PROPRIETARY HORIZONS.',
            hero_subtitle: '<strong class="syscorv-brand-highlight">SYSCORV</strong> is an independent technology corporation and software engineering laboratory. We conceive, architect, and operate resilient applications, <em>local-first</em> architectures, spatial telemetry, and autonomous digital universes.',
            hero_cta_explore: 'Explore Ecosystem',
            hero_cta_arch: 'Engineering Directives',

            // Telemetry Strip
            telem_label_1: 'AUTONOMY',
            telem_val_1: '100% In-House',
            telem_sub_1: 'Zero investors or architectural debt',
            telem_label_2: 'ARCHITECTURE',
            telem_val_2: 'Local-First',
            telem_sub_2: 'Unconditional offline availability',
            telem_label_3: 'PRIVACY',
            telem_val_3: 'Zero-Knowledge',
            telem_sub_3: 'Data strictly resides on user devices',
            telem_label_4: 'EXECUTION',
            telem_val_4: '60 FPS Hardware',
            telem_sub_4: 'GPU-accelerated vector pipelines',

            // Ecosystem / Product Portfolio
            eco_index_title: 'PROPRIETARY ECOSYSTEM',
            eco_heading: 'Syscorv Active Systems',
            eco_desc: 'Engineering and operation of high-performance proprietary platforms, spatial intelligence, and digital engines.',
            passmap_subtitle: 'FLAGSHIP // SPATIAL INTELLIGENCE & CARTOGRAPHY SUITE',
            badge_live: 'PRODUCTION ONLINE',
            passmap_summary: '<strong>PassMap</strong> is Syscorv\'s flagship software in active commercial operation. Unifying 100% offline vector cartography, verified database of 540+ logistics hubs and gate access codes, real-time meteorology and air quality telemetry, gyroscopic compass, and 16 custom animated GPS markers rendered at 60 FPS.',
            btn_launch_passmap: 'Launch Official PassMap ↗',

            f1_title: '540+ Verified Locations',
            f1_desc: 'Unified gate codes and critical logistics dispatches.',
            f2_title: '100% Offline-First',
            f2_desc: 'Full vector tile caching & client IndexedDB.',
            f3_title: 'Live Weather & AQI Telemetry',
            f3_desc: 'Dynamic 7-band thermal feel & air purity index.',
            f4_title: '16 GPS Marker Animations',
            f4_desc: 'Integrated Vortex, Galaxy, Aurora, Storm & Cyber.',

            // Chips
            chip_offline: 'Offline PWA',
            chip_zero_cloud: 'Zero-Cloud Tracking',
            chip_languages: '7 Synchronized Languages',
            chip_sw: 'Service Worker Build 168',
            chip_cross_platform: 'iOS & Android Ready',

            eco_pipeline_badge: 'SYSCORV LAB PIPELINE',
            eco_pipeline_desc: 'Syscorv maintains software projects in active development across procedural WebGL rendering, decentralized P2P networking engines, and resilient spatial suites. Releases are published via official dispatches.',

            // Architecture
            arch_index_title: 'TECHNICAL DIRECTIVES',
            arch_heading: 'The Syscorv Engineering Philosophy',
            arch_desc: 'We forge software under four inviolable principles ensuring our creations endure for decades without technical rot.',
            pillar_1_title: 'Local-First Resilience',
            pillar_1_text: 'Software must never be hostage to remote servers. Every Syscorv tool stores its master state client-side (IndexedDB/CacheStorage), operating with 100% capacity regardless of internet connectivity.',
            pillar_2_title: 'Zero-Knowledge Privacy',
            pillar_2_text: 'User privacy is guaranteed by mathematics and architecture, not mere marketing clauses. We reject tracking beacons, data broker harvesting, and surveillance capitalism.',
            pillar_3_title: 'Computational Efficiency',
            pillar_3_text: 'Zero waste of CPU clock cycles or memory. We craft concise, high-speed code in modern Vanilla JS and Web APIs, ensuring instant startup times and sustained 60 FPS responsiveness.',
            pillar_4_title: 'Aesthetics & Digital Craftsmanship',
            pillar_4_text: 'Premium design is not cosmetic veneer, but an organic reflection of engineering precision. We construct immersive interfaces, calculated typography, and high-contrast obsidian palettes.',

            // News
            news_index_title: 'OFFICIAL NEWS',
            news_heading: 'News & Releases',
            news_desc: 'Technical reports, official news, and milestone developments at Syscorv.',
            news_read_more: 'Read Full News →',

            // Founder
            founder_index_title: 'LEADERSHIP & DIRECTION',
            founder_heading: 'Corporate & Technical Leadership',
            founder_desc: 'Independent foundation guided by an obsessive pursuit of software autonomy and robust architectures.',
            founder_role: 'Founder & Chief Systems Architect at SYSCORV',
            founder_bio: 'Specialist in resilient local-first architectures, high-performance geospatial modeling, real-time computational engines, and user-sovereign security. Directs Syscorv\'s technology trajectory and intellectual property portfolio.',
            btn_visit_founder: 'Architect\'s Personal Portal ↗',

            // Contact
            contact_index_title: 'INSTITUTIONAL CHANNEL',
            contact_heading: 'Communications & Contact',
            contact_desc: 'For enterprise software licensing, technical collaborations, or intellectual property inquiries.',
            contact_direct_title: 'Direct Channels',
            contact_direct_desc: 'We respond promptly to commercial inquiries, vulnerability disclosures, and general requests:',
            contact_email_label: 'Official Electronic Mail',
            entity_text: '<strong class="syscorv-brand-highlight">SYSCORV</strong> operates as an independent software development and technology corporation. All applications, trademarks, patents, and associated digital assets are under full corporate registration.',
            form_title: 'Transmit Message',
            form_name: 'Name / Organization',
            form_name_ph: 'Your name or enterprise',
            form_email: 'Return Email',
            form_email_ph: 'your.email@domain.com',
            form_subject: 'Subject',
            form_subject_ph: 'e.g., Enterprise Licensing, Partnership or Feedback',
            form_message: 'Message',
            form_message_ph: 'Detail your inquiry or proposal with clarity...',
            form_submit: 'Transmit Message',
            form_submitting: 'Transmitting...',
            form_success: '✓ Message transmitted successfully to Syscorv command servers!',

            // Modal & Footer
            modal_close: 'Close Article',
            footer_slogan: 'Systems Intelligence. Proprietary Horizons.<br>Autonomous high-performance software laboratory.',
            footer_col_eco: 'Ecosystem',
            footer_col_arch: 'Directives',
            footer_col_contact: 'Institutional',
            footer_link_apps: 'Proprietary Software',
            footer_link_arch: 'Local-First Resilience',
            footer_link_privacy: 'Zero-Knowledge Privacy',
            footer_link_perf: 'Computational Efficiency',
            footer_link_news: 'Official Transmissions',
            footer_link_contact: 'Contact & Licensing',
            footer_founder_link: 'Founder Architect (v4mpw0l)',
            footer_status: 'SYSTEMS ONLINE',
        footer_rights: 'All rights reserved.',

            // Accessibility Labels
            aria_back_to_top: 'Back to top'
        },
        'pt-BR': {
            // Document Meta
            doc_title: 'SYSCORV — Laboratório de Software Autônomo & Sistemas Espaciais',
            doc_desc: 'A Syscorv é uma corporação e laboratório de engenharia de software independente. Criamos sistemas proprietários, local-first, zero-knowledge e aplicações espaciais.',

            // Navigation
            nav_overview: 'Visão Geral',
            nav_ecosystem: 'Ecossistema',
            nav_architecture: 'Arquitetura',
            nav_transmissions: 'Transmissões',
            nav_founder: 'Liderança',
            nav_contact: 'Contato',
            nav_cta_apps: 'Explorar Apps',

            // Hero
            hero_badge: 'LABORATÓRIO DE SOFTWARE AUTÔNOMO & SISTEMAS ESPACIAIS',
            hero_title_1: 'ENGENHARIA DE SISTEMAS.',
            hero_title_2: 'HORIZONTES PROPRIETÁRIOS.',
            hero_subtitle: 'A <strong class="syscorv-brand-highlight">SYSCORV</strong> é uma corporação de tecnologia e laboratório independente de engenharia de software. Concebemos, desenvolvemos e operamos aplicações resilientes, arquiteturas <em>local-first</em>, telemetria espacial e universos digitais autônomos.',
            hero_cta_explore: 'Explorar Ecossistema',
            hero_cta_arch: 'Diretrizes de Engenharia',

            // Telemetry Strip
            telem_label_1: 'AUTONOMIA',
            telem_val_1: '100% Proprietário',
            telem_sub_1: 'Sem investidores ou dívida técnica',
            telem_label_2: 'ARQUITETURA',
            telem_val_2: 'Local-First',
            telem_sub_2: 'Disponibilidade offline incondicional',
            telem_label_3: 'PRIVACIDADE',
            telem_val_3: 'Zero-Knowledge',
            telem_sub_3: 'Dados residem exclusivamente no aparelho',
            telem_label_4: 'EXECUÇÃO',
            telem_val_4: '60 FPS Hardware',
            telem_sub_4: 'Renderização acelerada por GPU',

            // Ecosystem / Product Portfolio
            eco_index_title: 'ECOSSISTEMA DE PRODUTOS',
            eco_heading: 'Aplicações & Sistemas Ativos',
            eco_desc: 'Engenharia e operação de plataformas autorais de alta performance, inteligência espacial e motores digitais da Syscorv.',
            passmap_subtitle: 'CARRO-CHEFE // SUÍTE DE INTELIGÊNCIA ESPACIAL E CARTOGRAFIA',
            badge_live: 'PRODUÇÃO ONLINE',
            passmap_summary: 'O <strong>PassMap</strong> é o software carro-chefe da Syscorv em operação comercial. Unifica navegação vetorial 100% offline, catálogo verificado de mais de 540 pontos logísticos e códigos de acesso, telemetria meteorológica em tempo real, monitoramento de qualidade do ar (AQI), bússola giroscópica e 16 estilos customizados de marcadores animados a 60 FPS.',
            btn_launch_passmap: 'Abrir PassMap Oficial ↗',

            f1_title: '540+ Locais Verificados',
            f1_desc: 'Códigos de portaria e notas logísticas unificadas.',
            f2_title: '100% Offline-First',
            f2_desc: 'Cache vetorial completo e banco local IndexedDB.',
            f3_title: 'Clima & AQI em Tempo Real',
            f3_desc: 'Sensação térmica em 7 faixas e índice de ar puro.',
            f4_title: '16 Marcadores 60 FPS',
            f4_desc: 'Vortex, Galaxy, Aurora, Storm e Cyber integrados.',

            // Chips
            chip_offline: 'Offline PWA',
            chip_zero_cloud: 'Zero Rastreamento Cloud',
            chip_languages: '7 Idiomas Sincronizados',
            chip_sw: 'Service Worker Build 168',
            chip_cross_platform: 'Compatível com iOS & Android',

            eco_pipeline_badge: 'PIPELINE DO LABORATÓRIO SYSCORV',
            eco_pipeline_desc: 'A Syscorv mantém projetos de software em desenvolvimento ativo nas áreas de renderização procedural WebGL, motores de rede ponto-a-ponto descentralizados e aplicações espaciais resilientes. Novas liberações são anunciadas diretamente em nossas transmissões oficiais.',

            // Architecture
            arch_index_title: 'DIRETRIZES TÉCNICAS',
            arch_heading: 'A Filosofia de Engenharia Syscorv',
            arch_desc: 'Construímos ferramentas digitais sob quatro preceitos invioláveis para garantir que nossas criações funcionem por décadas sem deterioração.',
            pillar_1_title: 'Resiliência Local-First',
            pillar_1_text: 'O software não pode ser refém de servidores distantes. Toda aplicação Syscorv armazena seu estado principal no próprio cliente (IndexedDB/CacheStorage), operando com 100% de capacidade sem conexão à rede.',
            pillar_2_title: 'Privacidade Zero-Knowledge',
            pillar_2_text: 'A privacidade do usuário é protegida por matemática e arquitetura, não apenas por promessas em termos de serviço. Rejeitamos telemetria invasiva, corretores de dados e vigilância corporativa.',
            pillar_3_title: 'Eficiência Computacional',
            pillar_3_text: 'Nenhum desperdício de ciclos de CPU ou memória. Escrevemos código enxuto e performático em Vanilla JS e Web APIs modernas, garantindo inicialização instantânea e resposta a 60 quadros por segundo.',
            pillar_4_title: 'Estética & Artesanato Digital',
            pillar_4_text: 'O design de alto padrão não é adorno superficial, mas um reflexo da precisão técnica. Construímos interfaces imersivas, tipografia calculada e temas de alto contraste que encantam no primeiro segundo.',

            // News
            news_index_title: 'NOTÍCIAS OFICIAIS',
            news_heading: 'Notícias & Lançamentos',
            news_desc: 'Relatórios técnicos, notícias oficiais e marcos de desenvolvimento da Syscorv.',
            news_read_more: 'Ler Notícia Completa →',

            // Founder
            founder_index_title: 'LIDERANÇA & DIREÇÃO',
            founder_heading: 'Estrutura & Liderança Técnica',
            founder_desc: 'Fundação independente guiada pela busca obsessiva por autonomia de software e arquiteturas robustas.',
            founder_role: 'Fundador & Arquiteto Chefe de Sistemas na SYSCORV',
            founder_bio: 'Especialista em arquiteturas locais resilientes, modelagem geoespacial de alta performance, motores computacionais em tempo real e segurança orientada à soberania do usuário. Conduz a estratégia tecnológica e o portfólio de propriedade intelectual da Syscorv.',
            btn_visit_founder: 'Portal Pessoal do Arquiteto ↗',

            // Contact
            contact_index_title: 'CANAL INSTITUCIONAL',
            contact_heading: 'Comunicações & Contato',
            contact_desc: 'Para licenciamento corporativo de softwares, propostas técnicas ou consultas de propriedade intelectual.',
            contact_direct_title: 'Canais Diretos',
            contact_direct_desc: 'Respondemos com rapidez a solicitações comerciais, reportes de vulnerabilidade ou consultas gerais:',
            contact_email_label: 'Correio Eletrônico Oficial',
            entity_text: 'A <strong class="syscorv-brand-highlight">SYSCORV</strong> opera como empresa de tecnologia e desenvolvimento de software independente. Todos os aplicativos, marcas, patentes e ativos associados são mantidos sob registro corporativo integral.',
            form_title: 'Transmitir Mensagem',
            form_name: 'Nome / Empresa',
            form_name_ph: 'Seu nome ou organização',
            form_email: 'E-mail para Retorno',
            form_email_ph: 'seu.email@dominio.com',
            form_subject: 'Assunto',
            form_subject_ph: 'Ex: Licenciamento, Parceria ou Feedback',
            form_message: 'Mensagem',
            form_message_ph: 'Descreva sua solicitação com detalhes...',
            form_submit: 'Transmitir Mensagem',
            form_submitting: 'Transmitindo...',
            form_success: '✓ Mensagem transmitida com sucesso aos servidores da Syscorv!',

            // Modal & Footer
            modal_close: 'Fechar Artigo',
            footer_slogan: 'Engenharia de Sistemas. Horizontes Proprietários.<br>Laboratório autônomo de software de alto desempenho.',
            footer_col_eco: 'Ecossistema',
            footer_col_arch: 'Diretrizes',
            footer_col_contact: 'Institucional',
            footer_link_apps: 'Softwares Autorais',
            footer_link_arch: 'Resiliência Local-First',
            footer_link_privacy: 'Privacidade Zero-Knowledge',
            footer_link_perf: 'Eficiência Computacional',
            footer_link_news: 'Transmissões Oficiais',
            footer_link_contact: 'Contato & Licenciamento',
            footer_founder_link: 'Arquiteto Fundador (v4mpw0l)',
            footer_status: 'SISTEMAS ONLINE',
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
    // 6. CONTACT FORM TRANSMISSION HANDLER
    // ----------------------------------------------------------------------
    window.handleContactSubmit = function() {
        const feedback = document.getElementById('formFeedback');
        const submitBtn = document.getElementById('formSubmitBtn');
        const isEn = currentLang === 'en';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            const subLabel = i18n[currentLang]?.form_submitting || (isEn ? 'Transmitting...' : 'Transmitindo...');
            submitBtn.innerHTML = `<span>${subLabel}</span>`;
        }

        setTimeout(() => {
            if (feedback) {
                feedback.className = 'form-feedback success';
                feedback.textContent = i18n[currentLang]?.form_success || (isEn
                    ? '✓ Message transmitted successfully to Syscorv command servers!'
                    : '✓ Mensagem transmitida com sucesso aos servidores da Syscorv!');
                feedback.classList.remove('hidden');
            }
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                const normalLabel = i18n[currentLang]?.form_submit || (isEn ? 'Transmit Message' : 'Transmitir Mensagem');
                submitBtn.innerHTML = `<span>${normalLabel}</span>`;
            }
            document.getElementById('contactForm')?.reset();

            setTimeout(() => {
                feedback?.classList.add('hidden');
            }, 6000);
        }, 800);
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
        navigator.serviceWorker.register("./sw.js?v=3.2.0", { updateViaCache: "none" })
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
