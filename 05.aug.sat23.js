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

function clock() {
  for (let h = 0; h <= 23; h++) {
    for (let m = 0; m <= 59; m++) {
      console.log(`${h}:${m}`);
    }
  }
}

clock();
