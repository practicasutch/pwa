if('serviceWorker' in navigator){
    console.log('Andando Service Worker');

    //cargar el service worker
    navigator.serviceWorker.register('sw.js')  
    .then(res=> console.log('serviceWorker cargando correctamente', res))
    .catch(err=> console.log('serviceWorker no se ha podido registrar', err));
}
else{
    console.log('Aun no lo puedes usar')
}