// https://softuni.bg/trainings/resources/officedocument/84795/%D0%B2%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8-%D1%86%D0%B8%D0%BA%D0%BB%D0%B8-%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-programming-basics-with-javascript-july-2023/4161
// https://softuni.bg/trainings/resources/officedocument/84796/%D0%B2%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8-%D1%86%D0%B8%D0%BA%D0%BB%D0%B8-%D0%BB%D0%B0%D0%B1-programming-basics-with-javascript-july-2023/4161
// https://softuni.bg/trainings/resources/video/87128/video-05-august-2023-%D1%82%D0%BE%D0%B4%D0%BE%D1%80-%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%BE%D0%B2-raw-version-programming-basics-with-javascript-july-2023/4161

// 🚨 🚨 🚨 Лаб: Вложени цикли => Nested Loops - Lab

// Преговор

// let i = 0;
// while (i <= 5) {
//   console.log("SoftUni");
//   i++;
// } // output: 6 times SoftUni

// let i = 0;
// while (i == 0) { // докато i = 0
//   console.log("SoftUni"); // console.log SoftUni
//   if ((i = 1)) break; // ако i = 1 break
// } // output: SoftUni (only one's)

// let i = 0;
// while (i < 6) { // ако i < 6
//   i++; // i + 1
//   if (i % 2 == 0) // но i(1) ако се раздели на 2 не е 0
//   и ще принтира само това което се дели на 2 с резултат 0 // ако i е четно
//     console.log(i); // принитирай i
// } // output: 246

// 🔴 01. Clock

// 1️⃣ first solution for judge

// function clock() {
//   for (let h = 0; h <= 23; h++) {
//     for (let m = 0; m <= 59; m++) {
//       console.log(`${h}:${m}`);
//     }
//   }
// }
// clock(); //

// 2️⃣ Second solution not working in judge but is included 0 and 00

// function clock() {
//   for (let h = 0; h < 24; h++) {
//     for (let m = 0; m < 60; m++) {
//       let hToPrint = h;
//       let mToPrint = m;
//       if (h < 10) {
//         hToPrint = "0" + h;
//       }
//       if (m < 10) {
//         mToPrint = "0" + m;
//       }
//       console.log(`${hToPrint}:${mToPrint}`);
//     }
//   }
// }

// clock();

// 🔴 02. Multiplication Table
/*
function multiplicationTable() {
  for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
      let res = x * y;
      console.log(`${x} * ${y} = ${res}`);
    }
  }
}

multiplicationTable();
*/

// 🔴 03. Combinations

/*
function combinations(input) {
  let n = Number(input[0]);
  let validCombinationsCount = 0;

  for (let x1 = 0; x1 <= n; x1++) {
    for (let x2 = 0; x2 <= n; x2++) {
      for (let x3 = 0; x3 <= n; x3++) {
        if (x1 + x2 + x3 === n) {
          validCombinationsCount++;
        }
      }
    }
  }

  console.log(validCombinationsCount);
}

combinations(["25"]); // 351
*/

// 🔴 04. Sum of Two Numbers

/*
function sumOfTwoNumbers(input) {
  let startInterval = Number(input[0]);
  let endInterval = Number(input[1]);
  let magicNumber = Number(input[2]);
  let isFound = false;
  let counter = 0;

  for (let x = startInterval; x <= endInterval; x++) {
    for (let y = startInterval; y <= endInterval; y++) {
      counter++;
      if (x + y === magicNumber) {
        console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      /// isFound === true
      break;
    }
  }
  if (!isFound) {
    // isFound === false
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}
sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);
*/

// 🔴 05. Traveling

/*
function traveling(input) {
  let index = 0;

  while (true) {
    let destination = input[index++];
    if (destination === "End") {
      break;
    }

    let minBudget = Number(input[index++]);
    let totalSavings = 0;

    while (totalSavings < minBudget) {
      let currentSavings = Number(input[index++]);
      totalSavings += currentSavings;
    }

    console.log(`Going to ${destination}!`);
  }
}
*/

traveling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);

//

// 🔴 06. Building

/*
function building(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);

  for (let floor = x; floor > 0; floor--) {
    let buff = "";
    for (let room = 0; room < y; room++) {
      let ch = "";
      if (floor === x) {
        ch = "L";
      } else if (floor % 2 !== 0) {
        ch = "A";
      } else {
        ch = "O";
      }
      buff += `${ch}${floor}${room} `;
    }
    console.log(buff);
  }
}

building(["6", "4"]);
// building(["9", "5"]);
*/
