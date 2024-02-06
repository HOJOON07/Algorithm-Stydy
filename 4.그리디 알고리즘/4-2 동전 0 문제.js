const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");

let money = n.split(" ").map(Number);
let count = 0;

for (let i = input.length - 1; i >= 0; i--) {
  if (input[i] <= money[1]) {
    count += parseInt(money[1] / input[i]);

    money[1] = money[1] % input[i];
  }
}

console.log(count);
