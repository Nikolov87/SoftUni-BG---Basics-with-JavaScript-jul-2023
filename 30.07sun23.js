// https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsoftuni%2Ebg%3A443%2Fdownloads%2Fsvn%2Fprogramming%2Dbasics%2D2022%2Ftrunk%2FJS%2F05%2EPB%2DJS%2DWhile%2DLoop%2F05%2E3%2520PB%2DJS%2DWhile%2DLoop%2DExercise%2Edocx%3FaccessKey%3D45004A00650036004F0058003700760035004F004F0042006500650047003600770048002B003300320032005A002F0076006E007000390032006F00340069007A0030004C00320054004C0035003400590059006D006F00380073002B0039006400530062003900380069007800560031004300590031005900300033003000&wdAccPdf=0&wdEmbedFS=1
// https://judge.softuni.org/Contests/Compete/Index/2408#0

// While Loop - Exercise

// function whileDemo() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }

//   let a = 1;

//   while (a <= 5) {
//     console.log(a);
//     a++;
//   }
// }

// 🚨 03. Vacation
/*
function vacation(input) {
  let neededMoney = Number(input[0]);
  let availableMoney = Number(input[1]);
  let days = 0;
  let spendDays = 0;
  let index = 2;
  let command = input[index]; // "spend"

  while (availableMoney >= 0) {
    days++;
    index++;
    if (command === "spend") {
      let moneyToSpend = Number(input[index]);
      availableMoney -= moneyToSpend;

      if (availableMoney < 0) {
        availableMoney = 0;
      }
      spendDays++;
      if (spendDays === 5) {
        console.log("You can't save the money.");
        console.log(`${days}`);
        break;
      }
    } else if (command === "save") {
      spendDays = 0;
      let moneyToSave = Number(input[index]);
      availableMoney += moneyToSave;

      if (availableMoney >= neededMoney) {
        console.log(`You saved the money for ${days} days.`);
        break;
      }
    }
    index++;
    command = input[index];
  }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
*/

// 🚨 04. Walking

function walking(input) {
  let targetSteps = 10000;
  let stepsSum = 0;
  let index = 0;
  let row = input[index];

  while (row !== "Going home") {
    let steps = Number(row);
    stepsSum = stepsSum + steps;

    if (stepsSum >= targetSteps) {
      console.log("Goal reached! Good job!");
      console.log(`${stepsSum - targetSteps} steps over the goal!`);
      break;
    }
    index++;
    row = input[index];
  }

  if (row === "Going home") {
    let stepsToHome = Number(input[index + 1]);

    stepsSum = stepsSum + stepsToHome;

    if (stepsSum >= targetSteps) {
      console.log("Goal reached! Good job!");
      console.log(`${stepsSum - targetSteps} steps over the goal!`);
    } else {
      console.log(`${targetSteps - stepsSum} more steps to reach goal.`);
    }
  }
}

walking(["1000", "1500", "2000", "6500"]);
// walking(["1500", "300", "2500", "3000", "Going home", "200"]);
// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
// walking(["125", "250", "4000", "30", "2678", "4682"]);
