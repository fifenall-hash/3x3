// sw.js

// 1. 서비스 워커 설치 시 즉시 활성화
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// 2. 활성화 시 즉시 클라이언트 제어 시작
self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// 3. (핵심) 오프라인 캐시를 하지 않고 무조건 최신 데이터를 가져옴
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
