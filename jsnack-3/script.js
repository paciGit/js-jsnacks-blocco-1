var btnNum = document.getElementById('numero');

btnNum.addEventListener("click", function() {
  var colore = document.getElementById('colore');
  var numero = parseInt(prompt ("Inserisci qui un numero casuale."));

  if (numero > 0) {
    colore.className = "green"
  }else if (numero < 0) {
    colore.className = "red"
  }else {
    colore.className = "blue"
  }

  colore.innerHTML = numero

});
