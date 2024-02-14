// 5. 입력값이 첫 번째 줄에는 입력 값의 길이 (n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 1. 일단 파보나치 수열을 가진 배열을 만들자 -> 마지막 수가 십억인.
// 2. input에 들어오는 값들을 파보나치 수열에서 찾고 반대로 돌면 될듯.
// 3.

let pibo = [];
pibo.push(0);
pibo.push(1);
// 피보나치 수열 만들기
while (pibo[pibo.length - 1] < 1e9)
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);

for (let tc = 0; tc < n; tc++) {
  let number = input[tc];
  let result = [];
  let i = pibo.length - 1;
  while (number > 0) {
    if (number >= pibo[i]) {
      number -= pibo[i];
      result.push(pibo[i]);
    }
    i--;
  }
  let answer = "";
  for (let i = result.length - 1; i >= 0; i--) {
    answer += result[i] + " ";
  }
  console.log(answer);
}
