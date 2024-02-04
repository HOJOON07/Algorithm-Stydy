// 1. 입력값이 한 개일 때
const input = Number(
  require("fs").readFileSync("./example.txt").toString().trim("")
);

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
// const inputArr = input.trim().split(" ");ㄴ

// 5. 입력값이 첫 번째 줄에는 입력 값의 길이 (n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
// const fs = require("fs");
// const [n, input] = fs.readFileSync("./example.txt").toString().trim().split("\n");

const numArr = [5, 3];
console.log(input);

let kg = input;
let count = 0;

for (let i = 0; i < numArr.length; i++) {
  // 둘다 나머지가 0일때 몫이 더 작은거로 , 하나라도 나머지가 0 이되면 나머지가 0 이되는 애의 몫으로
  if (kg % numArr[i] === 0 && kg % numArr[i + 1]) count = kg / numArr[1];
  // 5부터 나누고 나머지를 3으로 나눈다. 그래서 나눠 떨어지면 몫의 카운트를 리턴
  if (numArr[i] <= kg) {
    kg -= numArr[i];
    count++;
  }
  if (numArr[i] > kg) return -1;
  // 둘다안된다면 -1
}
