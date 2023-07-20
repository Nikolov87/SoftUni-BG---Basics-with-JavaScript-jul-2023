//https://softuni.bg/trainings/resources/officedocument/84784/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8-%D0%BB%D0%B0%D0%B1-programming-basics-with-javascript-july-2023/4161

/*
function solve(input) {
  console.log(1 + 1 + "4" + 2 + 1);
}
solve(); //2421
*/

/*
function solve(input) {
  let a = 5;
  let b = 6;
  console.log(a == b); //boolean
}
solve();
*/

/*
function solve(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  if (a < b) {
    console.log("Hello");
  }
}
solve([5, 10]);
*/

//01. Excellent Result
/*
function excellentResult(input) {
  let great = Number(input[0]);

  if (great >= 5.5) {
    console.log("Excellent!");
  }
}
excellentResult(["5.50"]);
*/

//02. Greater Number
/*
function greaterNumber(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);

  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
greaterNumber(["3", "5"]);
*/

// 03. Even or Odd
/*
function evenOrOdd(input) {
  let num = Number(input[0]);

  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
evenOrOdd(["1024"]);
*/

/*
function solve(input) {
  let a = 5.555;

  console.log(Math.floor(a));
}
solve();
*/

// function solve(input) {
//   let a = 7;
//   if (a > 4) console.log("Bigger than 4");
//   else if (a > 5) console.log("Bigger than 5");
//   else console.log("Bigger than 7");
// }

// solve([5, 10]);

// 04. Password Guess
/*
function guessPassword(input) {
  let password = input[0];
  if (password === "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}

guessPassword("s3cr3t!P@ssw0rd");
guessPassword("s3cr3t!p@ss");
*/

// 05. Number 100...200
/*
function numberFrom100to200(input) {
  let num = Number(input);

  if (num < 100) {
    console.log("Less than 100");
  } else if (num >= 100 && num <= 200) {
    console.log("Between 100 and 200");
  } else {
    console.log("Greater than 200");
  }
}

numberFrom100to200(["95"]);
numberFrom100to200(["120"]);
numberFrom100to200(["210"]);
*/

// 06. Speed Info
/*
function speedInfo(input) {
  let num = Number(input);

  if (num <= 10) {
    console.log("slow");
  } else if (num >= 10 && num <= 50) {
    console.log("average");
  } else if (num >= 50 && num <= 150) {
    console.log("fast");
  } else if (num >= 150 && num <= 1000) {
    console.log("ultra fast");
  } else if (num > 1000) {
    console.log("extremely fast");
  }
}

speedInfo(["8"]);
speedInfo(["49.5"]);
speedInfo(["126"]);
speedInfo(["160"]);
speedInfo(["3500"]);
*/

// 07. Area of Figures
/*
function areaOfFigures(input) {
  let type = input[0];
  let result = 0;

  if (type === "square") {
    let a = Number(input[1]);
    result = a * a;
  } else if (type === "rectangle") {
    let a = Number(input[1]);
    let b = Number(input[2]);
    result = a * b;
  } else if (type === "circle") {
    let r = Number(input[1]);
    result = Math.PI * Math.pow(r, 2);
  } else {
    let a = Number(input[1]);
    let h = Number(input[2]);
    result = (a * h) / 2;
  }
  console.log(result.toFixed(3));
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);
*/
