const container = document.querySelector(".container");

let size = 16;
mode = "normal";

function createGrid(size, mode) {
    container.innerHTML = "";
    let squareSize = 800/size + "px";
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize;
        square.style.height = squareSize;
        square.style.opacity = 0;
        square.addEventListener("mouseenter", () => {
            if (mode == "normal") {
                square.style.opacity = 1;

            }
            else if (mode == "progressive") {
                let currentOpacity = Number(square.style.opacity);
                if (currentOpacity < 1) {
                    square.style.opacity = currentOpacity + 0.1;
                }
            }
            else {
                square.style.opacity = 1;
                let red = Math.random() * 255;
                let green = Math.random() * 255;
                let blue = Math.random() * 255;
                square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            }
        })
        container.appendChild(square);
    };
}

createGrid(size, "normal");

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
    createGrid(size, "progressive");
})

const rdbtn = document.querySelector(".rdbtn");
rdbtn.addEventListener("click", () => {
    createGrid(size, "random");
})

const norbtn = document.querySelector(".norbtn");
norbtn.addEventListener("click", () => {
    createGrid(size, "normal");
})