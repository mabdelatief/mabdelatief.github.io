'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ed0acd3e714acf0608a411112d0da4cb",
"index.html": "22f8ef9bebb0171f3a48df192a6b03a7",
"/": "22f8ef9bebb0171f3a48df192a6b03a7",
"main.dart.js": "806e6c302d659d4b3cd35204ec352c7c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"assets/AssetManifest.json": "c8b24c053e90c00bf7cc638e99b6f7d4",
"assets/NOTICES": "21f20c316008267b84621c4bcf590add",
"assets/FontManifest.json": "e31e8a11658753f50ae1033564e34ba6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/me.jpg": "b8090670e1bd97b99d3e5df7a9ddca5e",
"assets/assets/images/email.png": "d8409fac9137c44058d9acfb333cf9f9",
"assets/assets/images/appstore1.png": "d7cd949e60f0eb7fd950f10a0f1f9b3b",
"assets/assets/images/article1.gif": "da1705d1e92dd915f667dc8ffdd7473f",
"assets/assets/images/instagram.png": "a624026978083046a9fbcf07443ea670",
"assets/assets/images/playstore1.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/images/article2.gif": "81634488c016419b395c7fcae247df42",
"assets/assets/images/tapjoy.png": "5eadbce8477cc8e18074b3195ec025c5",
"assets/assets/images/medium.png": "0e55ecddec02b8550063e2bdbb1d1d84",
"assets/assets/images/linkedin.jpg": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/mobile.png": "f59c46dc1f973ca820ddd40661428ecb",
"assets/assets/images/me2.JPG": "aea99d7211d04f0eee12c592da2e7b8e",
"assets/assets/images/whatsapp.png": "188a278629872508123e7bf25a4e4ae9",
"assets/assets/images/github-logo.png": "472739dfb5857b1f659f4c4c6b4568d0",
"assets/assets/images/linkedin2.png": "c9a19558ed5f98eb15a6bf1a0769ca41",
"assets/assets/videos/yummio.mp4": "e1182304dc877bdc6a9af1b2231812a7",
"assets/assets/videos/mng.mp4": "31387bc0a5a77cc2299f93014a476ac7",
"assets/assets/videos/egalpa.mp4": "8bdb81ed85bd13396d25ff0a0a423bc8",
"assets/assets/videos/capy.mp4": "072ab8bfb069e6446e2289454ee47b97",
"assets/assets/fonts/GeosansLight.ttf": "3116cf7d5d85070c2c0d4b96bfee7d8d",
"assets/assets/fonts/Silent%2520Reaction.ttf": "b8897415d9eb0d22004de31dcbe74732",
"assets/assets/fonts/Hathem%2520Bosteem.ttf": "2e153ad3156fee7569bc07a0a972fa23",
"assets/assets/fonts/Raleway-Regular.ttf": "6e4a9679e65cc320746c3e5d48e51f28",
"assets/assets/fonts/Lieselotte%2520-%2520Personal%2520Use.ttf": "21caec457cead9c95f3f8353355e6124",
"assets/assets/fonts/VertigoFLF.ttf": "d6cc9bd6a080f077d49754dda75ca342",
"assets/assets/fonts/Antro_Vectra.otf": "2307213ebbbbe43dd90c679edac6d9bf",
"assets/assets/fonts/Prototype.ttf": "0483b4eeaaefc7b81986e43702c7900d",
"assets/assets/fonts/Angelique-Rose-font-FFP.ttf": "22085a072deb7880e36fcb4d1a3fe3b1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
