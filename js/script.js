function SwapDivsWithClick(div1, div2) {
  d1 = document.getElementById(div1);
  d2 = document.getElementById(div2);
  var d3;
  var d4;
  d3 = d1.innerHTML;
  d4 = d2.innerHTML;
  d1.innerHTML = d4;
  d2.innerHTML = d3;
}

function sphere() {
  var shape = document.getElementByClassName("shape");
  shape.name = "circle";
}
