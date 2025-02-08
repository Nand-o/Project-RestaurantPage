import logoRamen from "/images/ramen-logo.png";
import tonkotsu from "/images/tonkotsu-ramen.jpeg";
import miso from "/images/miso-ramen.jpeg";
import shio from "/images/shio-ramen.jpeg";
import shoyu from "/images/shoyu-ramen.jpeg";

export default function makeMenuPage() {
    const container = document.querySelector("#content");

    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");

    const logo = document.createElement("img");
    logo.src = logoRamen;

    const title = document.createElement("p");
    title.classList.add("logo-title");
    title.textContent = "Ramen Shop";

    logoDiv.appendChild(logo);
    logoDiv.appendChild(title);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content-area");
    contentDiv.style.cssText = "grid-template-rows: repeat(5, 400px);";

    for (let i = 1; i <= 5; i++) {
        const div = document.createElement("div");

        div.classList.add(`div-menu${i}`);

        if (i === 1) {
            const text = document.createElement("p");

            text.textContent = "Menu Page";
            div.appendChild(text);
        } else if (i === 2) {
            const imgRamen = document.createElement("img");
            imgRamen.src = tonkotsu;


            const title = document.createElement("p");
            title.classList.add("main-text");
            title.textContent = "Tonkotsu Ramen";

            const textArea = document.createElement("div");
            textArea.classList.add("text-area");

            const text1 = document.createElement("p");
            text1.textContent = "Tonkotsu ramen is a ramen dish that originated in Kurume, Fukuoka Prefecture, Japan, and is a specialty dish on the island of Kyushu. The broth for tonkotsu ramen is based on pork bones, which is what the word tonkotsu means in Japanese.";


            textArea.appendChild(title);
            textArea.appendChild(text1);

            div.appendChild(imgRamen);
            div.appendChild(textArea);
        } else if (i === 3) {
            const imgRamen = document.createElement("img");
            imgRamen.src = miso;


            const title = document.createElement("p");
            title.classList.add("main-text");
            title.textContent = "Miso Ramen";

            const textArea = document.createElement("div");
            textArea.classList.add("text-area");

            const text1 = document.createElement("p");
            text1.textContent = "Miso ramen gets its name from the generous amount of miso that gives the broth a strong, pleasantly sharp umami flavor.";

            textArea.appendChild(title);
            textArea.appendChild(text1);

            div.appendChild(imgRamen);
            div.appendChild(textArea);
        } else if (i === 4) {
            const imgRamen = document.createElement("img");
            imgRamen.src = shio;


            const title = document.createElement("p");
            title.classList.add("main-text");
            title.textContent = "Shio Ramen";

            const textArea = document.createElement("div");
            textArea.classList.add("text-area");

            const text1 = document.createElement("p");
            text1.textContent = "Shio ramen is the oldest fundamental type. The broth is made from salt, chicken, fish, vegetables, and seaweed.";

            textArea.appendChild(title);
            textArea.appendChild(text1);

            div.appendChild(imgRamen);
            div.appendChild(textArea);
        } else {
            const imgRamen = document.createElement("img");
            imgRamen.src = shoyu;


            const title = document.createElement("p");
            title.classList.add("main-text");
            title.textContent = "Shoyu Ramen";

            const textArea = document.createElement("div");
            textArea.classList.add("text-area");

            const text1 = document.createElement("p");
            text1.textContent = "Shoyu Ramen is generally lighter on the palette, as the broth is more one-dimensional and not as rich as the Tonkatsu and Miso ramen.";

            textArea.appendChild(title);
            textArea.appendChild(text1);

            div.appendChild(imgRamen);
            div.appendChild(textArea);
        }

        contentDiv.appendChild(div);
    }

    container.appendChild(logoDiv);
    container.appendChild(contentDiv);
}