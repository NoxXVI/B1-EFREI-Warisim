

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

let compteur = 1;
let finirTour = document.getElementById("finir-tour");
let affichage = document.getElementById("turn");

finirTour.addEventListener("click", () => {
    compteur++;
    affichage.textContent = `Tour ${compteur}`
});