// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n),두 번째 줄에 공백으로 구분된 입력값이 주어질 때
const fs = require("fs");
const [a, b, ...input] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");

const box = a.split(" ").map(Number);
const n = Number(b);
const cube = input.map((el) => el.split(" ").map(Number));
