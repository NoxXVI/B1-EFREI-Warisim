# Description, paramètres et TO-DO List
## Map
- Sprite 16x16
- Map 20*30

## Différente couche du jeu
1. Carte
2. Entité/sprite
3. Overlay
4. Menu : flexbox

## Case
### Usine
Produits des unités. Doit être capturé par un joueur.
Son menu de footer contient:
- Une section descriptif qui affiche l'icône de la case. Le joueur la detenant et l'unité en cours de production.
- Le shop
- description de l'unité selectionné dans le shop
### Ville
La ville est une case capturable fournissant de l'argent à la fin de chaque tour.
Son footer contient une seule section qui affiche **l'icône de la case**, le **joueur la detenant** et quantité bonus par tour.

### Rivière / eau
Simple case bloquant la traversé. Une case de marche pour certaine unité pourrait être envisagé
### Pont
Case de marche passant sur de l'eau
### Route
Case de marche. Un bonus de déplacement pourrait être envisagé
### Prairie
Case de marche
### QG
Case objectif fait effet de ville. Capturable

## Unités
### Tank
Unité à prix élevé et forts dégats
- Deplacements :
- Prix : 
### Fantassin
Unité peu cher et transportable par voiture
- Deplacements :
- Prix : 
### Voiture
Unité peu cher à grand déplacement permettant de transporter 2 fantassin
- Deplacements :
- Prix : 
### Artiellerie
Unité de tir à distance a fort dégâts. Coute cher. Après un déplacement, met un tour avant de pouvoir attaquer.
- Deplacements :
- Prix : 

_ _ _
 
## JavaScript et TO-DO List

### Systeme de tours:
- Interaction avec les unités et deplacement
- Confirmation des deplacements / fin de tour
- Changement du joueur actif
- Compteur de tours

### Attaque:
- Voir la portée des unités
- Si une unité ennemie est dans la portée l'unité peut attaquer
- Barre de vie a chaque unité
- Chaque unité a une differente attaque et une differente portée

### Création d'unité:
- Vérification de la possession des usines
- déduction des ressources par rapport au coût de l'unité

### Terrain:
- Donné des avantages et des desavantages aux unités par rapport au terrain

### Conditions de victoire:
- Détruire le qg / les batiments / toute les unités
- Affichage de d'un message de victoire

### Animation:
- Montrer les déplacements, attaque, mort des unités

