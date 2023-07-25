import albums from "./albums.json" assert { type: 'json' };
let keys = Object.keys(albums);

let canFlip = true;

for (let i = 0; i < keys.length; i++) {
    let img = new Image();
    img.src = albums[keys[i]]["Image"];
}

export function newAlbum() {
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