const wrapper = document.querySelector("#tiles");

const helper = document.querySelector("#helper");

const githubLogo = document.querySelector("#main a");

let columns = 0;
let rows = 0;

const colors = [
  "rgb(255, 128, 128)",
  "rgb(255, 207, 150)",
  "rgb(246, 253, 195)",
  "rgb(205, 250, 213)",
];

document.addEventListener("click", function () {
  helper.style.opacity = "0";
  githubLogo.style.pointerEvents = "all";
});

let count = -1;
function handleOnClick(index) {
  count = count + 1;

  anime({
    targets: ".tile",
    backgroundColor: colors[count % (colors.length - 1)],
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index,
    }),
  });
}

function createTile(index) {
  const tile = document.createElement("div");

  tile.classList.add("tile");

  tile.onclick = (e) => handleOnClick(index);

  return tile;
}

function createTiles(quantity) {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
}

function createGrid() {
  wrapper.innerHTML = "";

  columns = Math.floor(document.body.clientWidth / 50);
  rows = Math.floor(document.body.clientHeight / 50);

  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);
}

createGrid();
window.onresize = () => {
  createGrid();
};
