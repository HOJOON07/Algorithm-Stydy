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
// const fs = require("fs");
// const input = fs.readFileSync("./example.txt").toString().trim().split("\n");
// .map((el) => el.split(" ").map(Number));

// console.log(input);

// let testCase = Number(input[0]); // 2
// let line = 1;

// for (let tc = 0; tc < testCase; tc++) {
//   n = Number(input[line]); // 5
//   let arr = [];
//   // i = 2부터 시작
//   // i<= 6

//   for (let i = line + 1; i <= line + n; i++) {
//     let data = input[i].split(" ").map(Number);
//     arr.push(data);
//   }
// }

let fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().split("\n");
console.log(input);
let testCase = Number(input[0]); // 2
let line = 1;

for (let tc = 0; tc < testCase; tc++) {
  n = Number(input[line]); // [2] 5
  let arr = [];
  // i 는 2부터 돌고 6까지 돈다.
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(" ").map(Number);
    arr.push(data);
  }
  arr.sort((x, y) => x[0] - y[0]); // x 순위를 기준으로 오름차순 정렬 let count = 0;
  let minValue = 100001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      // y 순위 값이 가장 작다면 카운트 minValue = y;
      count += 1;
    }
  }
  console.log(count);
  // 다 돌면, 즉, y정렬을 끝내면 n만큼 line 값을 업데이트 해주고 전체적인 반복문은 testCase만큼 돌게 되어 있다.
  line += n + 1;
}
