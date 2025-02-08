import "./styles.css";
import HomePage from "./home.js";
import MenuPage from "./menu.js";

const container = document.querySelector("#content");

document.addEventListener("DOMContentLoaded", () => {
    HomePage();
});

const homeBtn = document.querySelector("#home");

homeBtn.addEventListener("click", () => {
    container.textContent = '';

    HomePage();
});

const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    container.textContent = '';

    MenuPage();
});