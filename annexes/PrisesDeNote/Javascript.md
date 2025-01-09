# Javascript
JavaScript n'est pas Java !
## Pourquoi utiliser javascript ?
Principal langage de script côté navigateur
Langage polyvalent
Ecosystème & Communauté
[Langage asynchrone](./Langage%20asynchrone.md)
## ECMAScript vs Javasript
JavaScript
Language
ECMAScript
ECMA = Organisation de standisation
ECMA-262 = ECMAScrpit Language Specification
ECMAScript 6, ECMASCRIPT 2022, ES2022 = versions du Javascript
## Prérequis
Algorithmie
Editeur de code
HTML/CSS (côté navigateur)
HTTP (côté serveur)
## Documentation pour avoir de l'aide
[MDN](https://developer.mozilla.org/fr/)
## Variables
### `const`
Ne peux PAS être modifié (attention dans le cas d'un objet la référence de l'objet ne peut pas être modifié mais sans contenu oui ! comme on peut le comprendre en comprenant le schéma [ici](#spécificités-du-langage) portée uniquement dans le bloc
### `var`
portée globale
valeurs modifiables
### `let`
portée uniquement dans le bloc
valeurs modificable
### Spécificités du langage
![memory-management-in-js.png](./memory-management-in-js_1732559050326_0.png)
Dans cette image, on voit que il y a 2 types de mémoire: la stack et la heap.
Stack (pile)
La stack stocke :
Les variables primitives (string, number, boolean)
Les références vers les objets (stockés dans le heap)
Les informations sur le contexte d'exécution
Heap (tas)
Le heap est utilisé pour stocker :
Les objets complexes
Les fonctions
Les tableaux
Les instances de classes
## Types de valeurs
### Valeurs spéciales
null
Absence de valeur (rien)
undefined
Indique que la valeur n'est pas assigné (pas été défini) donc une absence de valeur
NaN
Not a Number
Type retourné dans le cas d'opération impossible tel que `2 * 'b'`
### String
` "valeur" `
` 'valeur' `
` `valeur` `
permet d'ajouter des variables à l'intérieur : `${variable1} `
Caractère spéciaux dans un string
`\n`
Retour à la ligne
`\t`
Tabulation
`\'`
Apostrophe
### Nombre
Représente les valeurs numériques (entiers et nombres à virgule flottante).
Exemples : `3`, `3.14`, `-42`, `1e5` (notation scientifique pour 100000).
Stocké en format **double précision 64 bits** (standard IEEE 754).
Peut représenter des nombres entre $$ \pm(2^{-1022}) $$ et $$ \pm(2^{1023}) $$ .
Précision exacte pour les entiers jusqu'à $$ \pm(2^{53} - 1) $$ .
**Types de valeurs spéciales :**
`Infinity` : Résultat d'une division par zéro ou d'un dépassement de plage.
`-Infinity` : Résultat d'une opération similaire mais négative.
`NaN` (*Not-a-Number*) : Résultat d'une opération mathématique invalide (par exemple, `"abc" / 3`).
**Opérations courantes :**
Addition : `+`
Soustraction : `-`
Multiplication : `*`
Division : `/`
Modulo : `%`
**Conversions implicites :**
Si une chaîne de caractères est utilisée dans une opération arithmétique, JavaScript tentera de la convertir en nombre.
Exemple : `"10" * 2` retourne `20`.
**Propriétés importantes du type Number :**
`Number.MAX_VALUE` : Le plus grand nombre positif représentable.
`Number.MIN_VALUE` : Le plus petit nombre positif représentable.
`Number.MAX_SAFE_INTEGER` et `Number.MIN_SAFE_INTEGER` : Limites des entiers sûrs (sans perte de précision).
`Number.EPSILON` : La plus petite différence entre deux nombres représentables.
**Exemples pratiques :**
```javascript
let x = 42; // Entier
let y = 3.14; // Nombre à virgule flottante
console.log(x + y); // Affiche 45.14

let z = "100" / 2; // Conversion implicite
console.log(z); // Affiche 50

console.log(typeof NaN); // "number"
```
### Tableau
Stocke la référence donc dans le ca d'une copie fait une copie de la référence de l'objet !
```javascript
const notes = ["val1", 2, 3 'val4', ['2', 12,  "hello"]];
```
#### Fonctions usuelles
**Array.prototype.at()**
**Description**: Retourne l'élément à l'index spécifié. Accepte des index négatifs.
**Syntaxe**: `arr.at(index)`
**Exemple**:
`let fruits = ['pomme', 'banane', 'cerise'];`
`fruits.at(1); // 'banane'`
`fruits.at(-1); // 'cerise'`
**Exceptions**: Si l'index est hors limites, retourne `undefined`.
**Points à faire attention**: Utilisez des index négatifs pour accéder aux éléments de la fin du tableau.
**Array.prototype.concat()**
**Description**: Fusionne deux ou plusieurs tableaux. Ne modifie pas les tableaux existants.
**Syntaxe**: `arr.concat(value1, value2, ..., valueN)`
**Exemple**:
`let arr1 = [1, 2];`
`let arr2 = [3, 4];`
`let arr3 = arr1.concat(arr2); // [1, 2, 3, 4]`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne un nouveau tableau.
**Array.prototype.fill()**
**Description**: Remplit tous les éléments du tableau à partir d'un index de début jusqu'à un index de fin avec une valeur statique.
**Syntaxe**: `arr.fill(value, start, end)`
**Exemple**:
`let arr = [1, 2, 3, 4];`
`arr.fill(5, 1, 3); // [1, 5, 5, 4]`
**Exceptions**: Aucune.
**Points à faire attention**: Modifie le tableau d'origine.
**Array.prototype.filter()**
**Description**: Crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie.
**Syntaxe**: `arr.filter(callback(element, index, array), thisArg)`
**Exemple**:
`let arr = [1, 2, 3, 4];`
`let filtered = arr.filter(x => x > 2); // [3, 4]`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne un nouveau tableau.
**Array.prototype.find()**
**Description**: Retourne le premier élément du tableau qui satisfait la fonction de test fournie.
**Syntaxe**: `arr.find(callback(element, index, array), thisArg)`
**Exemple**:
`let arr = [5, 12, 8, 130, 44];`
`let found = arr.find(x => x > 10); // 12`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne `undefined` si aucun élément ne satisfait la condition.
**Array.prototype.findIndex()**
**Description**: Retourne l'index du premier élément du tableau qui satisfait la fonction de test fournie.
**Syntaxe**: `arr.findIndex(callback(element, index, array), thisArg)`
**Exemple**:
`let arr = [5, 12, 8, 130, 44];`
`let index = arr.findIndex(x => x > 10); // 1`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne `-1` si aucun élément ne satisfait la condition.
**Array.prototype.findLast()**
**Description**: Retourne le dernier élément du tableau qui satisfait la fonction de test fournie.
**Syntaxe**: `arr.findLast(callback(element, index, array), thisArg)`
**Exemple**:
`let arr = [5, 12, 8, 130, 44];`
`let found = arr.findLast(x => x > 10); // 44`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne `undefined` si aucun élément ne satisfait la condition.
**Array.prototype.findLastIndex()**
**Description**: Retourne l'index du dernier élément du tableau qui satisfait la fonction de test fournie.
**Syntaxe**: `arr.findLastIndex(callback(element, index, array), thisArg)`
**Exemple**:
`let arr = [5, 12, 8, 130, 44];`
`let index = arr.findLastIndex(x => x > 10); // 4`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne `-1` si aucun élément ne satisfait la condition.
**Array.prototype.flat()**
**Description**: Retourne un nouveau tableau avec tous les sous-tableaux concaténés de manière récursive jusqu'à la profondeur spécifiée.
**Syntaxe**: `arr.flat(depth)`
**Exemple**:
`let arr = [1, 2, [3, 4]];`
`let flattened = arr.flat(); // [1, 2, 3, 4]`
**Exceptions**: Aucune.
**Points à faire attention**: Par défaut, la profondeur est de 1.
**Array.prototype.forEach()**
**Description**: Exécute une fonction fournie une fois pour chaque élément du tableau.
**Syntaxe**: `arr.forEach(callback(element, index, array), thisArg)`
**Exemple**:
`let arr = [1, 2, 3];`
`arr.forEach(x => console.log(x)); // 1 2 3`
**Exceptions**: Aucune.
**Points à faire attention**: Ne retourne rien.
**Array.from()**
**Description**: Crée un nouveau tableau à partir d'un objet semblable à un tableau ou itérable.
**Syntaxe**: `Array.from(arrayLike, mapFn, thisArg)`
**Exemple**:
`let arrLike = { length: 3, 0: 'a', 1: 'b', 2: 'c' };`
`let arr = Array.from(arrLike); // ['a', 'b', 'c']`
**Exceptions**: Aucune.
**Points à faire attention**: Peut prendre une fonction de mapping en second argument.
**Array.prototype.includes()**
**Description**: Détermine si un tableau contient un élément spécifié.
**Syntaxe**: `arr.includes(searchElement, fromIndex)`
**Exemple**:
`let arr = [1, 2, 3];`
`arr.includes(2); // true`
**Exceptions**: Aucune.
**Points à faire attention**: La recherche est sensible à la casse.
**Array.prototype.indexOf()**
**Description**: Retourne le premier index pour lequel un élément passé est trouvé dans le tableau.
**Syntaxe**: `arr.indexOf(searchElement, fromIndex)`
**Exemple**:
`let arr = [1, 2, 3];`
`arr.indexOf(2); // 1`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne `-1` si l'élément n'est pas trouvé.
**Array.prototype.join()**
**Description**: Joint tous les éléments du tableau en une chaîne de caractères.
**Syntaxe**: `arr.join(separator)`
**Exemple**:
`let arr = ['a', 'b', 'c'];`
`arr.join('-'); // 'a-b-c'`
**Exceptions**: Aucune.
**Points à faire attention**: Le séparateur est optionnel.
**Array.prototype.map()**
**Description**: Crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau.
**Syntaxe**: `arr.map(callback(element, index, array), thisArg)`
**Exemple**:
`let arr = [1, 2, 3];`
`let mapped = arr.map(x => x * 2); // [2, 4, 6]`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne un nouveau tableau.
**Array.prototype.pop()**
**Description**: Retire le dernier élément d'un tableau et retourne cet élément.
**Syntaxe**: `arr.pop()`
**Exemple**:
`let arr = [1, 2, 3];`
`let popped = arr.pop(); // 3`
**Exceptions**: Aucune.
**Points à faire attention**: Modifie le tableau d'origine.
**Array.prototype.push()**
**Description**: Ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle longueur du tableau.
**Syntaxe**: `arr.push(element1, element2, ..., elementN)`
**Exemple**:
`let arr = [1, 2];`
`let newLength = arr.push(3, 4); // 4`
**Exceptions**: Aucune.
**Points à faire attention**: Modifie le tableau d'origine.
**Array.prototype.reduce()**
**Description**: Applique une fonction qui est un "accumulateur" sur l'accumulateur et chaque valeur du tableau (de la gauche vers la droite) afin de le réduire à une seule valeur.
**Syntaxe**: `arr.reduce(callback(accumulator, currentValue, index, array), initialValue)`
**Exemple**:
`let arr = [1, 2, 3, 4];`
`let sum = arr.reduce((acc, x) => acc + x, 0); // 10`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne un seul résultat accumulé.
**Array.prototype.reduceRight()**
**Description**: Applique une fonction qui est un "accumulateur" sur l'accumulateur et chaque valeur du tableau (de la droite vers la gauche) afin de le réduire à une seule valeur.
**Syntaxe**: `arr.reduceRight(callback(accumulator, currentValue, index, array), initialValue)`
**Exemple**:
`let arr = [1, 2, 3, 4];`
`let sum = arr.reduceRight((acc, x) => acc + x, 0); // 10`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne un seul résultat accumulé.
**Array.prototype.shift()**
**Description**: Retire le premier élément d'un tableau et retourne cet élément.
**Syntaxe**: `arr.shift()`
**Exemple**:
`let arr = [1, 2, 3];`
`let shifted = arr.shift(); // 1`
**Exceptions**: Aucune.
**Points à faire attention**: Modifie le tableau d'origine.
**Array.prototype.slice()**
**Description**: Retourne une copie superficielle d'une portion du tableau dans un nouvel objet tableau.
**Syntaxe**: `arr.slice(start, end)`
**Exemple**:
`let arr = [1, 2, 3, 4];`
`let sliced = arr.slice(1, 3); // [2, 3]`
**Exceptions**: Aucune.
**Points à faire attention**: Ne modifie pas le tableau d'origine.
**Array.prototype.reverse()**
**Description**: Inverse l'ordre des éléments d'un tableau.
**Syntaxe**: `arr.reverse()`
**Exemple**:
`let arr = [1, 2, 3];`
`arr.reverse(); // [3, 2, 1]`
**Exceptions**: Aucune.
**Points à faire attention**: Modifie le tableau d'origine.
**Array.prototype.some()**
**Description**: Teste si au moins un élément du tableau passe le test implémenté par la fonction fournie.
**Syntaxe**: `arr.some(callback(element, index, array), thisArg)`
**Exemple**:
`let arr = [1, 2, 3, 4];`
`let hasEven = arr.some(x => x % 2 === 0); // true`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne un booléen.
**Array.prototype.sort()**
**Description**: Trie les éléments d'un tableau en place et retourne le tableau.
**Syntaxe**: `arr.sort(compareFunction)`
**Exemple**:
`let arr = [3, 1, 4, 2];`
`arr.sort((a, b) => a - b); // [1, 2, 3, 4]`
**Exceptions**: Aucune.
**Points à faire attention**: Modifie le tableau d'origine.
**Array.prototype.splice()**
**Description**: Modifie le contenu d'un tableau en retirant ou en remplaçant des éléments existants et/ou en ajoutant de nouveaux éléments.
**Syntaxe**: `arr.splice(start, deleteCount, item1, item2, ..., itemN)`
**Exemple**:
`let arr = [1, 2, 3, 4];`
`arr.splice(2, 1, 5, 6); // [1, 2, 5, 6, 4]`
**Exceptions**: Aucune.
**Points à faire attention**: Modifie le tableau d'origine.
**Array.prototype.unshift()**
**Description**: Ajoute un ou plusieurs éléments au début d'un tableau et retourne la nouvelle longueur du tableau.
**Syntaxe**: `arr.unshift(element1, element2, ..., elementN)`
**Exemple**:
`let arr = [1, 2];`
`let newLength = arr.unshift(3, 4); // 4`
**Exceptions**: Aucune.
**Points à faire attention**: Modifie le tableau d'origine.
### Objets
Stocke la référence donc dans le ca d'une copie fait une copie de la référence de l'objet !
```javascript
const person = {
  firstname: 'John',
  lastname: 'Doe',
  age: 34,
  'les gens': 23
  [b]: 56	// Utilisation de [] dans le cas où une variable du même nom est déjà initialisé
}
```
Récupérer la valeur
```javascript
person.firstname
```
```javascript
person['firstname'] 
```
Permet d'avoir par exemple une clé dynamique si la clé est une variable par exemple
#### Fonctions usuelles
**Object.assign()**
**Description**: Copie toutes les propriétés énumérables et propres d'un ou plusieurs objets source vers un objet cible.
**Syntaxe**: `Object.assign(target, ...sources)`
**Exemple**:
`let target = { a: 1 };`
`let source = { b: 2 };`
`Object.assign(target, source); // { a: 1, b: 2 }`
**Exceptions**: Aucune.
**Points à faire attention**: Modifie l'objet cible.
**Object.create()**
**Description**: Crée un nouvel objet avec le prototype spécifié et les propriétés.
**Syntaxe**: `Object.create(proto, propertiesObject)`
**Exemple**:
`let proto = { x: 1 };`
`let obj = Object.create(proto); // { __proto__: { x: 1 } }`
**Exceptions**: Aucune.
**Points à faire attention**: Utilise le prototype spécifié.
**Object.defineProperties()**
**Description**: Définit plusieurs propriétés sur un objet.
**Syntaxe**: `Object.defineProperties(obj, props)`
**Exemple**:
`let obj = {};`
`Object.defineProperties(obj, {`
`prop1: { value: 1, writable: true },`
`prop2: { value: 2, writable: false }`
`});`
**Exceptions**: Aucune.
**Points à faire attention**: Peut définir des propriétés non énumérables.
**Object.defineProperty()**
**Description**: Définit une nouvelle propriété directement sur un objet, ou modifie une propriété sur un objet et retourne l'objet.
**Syntaxe**: `Object.defineProperty(obj, prop, descriptor)`
**Exemple**:
`let obj = {};`
`Object.defineProperty(obj, 'prop1', { value: 1, writable: true });`
**Exceptions**: Aucune.
**Points à faire attention**: Peut définir des propriétés non énumérables.
**Object.entries()**
**Description**: Retourne un tableau des propres propriétés énumérables d'un objet donné, dans l'ordre de leur création.
**Syntaxe**: `Object.entries(obj)`
**Exemple**:
`let obj = { a: 1, b: 2 };`
`Object.entries(obj); // [['a', 1], ['b', 2]]`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne un tableau de paires clé-valeur.
**Object.freeze()**
**Description**: Empêche la modification des propriétés existantes d'un objet et empêche l'ajout de nouvelles propriétés à l'objet.
**Syntaxe**: `Object.freeze(obj)`
**Exemple**:
`let obj = { a: 1 };`
`Object.freeze(obj);`
`obj.a = 2; // Ne fait rien`
**Exceptions**: Aucune.
**Points à faire attention**: L'objet devient immuable.
**Object.is()**
**Description**: Détermine si deux valeurs sont la même valeur.
**Syntaxe**: `Object.is(value1, value2)`
**Exemple**:
`Object.is(25, 25); // true`
`Object.is(NaN, NaN); // true`
**Exceptions**: Aucune.
**Points à faire attention**: Différent de `===`.
**Object.keys()**
**Description**: Retourne un tableau des propres propriétés énumérables d'un objet donné.
**Syntaxe**: `Object.keys(obj)`
**Exemple**:
`let obj = { a: 1, b: 2 };`
`Object.keys(obj); // ['a', 'b']`
**Exceptions**: Aucune.
**Points à faire attention**: Ne retourne que les clés.
**Object.values()**
**Description**: Retourne un tableau des propres valeurs énumérables d'un objet donné.
**Syntaxe**: `Object.values(obj)`
**Exemple**:
`let obj = { a: 1, b: 2 };`
`Object.values(obj); // [1, 2]`
**Exceptions**: Aucune.
**Points à faire attention**: Ne retourne que les valeurs.
### Méthodes utiles
Récupérer le type d'un objet
```javascript
const b = 'hello world !';
typeof b // Retourne : 'string'

const tab = ['hello', 34, 21];
typeof tab // retourne : 'object'

typeof 3 // Retourne 'number'
```
## Conditions
est égale
==
Deux valeurs égales
[Toutes les valeurs considéré comme true](https://developer.mozilla.org/fr/docs/Glossary/Truthy)
[Toutes les valeurs considéré comme false](https://developer.mozilla.org/fr/docs/Glossary/Falsy)
```javascript
'' == false // true
```
```javascript
0 == false // true
```
```javascript
[] == [] // false (les références aux tableaux ne sont pas égaux)
```
```javascript
'4' == 4 // true
```
===
Deux valeurs identiques
```javascript
'4' === 4 // false
```
```javascript
if (true) {
  console.log('Condition passée')
}
else if () {
  
}
else {
  console.log('Condition pas passée')
}
```
## Les fonctions
### Mots-clés
**`function`**
*Description* : Déclare une fonction classique.
*Exemple* :
```javascript
function greet(name) {
  return `Hello, ${name}`;
}
```
*Particularité* : Fonction nommée ou anonyme, hoistée (accessible avant sa déclaration).
**`return`**
*Description* : Spécifie la valeur renvoyée par une fonction.
*Exemple* :
```javascript
function add(a, b) {
  return a + b;
}
```
*Particularité* : Interrompt l'exécution de la fonction après avoir renvoyé la valeur.
**`=>` (Arrow Function)**
*Description* : Syntaxe concise pour déclarer une fonction.
*Exemple* :
```javascript
const multiply = (a, b) => a * b;
```
*Particularité* : Ne lie pas son propre contexte `this`.
**`arguments`**
*Description* : Objet implicite contenant tous les arguments passés à une fonction.
*Exemple* :
```javascript
function sum() {
  return Array.from(arguments).reduce((a, b) => a + b);
}
```
*Particularité* : Disponible uniquement dans les fonctions classiques.
**`async`**
*Description* : Déclare une fonction asynchrone qui retourne une `Promise`.
*Exemple* :
```javascript
async function fetchData() {
  return await fetch('https://api.example.com');
}
```
*Particularité* : Permet l'utilisation de `await`.
**`await`**
*Description* : Pause l'exécution d'une fonction asynchrone jusqu'à ce qu'une `Promise` soit résolue.
*Exemple* :
```javascript
const data = await fetchData();
```
*Particularité* : Utilisable uniquement dans une fonction marquée `async`.
**`default parameters`**
*Description* : Permet de définir des valeurs par défaut pour les paramètres d'une fonction.
*Exemple* :
```javascript
function greet(name = 'Guest') {
  return `Hello, ${name}`;
}
```
*Particularité* : Évite les valeurs indéfinies si aucun argument n'est fourni.
### Différent types d'initialisation
Déclaration de fonction classique
```javascript
const maFonction = function(param) {
    return param * 2;
};
```
Fonction fléché
```javascript
const maFonction = (param) => {
    return param * 2;
};

// Version courte pour une seule instruction
const maFonction = param => param * 2;
```
Expression de fonction
```javascript
function maFonction(param) {
    return param * 2;
}
```
### Fonctions usuelles
**Function.prototype.bind()**
**Description**: Crée une nouvelle fonction qui, lorsqu'elle est appelée, a sa valeur de `this` définie sur le premier argument fourni, avec un ensemble donné d'arguments précédant tout argument fourni lors de l'appel de la fonction liée.
**Syntaxe**: `func.bind(thisArg, arg1, arg2, ...)`
**Exemple**:
`function greet(greeting) {`
`console.log(greeting + ', ' + this.name);`
`}`
`let user = { name: 'John' };`
`let greetUser = greet.bind(user, 'Hello');`
`greetUser(); // 'Hello, John'`
**Exceptions**: Aucune.
**Points à faire attention**: Retourne une nouvelle fonction.
**Function.prototype.call()**
**Description**: Appelle une fonction avec un `this` donné et des arguments fournis individuellement.
**Syntaxe**: `func.call(thisArg, arg1, arg2, ...)`
**Exemple**:
`function greet(greeting) {`
`console.log(greeting + ', ' + this.name);`
`}`
`let user = { name: 'John' };`
`greet.call(user, 'Hello'); // 'Hello, John'`
**Exceptions**: Aucune.
**Points à faire attention**: Appelle la fonction immédiatement.
## Les classes
### Mots-clés
**`class`**
*Description* : Définit une classe, qui est une structure pour créer des objets.
*Exemple* : 
```javascript
class Person {}
```
*Particularité* : Utilisé pour encapsuler des propriétés et des méthodes.
**`constructor`**
*Description* : Méthode spéciale utilisée pour initialiser les objets créés par une classe.
*Exemple* :
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}
```
*Particularité* : Appelé automatiquement lors de l'instanciation avec `new`.
**`extends`**
*Description* : Permet à une classe d'hériter d'une autre classe.
*Exemple* :
```javascript
class Student extends Person {}
```
*Particularité* : Supporte l'héritage des propriétés et méthodes.
**`super`**
*Description* : Référence la classe parente et permet d'appeler son constructeur ou ses méthodes.
*Exemple* :
```javascript
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}
```
*Particularité* : Doit être appelé dans le constructeur avant d'utiliser `this`.
**`static`**
*Description* : Définit des méthodes ou propriétés statiques accessibles directement sur la classe, sans instanciation.
*Exemple* :
```javascript
class MathUtil {
  static square(x) {
    return x * x;
  }
}
console.log(MathUtil.square(4)); // 16
```
*Particularité* : Les membres statiques appartiennent à la classe, pas aux instances.
**`this`**
*Description* : Référence l'instance actuelle de la classe.
*Exemple* :
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```
*Particularité* : Dynamique, dépend du contexte d'exécution.
```java
// Définition de la classe parent
class Personne {
    // Constructeur pour initialiser les propriétés
    constructor(nom, age) {
        this.nom = nom; // Propriété "nom"
        this.age = age; // Propriété "age"
    }

    // Méthode pour afficher les informations de la personne
    sePresenter() {
        return `Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`;
    }

    // Méthode pour mettre à jour l'âge
    vieillir() {
        this.age += 1; // Incrémente l'âge de 1
        return `J'ai maintenant ${this.age} ans.`;
    }
}

// Définition de la classe enfant qui hérite de Personne
class Employe extends Personne {
    // Constructeur pour initialiser les propriétés spécifiques à Employe
    constructor(nom, age, poste) {
        super(nom, age); // Appelle le constructeur de la classe parent (Personne)
        this.poste = poste; // Propriété spécifique à Employe
    }

    // Méthode spécifique à Employe
    travailler() {
        return `${this.nom} travaille en tant que ${this.poste}.`;
    }

    // Redéfinition (override) de la méthode sePresenter()
    sePresenter() {
        return `Bonjour, je m'appelle ${this.nom}, j'ai ${this.age} ans et je suis ${this.poste}.`;
    }
}

// Utilisation des classes
const employe1 = new Employe("Bob", 40, "développeur"); // Création d'une instance d'Employe
console.log(employe1.sePresenter());                   // Affiche : Bonjour, je m'appelle Bob, j'ai 40 ans et je suis développeur.
console.log(employe1.travailler());                    // Affiche : Bob travaille en tant que développeur.
console.log(employe1.vieillir());                      // Affiche : J'ai maintenant 41 ans.
```
## Getter et setter
### Getter
Méthode appelé automatiquement lors que je souhaite récupéré la valeur d'une variable
### Setter
Méthode appelé automatiquement lors que je souhaite modifier la valeur d'une variable
### Exemple
```javascript
class Rectangle {
    constructor(largeur, hauteur) {
        this._largeur = largeur; // Propriété privée simulée avec un underscore
        this._hauteur = hauteur; // Propriété privée simulée avec un underscore
    }

    // Getter pour la largeur
    get largeur() {
        return this._largeur;
    }

    // Setter pour la largeur
    set largeur(valeur) {
        if (valeur > 0) {
            this._largeur = valeur;
        } else {
            console.error("La largeur doit être un nombre positif !");
        }
    }

    // Getter pour la hauteur
    get hauteur() {
        return this._hauteur;
    }

    // Setter pour la hauteur
    set hauteur(valeur) {
        if (valeur > 0) {
            this._hauteur = valeur;
        } else {
            console.error("La hauteur doit être un nombre positif !");
        }
    }

    // Méthode pour calculer l'aire du rectangle
    calculerAire() {
        return this._largeur * this._hauteur;
    }
}

// Utilisation de la classe avec getters et setters
const monRectangle = new Rectangle(10, 5);

// Accès aux propriétés via les getters
console.log(`Largeur : ${monRectangle.largeur}`); // Affiche : Largeur : 10
console.log(`Hauteur : ${monRectangle.hauteur}`); // Affiche : Hauteur : 5

// Modification des propriétés via les setters
monRectangle.largeur = 15;
monRectangle.hauteur = 8;

// Calcul de l'aire après modification
console.log(`Nouvelle aire : ${monRectangle.calculerAire()}`); // Affiche : Nouvelle aire : 120

// Tentative de définir une valeur négative (provoque une erreur)
monRectangle.largeur = -5; // Affiche : La largeur doit être un nombre positif !
```
## Le Sucre syntaxique
TODO A classer plus en profondeur au lieu de mettre dans un chapitre Le sucre syntaxique
### Incrémentation et décrémentation
**Description** : Le sucre syntaxique permet d'incrémenter ou de décrémenter une variable de manière concise.
**Exemple** :
```javascript
let i = 0;
i++; // i vaut maintenant 1
++i; // i vaut maintenant 2
```
**Différence entre `i++` et `++i`** :
`i++` : Incrémente `i` après avoir utilisé sa valeur actuelle.
`++i` : Incrémente `i` avant d'utiliser sa valeur.
**Exemple commenté** :
```javascript
let a = 1;
let b = a++; // b vaut 1, a vaut 2
let c = ++a; // c vaut 3, a vaut 3
```
**Exceptions et points à faire attention** : Faire attention à l'ordre d'évaluation entre `i++` et `++i` pour éviter des bugs.
### Fonctions fléchées avec un seul paramètre
**Description** : Si une fonction fléchée a un seul paramètre, les parenthèses peuvent être omises.
**Exemple** :
```javascript
const double = x => x * 2; // Au lieu de const double = (x) => x * 2;
```
**Exceptions et points à faire attention** : Cette syntaxe ne s'applique qu'aux fonctions fléchées avec un seul paramètre. Pour plusieurs paramètres ou aucun paramètre, les parenthèses sont obligatoires.
### Opérateurs de court-circuit et d'assignation conditionnelle
**Description** : Utilisation des opérateurs `||`, `&&`, `??` et `??=` pour assigner des valeurs conditionnellement.
**Exemples** :
```javascript
let a = 10;
let b = a || 5; // b vaut 10 car a est truthy
let c = a && 5; // c vaut 5 car a est truthy
let d = a ?? 5; // d vaut 10 car a n'est pas null ni undefined
a ??= 3; // a vaut 10 car a n'est pas null ni undefined
```
**Exemple avec fonctions** :
```javascript
function checkAge(age) {
  return age >= 18 ? true : false;
}
```
**Exceptions et points à faire attention** : Assurez-vous que les valeurs par défaut sont appropriées pour éviter des bugs.
### Chaînage optionnel
**Description** : Permet d'accéder à une propriété d'un objet seulement si elle existe.
**Exemple** :
```javascript
const person = { job: { name: "Developer" } };
console.log(person.job?.name); // Affiche "Developer"
console.log(person?.job?.name); // Affiche "Developer"
```
**Exceptions et points à faire attention** : Vérifiez que les propriétés existent pour éviter des erreurs de type `Cannot read property of undefined`.
### Déstructuration de tableaux et d'objets
**Description** : Permet d'extraire des valeurs de tableaux ou d'objets et de les assigner à des variables.
**Exemple avec tableaux** :
```javascript
const [premiereNote, secondeNote] = [12, 34, 13];
const [premiereNote, ...autresNotes] = [12, 34, 13]; // autresNotes vaut [34, 13]
```
**Exemple avec objets** :
```javascript
const { firstname: prenom } = { firstname: 'John', lastName: 'Doe' };
const { firstname, ...rest } = { firstname: 'John', lastName: 'Doe', age: 23 }; // rest vaut { lastName: 'Doe', age: 23 }
```
**Utilisation pratique** :
```javascript
function canDrive({ age, pays }) {
  return true;
}
canDrive({ age: 18, pays: 'FR', region: 'Texas' });
```
**Exceptions et points à faire attention** : Assurez-vous que les structures des tableaux ou objets sont bien définies pour éviter des erreurs de déstructuration.
### Valeurs par défaut pour les paramètres de fonction
**Description** : Permet de définir des valeurs par défaut pour les paramètres de fonction.
**Exemple** :
```javascript
function canDrive({ age, pays, region = 'Paris' }) {
  return true;
}
```
**Exceptions et points à faire attention** : Assurez-vous que les valeurs par défaut sont appropriées pour éviter des comportements inattendus.
### Opérateur de décomposition (Spread operator)
**Description** : Permet de créer une copie d'un tableau ou d'un objet et de le manipuler sans affecter l'original.
**Exemple avec tableaux** :
```javascript
const notes = [1, 2, 3];
const newNotes = [...notes, 4, 5]; // newNotes vaut [1, 2, 3, 4, 5]
const reversedNotes = [...notes].reverse(); // notes reste [1, 2, 3]
```
**Exemple avec objets** :
```javascript
const person = { firstname: 'John', lastname: 'Doe' };
const newPerson = { ...person, firstname: 'Jane' }; // newPerson vaut { firstname: 'Jane', lastname: 'Doe' }
const anotherPerson = { firstname: 'Jane', ...person }; // anotherPerson vaut { firstname: 'John', lastname: 'Doe' }
```
**Exceptions et points à faire attention** : Faire attention à l'ordre des propriétés lors de la fusion d'objets pour éviter des écrasements non désirés.
### Condition ternaire
**Description** : Permet d'écrire des conditions de manière concise.
**Exemple** :
```javascript
const age = 18;
const msg = age >= 18 ? 'Majeur' : 'Mineur'; // msg vaut 'Majeur'
```
**Conseil** : Éviter d'utiliser la condition ternaire pour des conditions complexes et longues.
**Exceptions et points à faire attention** : Utiliser la condition ternaire uniquement pour des conditions simples pour maintenir la lisibilité du code.
## Les Timers
`Date.now()`
Récupère le [timestamp](timestamp.md) actuel en millisecondes depuis le 1er janvier 1970 (époque Unix)
Exemple :
```javascfunction
  const timestamp = Date.now();
  console.log(`${eventName} s'est produit à ${new Date(timestamp).toISOString()}`);
}

logEvent('Utilisateur connecté');

s.
}
```
`setTimeout()`
Exécute du code après un certain délai
Syntaxe :
```javascript
setTimeout(code, delay)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
```
Exemple :
```javascript
setTimeout(() => {
  console.log('Ce message apparaît après 2 secondes');
}, 2000);
```
Particularités :
Retourne un identifiant de timer qui peut être utilisé avec `clearTimeout()` pour annuler le timer.
Le délai est en millisecondes.
`setInterval()`
Exécute du code de manière répétée à intervalles réguliers
Syntaxe :
```javascript
setInterval(code, delay)
setInterval(functionRef, delay)
setInterval(functionRef, delay, param1)
setInterval(functionRef, delay, param1, param2)
setInterval(functionRef, delay, param1, param2, /* …, */ paramN)
```
Exemple :
```javascript
setInterval(() => {
  console.log('Ce message apparaît toutes les 2 secondes');
}, 2000);
```
Particularités :
Retourne un identifiant de timer qui peut être utilisé avec `clearInterval()` pour annuler le timer.
Le délai est en millisecondes.
`clearInterval()`
Supprime le timer créé par `setInterval()`, ce qui arrête l'exécution répétée de l'action
Syntaxe :
```javascript
clearInterval(idDeLInterval);
```
Exemple :
```javascript
const intervalId = setInterval(() => {
  console.log('Ce message apparaît toutes les 2 secondes');
}, 2000);
clearInterval(intervalId); // Arrête le timer
```
`clearTimeout()`
Supprime le timer créé par `setTimeout()`, ce qui annule l'exécution différée de l'action
Syntaxe :
```javascript
clearTimeout(idDeLTimeout);
```
Exemple :
```javascript
const timeoutId = setTimeout(() => {
  console.log('Ce message apparaît après 2 secondes');
}, 2000);
clearTimeout(timeoutId); // Annule le timer
```
Mots-clés
Callback
En programmation, c'est une fonction que vous fournissez à une 
autre fonction, pour qu'elle soit exécutée une fois que cette dernière a
terminé sa tâche.
## Promise
[Cours sur les Promises en JS rédigé par ChatGPT](./Cours%20sur%20les%20Promises%20en%20JS%20rédigé%20par%20ChatGPT.md)
**Introduction aux Promises et leur importance**
**Définition** : Une Promise est un objet qui représente l'achèvement ou l'échec éventuel d'une opération asynchrone. Elle sert de place-holder pour une valeur future, permettant de gérer les opérations asynchrones de manière plus lisible et maintenable par rapport aux callbacks traditionnels.
**Callbacks** : Les callbacks sont des fonctions passées en argument à d'autres fonctions et exécutées ultérieurement. Ils sont souvent utilisés pour gérer des opérations asynchrones, mais peuvent conduire à un "callback hell" où le code devient difficile à lire et à maintenir.
**Importance des Promises** : Les Promises permettent de structurer le code asynchrone de manière plus claire et maintenable. Elles sont essentielles pour gérer des opérations comme les appels API, les téléchargements de fichiers, ou les temporisations.
**Comment utiliser les Promises**
**Création d'une Promise** : Utilisation du constructeur `new Promise((resolve, reject) => { ... })`.
**Syntaxe** :
```javascript
new Promise((resolve, reject) => { ... });
```
**Paramètres** :
**resolve** : `function` - Fonction appelée lorsque l'opération asynchrone est terminée avec succès.
**reject** : `function` - Fonction appelée lorsque l'opération asynchrone échoue.
**Exemple** :
```javascript
// Exemple de création d'une Promise
const isTrue = true;
const newPromise = new Promise((resolve, reject) => {
  if (isTrue) {
    resolve("Success"); // La Promise est résolue avec succès
  } else {
    reject("Error"); // La Promise est rejetée avec une erreur
  }
});
```
**Méthodes de Promise.prototype**
**then()**
**Syntaxe** :
```javascript
promise.then(onFulfilled, onRejected);
```
**Paramètres** :
**onFulfilled** : `function` (optionnel) - Fonction appelée lorsque la Promise est résolue.
**onRejected** : `function` (optionnel) - Fonction appelée lorsque la Promise est rejetée.
**Exemple** :
```javascript
// Utilisation de then() pour traiter la valeur résolue
newPromise.then(response => {
  console.log(response); // "Success"
});
```
**catch()**
**Syntaxe** :
```javascript
promise.catch(onRejected);
```
**Paramètres** :
**onRejected** : `function` - Fonction appelée lorsque la Promise est rejetée.
**Exemple** :
```javascript
// Utilisation de catch() pour gérer les erreurs
newPromise.catch(error => {
  console.log(error); // "Error"
});
```
**finally()**
**Syntaxe** :
```javascript
promise.finally(onFinally);
```
**Paramètres** :
**onFinally** : `function` - Fonction appelée quelle que soit l'issue de la Promise.
**Exemple** :
```javascript
// Utilisation de finally() pour exécuter du code quelle que soit l'issue
newPromise.finally(() => {
  console.log("Promise settled");
});
```
**Encapsulation et chaînage de Promises**
**Encapsulation** : Utiliser des fonctions qui retournent des Promises pour encapsuler des opérations asynchrones.
**Chaînage** : Utiliser `then()` pour chaîner plusieurs opérations asynchrones.
**Exemple** :
```javascript
// Exemple de chaînage de Promises
function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Result 1");
    }, 1000);
  });
}

function asyncOperation2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${data} and Result 2`);
    }, 1000);
  });
}

asyncOperation1()
  .then(data => asyncOperation2(data))
  .then(finalData => console.log(finalData)) // "Result 1 and Result 2"
  .catch(error => console.error(error));
```
**Exemple avec setTimeout**
**Fonction wait** : Créer une fonction qui utilise `setTimeout` et retourne une Promise.
**Syntaxe** :
```javascript
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
```
**Paramètres** :
**ms** : `number` - Nombre de millisecondes avant que la Promise soit résolue.
**Exemple** :
```javascript
// Utilisation de la fonction wait
wait(1000).then(() => console.log("Waited for 1 second"));
```
**Fonctions asynchrones avec async/await**
**async**
**Syntaxe** :
```javascript
async function nomDeLaFonction() { ... }
```
**Description** : Déclare une fonction asynchrone qui retourne une Promise.
**Exemple** :
```javascript
// Fonction asynchrone utilisant async/await
async function fetchData() {
  // Simulation d'une opération asynchrone
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}
```
**await**
**Syntaxe** :
```javascript
let result = await nomDeLaFonction();
```
**Description** : Pause l'exécution de la fonction jusqu'à ce que la Promise soit résolue.
**Exemple** :
```javascript
// Utilisation de await dans une fonction asynchrone
async function example() {
  let data = await fetchData();
  console.log(data); // "Data fetched"
}

example();
```
**Gestion des erreurs avec try/catch**
**Syntaxe** :
```javascript
try {
  // Code qui peut générer une erreur
} catch (error) {
  // Gestion de l'erreur
}
```
**Description** : Utiliser `try/catch` pour gérer les erreurs dans les fonctions asynchrones.
**Exemple** :
```javascript
// Gestion des erreurs avec try/catch
async function example() {
  try {
    let data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

example();
```
**Top-level await**
**Définition** : Permet d'utiliser `await` en dehors de toute fonction asynchrone, directement dans le corps du module.
**Utilisation** : Simplifie le code en évitant d'avoir à encapsuler tout dans des fonctions asynchrones.
**Exemple** :
```javascript
// Utilisation de top-level await
const data = await fetchData();
console.log(data); // "Data fetched"
```
**Promise.resolve() et Promise.reject()**
**Promise.resolve(value)**
**Syntaxe** :
```javascript
Promise.resolve(value);
```
**Paramètres** :
**value** : `any` - Valeur avec laquelle la Promise est résolue.
**Exemple** :
```javascript
// Utilisation de Promise.resolve
let resolvedPromise = Promise.resolve(42);
resolvedPromise.then(value => console.log(value)); // 42
```
**Promise.reject(reason)**
**Syntaxe** :
```javascript
Promise.reject(reason);
```
**Paramètres** :
**reason** : `any` - Raison pour laquelle la Promise est rejetée.
**Exemple** :
```javascript
// Utilisation de Promise.reject
let rejectedPromise = Promise.reject("Error");
rejectedPromise.catch(reason => console.log(reason)); // "Error"
```
**Méthodes statiques de Promise**
**Promise.all(iterable)**
**Syntaxe** :
```javascript
Promise.all(iterable);
```
**Paramètres** :
**iterable** : `iterable` - Itérable contenant les Promises à attendre.
**Description** : Retourne une Promise qui est résolue quand toutes les Promises de l'itérable sont résolues.
**Exemple** :
```javascript
// Utilisation de Promise.all
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // [3, 42, "foo"]
});
```
**Promise.allSettled(iterable)**
**Syntaxe** :
```javascript
Promise.allSettled(iterable);
```
**Paramètres** :
**iterable** : `iterable` - Itérable contenant les Promises à attendre.
**Description** : Retourne une Promise qui est résolue quand toutes les Promises de l'itérable sont réglées (résolues ou rejetées).
**Exemple** :
```javascript
// Utilisation de Promise.allSettled
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2, 'bar'];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);
// "fulfilled"
// "rejected"
// "fulfilled"
```
**Promise.any(iterable)**
**Syntaxe** :
```javascript
Promise.any(iterable);
```
**Paramètres** :
**iterable** : `iterable` - Itérable contenant les Promises à attendre.
**Description** : Retourne une Promise qui est résolue dès que l'une des Promises de l'itérable est résolue.
**Exemple** :
```javascript
// Utilisation de Promise.any
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => {
  console.log(value); // "quick"
});
```
**Promise.race(iterable)**
**Syntaxe** :
```javascript
Promise.race(iterable);
```
**Paramètres** :
**iterable** : `iterable` - Itérable contenant les Promises à attendre.
**Description** : Retourne une Promise qui est résolue ou rejetée dès que l'une des Promises de l'itérable est réglée.
**Exemple** :
```javascript
// Utilisation de Promise.race
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // "two"
});
```
**Exécution immédiate du code dans une Promise**
**Explication** : Le code dans le constructeur de la Promise est exécuté immédiatement, mais la Promise elle-même peut être résolue ou rejetée plus tard.
**Exemple** :
```javascript
// Exécution immédiate du code dans une Promise
let promise = new Promise((resolve, reject) => {
  console.log("This runs immediately");
  resolve(123);
});

promise.then(value => console.log(value)); // 123
```
**Bonnes pratiques et conventions**
**Utilisation de async/await** : N'utilisez `async` que si la fonction contient un `await`.
**Gestion des erreurs** : Toujours utiliser `try/catch` avec `await` pour gérer les erreurs.
**Chaînage de Promises** : Préférer `async/await` pour un code plus lisible, mais utiliser `then()` pour des chaînes simples.
**Exercice pratique avec corrigé**
**Exercice** : Créer une fonction asynchrone qui utilise `setTimeout` pour simuler une opération asynchrone et afficher le résultat.
**Exemple** :
```javascript
// Exercice pratique
function asyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operation completed");
    }, 1000);
  });
}

async function example() {
  try {
    let result = await asyncOperation();
    console.log(result); // "Operation completed"
  } catch (error) {
    console.error(error);
  }
}

example();
```
## Appel HTTP avec `fetch()`
La méthode `fetch()` permet de faire des appels HTTP pour récupérer des ressources sur le réseau
Elle utilise le système de promesses en JavaScript
Syntaxe de base :
```javascript
fetch(url, options)
```
`url` : chaîne de caractères indiquant l'URL de la ressource à récupérer
`options` : objet optionnel contenant des paramètres pour la requête (méthode, en-têtes, etc.)
Exemple simple :
```javascript
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  .then(r => console.log('La réponse', r))
```
Cet exemple récupère les 10 premiers posts d'une API de test
Options importantes à connaitre
### method
**Description** : Spécifie la méthode HTTP à utiliser pour la requête.
**Utilisation** : Définit le type d'action à effectuer sur la ressource.
**Valeurs courantes** :
GET : Récupère des données (par défaut)
POST : Envoie des données pour créer une ressource
PUT : Met à jour une ressource existante
DELETE : Supprime une ressource
PATCH : Modifie partiellement une ressource
**Exemple** :
```javascript
fetch('https://api.example.com/users', {
  method: 'POST'
})
```
**Importance** : Détermine comment le serveur traitera la requête.
### headers
**Description** : Permet de définir des en-têtes HTTP personnalisés pour la requête.
**Utilisation** : Fournit des informations supplémentaires au serveur sur la requête ou le client.
**Format** : Objet contenant des paires clé-valeur représentant les en-têtes.
**En-têtes courants** :
Content-Type : Spécifie le type de contenu envoyé
Authorization : Envoie des informations d'authentification
**Exemple** :
```javascript
fetch('https://api.example.com/data', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  }
})
```
**Importance** : Permet de personnaliser la communication avec le serveur, comme spécifier le format des données ou s'authentifier.
### body
**Description** : Contient les données à envoyer au serveur.
**Utilisation** : Transmet des informations dans le corps de la requête, généralement pour les méthodes POST, PUT, ou PATCH.
**Formats courants** :
Chaîne JSON (avec `JSON.stringify()`)
FormData pour les données de formulaire
Blob pour les fichiers
**Exemple** :
```javascript
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Jean Dupont',
    email: 'jean@example.com'
  })
})
```
**Importance** : Permet d'envoyer des données complexes au serveur de manière structurée.
La promesse est résolue avec un objet `Response`
Contient des informations sur la réponse du serveur
Propriété `ok` : vraie si le statut de la réponse est entre 200 et 299
Méthodes importantes :
`text()` : renvoie le texte de la réponse
`json()` : parse la réponse au format JSON
Exemple plus complet :
```javascript
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
  headers: {
    Accept: 'application/json'
  }
})
.then(r => {
  if (r.ok) {
    return r.json()
  } else {
    throw new Error('Erreur serveur', {cause: r})
  }
})
.then(posts => {
  console.log('La liste des articles : ', posts)
})
.catch(e => {
  console.error('Une erreur est survenue', e)
})
```
Cet exemple vérifie si la réponse est OK, parse le JSON, et gère les erreurs
Envoi de données au format JSON :
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({title: 'Hello world'})
})
```
Cet exemple envoie un nouveau post à l'API
Gestion des erreurs :
Utiliser `try/catch` avec `async/await` ou `.catch()` avec les promesses
Vérifier la propriété `ok` de la réponse pour détecter les erreurs HTTP
Annulation d'une requête :
Utiliser un `AbortController` pour créer un signal d'annulation
```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch('https://example.com/data', { signal })
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
  if (err.name === 'AbortError') {
    console.log('Fetch aborted');
  } else {
    console.error('Autre erreur:', err);
  }
});

// Pour annuler la requête :
controller.abort();
```
Cet exemple montre comment annuler une requête en cours
Bonnes pratiques :
Toujours gérer les erreurs potentielles
Utiliser `async/await` pour un code plus lisible
Vérifier le statut de la réponse avant de traiter les données
Utiliser les en-têtes appropriés pour spécifier le type de contenu attendu et envoyé
Analogie :
Imaginez `fetch()` comme un coursier. Vous lui donnez une adresse (URL) et éventuellement des instructions spéciales (options). Le coursier part chercher votre colis (données) et revient avec une réponse. Vous devez ensuite ouvrir le colis (parser la réponse) pour voir ce qu'il contient.
## Les modules
