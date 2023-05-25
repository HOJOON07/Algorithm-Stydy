let fs = require("fs");
let input = fs.readFileSync("./1-4/예제.txt").toString().split("\n");

//입력 A시 B분
//걸리는 시간 C분

// 17시40분 + 80분 = 1060분 + 80분 = 1140분
// 1.1140을 1440으로 나눈 나머지를 취하기
// 2.이때, 60으로 나눈 몫을 시(hour)로 취하기
// 3.이때, 60으로 나눈 나머지를 분(minute)으로 취하기

let [a, b] = input[0].split(" ").map(Number);
let c = Number[input[1]];

let totalMinute = a * 60 + b + c; //전체 분의 형식으로 구하기
totalMinute %= 1440;

let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + " " + minute);
