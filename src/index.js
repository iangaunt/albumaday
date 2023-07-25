import { newAlbum, colorMode } from './data.js';
window.newAlbum = newAlbum;
window.colorMode = colorMode;

document.getElementById("main").addEventListener("click", newAlbum);
document.getElementById("main").addEventListener("touchend", newAlbum);

document.getElementById("header").addEventListener("click", colorMode);
document.getElementById("header").addEventListener("touchend", colorMode);