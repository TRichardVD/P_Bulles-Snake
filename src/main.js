import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore, RefreshScore } from "./score.js";
import { API_URL, API_TOKEN } from './config.js';

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const gameSpeed = 200;
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
let DateOfStart = Date.now();
let DurationGame = 0;
let BestScore = 0;
let gameIsPaused = false;
let gameIsInProgress = false;
let DurationBreak = 0;

// Gestion des touches du clavier
document.addEventListener("keydown", (event) => {
  if (event.key === " " && !gameIsPaused && gameIsInProgress) {
    // Mettre le jeu en pause
    DurationBreak = Math.floor((Date.now() - DateOfStart)/1000);
    gameIsPaused = true;
    clearInterval(gameInterval);
    document.getElementById("PauseMenuTitle").textContent = "Menu de Pause"
    document.getElementById("menuPause").style.display = "block"
    for (let element of document.getElementsByClassName("Stat")) {
      element.style.display = "block"
    }
    document.getElementById("timer").textContent = Math.floor((Date.now() - DateOfStart)/1000)
    document.getElementById("score").textContent = score;
    document.getElementById("startButton").style.display = "none"
    document.getElementById("InfoReprendreLeJeu").style.display = "block"
    return;
  }
  else if (event.key === " " && gameIsPaused) {
    // Reprendre le jeu
    gameIsPaused = false;
    DateOfStart = Date.now() - DurationBreak*1000;
    gameInterval = setInterval(draw, gameSpeed);
    document.getElementById("menuPause").style.display = "none"
    document.getElementById("InfoReprendreLeJeu").style.display = "none"
    return;
  }
  else {
    direction = handleDirectionChange(event, direction);

  }
});

// Rafraichissement du score toutes les minutes
RefreshScore();
let RefreshScoreProcessus = setInterval(RefreshScore, 60000);

// Fonction pour démarrer le jeu
document.getElementById("startButton").onclick = function startGame() 
{

  // Réinitialisation des variables
  score = 0;
  direction = "RIGHT"

  // Au démarrage, cacher le menu de pause
  document.getElementById("menuPause").style.display = "none"

  // Initialisation du serpent et de la nourriture
  snake = initSnake();
  food = generateFood(box, canvas);
  
  // Initialisation du score
  DateOfStart = Date.now(); // Stockage de la date de début du jeu

  // Lancement du jeu
  gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
  gameIsInProgress = true;
}

function draw() {  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const newHead = moveSnake(snake, direction, box);
  
  snake.unshift(newHead);

  // Supprime le dernier segment du serpent
  // TODO - à mettre à jour lorsque l'on va gérer la nourriture
  snake.pop();

  // Vérifie si le serpent est entré en collision avec lui-même ou avec un mur puis arrête le jeu
  if (checkCollision(newHead, snake) || checkWallCollision(newHead, canvas, box))
    {
      // Arrête le jeu
      gameIsInProgress = false;
      clearInterval(gameInterval);

      // Affiche le score final dans la console
      console.log(`Fin du jeu. Score : ${score}`)
      
      // Met à jour le meilleur score si le score actuel est supérieur
      if (score > BestScore) {
        BestScore = score;
        document.getElementById("BestScore").textContent = BestScore;
      }

      // Envoi du score au serveur si le score a battu un des 5 meilleurs scores et supprime le plus petit score pour toujours en avoir 5
      fetch(API_URL, {
        method: 'GET',
        headers: {
          'X-Master-Key': API_TOKEN,
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(r => {
        const data = r.record;
        data.sort((a, b) => b.score - a.score);
        
        if (data.length < 5 || score > data[4].score) {
          if (data.length >= 5) {
            data.pop(); // Supprime le score le plus bas
          }
          data.push({
            score: score,
            timer: DurationGame
          });
          data.sort((a, b) => b.score - a.score); // Trie à nouveau après avoir ajouté le nouveau score

          fetch(API_URL, {
            method: 'PUT', // Utilise PUT pour mettre à jour l'ensemble de l'enregistrement
            headers: {
              'Content-Type': 'application/json',
              'X-Master-Key': API_TOKEN,
            },
            body: JSON.stringify(data)
          });
        }
      });

      // Rafraichit le score
      RefreshScore();

      // Affiche le menu de pause
      DurationGame = Math.floor((Date.now() - DateOfStart)/1000);
      document.getElementById("timer").textContent = DurationGame

      document.getElementById("PauseMenuTitle").textContent = "Partie terminée"

      document.getElementById("menuPause").style.display = "block"

      document.getElementById("startButton").style.display = "block"

      for (let element of document.getElementsByClassName("Stat")) {
        element.style.display = "block"
      }

      document.getElementById("score").textContent = score;
      return;
    }
  else {
    if (food.x === newHead.x && food.y === newHead.y)
    {
      score += 1;
      food = undefined;
      food = generateFood(box, canvas)
      snake.push({x: snake[snake.length - 1].x, 
                  y: snake[snake.length - 1].y})
    }

    // Afficher les objets
    drawSnake(ctx, snake, box);
    drawFood(ctx, food, box);
    drawScore(ctx, score);
  }
}

