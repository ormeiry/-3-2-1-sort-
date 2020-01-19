let width = document.querySelector("#display").offsetWidth;
let height = document.querySelector("#display").offsetHeight;

function setup() {
  const cnv = createCanvas(width, height);
  cnv.parent("display");
}

function draw() {
  background(220);
}
