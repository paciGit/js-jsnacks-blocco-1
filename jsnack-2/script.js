var btnInvia = document.getElementById('btnInvia');

btnInvia.addEventListener("click", function() {
  var nome = document.getElementById('nome').value;
  var cognome = document.getElementById('cognome').value;
  var nomeCompleto = nome + " " + cognome;
  document.getElementById("print").innerHTML = "Benvenuto caro/a " + nomeCompleto;
});
