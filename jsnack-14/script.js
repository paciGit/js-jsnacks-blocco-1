var somma = 0;
var totale = document.getElementById('totale');
var media = document.getElementById('media');

for (var i = 0; i < 10; i++) {
  somma += parseInt(prompt("Inserisci il numero: "));
}

totale.innerHTML = (somma);
media.innerHTML = (somma/10);
