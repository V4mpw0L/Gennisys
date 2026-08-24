/* ==========================================================================
   GENNISYS STUDIO — NOTÍCIAS & TRANSMISSÕES (noticias.js)
   - Adicione novas notícias no topo da lista abaixo.
   - excerpt: Resumo que aparece no card da página inicial.
   - texto: Notícia completa que abre ao clicar em "Ler Mais".
   ========================================================================== */

window.GENNISYS_NEWS_DATA = [
    {
        id: 'news-1',
        author: 'Gennisys',
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
        texto: {
            pt: `
                <p>A versão <span class="text-hl">v1.4 do FazendaRPG</span> acaba de ser disponibilizada nos ecossistemas Gennisys. Esta grande atualização reestrutura profundamente a economia agrária do jogo, ajustando a rentabilidade de <span class="text-hl">safras raras</span>, o custo dos insumos e a valorização sazonal de mercadorias no mercado.</p>
                <p>Além da economia, implementamos um novo sistema de <span class="text-hl">eventos climáticos dinâmicos</span>, trazendo chuvas sazonais, secas e tempestades que afetam diretamente a fertilidade e a produtividade da terra.</p>
                <p>Por fim, o motor de gravação local foi migrado para uma arquitetura assíncrona, garantindo <span class="text-hl">60 FPS contínuos</span> e salvamento instantâneo sem qualquer micro-travamento durante a jogatina.</p>
            `,
            en: `
                <p>Version <span class="text-hl">v1.4 of FazendaRPG</span> has officially landed. This major update overhauls the agricultural economy, rebalancing <span class="text-hl">rare crop yields</span>, market pricing, and seasonal supply valuation.</p>
                <p>Alongside economic changes, we introduced dynamic <span class="text-hl">seasonal weather cycles</span>, featuring rainstorms and dry spells that directly impact soil fertility and farming strategies.</p>
                <p>Finally, the client-side state engine now leverages asynchronous persistence, ensuring consistent <span class="text-hl">60 FPS performance</span> and seamless background saving.</p>
            `
        }
    },
    {
        id: 'news-2',
        badge: { pt: 'SISTEMA', en: 'SYSTEM' },
        badgeClass: 'deploy-badge',
        author: 'Gennisys',
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
        texto: {
            pt: `
                <p>A build <span class="text-hl-cyan">2.1 do Hacker0s</span> expande o ambiente de linha de comando com novos utilitários de análise de pacotes e decodificação hash em tempo real.</p>
                <p>Foram adicionados 12 novos nós de rede criptografados com quebra-cabeças avançados de <span class="text-hl-cyan">invasão lógica</span>, quebra de cifras e engenharia reversa para operadores experientes.</p>
                <p>A atmosfera visual do terminal também foi aprimorada com suporte completo a <span class="text-hl-cyan">fósforo âmbar</span> e fósforo verde clássico com taxa de varredura CRT simulada.</p>
            `,
            en: `
                <p>Build <span class="text-hl-cyan">2.1 of Hacker0s</span> expands the tactical terminal with new real-time packet inspection utilities and hash deciphering algorithms.</p>
                <p>Operators can now breach 12 new encrypted network nodes featuring <span class="text-hl-cyan">logic infiltration puzzles</span> and reverse-engineering challenges.</p>
                <p>The CRT shell has also been refreshed with selectable <span class="text-hl-cyan">amber and emerald phosphor</span> display modes.</p>
            `
        }
    },
    {
        id: 'news-3',
        badge: { pt: 'DEVLOG', en: 'DEVLOG' },
        badgeClass: 'devlog-badge',
        author: 'Gennisys',
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
        texto: {
            pt: `
                <p>Nossa equipe de engenharia e P&D finalizou a primeira etapa de testes de um novo <span class="text-hl-purple">motor de física e geração procedural</span> construído do zero para os próximos títulos do estúdio.</p>
                <p>Os testes incluem criação algorítmica de relevo e ecossistemas com <span class="text-hl-purple">carregamento instantâneo</span>, acompanhados de uma trilha sonora adaptativa gerada em tempo real via Web Audio Core.</p>
                <p>Mantendo nossa filosofia de autonomia e leveza, o motor opera sem frameworks pesados de terceiros, sustentando <span class="text-hl-purple">60 FPS contínuos</span> em computadores e celulares.</p>
            `,
            en: `
                <p>Our R&D engineering team concluded the first milestone of our proprietary <span class="text-hl-purple">procedural physics engine</span> built from the ground up for upcoming studio titles.</p>
                <p>Key breakthroughs include algorithmic terrain streaming with <span class="text-hl-purple">zero latency</span>, paired with adaptive soundscapes generated via Web Audio Core.</p>
                <p>Engineered without external framework bloat, the architecture sustains a steady <span class="text-hl-purple">60 FPS frame rate</span> across desktop and mobile devices.</p>
            `
        }
    },
    {
        id: 'news-4',
        author: 'Gennisys',
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
        texto: {
            pt: `
                <p>O simulador incremental de tráfego de rede recebeu a sua <span class="text-hl">maior expansão de infraestrutura</span> até o momento com a introdução dos racks quânticos.</p>
                <p>Os jogadores agora contam com mais de 25 novos upgrades de <span class="text-hl">roteamento e compressão</span> de throughput para automatizar o tráfego de Petabytes por segundo de forma ininterrupta.</p>
                <p>O algoritmo de cálculo de progresso em segundo plano foi recalculado para fornecer <span class="text-hl">progressão precisa</span> mesmo com o jogo fechado.</p>
            `,
            en: `
                <p>Our incremental network traffic simulator received its <span class="text-hl">largest infrastructure expansion</span> with the deployment of quantum server clusters.</p>
                <p>Players now have access to over 25 new network upgrades for <span class="text-hl">packet throughput & routing</span> to process Petabytes per second autonomously.</p>
                <p>The offline calculation engine was completely recalibrated for precise, deterministic <span class="text-hl">background progression</span>.</p>
            `
        }
    },
    {
        id: 'news-5',
        badge: { pt: 'SEGURANÇA', en: 'SECURITY' },
        badgeClass: 'deploy-badge',
        author: 'Gennisys',
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
        texto: {
            pt: `
                <p>O motor de segurança local do <strong>PassMap</strong> recebeu uma atualização crítica reforçando a filosofia de soberania de dados e <span class="text-hl-cyan">Zero-Knowledge</span>.</p>
                <p>Todas as credenciais e chaves mestras são criptografadas localmente via <span class="text-hl-cyan">AES-GCM / PBKDF2</span> antes de qualquer armazenamento, sem que nenhum dado desprotegido trafegue pela rede.</p>
                <p>Incluímos também um novo analisador de entropia em tempo real e sistema de exportação com <span class="text-hl-cyan">verificação por checksum SHA-256</span>.</p>
            `,
            en: `
                <p>The client cryptographic engine of <strong>PassMap</strong> received a critical update reinforcing our <span class="text-hl-cyan">Zero-Knowledge architecture</span> and privacy sovereignty.</p>
                <p>All credentials and master keys are encrypted locally via <span class="text-hl-cyan">AES-GCM / PBKDF2</span> before storage, ensuring confidential data never leaves your device unencrypted.</p>
                <p>The release also adds real-time entropy analysis and encrypted vault export verified via <span class="text-hl-cyan">SHA-256 checksums</span>.</p>
            `
        }
    },
    {
        id: 'news-6',
        badge: { pt: 'SISTEMA', en: 'SYSTEM' },
        badgeClass: 'devlog-badge',
        author: 'Gennisys',
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
        texto: {
            pt: `
                <p>Nossa suíte de utilitários de produtividade foi amplamente otimizada para cálculos complexos e resposta tátil rápida.</p>
                <p>Corrigimos o tratamento de arredondamento e anomalias de <span class="text-hl-purple">precisão numérica IEEE-754</span>, garantindo precisão matemática rigorosa em cálculos financeiros e científicos.</p>
                <p>Além disso, o BudgetBox recebeu novos visualizadores interativos de fluxo de caixa e suporte completo a <span class="text-hl-purple">atalhos de teclado</span> para navegação acelerada.</p>
            `,
            en: `
                <p>Our productivity utility suite received extensive performance and precision optimizations for rapid workflows.</p>
                <p>We resolved floating-point rounding anomalies with refined <span class="text-hl-purple">IEEE-754 precision algorithms</span>, ensuring deterministic accounting accuracy.</p>
                <p>BudgetBox also gained interactive cashflow visualizers and full <span class="text-hl-purple">keyboard shortcut navigation</span>.</p>
            `
        }
    },
    {
        id: 'news-7',
        badge: { pt: 'SISTEMA', en: 'SYSTEM' },
        badgeClass: 'deploy-badge',
        author: 'Gennisys',
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
        texto: {
            pt: `
                <p>Concluímos a modernização completa dos nós de distribuição estática em todas as regiões atendidas pela infraestrutura da Gennisys.</p>
                <p>Com novos nós de borda (edge nodes), reduzimos o tempo de entrega de pacotes e assets em até <span class="text-hl-cyan">65% mais rápido</span> globalmente.</p>
                <p>A nova política de cache inteligente permite que todos os aplicativos web do catálogo carreguem de forma instantânea e operem <span class="text-hl-cyan">offline com 99.9% de disponibilidade</span>.</p>
            `,
            en: `
                <p>We completed a worldwide infrastructure modernization across all static delivery clusters serving the Gennisys ecosystem.</p>
                <p>By migrating to low-latency edge compute nodes, static bundle delivery is now up to <span class="text-hl-cyan">65% faster worldwide</span>.</p>
                <p>Our updated intelligent caching strategy enables near-instantaneous load times and seamless <span class="text-hl-cyan">offline navigation with 99.9% uptime</span>.</p>
            `
        }
    },
    {
        id: 'news-8',
        badge: { pt: 'DEVLOG', en: 'DEVLOG' },
        badgeClass: 'devlog-badge',
        author: 'Gennisys',
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
        texto: {
            pt: `
                <p>Apresentamos a nova versão do <strong>Design System Gennisys</strong>, focado em estética imersiva, mística e minimalismo funcional.</p>
                <p>A atualização traz suporte nativo a <span class="text-hl-purple">4 auras atmosféricas</span> (Cyber Emerald, Void Amethyst, Solar Amber e Abyssal Azure), combinadas com efeitos de vidro fosco de alto desempenho.</p>
                <p>Todos os botões, modais e componentes foram calibrados para responder com <span class="text-hl-purple">microanimações fluidas</span> e responsividade perfeita em celulares e monitores ultrawide.</p>
            `,
            en: `
                <p>We are introducing the new iteration of our <strong>Gennisys Studio Design System</strong>, designed for atmospheric immersion and functional minimalism.</p>
                <p>The overhaul delivers native support for <span class="text-hl-purple">4 dynamic auras</span> (Cyber Emerald, Void Amethyst, Solar Amber, and Abyssal Azure) with hardware-accelerated glassmorphism.</p>
                <p>All component tokens have been refined with <span class="text-hl-purple">fluid micro-animations</span> and responsive scaling across mobile and ultrawide displays.</p>
            `
        }
    }
];
