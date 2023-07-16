// https://softuni.bg/trainings/resources/video/86219/video-02-july-2023-ivaylo-dimitrov-programming-basics-with-javascript-july-2023/4161

//03. Deposit Calculator
/*
function demo(input) {
  let depositSum = Number(input[0]);
  let period = Number(input[1]);
  let annualInterestRate = Number(input[2] / 100);

  let totalSum = depositSum + period * ((depositSum * annualInterestRate) / 12);
  console.log(totalSum);
}
demo(["200 ", "3 ", "5.7 "]);
*/

//04. Vacation Books List
/*
function vacationBooksList(input) {
  let pages = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let days = Number(input[2]);

  let timeForRead = pages / pagesPerHour;
  let timePerDay = timeForRead / days;
  console.log(timePerDay);
}
vacationBooksList(["212 ", "20 ", "2 "]);
*/

//05. Supplies for School
/*
function suppliesForSchool(input) {
  let pensPrice = Number(input[0]);
  let markersPrice = Number(input[1]);
  let liters = Number(input[2]);
  let discount = Number(input[3]);

  let pensSum = pensPrice * 5.8;
  let markersSum = markersPrice * 7.2;
  let litersSum = liters * 1.2;

  let totalSum = pensSum + markersSum + litersSum;
  let sumAfterDiscount = totalSum - (totalSum * discount) / 100;

  console.log(sumAfterDiscount);
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
*/

// 06. Repainting
/*
function repainting(input) {
  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let thinner = Number(input[2]);
  let neededHours = Number(input[3]);
  let bagPrice = 0.4;

  let nylonTotal = (nylon + 2) * 1.5;
  let painPrice = paint * 1.1 * 14.5;
  let thinnerTotal = thinner * 5;

  let totalSumMatirials = nylonTotal + painPrice + thinnerTotal + bagPrice;

  let priceJob = totalSumMatirials * 0.3 * neededHours;

  let total = totalSumMatirials + priceJob;

  console.log(total);
}
repainting(["10 ", "11 ", "4 ", "8 "]);
*/

//07. Food Delivery
/*
function foodDelivery(input) {
  let chickenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let vegetarianMenu = Number(input[2]);

  let chickenMenuPrice = chickenMenu * 10.35;
  let fishMenuPrice = fishMenu * 12.4;
  let vegetarianMenuPrice = vegetarianMenu * 8.15;
  let deliveryPrice = 2.5;

  let allPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;

  let sweetPrice = allPrice * 0.2;

  let totalPrice = allPrice + sweetPrice + deliveryPrice;

  console.log(totalPrice);
}
foodDelivery(["2 ", "4 ", "3 "]);
*/

// 08. Basketball Equipment
/*
function basketballEquipment(input) {
  let tax = Number(input[0]);

  let basketballShoesPrice = tax * 0.6;
  let basketballOutfitPrice = basketballShoesPrice * 0.8;
  let basketballBallPrice = basketballOutfitPrice / 4;
  let basketballAccessorisePrice = basketballBallPrice / 5;

  let totalSum =
    tax +
    basketballShoesPrice +
    basketballOutfitPrice +
    basketballBallPrice +
    basketballAccessorisePrice;

  console.log(totalSum);
}
basketballEquipment(["365 "]);
*/

// 09. Fish Tank

function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let percent = Number(input[3]);

  let totalVolume = length * width * height;
  let volumeInLiters = totalVolume / 1000;
  let total = volumeInLiters * (1 - percent / 100);

  console.log(total);
}
fishTank(["85 ", "75 ", "47 ", "17 "]);
fishTank(["105 ", "77 ", "89 ", "18.5 "]);
