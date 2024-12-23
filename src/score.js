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

let ScoreboardData = [];

/**
 * Rafraîchit le score du Scoreboard.
 * 
 * Cette fonction récupère les scores stockés sur le serveur et les affiche dans le Scoreboard.
 * 
 * @returns {Promise} Une promesse qui résout lorsque les scores sont récupérés et affichés.
 */
function RefreshScore(bestScore, bestTime) {
  
  document.getElementById("scoreBoard").classList.add("loading-border");

   return fetch(API_URL, {
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
    ScoreboardData = r.record;

    if (Array.isArray(ScoreboardData) && ScoreboardData.every(item => typeof item.score === 'number')) {

      ScoreboardData.sort((a, b) => {
         if (a.score === b.score) {
          return a.timer - b.timer
        }
        return b.score - a.score;
      });

      for(let i = 0; i < ScoreboardData.length; i++) {
        const element = document.getElementById(`score${i + 1}`);

        if (bestScore == ScoreboardData[i].score && bestTime == ScoreboardData[i].timer) {
          element.style.fontWeight = 'bold';
        }
        else {  
          element.style.fontWeight = 'normal';
        }
        element.textContent = `${ScoreboardData[i].score} points en ${ScoreboardData[i].timer} secondes`;
      }
    } else {
      console.error('Les données ne sont pas un tableau ou une propriété valide.');
    }
  })
  .catch(error => {
    console.error('Il y a une erreur avec le fetch : ', error);
  })
  .then (() => {
    document.getElementById("scoreBoard").classList.remove("loading-border");
  })
  .catch(() => {
    document.getElementById("scoreBoard").classList.remove("loading-border");
    document.getElementById("scoreBoard").style.boxShadow = "red 0px 0px 2px";
    setTimeout(() => {
      document.getElementById("scoreBoard").style.border = "none";
    }, 2000);
  });
}

export {
  drawScore,
  RefreshScore,
  ScoreboardData
}