let fs = require("fs");
let input = fs.readFileSync("./1-4/예제.txt").toString().split("\n");

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);

if (a === 0 && b < 45) {
  let minute = 45 - b;
  console.log(23, 60 - minute);
} else if (b < 45) {
  let minute = 45 - b;
  console.log(a - 1, 60 - minute);
} else {
  console.log(a, b - 45);
}
