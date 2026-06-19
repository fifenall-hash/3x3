const CACHE_NAME = 'stock-eval-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './exp.png',
  './icon.ico'
];

// 설치 단계: 필요한 파일들을 로컬 캐시에 저장합니다.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 패치 단계: 네트워크가 끊겼을 때 로컬 캐시에서 파일을 불러옵니다.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});