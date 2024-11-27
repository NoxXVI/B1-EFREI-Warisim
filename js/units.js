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


class units {
  constructor(tileCoords, type){
    this.tileCoords = tileCoords
    this.type = type
    this.life = 
  }
}