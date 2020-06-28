// Inserire 6 volte dei numeri casuali
var lista = [];
var x = 1;
var numeri = document.getElementById('numeri');

while (x <= 6) {
  var numero = parseInt(prompt('[' + x + '] ' + 'Inserisci un numero:'))
  if (numero % 2 !== 0) {
      lista.push(numero);
  }
  x++;
}

// Stampa la lista dei numeri dispari inseriti
numeri.innerHTML = (lista);
