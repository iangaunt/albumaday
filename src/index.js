import { newAlbum, colorMode } from './data.js';
window.newAlbum = newAlbum;
window.colorMode = colorMode;

document.getElementById("album-cover").addEventListener('click', function () {
    newAlbum();
});

document.getElementById("logo").addEventListener('click', function () {
    colorMode();
});