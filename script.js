let color = "black";

//map to button to allow confirmation of input
let setSize = document.getElementById("set-size");
setSize.addEventListener("click", makeGrid);

//allow use of enter key
let value = document.getElementById("value");
value.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        makeGrid();
    }
})

//clear the board
let reset = document.getElementById("reset");
reset.addEventListener("click", makeGrid);

//set color to black
let black = document.getElementById("black");
black.addEventListener("click", () => {
    color = "black"
})
//set color to white
let white = document.getElementById("white");
white.addEventListener("click", () => {
    color = "white";
})
//set color to red
let red =document.getElementById("red");
red.addEventListener("click", () => {
    color = "red";
})
//info to manually enter color
let colorText = document.getElementById("colorText");
let colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", () => {
    color = colorText.value;
})

colorText.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        color = colorText.value;
    }
})


//make grid using the input values
function makeGrid(){
    var value = document.getElementById("value").value;

    if(value < 1 || value > 100) {
        alert("invalid entry");
        return;
    }

    let board = document.querySelector(".board");
    board.innerHTML ="";

    board.style.gridTemplateColumns = `repeat(${value},1fr)`;
    board.style.gridTemplateRows = `repeat(${value},1fr)`;

    for (let i = 0; i < value * value; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSqaure);
        square.className ="sqaure";
        board.insertAdjacentElement("beforeend", square);
    }
}

function colorSqaure() {
    this.style.backgroundColor = color;
    
}

makeGrid();