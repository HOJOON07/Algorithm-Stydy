// 1. 입력값이 한 개일 때
// const input = require("fs").readFileSync("./example.txt").toString().trim("");

// // 2. 입력이 여러 개일 때 (한 줄에 공백으로 구분)
const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("-");

let answer = 0;
for (let i = 0; i < input.length; i++) {
  let cur = input[i]
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  if (i === 0) answer += cur;
  else {
    answer -= cur;
  }
}

console.log(answer);
