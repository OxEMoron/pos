import { text } from "./module.js";

const target = document.getElementById("buttonPrime");

target.addEventListener("click", () => {
    alert(`Prime Button ${text}`);
})
