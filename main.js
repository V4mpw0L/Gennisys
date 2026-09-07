/* ==========================================================================
   GENNISYS STUDIO — CORE ENGINE (main.js)
   - Constellation Ether Canvas Background
   - Web Audio API Harmonic Synthesizer & Soundscape
   - Dynamic Dual-Language (PT-BR / EN) Engine
   - Aura / Theme Dynamic Switcher
   - Category Filter System
   - Project Modal Inspector
   - Mobile Drawer & Scroll Interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // LIGHT / DARK THEME ENGINE (with localStorage persistence)
    // ----------------------------------------------------------------------
    (function() {
        const STORAGE_KEY = 'gennisys_theme_mode';
        const saved = localStorage.getItem(STORAGE_KEY) || 'dark';

        function applyTheme(mode) {
            document.body.setAttribute('data-theme-mode', mode);
            localStorage.setItem(STORAGE_KEY, mode);
            document.querySelectorAll('.footer-theme-btn').forEach(btn => {
                btn.classList.toggle('active', btn.id === (mode === 'dark' ? 'gen-theme-dark' : 'gen-theme-light'));
            });
        }

        applyTheme(saved);

        document.addEventListener('click', function(e) {
            if (e.target.id === 'gen-theme-dark') applyTheme('dark');
            else if (e.target.id === 'gen-theme-light') applyTheme('light');
        });
    })();


    // ----------------------------------------------------------------------
    // STEALTH PWA SERVICE WORKER REGISTRATION & AUTO-SYNC ENGINE
    // ----------------------------------------------------------------------
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js?v=2.1.2', { updateViaCache: 'none' })
                .then(reg => {
                    // Check for updates periodically & on focus
                    reg.update();
                    document.addEventListener('visibilitychange', () => {
                        if (document.visibilityState === 'visible') reg.update();
                    });
                })
                .catch(() => {});
        });
    }

    // ----------------------------------------------------------------------
    // 1. DUAL-LANGUAGE SYSTEM (PT-BR / EN)
    // ----------------------------------------------------------------------
    const translations = {
        pt: {
            nav_home: "Início",
            nav_manifesto: "Manifesto",
            nav_creations: "Apps",
            nav_news: "Notícias",
            nav_vault: "O Lab",
            nav_nexus: "Sobre",
            status_autonomous: "Sistemas Autônomos Ativos",
            hero_badge: "ESTÚDIO INDEPENDENTE DE JOGOS & APLICATIVOS",
            hero_title_1: "BEM-VINDO À GENNISYS",
            hero_title_2: "FORJANDO NOVOS UNIVERSOS DIGITAIS",
            hero_desc: "Somos um estúdio independente focado na concepção, design e engenharia de jogos imersivos, softwares utilitários e experiências digitais proprietárias. Conheça nossos mundos e ferramentas.",
            hero_btn_explore: "Explorar Apps",
            hero_btn_news: "Últimas Notícias",
            hero_btn_manifesto: "O Manifesto",
            scroll_cue: "DESCER",
            manifesto_tag: "DIRETRIZES DO ESTÚDIO",
            manifesto_title: "Princípios de Engenharia",
            manifesto_quote: "\"Operamos com discrição, foco e rigor técnico. Construímos software proprietário com altos padrões de engenharia, privacidade por design e total independência.\"",
            pillar_1_title: "Arquitetura Independente",
            pillar_1_desc: "Mantemos soberania técnica completa sobre nossas bases de código, infraestrutura e roadmap, desenvolvendo exclusivamente soluções proprietárias.",
            pillar_2_title: "Privacidade por Design",
            pillar_2_desc: "Nossas aplicações priorizam padrões zero-knowledge, processamento local e coleta mínima de dados. Desempenho e integridade vêm em primeiro lugar.",
            pillar_3_title: "Engenharia Seletiva",
            pillar_3_desc: "Dedicamos nossos recursos a um portfólio restrito e selecionado, refinando cada projeto com precisão, estabilidade e durabilidade a longo prazo.",
            creations_tag: "ECOSSISTEMA PROPRIETÁRIO",
            creations_heading: "Apps",
            creations_sub: "Obras autorais em operação. Aplicativos, simulações e jogos moldados nos laboratórios da Gennisys.",
            filter_all: "Todos",
            filter_navigation: "Mapas & Navegação",
            filter_games: "Jogos & RPG",
            filter_cyber: "Sistemas & Cyber",
            filter_tools: "Utilitários",
            badge_live: "ONLINE",
            type_navigation: "Mapas & Geolocalização",
            type_rpg: "RPG & Simulação",
            type_idle_rpg: "RPG Incremental",
            type_cyber: "Cyberpunk OS",
            type_mmo: "MMO Incremental",
            type_security: "Criptografia & Cofre",
            type_fin: "Estratégia Financeira",
            type_calc: "Computação de Precisão",
            type_python: "Automação & Python",
            proj_fazenda_desc: "Um universo imersivo de simulação rural e RPG. Desenvolva sua propriedade, gerencie colheitas e evolua seu império agrícola.",
            proj_scape_desc: "RPG de progressão incremental e fantasia medieval. Evolua habilidades de combate, enfrente masmorras e colete saques lendários mesmo offline.",
            proj_hacker_desc: "Simulador de terminal e cibersegurança tática. Uma experiência de interface estilo matriz com protocolos de penetração simulados.",
            proj_packet_desc: "Jogo incremental de arquitetura de dados e tráfego massivo. Colete pacotes digitais e domine a infraestrutura global.",
            proj_passmap_desc: "Suíte cartográfica profissional com navegação offline, catálogo inteligente de POIs e telemetria de clima e qualidade do ar em tempo real.",
            proj_budget_desc: "Sistema de controle patrimonial com categorização dinâmica, projeções orçamentárias e dashboards inteligentes.",
            proj_gencalc_desc: "Calculadora científica com histórico de auditoria instantâneo e layout ergonômico feito para operações complexas.",
            proj_pytools_desc: "Suíte de ferramentas e scripts em Python para automação de tarefas, processamento de dados e utilitários de sistema.",
            btn_access: "Acessar",
            btn_enter_world: "Acessar",
            btn_access_terminal: "Acessar",
            btn_start_transmission: "Acessar",
            btn_open_vault: "Acessar",
            btn_access_system: "Acessar",
            btn_launch_calculator: "Acessar",
            news_tag: "NOTÍCIAS & ATUALIZAÇÕES",
            news_heading: "Últimas Notícias",
            news_sub: "Acompanhe as notas de atualização, registros de desenvolvimento e comunicados oficiais do estúdio.",
            news_cat_patch: "PATCH NOTES",
            news_cat_deploy: "SISTEMA",
            news_cat_devlog: "DEVLOG",
            news_1_title: "FazendaRPG: Atualização de Economia Agrícola e Clima",
            news_1_desc: "Lançado o novo balanceamento para <span class=\"text-hl\">ciclos de colheita</span>, eventos dinâmicos de <span class=\"text-hl\">estação</span> e aprimoramento na <span class=\"text-hl\">persistência de dados</span>.",
            news_2_title: "Hacker0s: Novos Módulos de Terminal e Desafios",
            news_2_desc: "A interface cibernética recebeu novos protocolos de <span class=\"text-hl-cyan\">penetração simulada</span>, <span class=\"text-hl-cyan\">decifração criptográfica</span> em tempo real e comandos táticos.",
            news_3_title: "Bastidores do Lab: Avanços no Protocolo Aetheria",
            news_3_desc: "Nossa equipe de engenharia finalizou os primeiros testes com o <span class=\"text-hl-purple\">motor de física procedural</span> e <span class=\"text-hl-purple\">atmosfera sonora</span> para o próximo projeto.",
            news_4_title: "PacketClicker MMO: Expansão Quântica de Servidores",
            news_4_desc: "Novas árvores de habilidades tecnológicas de rede, <span class=\"text-hl\">cluster quântico</span> e balanceamento para processamento de <span class=\"text-hl\">pacotes massivos</span>.",
            news_5_title: "PassMap: Arquitetura Zero-Knowledge & Criptografia",
            news_5_desc: "Atualizado o protocolo criptográfico local para <span class=\"text-hl-cyan\">proteção Zero-Knowledge</span> de dados confidenciais com auditoria de integridade.",
            news_6_title: "GenCalc & BudgetBox: Otimizações de Precisão e Interface",
            news_6_desc: "Refatoração dos algoritmos matemáticos com <span class=\"text-hl\">precisão de ponto flutuante</span> corrigida e ergonomia acelerada por teclado.",
            news_7_title: "Infraestrutura: Novo Cluster de Baixa Latência",
            news_7_desc: "Migração de nós globais para acelerar o <span class=\"text-hl-cyan\">tempo de resposta</span> e sincronização de dados nos ecossistemas Gennisys.",
            news_8_title: "Design System: Atualização das Auras & UI",
            news_8_desc: "Implementação da nova paleta atmosférica com <span class=\"text-hl-purple\">temas dinâmicos</span> e componentes <span class=\"text-hl-purple\">glassmorphism</span> para todos os aplicativos.",
            news_read_more: "Ler Mais →",
            vault_status: "LABORATÓRIO CLASSIFICADO // EM DESENVOLVIMENTO",
            vault_title: "Projeto: Protocolo Aetheria",
            vault_desc: "Nos bastidores da Gennisys, uma nova experiência de proporções épicas está sendo forjada. Uma fusão de narrativa mística, inteligência generativa e mecânicas táticas imersivas.",
            vault_label_status: "ESTADO",
            vault_val_status: "Fase Alpha / Sob Sigilo",
            vault_label_engine: "ENGINE",
            vault_label_deployment: "LANÇAMENTO",
            nexus_mission: "Estúdio independente focado na concepção e engenharia de jogos, softwares e experiências digitais proprietárias.",
            status_servers: "Servidores Online",
            footer_col_nav: "Navegação",
            footer_col_ecosystem: "Ecossistema",
            footer_devlog: "Notas de Lançamento",
            footer_vault: "The Vault (Alpha)",
            footer_col_contact: "Contato",
            footer_meta_location: "Desenvolvimento Autônomo",
            footer_meta_remote: "Operação Global",
            footer_lang_label: "Idioma:",
            footer_theme_label: "Tema:",
            rights_reserved: "TODOS OS DIREITOS RESERVADOS."
        },
        en: {
            nav_home: "Home",
            nav_manifesto: "Manifesto",
            nav_creations: "Apps",
            nav_news: "News",
            nav_vault: "The Lab",
            nav_nexus: "About",
            status_servers: "Servers Online",
            hero_badge: "INDEPENDENT DIGITAL ATELIER",
            hero_title_1: "WELCOME TO GENNISYS",
            hero_title_2: "FORGING NEW DIGITAL REALITIES",
            hero_desc: "We are an independent studio focused on designing, building, and refining immersive video games, developer utility tools, and sovereign digital applications.",
            hero_btn_explore: "Explore Apps",
            hero_btn_news: "Latest News",
            hero_btn_manifesto: "The Manifesto",
            scroll_cue: "SCROLL",
            manifesto_tag: "STUDIO PRINCIPLES",
            manifesto_title: "Engineering Philosophy",
            manifesto_quote: "\"We operate with quiet discipline, focus, and technical rigor. Building proprietary software with high standards, privacy by design, and complete independence.\"",
            pillar_1_title: "Independent Architecture",
            pillar_1_desc: "We maintain complete technical sovereignty over our codebase, infrastructure, and roadmap, developing exclusively proprietary solutions.",
            pillar_2_title: "Privacy by Design",
            pillar_2_desc: "Our applications prioritize zero-knowledge standards, client-side execution, and minimal data footprints. Performance and integrity come first.",
            pillar_3_title: "Selective Engineering",
            pillar_3_desc: "We dedicate our resources to a curated and private portfolio, refining each release with precision, stability, and long-term durability.",
            creations_tag: "PROPRIETARY ECOSYSTEM",
            creations_heading: "Apps",
            creations_sub: "Original works in active operation. Applications, simulations, and games crafted inside the Gennisys laboratory.",
            filter_all: "All",
            filter_navigation: "Maps & Navigation",
            filter_games: "Games & RPG",
            filter_cyber: "Systems & Cyber",
            filter_tools: "Utilities",
            badge_live: "LIVE",
            type_navigation: "Maps & Geolocation",
            type_rpg: "RPG & Simulation",
            type_idle_rpg: "Incremental Idle RPG",
            type_cyber: "Cyberpunk OS",
            type_mmo: "Incremental MMO",
            type_security: "Cryptography & Vault",
            type_fin: "Financial Strategy",
            type_calc: "Precision Compute",
            type_python: "Automation & Python Tools",
            proj_fazenda_desc: "An immersive rural simulation and RPG. Develop land, cultivate crops, master seasonal economies, and expand your empire.",
            proj_scape_desc: "Incremental fantasy idle RPG. Advance combat masteries, explore perilous dungeons, and gather legendary loot even while offline.",
            proj_hacker_desc: "Tactical terminal and cybersecurity simulator. A matrix-style operating interface featuring penetration protocols and simulated networks.",
            proj_packet_desc: "Incremental game of data throughput and mass infrastructure. Harvest data packets, evolve quantum clusters, and command the grid.",
            proj_passmap_desc: "Professional cartographic suite with resilient offline navigation, intelligent POI cataloging, and live weather and air quality telemetry.",
            proj_budget_desc: "Capital management architecture featuring dynamic categorization, cashflow projections, and financial intelligence visualizers.",
            proj_gencalc_desc: "Scientific computing engine with real-time audit logs and ergonomic interface engineered for advanced mathematical workflows.",
            proj_pytools_desc: "Suite of Python automation scripts and tools for batch data processing, developer workflows, and system utilities.",
            btn_access: "Access",
            btn_enter_world: "Access",
            btn_access_terminal: "Access",
            btn_start_transmission: "Access",
            btn_open_vault: "Access",
            btn_access_system: "Access",
            btn_launch_calculator: "Access",
            news_tag: "NEWS & UPDATES",
            news_heading: "Latest News",
            news_sub: "Follow our release notes, devlogs, technical milestones, and studio announcements.",
            news_cat_patch: "PATCH NOTES",
            news_cat_deploy: "SYSTEM",
            news_cat_devlog: "DEVLOG",
            news_1_title: "FazendaRPG: Agricultural Economy & Seasonal Overhaul",
            news_1_desc: "Deployed harvest rebalancing for <span class=\"text-hl\">agricultural cycles</span>, dynamic <span class=\"text-hl\">seasonal weather</span>, and persistent state optimizations.",
            news_2_title: "Hacker0s: New Terminal Modules & Security Trials",
            news_2_desc: "The terminal received simulated <span class=\"text-hl-cyan\">penetration protocols</span>, live <span class=\"text-hl-cyan\">cryptographic cracking</span>, and advanced tactical commands.",
            news_3_title: "Inside the Lab: Milestones in Project Aetheria",
            news_3_desc: "Our engineering team concluded the first milestone of <span class=\"text-hl-purple\">procedural physics</span> and <span class=\"text-hl-purple\">audio mechanics</span> for our upcoming classified title.",
            news_4_title: "PacketClicker MMO: Quantum Server Expansion",
            news_4_desc: "New network progression trees, <span class=\"text-hl\">quantum node clustering</span>, and large-scale <span class=\"text-hl\">data throughput</span> balancing.",
            news_5_title: "PassMap: Zero-Knowledge Architecture & Crypto Core",
            news_5_desc: "Upgraded client-side cryptographic protocols for <span class=\"text-hl-cyan\">Zero-Knowledge protection</span> of confidential credentials and integrity auditing.",
            news_6_title: "GenCalc & BudgetBox: Precision & UI Optimizations",
            news_6_desc: "Refactored mathematical engines with <span class=\"text-hl\">IEEE-754 floating precision</span> correction and keyboard-accelerated workflows.",
            news_7_title: "Infrastructure: New Low-Latency Cluster Deployed",
            news_7_desc: "Migrated edge compute nodes globally to reduce <span class=\"text-hl-cyan\">response latency</span> and accelerate state sync across Gennisys apps.",
            news_8_title: "Design System: UI & Visual Auras Overhaul",
            news_8_desc: "Deployed refined atmospheric palette with <span class=\"text-hl-purple\">dynamic themes</span> and glassmorphic <span class=\"text-hl-purple\">component tokens</span> studio-wide.",
            news_read_more: "Read More →",
            vault_status: "CLASSIFIED LAB // UNDER DEVELOPMENT",
            vault_title: "Project: Protocol Aetheria",
            vault_desc: "Behind closed doors at Gennisys, a new high-caliber reality is being forged. A synthesis of mystical lore, generative intelligence, and deep tactical mechanics.",
            vault_label_status: "STATUS",
            vault_val_status: "Alpha Phase / Classified",
            vault_label_engine: "ENGINE",
            vault_label_deployment: "RELEASE",
            nexus_mission: "An independent digital studio creating handcrafted games, tools, and proprietary digital experiences.",
            footer_col_nav: "Navigation",
            footer_col_ecosystem: "Ecosystem",
            footer_devlog: "Release Notes",
            footer_vault: "The Vault (Alpha)",
            footer_col_contact: "Contact",
            footer_meta_location: "Autonomous Development",
            footer_meta_remote: "Global Operation",
            footer_lang_label: "Language:",
            footer_theme_label: "Theme:",
            rights_reserved: "ALL RIGHTS RESERVED."
        }
    };

    let currentLang = localStorage.getItem('gennisys_lang') || 'en';
    let currentNewsPage = 1;

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('gennisys_lang', lang);
        document.documentElement.setAttribute('lang', lang);
        
        // Update header pill
        const langBtn = document.getElementById('langSwitch');
        if (langBtn) {
            langBtn.querySelector('.lang-text').textContent = lang.toUpperCase();
        }

        // Update footer language buttons
        document.querySelectorAll('.footer-lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang-val') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Translate all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Re-render modular news grid with new language
        if (typeof renderNewsGrid === 'function') {
            renderNewsGrid(currentNewsPage);
        }
    }

    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'pt' ? 'en' : 'pt';
            setLanguage(nextLang);
        });
    }

    document.querySelectorAll('.footer-lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const langVal = btn.getAttribute('data-lang-val');
            if (langVal) setLanguage(langVal);
        });
    });


    // ----------------------------------------------------------------------
    // 3. MODULAR NEWS SYSTEM & PAGINATION ENGINE (LOADED FROM NOTICIAS.JS)
    // ----------------------------------------------------------------------
    const getNewsData = () => (window.GENNISYS_NEWS_DATA && Array.isArray(window.GENNISYS_NEWS_DATA)) ? window.GENNISYS_NEWS_DATA : [];
    const itemsPerPage = 4;

    // Format Date with highlighted day and year numbers
    function formatStyledDate(dateStr) {
        if (!dateStr) return '';
        const parts = String(dateStr).trim().split(' ');
        if (parts.length === 3) {
            return `<span class="date-num">${parts[0]}</span> <span class="date-month">${parts[1]}</span> <span class="date-num">${parts[2]}</span>`;
        }
        return dateStr;
    }

    function renderNewsGrid(page = 1) {
        currentNewsPage = page;
        const grid = document.getElementById('newsGrid');
        const indicators = document.getElementById('newsPageIndicators');
        const prevBtn = document.getElementById('newsPrevBtn');
        const nextBtn = document.getElementById('newsNextBtn');
        if (!grid) return;

        const newsData = getNewsData();
        const totalPages = Math.ceil(newsData.length / itemsPerPage) || 1;
        const startIndex = (page - 1) * itemsPerPage;
        const pageItems = newsData.slice(startIndex, startIndex + itemsPerPage);
        const lang = currentLang;
        const readMoreText = lang === 'pt' ? 'Ler Mais →' : 'Read More →';

        grid.innerHTML = pageItems.map(item => `
            <article class="news-card" data-news-id="${item.id}">
                <div class="news-card-content">
                    <div class="news-card-header">
                        <span class="news-badge ${item.badgeClass}">${item.badge[lang]}</span>
                        <span class="news-date">${formatStyledDate(item.date[lang])}</span>
                    </div>
                    <h3 class="news-title">${item.title[lang]}</h3>
                    <p class="news-excerpt">${item.excerpt[lang]}</p>
                </div>
                <div class="news-footer">
                    <button class="news-read-more" data-news-id="${item.id}">${readMoreText}</button>
                </div>
            </article>
        `).join('');

        // Bind clicks to open modal
        grid.querySelectorAll('.news-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-news-id');
                if (id) openNewsModal(id);
            });
        });

        // Update Pagination Indicators
        const newsPagination = document.getElementById('newsPagination');
        if (newsPagination) {
            newsPagination.style.display = (totalPages <= 1) ? 'none' : 'flex';
        }

        if (indicators) {
            indicators.innerHTML = Array.from({ length: totalPages }, (_, i) => i + 1).map(p => `
                <button class="page-dot ${p === page ? 'active' : ''}" data-page="${p}">${p}</button>
            `).join('');

            indicators.querySelectorAll('.page-dot').forEach(dot => {
                dot.addEventListener('click', () => {
                    const targetPage = parseInt(dot.getAttribute('data-page'), 10);
                    if (targetPage && targetPage !== currentNewsPage) {
                        renderNewsGrid(targetPage);
                    }
                });
            });
        }

        if (prevBtn) prevBtn.disabled = (page <= 1);
        if (nextBtn) nextBtn.disabled = (page >= totalPages);
    }

    const prevNewsBtn = document.getElementById('newsPrevBtn');
    const nextNewsBtn = document.getElementById('newsNextBtn');

    if (prevNewsBtn) {
        prevNewsBtn.addEventListener('click', () => {
            if (currentNewsPage > 1) {
                renderNewsGrid(currentNewsPage - 1);
            }
        });
    }

    if (nextNewsBtn) {
        nextNewsBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(getNewsData().length / itemsPerPage) || 1;
            if (currentNewsPage < totalPages) {
                renderNewsGrid(currentNewsPage + 1);
            }
        });
    }

    // Initial news render from noticias.js
    renderNewsGrid(1);

    // ----------------------------------------------------------------------
    // AAA STUDIO AMBIENT SPOTLIGHT ENGINE
    // Pure, solid, cinematic interactive lighting without particles or grids
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('ether-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let isVisible = true;

        // Default focal point is upper center hero
        const targetPos = { x: width * 0.5, y: height * 0.28 };
        const currentPos = { x: width * 0.5, y: height * 0.28 };
        let isHovered = false;

        const isMobile = window.innerWidth < 768;

        function drawSpotlight() {
            ctx.clearRect(0, 0, width, height);

            const isLight = document.body.getAttribute('data-theme-mode') === 'light';
            const spotRadius = isMobile ? 320 : 520;
            const spotGradient = ctx.createRadialGradient(
                currentPos.x, currentPos.y, 0,
                currentPos.x, currentPos.y, spotRadius
            );

            if (isLight) {
                spotGradient.addColorStop(0, 'rgba(5, 150, 105, 0.08)');
                spotGradient.addColorStop(0.5, 'rgba(14, 165, 233, 0.025)');
                spotGradient.addColorStop(1, 'rgba(248, 250, 252, 0)');
            } else {
                spotGradient.addColorStop(0, 'rgba(18, 196, 138, 0.12)');
                spotGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.035)');
                spotGradient.addColorStop(1, 'rgba(11, 13, 16, 0)');
            }

            ctx.fillStyle = spotGradient;
            ctx.beginPath();
            ctx.arc(currentPos.x, currentPos.y, spotRadius, 0, Math.PI * 2);
            ctx.fill();
        }

        function renderAtmosphere() {
            if (!isVisible) {
                requestAnimationFrame(renderAtmosphere);
                return;
            }

            // Smooth spotlight inertia (damped tracking)
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

        document.addEventListener('visibilitychange', () => {
            isVisible = !document.hidden;
            if (isVisible) drawSpotlight();
        });

        // Instant redraw on theme change
        const observer = new MutationObserver((mutations) => {
            for (const m of mutations) {
                if (m.attributeName === 'data-theme-mode') {
                    drawSpotlight();
                }
            }
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme-mode'] });

        renderAtmosphere();
    }


    // ----------------------------------------------------------------------
    // 5. APPS / CREATIONS FILTER & RESPONSIVE PAGINATION ENGINE (6 PC / 4 MOBILE)
    // ----------------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const creationCards = document.querySelectorAll('.creation-card');
    const creationsPagination = document.getElementById('creationsPagination');
    const creationsPageIndicators = document.getElementById('creationsPageIndicators');
    const creationsPrevBtn = document.getElementById('creationsPrevBtn');
    const creationsNextBtn = document.getElementById('creationsNextBtn');

    let activeFilter = 'all';
    let currentCreationPage = 1;

    function getAppsPerPage() {
        return window.innerWidth < 900 ? 4 : 6;
    }

    function renderCreations(page = currentCreationPage) {
        currentCreationPage = page;
        const appsPerPage = getAppsPerPage();
        const allCards = Array.from(creationCards);
        
        // Filter by category
        const filteredCards = allCards.filter(card => {
            const category = card.getAttribute('data-category');
            return activeFilter === 'all' || category === activeFilter;
        });

        const totalPages = Math.ceil(filteredCards.length / appsPerPage) || 1;
        if (currentCreationPage > totalPages) currentCreationPage = 1;

        const startIndex = (currentCreationPage - 1) * appsPerPage;
        const endIndex = startIndex + appsPerPage;
        const visibleCards = filteredCards.slice(startIndex, endIndex);

        // Update card visibility instantly
        allCards.forEach(card => {
            if (visibleCards.includes(card)) {
                card.style.display = 'flex';
                card.style.opacity = '1';
                card.style.transform = 'none';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });

        // Update Pagination Controls
        if (creationsPagination) {
            if (totalPages <= 1) {
                creationsPagination.style.display = 'none';
            } else {
                creationsPagination.style.display = 'flex';
                
                if (creationsPageIndicators) {
                    creationsPageIndicators.innerHTML = Array.from({ length: totalPages }, (_, i) => i + 1).map(p => `
                        <button class="page-dot ${p === currentCreationPage ? 'active' : ''}" data-creation-page="${p}">${p}</button>
                    `).join('');

                    creationsPageIndicators.querySelectorAll('.page-dot').forEach(dot => {
                        dot.addEventListener('click', () => {
                            const targetPage = parseInt(dot.getAttribute('data-creation-page'), 10);
                            if (targetPage && targetPage !== currentCreationPage) {
                                renderCreations(targetPage);
                            }
                        });
                    });
                }

                if (creationsPrevBtn) {
                    creationsPrevBtn.disabled = (currentCreationPage <= 1);
                }
                if (creationsNextBtn) {
                    creationsNextBtn.disabled = (currentCreationPage >= totalPages);
                }
            }
        }
    }

    // Filter Buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.getAttribute('data-filter');
            renderCreations(1);
        });
    });

    // Arrow Buttons
    if (creationsPrevBtn) {
        creationsPrevBtn.addEventListener('click', () => {
            if (currentCreationPage > 1) {
                renderCreations(currentCreationPage - 1);
            }
        });
    }

    if (creationsNextBtn) {
        creationsNextBtn.addEventListener('click', () => {
            const appsPerPage = getAppsPerPage();
            const filteredCount = Array.from(creationCards).filter(c => activeFilter === 'all' || c.getAttribute('data-category') === activeFilter).length;
            const totalPages = Math.ceil(filteredCount / appsPerPage) || 1;
            if (currentCreationPage < totalPages) {
                renderCreations(currentCreationPage + 1);
            }
        });
    }

    // Window resize listener to dynamically switch between 6 (PC) and 4 (Mobile)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            renderCreations(currentCreationPage);
        }, 150);
    }, { passive: true });

    // Initial render
    renderCreations(1);


    // ----------------------------------------------------------------------
    // 6. PROJECT INSPECT MODAL
    // ----------------------------------------------------------------------
    const modal = document.getElementById('projectModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalContent = document.getElementById('modalContent');

    const projectDetails = {
        'modal-fazenda': {
            title: "FazendaRPG",
            icon: "🌾",
            type: "RPG & Farming Simulation",
            status: "Online / Stable",
            desc: "FazendaRPG é um simulador imersivo onde o jogador gerencia ciclos agrários, constrói benfeitorias, evolui habilidades de ofício e administra recursos sob diferentes condições climáticas.",
            stack: ["Engine HTML5 / WebGL", "State Persistence", "Adaptive Sound Engine"],
            link: "https://v4mpw0l.github.io/FazendaRPG/"
        },
        'modal-hacker': {
            title: "Hacker0s",
            icon: "💻",
            type: "Tactical Terminal & Cyber Simulator",
            status: "Online / Active",
            desc: "Ambiente imersivo de emulação de terminal cibernético com ferramentas interativas de comando, decodificação e exploração de nós de rede simulados.",
            stack: ["Virtual Terminal Shell", "Crypto Engine", "Custom Scripting Environment"],
            link: "https://v4mpw0l.github.io/hacker0S/"
        },
        'modal-packet': {
            title: "PacketClicker MMO",
            icon: "📦",
            type: "Incremental Network Architecture",
            status: "Online / Expanding",
            desc: "Simulação incremental de processamento de pacotes massivos. Monte clusters de servidores quânticos e automatize a infraestrutura de dados.",
            stack: ["Incremental State Math", "Realtime Throughput", "Persistent Local Storage"],
            link: "https://v4mpw0l.github.io/packetclickermmo/"
        },
        'modal-passmap': {
            title: "PassMap",
            icon: "🗺️",
            type: "Geospatial & Cartographic Intelligence",
            status: "Online / v2.11 Live",
            desc: "Suíte cartográfica e de navegação tática desenhada para autonomia total. Oferece visualização fluida de mapas, download de tiles para operação 100% offline, gestão avançada de pontos de interesse (POIs) e telemetria ambiental em tempo real.",
            stack: ["Offline Vector & Raster Tiles", "Local IndexedDB Storage", "Realtime Weather & AQI", "Cross-Platform PWA"],
            link: "https://passmap.app/"
        },
        'modal-budget': {
            title: "BudgetBox",
            icon: "💰",
            type: "Financial Intelligence Engine",
            status: "Online / Optimized",
            desc: "Plataforma proprietária de controle patrimonial com inteligência preditiva de fluxo de caixa, relatórios ergonômicos e cálculo de metas.",
            stack: ["Dynamic Data Visualization", "Algorithmic Forecasting", "Offline-First Engine"],
            link: "https://v4mpw0l.github.io/BudgetBox/"
        },
        'modal-gencalc': {
            title: "GenCalc",
            icon: "🧮",
            type: "Precision Calculation Core",
            status: "Online / Verified",
            desc: "Calculadora de alta precisão desenhada para fluxos de engenharia, finanças e operações científicas com trilha de auditoria completa.",
            stack: ["Floating-Point Precision Fixes", "Audit Log System", "Keyboard Shortcuts"],
            link: "https://v4mpw0l.github.io/GenCalc/"
        }
    };

    // News Inspect Modal Handler (Driven by modular noticias.js)
    function openNewsModal(newsId) {
        const item = getNewsData().find(n => n.id === newsId);
        if (item && modalContent && modal) {
            const lang = currentLang;
            const fullTextHtml = (item.texto && item.texto[lang]) ? item.texto[lang] : `<p>${item.excerpt ? item.excerpt[lang] : ''}</p>`;
            const authorName = item.author || 'Gennisys';
            const authorLabel = lang === 'pt' ? 'AUTOR' : 'AUTHOR';
            const authorHtml = `<span class="news-date modal-author"><span class="date-month">${authorLabel}</span> <span class="date-num">${authorName}</span></span>`;
            const dateHtml = (item.date && item.date[lang]) ? `<span class="news-date">${formatStyledDate(item.date[lang])}</span>` : '';

            modalContent.innerHTML = `
                <div class="modal-header-card">
                    <div class="news-modal-top">
                        <span class="news-badge ${item.badgeClass}">${item.badge[lang]}</span>
                    </div>
                    <h3 class="news-modal-title">${item.title[lang]}</h3>
                </div>
                <div class="news-modal-body-card">
                    ${fullTextHtml}
                </div>
                <div class="news-modal-footer">
                    ${authorHtml}
                    ${dateHtml}
                </div>
            `;
            modal.classList.add('open');
        }
    }

    if (modalCloseBtn && modal) {
        modalCloseBtn.addEventListener('click', () => {
            modal.classList.remove('open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });
    }


    // ----------------------------------------------------------------------
    // 7. MOBILE DRAWER NAVIGATION
    // ----------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileDrawer.classList.toggle('open');
            mobileMenuBtn.classList.toggle('open', isOpen);
            mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                mobileMenuBtn.classList.remove('open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }


    // ----------------------------------------------------------------------
    // 8. SCROLL REVEAL OBSERVER
    // ----------------------------------------------------------------------
    const revealElements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));

    // ----------------------------------------------------------------------
    // 9. HEADER SCROLL & BACK TO TOP FLOATING BUTTON
    // ----------------------------------------------------------------------
    const header = document.querySelector('.studio-header');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        // Header glassmorphic background intensification
        if (header) {
            if (scrollPos > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Back to top visibility
        if (backToTopBtn) {
            if (scrollPos > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    }, { passive: true });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Dynamic Year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Initialize Language (translates DOM & renders news grid safely)
    setLanguage(currentLang);
});
