const variant = 5; 
const table = document.getElementById("table6x6");
const chosenColorInput = document.getElementById("chosenColor");
const clearBtn = document.getElementById("clearTable");

let num = 1;

for (let i = 0; i < 6; i++) {
  const row = table.insertRow();

  for (let j = 0; j < 6; j++) {
    const cell = row.insertCell();
    cell.textContent = num;
    cell.dataset.number = num;
    num++;

    cell.addEventListener("mouseover", function() {
      if (parseInt(cell.dataset.number) === variant) {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        cell.style.backgroundColor = randomColor;
      }
    });

    // Click
    cell.addEventListener("click", function() {
      if (parseInt(cell.dataset.number) === variant) {
        cell.style.backgroundColor = chosenColorInput.value;
      }
    });

    // DbClick:
    cell.addEventListener("dblclick", function() {
      if (parseInt(cell.dataset.number) === variant) {
        const allCells = table.getElementsByTagName("td");
        for (let c of allCells) {
          if (c !== cell) {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            c.style.backgroundColor = randomColor;
          }
        }
      }
    });

  }
}

clearBtn.addEventListener("click", function() {
  const allCells = table.getElementsByTagName("td");
  for (let c of allCells) {
    c.style.backgroundColor = ""; 
  }
});