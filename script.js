const THREE = require('three');
"use strict";
const $ = document.querySelectorAll.bind(document);
$(".focusable, .button").forEach(el => {
    el.addEventListener("mousedown", e => e.preventDefault());
    el.setAttribute("tabindex", "0");
});

$(".server").forEach(el => {
    el.addEventListener("click", () => {
        const activeServer = $(".server.active")[0];
        activeServer.classList.remove("active");
        activeServer.removeAttribute("aria-selected");
        el.classList.add("active");
        el.setAttribute("aria-selected", true);
    });
});

