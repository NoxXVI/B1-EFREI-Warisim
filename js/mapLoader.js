import { menuClickIcone } from "./gameMenu.js";
import {} from "./turn.js"
import {
  buildingList,
  defaultMap,
  entityData,
  entityList,
  gameData,
  playerData,
} from "../data/gameData.js";
import {
  createFooterSection,
  createScrollContent,
} from "./footer.js";
import { Units } from "./units.js";

const mapDOM = document.querySelector("#map");
const tileTypes = {
  0: "grass",
  1: "river",
  2: "bridge",
  3: "road",
  4: "city",
  5: "factory",
  6:"qg",
  7:"qg"
};

function createNewTile(type, id) {
  const tile = document.createElement("div");
  tile.className = `tile ${type}`;
  tile.id = id;
  return tile;
}

// Because why not.
function createTile(type, id) {
  mapDOM.append(createNewTile(type, id));
}
export class city {
  constructor(id, owner=null){
    this.id = id;
    this.tile = createNewTile("city", id);
    this.owner = owner;
    this.cityListener();
    mapDOM.append(this.tile);
  }
  cityListener() {
    this.tile.addEventListener("click", () => {
      this.setNewCity();
      menuClickIcone();

      const footerToggleButton = document.getElementById(
        "footer-toggle-button"
      );
      footerToggleButton.checked = true;
    });
  }
  update() {
    if (this.owner){
      playerData[this.owner].gold += 1000
    }
  }
  capture(user){
    this.owner = user
  }
  setNewCity(){
    const footer = document.querySelector("#footer-container");
    footer.innerHTML = "";
  
    /* City Display section*/
    const cityDisplay = createFooterSection("Ville", "factory-display"); /*La même classe css que factory */
    const cityIMG = document.createElement("img");
    cityIMG.src = "../assets/sprites/map/city.svg";
    cityIMG.alt = "City";
    cityDisplay.append(cityIMG);
  
    /*Values box*/
    const valueBox = createScrollContent();
    const l = document.createElement("label");
    l.textContent = `Détenu par: ${this.owner}`;
    valueBox.append(l);
    cityDisplay.append(valueBox);
  
    footer.append(cityDisplay);
  }

}
export class factory {
  constructor(id, owner = null, override=false) {
    if (!override){
      this.id = id;
      this.tile = createNewTile("factory", id);
      this.owner = owner;
      this.production = null;
      this.factoryListener();
      mapDOM.append(this.tile);
    }
  }
  factoryListener() {
    this.tile.addEventListener("click", () => {
      this.setNewFactory();
      menuClickIcone();

      const footerToggleButton = document.getElementById(
        "footer-toggle-button"
      );
      footerToggleButton.checked = true;
    });
  }
  capture(user){
    console.log("capture")
    this.owner = user
  }
  setNewFactory() {
    const footer = document.querySelector("#footer-container");
    footer.innerHTML = "";

    /* Factory Display section*/
    const factoryDisplay = createFooterSection("Factory", "factory-display");
    const factoryIMG = document.createElement("img");
    factoryIMG.src = "../assets/sprites/map/factory.svg";
    factoryIMG.alt = "Factory";
    if (this.production){
      this.addProduction()
    }
    factoryDisplay.append(factoryIMG);

    /*Values box*/
    this.valueBox = createScrollContent();
    if (this.owner !== null) {
      const l = document.createElement("label");
      l.textContent = `Détenu par: ${this.owner}`;
      this.valueBox.append(l);
      if (this.production !== null) {
        this.addProduction(this.production);
      }
      factoryDisplay.append(this.valueBox);
    }

    footer.append(factoryDisplay);

    /*Shop section si n'est pas déjà utilisé*/
    if (this.production === null && this.owner === gameData.playerTurn) {
      const factoryShop = createFooterSection("Shop", "options-list");
      const factoryShopList = createScrollContent();
      for (let type of Object.keys(entityData)) {
        factoryShopList.append(this.ShopItem(type));
      }
      factoryShop.append(factoryShopList);
      footer.append(factoryShop);
    }

    /*Créer une description vide invisible*/
    const factoryShopDescription = createFooterSection(
      "Description",
      "description"
    );
    factoryShopDescription.style.visibility = "hidden";

    footer.append(factoryShopDescription);
  }

  ShopItem(itemName) {
    const item = document.createElement("a");
    item.addEventListener("click", () => {
      const sectionDescription = document.querySelector(".description");
      sectionDescription.style.visibility = "visible";
      this.setShopItemDescription(itemName);
    });
    const icon = document.createElement("img");
    icon.src = `../assets/sprites/entity/${itemName}.svg`;
    icon.alt = itemName;
    item.append(icon);
    const name = entityData[itemName].name;
    item.append(name);
    return item;
  }

  setShopItemDescription(itemName) {
    const section = document.querySelector(".description");
    section.innerHTML = "";

    const label = document.createElement("label");
    label.className = "section_name";
    label.innerText = entityData[itemName].name;
    section.append(label);

    const scroll = createScrollContent();

    const description = document.createElement("p");
    description.innerText = entityData[itemName].description;
    scroll.append(description);

    const specsList = document.createElement("ul");
    specsList.innerHTML = ` <li>
                <img class="inline-image" src="../assets/icons/sword.svg" alt="Damage" />: ${entityData[itemName].damage}
              </li>
              <li>
                <img class="inline-image" src="../assets/icons/move-up-right.svg" alt="Move" />: ${entityData[itemName].range} 
              </li>
              <li>
                <img class="inline-image" src="../assets/icons/euro.svg" alt="Cost" />: ${entityData[itemName].cost}
              </li>
              <li>
                Life: ${entityData[itemName].life}
              </li>`;

    scroll.append(specsList);
    section.append(scroll);

    section.append(this.shopButton(itemName));
  }
  shopButton(itemName) {
    const button = document.createElement("button");
    button.textContent = "ACHETER";
    button.addEventListener("click", () => {
      if (playerData[this.owner].gold >= entityData[itemName].cost) {
        playerData[this.owner].gold -= entityData[itemName].cost;
        this.addProduction(itemName);
        this.setNewFactory()
      }
    });
    return button;
  }
  addProduction(itemName) {
    const prodLabel = document.createElement("label");
    prodLabel.textContent = "Production";
    const prodIMG = document.createElement("img");
    this.production = itemName;
    prodIMG.src = `../assets/sprites/entity/${itemName}.svg`;
    prodIMG.style.width = "50%";
    this.valueBox.append(prodLabel);
    this.valueBox.append(prodIMG);
  }
  removeProduction() {
    this.production = null
    this.valueBox.remove
    this.valueBox = createScrollContent()
    const l = document.createElement("label");
    l.textContent = `Détenu par: ${this.owner}`;
    this.valueBox.append(l);
  }
  finishProduction() {
    const tc = this.id.split("-")
    const unit = new Units([tc[0],tc[1]], this.production, this.owner)
    entityList[this.id] = unit
    this.tile.append(unit)
    this.removeProduction()

  }
  update() {
    if (this.production !== null) {
      this.finishProduction()
    }
  }
}

class qg extends factory {
  constructor(id, owner) {
    super(id, owner, true)
    this.id = id;
    this.tile = createNewTile("qg", id);
    this.owner = owner;
    this.production = null;
    this.factoryListener();
    mapDOM.append(this.tile);
  }

  setNewFactory() {
    const footer = document.querySelector("#footer-container");
    footer.innerHTML = "";

    /* Factory Display section*/
    const factoryDisplay = createFooterSection("QG", "factory-display");
    const factoryIMG = document.createElement("img");
    factoryIMG.src = "../assets/sprites/map/qg.svg";
    factoryIMG.alt = "QG";
    factoryDisplay.append(factoryIMG);

    /*Values box*/
    this.valueBox = createScrollContent();
    if (this.owner !== null) {
      const l = document.createElement("label");
      l.textContent = `Détenu par: ${this.owner}`;
      this.valueBox.append(l);
      if (this.production !== null) {
        this.addProduction(this.production);
      }
      factoryDisplay.append(this.valueBox);
    }

    footer.append(factoryDisplay);

    /*Shop section si n'est pas déjà utilisé*/
    if (this.production === null && this.owner === gameData.playerTurn) {
      const factoryShop = createFooterSection("Shop", "options-list");
      const factoryShopList = createScrollContent();
      for (let type of Object.keys(entityData)) {
        factoryShopList.append(this.ShopItem(type));
      }
      factoryShop.append(factoryShopList);
      footer.append(factoryShop);
    }

    /*Créer une description vide invisible*/
    const factoryShopDescription = createFooterSection(
      "Description",
      "description"
    );
    factoryShopDescription.style.visibility = "hidden";

    footer.append(factoryShopDescription);
  }
}

// Fonction pour ajouter une tuile avec le type sélectionné
export function initMap() {
  for (let line in defaultMap.map) {
    for (let row in defaultMap.map[line]) {
      if (tileTypes[defaultMap.map[line][row]] === "factory") {
        const f = new factory(`${row}-${line}`, null);
        buildingList[`${row}-${line}`] = f

      } else if (tileTypes[defaultMap.map[line][row]] === "city") {
        const c = new city(`${row}-${line}`, null);
        buildingList[`${row}-${line}`] = c
      } else if (defaultMap.map[line][row] === 6) {
        const c = new qg(`${row}-${line}`, "player1");
        buildingList[`${row}-${line}`] = c
      } else if (defaultMap.map[line][row] === 7) {
        const c = new qg(`${row}-${line}`, "player2");
        buildingList[`${row}-${line}`] = c
      } else {
        createTile(tileTypes[defaultMap.map[line][row]], `${row}-${line}`);
      }
    }
  }
}
