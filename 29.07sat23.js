// https://judge.softuni.org/Contests/Compete/Index/2407#0
// https://softuni.bg/trainings/resources/officedocument/84792/while-%D1%86%D0%B8%D0%BA%D1%8A%D0%BB-%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-programming-basics-with-javascript-july-2023/4161
// https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsoftuni%2Ebg%3A443%2Fdownloads%2Fsvn%2Fprogramming%2Dbasics%2D2022%2Ftrunk%2FJS%2F05%2EPB%2DJS%2DWhile%2DLoop%2F05%2E2%2520PB%2DJS%2DWhile%2DLoop%2DLab%2Edocx%3FaccessKey%3D45004A00650036004F0058003700760035004F004F0042006500650047003600770048002B003300320032005A002F0076006E007000390032006F00340069007A0030004C00320054004C0035003400590059006D006F00380073002B0039006400530062003900380069007800560031004300590031005900300033003000&wdAccPdf=0&wdEmbedFS=1
// https://softuni.bg/trainings/resources/video/87000/video-29-july-2023-todor-stoyanov-programming-basics-with-javascript-july-2023/4161

// for (let i = 1; i <= 3; ) {
//   console.log(i);
// } // The output is 11111111111 infinite loop

// TODO while loop
/*
function solve() {
  //   for (let i = 1; i <= 10; i++) {
  //     console.log(i);
  //   }

  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
  console.log("Finish");
}
solve();
*/

/*
function solve() {
  let a = 5;
  while (true) {
    if (a > 10) {
      break;
    }
    console.log("a = " + a);
    a++;
  }
}
solve();
// a = 5; a = 6; a = 7; a = 8; a = 9; a = 10;
*/

// 🚨 1. Четене на думи
// Напишете функция, която чете елементите на масив, докато не получи командата "Stop".

// 🚨 01. Read Text
/*
function readText(input) {
  let index = 0;
  let command = input[index]; //input[0]
  index++; //1
  while (command !== "Stop") {
    console.log(command);
    command = input[index]; // input[1] // input[2] // input[3]
    index++; // 2 // 3 // 4
  }
}

readText([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
*/

// 🚨 02. Password
/*
function thePassword(input) {
  let index = 0;

  let userName = input[index];
  index++;

  let password = input[index];
  index++;

  let tempPassword = input[index];
  index++;

  while (tempPassword !== password) {
    tempPassword = input[index];
    index++;
  }
  console.log(`Welcome ${userName}!`);
}

thePassword(["Nakov", "1234", "Pass", "1324", "1234"]);
*/

// 🚨 03. Sum Numbers
/*
function sumNumbers(input) {
  let index = 0;
  let findingNumber = Number(input[index]);
  index++;

  let sum = 0;

  while (sum < findingNumber) {
    let currentNumber = Number(input[index]);
    index++;

    sum += currentNumber;
  }
  console.log(sum);
}

sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
*/
// 🚨 04. Sequence 2k+1
/*
function sequence2kPlus1(input) {
  let n = Number(input[0]);
  let k = 1;

  while (k <= n) {
    console.log(k);
    k = k * 2 + 1;
  }
}
sequence2kPlus1(["31"]);
*/

// 🚨 05. Account Balance
/*
function accountBalance(input) {
  let index = 0;
  let account = 0;

  let command = input[index];
  index++;

  while (command !== "NoMoreMoney") {
    let money = Number(command);

    if (money < 0) {
      console.log("Invalid operation!");
      break;
    }

    account += money;
    console.log("Increase: " + money.toFixed(2));

    command = input[index];
    index++;
  }
  console.log("Total: " + account.toFixed(2));
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);
*/

// 🚨 06. Max Number
/*
function maxNumber(input) {
  let index = 0;
  let myMaxNumber = Number(input[0]);

  let command = input[index];
  index++;

  while (command !== "Stop") {
    let num = Number(command);

    if (myMaxNumber < num) {
      myMaxNumber = num;
    }

    command = input[index];
    index++;
  }
  console.log(myMaxNumber);
}

maxNumber(["99", "80", "70", "100", "Stop"]);
*/

// 🚨 07. Min Number

function minNumber(input) {
  let index = 0;
  let myMinNumber = Number(input[0]);

  let command = input[index];

  while (command !== "Stop") {
    let num = Number(command);

    if (myMinNumber > num) {
      myMinNumber = num;
    }

    index++;
    command = input[index];
  }
  console.log(myMinNumber);
}

minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);

/*
// 🚨 08. Graduation

function graduation(input) {
  let index = 0; // index защото не се знае коплко входни данни има
  let name = input[index]; // името на ученика
  index++; // и увеличаваме index с една единица

  let sumGrade = 0; // променлива която събира всички уценки на ученика
  let i = 1; // променива която брои класовете на ученика, затова започва от 1 не от 0

  let badGradeCount = 0; // брояч на лошите уценки на ученика
  let hasExcluded = false; // и флаг бульон които казва ученикът дали е бил скъсан или не е скъсан

  while (i <= 12) {
    //(i <= 12) докато не достигне до 12 клас, повтаряй
    let grade = Number(input[index]); // като за всяко повторение получаваш по една уценка
    index++;

    if (grade < 4.0) {
      // ако тази уценка е по малко от 4
      badGradeCount++; // ако (grade < 4.0) увелчаване на брояча на лошите уценки
      if (badGradeCount === 2) {
        // ако лошите уценки на ученика са 2, то тогава 👇 бива изключен
        console.log(`${name} has been excluded at ${i} grade`);
        hasExcluded = true; // бульон флага че ученикът е изключен
        break; // и цукълът приключва
      }
      continue; // ако ученукът има само 1 лоша оценка той продължава
    }

    sumGrade += grade; // към сумата от оценките добавяме текущата оценка
    i++; // и увеличаваме i с една единица и ученика преминава в следващ клас
  } // докато ученикът не достигне до 12 клас или не получи 2 лоши оценки

  if (!hasExcluded) {
    //  (!hasExcluded) = на АКО УЧЕНИКЪТ НЕ Е СКЪСЪН ! Е ОТРИЦАНИЕТО НА hasExcluded
    // проверка ако ученикът е скъсан
    let avg = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
  }
}

graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
*/
