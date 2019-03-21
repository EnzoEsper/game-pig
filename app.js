
var scores, roundScore, activePlayer, dice;

scores = [0,0];
soundScore = 0;
activePlayer = 1;

// Numer aleatorio del 1 al 6 (para el dado)
dice = ((Math.floor(Math.random() * 6)) + 1) ;

document.querySelector('#current-' + activePlayer).textContent = dice; 

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';

var x = document.querySelector('#score-1').textContent ;
console.log(x);
