// 1. 입력값이 한 개일 때
// const input = require("fs").readFileSync("./example.txt").toString().trim("");

// // 2. 입력이 여러 개일 때 (한 줄에 공백으로 구분)
// const input = require("fs")
//   .readFileSync("./example.txt")
//   .toString()
//   .trim()
//   .split(" ");

// 3. 입력값이 여러 줄일 때
// const input = require("fs").readFileSync("./example.txt").toString().split("\n");

// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n),두 번째 줄에 공백으로 구분된 입력값이 주어질 때
// const fs = require("fs");
// const [n, input] = fs.readFileSync("./example.txt").toString().trim().split("\n");
// const inputArr = input.trim().split(" ");

// 5. 입력값이 첫 번째 줄에는 입력 값의 길이 (n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(input);
const testCase = Number(n);
let lineNumber = input[0];

// 반복 횟수는 두번만 해줄 꺼임

// a 정렬과
// b 정렬
// 2
// 5

// 3 2
// 1 4
// 4 1
// 2 3
// 5 5

// 7

// 3 6 -> 1 4 x
// 7 3 -> 4 2 x
// 4 2 -> o
// 1 4 -> o
// 5 7 -> 4 2 -> x
// 2 5 -> 1 4 -> x
// 6 1 -> o

// 7 3 x
// 6 1 o
// 5 7 x
// 4 2 o
// 3 6 x
// 2 5 x
// 1 4 o
