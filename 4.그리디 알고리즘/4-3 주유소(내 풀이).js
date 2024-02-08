// 5. 입력값이 첫 번째 줄에는 입력 값의 길이 (n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");

const cityNum = Number(n);
const citylength = input[0]
  .split(" ")
  .map(Number)
  .splice(0, cityNum - 1);
const price = input[1].split(" ").map(Number);

// console.log(length);
// console.log(price);
// console.log(cityNum);
let answer = 0;
let sum = 0;
for (let i = 0; i < citylength.length; i++) {
  if (i === 0) {
    sum += citylength[0] * price[0];
  } else {
    if (price[i] > price[i - 1]) {
      sum += citylength[i] * price[i - 1];
    } else {
      sum += citylength[i] * price[i];
    }
  }
  answer = sum;
}
console.log(answer);
// 4
// 2 3 1 // 길이
// 5 2 4 1 // 가격

// 1. 10
// 2. 6
// 3. 2

// a b c d
//  2 3 1

// 5 2 4 1 가격

// 5 2 4

// 1. 처음에는 무조건 다음 도시까지 이동해야 된다. 5 * 2
// 2. 그다음에는 5와 2 중에 선택 2 가 더 작기 때문에 2를 선택함 다음 거리까지 즉 3,
// 3. 다음 거리까지 선택을 하면 2와 4중에 선택을 해야되는데 2가 더 작기 때문에 거리만큼 1을 더 넣는게 효율적이다.
