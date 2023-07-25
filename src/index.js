import { newAlbum, colorMode } from './data.js';
window.newAlbum = newAlbum;
window.colorMode = colorMode;

document.getElementById("cover-container").addEventListener("click", newAlbum);
document.getElementById("cover-container").addEventListener("touchend", newAlbum);

document.getElementById("logo").addEventListener("click", colorMode);
document.getElementById("logo").addEventListener("touchend", colorMode);
