/* ==========================================================================
   SYSCORV // OFFICIAL NEWS & RELEASES (noticias.js)
   
   COMO ADICIONAR UMA NOVA NOTÍCIA / HOW TO POST A NEW ITEM:
   1. Adicione um novo objeto no topo da lista "syscorvNoticias" abaixo.
   2. Preencha os campos em Português e Inglês (titulo, excerpt, texto).
   3. A página inicial e o modal atualizarão automaticamente!
   ========================================================================== */

window.syscorvNoticias = [
    {
        id: "passmap-2-11-shipped",
        categoria: "LANÇAMENTO",
        categoriaEn: "RELEASE",
        data: "05 SET 2026",
        dataEn: "05 SEP 2026",
        author: "Syscorv",
        tag: "PassMap v2.11",
        tagEn: "PassMap v2.11",
        titulo: "PassMap 2.11: Otimização de Motor Cartográfico e Renderização a 60 FPS",
        tituloEn: "PassMap 2.11 Shipped: Cartographic Engine & 60 FPS Optimization",
        excerpt: "Atualização estrutural do pipeline de renderização vetorial. Implementação de particionamento e cache em IndexedDB para navegação offline fluida e estável.",
        excerptEn: "Structural overhaul of the vector rendering pipeline. Multi-quadrant IndexedDB caching delivers fluid, reliable offline navigation.",
        texto: `
            <p>A versão <strong>v2.11 do PassMap</strong> introduz aprimoramentos fundamentais no subsistema de renderização vetorial e na gestão de memória local, com foco em estabilidade operacional em condições de rede nula ou intermitente.</p>
            <p>O ciclo principal de renderização cartográfica foi reestruturado para assegurar taxa sustentada de 60 quadros por segundo durante rotações dinâmicas e transições de escala. O mecanismo de armazenamento em IndexedDB agora processa o pré-carregamento determinístico de quadrantes cartográficos, garantindo navegação contínua sem requisições adicionais.</p>
            <p>A interface foi recalibrada para respeitar as especificações ergonômicas de visualização e áreas de respiro dos sistemas operacionais móveis, assegurando legibilidade rigorosa e precisão espacial.</p>
        `,
        textoEn: `
            <p><strong>PassMap v2.11</strong> introduces foundational refinements to the vector rendering subsystem and local memory management, specifically engineered for operational reliability under degraded or non-existent network conditions.</p>
            <p>The cartographic render loop has been profiled to maintain a stable 60 FPS cadence throughout dynamic rotation and continuous zoom transitions. The client-side IndexedDB cache now deterministically pre-fetches map quadrants, enabling seamless uninterrupted navigation.</p>
            <p>The mobile viewport architecture was systematically calibrated against operating system safe-area insets, ensuring typographic hierarchy and geometric clarity.</p>
        `
    },
    {
        id: "local-first-zero-telemetry",
        categoria: "ARQUITETURA",
        categoriaEn: "ARCHITECTURE",
        data: "28 AGO 2026",
        dataEn: "28 AUG 2026",
        author: "Syscorv",
        tag: "Engenharia & Privacidade",
        tagEn: "Engineering & Privacy",
        titulo: "Arquitetura Local-First e Princípios de Soberania de Dados",
        tituloEn: "Local-First Architecture and Data Sovereignty Principles",
        excerpt: "Análise técnica sobre a retenção estrita de dados no dispositivo: chaves de acesso e registros geográficos preservados no armazenamento cliente.",
        excerptEn: "Technical insights on strict client-side data retention: local cryptographic keys and on-device coordinate storage.",
        texto: `
            <p>A concepção arquitetural do <strong>PassMap</strong> orienta-se pela primazia do armazenamento local. Ao contrário de modelos dependentes de sincronização contínua na nuvem, todas as estruturas de dados fundamentais residem exclusivamente no dispositivo do usuário.</p>
            <p>Marcadores geográficos, metadados de acesso e anotações logísticas são processados e armazenados via IndexedDB local. Essa abordagem elimina vetores desnecessários de telemetria externa e preserva a integridade informacional de cada sessão de uso.</p>
            <p>A descentralização do processamento impõe um rigor adicional ao design dos algoritmos de indexação, recompensado por tempos de resposta instantâneos e total resiliência operacional.</p>
        `,
        textoEn: `
            <p>The architectural foundation of <strong>PassMap</strong> is anchored on the primacy of client-side storage. Moving away from models dependent on continuous cloud telemetry, primary state collections remain exclusively on user hardware.</p>
            <p>Geographic coordinates, access metadata, and logistics notes are indexed directly into local IndexedDB structures. This design eliminates unnecessary third-party transmission vectors while safeguarding session integrity.</p>
            <p>Decentralizing processing requires elevated rigor in local spatial indexing algorithms, delivering instantaneous retrieval and resilient offline operation.</p>
        `
    },
    {
        id: "realtime-telemetry-weather-aqi",
        categoria: "ENGENHARIA",
        categoriaEn: "ENGINEERING",
        data: "18 AGO 2026",
        dataEn: "18 AUG 2026",
        author: "Syscorv",
        tag: "Telemetria Espacial",
        tagEn: "Spatial Telemetry",
        titulo: "Telemetria Ambiental Integrada: Índices Meteorológicos e AQI",
        tituloEn: "Integrated Environmental Telemetry: Meteorological Indices and AQI",
        excerpt: "Módulo espacial para correlação em tempo real de coordenadas geográficas com dados micrometeorológicos e qualidade do ar, operando com cache inteligente.",
        excerptEn: "Spatial module correlating realtime geographic coordinates with micrometeorological and air quality indices, backed by threshold caching.",
        texto: `
            <p>O PassMap incorporou uma camada de <strong>telemetria ambiental de precisão</strong>, permitindo aos usuários a visualização pontual de variáveis atmosféricas vinculadas à posição observada.</p>
            <p>O módulo integra consultas a bases públicas abertas de meteorologia e modelos globais de qualidade do ar (AQI), traduzindo vetores de vento, gradientes térmicos e índices de pureza atmosférica em uma camada visual discreta.</p>
            <p>Para preservar largura de banda e autonomia energética do dispositivo, o pipeline adota algoritmos de limiar espacial e amortecimento temporal (debouncing), atualizando métricas apenas quando ocorrem alterações geográficas significativas.</p>
        `,
        textoEn: `
            <p>PassMap has integrated an ultra-lean <strong>precision environmental telemetry layer</strong>, enabling contextual observation of atmospheric metrics linked directly to spatial coordinates.</p>
            <p>The module correlates public meteorological data and atmospheric dispersion models, translating wind vectors, thermal gradients, and air quality indices (AQI) into an unobtrusive overlay.</p>
            <p>To preserve network bandwidth and battery efficiency, the pipeline employs distance-threshold caching and temporal debouncing, querying remote data points only upon verified spatial movement.</p>
        `
    },
    {
        id: "native-packaging-ios-android",
        categoria: "DESENVOLVIMENTO",
        categoriaEn: "DEVELOPMENT",
        data: "08 AGO 2026",
        dataEn: "08 AUG 2026",
        author: "Syscorv",
        tag: "Plataformas Móveis",
        tagEn: "Mobile Platforms",
        titulo: "Compilação Nativa e Integração de Sensores em Dispositivos Móveis",
        tituloEn: "Native Runtimes and Mobile Sensor Integration",
        excerpt: "Estruturação de camadas nativas para acesso a acelerômetros, bússola giroscópica e persistência de baixa latência em ecossistemas móveis.",
        excerptEn: "Structuring native bridge layers for direct accelerometer access, gyroscopic orientation, and low-latency persistence.",
        texto: `
            <p>Embora a suíte PWA do PassMap ofereça desempenho consistente em navegadores modernos, certas capacidades de hardware requerem acesso de baixo nível para máxima fidelidade.</p>
            <p>Iniciou-se a preparação de invólucros nativos direcionados às plataformas <strong>iOS</strong> e <strong>Android</strong>. O objetivo é viabilizar o polling contínuo da bússola magnetométrica e otimizar os ciclos de atualização da interface em segundo plano.</p>
            <p>A arquitetura central permanece unificada e independente, garantindo equivalência funcional e manutenção simplificada entre todas as vias de distribuição.</p>
        `,
        textoEn: `
            <p>While PassMap's PWA runtime demonstrates consistent performance across modern engines, specific hardware capabilities necessitate low-level interfaces for peak fidelity.</p>
            <p>Preparation of native wrappers for <strong>iOS</strong> and <strong>Android</strong> runtimes is underway. The objective is to unlock low-overhead magnetometer polling and enhance background execution resilience.</p>
            <p>The core computational engine remains unified and platform-agnostic, preserving operational parity across all distribution channels.</p>
        `
    },
    {
        id: "syscorv-inaugural-manifesto",
        categoria: "CORPORATIVO",
        categoriaEn: "CORPORATE",
        data: "20 SET 2026",
        dataEn: "20 SEP 2026",
        author: "Syscorv",
        tag: "DIRETRIZ INSTITUCIONAL",
        tagEn: "INSTITUTIONAL DIRECTIVE",
        titulo: "Diretrizes Institucionais: A Síntese de Sistemas e Autonomia",
        tituloEn: "Institutional Directives: The Synthesis of Systems and Autonomy",
        excerpt: "Apresentação da Syscorv como laboratório independente dedicado ao desenvolvimento de software proprietário, sistemas espaciais e arquiteturas resilientes.",
        excerptEn: "Introducing Syscorv as an independent laboratory dedicated to proprietary software, spatial systems, and resilient computational architectures.",
        texto: `
            <p>A <strong>Syscorv</strong> estabelece-se com o propósito de desenvolver software de alto desempenho estruturado sobre princípios de eficiência computacional, resiliência de infraestrutura e controle estrito do usuário sobre seus dados.</p>
            <p>Frente a um ecossistema progressivamente dependente de serviços centralizados, orientamos nossa pesquisa aplicada à criação de ferramentas autônomas que operam com integridade e rapidez em nível local.</p>
            <p>O ecossistema reúne pesquisa em algoritmos de renderização vetorial, estruturas de dados espaciais e interfaces de controle com rigor técnico e estético.</p>
        `,
        textoEn: `
            <p><strong>Syscorv</strong> is established with the objective of engineering high-performance software grounded in computational efficiency, infrastructural resilience, and rigorous user data sovereignty.</p>
            <p>Addressing an industry characterized by increasing cloud dependency, we direct our applied research toward autonomous tools that operate reliably and efficiently on local hardware.</p>
            <p>The ecosystem unifies research into high-throughput vector rendering algorithms, spatial data structures, and restrained, high-density interface design.</p>
        `
    }
];
