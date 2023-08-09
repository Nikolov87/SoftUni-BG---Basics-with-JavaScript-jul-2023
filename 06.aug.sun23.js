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
/*
function equalSumsEvenOddPosition(input) {
  let startInterval = Number(input[0]);
  let endInterval = Number(input[1]);
  let buff = "";

  for (let i = startInterval; i <= endInterval; i++) {
    let numAsString = String(i);
    let sumEvenPosition = 0;
    let sumOddPosition = 0;
    for (let chPosition = 0; chPosition < numAsString.length; chPosition++) {
      if (chPosition % 2 === 0) {
        sumEvenPosition += Number(numAsString[chPosition]);
      } else {
        sumOddPosition += Number(numAsString[chPosition]);
      }
    }
    if (sumEvenPosition === sumOddPosition) {
      buff += numAsString + " ";
    }
  }
  console.log(buff);
}

equalSumsEvenOddPosition(["100000", "100050"]);
// equalSumsEvenOddPosition(["123456", "124000"]);
*/

// 🔴 03. Sum Prime Non Prime
// 🤯 Просто число е такова естествено число, което се дели само на единица и на себе си.
// Следователно тези числа не могат да бъдат   разложени. Първите 10 прости числа са
// 2, 3, 5, 7, 11, 13, 17, 19, 23 и 29. Числото 1 не е просто число, въпреки че е било
// считано за такова в миналото.
// 🔴 3. Суми прости и непрости числа
/*
function sumPrimeNonPrime(input) {
  let index = 0;
  let sumPrimeNumber = 0;
  let sumNonPrimeNumber = 0;

  let command = input[index];
  index++;

  while (command !== "stop") {
    let num = Number(command);

    if (num < 0) {
      console.log("Number is negative.");
      command = input[index];
      index++;
      continue;
    }

    if (num == 1) {
      sumPrimeNumber += num;
      command = input[index];
      index++;
      continue;
    }
    let isPrime = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        // ако разделим num на i и резултатър е 0 значи че намерено непросто число
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      // isPrime === true
      sumPrimeNumber += num;
    } else {
      sumNonPrimeNumber += num;
    }

    command = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumber}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
// sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
*/

// 🔴 04. Train The Trainers
// 4. Train the Trainers
/*
function trainTheTrainers(input) {
  let index = 0;
  let n = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let sumGrade = 0;
  let counter = 0;

  while (command !== "Finish") {
    counter++;
    let presentationName = command;
    let sumCurrentGrade = 0;
    for (let i = 0; i < n; i++) {
      let grade = Number(input[index]);
      index++;

      sumCurrentGrade += grade;
    }

    let tempAvg = sumCurrentGrade / n;
    sumGrade += tempAvg;
    console.log(`${presentationName} - ${tempAvg.toFixed(2)}.`);

    command = input[index];
    index++;
  }

  let avgGrade = sumGrade / counter; 
  console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}

trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
// trainTheTrainers([
//   "3",
//   "Arrays",
//   "4.53",
//   "5.23",
//   "5.00",
//   "Lists",
//   "5.83",
//   "6.00",
//   "5.42",
//   "Finish",
// ]);
// trainTheTrainers([
//   "2",
//   "Objects and Classes",
//   "5.77",
//   "4.23",
//   "Dictionaries",
//   "4.62",
//   "5.02",
//   "RegEx",
//   "2.88",
//   "3.42",
//   "Finish",
// ]);
*/

// 🔴 05. Special Numbers
// 5. Специални числа

// 1️⃣ solution

/*
function specialNumbers(input) {
  let n = Number(input[0]);
  let result = "";

  for (let currentNum = 1111; currentNum <= 9999; currentNum++) {
    let currentNumStr = currentNum.toString();
    let isSpecial = true;

    for (let index = 0; index < currentNumStr.length; index++) {
      let currentDigit = Number(currentNumStr[index]);

      if (n % currentDigit !== 0) {
        isSpecial = false;
        break;
      }
    }

    if (isSpecial == true) {
      result += `${currentNumStr} `;
    }
  }
  console.log(result);
}
*/

// 2️⃣ solution

/*
function specialNumbers(input) {
  let N = Number(input[0]);
  let specialNumbers = [];

  for (let currentNumber = 1111; currentNumber <= 9999; currentNumber++) {
    let numberString = currentNumber.toString();

    let isSpecial = true;
    for (let i = 0; i < numberString.length; i++) {
      let digit = Number(numberString[i]);
      if (digit === 0 || N % digit !== 0) {
        isSpecial = false;
        break;
      }
    }

    if (isSpecial) {
      specialNumbers.push(currentNumber);
    }
  }

  console.log(specialNumbers.join(" "));
}

specialNumbers(["3"]);
// specialNumbers(["11"]);
// specialNumbers(["16"]);
*/

//
// 🔴 06. Cinema Tickets
// 6. Билети за кино
/*
function cinemaTickets(input) {
  let index = 0;

  let command = input[index];
  index++;

  let countStudentTicket = 0;
  let countStandardTicket = 0;
  let countKidTicket = 0;
  let countTotalTicket = 0;

  while (command !== "Finish") {
    let movieName = command;

    let freeSpace = Number(input[index]);
    index++;

    let ticketType = input[index];
    index++;

    let countSellTicket = 0;

    while (ticketType !== "End") {
      countSellTicket++;

      switch (ticketType) {
        case "student":
          countStudentTicket++;
          break;
        case "standard":
          countStandardTicket++;
          break;
        case "kid":
          countKidTicket++;
          break;
      }
      if (countSellTicket == freeSpace) {
        break;
      }
      ticketType = input[index];
      index++;
    }

    countTotalTicket += countSellTicket;
    let percentageFull = (countSellTicket / freeSpace) * 100;
    console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);

    command = input[index];
    index++;
  }

  let percentageStudentTicket = (countStudentTicket / countTotalTicket) * 100;
  let percentageStandardTicket = (countStandardTicket / countTotalTicket) * 100;
  let percentageKidTicket = (countKidTicket / countTotalTicket) * 100;

  console.log(`Total tickets: ${countTotalTicket}`);
  console.log(`${percentageStudentTicket.toFixed(2)}% student tickets.`);
  console.log(`${percentageStandardTicket.toFixed(2)}% standard tickets.`);
  console.log(`${percentageKidTicket.toFixed(2)}% kids tickets.`);
}

cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
// cinemaTickets([
//   "The Matrix",
//   "20",
//   "student",
//   "standard",
//   "kid",
//   "kid",
//   "student",
//   "student",
//   "standard",
//   "student",
//   "End",
//   "The Green Mile",
//   "17",
//   "student",
//   "standard",
//   "standard",
//   "student",
//   "standard",
//   "student",
//   "End",
//   "Amadeus",
//   "3",
//   "standard",
//   "standard",
//   "standard",
//   "Finish",
// ]);
*/
