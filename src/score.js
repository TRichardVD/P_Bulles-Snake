import { API_URL, API_TOKEN } from './config.js';

/**
 * Dessine le score sur le canvas.
 *
 * Cette fonction affiche le score actuel du jeu dans le coin supérieur gauche du canvas.
 * Le score est affiché en noir avec une police Arial de 20px.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score à afficher, qui est un entier.
 */
function drawScore(ctx, score) {
  ctx.font = "20px Arial"
  ctx.fillStyle = "black"
  ctx.fillText(`Score : ${score}`, 10, 30)
}

/**
 * Rafraîchit le score du Scoreboard.
 * 
 * Cette fonction récupère les scores stockés sur le serveur et les affiche dans le Scoreboard.
 * 
 * 
 */
function RefreshScore() {
  
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

    if (Array.isArray(data) && data.every(item => typeof item.score === 'number')) {
      data.sort((a, b) => b.score - a.score);
      for(let i = 0; i < data.length; i++) {
        document.getElementById(`score${i + 1}`).textContent = `${data[i].score} points en ${data[i].timer} secondes`;
  
      }
    } else {
      console.error('Les données ne sont pas un tableau ou une propriété valide.');
    }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

}

export {
  drawScore,
  RefreshScore
}