for (var i = 25; i > 0; i--) {
  let slider = document.createElement("div");
  slider.setAttribute("class", "slider animate");
  slider.setAttribute("id", "slider" + i);
  document.getElementById("game").append(slider);
}

function stopSliding(slider) {
  var sliderCurrent = document.getElementById("slider".concat(slider));
  var sliderAbove = document.getElementById("slider".concat(slider + 1));
  var sliderBelow = document.getElementById("slider".concat(slider - 1));
  var left = window.getComputedStyle(sliderCurrent).getPropertyValue("left");
  sliderCurrent.classList.remove("animate");
  sliderCurrent.style.left = "left";
  var width = window.getComputedStyle(sliderCurrent).getPropertyValue("width");
  var leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue("left"));

  var difference = left - leftBelow;
}
//https://github.com/TiagoCavalcante/To-Dos