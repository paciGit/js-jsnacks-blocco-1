document.getElementById("calcolo").addEventListener("click", function () {
  var numUno = parseInt(document.getElementById("numUno").value);
  var numDue = parseInt(document.getElementById("numDue").value);
  var op = document.getElementById("operazione").value;
  var result = document.getElementById("result");

  if (op == "somma") {
    result.innerHTML = numUno + numDue;
  }
  else if (op == "sottrazione") {
    result.innerHTML = numUno - numDue;
  }
  else if (op == "moltiplicazione") {
    result.innerHTML = numUno * numDue;
  }
  else if (op == "divisione") {
    result.innerHTML = numUno / numDue;
  }
  else if (op == "") {
    result.innerHTML = "Seleziona un'operazione."
  }
})
