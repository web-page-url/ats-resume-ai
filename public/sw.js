const CACHE_NAME = 'ats-resume-ai-v1';
const urlsToCache = [
    '/',
    '/builder',
    '/manifest.json',
    '/favicon.ico',
    '/icon.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
