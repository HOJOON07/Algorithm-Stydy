// // 2. 입력이 여러 개일 때 (한 줄에 공백으로 구분)
const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [number, result] = input.map(Number);
let flag = false;
let count = 1;
while (number <= result) {
  if (number === result) {
    flag = true;
    break;
  }
  if (result % 2 === 0) result = parseInt(result / 2);
  else if (result % 10 === 1) result = parseInt(result / 10);
  else break;
  count++;
}
if (flag) console.log(count);
else console.log(-1);
