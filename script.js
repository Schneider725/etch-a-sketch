let setSize = document.getElementById("set-size");
setSize.addEventListener("click", makeGrid);

function makeGrid(){
    var value = document.getElementById("value").value;

    let board = document.querySelector(".board");
    board.innerHTML ="";

    board.style.gridTemplateColumns = `repeat(${value},1fr)`;
    board.style.gridTemplateRows = `repeat(${value},1fr)`;

    for (let i = 0; i < value * value; i++) {
        let square = document.createElement("div");
        board.insertAdjacentElement("beforeend", square);
    }
}

makeGrid();