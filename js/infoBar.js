import { buildingList, entityList, gameData } from "../data/gameData.js"

const infoBar = document.querySelector(".info-bar")

export function changePlayer(playerName) {
    const player = infoBar.querySelector("#player")
    player.textContent = `Joueur ${playerName}`
}
export function changeTurn(turnNumber) {
    const turn = infoBar.querySelector("#player")
    turn.textContent = `Tour ${player}`
}
export function changeMoney(playername) {
    const player = infoBar.querySelector("#money")
    player.innerHTML = `<img src="/assets/icons/euro.svg" class = "inline-image"height="24" alt="">: ${player}`
}

const  finirTour = document.getElementById("finir-tour");
const affichage = document.getElementById("turn");

finirTour.addEventListener("click", () => {
    gameData.turn++;
    affichage.textContent = `Tour ${gameData.turn}`
    for (let building of Object.values(buildingList)){
        building.update()
    }
});