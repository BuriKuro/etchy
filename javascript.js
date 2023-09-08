let color = "black";

//  Load js after the DOM to prevent errors.
document.addEventListener("DOMContentLoaded", function(){
    createBoard(4);

//    Break grid into squares, equal width and height.
function createBoard(size){
    let board = document.querySelector(".board");
    board.classList.add("board-container");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);

    }

}

//    Button listener for manual size input.
let btn_popup = document.querySelector("#popup");
btn_popup.addEventListener("click", function(){
    let size = prompt("What size board would you like?");
    if (isValidSize(size)) {
        createBoard(size);
    }
});
});

//    Check if valid number.
function isValidSize(size) {
    if (size ==="" || isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return false;
    }
    return true;
}

//Call color function
function colorDiv() {
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else{
        this.style.backgroundColor = 'black';
    }
}


function setColor(colorChoice) {
    color = colorChoice;
}

//Reset board to white.
function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}

//Set board bg to colors.
function redBoard(){
    let boardContainer = document.querySelector(".board-container");
    let divs = boardContainer.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "red")
}

function orangeBoard(){
    let boardContainer = document.querySelector(".board-container");
    let divs = boardContainer.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "orange")
}

function yellowBoard(){
    let boardContainer = document.querySelector(".board-container");
    let divs = boardContainer.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "yellow")
}

function greenBoard(){
    let boardContainer = document.querySelector(".board-container");
    let divs = boardContainer.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "green")
}

function blueBoard(){
    let boardContainer = document.querySelector(".board-container");
    let divs = boardContainer.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "blue")
}

function purpleBoard(){
    let boardContainer = document.querySelector(".board-container");
    let divs = boardContainer.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "purple")
}