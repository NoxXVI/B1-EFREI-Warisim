import {changePlayer} from "../components/infoBar.js"

// Sélectionnez les éléments nécessaires
const footerToggleButton = document.getElementById("footer-toggle-button");
const footerContainer = document.getElementById("footer-container");

// Écoutez le changement de l'état de la checkbox
footerToggleButton.addEventListener("change", function () {
  if (footerToggleButton.checked) {
    footerContainer.style.visibility = "visible";
    footerContainer.style.opacity = "1";
    footerContainer.style.maxHeight = "30%"; // Ajustez la valeur si nécessaire
  } else {
    footerContainer.style.visibility = "hidden";
    footerContainer.style.opacity = "0";
    footerContainer.style.maxHeight = "0";
  }
});

