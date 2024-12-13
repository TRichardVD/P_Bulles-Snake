import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const gameSpeed = 200;
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle

document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

function startGame() {
  snake = initSnake();
  food = generateFood(box, canvas);

  gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
}

function draw() {  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 
  const newHead = moveSnake(snake, direction, box);
  
  snake.unshift(newHead);

  // Supprime le dernier segment du serpent
  // TODO - à mettre à jour lorsque l'on va gérer la nourriture
  snake.pop();

  if (checkCollision(newHead, snake) || checkWallCollision(newHead, canvas, box))
    {
      clearInterval(gameInterval);
      console.log(`stop game. Score : ${score}`)
    }

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

startGame();
