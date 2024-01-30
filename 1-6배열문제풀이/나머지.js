// 1. 입력값이 한 개일 때
// const input = require("fs").readFileSync("example.txt").toString().trim("");

// // 2. 입력이 여러 개일 때 (한 줄에 공백으로 구분)
// const input = require("fs")
//   .readFileSync("example.txt")
//   .toString()
//   .trim()
//   .split(" ");

// 3. 입력값이 여러 줄일 때
const input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .split("\n")
  .map((el) => Number(el));
// .map((el) => parseInt(el));

// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n),두 번째 줄에 공백으로 구분된 입력값이 주어질 대
// const fs = require("fs");
// const [n, input] = fs.readFileSync("example.txt").toString().trim().split("\n");
// const inputArr = input.trim().split(" ");

// 5. 입력값이 첫 번째 줄에는 입력 값의 길이 (n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
// const fs = require("fs");
// const [n, input] = fs.readFileSync("example.txt").toString().trim().split("\n");
// let maxIndex = 0;
// let maxValue = 0;

//https://www.acmicpc.net/problem/3052

let result = new Set();

for (let i = 0; i < 10; i++) {
  result.add(input[i] % 42);
}

console.log(result.size);
