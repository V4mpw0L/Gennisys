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
        badge: { pt: 'LANÇAMENTO', en: 'RELEASE' },
        badgeClass: 'patch-badge',
        date: { pt: '05 SET 2026', en: '05 SEP 2026' },
        tag: 'PassMap v2.11',
        title: {
            pt: 'PassMap v2.11: Novo Motor Cartográfico Offline e Suíte de POIs',
            en: 'PassMap v2.11: Offline Cartographic Engine & Enhanced POI Suite'
        },
        excerpt: {
            pt: 'Lançada a nova versão do <span class="text-hl">PassMap</span> com renderização edge-to-edge fluida, cache de tiles resiliente para <span class="text-hl">navegação 100% offline</span> e gestão avançada de listas de pontos.',
            en: 'Deployed the new release of <span class="text-hl">PassMap</span> featuring fluid edge-to-edge rendering, resilient tile caching for <span class="text-hl">100% offline navigation</span>, and advanced POI list management.'
        },
        texto: {
            pt: `
                <p>A versão <span class="text-hl">v2.11 do PassMap</span> chega aos ecossistemas Gennisys trazendo uma experiência de navegação espacial refinada e responsiva. O motor de renderização cartográfica foi reconstruído para proporcionar visualização fluida de mapas a 60 FPS, sem travamentos e com consumo mínimo de bateria.</p>
                <p>Entre os principais avanços está o novo sistema de <span class="text-hl">cache de tiles vetoriais e raster</span>, permitindo baixar e navegar por regiões inteiras completamente desconectado da internet. Adicionamos suporte avançado a múltiplos estilos de mapa (ruas, topografia, satélite e dark mode) com transições instantâneas.</p>
                <p>O aplicativo agora também conta com <span class="text-hl">gestão avançada de POIs</span> (Pontos de Interesse), facilitando a organização de locais favoritos em listas personalizadas com busca inteligente por proximidade e coordenadas geográficas.</p>
            `,
            en: `
                <p>Version <span class="text-hl">v2.11 of PassMap</span> has officially landed across Gennisys ecosystems, delivering a refined and responsive spatial navigation experience. The cartographic rendering engine has been rebuilt from the ground up to sustain 60 FPS map panning with minimal battery overhead.</p>
                <p>A major highlight is the new resilient <span class="text-hl">vector and raster tile caching system</span>, enabling full navigation through entire regions completely disconnected from the internet. We introduced seamless support for multiple map styles (street, topographic, satellite, and dark mode) with instant tile switching.</p>
                <p>The app also features <span class="text-hl">enhanced POI management</span>, allowing users to organize saved locations into custom lists with proximity search and precise coordinate indexing.</p>
            `
        }
    },
    {
        id: 'news-2',
        badge: { pt: 'TECNOLOGIA', en: 'TECH' },
        badgeClass: 'deploy-badge',
        author: 'Gennisys',
        date: { pt: '28 AGO 2026', en: '28 AUG 2026' },
        tag: 'Arquitetura & Privacidade',
        title: {
            pt: 'Arquitetura Offline-First: Como o PassMap Garante Soberania de Dados',
            en: 'Offline-First Architecture: How PassMap Guarantees Data Sovereignty'
        },
        excerpt: {
            pt: 'Conheça a engenharia por trás do armazenamento local do PassMap: seus pontos salvos, rotas e notas ficam <span class="text-hl-cyan">gravados no seu dispositivo</span>, sem telemetria invasiva ou dependência de nuvem.',
            en: 'Inside PassMap’s local storage engineering: your saved pins, routes, and notes remain <span class="text-hl-cyan">stored on your device</span>, free from invasive telemetry or cloud dependencies.'
        },
        texto: {
            pt: `
                <p>Fiel à filosofia fundacional do estúdio Gennisys, o <span class="text-hl-cyan">PassMap</span> foi desenhado sob o paradigma <strong>Offline-First & Zero-Tracking</strong>. Ao contrário de plataformas tradicionais que monitoram trajetos de usuários para monetização de dados, o PassMap opera como uma ferramenta privada e autônoma.</p>
                <p>Toda a base de dados de pontos, notas, rotas e preferências é armazenada localmente no dispositivo via <span class="text-hl-cyan">IndexedDB criptografado</span>. Isso garante que suas localizações nunca saiam do seu aparelho sem sua autorização explícita.</p>
                <p>Mesmo em cenários de perda total de sinal celular ou em viagens internacionais, o usuário mantém acesso integral a todos os seus mapas e anotações com velocidade instantânea.</p>
            `,
            en: `
                <p>Faithful to Gennisys Studio’s core philosophy, <span class="text-hl-cyan">PassMap</span> was engineered around an <strong>Offline-First & Zero-Tracking</strong> paradigm. Unlike mainstream mapping platforms that harvest trip telemetry for ad monetization, PassMap operates as a private and autonomous utility.</p>
                <p>All saved locations, notes, routes, and custom lists are stored locally on-device through <span class="text-hl-cyan">encrypted IndexedDB</span>. This guarantees that your geographic data never leaves your device without explicit user action.</p>
                <p>Even during total cellular loss or international expeditions, users retain instantaneous, uninterrupted access to their cartography and personal markers.</p>
            `
        }
    },
    {
        id: 'news-3',
        badge: { pt: 'RECURSOS', en: 'FEATURE' },
        badgeClass: 'patch-badge',
        author: 'Gennisys',
        date: { pt: '18 AGO 2026', en: '18 AUG 2026' },
        tag: 'PassMap Weather & AQI',
        title: {
            pt: 'PassMap Integra Telemetria de Clima e Qualidade do Ar em Tempo Real',
            en: 'PassMap Integrates Live Weather Telemetry & Air Quality Indices'
        },
        excerpt: {
            pt: 'O novo widget ambiental correlaciona <span class="text-hl-purple">índices de qualidade do ar (AQI)</span>, temperatura e vento diretamente com as coordenadas geográficas do seu destino.',
            en: 'Our dynamic environmental telemetry widget correlates <span class="text-hl-purple">air quality indices (AQI)</span>, temperature, and wind directly with coordinates across your active destination.'
        },
        texto: {
            pt: `
                <p>Expandindo a capacidade analítica da nossa suíte de localização, integramos ao cabeçalho do <span class="text-hl-purple">PassMap</span> um sistema inteligente de <strong>telemetria ambiental hiperlocal</strong>.</p>
                <p>O widget dinâmico obtém dados meteorológicos de alta precisão (temperatura, umidade, velocidade do vento e condições de céu) em tempo real a partir de coordenadas globais, com suporte a fallback resiliente entre provedores de dados abertos.</p>
                <p>Além do clima tradicional, o app passa a exibir a medição oficial de <span class="text-hl-purple">Qualidade do Ar (AQI)</span>, permitindo que exploradores, esportistas e equipes de campo tomem decisões informadas sobre condições atmosféricas em qualquer região.</p>
            `,
            en: `
                <p>Expanding the analytical capability of our location suite, we introduced an intelligent <strong>hyperlocal environmental telemetry widget</strong> into <span class="text-hl-purple">PassMap</span>’s header interface.</p>
                <p>The dynamic indicator fetches precision meteorological metrics (temperature, humidity, wind velocity, and sky conditions) in real time from global coordinate endpoints, leveraging resilient fallback algorithms between open data providers.</p>
                <p>Alongside standard weather, the application now surfaces live <span class="text-hl-purple">Air Quality Index (AQI)</span> readings, empowering hikers, athletes, and field teams to assess atmospheric conditions safely in any location.</p>
            `
        }
    },
    {
        id: 'news-4',
        author: 'Gennisys',
        badge: { pt: 'DEVLOG', en: 'DEVLOG' },
        badgeClass: 'devlog-badge',
        date: { pt: '08 AGO 2026', en: '08 AUG 2026' },
        tag: 'Gennisys Roadmap',
        title: {
            pt: 'Gennisys Studio: O Roadmap e Expansão para Aplicativos Nativos',
            en: 'Gennisys Studio: The Roadmap & Expansion to Native Mobile Apps'
        },
        excerpt: {
            pt: 'O laboratório autônomo da Gennisys consolida o <span class="text-hl">PassMap</span> como seu principal software geoespacial e prepara a transição para compilação nativa no <span class="text-hl">iOS e Android</span>.',
            en: 'Gennisys autonomous laboratory consolidates <span class="text-hl">PassMap</span> as its flagship geospatial software and prepares the transition to native compilation across <span class="text-hl">iOS & Android</span>.'
        },
        texto: {
            pt: `
                <p>Com o amadurecimento técnico do <span class="text-hl">PassMap</span> como uma suíte completa de inteligência geográfica, o estúdio Gennisys anuncia os próximos passos estratégicos do seu roadmap corporativo.</p>
                <p>O foco prioritário da equipe de engenharia está na preparação das versões empacotadas nativamente para <span class="text-hl">Apple App Store (iOS)</span> e <span class="text-hl">Google Play Store (Android)</span>, aproveitando aceleração por hardware nativa, notificações push de segundo plano e integração profunda com sensores biométricos e de bússola.</p>
                <p>Seguimos firmes em nosso manifesto: desenvolvimento 100% autônomo, produtos com alma e acabamento de alto padrão sem atalhos genéricos.</p>
            `,
            en: `
                <p>With <span class="text-hl">PassMap</span> reaching technical maturity as a comprehensive geospatial intelligence suite, Gennisys Studio is announcing the next strategic milestones on our product roadmap.</p>
                <p>Our engineering team’s primary focus is preparing native distribution packages for both the <span class="text-hl">Apple App Store (iOS)</span> and <span class="text-hl">Google Play Store (Android)</span>, taking full advantage of native hardware acceleration, background push services, and deep sensor integration.</p>
                <p>We remain steadfast in our studio manifesto: 100% autonomous development, soulfully crafted digital experiences, and uncompromising engineering standards.</p>
            `
        }
    }
];
