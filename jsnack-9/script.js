var invitatiFesta = ['Jesse', 'Vincenzo', 'Nicola', 'Antonio', 'Vic'];
var invito = document.getElementById('invito');
var nome = document.getElementById('nome');


// CHIEDERE ALL'UTENTE IL nome
var nomeUtente = prompt('Inserisci il tuo nome per controllare il tuo invito alla festa di GATSBY!');
nome.innerHTML = (nomeUtente);

// var presenza in lista
var presenteInLista = false;
var i = 0;

// confronto lista invitati
while (presenteInLista != true && i < invitatiFesta.length) {

  if(invitatiFesta[i] == nomeUtente){
    presenteInLista = true;
  }
  console.log(invitatiFesta[i]);
  i++
};

if(presenteInLista === true){
  invito.innerHTML = ('Sei stato invitato!');
}
else {
  invito.innerHTML = ('Non sei stato invitato.');
};
