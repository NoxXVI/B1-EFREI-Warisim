import { entityData, entitytIdCounter } from "../data/gameData.js";

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


function actionMenu(pos, actions){
  const aMenu = document.createElement("div")
  aMenu.className = "actionMenu"
  for (let action of actions) {
    aMenu.append(action)
  }
  aMenu.style.top = `${pos[0]}px`
  aMenu.style.left = `${pos[1]+pos[2]}px`

   const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      aMenu.remove();
      document.removeEventListener("keydown", handleKeyDown); // Nettoyer l'écouteur
    }
  };
  document.addEventListener("keydown", handleKeyDown);
  document.body.append(aMenu)
}

function removeActionMenu(){
  const aMenu = document.getElementById("actionMenu")
  aMenu.remove
}

export class Units {
  constructor(tileCoords, type) {
    this.tileCoords = tileCoords;
    this.type = type;
    entitytIdCounter.value += 1;
    this.id = `${type}${entitytIdCounter.value}`;
    this.life = entityData[type]["life"];
    this.range = entityData[type]["range"];
    this.damage = entityData[type]["damage"];
    this.addTileDisplay()
    this.overlay = false
    this.canMove = true
    this.canAttack = true
  }
  thisTile(){
    return document.getElementById(`${this.tileCoords[0]}-${this.tileCoords[1]}`)
  }
  unitListener(event){
    this.showRange()

    const tile = this.thisTile()
    const rect = tile.getBoundingClientRect();
    const top = rect.top + window.scrollY; 
    const left = rect.left + window.scrollX;
    const width = rect.width

    actionMenu([top, left, width],this.actionMenuButtons())
  }
  canCapture(){
    if (this.thisTile().classList.contains("factory")){
      return true
    }
  }
  movementButton(){
    const b = document.createElement("button")
    b.textContent = "Move"
    return b
  }
  captureButton(){
    const b = document.createElement("button")
    b.textContent = "Capture"
    return b
  }
  attackButton(){
    const b = document.createElement("button")
    b.textContent = "Attack"
    return b
  }
  actionMenuButtons(){
    let blist = []
    if (this.canAttack){
      blist.push(this.attackButton())
    }
    if (this.canMove){
      blist.push(this.movementButton())
    }
    if (this.canCapture()){
      blist.push(this.captureButton())
    }
    return blist
  }

  showRange() {
    console.log(`Range length: ${rangeTiles([], this.range, this.tileCoords).length}`)
    for (let crds of rangeTiles([], this.range, this.tileCoords)) {
      const tile = document.getElementById(`${crds[0]}-${crds[1]}`);
      tile.style.backgroundColor = "red";
    }
  }

  addTileDisplay() {
    const tile = document.getElementById(`${this.tileCoords[0]}-${this.tileCoords[1]}`)
    const img = document.createElement("img");
    img.className = "sprite";
    img.src = `../assets/sprites/entity/${this.type}.svg`;
    img.id = this.id;
    img.addEventListener("click",(event)=>{
      this.unitListener(event)
    })
    tile.append(img);
  }
  saluer() {
    console.log(`Range: ${this.range}`);
  }
}
