const myArray = [1, 3, 5, 29, 101, 140, 2, 25, 16, 12, 13, 145];

//Buuble sort algorithem
function bubbleSort(array) {
  let len = array.length;
  let swaped;

  do {
    swaped = false;
    for (let i = 0; i < len - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swaped = true;
      }
    }
    len--;
  } while (swaped === true);
  return array;
}

//Selection sort algorithem
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    let swaped = false;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
        swaped = true;
      }
    }
    if (swaped) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

//Insertion sort algorithem
function insertionSort(array) {
  for (i = 1; i < array.length - 1; i++) {
    temp = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
  }
  return array;
}

//Merge sort algorithem
function mergeSort(unsortedarray) {
  if (unsortedarray.length <= 1) {
    return unsortedarray;
  }
  const middle = Math.floor(unsortedarray.length / 2);
  const left = unsortedarray.slice(0, middle);
  const right = unsortedarray.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let resultarray = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultarray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultarray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultarray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

//Quick sort algorithem
function quickSort(array, left = 0, right = array.length - 1) {
  let len = array.length,
    index;

  if (len > 1) {
    index = partition(array, left, right);

    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }

    if (index < right) {
      quickSort(array, index, right);
    }
  }
  return array;
}

function partition(array, left, right) {
  let middle = Math.floor((right + left) / 2),
    pivot = array[middle],
    i = left,
    j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }

    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }

  return i;
}
