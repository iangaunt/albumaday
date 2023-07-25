import { newAlbum, colorMode } from './data.js';
window.newAlbum = newAlbum;
window.colorMode = colorMode;

document.getElementById("header").addEventListener("click", newAlbum);
document.getElementById("header").addEventListener("touchend", newAlbum);

document.getElementById("main").addEventListener("click", colorMode);
document.getElementById("main").addEventListener("touchend", colorMode);