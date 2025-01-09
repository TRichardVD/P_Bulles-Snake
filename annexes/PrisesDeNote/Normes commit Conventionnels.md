- ## Structure d'un Commit Conventionnel
	- Un message de commit suivant cette convention est structuré comme suit :
	  ```
	  <type>[étendue optionnelle]: <description>
	  
	  [corps optionnel]
	  
	  [pied optionnel]
	  ```
	- Dans votre exemple "feat(snake): Afficher le snake", nous pouvons identifier les éléments suivants :
		- **Type** : "feat" (pour une nouvelle fonctionnalité)
		- **Étendue** : "snake" (la partie du code concernée)
		- **Description** : "Afficher le snake"
- ## Types de Commit Courants
	- Les types de commit les plus couramment utilisés incluent :
		- **feat** : introduction d'une nouvelle fonctionnalité
		- **fix** : correction d'un bogue
		- **docs** : modifications de la documentation
		- **style** : changements de formatage, sans altération du code
		- **refactor** : refactorisation du code, sans ajout de fonctionnalité ni correction de bogue
		- **test** : ajout ou modification de tests
		- **chore** : tâches de maintenance, mises à jour de dépendances, etc.
- ## Avantages des Commits Conventionnels
	- L'utilisation de cette convention apporte plusieurs bénéfices :
		- Génération automatique de CHANGELOGs
		- Détermination automatique du changement de version sémantique
		- Communication claire de la nature des changements
		- Facilitation de la contribution aux projets
		- Amélioration de la lisibilité de l'historique Git
	- En adoptant les Commits Conventionnels, vous créez une structure dans vos messages de commit qui rendra votre travail plus lisible et compréhensible pour tous ceux qui interagissent avec votre code.
