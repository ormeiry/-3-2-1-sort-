let width = document.querySelector("#display").offsetWidth;
let height = document.querySelector("#display").offsetHeight;

// Set Global variables
let values = [];
let w = 8;
let stillSorting = false;
let speed = 5;
const fr = 60;

//genrates a random array with the user input size
document.querySelector("#myRange").addEventListener("input", (e) => {
  if (!stillSorting) {
    w = e.target.value;
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i++) {
      values[i] = float(random(height));
    }
  }
});

//Pressed button events for speed, array generate and sort choice
document.querySelectorAll(".btn-speed").forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.id) {
      case "half":
        speed = 10;
        break;
      case "one":
        speed = 5;
        break;
      case "oneAndhalf":
        speed = 2.5;
        break;
      default:
        speed = 5;
        break;
    }
  });
});

document.querySelectorAll(".btn-sort").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!stillSorting) {
      stillSorting = true;
      switch (btn.id) {
        case "bblBtn":
          bubbleSort(values, 0, values.length);
          break;
        case "qukBtn":
          quickSort(values, 0, values.length);
          break;
        case "mrgBtn":
          mergeSort(values);
          break;
        case "slcBtn":
          selectionSort(values);
          break;
        case "insBtn":
          insertionSort(values);
          break;
        default:
          return;
      }
    }
  });
});
document.querySelector("#arrayGenBtn").addEventListener("click", () => {
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = float(random(height));
  }
  stillSorting = false;
});

function setup() {
  const cnv = createCanvas(width, height);
  cnv.parent("display");
  frameRate(fr);
}

// Definition of draw function
function draw() {
  background(0);

  for (let i = 0; i < values.length; i++) {
    stroke(0);
    fill(239, 192, 80);

    rect(i * w, height - values[i], w, values[i]);
  }
}
