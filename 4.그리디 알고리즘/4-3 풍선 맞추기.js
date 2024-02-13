const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let data = input[1].split(" ").map(Number);
  let result = 0;
  // 1,000,000
  let arrow = new Array(1000001).fill(0);

  for (let x of data) {
    // 2
    // 1
    // 5
    // 4
    // 3

    if (arrow[x] > 0) {
      arrow[x] -= 1;
      arrow[x - 1] += 1;
    } else if (arrow[x] <= 0) {
      arrow[x - 1] += 1;
      result += 1;

      // result -> 1
      // result -> 2
    }
  }
  console.log(result);
  process.exit();
});

// data 2 -> 인데스 1인 곳에 1로 바꿔줌 리절트 1 더해서 업데이트
// data 1 -> 인덱스가 1인 곳이 이미 1이므로 1을 빼주고 0인곳을 1로 바꺼줌
// data 5 -> 인덱스가 4인 곳은 0 이므로 1로 바꿔주고 리절트도 1 더해줌
// data 4 -> 인덱스가 4인 곳이 1이므로 3을 1로 바꿔줌
// data 3 -> 인덱스가 3인 곳이 1이므로 2를 1로 바꿔줌 for 문 끝남 리절트는 2임.
