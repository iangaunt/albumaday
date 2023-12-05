import "../css/style.css";

import React from "react";
import { createRoot } from "react-dom/client";

function Header() {
    return (
        <div className="container">
            <div id="album"></div>
            <div id="description">
                <h1 id="title"></h1>
            </div>
        </div>
    )
}

createRoot(document.getElementById("main")).render(Header());

function hello() {
    return "Hello!";
}
console.log(hello());