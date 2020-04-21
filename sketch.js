let width = document.querySelector('#display').offsetWidth;
let height = document.querySelector('#display').offsetHeight;

// Set Global variables
let values = [];
let w = 8;
let stillSorting = false;
let speed = 5;
const fr = 60;

//genrates a random array with the user input size
document.querySelector('#myRange').addEventListener('input', (e) => {
  if (!stillSorting) {
    w = e.target.value;
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i++) {
      values[i] = float(random(height));
    }
  }
});

//Pressed button events for speed, array generate and sort choice
document.querySelector('#half').addEventListener('click', () => {
  speed = 10;
});

document.querySelector('#one').addEventListener('click', () => {
  speed = 5;
});

document.querySelector('#oneAndhalf').addEventListener('click', () => {
  speed = 2.5;
});

document.querySelector('#arrayGenBtn').addEventListener('click', () => {
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = float(random(height));
  }
  stillSorting = false;
});

document.querySelector('#bblBtn').addEventListener('click', () => {
  if (!stillSorting) {
    bubbleSort(values, 0, values.length);
    stillSorting = true;
  }
});

document.querySelector('#qukBtn').addEventListener('click', () => {
  if (!stillSorting) {
    quickSort(values, 0, values.length);
    stillSorting = true;
  }
});

document.querySelector('#mrgBtn').addEventListener('click', () => {
  if (!stillSorting) {
    mergeSort(values);
    stillSorting = true;
  }
});

document.querySelector('#slcBtn').addEventListener('click', () => {
  if (!stillSorting) {
    selectionSort(values);
    stillSorting = true;
  }
});

document.querySelector('#insBtn').addEventListener('click', () => {
  if (!stillSorting) {
    insertionSort(values);
    stillSorting = true;
  }
});

function setup() {
  const cnv = createCanvas(width, height);
  cnv.parent('display');
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
