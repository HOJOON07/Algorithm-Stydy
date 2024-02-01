// 1. 입력값이 한 개일 때
const input = require("fs").readFileSync("./example.txt").toString().trim("");

// // 2. 입력이 여러 개일 때 (한 줄에 공백으로 구분)
// const input = require("fs")
//   .readFileSync("./example.txt")
//   .toString()
//   .trim()
//   .split(" ");

// 3. 입력값이 여러 줄일 때
// const input = require("fs").readFileSync("./example.txt").toString().split("\n");

// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n),두 번째 줄에 공백으로 구분된 입력값이 주어질 대
// const fs = require("fs");
// const [n, input] = fs.readFileSync("./example.txt").toString().trim().split("\n");
// const inputArr = input.trim().split(" ");

// 5. 입력값이 첫 번째 줄에는 입력 값의 길이 (n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
// const fs = require("fs");
// const [n, input] = fs.readFileSync("./example.txt").toString().trim().split("\n");

// const data = [...input]
//   .map(Number)
//   .sort((a, b) => b - a)
//   .join("");

// console.log(data);

let n = input;

let cnt = Array(10).fill(0);
console.log(cnt);
for (let x of n) {
  cnt[Number(x)]++;
}

let answer = "";
for (let i = 9; i >= 0; i--) {
  for (let j = 0; j < cnt[i]; j++) answer += i + "";
}
