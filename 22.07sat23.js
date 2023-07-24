// https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsoftuni%2Ebg%3A443%2Fdownloads%2Fsvn%2Fprogramming%2Dbasics%2D2022%2Ftrunk%2FJS%2F04%2EPB%2DJS%2DFor%2DLoop%2F04%2E2%2520PB%2DJS%2DFor%2DLoop%2DLab%2Edocx%3FaccessKey%3D45004A00650036004F0058003700760035004F004F0042006500650047003600770048002B003300320032005A002F0076006E007000390032006F00340069007A0030004C00320054004C0035003400590059006D006F00380073002B0039006400530062003900380069007800560031004300590031005900300033003000&wdAccPdf=0&wdEmbedFS=1

// For Loop - Lab
/*
//example 
function solve() {
  for (let i = 1; i <= 12; i = i + 1) {
    console.log(i);
  }
}
solve();
*/

// 💥 01. Numbers from 1 to 100

// 💥 02. Numbers N...1
/*
function numbersNTo1(input) {
  let n = Number(input[0]);

  for (let i = n; i >= 1; i--) {
    //
    console.log(i);
  }
}

numbersNTo1(["10"]);
*/

// 💥 03. Numbers 1...N with Step 3
/*
function numbers1NWithStep3(input) {
  let n = Number(input[0]);

  for (let i = 1; i <= n; i += 3) {
    //i = i + 3 or i += 3
    console.log(i);
  }
}

numbers1NWithStep3(["10"]);
// numbers1NWithStep3(["7"]);
// numbers1NWithStep3(["15"]);
*/

// 💥 04. Even Powers of 2 // четни степени на 2
/*
function evenPowersOf2(input) {
  let n = Number(input[0]);

  //   for (let i = 0; i <= n; i += 2) {
  //     let res = Math.pow(2, i);
  //     console.log(res);
  //   }

  // second solution

  let num = 1;
  for (let i = 0; i <= n; i += 2) {
    console.log(num);
    num = num * 2 * 2;
  }
}
evenPowersOf2(["7"]);
evenPowersOf2(["4"]);
evenPowersOf2(["5"]);
evenPowersOf2(["6"]);
evenPowersOf2(["7"]);
*/

// 💥 06. Vowels Sum

function vowelsSum(input) {
  let text = input[0];
  let sum = 0;

  for (let i = 0; i < text.length; i++) {
    let ch = text[i];
    switch (ch) {
      case "a":
        sum += 1;
        break;
      case "e":
        sum += 2;
        break;
      case "i":
        sum += 3;
        break;
      case "o":
        sum += 4;
        break;
      case "u":
        sum += 5;
        break;
    }
  }
  console.log(sum);
}
vowelsSum(["bamboo"]);
