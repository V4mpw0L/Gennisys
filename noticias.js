/* ==========================================================================
   GENNISYS STUDIO — NOTÍCIAS & TRANSMISSÕES (noticias.js)
   - Adicione novas notícias no topo da lista abaixo.
   - Cada notícia suporta PT e EN com destaques e tags temáticas.
   ========================================================================== */

window.GENNISYS_NEWS_DATA = [
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
