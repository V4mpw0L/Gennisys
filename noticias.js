/* ==========================================================================
   GENNISYS STUDIO — NOTÍCIAS & TRANSMISSÕES (noticias.js)
   - Adicione novas notícias no topo da lista abaixo.
   - Cada notícia suporta PT e EN com texto fluido e formatação livre.
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
        content: {
            pt: `
                <p>A versão <strong>v1.4 do FazendaRPG</strong> traz uma revisão completa dos sistemas agrícolas e ecossistêmicos do jogo, focando em imersão e equilíbrio estratégico.</p>
                <ul>
                    <li><strong>Economia Agrícola:</strong> Ajuste na rentabilidade de safras raras, custos de insumos e valorização sazonal de mercadorias no mercado.</li>
                    <li><strong>Ciclos Climáticos:</strong> Novas mecânicas de chuvas sazonais, secas e tempestades que afetam diretamente a fertilidade da terra.</li>
                    <li><strong>Persistência Otimizada:</strong> Gravação assíncrona local acelerada sem travamento de quadros por segundo.</li>
                </ul>
            `,
            en: `
                <p>Version <strong>v1.4 of FazendaRPG</strong> brings a complete overhaul to farming mechanics and environmental ecosystems, focusing on depth and strategy.</p>
                <ul>
                    <li><strong>Agricultural Economy:</strong> Complete rebalance of crop growth intervals, market sale values, and seasonal yields.</li>
                    <li><strong>Dynamic Weather:</strong> Added storms and droughts affecting soil fertility and requiring strategic planning.</li>
                    <li><strong>Storage Optimization:</strong> Migrated state engine to asynchronous storage for continuous 60 FPS performance.</li>
                </ul>
            `
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
        content: {
            pt: `
                <p>A build <strong>2.1 do Hacker0s</strong> expande o ambiente de linha de comando com ferramentas táticas de segurança e quebra de cifras.</p>
                <ul>
                    <li><strong>Shell Cibernético:</strong> Novos utilitários de análise de pacotes e decodificação hash em tempo real.</li>
                    <li><strong>Níveis Táticos:</strong> 12 novos nós de rede criptografados com puzzles de invasão lógica e engenharia reversa.</li>
                    <li><strong>Ambiente CRT:</strong> Refatoração visual do terminal com opções de fósforo âmbar e fósforo verde clássico.</li>
                </ul>
            `,
            en: `
                <p>Build <strong>2.1 of Hacker0s</strong> expands the command-line atmosphere with tactical security utilities and cipher-cracking modules.</p>
                <ul>
                    <li><strong>Cyber Shell:</strong> New packet inspection utilities and real-time hash deciphering algorithms.</li>
                    <li><strong>Tactical Nodes:</strong> 12 new encrypted network nodes with logic infiltration and reverse-engineering challenges.</li>
                    <li><strong>CRT Atmosphere:</strong> Visual overhaul of the phosphor terminal shell with selectable amber and classic emerald palettes.</li>
                </ul>
            `
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
        content: {
            pt: `
                <p>Nossa equipe concluiu a primeira fase de testes de um novo <strong>motor procedural leve</strong> para os futuros universos do estúdio.</p>
                <ul>
                    <li><strong>Geração Procedural:</strong> Criação algorítmica de relevo, ecossistemas e mapas com carregamento instantâneo.</li>
                    <li><strong>Áudio Sintetizado:</strong> Testes com ambiência e trilha sonora adaptativa gerada via Web Audio Core.</li>
                    <li><strong>Zero Dependências:</strong> Arquitetura pura sem frameworks pesados, garantindo 60 FPS estáveis até em celulares.</li>
                </ul>
            `,
            en: `
                <p>Our engineering team concluded the first milestone of a lightweight <strong>procedural engine</strong> for our upcoming studio titles.</p>
                <ul>
                    <li><strong>Procedural Mesh:</strong> Algorithmic terrain generation and biomes with near-instant zero-latency streaming.</li>
                    <li><strong>Dynamic Synthesis:</strong> Adaptive soundscapes generated dynamically via Web Audio Core.</li>
                    <li><strong>Zero Framework Bloat:</strong> Lightweight architecture engineered for steady 60 FPS performance on all devices.</li>
                </ul>
            `
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
        content: {
            pt: `
                <p>O simulador incremental de tráfego de dados recebeu a sua <strong>maior expansão de infraestrutura</strong> até hoje.</p>
                <ul>
                    <li><strong>Clusters Quânticos:</strong> Novas camadas de hardware para processar Petabytes por segundo de forma autônoma.</li>
                    <li><strong>Árvore de Habilidades:</strong> Mais de 25 upgrades de roteamento, compressão de pacotes e automação de throughput.</li>
                    <li><strong>Modo Offline:</strong> Cálculo de progresso em segundo plano calibrado com precisão analítica.</li>
                </ul>
            `,
            en: `
                <p>Our incremental network traffic simulator received its <strong>largest infrastructure expansion</strong> to date.</p>
                <ul>
                    <li><strong>Quantum Clusters:</strong> New server rack tiers capable of autonomous multi-petabyte data throughput.</li>
                    <li><strong>Skill Matrices:</strong> Over 25 new network routing, packet compression, and automation upgrades.</li>
                    <li><strong>Offline Calculation:</strong> Refined background processing math for deterministic progression.</li>
                </ul>
            `
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
        content: {
            pt: `
                <p>Aprimoramos o motor criptográfico local do <strong>PassMap</strong>, reforçando a filosofia de privacidade intransigente.</p>
                <ul>
                    <li><strong>Zero-Knowledge:</strong> Seus dados e senhas nunca saem da sua máquina sem criptografia AES-GCM / PBKDF2.</li>
                    <li><strong>Auditoria de Força:</strong> Novo analisador de entropia e detecção de credenciais comprometidas.</li>
                    <li><strong>Exportação Segura:</strong> Backup protegido por chave mestra com integridade verificável por checksum.</li>
                </ul>
            `,
            en: `
                <p>Upgraded the cryptographic client engine of <strong>PassMap</strong>, enforcing uncompromising user privacy and data sovereignty.</p>
                <ul>
                    <li><strong>Zero-Knowledge:</strong> Confidential keys and credentials never leave local storage without AES-GCM encryption.</li>
                    <li><strong>Entropy Auditor:</strong> Integrated strength analyzer and compromised credential verification.</li>
                    <li><strong>Secure Export:</strong> Master-key protected vault export with SHA-256 integrity checks.</li>
                </ul>
            `
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
        content: {
            pt: `
                <p>Nossos utilitários de produtividade foram <strong>completamente otimizados</strong> para operações rápidas no teclado e telas sensíveis ao toque.</p>
                <ul>
                    <li><strong>Precisão IEEE-754:</strong> Tratamento de arredondamento de dízimas e números flutuantes para cálculos contábeis exatos.</li>
                    <li><strong>Atalhos de Teclado:</strong> Fluxo 100% acelerado sem necessidade de usar o mouse para cálculos diários.</li>
                    <li><strong>Visualizadores:</strong> Gráficos de pizza e fluxo de caixa responsivos integrados no BudgetBox.</li>
                </ul>
            `,
            en: `
                <p>Our productivity tools have been <strong>thoroughly optimized</strong> for high-speed keyboard input and fluid mobile interactions.</p>
                <ul>
                    <li><strong>IEEE-754 Precision:</strong> Eliminated floating-point rounding anomalies for verified financial accuracy.</li>
                    <li><strong>Keyboard Acceleration:</strong> Optimized full keyboard accessibility for high-speed workflows.</li>
                    <li><strong>Data Visualizers:</strong> Clean interactive cashflow charts and goal projection widgets in BudgetBox.</li>
                </ul>
            `
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
        content: {
            pt: `
                <p>Realizamos uma modernização completa nos nós de distribuição de conteúdo dos ecossistemas da Gennisys.</p>
                <ul>
                    <li><strong>Distribuição Global:</strong> Tempos de carregamento reduzidos em até 65% em todas as regiões.</li>
                    <li><strong>Cache Inteligente:</strong> Armazenamento otimizado de assets e fontes para navegação offline fluida.</li>
                    <li><strong>Disponibilidade 99.9%:</strong> Servidores estáveis com monitoramento contínuo em tempo real.</li>
                </ul>
            `,
            en: `
                <p>Completed a global modernization of our edge delivery nodes and content acceleration pipelines.</p>
                <ul>
                    <li><strong>Edge Delivery:</strong> Reduced static bundle delivery latency by up to 65% worldwide.</li>
                    <li><strong>Intelligent Cache:</strong> Advanced caching strategy for instant offline capability across all web apps.</li>
                    <li><strong>99.9% Uptime:</strong> Continuous monitoring across all edge availability zones.</li>
                </ul>
            `
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
        content: {
            pt: `
                <p>Apresentamos o novo <strong>Design System atmosférico</strong> com foco em estética mística, moderna e imersiva.</p>
                <ul>
                    <li><strong>Temas Dinâmicos:</strong> Suporte completo para as auras Cyber Emerald, Void Amethyst, Solar Amber e Abyssal Azure.</li>
                    <li><strong>Glassmorphism:</strong> Camadas translúcidas com blur de alto desempenho e bordas com neon refinado.</li>
                    <li><strong>Responsividade Total:</strong> Layouts adaptativos otimizados tanto para celulares quanto monitores widescreen.</li>
                </ul>
            `,
            en: `
                <p>Introducing our atmospheric studio <strong>Design System</strong> focusing on immersive, mystical, and modern user experiences.</p>
                <ul>
                    <li><strong>Dynamic Auras:</strong> Full support for Cyber Emerald, Void Amethyst, Solar Amber, and Abyssal Azure palettes.</li>
                    <li><strong>Glassmorphism:</strong> Ultra-refined backdrop blur styling with subdued accent borders and glowing halos.</li>
                    <li><strong>Responsive Fluidity:</strong> Adaptive component grid optimized across ultra-compact mobile and widescreen displays.</li>
                </ul>
            `
        }
    }
];
