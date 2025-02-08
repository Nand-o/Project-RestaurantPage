export default function makeHomePage() {
    const container = document.querySelector("#content");

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content-area");

    for (let i = 1; i <= 4; i++) {
        const div = document.createElement("div");

        div.classList.add(`div${i}`);

        if (i === 1) {
            div.textContent = "bla bla";
        } else if (i === 2) {
            div.textContent = "bla bla";
        } else if (i === 3) {
            div.textContent = "bla bla";
        } else {
            div.textContent = "bla bla";
        }

        contentDiv.appendChild(div);
    }

    container.appendChild(contentDiv);
}