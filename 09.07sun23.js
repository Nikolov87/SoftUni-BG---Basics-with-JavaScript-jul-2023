// https://softuni.bg/trainings/resources/officedocument/84785/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-programming-basics-with-javascript-july-2023/4161

// 01. Sum Seconds
/*
function sumSeconds(input) {
  let timeFirst = Number(input.shift());
  let timeSecond = Number(input.shift());
  let timeThird = Number(input.shift());

  let totalTime = timeFirst + timeSecond + timeThird;

  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);
*/

// 02. Bonus Score
/*
function bonusScore([input]) {
  let num = Number(input);
  let bonus = 0.0;

  if (num <= 100) {
    bonus = 5;
  } else if (num > 100 && num < 1000) {
    bonus = num * 0.2;
  } else if (num > 1000) {
    bonus = num * 0.1;
  }

  if (num % 2 == 0) {
    bonus += 1;
  } else if (num % 10 == 5) {
    bonus += 2;
  }
  console.log(bonus);
  console.log(num + bonus);
}

bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);
*/

///////////////
// 03. Time + 15 Minutes
// First solution
/*
function timePlus15Min(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]) + 15;

  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }

  if (hours >= 24) {
    hours -= 24;
  }

  if (minutes < 10) {
    console.log(`${hours}:0${minutes}`);
  } else {
    console.log(`${hours}:${minutes}`);
  }
}

timePlus15Min(["1", "46"]);
timePlus15Min(["0", "01"]);
timePlus15Min(["23", "59"]);
timePlus15Min(["11", "08"]);
timePlus15Min(["12", "49"]);
*/

// Second solution
/*
function timePlus15Min(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let totallMinutes = hours * 60 + minutes + 15;
  let newHours = Math.floor(totallMinutes / 60) % 24;
  let newMinutes = totallMinutes % 60;

  let fixMinutes = newMinutes < 10 ? "0" + newMinutes : newMinutes;

  console.log(`${newHours}:${fixMinutes}`);
}

timePlus15Min(["1", "46"]);
timePlus15Min(["0", "01"]);
timePlus15Min(["23", "59"]);
timePlus15Min(["11", "08"]);
timePlus15Min(["12", "49"]);
*/

////////////////
// 04. Toy Shop
/*
function toyShop(input) {
  let tripPrice = Number(input[0]);
  let puzzles = Number(input[1]);
  let dolls = Number(input[2]);
  let bears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let puzzlesPrice = puzzles * 2.6;
  let dollsPrice = dolls * 3;
  let bearsPrice = bears * 4.1;
  let minionsPrice = minions * 8.2;
  let trucksPrice = trucks * 2;

  let totalPrice =
    puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
  let totalCount = puzzles + dolls + bears + minions + trucks;

  if (totalCount >= 50) {
    totalPrice = totalPrice * 0.75; // adding 25% off if the totall ptice is = or more then 50lv
  }

  totalPrice = totalPrice * 0.9;

  if (totalPrice >= tripPrice) {
    console.log(`Yes! ${(totalPrice - tripPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(tripPrice - totalPrice).toFixed(2)} lv needed.`
    );
  }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
*/

// 05. Godzilla vs. Kong
/*
function gzillaVsKong(input) {
  let budget = Number(input[0]);
  let people = Number(input[1]);
  let pricePerPerson = Number(input[2]);

  let decorPrice = budget * 0.1;
  let totallPeoplePrice = people * pricePerPerson;

  if (people > 150) {
    totallPeoplePrice *= 0.9;
  }

  let totalMoney = decorPrice + totallPeoplePrice;

  if (budget >= totalMoney) {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(budget - totalMoney).toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(totalMoney - budget).toFixed(2)} leva more.`);
  }
}
gzillaVsKong(["20000", "120", "55.5"]);
gzillaVsKong(["15437.62", "186", "57.99"]);
gzillaVsKong(["9587.88", "222", "55.68"]);
*/

////////////////////////////
//06. World Swimming Record

/*
function worldSwimmingRecord(input) {
  let recordInSec = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let timeForOneMeter = Number(input[2]);

  let totallTimeNeeded = distanceInMeters * timeForOneMeter;
  let delay = Math.floor(distanceInMeters / 15) * 12.5;
  let totallTimeWithDelay = totallTimeNeeded + delay;

  if (totallTimeWithDelay < recordInSec) {
    console.log(
      `Yes, he succeeded! The new world record is ${totallTimeWithDelay.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${(totallTimeWithDelay - recordInSec).toFixed(
        2
      )} seconds slower.`
    );
  }
}
worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
*/

///////////////
// 07. Shopping
/*
function shopping(input) {
  let budget = Number(input[0]);
  let GPU = Number(input[1]);
  let CPU = Number(input[2]);
  let RAM = Number(input[3]);

  let moneyForGPU = GPU * 250;
  let moneyForCPU = moneyForGPU * 0.35 * CPU;
  let moneyForRAM = moneyForGPU * 0.1 * RAM;

  let totallSum = moneyForGPU + moneyForCPU + moneyForRAM;

  if (GPU > CPU) {
    totallSum *= 0.85;
  }

  if (totallSum <= budget) {
    console.log(`You have ${(budget - totallSum).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${(totallSum - budget).toFixed(2)} leva more!`
    );
  }
}
shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
*/

//////////////////
// 08. Lunch Break
/*
function lunchBreak(input) {
  let name = input[0];
  let episodeDuration = Number(input[1]);
  let restDuration = Number(input[2]);

  let lunchTime = restDuration / 8;
  let restTime = restDuration / 4;

  let timeLeft = restDuration - lunchTime - restTime;

  if (episodeDuration > timeLeft) {
    console.log(
      `You don't have enough time to watch ${name}, you need ${Math.ceil(
        episodeDuration - timeLeft
      )} more minutes.`
    );
  } else {
    console.log(
      `You have enough time to watch ${name} and left with ${Math.ceil(
        timeLeft - episodeDuration
      )} minutes free time.`
    );
  }
}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
*/
////////////////////////////////////////////////////////////////
// Math.floor(); Rounds the number down - Закръгля числото надолу
//////////////////
// Math.ceil(); Rounds the number up - Закръгля числото на горе
//////////////////////////////////////////////////////////////
