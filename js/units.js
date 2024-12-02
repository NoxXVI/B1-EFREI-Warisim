import {
  entityData,
  entitytIdCounter,
  buildingList,
} from "../data/gameData.js";

export function rangeTiles(rangeList, range, startTileCoords) {
  const startTile = document.getElementById(
    `${startTileCoords[0]}-${startTileCoords[1]}`
  );
  const [x, y] = startTileCoords;

  if (!startTile || startTile.classList.contains("river")) {
    return;
  }
  if (range === 0) {
    return;
  }
  if (x < 0 || y < 0) {
    return;
  }
  // Comment comparer des Arrays d'après chatgpt
  if (rangeList.some((coords) => coords[0] === x && coords[1] === y)) {
    return;
  }

  rangeList.push([x, y]);

  rangeTiles(rangeList, range - 1, [x + 1, y]); // Droite
  rangeTiles(rangeList, range - 1, [x, y + 1]); // Bas
  rangeTiles(rangeList, range - 1, [x, y - 1]); // Haut
  rangeTiles(rangeList, range - 1, [x - 1, y]); // Gauche

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
    this.canAttack = true;
    this.owner = owner;
  }

  thisTile() {
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
      this.actionMenu([top, left, width], this.actionMenuButtons());
    }
  }
  hideRange() {
    console.log(this.tileCoords);
    for (let crds of rangeTiles([], this.range, this.tileCoords)) {
      const tile = document.getElementById(`${crds[0]}-${crds[1]}`);
      tile.removeAttribute("style");
    }
  }
  showRange() {
    console.log(
      `Range length: ${rangeTiles([], this.range, this.tileCoords).length}`
    );
    for (let crds of rangeTiles([], this.range, this.tileCoords)) {
      const tile = document.getElementById(`${crds[0]}-${crds[1]}`);
      tile.style.backgroundColor = "red";
    }
  }

  attackRange(){
    return rangeTiles([], 2, this.tileCoords)
  }

  showAttackRange(){
    this.hideRange()
    for (let crds of this.attackRange()) {
      const tile = document.getElementById(`${crds[0]}-${crds[1]}`);
      tile.style.backgroundColor = "red";
    }
  }
  // hideAttackRange(){
  //   for (let crds of this.attackRange()) {
  //     const tile = document.getElementById(`${crds[0]}-${crds[1]}`);
  //     tile.removeAttribute("style");
  //   }
  // }

  actionMenu(pos, actions) {
    const aMenu = document.createElement("div");
    aMenu.className = "actionMenu";
    for (let action of actions) {
      aMenu.append(action);
    }
    aMenu.style.top = `${pos[0]}px`;
    aMenu.style.left = `${pos[1] + pos[2]}px`;

    this.handleKeyDown = (event) => {
      if (event.key === "Escape") {
        this.hideRange();
        this.removeActionMenu(); // Nettoyer l'écouteur
      }
    };
    document.addEventListener("keydown", this.handleKeyDown);
    document.body.append(aMenu);
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
    const ogRange = rangeTiles([], this.range, this.tileCoords);
    const listeners = []; // Stocke les références aux écouteurs pour les supprimer plus tard

    // Ajoute des Event listener pour capturer la case sélectionnée
    for (let tile of ogRange) {
      const selectedTile = document.getElementById(`${tile[0]}-${tile[1]}`);
      const handleClick = () => {
        const sourceTile = document.getElementById(
          `${this.tileCoords[0]}-${this.tileCoords[1]}`
        );
        console.log(tile);
        this.tileCoords = tile;
        this.addTileDisplay();
        sourceTile.innerHTML = "";

        console.log(`Moving to ${tile}`);

        // Une fois l'événement traité, supprimer l'écouteur
        selectedTile.removeEventListener("click", handleClick);
        // Supprimer tous les écouteurs enregistrés dans listeners
        listeners.forEach((listener) => {
          listener.element.removeEventListener(
            listener.event,
            listener.handler
          );
        });
        this.canMove = false; // Désactive le mouvement
        this.removeActionMenu(); // Supprimer le menu d'action
        this.addTileDisplay();
        this.hideRange()
      };

      // Ajouter l'écouteur
      selectedTile.addEventListener("click", handleClick);

      // Enregistrer l'écouteur pour pouvoir le supprimer plus tard
      listeners.push({
        element: selectedTile,
        event: "click",
        handler: handleClick,
      });
    }
  }

  canCapture() {
    if (this.thisTile().classList.contains("factory")) {
      return true;
    }
  }
  captureButton() {
    const b = document.createElement("button");
    b.textContent = "Capture";
    b.addEventListener("click", () => {
      buildingList[`${this.tileCoords[0]}-${this.tileCoords[1]}`].capture();
    });
    return b;
  }
  attackButton() {
    const b = document.createElement("button");
    b.textContent = "Attack";
    b.addEventListener("click", this.showAttackRange.bind(this))
    
    return b;
  }
  actionMenuButtons() {
    let blist = [];
    if (this.canAttack) {
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
    const img = document.createElement("img");
    img.className = "sprite";
    img.src = `../assets/sprites/entity/${this.type}.svg`;
    img.id = this.id;
    img.addEventListener("click", (event) => {
      this.unitListener(event);
    });
    tile.append(img);
  }
  saluer() {
    console.log(`Range: ${this.range}`);
  }
}
