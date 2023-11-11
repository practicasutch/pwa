//asignar nombre y versión de cache
const CACHE_NAME = 'v1_cache_pau_pwa';

//ficheros que se van a guardar en la aplicación para verlos offline

var urlsToCache= [
    './',
    './css/style.css',
    './css/bootstrap.css',
    './css/bootstrap.min.css',
    './css/font-awesome.min.css',
    './css/icomoon.css',
    './css/owl.carousel.min.css',
    './css/responsive.css',
    './images/chihuahua.jpg',
    './images/chihuahua16.jpg',
    './images/chihuahua32.jpg',
    './images/chihuahua64.jpg',
    './images/chihuahua96.jpg',
    './images/chihuahua128.jpg',
    './images/chihuahua192.jpg',
    './images/chihuahua256.jpg',
    './images/chihuahua384.jpg',
    './images/chihuahua512.jpg',
    './images/chihuahua1024.jpg',
    './images/loading.gif',
    './images/logo.png',
    './images/about_bg.jpg',
    './images/about.png',
    './images/banner_img.png',
    './images/class1.png',
    './images/class2.png',
    './images/class3.png',
    './images/menu_icon.png',
    './images/sakt1.png',
    './images/sakt2.png', 
    './images/sakt3.png',
    './images/shop.png',
    './images/te.png',
    './images/te2.png',
    './images/test1.png',
    './images/test2.png',
    './images/test3.png',
    './images/top_icon.png',
    './fonts/fontawesome-webfont.eot',
    './fonts/fontawesome-webfont.svg',
    './fonts/fontawesome-webfont.ttf',
    './fonts/fontawesome-webfont.woff',
    './fonts/fontawesome-webfont.woff2',
    './fonts/FontAwesome.otf',
    './fonts/IcoMoon-Free.ttf',
    './fonts/Poppins-Black.ttf',
    './fonts/Poppins-BlackItalic.ttf',
    './fonts/Poppins-Bold.ttf',
    './fonts/Poppins-BoldItalic.ttf',
    './fonts/Poppins-ExtraBold.ttf',
    './fonts/Poppins-ExtraBoldItalic.ttf',
    './fonts/Poppins-ExtraLight.ttf',
    './fonts/Poppins-ExtraLightItalic.ttf',
    './fonts/Poppins-Italic.ttf',
    './fonts/Poppins-Light.ttf',
    './fonts/Poppins-LightItalic.ttf',
    './fonts/Poppins-Medium.ttf',
    './fonts/Poppins-MediumItalic.ttf',
    './fonts/Poppins-Regular.ttf',
    './fonts/Poppins-SemiBold.ttf',
    './fonts/Poppins-SemiBoldItalic.ttf',
    './fonts/Poppins-Thin.ttf',
    './fonts/Poppins-ThinItalic.ttf',
    './js',
    './js/revolution',
    './js/revolution/assets',
    './js/revolution/assets/coloredbg.png',
    './js/revolution/assets/gridtile_3x3_white.png',
    './js/revolution/assets/gridtile_3x3.png',
    './js/revolution/assets/gridtile_white.png',
    './js/revolution/assets/gridtile.png',
    './js/revolution/assets/loader.gif',
    './js/revolution/css',
    './js/revolution/css/closedhand.html',
    './js/revolution/css/layers.css',
    './js/revolution/css/navigation.css',
    './js/revolution/css/openhand.html',
    './js/revolution/css/settings.css',
    './js/revolution/fonts',
    './js/revolution/fonts/pe-icon-7-stroke',
    './js/revolution/fonts/pe-icon-7-stroke/css',
    './js/revolution/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css',
    './js/revolution/fonts/pe-icon-7-stroke/fonts',
    './js/revolution/fonts/pe-icon-7-stroke/fonts/Pe-icon-7-strokebb1d.eot',
    './js/revolution/fonts/pe-icon-7-stroke/fonts/Pe-icon-7-strokebb1d.svg',
    './js/revolution/fonts/pe-icon-7-stroke/fonts/Pe-icon-7-strokebb1d.ttf',
    './js/revolution/fonts/pe-icon-7-stroke/fonts/Pe-icon-7-strokebb1d.woff',
    './js/revolution/fonts/pe-icon-7-stroke/fonts/Pe-icon-7-stroked41d.eot',
    './js/revolution/fonts/revicons',
    './js/revolution/fonts/revicons/revicons90c6.eot',
    './js/revolution/fonts/revicons/revicons90c6.svg',
    './js/revolution/fonts/revicons/revicons90c6.ttf',
    './js/revolution/fonts/revicons/revicons90c6.woff',
    './js/revolution/js',
    './js/revolution/js/extensions',
    './js/revolution/js/extensions/revolution.extension.actions.min.js',
    './js/revolution/js/extensions/revolution.extension.carousel.min.js',
    './js/revolution/js/extensions/revolution.extension.kenburn.min.js',
    './js/revolution/js/extensions/revolution.extension.layeranimation.min.js',
    './js/revolution/js/extensions/revolution.extension.migration.min.js',
    './js/revolution/js/extensions/revolution.extension.navigation.min.js',
    './js/revolution/js/extensions/revolution.extension.parallax.min.js',
    './js/revolution/js/extensions/revolution.extension.slideanims.min.js',
    './js/revolution/js/extensions/revolution.extension.video.min.js',
    './js/revolution/js/jquery.themepunch.revolution.min.js',
    './js/revolution/js/jquery.themepunch.tools.min.js',
    './js/bootstrap.bundle.min.js',
    './js/bootstrap.js',
    './js/bootstrap.min.js',
    './js/custom.js',
    './js/jquery-3.0.0.min.js',
    './js/jquery.min.js'
];

self.addEventListener('install', e=> {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=>{
            return cache.addAll(urlsToCache)
            .then(()=>{
                self.skipWaiting();
            })
            
            .catch(err=>{
                console.log('No se registró el cache', err);
            })
        })
    )
});

self.addEventListener('activate', e=>{
    const cacheWhitelist=[CACHE_NAME];

    e.waitUntil(
        caches.keys()
        .then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cacheName=>{
                    if(cacheWhitelist.indexOf(cacheName)===-1){
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(()=>{self.clients.claim();})
    );
});



self.addEventListener('fetch', e=>{
    e.respondWidth(
        caches.match(e.request)
        .then(res=>{
            if(res){
                return res;
            }
            return fetch(e.request);
        })
    )
});

