# Configuration du programme avec l'API de [Jsonbin.io](https://jsonbin.io/)

## Prérequis
* Un compte sur [Jsonbin.io](https://jsonbin.io/)
* Des crédits afin de pouvoir faire les requêtes nécessaires.

## Installation
1. Appuillez sur "Create a Bin" dans l'onglet [Bins](https://jsonbin.io/app/bins)
2. Mettez-y un tableau simple à l'intérieur contenant une donnée vide (où les valeurs sont égale à zéro) donc comme ceci :
```Json
[
  {
    "score": 0,
    "timer": 0
  }
]
```
3. Sauvegarder l'identifiant de votre "Bin" (BIN ID)
4. Récuprérer la clé *X-MASTER-KEY* depuis l'onglet [API KEYS](https://jsonbin.io/app/app/api-keys)
5. Dans le fichier `config.js` dans le dossier `\src` entrez le contenu suivant en remplacant les valeurs sauvegarder (écrit entre `<>`)
```Javascript
export const API_URL = 'https://api.jsonbin.io/v3/b/<BIN ID>';
export const API_TOKEN = '<X-MASTER-KEY>';
```
> Remplacer `<X-MASTER-KEY>` par votre X-MASTER-KEY et `<BIN ID>` par l'indentifiant de votre BIN.

6. Sauvegarder le fichier et l'API devrais être fonctionnelle.