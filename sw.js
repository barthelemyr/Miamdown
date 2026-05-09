// Miamdown service worker — offline support
// Bump CACHE_VERSION when you change cached assets to force update.
const CACHE_VERSION = 'miamdown-v1';

// App shell : files needed for the app to work offline.
// Note: we cache the CDN scripts too. They are pinned to exact versions
// in index.html, so the cached copy stays valid until we bump CACHE_VERSION.
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/marked@14.1.3/marked.min.js',
  'https://cdn.jsdelivr.net/npm/dompurify@3.1.7/dist/purify.min.js'
];

// Install: pre-cache the app shell.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate: drop old caches.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for GET requests, fall back to network, then cache the response.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req).then((response) => {
        // Only cache successful, basic/opaque responses
        if (!response || response.status !== 200) return response;
        const respClone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => {
          cache.put(req, respClone).catch(() => { /* ignore quota errors */ });
        });
        return response;
      }).catch(() => {
        // Offline & not in cache: for navigation requests, fall back to index.html
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
