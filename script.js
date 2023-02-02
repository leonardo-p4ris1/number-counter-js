window.onload = function() {
  let x = 0;
  let num = document.getElementById("num");
  document.getElementById("decrease").onclick = function (){
      x -= 1;
      num.innerHTML = x;
  }
  document.getElementById("reset").onclick = function (){
      x = 0;
      num.innerHTML = x;
  }
  document.getElementById("increase").onclick = function (){
      x += 1;
      num.innerHTML = x;
  }
}
