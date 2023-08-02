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
