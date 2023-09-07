document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = prompt("What size board would you like?");
        if (isValidSize(size)) {
            createBoard(size);
        }
    });
});



//    Break grid into squares, equal width and height.
function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumn = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRow = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "orange";
        board.insertAdjacentElement("beforeend", div);

    }

}

//    Check if valid number.
function isValidSize(size) {
    if (size ==="" || isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return false;
    }
    return true;
}


/* 
    HEADER
    Button listener for manual size input.

    Run a JS function when button is clicked in HTML (research).
    (Check out prompt.)
    (Should be able to enter 32, 64, etc without grid size changing.)


    BODY
    -Input size changes size of grid.

    User input on hover turns div section to fill with color.

    FOOTER
    -->Ways to change color of the divs (as per Odin.)
        -adding a new class to the div.
        -changing the div's background color using Javascript.
    Monochrome button changes input to black.
    Rainbow mode changes input to random colors.
    Clear canvas resets all divs to blank.
    
    */