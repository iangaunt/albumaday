import "../css/style.css";

import React from "react";
import { createRoot } from "react-dom/client";

function Header() {
    return (
        <div className="container">
            <img id="album"></img>
            <div id="description">
                <b><p id="title">Title</p></b>
                <p id="artist">Artist</p>
                <p id="genres">Genres</p>
                <p id="ranking">Ranking</p>
            </div>
        </div>
    )
}

createRoot(document.getElementById("main")).render(Header());