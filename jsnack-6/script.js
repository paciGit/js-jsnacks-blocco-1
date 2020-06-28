// L'utente inserisce i due numeri
var primoNumero = parseInt(prompt('Inserisci un numero'));
var secondoNumero = parseInt(prompt('Inserisci un secondo numero'));
var messaggio;
var text = document.getElementById('text');

// Viene stampato il numero maggiore

if(primoNumero > secondoNumero){
  messaggio = primoNumero;
}
else if (primoNumero < secondoNumero){
  messaggio = secondoNumero;
} else{
  messaggio = 'I due numeri inseriti sono uguali';
}

text.innerHTML = (messaggio);
