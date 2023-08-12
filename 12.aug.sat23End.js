// https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsoftuni%2Ebg%3A443%2Fdownloads%2Fsvn%2Fprogramming%2Dbasics%2D2022%2Ftrunk%2FExam%2DPreparation%2FExam%2DPreparation%2DJuly%2D2021%2Edocx%3FaccessKey%3D45004A00650036004F0058003700760035004F004F0042006500650047003600770048002B003300320032005A002F0076006E007000390032006F00340069007A0030004C00320054004C0035003400590059006D006F00380073002B0039006400530062003900380069007800560031004300590031005900300033003000&wdAccPdf=0&wdEmbedFS=1

// Programming Basics Online Exam - 18 and 19 July 2020

// Подготовка за изпит

// 🔴 06. Barcode Generator

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
