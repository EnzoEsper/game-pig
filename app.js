
var scores, roundScore, activePlayer;

scores = [0,0];
soundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 0 ;
document.getElementById('score-1').textContent = 0 ;
document.getElementById('current-0').textContent = 0 ;
document.getElementById('current-1').textContent = 0 ;

document.querySelector('.btn-roll').addEventListener('click', function(){
  var dice;
  // Numero aleatorio del 1 al 6 (para el dado)
  dice = ((Math.floor(Math.random() * 6)) + 1) ;

  diceDOM = document.querySelector('.dice') ;
  // Aparece el dado una vez que se hace click en el boton
  diceDOM.style.display = 'block';
  // coloca cada imagen dependiendo de lo que contenga la variable aleatoria
  diceDOM.src = "dice-" + dice + ".png";


})






//document.querySelector('#current-' + activePlayer).textContent = dice; 
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';