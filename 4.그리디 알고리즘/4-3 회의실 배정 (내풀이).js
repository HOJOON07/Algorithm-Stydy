// 5. 입력값이 첫 번째 줄에는 입력 값의 길이 (n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");
const tc = Number(n);
const arr = input
  .map((num) => num.split(" ").map(Number))
  .sort((a, b) => a[1] - b[1]);
let answer = [];
let checknum = 0;
for (let i = 0; i < arr.length; i++) {
  if (i === 0) {
    answer.push(arr[i]);
    checknum = arr[0][1];
  } else if (checknum <= arr[i][0]) {
    answer.push(arr[i]);
    checknum = arr[i][1];
  }
}

console.log(answer.length);
