// chiedi un numero
var numeroUtente = prompt('Inserisci un numero di 4 cifre');
var numSomma = document.getElementById('somma');

// dividere la stringa
numeroUtente.toString();
// creo array
var numeri = numeroUtente.split('');
console.log(numeri);

// sommo le cifre
var somma = 0;
var i = 0;

while (i < numeri.length) {
  somma = somma + parseInt(numeri[i]);
  i++;
}

numSomma.innerHTML = (somma);
