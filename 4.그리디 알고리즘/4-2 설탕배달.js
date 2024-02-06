// 1. 입력값이 한 개일 때
const input = Number(
  require("fs").readFileSync("./example.txt").toString().trim("")
);

// 3과 5의 배수

// 15 = 3

// 18 = 4

// 9같은 경우에는 3으로만 나눠떨어짐 -> 3

// 23 = 5 // 3을 6번하고 5를 한 번 하면 7

// 큰 수 5부터 나누는걸 찾고 3을 해줘야 최적의 해가 된다.
// 아니면 5를 하고 3을 했을때 0이 되거나 5또는 3으로 나누거나

// 1. 5로 나누고 나머지를 3으로 나눠서 0이되는 경우
// 2. 5로 나눠 떨어지는 경우
// 3. 3으로만 나눠 떨어지는 경우
// 4. 셋다 안되면 -1 이다
let flag = false;
let number = input;
let answer = 0;
// 0까지 반복문을 돌것이다.
while (number >= 0) {
  // number가 5로 나누어 떨어지거나 0이되면 답을 5로 나눈 몫을 더해준다.
  if (number % 5 === 0 || number === 0) {
    answer += parseInt(number / 5);
    console.log(answer);
    flag = true;
    break;
  }
  // 에초에 number에서 3을 하나 씩 빼준다면 5의 몫만을 구해줄수 있을 것이다.
  // 그리고 그럴때마다 answer에다가 1씩 카운트를 올려줌 결국은 3의 몫만큼 더해주는거랑 같다.
  number -= 3;
  answer += 1;
}
if (!flag) {
  // 둘 다 안된다면 flag값을 설정해서 -1을 리턴하도록
  console.log(-1);
}
