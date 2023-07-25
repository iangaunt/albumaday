import { newAlbum, colorMode } from './data.js';
window.newAlbum = newAlbum;
window.colorMode = colorMode;

document.getElementById("album-cover").addEventListener("onmouseup", newAlbum);
document.getElementById("logo").addEventListener("onmouseup", colorMode);
