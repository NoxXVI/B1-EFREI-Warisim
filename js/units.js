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
  console.log(`Coords : ${startTileCoords}`);

  rangeTiles(rangeList, range - 1, [x + 1, y]); // Droite
  rangeTiles(rangeList, range - 1, [x, y + 1]); // Bas
  rangeTiles(rangeList, range - 1, [x, y - 1]); // Haut
  rangeTiles(rangeList, range - 1, [x - 1, y]); // Gauche

  return rangeList;
}

// export class factory {
//   constructor
// }

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
  }
  unitListener(){
    this.showRange()
  }

  showRange() {
    for (let crds of rangeTiles([], this.range, this.tileCoords)) {
      const tile = document.getElementById(`${crds[0]}-${crds[1]}`);
      if (tile.style.maskImage === "none"){
        tile.style.maskImage = "linear-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.3))";
      }else{
        const allTilesStyle = document.querySelector(".tile")
      }
    }
  }
  addTileDisplay() {
    const tile = document.getElementById(`${this.tileCoords[0]}-${this.tileCoords[1]}`)
    const img = document.createElement("img");
    img.className = "sprite";
    img.src = `../assets/sprites/entity/${this.type}.svg`;
    img.id = this.id;
    img.addEventListener("click",()=>{
      this.unitListener()
    })
    tile.append(img);
  }
  saluer() {
    console.log(`Range: ${this.range}`);
  }
}
