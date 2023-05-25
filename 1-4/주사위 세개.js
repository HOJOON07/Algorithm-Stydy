let fs = require("fs");
let input = fs.readFileSync("./1-4/예제.txt").toString().split("\n");

let arr = input[0].split(" ").map((el) => Number(el));
let a = arr[0];
let b = arr[1];
let c = arr[2];

if (a == b && b == c) console.log(10000 + a * 1000);
else if (a == b) console.log(1000 + a * 100);
else if (a == c) console.log(1000 + a * 100);
else if (b == c) console.log(1000 + b * 100);
else console.log(Math.max(a, b, c) * 100);
