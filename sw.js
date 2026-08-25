// GENNISYS STUDIO — Core Service Worker (Stealth PWA Auto-Updater)
const APP_VERSION = '2.1.0';
const CACHE_NAME = `gennisys-core-v${APP_VERSION}`;

const PRECACHE_ASSETS = [
  './',
  './index.html',
  `./style.css?v=${APP_VERSION}`,
  `./main.js?v=${APP_VERSION}`,
  `./noticias.js?v=${APP_VERSION}`,
  `./manifest.json?v=${APP_VERSION}`,
  './assets/logo.jpg',
  './favicon.ico'
];

// Install: Pre-cache core shell & activate immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_ASSETS);
    }).catch(err => {
      console.warn('[SW] Pre-cache warning:', err);
    })
  );
  self.skipWaiting();
});

// Activate: Clean up legacy caches & claim clients
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network-First for dynamic freshness with Cache Fallback
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // For app core assets and navigation: Network first, cache fallback
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then(cached => {
            if (cached) return cached;
            if (event.request.mode === 'navigate') return caches.match('./index.html');
          });
        })
    );
    return;
  }

  // For external fonts / assets: Stale-while-revalidate
  event.respondWith(
    caches.match(event.request).then(cached => {
      const networked = fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => null);
      return cached || networked;
    })
  );
});
