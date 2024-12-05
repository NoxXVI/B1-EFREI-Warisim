import {
  entityList,
  gameData,
  players,
  buildingList,
} from "../data/gameData.js";

export function nextTurn() {
  gameData.id_p = (gameData.id_p + 1) % players.length;
  const actionMenu = document.querySelector(".actionMenu")
  const footerMenu = document.getElementById("footer-container")
  footerMenu.innerHTML = ""

  if (gameData.id_p === 0) {
    gameData.turn++;

    Object.values(buildingList).forEach((building) => {
      building.update();
    });
    Object.values(entityList).forEach((entity) => {
      entity.update();
    });
  }
  gameData.playerTurn = players[gameData.id_p];
  console.log(
    `Turn ${gameData.turn}, Player: ${
      gameData.playerTurn.name || gameData.id_p
    }`
  );
}
