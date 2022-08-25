(function(){"use strict"
function t(t,e){return caches.keys().then(function(n){n.forEach(function(n){var a=0===n.indexOf(t),c=n!==e
a&&c&&caches.delete(n)})})}function e(t){return new RegExp(t)}function n(t,e){return!!e.find(function(e){return e.test(decodeURI(t))})}self.CACHE_BUSTER="1661434472660|0.3939781313010575",self.addEventListener("install",function(t){return self.skipWaiting()}),self.addEventListener("activate",function(t){return self.clients.claim()})
var a=["/api/_/bootstrap/agents_groups","/api/_/ticket_form_fields"],c=[],s=a.map(e),o=c.map(e),i=function(t,e){var n=t.request
t.respondWith(caches.open(e).then(function(t){return t.match(n).then(function(e){return e||fetch(n).then(function(e){return 200==e.status&&t.put(n,e.clone()),e})})}))},u=function(){caches.keys().then(function(t){t.forEach(function(t){"FS-api-cache-1"==t&&caches.delete(t)})})},r=function(t,e){var n=e.source
console.log("SW:: Posting message back to source client"),n&&n.postMessage(e.data),e.data.broadcastToAllClients&&t.length&&(console.log("SW:: Posting message to all other clients ("+t.length+")"),t.forEach(function(t,a){t.id!==n.id&&t.postMessage(e.data)}))},l=function(t){console.log("SW:: Custom sw-cache-fetch has been triggered for '"+t.data.url+"'")
var e=new Request(t.data.url,t.data.options)
caches.open("FS-api-cache-1").then(function(n){return n.match(e).then(function(a){return a||fetch(e,{headers:t.data.options.headers||{}}).then(function(t){return 200==t.status&&n.put(e,t.clone()),t})})}).then(function(e){e=e.clone(),e.json().then(function(e){self.clients.matchAll().then(function(n){t.data.payload=e,r(n,t)})})})},f=function(t){console.log("SW:: Custom sw-cache-put has been triggered for '"+t.data.url+"'")
var e=new Request(t.data.url,t.data.options),n=new Response(t.data.payload,{status:200,statusText:"ok"})
caches.open("FS-api-cache-1").then(function(a){a.put(e,n),self.clients.matchAll().then(function(e){r(e,t)})})}
self.addEventListener("fetch",function(t){var e=t.request
"GET"===e.method&&/^https?/.test(e.url)&&(n(e.url,o)&&i(t,"FD-lazy-assets-cache-1"),n(e.url,s)&&i(t,"FS-api-cache-1"))}),self.addEventListener("activate",function(e){e.waitUntil(t("FD-lazy-assets-cache","FD-lazy-assets-cache-1")),e.waitUntil(t("FS-api-cache","FS-api-cache-1"))}),self.addEventListener("message",function(t){var e=t.data.type
"sync"===e?u():"custom-fetch"===e?l(t):"custom-put"===e&&f(t)})})()
