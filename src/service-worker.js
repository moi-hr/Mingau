self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("mingau-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "creditos.html",
        "instrucoes.html",
        "manifest.json",
        "icon-192.png",
        "icon-512.png",
        "caramelo-creditos.gif",
        "creditos-background.jpg",
        "game-over.gif",
        "game-over.mp3",
        "mingau-sit.gif",
        "mingau.gif",
        "novelo.gif",
        "novelos.png",
        "perde-vida.mp3",
        "petisco.png",
        "planet-background-2.jpg",
        "planet-background.jpg",
        "space-background.gif",
        "theme.mp3",
        "touca.png",
        "vida-extra.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
