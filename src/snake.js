/**
 * Initialise le serpent au début du jeu.
 *
 * Cette fonction crée le serpent en tant que tableau contenant un seul segment,
 * positionné à une position de départ définie sur la grille.
 *
 * @returns {Array<{x: number, y: number}>} - Un tableau contenant un objet représentant la position du premier segment du serpent.
 */
function initSnake() {
  // A compléter
  let array = {x: 3, y: 5}
  return array;
}

/**
 * Déplace le serpent dans la direction actuelle.
 *
 * Cette fonction calcule la nouvelle position de la tête du serpent en fonction
 * de la direction actuelle (gauche, haut, droite, bas). Le reste du corps du serpent
 * suit la tête. La fonction retourne un objet représentant la nouvelle position de la tête du serpent.
 *
 * @param {Array<{x: number, y: number}>} snake - Le tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
 * @param {string} direction - La direction actuelle du mouvement du serpent ("LEFT", "UP", "RIGHT", ou "DOWN").
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la distance de déplacement du serpent.
 * @returns {{x: number, y: number}} - Un objet représentant les nouvelles coordonnées `x` et `y` de la tête du serpent après le déplacement.
 */
function moveSnake(snake, direction, box) {
  // A compléter

  switch(direction) {
    case 'UP' :
      snake[0].y -= box
      break;

    case 'LEFT':
      snake[0].x -= box
      break;

    case 'RIGHT':
      snake[0].x += box
      break;
    
    case 'DOWN':
      snake[0].y += box
      break;
    }

  for(let i = 1; i < snake.length - 1; i++) {
    if (snake[i].x > snake[i - 1].x) 
    {
      snake[i].x--
    }
    else if (snake[i].x < snake[i - 1].x)
    {
      snake[i].x++
    }
    else if (snake[i].y > snake[i - 1].y)
    {
      snake[i].y--
    }
    else if (snake[i].y > snake[i - 1].y)
    {
      snake[i].y++
    }
    
  }
  return snake[0]
}

/**
 * Dessine le serpent sur le canvas.
 *
 * Cette fonction parcourt chaque segment du serpent et le dessine sur le canvas en utilisant
 * un rectangle coloré. La tête du serpent est dessinée dans une couleur différente des autres segments
 * pour la distinguer visuellement. Chaque segment est dessiné à sa position actuelle sur la grille,
 * avec une taille déterminée par la valeur de `box`.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {Array<{x: number, y: number}>} snake - Un tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de chaque segment du serpent.
 */
function drawSnake() {
  // A compléter
  const canvas = document.getElementById("gameCanvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
  }

  ctx.fillRect(56, 56, 100, 100);

}
