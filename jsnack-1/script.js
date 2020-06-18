var numeroUno = prompt("Inserisci il 1° numero.");
var numeroDue = prompt("Inserisci il 2° numero.");
var differenza = numeroUno - numeroDue;
var complete;

console.log(differenza);

if (!isNaN(numeroUno) && !isNaN(numeroDue)) {

    if (differenza > 0) {
      complete = "Il numero più grande è il primo che hai inserito: " + numeroUno;
    } else if (differenza < 0) {
      complete = "Il numero più grande è il secondo che hai inserito: " + numeroDue;
    } else {
      complete = "I due numeri sono uguali."
   }

}


document.getElementById('numero').innerHTML = complete
