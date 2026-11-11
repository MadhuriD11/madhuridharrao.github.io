// Offline cache for Grapes Leaf Doctor (used when the app is hosted on its own site, e.g. GitHub Pages)
const C = "grapes-leaf-doctor-v5";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png",
  "vendor/ort.wasm.min.js", "vendor/ort-wasm-simd-threaded.wasm", "vendor/ort-wasm-simd-threaded.mjs",
  "privacy.html", "models/grace_meta.json", "models/u2netp.onnx", "models/grace_int8.onnx.part0", "models/grace_int8.onnx.part1", "models/grace_int8.onnx.part2",
  "samples/downy.jpg", "samples/powdery.jpg", "samples/bls.jpg", "samples/healthy.jpg"];
self.addEventListener("install", e => e.waitUntil(caches.open(C).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;            // weather API and fonts go to the network
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
