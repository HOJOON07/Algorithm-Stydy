// 1. 입력값이 한 개일 때
// const input = require("fs").readFileSync("./example.txt").toString().trim("");

// // 2. 입력이 여러 개일 때 (한 줄에 공백으로 구분)
// const input = require("fs")
//   .readFileSync("./example.txt")
//   .toString()
//   .trim()
//   .split(" ");

// 3. 입력값이 여러 줄일 때
const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .split("\n");
// .map((el) => Number(el));

// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n),두 번째 줄에 공백으로 구분된 입력값이 주어질 대
// const fs = require("fs");
// const [n, input] = fs.readFileSync("./example.txt").toString().trim().split("\n");
// const inputArr = input.trim().split(" ");

// 5. 입력값이 첫 번째 줄에는 입력 값의 길이 (n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
// const fs = require("fs");
// const [n, input] = fs.readFileSync("./example.txt").toString().trim().split("\n");

// https://www.acmicpc.net/problem/4344
// console.log(input);
let caseNumbers = Number(input[0]);
for (let i = 1; i <= caseNumbers; i++) {
  let data = input[i].split(" ").map((el) => Number(el));
  let n = data[0];
  let summary = 0;
  for (let j = 1; j <= n; j++) {
    summary += data[j];
  }
  let average = summary / n;
  let cnt = 0;

  for (let j = 1; j <= n; j++) {
    if (data[j] > average) cnt += 1;
  }
  console.log(`${((cnt / n) * 100).toFixed(3)}%`);
}
