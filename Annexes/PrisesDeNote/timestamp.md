# C'est quoi le timestamp ?
Le timestamp est un système qui représente une date et une heure sous forme d'un nombre entier, correspondant au nombre de secondes écoulées depuis le 1er janvier 1970 à 00h00:00. C'est une méthode universelle et pratique en informatique pour enregistrer et manipuler des dates.
Par exemple :
Le timestamp 0 correspond au 1er janvier 1970 à 00:00:00
Le timestamp 946681200 correspond au 1er janvier 2000 à 00:00:00
Cette méthode présente deux avantages principaux :
Elle facilite la comparaison et les calculs entre différentes dates
Elle permet un stockage plus efficace dans les bases de données
Il faut noter cependant que ce système a une limitation : sur les ordinateurs 32 bits, il atteindra sa limite maximale le 19 janvier 2038, ce qu'on appelle le "bug de l'an 2038".