var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var initialBackground = window.getComputedStyle(body).backgroundImage;
var initialColors = initialBackground
  .slice(initialBackground.indexOf("(") + 1, initialBackground.indexOf(")"))
  .split(",");

function setGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.value = "#FF0000"; // Red
color2.value = "#FFFF00"; // Yellow

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

setGradient(); // Display the initial CSS linear gradient property on page load

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var btn = document.querySelector(".random-btn");
btn.addEventListener("click", function () {
  color1.value = generateRandomColor();
  color2.value = generateRandomColor();
  setGradient();
});
