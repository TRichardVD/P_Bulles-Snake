## Introduction aux Promises
### Qu’est-ce qu’une Promise ?
Une promise est un objet JavaScript qui représente la valeur éventuelle d’une opération asynchrone.
Elle sert de “contrat” : une opération asynchrone finira soit par réussir (resolve), soit par échouer (reject).
### Pourquoi utiliser des Promises ?
Avant les promises, on utilisait des callbacks, provoquant souvent un “callback hell”.
Les promises simplifient la gestion de l’asynchronie, rendant le code plus lisible et plus maintenable.
### Comparaison avec les callbacks
Callbacks : Imbriquer plusieurs fonctions asynchrones conduit à un code illisible.
Promises : Permettent de chaîner les opérations et de gérer plus facilement les erreurs.
### Exemple sans Promise (callback)
```javascript
function getData(callback) {
setTimeout(() => {
	const data = { message: "Hello, world!" };
	callback(data);
}, 1000);
}

getData((result) => {
console.log(result.message); // "Hello, world!"
});
```
### Exemple avec Promise
```javascript
function getData() {
return new Promise((resolve, reject) => {
	setTimeout(() => {
		const data = { message: "Hello, world!" };
		resolve(data);
	}, 1000);
});
}

getData()
.then((result) => {
	console.log(result.message); // "Hello, world!"
})
.catch((error) => {
	console.error(error);
});
```
### Exercice
Exercice :
Créez une fonction `delayedMessage(msg, delay)` retournant une promise.
Après `delay` ms, la promise se résout avec `msg`.
Appelez-la avec 1s de délai et affichez le message.
Solution :
```javascript
function delayedMessage(msg, delay) {
return new Promise((resolve) => {
	setTimeout(() => {
		resolve(msg);
	}, delay);
});
}

delayedMessage("Ceci est un message retardé", 1000)
.then((message) => {
	console.log(message);
});
```
## Les concepts fondamentaux des Promises
### Les états d’une Promise
Pending : En attente, l’opération n’est pas terminée.
Fulfilled : Promise tenue, le résultat est disponible.
Rejected : Promise rejetée, une erreur est survenue.
### Le chaînage de Promises
On peut chaîner les `.then()` pour exécuter des opérations asynchrones séquentiellement.
```javascript
getData()
.then((result) => {
console.log(result.message);
return "Deuxième étape";
})
.then((next) => {
console.log(next);
})
.catch((error) => {
console.error(error);
});
```
### Gestion des erreurs
Si une erreur survient, `.catch()` la capture.
```javascript
new Promise((resolve, reject) => {
reject(new Error("Quelque chose s’est mal passé"));
})
.then((data) => {
console.log("Jamais exécuté");
})
.catch((err) => {
console.error("Erreur capturée :", err.message);
});
```
### Exercice
Exercice :
Créez `simulateRequest(shouldFail)` retournant une promise.
Si `shouldFail` est faux : résout après 500ms avec `"Succès !"`.
Si vrai : rejette avec `"Échec de la requête"`.
Appelez `simulateRequest(false)` puis chaînez `.then()` et `.catch()`.
Solution :
```javascript
function simulateRequest(shouldFail) {
return new Promise((resolve, reject) => {
	setTimeout(() => {
		if (shouldFail) {
			reject(new Error("Échec de la requête"));
		} else {
			resolve("Succès !");
		}
	}, 500);
});
}

simulateRequest(false)
.then((message) => {
	console.log("La requête a réussi :", message);
})
.catch((error) => {
	console.error("Erreur :", error.message);
});
```
## Les méthodes principales : then, catch, finally
### then()
`promise.then(onFulfilled, onRejected)`
Souvent utilisé avec un seul argument puis `.catch()` séparé.
### catch()
`promise.catch(onRejected)`
Capture toutes les erreurs de la chaîne.
### finally()
`promise.finally(onFinally)`
S’exécute, succès ou échec, idéal pour le nettoyage.
### Exemple complet
```javascript
function fetchData() {
return new Promise((resolve, reject) => {
	setTimeout(() => {
		const success = Math.random() > 0.5;
		if (success) {
			resolve({ data: "Données récupérées" });
		} else {
			reject(new Error("Impossible de récupérer les données"));
		}
	}, 1000);
});
}

fetchData()
.then((result) => {
	console.log("Succès :", result.data);
})
.catch((error) => {
	console.error("Erreur :", error.message);
})
.finally(() => {
	console.log("Opération terminée");
});
```
### Exercice
Exercice :
Créez `randomDelayMessage()` qui résout une promise avec `"Opération terminée"` après 500ms à 1500ms.
Utilisez `.then()`, `.catch()`, `.finally()`.
Solution :
```javascript
function randomDelayMessage() {
return new Promise((resolve, reject) => {
	const delay = 500 + Math.random() * 1000;
	setTimeout(() => {
		resolve("Opération terminée");
	}, delay);
});
}

randomDelayMessage()
.then((msg) => {
	console.log("Succès :", msg);
})
.catch((err) => {
	console.error("Erreur :", err.message);
})
.finally(() => {
	console.log("Nettoyage / Fin de l'opération");
});
```
## Les méthodes avancées des Promises
### Promise.all()
Attend que toutes les promises soient résolues ou qu’une soit rejetée.
```javascript
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
.then((results) => {
console.log(results); // [10, 20, 30]
})
.catch((err) => {
console.error("Erreur :", err);
});
```
### Promise.race()
Se résout ou se rejette dès la première promise terminée (succès ou échec).
```javascript
const slow = new Promise((resolve) => setTimeout(() => resolve("Lent"), 2000));
const fast = new Promise((resolve) => setTimeout(() => resolve("Rapide"), 500));

Promise.race([slow, fast])
.then((result) => {
console.log(result); // "Rapide"
});
```
### Promise.any()
Résolue dès la première promise résolue. Si toutes échouent, rejette une `AggregateError`.
```javascript
const pA = Promise.reject(new Error("Échec A"));
const pB = new Promise((resolve) => setTimeout(() => resolve("Succès B"), 1000));
const pC = Promise.resolve("Succès C");

Promise.any([pA, pB, pC])
.then((value) => {
console.log(value); // "Succès C"
})
.catch((err) => {
console.error("Toutes les promesses ont échoué :", err);
});
```
### Promise.allSettled()
Attend que toutes soient résolues ou rejetées et renvoie leurs états.
```javascript
const pX = Promise.resolve("OK");
const pY = Promise.reject(new Error("Échec"));
const pZ = Promise.resolve("Données");

Promise.allSettled([pX, pY, pZ])
.then((results) => {
console.log(results);
// [
//   { status: "fulfilled", value: "OK" },
//   { status: "rejected", reason: Error("Échec") },
//   { status: "fulfilled", value: "Données" }
// ]
});
```
### Quand utiliser ces méthodes ?
`Promise.all` : Besoin de toutes les données avant de continuer.
`Promise.race` : Intérêt pour le résultat le plus rapide.
`Promise.any` : Le premier succès suffit.
`Promise.allSettled` : Connaître l’état de chaque promesse, succès ou échec.
### Exercice
Exercice :
Créez `p1`, `p2`, `p3` :
`p1` : résolue en 1s avec "P1 OK"
`p2` : résolue en 2s avec "P2 OK"
`p3` : rejetée immédiatement "P3 Échec"
Testez `Promise.all` puis `Promise.allSettled`.
Solution :
```javascript
const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 OK"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 OK"), 2000));
const p3 = Promise.reject(new Error("P3 Échec"));

Promise.all([p1, p2, p3])
.then((results) => {
	console.log("ALL Résultat :", results);
})
.catch((err) => {
	console.error("ALL Erreur :", err.message); // "P3 Échec"
});

Promise.allSettled([p1, p2, p3])
.then((results) => {
	console.log("ALLSETTLED Résultats :", results);
});
```
## Particularités, pièges et bonnes pratiques
### Pièges courants
Ne pas retourner de promise dans `.then()` empêche le chaînage correct.
Oublier `.catch()` peut laisser des erreurs non gérées.
Éviter l’imbrication excessive de promises.
Ne pas mélanger inutilement callbacks et promises.
### Bonnes pratiques
Toujours prévoir un `.catch()` en fin de chaîne.
Utiliser `.finally()` pour le nettoyage.
Préférer `Promise.all` pour le parallèle, `.then()` en série.
Commenter et nommer clairement les fonctions asynchrones.
Tester régulièrement le code asynchrone.
### Analogie concrète
Imaginez que chaque promise est une commande au restaurant :
Pending : en cuisine.
Fulfilled : plat servi.
Rejected : plat impossible à préparer.
### Exercice
Exercice :
Chaînez 3 promises représentant :
Préparation d’une entrée (500ms)
Préparation d’un plat principal (1000ms)
Préparation d’un dessert (700ms)
Gérez erreurs avec `.catch()` et affichez un message final avec `.finally()`.
Solution :
```javascript
function preparerEntree() {
return new Promise((resolve) => {
	setTimeout(() => {
		console.log("Entrée préparée");
		resolve("Entrée OK");
	}, 500);
});
}

function preparerPlatPrincipal() {
return new Promise((resolve) => {
	setTimeout(() => {
		console.log("Plat principal prêt");
		resolve("Plat OK");
	}, 1000);
});
}

function preparerDessert() {
return new Promise((resolve) => {
	setTimeout(() => {
		console.log("Dessert servi");
		resolve("Dessert OK");
	}, 700);
});
}

preparerEntree()
.then((entree) => {
	console.log(entree);
	return preparerPlatPrincipal();
})
.then((plat) => {
	console.log(plat);
	return preparerDessert();
})
.then((dessert) => {
	console.log(dessert);
})
.catch((error) => {
	console.error("Erreur durant la préparation :", error.message);
})
.finally(() => {
	console.log("Fin du service !");
});
```
## Conclusion
Vous maîtrisez maintenant les principes fondamentaux des promises :
Compréhension des états (pending, fulfilled, rejected)
Utilisation de then, catch, finally
Méthodes avancées (Promise.all, race, any, allSettled)
Pièges à éviter et bonnes pratiques à adopter
Les promises constituent la base d’`async/await` que vous pourrez explorer par la suite.
