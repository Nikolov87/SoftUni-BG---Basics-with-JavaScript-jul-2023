//https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsoftuni%2Ebg%3A443%2Fdownloads%2Fsvn%2Fprogramming%2Dbasics%2D2022%2Ftrunk%2FJS%2F03%2EPB%2DJS%2DConditional%2DStatements%2DAdvanced%2F03%2E3%2520PB%2DJS%2DNested%2DConditional%2DStatements%2D%25D0%2595xercise%2Edocx%3FaccessKey%3D45004A00650036004F0058003700760035004F004F0042006500650047003600770048002B003300320032005A002F0076006E007000390032006F00340069007A0030004C00320054004C0035003400590059006D006F00380073002B0039006400530062003900380069007800560031004300590031005900300033003000&wdAccPdf=0&wdEmbedFS=1

// 💥 Conditional Statements Advanced - Exercise

// Вложени условни конструкции

// 💥 01. Cinema
/*
function cinema(input) {
  let projectionType = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);

  let ticketPrice = 0;

  if (projectionType === "Premiere") {
    ticketPrice = 12.0;
  } else if (projectionType === "Normal") {
    ticketPrice = 7.5;
  } else if (projectionType === "Discount") {
    ticketPrice = 5.0;
  } else {
    console.log("Invalid projection type.");
    return;
  }

  let totalIncome = ticketPrice * rows * columns;
  console.log(totalIncome.toFixed(2) + " leva");
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
*/

// 💥 02. Summer Outfit
/*
function summerOutfit(input) {
  let degrees = Number(input[0]);
  let timeOfDay = input[1];
  let outfit = "";
  let shoes = "";

  if (degrees >= 10 && degrees <= 18) {
    if (timeOfDay === "Morning") {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (timeOfDay === "Afternoon") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (timeOfDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (degrees > 18 && degrees <= 24) {
    if (timeOfDay === "Morning") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (timeOfDay === "Afternoon") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (timeOfDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (degrees >= 25) {
    if (timeOfDay === "Morning") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (timeOfDay === "Afternoon") {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    } else if (timeOfDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }

  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["16", "Morning"]); // Output: It's 16 degrees, get your Sweatshirt and Sneakers.
summerOutfit(["22", "Afternoon"]); // Output: It's 22 degrees, get your T-Shirt and Sandals.
summerOutfit(["28", "Evening"]); // Output: It's 28 degrees, get your Shirt and Moccasins.
*/

// 💥 03. New House
/*
function newHouse(input) {
  let type = input[0];
  let count = Number(input[1]);
  let budget = Number(input[2]);

  let price = 0;

  switch (type) {
    case "Roses":
      price = count * 5;
      if (count > 80) {
        price = price * 0.9; // -10% from the price
      }
      break;
    case "Dahlias":
      price = count * 3.8;
      if (count > 90) {
        price = price * 0.85; // -15% from the price
      }
      break;
    case "Tulips":
      price = count * 2.8;
      if (count > 80) {
        price = price * 0.85; // -15%
      }
      break;
    case "Narcissus":
      price = count * 3.0;
      if (count < 120) {
        price = price * 1.15; // +15% adding to the price
      }
      break;
    case "Gladiolus":
      price = count * 2.5;
      if (count < 80) {
        price = price * 1.2; // +20% adding to the price
      }
      break;
  }

  let diff = Math.abs(price - budget);
  if (budget >= price) {
    console.log(
      `Hey, you have a great garden with ${count} ${type} and ${diff.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);

// 🚨 🆕 Math.abs()
// The Math. abs() function returns the absolute value of a number.
// EXAMPLE : 1
//let absolute_value = Math.abs(-55.925);
//console.log(absolute_value);
// OUTPUT: 55.925
*/

// 💥 04. Fishing Boat
/*
function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let count = Number(input[2]);

  let price = 0;

  if (season === "Spring") {
    price = 3000;
  } else if (season === "Summer" || season === "Autumn") {
    price = 4200;
  } else {
    price = 2600;
  }
  if (count <= 6) {
    price = price * 0.9;
  } else if (count > 6 && count <= 11) {
    price = price * 0.85;
  } else {
    price = price * 0.75;
  }
  // %  - проверява числото 2 дали се / (дели) на 2 без остатък
  // демек дали е четно или не четно :D
  if (count % 2 == 0 && season !== "Autumn") {
    price = price * 0.95;
  }
  let diff = Math.abs(budget - price);
  if (budget >= price) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);
*/

// 💥 05. Journey
/*
function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  res = 0;
  type = "";
  let destination = "";

  if (season === "summer") {
    type = "Camp";
  } else {
    type = "Hotel";
  }

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      res = budget * 0.3;
    } else {
      res = budget * 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    if (season === "summer") {
      res = budget * 0.4;
    } else {
      res = budget * 0.8;
    }
  } else {
    destination = "Europe";
    type = "Hotel";
    res = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${type} - ${res.toFixed(2)}`);
}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);
*/

// 💥 06. Operations Between Numbers
/*
function operationsBetweenNumbers(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let op = input[2];
  let result = 0;

  if (op === "+" || op === "-" || op === "*") {
    if (op === "+") {
      result = n1 + n2;
    } else if (op === "-") {
      result = n1 - n2;
    } else {
      result = n1 * n2;
    }
    if (result % 2 === 0) {
      console.log(`${n1} ${op} ${n2} = ${result} - even`); // за четен резлтат
    } else {
      console.log(`${n1} ${op} ${n2} = ${result} - odd`); // за нечетен резултат
    }
  } else if (n2 === 0) {
    console.log(`Cannot divide ${n1} by zero`);
  } else if (op === "/") {
    result = n1 / n2;
    console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
  } else {
    result = n1 % n2;
    console.log(`${n1} % ${n2} = ${result}`);
  }
}

//   //  Second solution
//   switch (op) {
//     case "+":
//       result = n1 + n2;
//       if (result % 2 === 0) {
//         console.log(`${n1} ${op} ${n2} = ${result} - even`); // за четен резлтат
//       } else {
//         console.log(`${n1} ${op} ${n2} = ${result} - odd`); // за нечетен резултат
//       }
//       break;
//     case "-":
//       result = n1 - n2;
//       if (result % 2 === 0) {
//         console.log(`${n1} ${op} ${n2} = ${result} - even`); // за четен резлтат
//       } else {
//         console.log(`${n1} ${op} ${n2} = ${result} - odd`); // за нечетен резултат
//       }
//       break;
//     case "*":
//       result = n1 * n2;
//       if (result % 2 === 0) {
//         console.log(`${n1} ${op} ${n2} = ${result} - even`); // за четен резлтат
//       } else {
//         console.log(`${n1} ${op} ${n2} = ${result} - odd`); // за нечетен резултат
//       }
//       break;
//     case "/":
//       if (n2 === 0) {
//         console.log(`Cannot divide ${n1} by zero`);
//       } else {
//         result = n1 / n2;
//         console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
//       }
//       break;
//     case "%":
//       if (n2 === 0) {
//         console.log(`Cannot divide ${n1} by zero`);
//       } else {
//         result = n1 % n2;
//         console.log(`${n1} % ${n2} = ${result}`);
//       }
//       break;
//   }
// }
  
operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["10", "0", "%"]);
operationsBetweenNumbers(["7", "3", "*"]);
*/

// 💥 07. Hotel Room
/*
function hotelStay(input) {
  const month = input[0];
  const nights = Number(input[1]);

  let studioPrice = 0;
  let apartmentPrice = 0;

  if (month === "May" || month === "October") {
    studioPrice = 50 * nights;
    apartmentPrice = 65 * nights;

    if (nights > 14) {
      studioPrice *= 0.7;
    } else if (nights > 7) {
      studioPrice *= 0.95;
    }
  } else if (month === "June" || month === "September") {
    studioPrice = 75.2 * nights;
    apartmentPrice = 68.7 * nights;

    if (nights > 14) {
      studioPrice *= 0.8;
    }
  } else if (month === "July" || month === "August") {
    studioPrice = 76 * nights;
    apartmentPrice = 77 * nights;
  }

  if (nights > 14) {
    apartmentPrice *= 0.9;
  }

  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

// Примерни извиквания на функцията:
hotelStay(["May", "15"]); // Output: Apartment: 877.50 lv. Studio: 525.00 lv.
hotelStay(["June", "14"]); // Output: Apartment: 961.80 lv. Studio: 1052.80 lv.
hotelStay(["August", "20"]); // Output: Apartment: 1386.00 lv. Studio: 1520.00 lv.
*/

// 💥 08. On Time for the Exam
/*
function onTimeForTheExam(input) {
  let hoursExam = Number(input[0]);
  let minExam = Number(input[1]);
  let hoursArrive = Number(input[2]);
  let minArrive = Number(input[3]);

  let timeExam = hoursExam * 60 + minExam;
  let timeArrive = hoursArrive * 60 + minArrive;

  let diff = Math.abs(timeExam - timeArrive);
  let h = Math.floor(diff / 60);
  let min = diff % 60;

  if (timeArrive < timeExam && timeExam - timeArrive > 30) {
    console.log("Early");

    if (h > 0) {
      if (min < 10) {
        console.log(`${h}:0${min} hours before the start`);
      } else {
        console.log(`${h}:${min} hours before the start`);
      }
    } else {
      console.log(`${min} minutes before the start`);
    }
  } else if (timeArrive <= timeExam) {
    console.log("On time");
    if (min > 0) {
      console.log(`${min} minutes before the start`);
    }
  } else {
    console.log("Late");
    if (h > 0) {
      if (min < 10) {
        console.log(`${h}:0${min} hours after the start`);
      } else {
        console.log(`${h}:${min} hours after the start`);
      }
    } else {
      console.log(`${min} minutes after the start`);
    }
  }
}

onTimeForTheExam(["9", "30", "9", "50"]);
onTimeForTheExam(["9", "00", "8", "30"]);
onTimeForTheExam(["16", "00", "15", "00"]);
onTimeForTheExam(["9", "00", "10", "30"]);
onTimeForTheExam(["14", "00", "13", "55"]);
onTimeForTheExam(["11", "30", "8", "12"]);
onTimeForTheExam(["10", "00", "10", "00"]);
onTimeForTheExam(["11", "30", "10", "55"]);
onTimeForTheExam(["11", "30", "12", "29"]);
*/

// 💥 09. Ski Trip
function skiVacation(input) {
  const days = Number(input[0]);
  const roomType = input[1];
  const rating = input[2];

  let price = 0;

  if (roomType === "room for one person") {
    price = 18 * (days - 1);
  } else if (roomType === "apartment") {
    price = 25 * (days - 1);
    if (days < 10) {
      price *= 0.7;
    } else if (days <= 15) {
      price *= 0.65;
    } else {
      price *= 0.5;
    }
  } else if (roomType === "president apartment") {
    price = 35 * (days - 1);
    if (days < 10) {
      price *= 0.9;
    } else if (days <= 15) {
      price *= 0.85;
    } else {
      price *= 0.8;
    }
  }

  if (rating === "positive") {
    price *= 1.25;
  } else if (rating === "negative") {
    price *= 0.9;
  }

  console.log(price.toFixed(2));
}

// Примерни извиквания на функцията:
skiVacation(["14", "apartment", "positive"]); // Output: 264.06
skiVacation(["30", "president apartment", "negative"]); // Output: 730.80
skiVacation(["12", "room for one person", "positive"]); // Output: 247.50
skiVacation(["2", "apartment", "positive"]); // Output: 21.88
