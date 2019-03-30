this.addEventListener('install',function (event){
  event.waitUntil(
    caches.open('mycache').then(function(e){
      e.addAll([
        '/index.html',
        '/css/index.css',
        '/form.html',
        '/resume.html',
        '/css/form.css',
        '/css/resume.css',
        '/js/get.js',
        '/js/main.js',
        '/js/resume.js',
        '/js/sw.js'
      ])
    })
  )
})
this.addEventListener('fetch',function(event){
  event.respondWith(caches.open('mycache')
.then(function(cache){
  return cache.match(event.request)
  .then(function(result){
    return result || fetch(event.request)
       .then(function(result){
      cache.put(event.request,result.clone());
      return result;
         })
       })
     })
   )
})
