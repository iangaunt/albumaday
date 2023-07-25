import { newAlbum, colorMode } from './data.js';
window.newAlbum = newAlbum;
window.colorMode = colorMode;

document.getElementById("album-cover").addEventListener("click", newAlbum);
document.getElementById("album-cover").addEventListener("touchend", newAlbum);

document.getElementById("logo").addEventListener("click", colorMode);
document.getElementById("logo").addEventListener("touchend", colorMode);
