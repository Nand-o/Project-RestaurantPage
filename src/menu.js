import logoRamen from "/images/ramen-logo.png";
import tonkotsu from "/images/tonkotsu-ramen.jpeg";

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
            const title = document.createElement("p");
            title.classList.add("main-text");
            title.textContent = "Tonkotsu";

            const textArea = document.createElement("div");
            textArea.classList.add("text-area");

            const text1 = document.createElement("p");
            text1.textContent = "Weekday: 8am - 8pm";


            textArea.appendChild(title);
            textArea.appendChild(text1);

            div.appendChild(imgRamen);
            div.appendChild(textArea);
        } else {
            const title = document.createElement("p");
            title.classList.add("main-text");
            title.textContent = "Location";

            const textArea = document.createElement("div");
            textArea.classList.add("text-area");

            const text1 = document.createElement("p");
            text1.textContent = "123 Forest Drive, Forestville, Maine";

            textArea.appendChild(text1);

            div.appendChild(title);
            div.appendChild(textArea);
        }

        contentDiv.appendChild(div);
    }
    
    container.appendChild(logoDiv);
    container.appendChild(contentDiv);
}