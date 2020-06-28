// Esercizio Cubo
var numero = parseInt(prompt('Inserisci un numero:'));
var i = 1;
var potenza = document.getElementById('testo');

while (i <= numero) {
    potenza.innerHTML = (Math.pow(i, 3));
    i++;
}
