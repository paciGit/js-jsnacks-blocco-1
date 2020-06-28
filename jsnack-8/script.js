// Vengono inseriti 5 numeri di seguito
var somma = 0;
var numeri = document.getElementById('numeri');

for( i = 0 ; i < 5 ; i++){
  var numeroUtente = parseInt(prompt('Inserisci un numero:'));
  somma = somma + numeroUtente
  }

// Viene indicata la somma dei 5 numeri inseriti
  numeri.innerHTML = (somma);
