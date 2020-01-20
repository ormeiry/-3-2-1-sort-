let width = document.querySelector("#display").offsetWidth;
let height = document.querySelector("#display").offsetHeight;
const bblBtn = document.querySelector("#bblBtn");
const halfSpeedBtn = document.querySelector("#half");
const oneSpeedBtn = document.querySelector("#one");
const timesTwoSpeedBtn = document.querySelector("#oneAndhalf");
const slider = document.querySelector("#myRange");

// Set Global letiables
let values = [];
let w = 5;
let stillSorting = false;
let speed = 10;

slider.addEventListener("input", e => {
  if (!stillSorting) {
    w = e.target.value;
    console.log(w);
  }
});

halfSpeedBtn.addEventListener("click", () => {
  speed = speed * 2;
});

oneSpeedBtn.addEventListener("click", () => {
  speed = 10;
});

timesTwoSpeedBtn.addEventListener("click", () => {
  speed = speed * 0.5;
});

// To store the state of each bar
// in order to change the color
let states = [];

bblBtn.addEventListener("click", () => {
  if (!stillSorting) {
    bubbleSort(values, 0, values.length);
    stillSorting = true;
  }
});

function setup() {
  const cnv = createCanvas(width, height);
  cnv.parent("display");
  // Insert Random values in array
  values = new Array(floor(width / w));

  for (let i = 0; i < values.length; i++) {
    values[i] = float(random(height));
    states[i] = -1;
  }
}

// Definition of bubble sort
async function bubbleSort(arr, start, end) {
  if (start >= end) {
    stillSorting = false;
    return;
  }

  for (let i = 0; i < end - 1; i++) {
    for (let j = 0; j < end - i - 1; j++) {
      if (arr[j] >= arr[j + 1]) {
        states[j] = 1;

        // Call to swap function
        await swap(arr, j, j + 1);
        states[j + 1] = 0;
      }
      states[j] = 2;
    }
  }
  return arr;
}

// Definition of draw function
function draw() {
  background(51);

  for (let i = 0; i < values.length; i++) {
    stroke(0);
    fill(255);

    if (states[i] == 0) {
      fill(0, 255, 100);
    } else if (states[i] == 1) {
      // Element currently sorting
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    rect(i * w, height - values[i], w, values[i]);
  }
}

// Definition of swap function
async function swap(arr, a, b) {
  await sleep(speed);
  let t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}

// Definition of sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
