import logoRamen from "/images/ramen-logo.png";

export default function makeHomePage() {
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
    contentDiv.style.cssText = "grid-template-rows: repeat(3, 400px);";

    for (let i = 1; i <= 3; i++) {
        const div = document.createElement("div");

        div.classList.add(`div-home${i}`);

        if (i === 1) {
            const text = document.createElement("p");
            
            text.textContent = "Contact Us!";
            div.appendChild(text);
        } else if (i === 2) {
            const title = document.createElement("p");
            title.classList.add("main-text");
            title.textContent = "Manager";

            const textArea = document.createElement("div");
            textArea.classList.add("text-area");

            const text1 = document.createElement("p");
            text1.textContent = "Sakata Gintoki";

            const text2 = document.createElement("p");
            text2.textContent = "gintokigans@gmail.com";

            const text3 = document.createElement("p");
            text3.textContent = "0888-0000-1111";

            textArea.appendChild(text1);
            textArea.appendChild(text2);
            textArea.appendChild(text3);

            div.appendChild(title);
            div.appendChild(textArea);
        } else {
            const title = document.createElement("p");
            title.classList.add("main-text");
            title.textContent = "Contact Shop";

            const textArea = document.createElement("div");
            textArea.classList.add("text-area");

            const text1 = document.createElement("p");
            text1.textContent = "08XX-XXXX-XXXX";

            textArea.appendChild(text1);

            div.appendChild(title);
            div.appendChild(textArea);
        }

        contentDiv.appendChild(div);
    }
    
    container.appendChild(logoDiv);
    container.appendChild(contentDiv);
}