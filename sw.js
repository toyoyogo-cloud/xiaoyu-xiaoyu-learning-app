const CACHE="xy-learning-v24";
const ASSETS=["./","./index.html","./manifest.json","./icon.svg","./data/question-bank-batch-08.js","./data/question-bank-batch-09.js","./data/question-bank-batch-10.js","./data/question-bank-batch-11.js","./data/question-bank-batch-12.js","./data/question-bank-batch-13.js","./data/question-bank-batch-14.js","./data/question-bank-batch-15.js","./data/question-bank-batch-16.js","./data/question-bank-batch-17.js","./data/question-bank-batch-18.js","./data/question-bank-batch-19.js","./data/question-bank-batch-20.js"];
self.addEventListener("install",event=>{event.waitUntil(self.skipWaiting())});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",event=>{
 const req=event.request;
 if(req.method!=="GET"||new URL(req.url).origin!==self.location.origin)return;
 event.respondWith(fetch(req,{cache:"no-store"}).then(response=>{
   if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(req,copy)).catch(()=>{});}
   return response;
 }).catch(()=>caches.match(req).then(cached=>cached||caches.match("./index.html"))));
});
