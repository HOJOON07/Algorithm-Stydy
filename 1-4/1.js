let fs = require("fs");
let input = fs.readFileSync("./1-4/예제.txt").toString().split("\n");

let result = Number(input[0]);
if (result <= 59) {
  console.log("F");
} else if (result <= 69) {
  console.log("D");
} else if (result <= 79) {
  console.log("C");
} else if (result <= 89) {
  console.log("B");
} else {
  console.log("A");
}
