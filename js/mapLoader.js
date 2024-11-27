import { setNewCity, setNewFactory } from "../components/footerMenu.js";
import { menuClickIcone } from "../components/gameMenu.js";
import { defaultMap} from "../data/gameData.js";


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

function createNewTile(type, id) {
  const tile = document.createElement("div");
  tile.className = `tile ${type}`;
  tile.id = id;
  return tile
}

// Because why not. 
function createTile(type, id) {
  mapDOM.append(createNewTile(type, id));
}


export class factory {
  constructor(id){
    this.id = id
    this.tile = createNewTile("factory", id)
    this.factoryListener()
    mapDOM.append(this.tile)
  }
  factoryListener(){
    this.tile.addEventListener("click", () => {
      setNewFactory();
      menuClickIcone();

      const footerToggleButton = document.getElementById(
        "footer-toggle-button"
      );
      footerToggleButton.checked = true;
    });
  }
}

// Fonction pour ajouter une tuile avec le type sélectionné
export function initMap() {
  for (let line in defaultMap.map) {
    for (let row in defaultMap.map[line]) {
      if (tileTypes[defaultMap.map[line][row]] === "factory"){
        new factory(`${row}-${line}`)
      }else {
        createTile(tileTypes[defaultMap.map[line][row]], `${row}-${line}`);
      }
    }
  }

  const factoryTiles = document.querySelectorAll(".factory");
  const cityTiles = document.querySelectorAll(".city");

  for (let cityTile of cityTiles) {
    cityTile.addEventListener("click", () => {
      setNewCity();
      menuClickIcone();
      const footerToggleButton = document.getElementById(
        "footer-toggle-button"
      );
      footerToggleButton.checked = true;
    });
  }

  for (let factoryTile of factoryTiles) {
    
  }
}
