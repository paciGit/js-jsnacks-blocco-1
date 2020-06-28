//  inserire prima parola
var primaParola = prompt('inserisci una parola');
while (primaParola == ' ' || !isNaN(primaParola)){
  primaParola = prompt('inserisci una parola');
}

// inserire seconda parola
var secondaParola = prompt('inserisci una seconda parola');
while (secondaParola == ' ' || !isNaN(secondaParola)){
  secondaParola = prompt('inserisci una seconda parola');
}

// confronta parole
var text = document.getElementById("text");
var titolo = document.getElementById("titolo");

if (primaParola.length < secondaParola.length){
    text.innerHTML = (primaParola + '-' + secondaParola);
    titolo.innerHTML = ('La prima parola inserita è più lunga.');
} else if (primaParola.length > secondaParola.length){
    text.innerHTML = (secondaParola + '-' + primaParola);
    titolo.innerHTML = ('La seconda parola inserita è più lunga.');
} else{
    titolo.innerHTML = ('Le parole hanno la stessa lunghezza.');
}
