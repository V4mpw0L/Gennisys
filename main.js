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
    // 1. DUAL-LANGUAGE SYSTEM (PT-BR / EN)
    // ----------------------------------------------------------------------
    const translations = {
        pt: {
            nav_home: "Início",
            nav_manifesto: "Manifesto",
            nav_creations: "Criações",
            nav_news: "Novidades",
            nav_vault: "O Lab",
            nav_nexus: "Nexus",
            status_autonomous: "Sistemas Autônomos Ativos",
            hero_badge: "ESTÚDIO INDEPENDENTE DE JOGOS & APLICATIVOS",
            hero_title_1: "BEM-VINDO À GENNISYS",
            hero_title_2: "FORJANDO NOVOS UNIVERSOS DIGITAIS",
            hero_desc: "Somos um estúdio independente focado na concepção, design e engenharia de jogos imersivos, softwares utilitários e experiências digitais proprietárias. Conheça nossos mundos e ferramentas.",
            hero_btn_explore: "Explorar Criações",
            hero_btn_news: "Últimas Novidades",
            hero_btn_manifesto: "O Manifesto",
            scroll_cue: "DESCER",
            manifesto_tag: "FILOSOFIA DO ESTÚDIO",
            manifesto_title: "O Creio da Gennisys",
            manifesto_quote: "\"A verdadeira arte e a alta tecnologia não nascem de briefings genéricos. Nascem da obsessão de construir aquilo que gostaríamos que existisse no mundo.\"",
            pillar_1_title: "100% Autonomia",
            pillar_1_desc: "Cada linha de código, estética visual e mecânica pertence ao ecossistema Gennisys. Criamos exclusivamente para o nosso próprio catálogo.",
            pillar_2_title: "Artesanato Digital",
            pillar_2_desc: "Rejeitamos softwares genéricos e sem alma. Projetamos interfaces atmosféricas, intuitivas e envolventes que encantam quem as utiliza.",
            pillar_3_title: "Mundos & Ferramentas",
            pillar_3_desc: "Dos RPGs de simulação aos terminais cibernéticos e cofres de dados, expandimos continuamente novos universos digitais.",
            creations_tag: "ECOSSISTEMA PROPRIETÁRIO",
            creations_heading: "Criações & Experiências",
            creations_sub: "Obras autorais em operação. Aplicativos, simulações e jogos moldados nos laboratórios da Gennisys.",
            filter_all: "Todos",
            filter_games: "Jogos & RPG",
            filter_cyber: "Sistemas & Cyber",
            filter_tools: "Utilitários",
            badge_live: "ONLINE",
            type_rpg: "RPG & Simulação",
            type_cyber: "Cyberpunk OS",
            type_mmo: "MMO Incremental",
            type_security: "Criptografia & Cofre",
            type_fin: "Estratégia Financeira",
            type_calc: "Computação de Precisão",
            proj_fazenda_desc: "Um universo imersivo de simulação rural e RPG. Desenvolva sua propriedade, gerencie colheitas e evolua seu império agrícola.",
            proj_hacker_desc: "Simulador de terminal e cibersegurança tática. Uma experiência de interface estilo matriz com protocolos de penetração simulados.",
            proj_packet_desc: "Jogo incremental de arquitetura de dados e tráfego massivo. Colete pacotes digitais e domine a infraestrutura global.",
            proj_passmap_desc: "Gerenciador de segurança de senhas e dados sigilosos. Uma fortaleza de privacidade digital construída para proteção absoluta.",
            proj_budget_desc: "Sistema de controle patrimonial com categorização dinâmica, projeções orçamentárias e dashboards inteligentes.",
            proj_gencalc_desc: "Calculadora científica com histórico de auditoria instantâneo e layout ergonômico feito para operações complexas.",
            btn_access: "Acessar",
            btn_enter_world: "Acessar",
            btn_access_terminal: "Acessar",
            btn_start_transmission: "Acessar",
            btn_open_vault: "Acessar",
            btn_access_system: "Acessar",
            btn_launch_calculator: "Acessar",
            news_tag: "TRANSMISSÕES & NOVIDADES",
            news_heading: "Últimas Atualizações",
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
            footer_theme_label: "Aura:",
            rights_reserved: "TODOS OS DIREITOS RESERVADOS."
        },
        en: {
            nav_home: "Home",
            nav_manifesto: "Manifesto",
            nav_creations: "Creations",
            nav_news: "News",
            nav_vault: "The Lab",
            nav_nexus: "Nexus",
            status_servers: "Servers Online",
            hero_badge: "INDEPENDENT DIGITAL ATELIER",
            hero_title_1: "WELCOME TO GENNISYS",
            hero_title_2: "FORGING NEW DIGITAL REALITIES",
            hero_desc: "We are an independent studio focused on designing, building, and refining immersive video games, developer utility tools, and sovereign digital applications.",
            hero_btn_explore: "Explore Creations",
            hero_btn_news: "Latest News",
            hero_btn_manifesto: "The Manifesto",
            scroll_cue: "SCROLL",
            manifesto_tag: "STUDIO PHILOSOPHY",
            manifesto_title: "The Gennisys Creed",
            manifesto_quote: "\"True art and high engineering are never born from generic briefs. They are forged from the obsession to build what we wish existed in this reality.\"",
            pillar_1_title: "100% Autonomy",
            pillar_1_desc: "Every line of code, aesthetic design, and system mechanic belongs to the Gennisys ecosystem. We build solely for our own catalog.",
            pillar_2_title: "Digital Craftsmanship",
            pillar_2_desc: "We reject soulless, generic corporate tools. We engineer atmospheric, intuitive, and captivating digital experiences.",
            pillar_3_title: "Worlds & Instruments",
            pillar_3_desc: "From simulation RPGs to cyberpunk terminals and cryptographic vaults, we continuously expand our universe.",
            creations_tag: "PROPRIETARY ECOSYSTEM",
            creations_heading: "Creations & Realities",
            creations_sub: "Original works in active operation. Applications, simulations, and games crafted inside the Gennisys laboratory.",
            filter_all: "All",
            filter_games: "Games & RPG",
            filter_cyber: "Systems & Cyber",
            filter_tools: "Utilities",
            badge_live: "LIVE",
            type_rpg: "RPG & Simulation",
            type_cyber: "Cyberpunk OS",
            type_mmo: "Incremental MMO",
            type_security: "Cryptography & Vault",
            type_fin: "Financial Strategy",
            type_calc: "Precision Compute",
            proj_fazenda_desc: "An immersive rural simulation and RPG. Develop land, cultivate crops, master seasonal economies, and expand your empire.",
            proj_hacker_desc: "Tactical terminal and cybersecurity simulator. A matrix-style operating interface featuring penetration protocols and simulated networks.",
            proj_packet_desc: "Incremental game of data throughput and mass infrastructure. Harvest data packets, evolve quantum clusters, and command the grid.",
            proj_passmap_desc: "High-security password and credential manager. A cryptographic digital vault engineered for total autonomy and privacy.",
            proj_budget_desc: "Capital management architecture featuring dynamic categorization, cashflow projections, and financial intelligence visualizers.",
            proj_gencalc_desc: "Scientific computing engine with real-time audit logs and ergonomic interface engineered for advanced mathematical workflows.",
            btn_access: "Access",
            btn_enter_world: "Access",
            btn_access_terminal: "Access",
            btn_start_transmission: "Access",
            btn_open_vault: "Access",
            btn_access_system: "Access",
            btn_launch_calculator: "Access",
            news_tag: "DISPATCHES & LOGS",
            news_heading: "Latest Updates",
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
            footer_theme_label: "Aura:",
            rights_reserved: "ALL RIGHTS RESERVED."
        }
    };

    let currentLang = localStorage.getItem('gennisys_lang') || 'pt';
    let currentNewsPage = 1;

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('gennisys_lang', lang);
        
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
    // 2. THEME & AURA SELECTOR (HEADER & FOOTER SYNC)
    // ----------------------------------------------------------------------
    let savedTheme = localStorage.getItem('gennisys_theme') || 'emerald';
    
    function applyTheme(themeId) {
        document.body.setAttribute('data-theme', themeId);
        localStorage.setItem('gennisys_theme', themeId);
        savedTheme = themeId;

        // Sync header dropdown
        const themeDropdown = document.getElementById('themeDropdownMenu');
        if (themeDropdown) {
            themeDropdown.querySelectorAll('.theme-option').forEach(opt => {
                if (opt.getAttribute('data-theme-id') === themeId) {
                    opt.classList.add('active');
                } else {
                    opt.classList.remove('active');
                }
            });
        }

        // Sync footer theme dots
        document.querySelectorAll('.footer-theme-dot').forEach(dot => {
            if (dot.getAttribute('data-theme-id') === themeId) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    applyTheme(savedTheme);

    const themePickerBtn = document.getElementById('themePickerBtn');
    const themeDropdown = document.getElementById('themeDropdownMenu');

    if (themePickerBtn && themeDropdown) {
        themePickerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            themeDropdown.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            themeDropdown.classList.remove('show');
        });

        themeDropdown.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', () => {
                const themeId = option.getAttribute('data-theme-id');
                applyTheme(themeId);
                themeDropdown.classList.remove('show');
            });
        });
    }

    document.querySelectorAll('.footer-theme-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const themeId = dot.getAttribute('data-theme-id');
            if (themeId) applyTheme(themeId);
        });
    });


    // ----------------------------------------------------------------------
    // 3. MODULAR NEWS SYSTEM & PAGINATION ENGINE
    // ----------------------------------------------------------------------
    const GENNISYS_NEWS_DATA = [
        {
            id: 'news-1',
            badge: { pt: 'PATCH NOTES', en: 'PATCH NOTES' },
            badgeClass: 'patch-badge',
            date: { pt: '24 AGO 2026', en: '24 AUG 2026' },
            tag: 'FazendaRPG v1.4',
            title: {
                pt: 'FazendaRPG: Atualização de Economia Agrícola e Clima',
                en: 'FazendaRPG: Agricultural Economy & Seasonal Overhaul'
            },
            excerpt: {
                pt: 'Lançado o novo balanceamento para <span class="text-hl">ciclos de colheita</span>, eventos dinâmicos de <span class="text-hl">estação</span> e aprimoramento na <span class="text-hl">persistência de dados</span>.',
                en: 'Deployed harvest rebalancing for <span class="text-hl">agricultural cycles</span>, dynamic <span class="text-hl">seasonal weather</span>, and persistent state optimizations.'
            },
            highlights: {
                pt: [
                    { tag: 'Economia Agrícola:', text: 'Ajuste na rentabilidade de safras raras, custos de insumos e valorização sazonal de mercadorias no mercado.' },
                    { tag: 'Ciclos Climáticos:', text: 'Novas mecânicas de chuvas sazonais, secas e tempestades que afetam diretamente a fertilidade da terra.' },
                    { tag: 'Persistência Otimizada:', text: 'Gravação assíncrona local acelerada sem travamento de quadros por segundo.' }
                ],
                en: [
                    { tag: 'Agricultural Economy:', text: 'Complete rebalance of crop growth intervals, market sale values, and seasonal yields.' },
                    { tag: 'Dynamic Weather:', text: 'Added storms and droughts affecting soil fertility and requiring strategic planning.' },
                    { tag: 'Storage Optimization:', text: 'Migrated state engine to asynchronous storage for continuous 60 FPS performance.' }
                ]
            }
        },
        {
            id: 'news-2',
            badge: { pt: 'SISTEMA', en: 'SYSTEM' },
            badgeClass: 'deploy-badge',
            date: { pt: '18 AGO 2026', en: '18 AUG 2026' },
            tag: 'Hacker0s Build 2.1',
            title: {
                pt: 'Hacker0s: Novos Módulos de Terminal e Desafios',
                en: 'Hacker0s: New Terminal Modules & Security Trials'
            },
            excerpt: {
                pt: 'A interface cibernética recebeu novos protocolos de <span class="text-hl-cyan">penetração simulada</span>, <span class="text-hl-cyan">decifração criptográfica</span> em tempo real e comandos táticos.',
                en: 'The terminal received simulated <span class="text-hl-cyan">penetration protocols</span>, live <span class="text-hl-cyan">cryptographic cracking</span>, and advanced tactical commands.'
            },
            highlights: {
                pt: [
                    { tag: 'Shell Cibernético:', text: 'Novos utilitários de análise de pacotes e decodificação hash em tempo real.' },
                    { tag: 'Níveis Táticos:', text: '12 novos nós de rede criptografados com puzzles de invasão lógica e engenharia reversa.' },
                    { tag: 'Ambiente CRT:', text: 'Refatoração visual do terminal com opções de fósforo âmbar e fósforo verde clássico.' }
                ],
                en: [
                    { tag: 'Cyber Shell:', text: 'New packet inspection utilities and real-time hash deciphering algorithms.' },
                    { tag: 'Tactical Nodes:', text: '12 new encrypted network nodes with logic infiltration and reverse-engineering challenges.' },
                    { tag: 'CRT Atmosphere:', text: 'Visual overhaul of the phosphor terminal shell with selectable amber and classic emerald palettes.' }
                ]
            }
        },
        {
            id: 'news-3',
            badge: { pt: 'DEVLOG', en: 'DEVLOG' },
            badgeClass: 'devlog-badge',
            date: { pt: '10 AGO 2026', en: '10 AUG 2026' },
            tag: 'The Lab / R&D',
            title: {
                pt: 'Bastidores do Lab: Avanços no Protocolo Aetheria',
                en: 'Inside the Lab: Milestones in Project Aetheria'
            },
            excerpt: {
                pt: 'Nossa equipe de engenharia finalizou os primeiros testes com o <span class="text-hl-purple">motor de física procedural</span> e <span class="text-hl-purple">atmosfera sonora</span> para o próximo projeto.',
                en: 'Our engineering team concluded the first milestone of <span class="text-hl-purple">procedural physics</span> and <span class="text-hl-purple">audio mechanics</span> for our upcoming classified title.'
            },
            highlights: {
                pt: [
                    { tag: 'Geração Procedural:', text: 'Criação algorítmica de relevo, ecossistemas e mapas com carregamento instantâneo.' },
                    { tag: 'Áudio Sintetizado:', text: 'Testes com ambiência e trilha sonora adaptativa gerada via Web Audio Core.' },
                    { tag: 'Zero Dependências:', text: 'Arquitetura pura sem frameworks pesados, garantindo 60 FPS estáveis até em celulares.' }
                ],
                en: [
                    { tag: 'Procedural Mesh:', text: 'Algorithmic terrain generation and biomes with near-instant zero-latency streaming.' },
                    { tag: 'Dynamic Synthesis:', text: 'Adaptive soundscapes generated dynamically via Web Audio Core.' },
                    { tag: 'Zero Framework Bloat:', text: 'Lightweight architecture engineered for steady 60 FPS performance on all devices.' }
                ]
            }
        },
        {
            id: 'news-4',
            badge: { pt: 'PATCH NOTES', en: 'PATCH NOTES' },
            badgeClass: 'patch-badge',
            date: { pt: '02 AGO 2026', en: '02 AUG 2026' },
            tag: 'PacketClicker v2.0',
            title: {
                pt: 'PacketClicker MMO: Expansão Quântica de Servidores',
                en: 'PacketClicker MMO: Quantum Server Expansion'
            },
            excerpt: {
                pt: 'Novas árvores de habilidades tecnológicas de rede, <span class="text-hl">cluster quântico</span> e balanceamento para processamento de <span class="text-hl">pacotes massivos</span>.',
                en: 'New network progression trees, <span class="text-hl">quantum node clustering</span>, and large-scale <span class="text-hl">data throughput</span> balancing.'
            },
            highlights: {
                pt: [
                    { tag: 'Clusters Quânticos:', text: 'Novas camadas de hardware para processar Petabytes por segundo de forma autônoma.' },
                    { tag: 'Árvore de Habilidades:', text: 'Mais de 25 upgrades de roteamento, compressão de pacotes e automação de throughput.' },
                    { tag: 'Modo Offline:', text: 'Cálculo de progresso em segundo plano calibrado com precisão analítica.' }
                ],
                en: [
                    { tag: 'Quantum Clusters:', text: 'New server rack tiers capable of autonomous multi-petabyte data throughput.' },
                    { tag: 'Skill Matrices:', text: 'Over 25 new network routing, packet compression, and automation upgrades.' },
                    { tag: 'Offline Calculation:', text: 'Refined background processing math for deterministic progression.' }
                ]
            }
        },
        {
            id: 'news-5',
            badge: { pt: 'SEGURANÇA', en: 'SECURITY' },
            badgeClass: 'deploy-badge',
            date: { pt: '25 JUL 2026', en: '25 JUL 2026' },
            tag: 'PassMap Core',
            title: {
                pt: 'PassMap: Arquitetura Zero-Knowledge & Criptografia',
                en: 'PassMap: Zero-Knowledge Architecture & Crypto Core'
            },
            excerpt: {
                pt: 'Atualizado o protocolo criptográfico local para <span class="text-hl-cyan">proteção Zero-Knowledge</span> de dados confidenciais com auditoria de integridade.',
                en: 'Upgraded client-side cryptographic protocols for <span class="text-hl-cyan">Zero-Knowledge protection</span> of confidential credentials and integrity auditing.'
            },
            highlights: {
                pt: [
                    { tag: 'Zero-Knowledge:', text: 'Seus dados e senhas nunca saem da sua máquina sem criptografia AES-GCM / PBKDF2.' },
                    { tag: 'Auditoria de Força:', text: 'Novo analisador de entropia e detecção de credenciais comprometidas.' },
                    { tag: 'Exportação Segura:', text: 'Backup protegido por chave mestra com integridade verificável por checksum.' }
                ],
                en: [
                    { tag: 'Zero-Knowledge:', text: 'Confidential keys and credentials never leave local storage without AES-GCM encryption.' },
                    { tag: 'Entropy Auditor:', text: 'Integrated strength analyzer and compromised credential verification.' },
                    { tag: 'Secure Export:', text: 'Master-key protected vault export with SHA-256 integrity checks.' }
                ]
            }
        },
        {
            id: 'news-6',
            badge: { pt: 'SISTEMA', en: 'SYSTEM' },
            badgeClass: 'devlog-badge',
            date: { pt: '14 JUL 2026', en: '14 JUL 2026' },
            tag: 'Gennisys Utils',
            title: {
                pt: 'GenCalc & BudgetBox: Otimizações de Precisão e Interface',
                en: 'GenCalc & BudgetBox: Precision & UI Optimizations'
            },
            excerpt: {
                pt: 'Refatoração dos algoritmos matemáticos com <span class="text-hl">precisão de ponto flutuante</span> corrigida e ergonomia acelerada por teclado.',
                en: 'Refactored mathematical engines with <span class="text-hl">IEEE-754 floating precision</span> correction and keyboard-accelerated workflows.'
            },
            highlights: {
                pt: [
                    { tag: 'Precisão IEEE-754:', text: 'Tratamento de arredondamento de dízimas e números flutuantes para cálculos contábeis exatos.' },
                    { tag: 'Atalhos de Teclado:', text: 'Fluxo 100% acelerado sem necessidade de usar o mouse para cálculos diários.' },
                    { tag: 'Visualizadores:', text: 'Gráficos de pizza e fluxo de caixa responsivos integrados no BudgetBox.' }
                ],
                en: [
                    { tag: 'IEEE-754 Precision:', text: 'Eliminated floating-point rounding anomalies for verified financial accuracy.' },
                    { tag: 'Keyboard Acceleration:', text: 'Optimized full keyboard accessibility for high-speed workflows.' },
                    { tag: 'Data Visualizers:', text: 'Clean interactive cashflow charts and goal projection widgets in BudgetBox.' }
                ]
            }
        },
        {
            id: 'news-7',
            badge: { pt: 'SISTEMA', en: 'SYSTEM' },
            badgeClass: 'deploy-badge',
            date: { pt: '01 JUL 2026', en: '01 JUL 2026' },
            tag: 'Core Infrastructure',
            title: {
                pt: 'Infraestrutura: Novo Cluster de Baixa Latência',
                en: 'Infrastructure: New Low-Latency Cluster Deployed'
            },
            excerpt: {
                pt: 'Migração de nós globais para acelerar o <span class="text-hl-cyan">tempo de resposta</span> e sincronização de dados nos ecossistemas Gennisys.',
                en: 'Migrated edge compute nodes globally to reduce <span class="text-hl-cyan">response latency</span> and accelerate state sync across Gennisys apps.'
            },
            highlights: {
                pt: [
                    { tag: 'Distribuição Global:', text: 'Tempos de carregamento reduzidos em até 65% em todas as regiões.' },
                    { tag: 'Cache Inteligente:', text: 'Armazenamento otimizado de assets e fontes para navegação offline fluida.' },
                    { tag: 'Disponibilidade 99.9%:', text: 'Servidores estáveis com monitoramento contínuo em tempo real.' }
                ],
                en: [
                    { tag: 'Edge Delivery:', text: 'Reduced static bundle delivery latency by up to 65% worldwide.' },
                    { tag: 'Intelligent Cache:', text: 'Advanced caching strategy for instant offline capability across all web apps.' },
                    { tag: '99.9% Uptime:', text: 'Continuous monitoring across all edge availability zones.' }
                ]
            }
        },
        {
            id: 'news-8',
            badge: { pt: 'DEVLOG', en: 'DEVLOG' },
            badgeClass: 'devlog-badge',
            date: { pt: '18 JUN 2026', en: '18 JUN 2026' },
            tag: 'Studio Design System',
            title: {
                pt: 'Design System: Atualização das Auras & UI',
                en: 'Design System: UI & Visual Auras Overhaul'
            },
            excerpt: {
                pt: 'Implementação da nova paleta atmosférica com <span class="text-hl-purple">temas dinâmicos</span> e componentes <span class="text-hl-purple">glassmorphism</span> para todos os aplicativos.',
                en: 'Deployed refined atmospheric palette with <span class="text-hl-purple">dynamic themes</span> and glassmorphic <span class="text-hl-purple">component tokens</span> studio-wide.'
            },
            highlights: {
                pt: [
                    { tag: 'Temas Dinâmicos:', text: 'Suporte completo para as auras Cyber Emerald, Void Amethyst, Solar Amber e Abyssal Azure.' },
                    { tag: 'Glassmorphism:', text: 'Camadas translúcidas com blur de alto desempenho e bordas com neon refinado.' },
                    { tag: 'Responsividade Total:', text: 'Layouts adaptativos otimizados tanto para celulares quanto monitores widescreen.' }
                ],
                en: [
                    { tag: 'Dynamic Auras:', text: 'Full support for Cyber Emerald, Void Amethyst, Solar Amber, and Abyssal Azure palettes.' },
                    { tag: 'Glassmorphism:', text: 'Ultra-refined backdrop blur styling with subdued accent borders and glowing halos.' },
                    { tag: 'Responsive Fluidity:', text: 'Adaptive component grid optimized across ultra-compact mobile and widescreen displays.' }
                ]
            }
        }
    ];

    const itemsPerPage = 4;

    function renderNewsGrid(page = 1) {
        currentNewsPage = page;
        const grid = document.getElementById('newsGrid');
        const indicators = document.getElementById('newsPageIndicators');
        const prevBtn = document.getElementById('newsPrevBtn');
        const nextBtn = document.getElementById('newsNextBtn');
        if (!grid) return;

        const totalPages = Math.ceil(GENNISYS_NEWS_DATA.length / itemsPerPage) || 1;
        const startIndex = (page - 1) * itemsPerPage;
        const pageItems = GENNISYS_NEWS_DATA.slice(startIndex, startIndex + itemsPerPage);
        const lang = currentLang;
        const readMoreText = lang === 'pt' ? 'Ler Mais →' : 'Read More →';

        grid.innerHTML = pageItems.map(item => `
            <article class="news-card" data-news-id="${item.id}">
                <div class="news-card-content">
                    <div class="news-card-header">
                        <span class="news-badge ${item.badgeClass}">${item.badge[lang]}</span>
                        <span class="news-date">${item.date[lang]}</span>
                    </div>
                    <h3 class="news-title">${item.title[lang]}</h3>
                    <p class="news-excerpt">${item.excerpt[lang]}</p>
                </div>
                <div class="news-footer">
                    <span class="news-tag">${item.tag}</span>
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
            const totalPages = Math.ceil(GENNISYS_NEWS_DATA.length / itemsPerPage) || 1;
            if (currentNewsPage < totalPages) {
                renderNewsGrid(currentNewsPage + 1);
            }
        });
    }

    const canvas = document.getElementById('ether-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let stars = [];
        const starCount = Math.min(100, Math.floor((width * height) / 12000));

        class Star {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.radius = Math.random() * 1.6 + 0.6;
                this.alpha = Math.random() * 0.7 + 0.2;
                this.baseAlpha = this.alpha;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        this.x += (dx / dist) * force * 2;
                        this.y += (dy / dist) * force * 2;
                        this.alpha = Math.min(1, this.baseAlpha + 0.4);
                    } else {
                        this.alpha = this.baseAlpha;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
                ctx.fill();
            }
        }

        const mouse = {
            x: null,
            y: null,
            radius: 120
        };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initStars();
        });

        function initStars() {
            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push(new Star());
            }
        }

        function drawLines() {
            const maxDistance = 100;
            for (let i = 0; i < stars.length; i++) {
                for (let j = i + 1; j < stars.length; j++) {
                    const dx = stars[i].x - stars[j].x;
                    const dy = stars[i].y - stars[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        const alpha = (1 - dist / maxDistance) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);
                        ctx.strokeStyle = `rgba(180, 180, 255, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            drawLines();
            stars.forEach(star => {
                star.update();
                star.draw();
            });
            requestAnimationFrame(animateCanvas);
        }

        initStars();
        animateCanvas();
    }


    // ----------------------------------------------------------------------
    // 5. CREATIONS FILTER & PAGINATION ENGINE
    // ----------------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const creationCards = document.querySelectorAll('.creation-card');
    const creationsPagination = document.getElementById('creationsPagination');
    const creationsPrevBtn = document.getElementById('creationsPrevBtn');
    const creationsNextBtn = document.getElementById('creationsNextBtn');
    const creationDots = document.querySelectorAll('[data-creation-page]');

    let activeFilter = 'all';
    let currentCreationPage = 1;
    const totalCreationPages = 2;

    function renderCreations() {
        if (activeFilter !== 'all') {
            // In filtered mode, hide pagination controls and display matching items
            if (creationsPagination) creationsPagination.style.display = 'none';
            creationCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (category === activeFilter) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 40);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(12px) scale(0.96)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        } else {
            // In 'all' mode, use pagination (3 items per page)
            if (creationsPagination) creationsPagination.style.display = 'flex';
            creationCards.forEach(card => {
                const page = parseInt(card.getAttribute('data-creation-page'), 10) || 1;
                if (page === currentCreationPage) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 40);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(12px) scale(0.96)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });

            // Update pagination indicators
            creationDots.forEach(dot => {
                const page = parseInt(dot.getAttribute('data-creation-page'), 10);
                if (page === currentCreationPage) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });

            if (creationsPrevBtn) creationsPrevBtn.disabled = (currentCreationPage <= 1);
            if (creationsNextBtn) creationsNextBtn.disabled = (currentCreationPage >= totalCreationPages);
        }
    }

    // Filter Button Click
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.getAttribute('data-filter');
            currentCreationPage = 1;
            renderCreations();
        });
    });

    // Pagination Dot Click
    creationDots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentCreationPage = parseInt(dot.getAttribute('data-creation-page'), 10);
            renderCreations();
        });
    });

    // Pagination Arrow Clicks
    if (creationsPrevBtn) {
        creationsPrevBtn.addEventListener('click', () => {
            if (currentCreationPage > 1) {
                currentCreationPage--;
                renderCreations();
            }
        });
    }

    if (creationsNextBtn) {
        creationsNextBtn.addEventListener('click', () => {
            if (currentCreationPage < totalCreationPages) {
                currentCreationPage++;
                renderCreations();
            }
        });
    }

    // Initial render
    renderCreations();


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
            icon: "🔐",
            type: "Cryptographic Security Vault",
            status: "Online / Encrypted",
            desc: "Cofre digital pessoal construído para garantir soberania de dados, organização de credenciais sigilosas e proteção absoluta de ponta a ponta.",
            stack: ["Client-Side Encryption", "Zero-Knowledge Architecture", "Biometric Ready"],
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

    // News Inspect Modal Handler (Driven by modular GENNISYS_NEWS_DATA)
    function openNewsModal(newsId) {
        const item = GENNISYS_NEWS_DATA.find(n => n.id === newsId);
        if (item && modalContent && modal) {
            const lang = currentLang;
            const highlightsHtml = (item.highlights[lang] || []).map(h => `
                <li><span class="hl-tag">${h.tag}</span> ${h.text}</li>
            `).join('');

            modalContent.innerHTML = `
                <div class="news-modal-header">
                    <span class="news-badge ${item.badgeClass}">${item.badge[lang]}</span>
                    <span class="news-date" style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">${item.date[lang]}</span>
                </div>
                <h3 class="news-modal-title">${item.title[lang]}</h3>
                <p class="news-modal-lead">${item.excerpt[lang]}</p>
                <div class="news-highlights-box">
                    <h4 class="highlights-title">◈ ${lang === 'pt' ? 'Destaques da Transmissão' : 'Transmission Highlights'}</h4>
                    <ul class="highlights-list">
                        ${highlightsHtml}
                    </ul>
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
