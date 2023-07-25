import { newAlbum, colorMode } from './data.js';
window.newAlbum = newAlbum;
window.colorMode = colorMode;

document.getElementById("album-cover").addEventListener("click", newAlbum);
document.getElementById("logo").addEventListener("click", colorMode);
