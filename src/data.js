// Fetch the albums data from the corresponding JSON file.
import albums from "./albums.json" assert { type: 'json' };

// Settings for the website.
let canFlip = true;
let darkMode = false;
let currentAlbum = null;

// Function for clamping numbers to the size of the albums data.
function clamp(n) {
    n = n < 1 ? 1 : n;
    n = n > keys.length ? keys.length : n;
    return Math.round(n);
}

// Sort all of the albums by ranking and place them in a list of keys.
let keys = Object.keys(albums);
for (let i = 0; i < keys.length; i++) {
    let temp = keys[albums[keys[i]].Rank - 1];
    keys[albums[keys[i]].Rank - 1] = keys[i];
    keys[i] = temp;
}

// Preload all of the images.
for (let i = 0; i < keys.length; i++) {
    let img = new Image();
    img.src = albums[keys[i]]["Image"];
}

// Fetch the albums that the user has marked as "listened to".
let listenedTo = localStorage.getItem("listenedTo");
if (listenedTo == null){
    listenedTo = new Set();
}

function newAlbum() {
    if (canFlip) {
        canFlip = false;

        // Set the boundaries of the albums list.
        let lowerBound = clamp(document.getElementById("range-from").value);
        let upperBound = clamp(document.getElementById("range-to").value);
        upperBound = upperBound == 1 ? 400 : upperBound;

        if (upperBound < lowerBound) {
            let temp = upperBound;
            upperBound = lowerBound;
            lowerBound = temp;
        }

        // Select a random album from the JSON file.
        let validPicks = keys.slice(lowerBound - 1, upperBound);
        let random = validPicks[Math.floor(Math.random() * validPicks.length)];

        let album = albums[random];
        currentAlbum = random;

        // Add the spinner animation to the card.
        document.getElementById("cover-container").classList.add("spin-animation");
        document.getElementById("text-container").classList.add("fade-animation");

        setTimeout(function() {
            // Set corresponding web tags to their respective values with the new album.
            document.getElementById("album-cover").src = album["Image"];
            document.getElementById("album-name").innerHTML = random;
            document.getElementById("album-release").innerHTML = album["Artist"] + " • " + album["Year"];
            document.getElementById("album-genre").innerHTML = album["Genres"].join(" • ");
            document.getElementById("album-rank").innerHTML = album["Rank"];
        }, 400);
        
        // Remove the spinner animation from the card. 
        setTimeout(function() {
            document.getElementById("cover-container").classList.remove("spin-animation");
            document.getElementById("text-container").classList.remove("fade-animation");
            canFlip = true;
        }, 800)
    }
}

function colorMode() {
    darkMode = !darkMode;
    let root = document.querySelector(':root').style;

    if (darkMode) {
        root.setProperty("--white", "rgb(42, 41, 48)")
        root.setProperty("--black", "rgb(255, 255, 255");
        root.setProperty("--green", "rgb(127, 226, 127)");
        document.getElementsByClassName("logo")[0].style.filter = "invert(100%)";
    } else {
        root.setProperty("--white", "rgb(255, 255, 255");
        root.setProperty("--black", "rgb(0, 0, 0");
        root.setProperty("--green", "rgb(64, 112, 64)");
        document.getElementsByClassName("logo")[0].style.filter = "invert(0%)";
    }
}

function markAsListened() {
    console.log("poop")

    if (listenedTo.has(currentAlbum)) {
        console.log("no")
        listenedTo.delete(currentAlbum);
        document.getElementById("album-name").style.color = getComputedStyle(document.body).getPropertyValue("--black");
        document.getElementById("album-name").innerHTML = currentAlbum;
    } else {
        console.log("yes");
        listenedTo.add(currentAlbum);
        document.getElementById("album-name").style.color = getComputedStyle(document.body).getPropertyValue("--green");
        document.getElementById("album-name").innerHTML += " ☑";
    }

    console.log(listenedTo);
}

export { newAlbum, colorMode, markAsListened }