import {
  entityData,
  entitytIdCounter,
  buildingList,
  gameData,
  defaultMap,
  entityList,
} from "../data/gameData.js";
import { createScrollContent, createFooterSection } from "./footer.js";

export function rangeTiles(rangeList, range, startTileCoords, start = false) {
  let [x, y] = startTileCoords;
  x = parseInt(x);
  y = parseInt(y);
  const maxX = defaultMap.map[0].length - 1;
  const maxY = defaultMap.map.length - 1;

  if (x < 0 || y < 0 || x > maxX || y > maxY) {
    return;
  }

  const startTile = document.getElementById(`${x}-${y}`);

  if (!startTile || startTile.classList.contains("river")) {
    return;
  }
  if (!startTile.innerHTML && start) {
    return;
  }

  // Merci chatgpt
  if (rangeList.some((coords) => coords[0] === x && coords[1] === y)) {
    return;
  }

  if (range === 0) {
    return;
  }

  rangeList.push([x, y]);

  rangeTiles(rangeList, range - 1, [x + 1, y]); // Droite
  rangeTiles(rangeList, range - 1, [x - 1, y]); // Gauche
  rangeTiles(rangeList, range - 1, [x, y - 1]); // Haut
  rangeTiles(rangeList, range - 1, [x, y + 1]); // Bas

  return rangeList;
}

export class Units {
  constructor(tileCoords, type, owner) {
    this.tileCoords = tileCoords;
    this.type = type;
    entitytIdCounter.value += 1;
    this.id = `${type}${entitytIdCounter.value}`;
    this.life = entityData[type]["life"];
    this.range = entityData[type]["range"];
    this.damage = entityData[type]["damage"];
    this.addTileDisplay();
    this.overlay = false;
    this.canMove = true;
    this.hasAttacked = true;
    this.hasCaptured = false
    this.owner = owner;
  }

  thisTile(tile=null) {
    if (tile){
      return document.getElementById(tile);
    }
    return document.getElementById(
      `${this.tileCoords[0]}-${this.tileCoords[1]}`
    );
  }
  unitListener(event) {
    this.showRange();

    const tile = this.thisTile();
    const rect = tile.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;
    const width = rect.width;
    if (this.actionMenuButtons().length !== 0) {
      this.actionMenu([top, left, width]);
    }
  }
  displayInfo() {
    const footer = document.querySelector("#footer-container");
    footer.innerHTML = "";

    /* City Display section*/
    const entityDisplay = createFooterSection(
      this.type,
      "factory-display"
    ); /*La même classe css que factory */
    const cityIMG = document.createElement("img");
    cityIMG.src = `../assets/sprites/entity/${this.type}.svg`;
    cityIMG.alt = this.type;
    entityDisplay.append(cityIMG);

    /*Values box*/
    const valueBox = createScrollContent();
    const l = document.createElement("label");
    const lifeBar = document.createElement("progress");
    const lifeLabel = document.createElement("label");
    lifeBar.value = this.life;
    lifeBar.max = entityData[this.type]["life"];

    lifeLabel.textContent = `${this.life} / ${entityData[this.type]["life"]}`;
    l.textContent = `Détenu par: ${this.owner}`;
    valueBox.append(l);
    valueBox.append(lifeBar);
    valueBox.append(lifeLabel);

    entityDisplay.append(valueBox);
    footer.append(entityDisplay);
  }

  hideRange() {
    console.log(this.tileCoords);
    for (let crds of rangeTiles([], this.range, this.tileCoords, true)) {
      const tile = document.getElementById(`${crds[0]}-${crds[1]}`);
      tile.removeAttribute("style");
    }
  }
  showRange() {
    console.log(
      `Range length: ${
        rangeTiles([], this.range, this.tileCoords, true).length
      }`
    );
    for (let crds of rangeTiles([], this.range, this.tileCoords, true)) {
      const tile = document.getElementById(`${crds[0]}-${crds[1]}`);
      tile.style.backgroundColor = "red";
    }
  }

  attackRange() {
    return rangeTiles([], 2, this.tileCoords, true);
  }

  showAttackRange() {
    this.hideRange();
    for (let crds of this.attackRange()) {
      const tile = document.getElementById(`${crds[0]}-${crds[1]}`);
      tile.style.backgroundColor = "red";
    }
  }
  canAttack(tile){
    if (entityList[`${tile[0]}-${tile[1]}`].owner !== this.owner){
      return true
    }
    return false
  }

  actionMenu(pos) {
    this.removeActionMenu();
    const actions = this.actionMenuButtons();
    if (this.owner === gameData.playerTurn) {
      const aMenu = document.createElement("div");
      aMenu.className = "actionMenu";
      for (let action of actions) {
        aMenu.append(action);
      }
      aMenu.style.top = `${pos[0]}px`;
      aMenu.style.left = `${pos[1] + pos[2] + 10}px`;

      this.handleKeyDown = (event) => {
        if (event.key === "Escape") {
          this.hideRange();
          this.removeActionMenu();
        }
      };
      document.addEventListener("keydown", this.handleKeyDown);
      document.body.append(aMenu);
    }
  }
  removeActionMenu() {
    const aMenu = document.querySelector(".actionMenu");
    if (aMenu) {
      document.removeEventListener("keydown", this.handleKeyDown);
      aMenu.remove();
    }
  }
  movementButton() {
    const b = document.createElement("button");
    b.textContent = "Move";
    b.addEventListener("click", this.movementHandler.bind(this));

    return b;
  }
  movementHandler() {
    console.log(`Hnadler ${this.tileCoords}`);
    const ogRange = rangeTiles([], this.range, this.tileCoords, true);
    const listeners = [];

    for (let tile of ogRange) {
      const selectedTile = document.getElementById(`${tile[0]}-${tile[1]}`);
      const handleClick = () => {
        const sourceTile = document.getElementById(
          `${this.tileCoords[0]}-${this.tileCoords[1]}`
        );
        this.hideRange();
        console.log(tile);
        this.tileCoords = tile;
        this.addTileDisplay();
        sourceTile.innerHTML = "";

        selectedTile.removeEventListener("click", handleClick);
        listeners.forEach((listener) => {
          listener.element.removeEventListener(
            listener.event,
            listener.handler
          );
        });
        this.canMove = false;
        this.removeActionMenu();
        this.addTileDisplay();
      };

      selectedTile.addEventListener("click", handleClick);

      listeners.push({
        element: selectedTile,
        event: "click",
        handler: handleClick,
      });
    }
  }

  update() {
    this;
    this.canMove = true;
    this.hasAttacked = true;
    this.hideRange();
  }

  canCapture() {
    const tile = this.thisTile()
    if (
      tile.classList.contains("factory") &&
      buildingList[`${this.tileCoords[0]}-${this.tileCoords[1]}`].owner !== this.owner && !this.hasCaptured
    ) {
      return true;
    }
  }
  captureButton() {
    const b = document.createElement("button");
    b.textContent = "Capture";
    b.addEventListener("click", () => {
      buildingList[`${this.tileCoords[0]}-${this.tileCoords[1]}`].capture(this.owner);
      this.removeActionMenu()
    });
    return b;
  }
  takeDamage(damage){
    if (this.life < damage){
      this.thisTile().innerHTML = ""
      delete entityList[`${this.tileCoords[0]}-${this.tileCoords[1]}`]
    }
    this.life -= damage
  }
  
  attackHandler(){
    console.log(`Hnadler ${this.tileCoords}`);
    const ogRange = this;this.attackRange();
    const listeners = [];
    this.attackRange()
    for (let tile of ogRange) {
      const selectedTile = document.getElementById(`${tile[0]}-${tile[1]}`);
      const handleClick = () => {
        
        entityList[`${tile[0]}-${tile[1]}`].takeDamage(this.this.damage);

        this.hideRange();
        this.addTileDisplay();

        selectedTile.removeEventListener("click", handleClick);
        listeners.forEach((listener) => {
          listener.element.removeEventListener(
            listener.event,
            listener.handler
          );
        });
        this.canAttack = false;
        this.removeActionMenu();
        this.addTileDisplay();
      };

      selectedTile.addEventListener("click", handleClick);

      listeners.push({
        element: selectedTile,
        event: "click",
        handler: handleClick,
      });
    }
  }

  attackButton() {
    const b = document.createElement("button");
    b.textContent = "Attack";
    b.addEventListener("click", this.showAttackRange.bind(this));

    return b;
  }
  actionMenuButtons() {
    let blist = [];
    if (!this.hasAttacked) {
      blist.push(this.attackButton());
    }
    if (this.canMove) {
      blist.push(this.movementButton());
    }
    if (this.canCapture()) {
      blist.push(this.captureButton());
    }
    return blist;
  }

  addTileDisplay() {
    const tile = document.getElementById(
      `${this.tileCoords[0]}-${this.tileCoords[1]}`
    );
    if (!tile) {
      console.error(`Tile not found at coordinates: ${this.tileCoords}`);
      return;
    }

    const img = document.createElement("img");
    img.className = "sprite";
    img.src = `../assets/sprites/entity/${this.type}.svg`;
    img.id = this.id;

    img.addEventListener("click", (event) => {
      this.unitListener(event);
    });

    img.addEventListener("mouseenter", () => {
      this.displayInfo();
    });

    img.addEventListener("mouseleave", () => {
      const footer = document.getElementById("footer-container");
      if (footer) {
        footer.innerHTML = "";
      }
    });

    tile.append(img);
  }
}
