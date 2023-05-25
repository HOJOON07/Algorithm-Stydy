let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");

//472
//385

let a = Number(input[0]);
let f = Number(input[1]);
let b = input[1].split("");
let c = Number(b[0]);
let d = Number(b[1]);
let e = Number(b[2]);

console.log(a * e);
console.log(a * d);
console.log(a * c);
console.log(a * f);
