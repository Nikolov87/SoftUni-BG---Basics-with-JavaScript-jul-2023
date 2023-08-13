// 01. Christmas Preparation 💯/💯
/*
function christmasPreparation(input) {
  let rollPaper = Number(input[0]);
  let rollFabric = Number(input[1]);
  let glue = Number(input[2]);
  let discount = Number(input[3]);

  let rollPaperSum = rollPaper * 5.8;
  let rollFabricSum = rollFabric * 7.2;
  let glueSum = glue * 1.2;

  let totalSum = rollPaperSum + rollFabricSum + glueSum;
  let sumAfterDiscount = totalSum - (totalSum * discount) / 100;

  console.log(sumAfterDiscount.toFixed(3));
}

christmasPreparation(["2", "3", "2.5", "25"]);
christmasPreparation(["4", "2", "5", "13"]);
christmasPreparation(["7", "8", "0.5", "45"]);
*/

// 02. Maiden Party 💯/💯

// function maidenParty(input) {
//   let;
// }

// maidenParty(["40.8", "20", "25", "30", "50", "10"]);
// maidenParty(["320", "8", "2", "5", "5", "1"]);
/*
function calculateProfit(input) {
  // Превръщаме входните данни в числа
  const partyCost = parseFloat(input[0]);
  let loveLetters = parseInt(input[1]);
  let waxRoses = parseInt(input[2]);
  let keychains = parseInt(input[3]);
  let caricatures = parseInt(input[4]);
  let fortuneSurprises = parseInt(input[5]);

  // Цени на продуктите
  let loveLetterPrice = 0.6;
  let waxRosePrice = 7.2;
  let keychainPrice = 3.6;
  let caricaturePrice = 18.2;
  let fortuneSurprisePrice = 22.0;

  // Изчисляваме общата цена на всички артикули
  let totalLoveLettersPrice = loveLetters * loveLetterPrice;
  let totalWaxRosesPrice = waxRoses * waxRosePrice;
  let totalKeychainsPrice = keychains * keychainPrice;
  let totalCaricaturesPrice = caricatures * caricaturePrice;
  let totalFortuneSurprisesPrice = fortuneSurprises * fortuneSurprisePrice;

  // Обща сума на продажбите
  let totalSales =
    totalLoveLettersPrice +
    totalWaxRosesPrice +
    totalKeychainsPrice +
    totalCaricaturesPrice +
    totalFortuneSurprisesPrice;

  // Проверка за отстъпка
  let totalItems =
    loveLetters + waxRoses + keychains + caricatures + fortuneSurprises;
  let totalAfterDiscount = totalSales;

  if (totalItems >= 25) {
    let discount = totalSales * 0.35;
    totalAfterDiscount -= discount;
  }

  // Разходи за хостинг
  let hostingExpenses = totalAfterDiscount * 0.1;
  totalAfterDiscount -= hostingExpenses;

  // Проверка дали има достатъчно пари за партито
  if (totalAfterDiscount >= partyCost) {
    let remainingMoney = (totalAfterDiscount - partyCost).toFixed(2);
    console.log(`Yes! ${remainingMoney} lv left.`);
  } else {
    let neededMoney = (partyCost - totalAfterDiscount).toFixed(2);
    console.log(`Not enough money! ${neededMoney} lv needed.`);
  }
}

calculateProfit(["40.8", "20", "25", "30", "50", "10"]);
*/

// 03. Excursion Calculator 💯/💯
/*
function calculateExcursionPrice(input) {
  const groupSize = Number(input[0]);
  const season = input[1];

  let pricePerPerson = 0;

  if (season === "spring") {
    if (groupSize <= 5) {
      pricePerPerson = 50.0;
    } else {
      pricePerPerson = 48.0;
    }
  } else if (season === "summer") {
    if (groupSize <= 5) {
      pricePerPerson = 48.5;
    } else {
      pricePerPerson = 45.0;
    }
    pricePerPerson *= 0.85; // 15% discount
  } else if (season === "autumn") {
    if (groupSize <= 5) {
      pricePerPerson = 60.0;
    } else {
      pricePerPerson = 49.5;
    }
  } else if (season === "winter") {
    if (groupSize <= 5) {
      pricePerPerson = 86.0;
    } else {
      pricePerPerson = 85.0;
    }
    pricePerPerson *= 1.08; // 8% increase
  }

  const totalCost = groupSize * pricePerPerson;
  console.log(`${totalCost.toFixed(2)} leva.`);
}

calculateExcursionPrice(["5", "spring"]);
calculateExcursionPrice(["10", "summer"]);
calculateExcursionPrice(["15", "autumn"]);
calculateExcursionPrice(["20", "winter"]);
*/

// 04. Workout 💯/💯
/*
function workout(input) {
  let n = parseInt(input[0]);
  let firstDay = parseFloat(input[1]);

  let allKm = firstDay;
  for (let i = 0; i < n; i++) {
    let nextDay = parseFloat(input[i + 2]);
    firstDay = firstDay + firstDay * (nextDay / 100);
    allKm += firstDay;
  }

  if (allKm >= 1000) {
    console.log(
      `You've done a great job running ${Math.ceil(
        allKm - 1000
      )} more kilometers!`
    );
  } else {
    console.log(
      `Sorry Mrs. Ivanova, you need to run ${Math.ceil(
        1000 - allKm
      )} more kilometers`
    );
  }
}

workout(["5", "30", "10", "15", "20", "5", "12"]);
workout(["4", "100", "30", "50", "60", "80"]);
*/

//

//
// 05. Best Player 💯/💯
/*
function solve(input) {
  let index = 0;
  let bestPlayer = "";
  let maxGoals = 0;

  while (input[index] !== "END") {
    let playerName = input[index++];
    let goals = Number(input[index++]);

    if (goals > maxGoals) {
      bestPlayer = playerName;
      maxGoals = goals;
    }

    if (maxGoals >= 10) {
      break;
    }
  }

  console.log(`${bestPlayer} is the best player!`);

  if (maxGoals >= 3) {
    console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${maxGoals} goals.`);
  }
}

// Примерен вход:
solve(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);

solve(["Silva", "5", "Harry Kane", "10"]);

solve(["Petrov", "2", "Drogba", "11"]);
*/

// 06. Sum And Product 5️⃣3️⃣/1️⃣0️⃣0️⃣ %
/*
function sumAndProduct(n) {
  let found = false;

  for (let a = 1; a <= 9 && !found; a++) {
    for (let b = 9; b >= a && !found; b--) {
      for (let c = 0; c <= 9 && !found; c++) {
        for (let d = 9; d >= c && !found; d--) {
          if (a + b + c + d === a * b * c * d && n % 10 === 3) {
            const result = `${a} * 1000 + ${b} * 100 + ${c} * 10 + ${d}`;
            console.log(`${result} = ${a}${b}${c}${d}`);
            found = true;
            break;
          }
          if ((a * b * c * d) / (a + b + c + d) === 3 && n % 3 === 0) {
            const result = `${d} * 1000 + ${c} * 100 + ${b} * 10 + ${a}`;
            console.log(`${result} = ${d}${c}${b}${a}`);
            found = true;
            break;
          }
        }
      }
    }
  }

  if (!found) {
    console.log("Nothing found");
  }
}

sumAndProduct(123);
*/
//

///////////
