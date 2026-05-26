// Meichen Public Shell — service-worker.js
// Caches ONLY public shell assets. No private formula core, no shade database, no customer data.
// Version: WB17.6 RC8a Safari Home Screen Test Shell 20260526

const CACHE = 'meichen-shell-rc8a-20260526';
const SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './apple-touch-icon.png'
];

self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(SHELL_ASSETS);
    }).catch(function() {})
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(key) { return key !== CACHE; }).map(function(key) { return caches.delete(key); }));
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request, { cache: 'no-store' }).then(function(response) {
      var clone = response.clone();
      caches.open(CACHE).then(function(cache) { cache.put(event.request, clone); }).catch(function() {});
      return response;
    }).catch(function() {
      return caches.match(event.request).then(function(cached) {
        return cached || caches.match('./index.html');
      });
    })
  );
});
