let fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().split("\n");

let n = Number(input[0]); // 회의의 개수
let arr = []; // 각 회의에 대한 (시작 시점, 종료 시점) 입력받기
for (let i = 1; i <= n; i++) arr.push(input[i].split(" ").map(Number));

arr.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let cnt = 1;
let cur = 0;
for (let i = 1; i < n; i++) {
  if (arr[cur][1] <= arr[i][0]) {
    // 현재 회의가 끝난 이후에 회의가 시작되는 경우 카운트
    cur = i;
    cnt += 1;
  }
}
console.log(cnt);
console.log("커밋 죄송합니다..");
