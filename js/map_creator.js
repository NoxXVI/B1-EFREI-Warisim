map = [
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 5, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, 5, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 4, 3, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3,
    4, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 4, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3,
    4, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 5, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 5, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
];

// Table des types de tuiles
const tileTypes = {
    0: "grass",
    1: "river",
    2: "bridge",
    3: "road",
    4: "city",
    5: "factory",
  };
  
  let selectedTile = "road";  // Valeur par défaut
  
  // Fonction pour ajouter une tuile avec le type sélectionné
  function addtile(type) {
    const div = document.createElement("div");
    div.className = `tile ${type}`;
    div.addEventListener("mouseup", () => {
      console.log(selectedTile);
      div.className = `tile ${selectedTile}`;  // Appliquer le type sélectionné
    });
    document.querySelector("#map").append(div);
  }
  
  // Transformer la carte en une liste plate
  function oneMapList() {
    return map.flat();
  }
  
  // Initialiser la carte avec les tuiles
  function initMap() {
    const mapContainer = document.querySelector("#map");
    mapContainer.style.gridTemplateColumns = `repeat(${map[0].length}, auto)`;  // Ajuster la grille
    oneMapList().forEach((tileId) => {
      addtile(tileTypes[tileId] || "unknown");  // Ajouter chaque tuile
    });
  }
  
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener("change", () => {
      // Vérifier si l'événement se déclenche et quelle valeur est sélectionnée
      console.log("Radio changed. Selected value:", input.value);
      selectedTile = input.value;  // Mettre à jour le type sélectionné
      console.log("Updated selectedTile:", selectedTile);  // Vérifier que selectedTile est bien mis à jour
    });
  });
  
  // Initialiser la carte
  initMap();
  