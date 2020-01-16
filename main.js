const bblBtn = document.querySelector("#bblBtn");
const insBtn = document.querySelector("#insBtn");
const slcBtn = document.querySelector("#slcBtn");
const mrgBtn = document.querySelector("#mrgBtn");
const qukBtn = document.querySelector("#qukBtn");

const halfSpeedBtn = document.querySelector("#half");
const oneSpeedBtn = document.querySelector("#one");
const onehalfSpeedBtn = document.querySelector("#oneAndhalf");

const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const restartBtn = document.querySelector("#restart");
const crtBtn = document.querySelector("#crtBtn");

const input = document.querySelector("#input");
const display = document.querySelector(".display");

crtBtn.addEventListener("click", createArray);

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

function createArray() {
  let userInput = Number(input.value);
  const myArray = [];
  for (let i = 0; i < userInput; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 5;
    myArray.push(randomNum);
  }

  display.innerHTML = myArray
    .map(num => {
      return `<div style="height:${num * 5}px" class="brick"></div>`;
    })
    .join("");

  bblBtn.addEventListener("click", () => {
    display.innerHTML = bubbleSort(myArray)
      .map(num => {
        return `<div style="height:${num * 5}px" class="brick"></div>`;
      })
      .join("");
  });

  return myArray;
}
