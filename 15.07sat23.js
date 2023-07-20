// https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsoftuni%2Ebg%3A443%2Fdownloads%2Fsvn%2Fprogramming%2Dbasics%2D2022%2Ftrunk%2FJS%2F03%2EPB%2DJS%2DConditional%2DStatements%2DAdvanced%2F03%2E2%2520PB%2DJS%2DNested%2DConditional%2DStatements%2DLab%2Edocx%3FaccessKey%3D45004A00650036004F0058003700760035004F004F0042006500650047003600770048002B003300320032005A002F0076006E007000390032006F00340069007A0030004C00320054004C0035003400590059006D006F00380073002B0039006400530062003900380069007800560031004300590031005900300033003000&wdAccPdf=0&wdEmbedFS=1
// 💥 По-сложни проверки 💥

// • Вложени условни конструкции;
// • Switch-конструкция форматиран изход;
// • Задачи.
/*
function solve(input) {
  let name = "Todor";
  switch (name) {
    case "Pesho":
      console.log("Pesho");
      break; // if
    case "Todor":
      console.log("Todor");
      break; // else if
    default:
      console.log("Error"); // else
  }
}
solve([1, 5]);
*/

// 💥 01. Day of Week
/*
function dayOfWeek(input) {
  let day = Number(input[0]);

  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Error");
      break;
  }

//   if (day === 1) {
//     console.log("Monday");
//   } else if (day === 2) {
//     console.log("Tuesday");
//   } else if (day === 3) {
//     console.log("Wednesday");
//   } else if (day === 4) {
//     console.log("Thursday");
//   } else if (day === 5) {
//     console.log("Friday");
//   } else if (day === 6) {
//     console.log("Saturday");
//   } else if (day === 6) {
//     console.log("Sunday");
//   } else {
//     console.log("Error");
//   }
}

dayOfWeek([1]);
*/

// 💥 02.Weekend or Working Day
/*
function weekendOrWorkingDay(input) {
  let day = input[0];

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log("Working day");
      break;
    case "Saturday":
    case "Sunday":
      console.log("Weekend");
      break;
    default:
      console.log("Error");
      break;
  }
}
weekendOrWorkingDay(["Satur"]);
*/

// 💥 03. Animal Type
/*
function animalType(input) {
  let type = input[0];

  switch (type) {
    case "dog":
      console.log("mammal");
      break;
    case "crocodile":
    case "tortoise":
    case "snake":
      console.log("reptile");
      break;
    default:
      console.log("unknown");
      break;
  }
}

animalType(["dog"]);
animalType(["snake"]);
animalType(["cat"]);
*/

////////////////////
// 💥 04. Personal Titles
/*
function personalTitles(input) {
  let age = Number(input[0]);
  let gender = input[1];

  if (age < 16) {
    if (gender === "m") {
      console.log("Master");
    } else {
      console.log("Miss");
    }
  } else {
    if (gender === "f") {
      console.log("Ms.");
    } else {
      console.log("Mr.");
    }
  }
}
personalTitles(["13", "m"]);
*/

// 💥 05. Small Shop
/*
function smallShop(input) {
  let product = input[0];
  let town = input[1];
  let quantity = Number(input[2]);
  let price = 0;

  switch (town) {
    case "Sofia":
      switch (product) {
        case "coffee":
          price = quantity * 0.5;
          break;
        case "water":
          price = quantity * 0.8;
          break;
        case "beer":
          price = quantity * 1.2;
          break;
        case "sweets":
          price = quantity * 1.45;
          break;
        case "peanuts":
          price = quantity * 1.6;
          break;
      }
      break;
    case "Plovdiv":
      switch (product) {
        case "coffee":
          price = quantity * 0.4;
          break;
        case "water":
          price = quantity * 0.7;
          break;
        case "beer":
          price = quantity * 1.15;
          break;
        case "sweets":
          price = quantity * 1.3;
          break;
        case "peanuts":
          price = quantity * 1.5;
          break;
      }
      break;
    case "Varna":
      switch (product) {
        case "coffee":
          price = quantity * 0.45;
          break;
        case "water":
          price = quantity * 0.7;
          break;
        case "beer":
          price = quantity * 1.1;
          break;
        case "sweets":
          price = quantity * 1.35;
          break;
        case "peanuts":
          price = quantity * 1.55;
          break;
      }
      break;
  }

  
//   if (town === "Sofia") {
//     if (product === "coffee") {
//       price = quantity * 0.5;
//     } else if (product === "water") {
//       price = quantity * 0.8;
//     } else if (product === "beer") {
//       price = quantity * 1.2;
//     } else if (product === "sweets") {
//       price = quantity * 1.45;
//     } else {
//       price = quantity * 1.6;
//     }
//   } else if (town === "Plovdiv") {
//     if (product === "coffee") {
//       price = quantity * 0.4;
//     } else if (product === "water") {
//       price = quantity * 0.7;
//     } else if (product === "beer") {
//       price = quantity * 1.15;
//     } else if (product === "sweets") {
//       price = quantity * 1.3;
//     } else {
//       price = quantity * 1.5;
//     }
//   } else if (town === "Varna") {
//     if (product === "coffee") {
//       price = quantity * 0.45;
//     } else if (product === "water") {
//       price = quantity * 0.7;
//     } else if (product === "beer") {
//       price = quantity * 1.1;
//     } else if (product === "sweets") {
//       price = quantity * 1.35;
//     } else {
//       price = quantity * 1.55;
//     }
//   }

  console.log(price);
}
smallShop(["sweets", "Sofia", "2.23"]);
*/

//////////////////////////////////
// 💥 ЛОГИЧЕСКИ ОПЕРАТОРИ
// • Оператори, които комбинират или изключват условия
// • Връщат булев резултат(true или false)
// "&&" - И (Вярност на двете условия)
// - && - И - проверява изпълнението на няколко условия едновременно
// "||" - ИЛИ (Вярност на едното или на другото условие)
//  - || - Проверява дали е изпълнено поне едно измежду няколко условия
// "!" - ОТРИЦАНИЕ (Отрицание на условие)

// Пример:
// function solve(input) {
//   console.log(5 < 6 && 6 < 7); // true
// }

// solve([4, 10]);

// function solve(input) {
//   console.log(7 < 6 || 6 < 7); // true
// }

// solve([4, 10]);

////////////////
// 💥 06. Number in Range
/*
function numberInRange(input) {
  let num = Number(input);

  if (num >= -100 && num <= 100 && num != 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }

  //   if (num >= -100) {
  //     if (num <= 100) {
  //       if (num != 0) {
  //         console.log("Yes");
  //       } else {
  //         console.log("No");
  //       }
  //     } else {
  //       console.log("No");
  //     }
  //   } else {
  //     console.log("No");
  //   }
}
numberInRange([0]);
*/

// 💥 07.Working Hours
/*
function workingHours(input) {
  let hour = Number(input[0]);
  let day = input[1];

  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday" ||
    day === "Saturday"
  ) {
    if (hour >= 10 && hour <= 18) {
      console.log("open");
    } else {
      console.log("closed");
    }
  } else {
    console.log("closed");
  }
}
workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);
*/

///////////////////
// 💥 08.Cinema Ticket
// логически оператори
/*
function cinemaTicket(input) {
  let day = input[0];

  if (day === "Monday" || day === "Tuesday" || day === "Friday") {
    console.log(12);
  } else if (day === "Wednesday" || day === "Thursday") {
    console.log(14);
  } else if (day === "Saturday" || day === "Sunday") {
    console.log(16);
  }
}

cinemaTicket(["Monday"]);
cinemaTicket(["Friday"]);
cinemaTicket(["Sunday"]);
*/

// 💥 09. Fruit or Vegetable
/*
function fruitOrVegetable(input) {
  let type = input[0];
  switch (type) {
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes":
      console.log("fruit");
      break;
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
      console.log("vegetable");
      break;
    default:
      console.log("unknown");
      break;
  }
}

fruitOrVegetable(["banana"]);
*/

/////////////////////////////////////
// ВЛОЖЕНИ УСЛОВНИ КОНСТРУКЦИИ
/*
function solve(input) {
  if (true) {
    if (true) {
      let;
    }
  }
}
solve([5, 10]);
*/

/////////////////////////////
// ЛОГИЧЕСКО ОТРИЦАНИЕ

// 💥 10. Invalid Number
/*
function invalidNumber(input) {
  let num = Number(input[0]);

  if (!(num >= 100 && num <= 200) && num !== 0) {
    console.log("invalid");
  }

  // second solution:
  //   if (num >= 100 && num <= 200) {
  //   } else if (num === 0) {
  //   } else {
  //     console.log("invalid");
  //   }
}

invalidNumber(["75"]);
invalidNumber(["150"]);
invalidNumber(["220"]);
invalidNumber(["199"]);
invalidNumber(["-1"]);
invalidNumber(["100"]);
invalidNumber(["200"]);
invalidNumber(["0"]);
*/

///////////
// Date - Дата
/*
function solve(input) {
  let date = new Date();

  console.log(date);
}
solve([5, 10]);
*/

// 💥 11. Fruit Shop
/*
function fruitShop(input) {
  let fruits = input[0];
  let day = input[1];
  let quantity = input[2];
  let price = 0;
  if (
    fruits == `banana` ||
    fruits == `apple` ||
    fruits == `orange` ||
    fruits == `grapefruit` ||
    fruits == `kiwi` ||
    fruits == `pineapple` ||
    fruits == `grapes`
  ) {
    if (
      day === "Monday" ||
      day === "Tuesday" ||
      day === "Wednesday" ||
      day === "Thursday" ||
      day === "Friday"
    ) {
      if (fruits === "banana") {
        price = quantity * 2.5;
      } else if (fruits === "apple") {
        price = quantity * 1.2;
      } else if (fruits === "orange") {
        price = quantity * 0.85;
      } else if (fruits === "grapefruit") {
        price = quantity * 1.45;
      } else if (fruits === "kiwi") {
        price = quantity * 2.7;
      } else if (fruits === "pineapple") {
        price = quantity * 5.5;
      } else price = quantity * 3.85;
      console.log(price.toFixed(2));
    } else if (day === "Saturday" || day === "Sunday") {
      if (fruits === "banana") {
        price = quantity * 2.7;
      } else if (fruits === "apple") {
        price = quantity * 1.25;
      } else if (fruits === "orange") {
        price = quantity * 0.9;
      } else if (fruits === "grapefruit") {
        price = quantity * 1.6;
      } else if (fruits === "kiwi") {
        price = quantity * 3.0;
      } else if (fruits === "pineapple") {
        price = quantity * 5.6;
      } else price = quantity * 4.2;
      console.log(price.toFixed(2));
    } else console.log(`error`);
  } else console.log(`error`);
}
fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);
*/

// 💥 12. Trade Commissions

// function tradeCommissions(input) {
//   let city = input[0];
//   let sales = Number(input[1]);

//   if (0 <= sales && sales <= 500) {
//     switch (city) {
//       case "Sofia":
//         console.log((sales * 0.05).toFixed(2));
//         break;
//       case "Varna":
//         console.log((sales * 0.045).toFixed(2));
//         break;
//       case "Plovdiv":
//         console.log((sales * 0.055).toFixed(2));
//         break;
//       default:
//         console.log("error");
//         break;
//     }
//   } else if (500 < sales && sales <= 1000) {
//     switch (city) {
//       case "Sofia":
//         console.log((sales * 0.07).toFixed(2));
//         break;
//       case "Varna":
//         console.log((sales * 0.075).toFixed(2));
//         break;
//       case "Plovdiv":
//         console.log((sales * 0.08).toFixed(2));
//         break;
//       default:
//         console.log("error");
//         break;
//     }
//   } else if (1000 < sales && sales <= 10000) {
//     switch (city) {
//       case "Sofia":
//         console.log((sales * 0.08).toFixed(2));
//         break;
//       case "Varna":
//         console.log((sales * 0.1).toFixed(2));
//         break;
//       case "Plovdiv":
//         console.log((sales * 0.12).toFixed(2));
//         break;
//       default:
//         console.log("error");
//         break;
//     }
//   } else if (sales > 10000) {
//     switch (city) {
//       case "Sofia":
//         console.log((sales * 0.12).toFixed(2));
//         break;
//       case "Varna":
//         console.log((sales * 0.13).toFixed(2));
//         break;
//       case "Plovdiv":
//         console.log((sales * 0.145).toFixed(2));
//         break;
//       default:
//         console.log("error");
//         break;
//     }
//   } else {
//     console.log("error");
//   }
// }
// tradeCommissions(["Sofia", "1500"]);
// tradeCommissions(["Plovdiv", "499.99"]);
// tradeCommissions(["Varna", "3874.50"]);
// tradeCommissions(["Kaspichan", "-50"]);

// second solution of 💥 12. Trade Commissions

function tradeCommissions(input) {
  let city = input[0];
  let sales = Number(input[1]);
  let commission = 0;

  switch (city) {
    case "Sofia":
      if (sales >= 0 && sales <= 500) {
        commission = sales * 0.05;
      } else if (sales > 500 && sales <= 1000) {
        commission = sales * 0.07;
      } else if (sales > 1000 && sales <= 10000) {
        commission = sales * 0.08;
      } else if (sales > 10000) {
        commission = sales * 0.12;
      } else {
        console.log("error");
        return;
      }
      break;

    case "Varna":
      if (sales >= 0 && sales <= 500) {
        commission = sales * 0.045;
      } else if (sales > 500 && sales <= 1000) {
        commission = sales * 0.075;
      } else if (sales > 1000 && sales <= 10000) {
        commission = sales * 0.1;
      } else if (sales > 10000) {
        commission = sales * 0.13;
      } else {
        console.log("error");
        return;
      }
      break;

    case "Plovdiv":
      if (sales >= 0 && sales <= 500) {
        commission = sales * 0.055;
      } else if (sales > 500 && sales <= 1000) {
        commission = sales * 0.08;
      } else if (sales > 1000 && sales <= 10000) {
        commission = sales * 0.12;
      } else if (sales > 10000) {
        commission = sales * 0.145;
      } else {
        console.log("error");
        return;
      }
      break;

    default:
      console.log("error");
      return;
  }

  console.log(commission.toFixed(2));
}

tradeCommissions(["Sofia", "1500"]); // Output: 120.00
tradeCommissions(["Varna", "500"]); // Output: 22.50
tradeCommissions(["Plovdiv", "3000"]); // Output: 360.00
tradeCommissions(["Burgas", "200"]); // Output: error
