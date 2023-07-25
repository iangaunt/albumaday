import { newAlbum, colorMode } from './data.js';
window.newAlbum = newAlbum;
window.colorMode = colorMode;

document.getElementById("album-cover").addEventListener("onclick", newAlbum);
document.getElementById("logo").addEventListener("onclick", colorMode);
