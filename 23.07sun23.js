// https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsoftuni%2Ebg%3A443%2Fdownloads%2Fsvn%2Fprogramming%2Dbasics%2D2022%2Ftrunk%2FJS%2F04%2EPB%2DJS%2DFor%2DLoop%2F04%2E3%2520PB%2DJS%2DFor%2DLoop%2DExercise%2Edocx%3FaccessKey%3D45004A00650036004F0058003700760035004F004F0042006500650047003600770048002B003300320032005A002F0076006E007000390032006F00340069007A0030004C00320054004C0035003400590059006D006F00380073002B0039006400530062003900380069007800560031004300590031005900300033003000&wdAccPdf=0&wdEmbedFS=1

// 🚨 02. Multiplication Table
// Таблица за умножение от 1 до 10  for loop
/*
function multiplicationTable(input) {
  let numbrer = Number(input[0]);

  for (let i = 1; i <= 10; i++) {
    let result = i * numbrer;
    console.log(`${i} * ${numbrer} = ${result}`);
  }
}

multiplicationTable(["5"]);
*/

// 🚨 03. Histogram
/*
function histogram(input) {
  let numbersCounter = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let index = 1; index <= numbersCounter; index++) {
    let currentNumber = Number(input[index]);

    if (currentNumber < 200) {
      p1++;
    } else if (currentNumber <= 399) {
      p2++;
    } else if (currentNumber <= 599) {
      p3++;
    } else if (currentNumber <= 799) {
      p4++;
    } else {
      p5++;
    }
  }
  console.log(`${((p1 / numbersCounter) * 100).toFixed(2)}%`);
  console.log(`${((p2 / numbersCounter) * 100).toFixed(2)}%`);
  console.log(`${((p3 / numbersCounter) * 100).toFixed(2)}%`);
  console.log(`${((p4 / numbersCounter) * 100).toFixed(2)}%`);
  console.log(`${((p5 / numbersCounter) * 100).toFixed(2)}%`);
}

// histogram(["3", "1", "2", "999"]);
// histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
// histogram([
//   "14",
//   "53",
//   "7",
//   "56",
//   "180",
//   "450",
//   "920",
//   "12",
//   "7",
//   "150",
//   "250",
//   "680",
//   "2",
//   "600",
//   "200",
// ]);
*/

// 🚨 05. Salary
/*
function theSalary(input) {
  let salary = Number(input[1]);

  for (let index = 2; index < input.length; index++) {
    let currentTab = input[index];

    switch (currentTab) {
      case "Facebook":
        salary -= 150;
        break;
      case "Instagram":
        salary -= 100;
        break;
      case "Reddit":
        salary -= 50;
        break;
    }

    if (salary <= 0) {
      console.log("You have lost your salary.");
      break;
    }
  }

  if (salary > 0) {
    console.log(salary);
  }
}

theSalary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
theSalary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
theSalary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
*/

// 🚨 06. Oscars

function oscars(input) {
  let numbrer = Number(input[0]);
}

oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);

oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
