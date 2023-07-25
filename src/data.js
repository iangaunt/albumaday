import albums from "./albums.json" assert { type: 'json' };
let root = document.querySelector(':root');
let keys = Object.keys(albums);

let canFlip = true;
let darkModeOn = false;

for (let i = 0; i < keys.length; i++) {
    let img = new Image();
    img.src = albums[keys[i]]["Image"];
}

function newAlbum() {
    if (canFlip) {
        canFlip = false;

        // Select a random album from the JSON file.
        let random = keys[Math.floor(Math.random() * keys.length)];
        let album = albums[random];

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
    darkModeOn = !darkModeOn;
    console.log(darkModeOn);

    if (darkModeOn) {
        root.style.setProperty("--white", "rgb(42, 41, 48)")
        root.style.setProperty("--black", "rgb(255, 255, 255");

        document.getElementsByClassName("logo")[0].style.filter = "invert(100%)";
    } else {
        root.style.setProperty("--white", "rgb(255, 255, 255");
        root.style.setProperty("--black", "rgb(0, 0, 0");

        document.getElementsByClassName("logo")[0].style.filter = "invert(0%)";
    }

    console.log(getComputedStyle(root).getPropertyValue("--white"));
}

export { newAlbum, colorMode }