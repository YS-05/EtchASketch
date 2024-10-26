const container = document.querySelector(".container");

let size = 16;
let mode = "normal";
let isDrawing = false;

function createGrid(size) {
    container.innerHTML = "";
    let squareSize = 800/size + "px";
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize;
        square.style.height = squareSize;
        square.style.opacity = 0;
        square.addEventListener("mouseenter", () => {
            if (isDrawing) {
                applyColor(square);
            }
        })
        square.addEventListener("click", () => {
            applyColor(square);
        })
        container.appendChild(square);
    };
}

function applyColor(square) {
    if (mode === "normal") {
        square.style.opacity = 1;
    }
    else if (mode === "progressive") {
        let currentOpacity = Number(square.style.opacity);
        if (currentOpacity < 1) {
            square.style.opacity = currentOpacity + 0.1;
        }
    }
    else if (mode === "random") {
        square.style.opacity = 1;
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}

createGrid(size, "normal");



document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

const btn = document.querySelector(".dimbtn");
btn.addEventListener("click", () => {
    let inpsize = prompt("Please enter a number below 100 for the squares per side of the grid.");
    inpsize = Number(inpsize);
    if (inpsize > 0 && inpsize < 100) {
        size = inpsize;
        createGrid(size);
    }
})

const pdbtn = document.querySelector(".pdbtn");
pdbtn.addEventListener("click", () => {
    mode = "progressive";
    createGrid(size);
})

const rdbtn = document.querySelector(".rdbtn");
rdbtn.addEventListener("click", () => {
    mode = "random";
    createGrid(size);
})

const norbtn = document.querySelector(".norbtn");
norbtn.addEventListener("click", () => {
    mode = "normal";
    createGrid(size);
})