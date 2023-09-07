//  Load js after the DOM to prevent errors.
document.addEventListener("DOMContentLoaded", function(){
    createBoard(4);

//    Button listener for manual size input.
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

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor ="black";
        }
        
        )
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
    User input on hover turns div section to fill with color.

    FOOTER
    -->Ways to change color of the divs (as per Odin.)
        -adding a new class to the div.
        -changing the div's background color using Javascript.
    Monochrome button changes input to black.
    Rainbow mode changes input to random colors.
    Clear canvas resets all divs to blank.
    
    */