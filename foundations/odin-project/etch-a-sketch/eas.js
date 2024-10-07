const easContainer = document.getElementById("eas-container");
const gridSizeDisplay = document.getElementById("grid-size-range-display");
const gridSizeSlider = document.getElementById("grid-size-range");
const colorRandomiser = document.getElementById("color-randomiser");
const gridLinesToggle = document.getElementById("grid-lines-toggle");
const DEFAULT_VALUE = 16;
const DEFAULT_PEN_COLOR = "var(--gray-d3-color)";
var penColor = DEFAULT_PEN_COLOR;
var currentGridSize = 0;
var gridSize = DEFAULT_VALUE;
var colorRandomBool = colorRandomiser.value;
var currentTarget;

gridSizeSlider.value = DEFAULT_VALUE;

colorRandomiser.checked = false;

gridSizeSlider.oninput = () => {
  updateGridSizeSelection(gridSizeSlider.value);
};

colorRandomiser.oninput = () => {
  colorRandomBool = colorRandomiser.checked;
  if (colorRandomBool == false) {
    penColor = DEFAULT_PEN_COLOR;
  }
};

function updateGridSizeSelection(size) {
  gridSize = size;
  gridSizeDisplay.innerHTML = `${gridSizeSlider.value} x ${gridSizeSlider.value}`;
}

function colorCell(e) {
  if (e.target == currentTarget) {
    return;
  }
  if (colorRandomBool == true) {
    penColor = getRandomColor();
  }

  e.preventDefault();
  e.target.style.backgroundColor = penColor;

  currentTarget = e.target;
}

function makeGrid(size, clear = false) {
  if (size == currentGridSize && clear == false) {
    return;
  }

  easContainer.innerHTML = "";

  for (i = 0; i < size ** 2; i++) {
    let cell = document.createElement("div");
    easContainer.appendChild(cell).className = "grid-item";
    cell.style["flex"] = `1 1 ${100 / size}%`;

    if ((i + 1) % size == 0) {
      cell.style.borderRight = "1px solid var(--gray-d2-color)";
    }

    if (i + 1 > size * (size - 1)) {
      cell.style.borderBottom = "1px solid var(--gray-d2-color)";
    }

    cell.addEventListener("pointerdown", (e) => colorCell(e));

    cell.addEventListener("pointermove", (e) => {
      if (e.buttons == 1) {
        colorCell(e);
      }
    });
  }

  currentGridSize = gridSize;
}

makeGrid(gridSize);

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
