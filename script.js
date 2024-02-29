let cur = "square";

let shape = [
  "square",
  "rectangle",
  "circle",
  "oval",
  "triangle-up",
  "triangle-down",
  "triangle-topleft",
  "triangle-bottomleft",
  "triangle-bottomright",
  "triangle-right",
];

//let color = ["red", "orange", "green", "maroon", "pink", "violet"];

document.getElementById("shape").onclick = function () {
  var randomShape = shape[Math.floor(Math.random() * shape.length)];
  document.getElementById(cur).setAttribute("id", randomShape);
  cur = randomShape;
// let  r = Math.floor(Math.random() * 255);
// let  g = Math.floor(Math.random() * 255);
// let  b = Math.floor(Math.random() * 255);

// let color = `rgb(${r},${g},${b})`;
//   document.getElementById(cur).setAttribute("id", color);
//   cur = color;

};



document.getElementById("color").onclick = function () {
let  r = Math.floor(Math.random() * 255);
let  g = Math.floor(Math.random() * 255);
let  b = Math.floor(Math.random() * 255);

let color = `rgb(${r},${g},${b})`;
//   var randomColor = color[Math.floor(Math.random() * color.length)];
  document.getElementById("block").style.backgroundColor = color;
};

