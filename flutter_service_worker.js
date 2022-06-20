'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1f50db41aee9baa611222618236d5268",
"index.html": "350dc03942ee244b47c65201981c87da",
"/": "350dc03942ee244b47c65201981c87da",
"main.dart.js": "303421206baf12ffe5a4cb7325fded3f",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c827a49bb0f51190cf2f4e8c6dcbd810",
".git/config": "9c62d7cbb1211d7b638aaee71def3e03",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/801055a5861e4b9f45c73789811a224a2ec92e": "630357987264e891fa2b16e9715c9a82",
".git/objects/66/558ca418abdce8cd104b7011746cdc78d1f2ae": "2dfcb04e0e95b48a992c4abd370b04fe",
".git/objects/57/44c7163e8b34a519f1ddd8ca4e58f3f96a5d0c": "f2d4de0057137d7bf3b6ef887e0adf76",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/51/ed7ea9dd1c02dc69c4b92577e61c315727507a": "1c75dabf2aa8865722ef6df0e895d7f4",
".git/objects/05/85025d4553b481aeec5a0defa5961086a8610d": "08efa56ff2664db0a3f757daecc32e24",
".git/objects/a4/477b9f4bb2f5e4f7a659b586993b570c389f01": "a1863d1501f48be83463aebd43652779",
".git/objects/d9/beed1b0b5af6d6591586d47ebb1e85ee59ce83": "2911009a7b9e1cb18cab02d378e9e82a",
".git/objects/bb/ad8d0ac07d858f2cddb0cdfd308e20842bd0fa": "13d3fc031e31ae764e0e2c90bc242099",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c1/db9a6ed5a3ccfb98e447e9b0996c276e83c31e": "c7e8b0539444852f341063d7d3480bda",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/1f/342939b239752a9de4435db6613b3d3f16d001": "1b164babf0ef4d5951f04c2f800d347f",
".git/objects/80/63903dff9eb40de02b0f871093d4eb2c0a6d32": "3c601e4f1a29e91b9c016ec7a278f20d",
".git/objects/1a/6f8e2655964d335b8fcb7bd92e1b939fdadf88": "89ae92cfbec8f57989594895beb99e65",
".git/objects/7b/10033350bc8a0fbc7972e1f25916d641f3b7b1": "a7ba98e35a9880359096709584000e65",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/e7835ea96eac61cef4c3bc01e81b07e1d67868": "976a2bad4f32deab408b1c463f77079e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/580ad9462cefe6e57cb6c805d7e2b4b881755e": "4940e873c67623ac37fe25c0307c2bb2",
".git/objects/09/d557b44c0ccdb81394d40920f842ffefa89e7d": "64676e800821a1c35d4e402d8d473c6a",
".git/objects/01/148adda92bee37514d34c6da728ca485784976": "4e265d11b095602194f4b08c334cfcc8",
".git/objects/55/eb354bb2fb0ae4ed2c6931eea7a47abeda2acf": "46322bd819695a92586e4b50b66c9e8b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/87ccc4b3b4d2fbe596d810a04a00a2cd980fea": "3b7e23e24e18887487d7334637f24df0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/02541bf41a7434806ea2f1d1a3b69e0359edef": "d4ce35c54f9704dbce7167a0c74ab0ae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/140df3c1e27d0abbb54465292d9bef82e55754": "5f501a568951785d878daaa464b053a0",
".git/objects/70/4aeb4f0da8ade771882af664c1164d62fb9d77": "3494a5c355be850589f8ab7c8f3a7cfc",
".git/objects/4a/3d74a1dec2b34d1a33223c1ae67bb1075176ef": "7afe71b6e4b8d9e6ffe45e77204fbd76",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/dbf6f502e16edf723733674c805c8fca750589": "5dc62a4a3990b636d5dd16717d8e3a87",
".git/objects/2b/5c8d245d972922d3f14502c2d5333f9acbee19": "9a02f146d875a371d11b12935dfc2af4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "04142d4a87233f866ac1bd3492ab271d",
".git/logs/refs/heads/main": "868792ac3ca45c24472e7c7df91d42cc",
".git/logs/refs/remotes/origin/main": "58bb7a0b2121cfb3efca7921e541df8c",
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
".git/refs/heads/main": "46ad4d104692bb9e4ddda0b8ea0b44c1",
".git/refs/remotes/origin/main": "46ad4d104692bb9e4ddda0b8ea0b44c1",
".git/index": "168a36a6a45b2bcf592146632532eec4",
".git/COMMIT_EDITMSG": "17f70ba000e0f688c97d58f85b71e1f5",
"assets/AssetManifest.json": "f7fc5747de4c3a1e22e71814e59fbeeb",
"assets/NOTICES": "89d761456e2ae450a14ae8bb00e2b40a",
"assets/FontManifest.json": "9bcfc5a53bf0064600f06b100077248b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "83b5c25a61674ba1a60c3be541f79cbc",
"assets/fonts/dancing_script.ttf": "796bdaef35c72bb17246391811a5d7c1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/ice_tea.jpg": "e0715c483e40dd6a15f4a096978bd7c9",
"assets/assets/choc_drink.jpg": "5ad2cb2fcd0be93aa4782bd298b51605",
"assets/assets/fizz_drinks.jpg": "ac2b522a455a096ded189a6588aa237d",
"assets/assets/lassi.jpg": "fd57a78b45ef7adc74e560b3e212a58a",
"assets/assets/salads.jpg": "1153eb21bc9e739d68b8874ce70f7dde",
"assets/assets/vej_fruit_juice.jpg": "18172b8f443f451fbcd1b526bf1b91a7",
"assets/assets/vegetable_juice.jpg": "cfe96b0072386d73ef3336425ce38bd0",
"assets/assets/milk_shakes.jpg": "bdeeb214bfb5aaef3d04a4727150c869",
"assets/assets/logo.png": "60ffab527e1d0ecc15999aaf8861c3eb",
"assets/assets/ice_cream.jpg": "c584d7eff5fbe7661057996066d10531",
"assets/assets/fruit_juice.jpg": "fb096b11a6b2834bda289baa46789774",
"assets/assets/main_coffee.jpg": "2068f2589503db696eb16b701863cb23",
"assets/assets/image.png": "dff993f07b92dc3236e5eeaf96dd4b46",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
