import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore, RefreshScore, ScoreboardData} from "./score.js";
import { API_URL, API_TOKEN } from './config.js';

const canvas = document.getElementById("gameCanvas"); 
const ctx = canvas.getContext("2d");

// Variables du jeu
const box = 20;               // Taille d'une case en pixels
let gameSpeed = 200;          // Vitesse du jeu en ms
let newSpeed = 200;           // Nouvelle vitesse du jeu en ms afin d'éviter le changement de vitesse en cours de jeu ce qui est de la triche
let snake;                    // Serpent du jeu
let food;                     // Nourriture du jeu
let direction = "RIGHT";      // Direction du serpent
let score = 0;                // Score du joueur actuel
let gameInterval;             // Variable pour stocker l'identifiant de l'intervalle
let DateOfStart = Date.now(); // Date de début du jeu
let DurationGame = 0;         // Durée de la partie en secondes
let DateOfLastRefresh = Date.now();   // Date du dernier rafraichissement du jeu
let gameIsPaused = false;     // Variable pour stocker l'état de la pause
let gameIsInProgress = false; // Variable pour stocker l'état du jeu

// Variables pour le meilleur score
let BestScore = 0;            // Meilleur score du joueur
let BestTimer = 0;            // Meilleur temps pour le meilleur score

let DurationBreak = 0;        // Durée de la pause en secondes
let DateOfLastSnakeTurn = Date.now(); // Date du dernier tour du serpent

// Variables de style
let currentBgColor = '#008000';      // couleur de fond par défaut
let currentMenuBgColor = '#adff2f';  // couleur menu par défaut

// Fonctions pour le jeu

/**
 * Fonciton pour démarrer le jeu
 */
function startGame() 
{
  // Réinitialisation des variables
  gameSpeed = newSpeed;
  score = 0;
  direction = "RIGHT"

  // Au démarrage, cacher le menu de pause
  document.getElementById("menuPause").style.display = "none"

  // Initialisation du serpent
  snake = initSnake();
  // Initialisation de la nourriture et vérification qu'elle n'est pas sur le serpent
  do {
    food = generateFood(box, canvas);
  } while (snake.some(segment => segment.x === food.x && segment.y === food.y));
  // Initialisation du score
  DateOfStart = Date.now(); // Stockage de la date de début du jeu
  
  // Lancement du jeu
  gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
  gameIsInProgress = true;
}

/**
 * Fonction pour arrêter le jeu
 */
function StopGame() {
  // Arrête le jeu
  gameIsInProgress = false;
  clearInterval(gameInterval);

  // Affiche le score final dans la console
  console.log(`Fin du jeu. Score : ${score}`)
 
  // Met à jour la durée de la partie
  DurationGame = Math.floor((Date.now() - DateOfStart)/1000)

  // Met à jour le meilleur score si le score actuel est supérieur
  if (score > BestScore) {
    BestScore = score;
    BestTimer = DurationGame;
    document.getElementById("BestScoreDisplay").textContent = BestScore;
    document.getElementById("BestTimerDisplay").textContent = BestTimer;
    document.cookie = `BestTimer=${BestTimer};`
    document.cookie = `BestScore=${BestScore};`
   
    console.log(document.cookie)
  }
  // Met à jour le meilleur timer si le timer actuel est supérieur
  else if (DurationGame > BestTimer && score === BestScore) {
    BestTimer = DurationGame;
    document.getElementById("BestTimerDisplay").textContent = BestTimer;
    document.cookie = `BestTimer=${BestTimer};`
    document.cookie = `BestScore=${BestScore};`
  }

  // Envoi du score au serveur si le score a battu un des 5 meilleurs scores et supprime le plus petit score pour toujours en avoir 5
  RefreshScore(BestScore, BestTimer)
  .then(r => {
    // Trie les données pour avoir les 5 meilleurs scores dans l'order décroissant
    ScoreboardData.sort((a, b) => {
      if (a.score === b.score) {
       return a.timer - b.timer
     }
     return b.score - a.score;
   });
    
   // Vérifie si le score actuel est supérieur à un des 5 meilleurs scores ou si il y a moins que 5 scores
    if (score > ScoreboardData[4].score || (score === ScoreboardData[4].score && DurationGame < ScoreboardData[4].timer || ScoreboardData.length < 5)) {
      
       // Supprime le score le plus bas si il y a déjà 5 scores
      if (ScoreboardData.length >= 5) {
        ScoreboardData.pop();
      }
      ScoreboardData.push({
        score: score,
        timer: DurationGame
      });

      // Trie à nouveau après avoir ajouté le nouveau score
      ScoreboardData.sort((a, b) => {
        if (a.score === b.score) {
         return a.timer - b.timer
       }
       return b.score - a.score;
     }); 

      fetch(API_URL, {
        method: 'PUT', // Utilise PUT pour mettre à jour l'ensemble de l'enregistrement
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': API_TOKEN,
        },
        body: JSON.stringify(ScoreboardData)
      })
      .then (r => {
        // Rafraichit le score
        RefreshScore(BestScore, BestTimer);
      });
    }
  });

  // Modification du titre du menu de pause
  document.getElementById("PauseMenuTitle").textContent = "Partie terminée"
  
  // Affiche le menu pause
  document.getElementById("menuPause").style.display = "block"
  document.getElementById("startButton").style.display = "block"
  for (let element of document.getElementsByClassName("Stat")) {
    element.style.display = "block"
  }
  
  // Met à jour les statistiques
  document.getElementById("timer").textContent = DurationGame
  document.getElementById("score").textContent = score;

  // Mettre les valeurs par défaut dans le cas où l'utilisateur etait dans le menu de pause
  gameIsPaused = false;
  document.getElementById("ReprendreJeu").style.display = "none"               // Cacher le bouton pour reprendre le jeu
  document.getElementById("LeaveGame").style.display = "none"                    // Cacher le bouton pour relancer le jeu


}


/**
 * 
 * Fonction appelée à chaque intervalle de temps pour mettre à jour le jeu.
 * 
 */
function draw() {  

  DateOfLastRefresh = Date.now();

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const newHead = moveSnake(snake, direction, box);

  snake.unshift(newHead);

  // Supprime le dernier segment du serpent
  // TODO - à mettre à jour lorsque l'on va gérer la nourriture
  snake.pop();

  // Vérifie si le serpent est entré en collision avec lui-même ou avec un mur puis arrête le jeu
  if (checkCollision(newHead, snake) || checkWallCollision(newHead, canvas, box))
    {
      StopGame();

      return;
    }
  else {
    // Vérifie si le serpent a mangé la nourriture
    if (food.x === newHead.x && food.y === newHead.y)
    {
      score += 1;

      // Générer une nouvelle position pour la nourriture et si elle est sur le serpent, en générer une nouvelle
      do {
        food = generateFood(box, canvas)
      } while (snake.some(segment => segment.x === food.x && segment.y === food.y));
      
      snake.push({x: snake[snake.length - 1].x, 
                  y: snake[snake.length - 1].y})
    }

    // Afficher les objets
    drawSnake(ctx, snake, box);
    drawFood(ctx, food, box);
    drawScore(ctx, score);
  }
}

function ToPause() {
  DurationBreak = Math.floor((Date.now() - DateOfStart)/1000);
  gameIsPaused = true;

  // Arrête le jeu
  clearInterval(gameInterval);

  // Affiche le menu de pause et cache les autres éléments
  document.getElementById("PauseMenuTitle").textContent = "Menu de Pause"       // Change le titre du menu de pause
  document.getElementById("menuPause").style.display = "block"                  // Affiche le menu de pause
  for (let element of document.getElementsByClassName("Stat")) {                // Affiche les élements de statistiques
    element.style.display = "block"
  }
  document.getElementById("timer").textContent = Math.floor((Date.now() - DateOfStart)/1000)  // Affiche le temps écoulé
  document.getElementById("score").textContent = score;                                       // Affiche le score actuel
  document.getElementById("startButton").style.display = "none"                               // Cache le bouton de démarrage du jeu
  document.getElementById("ReprendreJeu").style.display = "block"                             // Affiche le bouton pour reprendre le jeu
  document.getElementById("LeaveGame").style.display = "block"                             // Affiche le bouton pour relancer le jeu

}

// Gestion des touches du clavier
document.addEventListener("keydown", (event) => {
  if (event.key === " " && !gameIsInProgress) {
    // Démarrer le jeu
    startGame();
  }
  else if (event.key === " " && !gameIsPaused && gameIsInProgress) {
    // Mettre le jeu en pause
    ToPause();
    return;
  }
  else if (event.key === " " && gameIsPaused && gameIsInProgress) {
    // Reprendre le jeu
    RestartGame();
    return;
  }
  else if ((Date.now() - DateOfLastSnakeTurn) >= (Date.now() - DateOfLastRefresh) && gameIsInProgress) {
    direction = handleDirectionChange(event, direction);
    DateOfLastSnakeTurn = Date.now();
  }
  
});

/**
 * 
 * Permet de redémarrer le jeu après une pause
 * 
 */
function RestartGame() {
  // Reprendre le jeu
  if (gameIsPaused === false) {
    return;
  }
  gameIsPaused = false;
  DateOfStart = Date.now() - DurationBreak*1000;
  gameInterval = setInterval(draw, gameSpeed);
  document.getElementById("menuPause").style.display = "none" 
  document.getElementById("ReprendreJeu").style.display = "none"               // Cacher le bouton pour reprendre le jeu
  document.getElementById("LeaveGame").style.display = "none"                    // Cacher le bouton pour relancer le jeu

  return;
}

// Si l'utilisateur essaie de quitter la page, on lui demande confirmation si une partie est en cours
window.addEventListener('beforeunload', function (e) {
  if (gameIsInProgress) {
    e.preventDefault();
    return 'Une partie est en cours. Êtes-vous sûr de vouloir quitter la page ?';
  }
});

// Code executé au chargement de la page

// Mettre à jour le meilleur score selon la valeur du cookie
if (document.cookie.includes("BestScore")) {
  const cookies = document.cookie.split("; ");
  const bestScoreCookie = cookies.find(cookie => cookie.startsWith("BestScore="));
  if (bestScoreCookie) {
    BestScore = bestScoreCookie.split("=")[1];
    document.getElementById("BestScoreDisplay").textContent = BestScore
  }
  const bestTimerCookie = cookies.find(cookie => cookie.startsWith("BestTimer="));
  if (bestTimerCookie) {
    BestTimer = bestTimerCookie.split("=")[1];
    document.getElementById("BestTimerDisplay").textContent = BestTimer
  }
}

document.getElementById("startButton").onclick = () => {startGame()};

document.getElementById("ReprendreJeu").onclick = () => {RestartGame()};

document.getElementById("LeaveGame").onclick = () => {StopGame()};

document.getElementById("refreshScoreBoardButton").onclick = () => {RefreshScore(BestScore, BestTimer)};

document.getElementById("buttonSettings").onclick = () => {
  if (gameIsInProgress) {
    ToPause();
  }


  const Scoreboard = document.getElementById("settings");
  const display = Scoreboard.style.display;
  if (display === 'none' || display === 'None' || display === '') {
    Scoreboard.style.display = 'block'
  }
  else {
    Scoreboard.style.display = 'none'
  }

  document.getElementById("GamespeedErrorSetting").style.display = "none"

  document.getElementById("GamespeedSet").value = newSpeed;
  document.getElementById("backgroundColorSet").value = currentBgColor;
  document.getElementById("ColorBgMenuSet").value = currentMenuBgColor;

}

document.getElementById("SaveSettings").onclick = () => {

  if (document.getElementById("GamespeedSet").value <= 20 || document.getElementById("GamespeedSet").value >= 1000)
  {
  document.getElementById("GamespeedErrorSetting").style.display = "block";
    return;
  }

  newSpeed = document.getElementById("GamespeedSet").value;

  currentBgColor = document.getElementById("backgroundColorSet").value;
  document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementById("backgroundColorSet").value;

  document.getElementById("settings").style.backgroundColor = document.getElementById("ColorBgMenuSet").value;
  document.getElementById("menuPause").style.backgroundColor = document.getElementById("ColorBgMenuSet").value;
  document.getElementById("scoreBoard").style.backgroundColor = document.getElementById("ColorBgMenuSet").value;

  document.getElementById("settings").style.display = 'none';
  if (gameIsInProgress) {
    RestartGame();
  }
}

document.getElementById("ResetSettings").onclick = () => {
  newSpeed = 200;
  document.getElementById("GamespeedSet").value = 200;

  document.getElementById("backgroundColorSet").value = "#008000";
  document.getElementsByTagName("body")[0].style.backgroundColor = "#008000";
  currentBgColor = "#008000";

  document.getElementById("ColorBgMenuSet").value = "#adff2f";
  currentMenuBgColor = "#adff2f";
  document.getElementById("settings").style.backgroundColor = "#adff2f";
  document.getElementById("menuPause").style.backgroundColor = "#adff2f";
  document.getElementById("scoreBoard").style.backgroundColor = "#adff2f";

}

document.getElementById("buttonScoreboard").onclick = () => {
  const Scoreboard = document.getElementById("scoreBoard");
  const display = Scoreboard.style.display;
  if (display === 'none' || display === '') {
    Scoreboard.style.display = 'block'
  }
  else {
    Scoreboard.style.display = 'none'
  }
};

document.getElementById("closeSettings").onclick = () => {
  if (gameIsInProgress) {
    RestartGame();
  }
  document.getElementById("settings").style.display = 'none';
}

// Rafraichissement du score toutes les minutes
RefreshScore(BestScore, BestTimer);
let RefreshScoreProcessus = setInterval(() => RefreshScore(BestScore, BestTimer), 60000);

