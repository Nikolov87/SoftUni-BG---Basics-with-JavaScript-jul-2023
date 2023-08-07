// https://softuni.bg/trainings/resources/officedocument/84797/%D0%B2%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8-%D1%86%D0%B8%D0%BA%D0%BB%D0%B8-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-programming-basics-with-javascript-july-2023/4161
// https://softuni.bg/trainings/resources/video/87140/video-06-august-2023-%D0%B8%D0%B2%D0%B0%D0%B9%D0%BB%D0%BE-%D0%B4%D0%B8%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2-raw-version-programming-basics-with-javascript-july-2023/4161

// Nested Loops - Exercise

// 🔴 01. Number Pyramid
// 1. Пирамида от числа

// 1️⃣ first solution
/*
function numberPyramid(input) {
  let n = Number(input[0]);
  let printNumber = 1;
  let isFinish = false;

  for (let row = 1; row <= n; row++) {
    let buff = "";
    for (let col = 1; col <= row; col++) {
      buff += `${printNumber} `;
      if (printNumber === n) {
        isFinish = true;
        break;
      }
      printNumber++;
    }
    console.log(buff);
    if (isFinish) {
      // isFinish === true
      break;
    }
  }
}

numberPyramid(["7"]);
// numberPyramid(["12"]);
// numberPyramid(["15"]);
*/

// 2️⃣ Second solution
/*
function numberPyramid(input) {
  let n = Number(input[0]);
  let printNumber = 1;
  let isFinish = false;
  let row = 1;

  while (!isFinish) {
    let buff = "";
    for (let col = 1; col <= row; col++) {
      buff += `${printNumber} `;
      if (printNumber === n) {
        isFinish = true;
        break;
      }
      printNumber++;
    }
    console.log(buff);
    row++;
  }
}

numberPyramid(["7"]);
numberPyramid(["12"]);
numberPyramid(["15"]);
*/

// 🔴 02. Equal Sums Even Odd Position
// 2. Еднакви суми на четни и нечетни позиции

function equalSumsEvenOddPosition() {
  let;
}

equalSumsEvenOddPosition(["100000", "100050"]);
equalSumsEvenOddPosition(["123456", "124000"]);
