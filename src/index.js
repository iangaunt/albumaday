import { newAlbum, colorMode, markAsListened } from './data.js';
window.newAlbum = newAlbum;
window.colorMode = colorMode;

document.getElementById("album-cover").addEventListener("click", newAlbum);
document.getElementById("logo").addEventListener("click", colorMode);
// document.getElementById("album-name").addEventListener("click", markAsListened);