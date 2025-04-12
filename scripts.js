const container = document.querySelector("#container");
let boxNumber = 16;

function makeGrid() {
    for (i = 0; i < boxNumber; i++) {
        let newColumn = document.createElement("div")
        newColumn.classList.add("column");
        for (j = 0; j < boxNumber; j++) {
            let newRow = document.createElement("div")
            newRow.classList.add("row");
            newRow.style.cssText = `width: ${800 / boxNumber}px; height: ${800 / boxNumber}px;`;
            newRow.addEventListener("mouseover", () => {
                newRow.style.backgroundColor = `rgb(${Math.floor((Math.random() * 257))}, ${Math.floor((Math.random() * 257))}, ${Math.floor((Math.random() * 257))}`;
                });
            newColumn.appendChild(newRow);
        }
        container.appendChild(newColumn);
    }
}

makeGrid();

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    boxNumber = parseInt(prompt("Select the number of boxes in the grid (1-100)"));
    while (boxNumber < 1 || boxNumber > 100 || isNaN(boxNumber)) {
        boxNumber = prompt("Invalid input, Select the number of boxes in the grid (1-100)");
    }

    container.textContent = "";

    makeGrid();

  });
