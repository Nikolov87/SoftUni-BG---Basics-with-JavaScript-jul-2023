// https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsoftuni%2Ebg%3A443%2Fdownloads%2Fsvn%2Fprogramming%2Dbasics%2D2022%2Ftrunk%2FExam%2DPreparation%2FExam%2DPreparation%2DJuly%2D2021%2Edocx%3FaccessKey%3D45004A00650036004F0058003700760035004F004F0042006500650047003600770048002B003300320032005A002F0076006E007000390032006F00340069007A0030004C00320054004C0035003400590059006D006F00380073002B0039006400530062003900380069007800560031004300590031005900300033003000&wdAccPdf=0&wdEmbedFS=1

// Programming Basics Online Exam - 18 and 19 July 2020

// Подготовка за изпит

// 🔴 03. World Snooker Championship
// Задача 3. Билети за снукър
// https://judge.softuni.org/Contests/Practice/Index/1538#5

/*
function worldSnookerChampionship(input) {
  let stage = input[0];
  let type = input[1];
  let countTicket = Number(input[2]);
  let pic = input[3];

  let totalPrice = 0;
  let isNeedPic = true;

  switch (stage) {
    case "Quarter final":
      switch (type) {
        case "Standard":
          totalPrice = countTicket * 55.5;
          break;
        case "Premium":
          totalPrice = countTicket * 105.2;
          break;
        case "VIP":
          totalPrice = countTicket * 118.9;
          break;
      }
      break;
    case "Semi final":
      switch (type) {
        case "Standard":
          totalPrice = countTicket * 75.88;
          break;
        case "Premium":
          totalPrice = countTicket * 125.22;
          break;
        case "VIP":
          totalPrice = countTicket * 300.4;
          break;
      }
      break;
    case "Final":
      switch (type) {
        case "Standard":
          totalPrice = countTicket * 110.1;
          break;
        case "Premium":
          totalPrice = countTicket * 160.66;
          break;
        case "VIP":
          totalPrice = countTicket * 400;
          break;
      }
      break;
  }
  if (totalPrice > 4000) {
    totalPrice *= 0.75;
    isNeedPic = false;
  } else if (totalPrice > 2500) {
    totalPrice *= 0.9;
  }

  if (pic === "Y" && isNeedPic) {
    totalPrice += 40 * countTicket;
  }
  console.log(totalPrice.toFixed(2));
}
worldSnookerChampionship(["Final", "Premium", "25", "Y"]);
worldSnookerChampionship(["Semi final", "VIP", "9", "Y"]);
worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);
*/

// //
// 🔴 04. Renovation
//  https://judge.softuni.org/Contests/Practice/Index/1745#5

/*
function renovation(input) {
  let index = 0;
  let h = Number(input[index]);
  index++;
  let w = Number(input[index]);
  index++;
  let percentage = Number(input[index]);
  index++;

  let quadraticMForOneWalls = h * w;
  let quadraticMForAllWalls = quadraticMForOneWalls * 4;
  let totalQuadraticM = Math.ceil(
    quadraticMForAllWalls * (1 - percentage / 100)
  );

  let command = input[index];
  index++;

  while (command !== "Tired!") {
    let paint = Number(command);

    totalQuadraticM -= paint;
    if (totalQuadraticM <= 0) {
      break;
    }
    command = input[index];
    index++;
  }
  if (totalQuadraticM > 0) {
    console.log(`${totalQuadraticM} quadratic m left.`);
  } else if (totalQuadraticM < 0) {
    console.log(
      `All walls are painted and you have ${Math.abs(
        totalQuadraticM
      )} l paint left!`
    );
  } else {
    console.log("All walls are painted! Great job, Pesho!");
  }
}
renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
renovation(["2", "3", "25", "6", "7", "8"]);
*/

////////////////////////////
// 🔴 06. Barcode Generator
// https://judge.softuni.org/Contests/Practice/Index/2507#5

/*
function barcodeGenerator(input) {
  let startInterval = String(input[0]);
  let endInterval = String(input[1]);

  let startA = Number(startInterval[0]);
  let endA = Number(endInterval[0]);
  let startB = Number(startInterval[1]);
  let endB = Number(endInterval[1]);
  let startC = Number(startInterval[2]);
  let endC = Number(endInterval[2]);
  let startD = Number(startInterval[3]);
  let endD = Number(endInterval[3]);

  let buff = "";

  for (let a = startA; a <= endA; a++) {
    for (let b = startB; b <= endB; b++) {
      for (let c = startC; c <= endC; c++) {
        for (let d = startD; d <= endD; d++) {
          if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
            buff += `${a}${b}${c}${d} `;
          }
        }
      }
    }
  }
  console.log(buff);
}
barcodeGenerator(["2345", "6789"]);
*/
