function changeColor () {
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    var gg = document.getElementById("gg");
    var color = `rgb(${red}, ${green}, ${blue})`;
    gg.style.color = color;
  }
  
  red.addEventListener('input', changeColor);
  green.addEventListener('input', changeColor);
  blue.addEventListener('input', changeColor);