import { nextTurn } from "./turn.js"
import { gameData, playerData } from "../data/gameData.js"

const infoBar = document.querySelector(".info-bar")

export function changePlayer(playerName) {
    const player = infoBar.querySelector("#player")
    player.textContent = `Joueur ${playerName}`
}
export function changeTurn(turnNumber) {
    const turn = infoBar.querySelector("#turn")
    turn.textContent = `Tour ${turnNumber}`
}
export function changeMoney(money) {
    const player = infoBar.querySelector("#money")
    player.innerHTML = `<img src="/assets/icons/euro.svg" class = "inline-image"height="24" alt="">: ${money}`
}

function updateInfoBar(){
    changePlayer(gameData.playerTurn)
    changeTurn(gameData.turn)
    changeMoney(playerData[gameData.playerTurn].gold)
}

const  finirTour = document.getElementById("finir-tour");

finirTour.addEventListener("click", () => {
    nextTurn()
    updateInfoBar()
});