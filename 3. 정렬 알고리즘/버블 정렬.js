const arr = [1, 5, 2, 3, 6, 7];

function bublleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // 여기 등호만 바꿔주면 오름차순, 내림차순 정렬을 할 수 있다.
      if (arr[j] > arr[j + 1]) {
        // temp = arr[0] => temp = 1
        let temp = arr[j];

        // arr[0] = arr[1] => 5
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      // 1
    }
  }
}
