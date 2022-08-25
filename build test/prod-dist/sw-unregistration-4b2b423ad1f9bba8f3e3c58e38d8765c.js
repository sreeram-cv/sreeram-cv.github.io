(function(){"use strict"
var e=function(){caches.keys().then(function(e){e.forEach(function(e){caches.delete(e)})})}
"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(function(r){var t=!0,n=!1,i=void 0
try{for(var o,c=r[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){o.value.unregister()}}catch(e){n=!0,i=e}finally{try{!t&&c.return&&c.return()}finally{if(n)throw i}}e()}).catch(function(e){console.log("Service Worker registration failed: ",e)})})()
