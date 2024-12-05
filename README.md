[To-do](TO-DO.md)

# Le JEU
Ce jeu est inspiré de Advanced wars.
## Comment ca se joue ?

> Pour l'instant, le jeu n'est pas terminé.  
Ce jeu est un tour par tour.  

Un tour =  
- Joueur 1 joue  
- Joueur 2 joue  

### Durant un tour, un joueur peut :  
- Bouger ses unités  
- Capturer des bâtiments avec ses unités  
- Acheter des unités dans ses différentes usines possédées  

### Au tout début :  
Les joueurs n'ont que leurs QG (la tuile octogonale), qui se comportent comme des usines.  

### Comment ça se contrôle ?  
- Il faut cliquer deux fois sur la case du bâtiment pour afficher son menu.  
- Un sous-menu s'affiche pour les usines et les QG si le bâtiment appartient au joueur actif.  
- Les unités achetées apparaissent au tour suivant.  


_ _ _ _
# Ancien README
## Sommaire
- [Info général](#map)
- [Couche d'affichage](#différente-couche-du-jeu)
- [Differente case](#cases)
- [Unités](#unités)
- [Comment ca se contrôle](#contrôle)

# Info général
### Map
- Sprite 16x16
- Map 20*30

### Différente couche du jeu
1. Carte
2. Entité/sprite
3. Overlay
4. Menu : flexbox

# Cases
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

# Unités
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

## Contrôle
### Navigation 
- Click molette pour naviguer sur la map
- Scroll pour zoom/dezoom
- Clique gauche selection de l'entité
- Menu d'action entité fermable via Echap
### Menu
- Selection de case ouvre le menu footer correspondant
- Selection d'entité:
 - affiche l'overlay de d'déplacement avec la couleur de team de l'entité.
 - Affiche le menu d'action
- slider de scroll en zoom.

### Gestion unité
- Si choix unité mouvement
 -> Ferme le menu d'action et permet de choisir la case où se déplacer
 -> Une fois déplacer, réouvre un menu d'action
- Si attaque, affiche overlay de range. Au survol d'un unité ennemie affiche les potentiels dégats dans un footer réduits.
  


