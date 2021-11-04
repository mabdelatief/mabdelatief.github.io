'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ed0acd3e714acf0608a411112d0da4cb",
"index.html": "947469e9a7239d2af25e37c7ad45c0db",
"/": "947469e9a7239d2af25e37c7ad45c0db",
"main.dart.js": "b3de7e6dd42c63f9a41532b5f108224e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
".git/config": "805cd85693cc7da5af938182dafa1368",
".git/objects/59/291e55117ef89af336b3fabda09710befc23c2": "385b90e650bddd202fbf6d34b7db2f3b",
".git/objects/6f/55454426848a869dd419eea98a51937293bca8": "03fdc691618a5e2e38bafaee908c5e34",
".git/objects/9e/aaf19e1db16b7050f96f87829a29bd531d6d8b": "17d0da2ce29ec76d7e5a2d04b0e0149d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/67/7bff60b53c21c9efbc06a6c347dfb01604f0cc": "1eaa89a85a511031f3670227fa350d66",
".git/objects/67/ab3887233d4d183a3f12e8e5540ba369520ff3": "183646cf23b691807137cb0102a21249",
".git/objects/60/b8bb9582d339b036ac8c02adcfa7f44b493970": "5b6780892c529010f12f79856882fbec",
".git/objects/34/976d7e4866bc3bda1615df5b0fcfb6f7a26b8f": "31face88bea28d920ef2fdcc11ce6a93",
".git/objects/5f/2c948a492367ff102523fee39a617d1035096a": "ca99ae724bf7152a5f064a93bfd25c64",
".git/objects/05/03a57e25d9d1bb246b92fdf82995521fce12b8": "eb7a10535828a1f8674e44ebb0ea7076",
".git/objects/da/e1130c58899f6062cdb8b557ca60030475d8df": "318960a879db9fc677d38f8a119a2daa",
".git/objects/bd/12fd3a846fdad2f80db72178a6b355383175a8": "0cd3c544cdc4737c3eafbcab2fd6fa76",
".git/objects/bd/3a96068296848dab81bbb8d270d7b4a8774dd5": "c5ccf241c36bba5875485b9d40e61abe",
".git/objects/d6/58522a701260452205f1a501a83d8deeb2724e": "6b55b23a4bc8d16bd54d113060eb0374",
".git/objects/ab/73fed454218389acf99148228cfbf6a5a5ceb6": "af48fa9e4f63a811905678170de59030",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/38a816fc9b0aaa637a22c8368be04c7a77aae5": "4064ca0e46a050d390355e53ddc04fc3",
".git/objects/c7/7b7464b049c7d6666155c61df5f486f241f760": "4ab8ee67a3eb5dc207a2be6cb6cffe4e",
".git/objects/c7/0bf00f47201e79fdf14cb5483302fe6ff8ffaf": "2ccd5f729062417ef6ef20d29982066c",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c0/6c40d84059626c71416cdde6b39d4fc0bc80e0": "be6e454d1775a18c2af4e5c8d341b997",
".git/objects/ca/9bc88cfa72d00ab6fa70da84de4fb9199aad8b": "c215fa52512ed8ba6afe081d22dda4a7",
".git/objects/ca/34be622d6724f1616d19aedcee7e62baef05d3": "ce51db7eeace407af0694e283cefca49",
".git/objects/e4/2d52e7e97b2d4b5ad1a3b5eaf1d434e16c1d4d": "159719107a435693623a6b216d04740f",
".git/objects/fe/57da555d497e257d8fe979dffd2ffa6659c412": "13d4f8997a64ba92775b8b41c81628da",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/e0debd26d9cedb4d4875b5ab7b01e0480890ee": "989840679055c99b2a057fb4945e8a77",
".git/objects/4b/3aa38795cc1842dfa4e75b3fc19423adb6d456": "eb3aa515bf9bba95deb391e3d5745fe9",
".git/objects/29/99c6e0451f61735b172158aecd9933b2498555": "9de5c7778ee37999032b25b135bf7c67",
".git/objects/16/49c324cfbdbf6035e4f2f2f461da0b946b751f": "2276894ed9300e682b44a9c6ad558f17",
".git/objects/7b/be4cd191cb2135bebcf4e7a3e14d131dd643e9": "5fbbc7dc9114f8ffa21a74a8c046906d",
".git/objects/8f/b8b03c147644b7f09c9ae24c5110fa930538b0": "c81fe81d5f1d14a0e54d47a3f6f7cb57",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/2846a12085914cc0e38d9b48036b11d2a4d7c4": "1ceaceb9e2b3af1e9c752c4cbb2367e5",
".git/objects/4d/b9f60ad78871238a0eeced7778f7d55e413db8": "ccd548f1ce95105ef6b751bf55add232",
".git/objects/86/b4853a1ac9f7ab8df14293a8bf8c1804caa365": "c5069a9eb3fd255f016bbd0bd8b520c2",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/72/f5e0d49735d6ecc59f4d67d37f0daec945f2e5": "9bf4b1d43f4dfef5c6e6e8d6c57d7479",
".git/objects/44/aa30ce0bd55e22d9aa9351b773fe22694045cf": "b7185a6e96530e06cc6eb78cd1f94d7c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/09/5787d1f22da558e0fffbd6aabaef14bb322163": "da41aa7c834b823a25dc2081a1cd0543",
".git/objects/91/dc09f718a7ccffa02b78d3e2294c37d338e931": "981cc58ce6f36c936b53d241d8979e98",
".git/objects/3a/caaf9045ad27986cadfad626b90e6915f18103": "de447e825fb23bf6073ec70ec2f21364",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/06/1078825f8a392e4dfb401f283f199af5c49a01": "d0fdb46623583bdeed6c1f943fb1f07c",
".git/objects/55/e73e8bbfc882d85d91c84be445f88e961f3195": "a9266724e6e3b6bd040a87cf52fc1664",
".git/objects/97/6ab7fbc8d98808044094a767cd09e9d84f2531": "f7b94f3f505e2fc2ab362a072c61d1c4",
".git/objects/64/7494ac4628a1950c77cc436f2b5be5e83b6c18": "a295e3ea6ef5208913384b04fc9e5d24",
".git/objects/b8/7d45237902fc73ca589c294ea36a35b64256ed": "204fafe0ce6e3dba7e948e17dd203bf4",
".git/objects/a9/665c9ce2cb7ecb8e39865057460e64ea229447": "d59804415b75015213a255b07196909c",
".git/objects/a9/8c0eaa0ca0aeffae7501ef4bbb7dc1c55ad9b9": "7addcdb0fbea365b84440f55574ac6bf",
".git/objects/a9/d63b79f592bc4e31d01c8f97ad13bcb50ae3ce": "44c29fcaa87937824a6b27149d56249c",
".git/objects/d5/ed474a7d846353d3b4f18b4d681c334df770ca": "6b01f1bbdce42bedf52a39ec16f07e2c",
".git/objects/d5/98c08b33d307666ad567076e8e869be0bd4c9c": "cee15e7cf4af6bfe452b50e807068056",
".git/objects/d2/135443dc7c404f001c3dbc461adbfb8dbeb0d6": "2dca51ee4ea293f607abad9c881e4c54",
".git/objects/af/55270122a9f24c73abe158e85855e0bfb95f73": "1727223b2d02307f2a0dfdeca1e5e143",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/43a257b130eedc1f8dc1e15dda3bbd61c1d0ac": "423cd36fdb18372658d0187f0af77198",
".git/objects/c4/408ed4e4b07fc01fddbc522cd4550a5fdcaf55": "1e67c8e828e16dca610bdc15b38cf8e9",
".git/objects/e1/be4a86ff0c1f67b2bfeb69d15e254704524902": "53fb238b684e77fd2493c7187ea86b1b",
".git/objects/e6/39f14a7c3ed1f1c4771c3a8a3fcf103c8d7eba": "36e1238d4f9f27cc2041ac5772314789",
".git/objects/ff/001624226e61634d9df4bec7307a806896b724": "68576eca73102993375fed5ad2e00def",
".git/objects/f6/97630787e2ec270b0efba3bb4c7c7e88d6c869": "3a0e6851e986b9d2536ba28beceb9c5f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0e4139268eb7c7ca4a27708e9cdd978eed7342": "236fd420164dd0c8841fcd81f50f81fb",
".git/objects/2d/18f27f165a345219ae99cbe5e11de3bfa47fc3": "c121ee51ae2b36e1bc896e8c99a2402b",
".git/objects/70/805c029152c3597b8c21216bb4d5d0068200b2": "5270979ab9b6cb774adb7f03acdc816a",
".git/objects/8d/02059ec7eb7fccb6e71e95262d4036cd17df10": "a824d2757c4d7932a8c90ba4fed16c89",
".git/objects/8c/942729d87245f3ccbe92d4ca420d71564c51d1": "65f45004b4f874debae573c93f5f37f8",
".git/objects/1d/63f774c0d3db03d3e5648d315579f34ea2571b": "cc4ae408d885ec197e89be3c9e2e374c",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/7f/28dd87c113eb6c580132f82a41c145e1255ea5": "316bd52466528f72dc61398919060d58",
".git/objects/8e/92686a71942cabbaad502cfdd1ce96bbff4758": "06aa58986fc3d27114eb429feaec9d9f",
".git/objects/8e/1294a380ab6f630f938e827ce1b31480945d97": "a97b5ce41a9fa695c45ae7a3499de1ab",
".git/objects/25/2cad14a6c1179cf373ed30d79ece6510743ae1": "9ca0ff2eb9d0e9919639b01d748e50d1",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "8a17c2113ce6e89fff3c1809bded5ed0",
".git/logs/refs/heads/master": "c7602de12637297767bdf84581692414",
".git/logs/refs/remotes/origin/master": "7b84a246f204cd9ad50d46da305e83a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "9b02ab5f8d46b075fc34e2ca5c239b63",
".git/refs/remotes/origin/master": "9b02ab5f8d46b075fc34e2ca5c239b63",
".git/index": "78d99815b7cdf7bf042764fb714b635d",
".git/COMMIT_EDITMSG": "88eeeaa575f99cbf043b8300693f57a2",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "f6673e3de41c4df77bf22b7376e5113a",
"assets/NOTICES": "b668a6de425bbc51ecb8381715bbdb11",
"assets/FontManifest.json": "8ebd3876beef4be2401f9cea8dea79c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/me.jpg": "a2ee5e097e79d9a3ea94b9ff198482b2",
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
"assets/assets/fonts/GeosansLight.ttf": "3116cf7d5d85070c2c0d4b96bfee7d8d",
"assets/assets/fonts/Silent%2520Reaction.ttf": "b8897415d9eb0d22004de31dcbe74732",
"assets/assets/fonts/Hathem%2520Bosteem.ttf": "2e153ad3156fee7569bc07a0a972fa23",
"assets/assets/fonts/Raleway-Regular.ttf": "6e4a9679e65cc320746c3e5d48e51f28",
"assets/assets/fonts/Lieselotte%2520-%2520Personal%2520Use.ttf": "21caec457cead9c95f3f8353355e6124",
"assets/assets/fonts/Dancing.ttf": "d3bebba97d549436fd6137d05d55ae33",
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
