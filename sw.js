var CACHE_NAME = 'my-site-cache-v2';
var urlsToCache = [
    '/',
    '/main.css',
    '/dhtmlxgantt.js',
    '/dhtmlxgantt.css',
    '/dhtmlxgantt_marker.js',
    '/dhtmlxgantt_fullscreen.js',
    '/dhtmlxgantt_smart_rendering.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('push', function(event) {
    event.waitUntil(
      self.registration.showNotification('ServiceWorker Cookbook', {
        body: "ting tong",
      })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            console.log('From cache');
            return response;
          }
          return fetch(event.request);
        })
      );
  });

  self.addEventListener('activate', function(event) {

    var cacheWhitelist = ['my-site-cache-v2', 'blog-posts-cache-v1'];
  
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
