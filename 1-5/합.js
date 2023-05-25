let fs = require("fs");
let input = fs.readFileSync("./1-5/예제.txt").toString().split("\n");

let a = Number(input);

// let result = 0;
// for (let i = 0; i < a + 1; i++) {
//   result += i;
// }
// console.log(result);
console.log((a * (a + 1)) / 2);
