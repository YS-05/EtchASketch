const container = document.querySelector(".container");

let size = 16;

function createGrid(size) {
    container.innerHTML = "";
    let squareSize = 400/size + "px";
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize;
        square.style.height = squareSize;
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "grey";
        })
        container.appendChild(square);
    };
}

createGrid(size);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let inpsize = prompt("Please enter a number below 100 for the squares per side of the grid.");
    inpsize = Number(inpsize);
    if (inpsize > 0 && inpsize < 100) {
        size = inpsize;
        createGrid(size);
    }
})