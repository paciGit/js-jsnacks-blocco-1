var result = 0;
var text = document.getElementById('text');

for (i=0; result < 1000; i++) {
  result = Math.pow(2, i);
  if (result < 1000) {
    text.innerHTML = (result);
  }
}
