document.addEventListener("DOMContentLoaded", function(){
    createBoard(36);
    console.log("test")

})

function createBoard(size){
    let board = document.querySelector(".board");

    board.computedStyleMap.gridTemplateColumn = "repeat(${size}, 1fr)";
    board.computedStyleMap.gridTemplateRow = "repeat(${size}, 1fr)";

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "orange";
        board.insertAdjacentElement("beforeend", div);

    }

}



/* 
    HEADER
    Button listener for manual size input.
    -Pop-up window for input.
    --Window accepts 1-100.
    --Does not accept words, negative numbers, or numbers larger than 100.

    Run a JS function when button is clicked in HTML (research).
    (Check out prompt.)
    (Should be able to enter 32, 64, etc without grid size changing.)


    BODY
    Style grid to be broken down into squares.
    -Equal height and width. 
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