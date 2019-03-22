
var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
  
  if (gamePlaying) {
    var dice;
  // Numero aleatorio del 1 al 6 (para el dado)
    dice = ((Math.floor(Math.random() * 6)) + 1) ;

    diceDOM = document.querySelector('.dice') ;
    // Aparece el dado una vez que se hace click en el boton
    diceDOM.style.display = 'block';
    // coloca cada imagen dependiendo de lo que contenga la variable aleatoria
    diceDOM.src = "dice-" + dice + ".png";

    //actualizar cada ronda dependiendo si toca o no un 1
    if (dice !== 1) {
      //agregar puntaje
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore; 
    } else {
      //cambiar jugador activo
      nextPlayer();
    }
  }
  

})

document.querySelector('.btn-hold').addEventListener('click', function(){
  
  if (gamePlaying && roundScore !== 0) {
    //Anadir puntaje actual al global
    scores[activePlayer] += roundScore;

    //actualizar la UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // verificar si el jugadro gano el juego
    if (scores[activePlayer] >= 20) {
      document.getElementById('name-' + activePlayer).innerHTML = '<b>WINNER!<b>';
      
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      
      setTimeout(() => {
        diceDOM.style.display = 'none';
      }, 500);

      gamePlaying = false;
    } else {
      //cambiar jugador activo  
      nextPlayer();
    }
  }
  

  
})

//cambia de jugador activo
function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0' ;
  document.getElementById('current-1').textContent = '0' ;
  
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  //cada vez que se cambia de jugador, el dado desaparece despues de medio seg.
  setTimeout(() => {
    diceDOM.style.display = 'none';
  }, 500);
};

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = 0 ;
  document.getElementById('score-1').textContent = 0 ;
  document.getElementById('current-0').textContent = 0 ;
  document.getElementById('current-1').textContent = 0 ;

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  
  //Se remueve la clase 'active' para que no se vaya acumulando la clase cada vez que se reinicia el juego
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}





//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';