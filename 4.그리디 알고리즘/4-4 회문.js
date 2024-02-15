// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n),두 번째 줄에 공백으로 구분된 입력값이 주어질 때
const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().trim().split("\n");

const testCase = Number(input[0]);

function palindrome(x) {
  return x == x.split("").reverse().join("");
}

for (let tc = 1; tc <= testCase; tc++) {
  let data = input[tc];
  if (palindrome(data)) console.log(0);
  else {
    let found = false;
    let n = data.length;
    for (let i = 0; i < parseInt(n / 2); i++) {
      if (data[i] != data[n - i - 1]) {
        if (palindrome(data.slice(0, i) + data.slice(i + 1, n))) found = true;
        if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n)))
          found = true;
        break;
      }
    }
    if (found) console.log(1);
    else console.log(2);
  }
}

// 틀린이유
// j가 0 일때는 첫번째 요소만을 제거하기 때문에 j를 제거하면 나머지 문자열에 대해서 팰린드롬을 검사할 수 있지만
// j가 1이상일때는 j 이전 문자를 제외한 그 뒷부분 문자열에 대해서 팰린드로 ㅁ검사를 하기 때문에 올바른 로직이 아니다. j하나의 요소만을 추출해야하기 때문,
// 즉 j 이전 문자열도 합쳐줘야 한다.

// input[i]
// .slice(j + 1, input[i].length)
// .split("")
// .reverse()
// .join("") ===
// input[i]
// .slice(j + 1, input[i].length)
// .split("")
// .join("")

// const str = "hojoon";
// const test = str.substring(1, 0);
// console.log(str);
// console.log(test);
