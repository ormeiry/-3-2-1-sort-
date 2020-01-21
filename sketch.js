//Dom elemtns

let width = document.querySelector("#display").offsetWidth;
let height = document.querySelector("#display").offsetHeight;
const bblBtn = document.querySelector("#bblBtn");
const qukBtn = document.querySelector("#qukBtn");
const mrgBtn = document.querySelector("#mrgBtn");
const slcBtn = document.querySelector("#slcBtn");
const insBtn = document.querySelector("#insBtn");
const halfSpeedBtn = document.querySelector("#half");
const oneSpeedBtn = document.querySelector("#one");
const timesTwoSpeedBtn = document.querySelector("#oneAndhalf");
const arrayGenBtn = document.querySelector("#arrayGenBtn");
const slider = document.querySelector("#myRange");
////////////////////////////////////////////////////////////////

// Set Global variables
let values = [];
let w = 5;
let stillSorting = false;
let speed = 5;

//genrates a random array with the user input size
slider.addEventListener("input", e => {
  if (!stillSorting) {
    w = e.target.value;
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i++) {
      values[i] = float(random(height));
    }
  }
});

//Pressed button events for speed, array generate and sort choice
halfSpeedBtn.addEventListener("click", () => {
  speed = speed * 2;
});

oneSpeedBtn.addEventListener("click", () => {
  speed = 10;
});

timesTwoSpeedBtn.addEventListener("click", () => {
  speed = speed * 0.5;
});

arrayGenBtn.addEventListener("click", () => {
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = float(random(height));
  }
  stillSorting = false;
});

bblBtn.addEventListener("click", () => {
  if (!stillSorting) {
    bubbleSort(values, 0, values.length);
    stillSorting = true;
  }
});

qukBtn.addEventListener("click", () => {
  if (!stillSorting) {
    quickSort(values, 0, values.length);
    stillSorting = true;
  }
});

mrgBtn.addEventListener("click", () => {
  if (!stillSorting) {
    mergeSort(values);
    stillSorting = true;
  }
});

slcBtn.addEventListener("click", () => {
  if (!stillSorting) {
    selectionSort(values);
    stillSorting = true;
  }
});

insBtn.addEventListener("click", () => {
  if (!stillSorting) {
    insertionSort(values);
    stillSorting = true;
  }
});

function setup() {
  const cnv = createCanvas(width, height);
  cnv.parent("display");
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

// Asynchronous Definition of Quick Sort Function
async function quickSort(arr, start, end) {
  if (start >= end) {
    stillSorting = false;
    return;
  }
  let index = await partition(arr, start, end);

  // Promise.all is used so that each function
  // should invoke simultaneously
  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)
  ]);
}

// Asynchronous Definition of Partition Function
async function partition(arr, start, end) {
  let pivotIndex = start;
  let pivotValue = arr[end];

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);

      pivotIndex++;
    }
  }

  await swap(arr, pivotIndex, end);

  return pivotIndex;
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
        // Call to swap function
        await swap(arr, j, j + 1);
      }
    }
  }
  stillSorting = false;
  return arr;
}

//Definition of Merge sort
function mergeSort(arr) {
  // create copy of the array
  c = arr.slice();
  // asynchronous sort the copy
  mergeSortSlice(c, 0, c.length);
  return;
}

async function mergeSortSlice(arr, start, end) {
  if (end - start <= 1) {
    return;
  }

  var mid = Math.round((end + start) / 2);

  // wait till divides are sort
  await mergeSortSlice(arr, start, mid);
  await mergeSortSlice(arr, mid, end);

  // merge divides
  let i = start,
    j = mid;
  while (i < end && j < end) {
    if (arr[i] > arr[j]) {
      let t = arr[j];
      arr.splice(j, 1);
      arr.splice(i, 0, t);
      j++;
    }
    i++;
    if (i == j) j++;

    // copy back the current state of the sorting
    // stillSorting = true;
    values = arr.slice();

    // slow down
    await sleep(speed);
  }

  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

//Definition of Selection sort
async function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    let swaped = false;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        await swap(array, minIndex, j);
        swaped = true;
      }
    }
    if (swaped) {
      await swap(array, i, minIndex);
    }
  }
  stillSorting = false;
  return array;
}

//Definition of Insertion sort
async function insertionSort(array) {
  for (i = 1; i < array.length; i++) {
    let temp;
    temp = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > temp) {
      await swap(array, j + 1, j);
      j--;
    }
    array[j + 1] = temp;
  }
  stillSorting = false;
  return array;
}
