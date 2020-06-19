document.getElementById("numero").addEventListener("click", function () {
  var numCasuale = Math.floor(Math.random()*(10 - 1 + 1) + 1);
  console.log(numCasuale);
  var colore = document.getElementById("colore");

  colore.classList.add("pari", "dispari");
  colore.classList.remove("none")

  if (numCasuale %2 == 0) {
    colore.classList.remove("pari");
  } else {
    colore.classList.remove("dispari");
  }
})
