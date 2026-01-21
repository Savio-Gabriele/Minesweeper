// Disabilita il menu tasto destro
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

let height, width, mines;
let grid = [];
let minesGrid = [];
let revealed = [];
let flagged = [];
let gameOver = false;
let firstClick = true;

function setDifficulty() {
  let diff = document.getElementById("difficulty").value;
  let custom = document.getElementById("custom-settings");

  if (diff === "custom") {
    custom.style.display = "block";
    return;
  }

  custom.style.display = "none";

  if (diff === "easy") {
    height = 9;
    width = 9;
    mines = 10;
  }

  if (diff === "medium") {
    height = 16;
    width = 16;
    mines = 40;
  }

  if (diff === "hard") {
    height = 16;
    width = 30;
    mines = 99;
  }

  document.getElementById("grid-size-height").value = height;
  document.getElementById("grid-size-widht").value = width;
  document.getElementById("mines").value = mines;
}

function Start() {
  height = parseInt(document.getElementById("grid-size-height").value);
  width = parseInt(document.getElementById("grid-size-widht").value);
  mines = parseInt(document.getElementById("mines").value);

  if (mines >= height * width) {
    alert("Troppe mine per questa griglia!");
    return;
  }

  if (height >= 17 || width >= 17) {
    document.getElementById("main-title").style.display = "none";
  }

  document.getElementById("title-grid").innerText =
    "Griglia " + height + " x " + width;

  let table = document.getElementById("table");
  table.innerHTML = "";

  grid = [];
  minesGrid = [];
  revealed = [];
  flagged = [];
  gameOver = false;
  firstClick = true;

  let cellSize = width > 16 ? 20 : 30;

  for (let i = 0; i < height; i++) {
    grid[i] = [];
    minesGrid[i] = [];
    revealed[i] = [];
    flagged[i] = [];

    let row = document.createElement("tr");

    for (let j = 0; j < width; j++) {
      grid[i][j] = 0;
      minesGrid[i][j] = false;
      revealed[i][j] = false;
      flagged[i][j] = false;

      let cell = document.createElement("td");
      cell.className = "cell";
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.style.width = cellSize + "px";
      cell.style.height = cellSize + "px";

      cell.addEventListener("click", revealCell);
      cell.addEventListener("contextmenu", flagCell);

      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  document.getElementById("setting").style.display = "none";
  updateMinesDisplay();
}

function placeMines(r0, c0) {
  let placed = 0;

  while (placed < mines) {
    let r = Math.floor(Math.random() * height);
    let c = Math.floor(Math.random() * width);

    if (!minesGrid[r][c] && !(r === r0 && c === c0)) {
      minesGrid[r][c] = true;
      placed++;
    }
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (!minesGrid[i][j]) {
        grid[i][j] = countAdjacentMines(i, j);
      }
    }
  }
}

function countAdjacentMines(r, c) {
  let count = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let nr = r + i;
      let nc = c + j;

      if (
        nr >= 0 &&
        nr < height &&
        nc >= 0 &&
        nc < width &&
        minesGrid[nr][nc]
      ) {
        count++;
      }
    }
  }

  return count;
}

function revealCell(e) {
  if (gameOver) {
    return;
  }

  let r = +e.target.dataset.row;
  let c = +e.target.dataset.col;

  if (flagged[r][c]) {return};

  if (firstClick) {
    placeMines(r, c);
    firstClick = false;
  }

  if (minesGrid[r][c]) {
    gameOver = true;
    revealAllMines();
    displayGameOver();
    return;
  }

  reveal(r, c);

  if (checkWin()) {
    gameOver = true;
    displayWin();
  }
}

function reveal(r, c) {
  if (
    r < 0 ||
    r >= height ||
    c < 0 ||
    c >= width ||
    revealed[r][c] ||
    flagged[r][c]
  )
    return;

  revealed[r][c] = true;

  let cell = document.querySelector(`td[data-row="${r}"][data-col="${c}"]`);
  cell.classList.add("revealed");

  if (grid[r][c] > 0) {
    cell.innerText = grid[r][c];
    cell.style.backgroundImage = "none";
  } else {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        reveal(r + i, c + j);
      }
    }
  }
}

function flagCell(e) {
  if (gameOver) return;

  let r = +e.target.dataset.row;
  let c = +e.target.dataset.col;

  if (revealed[r][c]) return;

  flagged[r][c] = !flagged[r][c];
  e.target.classList.toggle("flagged");

  updateMinesDisplay();

  if (checkWin()) {
    gameOver = true;
    displayWin();
  }
}

function updateMinesDisplay() {
  let flags = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (flagged[i][j]) flags++;
    }
  }

  document.getElementById("num-mines").innerText =
    "Mine rimanenti: " + (mines - flags);
}

function revealAllMines() {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (minesGrid[i][j]) {
        let cell = document.querySelector(
          `td[data-row="${i}"][data-col="${j}"]`
        );
        cell.style.backgroundImage = "url(./esset/bomb.png)";
        cell.classList.add("revealed");
      }
    }
  }
}

function checkWin() {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (!minesGrid[i][j] && !revealed[i][j]) {
        return false;
      }
    }
  }
  return true;
}

function displayGameOver() {
  let gameOver = document.createElement("div");
  gameOver.className = "game-over";
  gameOver.innerText = "Game Over!";
  document.body.appendChild(gameOver);
  rigiocaRestart();
}

function displayWin() {
  let win = document.createElement("div");
  win.className = "win";
  win.innerText = "Hai vinto!";
  document.body.appendChild(win);
  rigiocaRestart();
}

function rigiocaRestart() {
  let button = document.createElement("button");
  button.innerText = "Rigioca";
  button.className = "restart-button";
  button.addEventListener("click", () => {
    location.reload();
  });
  document.body.appendChild(button);
}
