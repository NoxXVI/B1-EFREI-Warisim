import { changePlayer } from "../components/infoBar.js";
import { initMenu } from "../components/gameMenu.js";
import { setNewFactory, setNewCity } from "../components/footerMenu.js";
import { initMap } from "./mapLoader.js";

initMap();
initMenu();
// setNewFactory()

const testTile = document.getElementById("6-5");
const testUnitIMG = `<img
        src="../assets/sprites/entity/infantery.svg"
        class="sprite"
        id="infantry1"
      />`;
testTile.innerHTML = testUnitIMG;
