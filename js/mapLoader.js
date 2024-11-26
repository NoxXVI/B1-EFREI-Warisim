import { setNewCity, setNewFactory } from "../components/footerMenu.js";

map = [
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 5, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, 5, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 4, 3, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3,
    4, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 4, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3,
    4, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 5, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 5, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
];

const mapDOM = document.querySelector("#map");
// Table des types de tuiles
const tileTypes = {
  0: "grass",
  1: "river",
  2: "bridge",
  3: "road",
  4: "city",
  5: "factory",
};

function createTile(type, id) {
  const tile = document.createElement("div");
  tile.className = `tile ${type}`;
  tile.id = id;
  mapDOM.append(tile);
}

// Fonction pour ajouter une tuile avec le type sélectionné
export function initMap() {
  for (let line in map) {
    for (let row in map[line]) {
      createTile(tileTypes[map[line][row]], `${row}-${line}`);
    }
  }

  const factoryTiles = document.querySelectorAll(".factory");
  const cityTiles = document.querySelectorAll(".city");

  for (let cityTile of cityTiles) {
    cityTile.addEventListener("click", () => {
      setNewCity();
    });
  }

  for (let factoryTile of factoryTiles) {
    factoryTile.addEventListener("click", () => {
      setNewFactory();
    });
  }
}
