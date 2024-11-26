import { changePlayer } from "../components/infoBar.js";
import { initMenu } from "../components/gameMenu.js";
import { setNewFactory, setNewCity } from "../components/footerMenu.js";
import { initMap } from "./mapLoader.js";
import { rangeTiles } from "./units.js";
initMap();
initMenu();

// setNewFactory()


// Test représentation entité
const testTile = document.getElementById("6-5");
const testUnitIMG = `<img
src="../assets/sprites/entity/infantery.svg"
class="sprite"
id="infantry1"
/>`;
testTile.innerHTML = testUnitIMG;


// Test porté d'attaque
console.log(rangeTiles([], 5, [6,5]))
for (let crds of rangeTiles([], 5, [6,5])) {
    const tile = document.getElementById(`${crds[0]}-${crds[1]}`)
    tile.style.backgroundColor = "red"
}