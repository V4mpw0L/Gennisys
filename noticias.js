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
        categoriaEn: "SHIPPED",
        data: "05 SET 2026",
        dataEn: "05 SEP 2026",
        author: "Syscorv",
        tag: "PassMap v2.11",
        tagEn: "PassMap v2.11",
        titulo: "PassMap 2.11 no Ar: A Saga dos Mapas Offline e 60 FPS no Celular",
        tituloEn: "PassMap 2.11 Shipped: Offline Maps & 60 FPS Mobile Polish",
        excerpt: "Reconstruí o motor do PassMap nos últimos dias. O maior desafio foi fazer o cache de tiles funcionar 100% offline com renderização lisa e sem engasgos no mobile.",
        excerptEn: "Overhauled PassMap’s core engine over the past days. The biggest hurdle was seamless tile caching for true offline navigation with 60 FPS mobile panning.",
        texto: `
            <p>Finalmente liberei a versão <strong>v2.11 do PassMap</strong>. Esse projeto começou de uma necessidade pessoal de ter um mapa offline rápido, confiável e sem poluição visual para viagens e trilhas onde o sinal 4G/5G oscila constantemente.</p>
            <p>Passei as últimas semanas refinando o loop de renderização cartográfica para cravar 60 FPS estáveis mesmo com dezenas de marcadores e polígonos na tela. O sistema de cache em IndexedDB agora pré-carrega quadrantes inteiros de tiles, permitindo navegação fluida sem conexão de rede.</p>
            <p>O ajuste fino de interface no mobile — respeitando safe-areas, notch e barra de navegação no iOS e Android — deu trabalho, mas o resultado é uma experiência que parece um app nativo de primeira linha.</p>
        `,
        textoEn: `
            <p>I finally shipped <strong>PassMap v2.11</strong>. This project was born from a personal need for a fast, dependable, clutter-free offline map during travel and trails where cellular connectivity drops out.</p>
            <p>Spent intense sessions tuning the cartographic rendering loop to maintain 60 FPS during pinch, zoom, and dynamic rotation. Re-architected tile caching into local IndexedDB chunks so entire regions can be navigated fully disconnected.</p>
            <p>Calibrating edge-to-edge viewports across mobile browsers (handling viewport height, home bars, and safe-area insets seamlessly on iOS WebKit and Android) was tricky, but the app now feels indistinguishable from a native build.</p>
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
        titulo: "Por Que Decidi Fazer o PassMap 100% Local-First e Sem Telemetria",
        tituloEn: "Why I Built PassMap Around a Local-First, Zero-Telemetry Ethos",
        excerpt: "Minhas reflexões como desenvolvedor sobre privacidade: seus pontos favoritos, coordenadas e rotas pertencem ao armazenamento local do seu aparelho, e não a servidores de terceiros.",
        excerptEn: "My thoughts as an engineer on data privacy: your saved pins, coordinates, and notes belong to your local device storage, not remote corporate servers.",
        texto: `
            <p>Sempre me incomodou como os grandes serviços de mapas tratam cada passo do usuário como telemetria monetizável. Ao planejar o <strong>PassMap</strong>, decidi seguir na contramão: arquitetura <strong>Local-First intransigente</strong>.</p>
            <p>Todos os marcadores, listas personalizadas de POIs e anotações ficam salvos em IndexedDB com criptografia local. Não temos servidores rastreando por onde você anda, nem rotas enviadas para a nuvem sem você querer.</p>
            <p>Desenvolver dessa forma dá trabalho porque não posso terceirizar a lógica para um backend centralizado, mas a paz de espírito e a velocidade instantânea de carregamento compensam cada linha de código.</p>
        `,
        textoEn: `
            <p>It always bothered me how major map providers treat every route and pin as monetizable telemetry. When designing <strong>PassMap</strong>, I chose the opposite path: uncompromising <strong>Local-First engineering</strong>.</p>
            <p>All custom POIs, categorized lists, and geographical annotations live in on-device IndexedDB with local encryption. We maintain zero tracking backends collecting user footsteps or routes.</p>
            <p>Building this way requires extra discipline because you can’t lean on server-side shortcuts, but the resulting instantaneous load times and true privacy make every refactor worthwhile.</p>
        `
    },
    {
        id: "realtime-telemetry-weather-aqi",
        categoria: "EXPERIMENTOS",
        categoriaEn: "EXPERIMENTS",
        data: "18 AGO 2026",
        dataEn: "18 AUG 2026",
        author: "Syscorv",
        tag: "PassMap Telemetria",
        tagEn: "PassMap Telemetry",
        titulo: "Telemetria em Tempo Real: Integrando Clima e Qualidade do Ar (AQI)",
        tituloEn: "Realtime Telemetry: Integrating Weather & Air Quality (AQI) on Maps",
        excerpt: "Implementei um widget ambiental no cabeçalho do PassMap que calcula em tempo real o índice de qualidade do ar (AQI), temperatura e vento a partir de coordenadas globais.",
        excerptEn: "Engineered an environmental telemetry widget in PassMap’s header correlating live coordinates with air quality index (AQI), temperature, and wind.",
        texto: `
            <p>Uma funcionalidade que eu queria muito no PassMap era ver de relance as condições atmosféricas do local onde estou ou para onde estou planejando ir. Criei um módulo de <strong>telemetria ambiental hiperlocal</strong>.</p>
            <p>O widget faz requisições otimizadas para endpoints de dados meteorológicos abertos e correlaciona a latitude e longitude com medições oficiais de <strong>AQI (Índice de Qualidade do Ar)</strong>, velocidade do vento e temperatura.</p>
            <p>Para evitar requisições desnecessárias quando o usuário apenas passeia pelo mapa, apliquei um algoritmo de debouncing e cache inteligente com base no raio de deslocamento.</p>
        `,
        textoEn: `
            <p>A capability I really wanted inside PassMap was glancing at atmospheric conditions right at my target destination. I built an ultra-lightweight <strong>hyperlocal environmental telemetry widget</strong>.</p>
            <p>The module queries open meteorological endpoints, correlating geographic coordinates with official <strong>AQI (Air Quality Index)</strong> measurements, wind velocity, and ambient temperature.</p>
            <p>To preserve network bandwidth while panning, I built a smart debouncing and spatial threshold cache that only refreshes when significant distance thresholds are crossed.</p>
        `
    },
    {
        id: "native-packaging-ios-android",
        categoria: "BASTIDORES",
        categoriaEn: "DEVLOG",
        data: "08 AGO 2026",
        dataEn: "08 AUG 2026",
        author: "Syscorv",
        tag: "Roadmap Mobile",
        tagEn: "Mobile Roadmap",
        titulo: "O Próximo Passo: Empacotando o PassMap Nativo para iOS e Android",
        tituloEn: "The Next Milestone: Packaging PassMap Natively for iOS & Android",
        excerpt: "Com o PWA rodando redondo, comecei os testes para empacotar o PassMap com casca nativa para as lojas oficiais, aproveitando aceleração de hardware e sensores de bússola.",
        excerptEn: "With our PWA running smooth, I am preparing the native compilation pipeline for PassMap on the App Store & Google Play, tapping into hardware compass and native acceleration.",
        texto: `
            <p>O ecossistema PWA do PassMap está extremamente sólido, mas há barreiras do ecossistema web móvel (como travas de orientação no WebKit do iOS e limitações de sensores em segundo plano) que só uma compilação nativa resolve de forma definitiva.</p>
            <p>Comecei a estruturar o pipeline de empacotamento para a <strong>Apple App Store</strong> e a <strong>Google Play Store</strong>. A meta é manter a base de código 100% autônoma, adicionando pontes nativas apenas para sensores biométricos, bússola giroscópica e sincronização local offline.</p>
            <p>Seguimos firmes no compromisso de construir software independente com alma, sem código genérico de template.</p>
        `,
        textoEn: `
            <p>PassMap’s PWA shell is rock-solid, but mobile web browsers introduce constraints (such as iOS WebKit orientation lock limitations and background sensor throttling) that only a native runtime solves cleanly.</p>
            <p>I have begun laying out the native deployment pipeline for both the <strong>Apple App Store</strong> and <strong>Google Play Store</strong>. The goal is maintaining our lean, autonomous codebase while unlocking native gyrocompass access and biometric unlock.</p>
            <p>Continuing our philosophy: handcrafted independent software with soul, zero generic boilerplates.</p>
        `
    },
    {
        id: "syscorv-inaugural-manifesto",
        categoria: "CORPORATIVO",
        categoriaEn: "CORPORATE",
        data: "20 SET 2026",
        dataEn: "20 SEP 2026",
        author: "Syscorv",
        tag: "COMUNICADO OFICIAL",
        tagEn: "OFFICIAL RELEASE",
        titulo: "Inauguração Oficial da Syscorv: A Síntese de Sistemas e Autonomia",
        tituloEn: "Official Launch of Syscorv: The Synthesis of Systems and Autonomy",
        excerpt: "Apresentamos oficialmente a Syscorv — um estúdio corporativo e organização de software independente focada em arquiteturas resilientes, sistemas espaciais e aplicações proprietárias.",
        excerptEn: "Officially introducing Syscorv — a corporate software organization focused on resilient architectures, spatial suites, and user-sovereign proprietary applications.",
        texto: `
            <p>A Syscorv nasce da convicção de que o software contemporâneo precisa resgatar os princípios de alto desempenho, independência de infraestrutura e controle soberano do usuário.</p>
            <p>Em um mercado dominado por aplicações web frágeis e dependentes de conectividade ininterrupta, nossa missão é arquitetar ferramentas computacionais que operem com máxima eficiência no ambiente local, sem concessões de privacidade ou qualidade técnica.</p>
            <p>O portfólio da Syscorv consolida anos de pesquisa aplicada em algoritmos de renderização vetorial, estruturas de dados espaciais e motores de simulação interativa.</p>
        `,
        textoEn: `
            <p>Syscorv is founded on the core thesis that contemporary software must restore the foundations of raw computational speed, infrastructural resilience, and user data sovereignty.</p>
            <p>In an ecosystem inundated with fragile web applications beholden to continuous cloud dependencies, our engineering directive is building computational tools that function with peak efficiency directly on the local machine.</p>
            <p>The Syscorv ecosystem consolidates years of applied research into high-throughput spatial vector algorithms, decoupled synchronization, and autonomous graphical engines.</p>
        `
    }
];
