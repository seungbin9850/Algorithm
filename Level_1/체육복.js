function solution(n, lost, reserve) {
  let arr = new Array(n).fill(true);
  for (let i = 0; i < lost.length; i++) {
    arr[lost[i] - 1] = false;
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === false && reserve.indexOf(i + 1) != -1) {
      arr[i] = true;
      reserve.splice(reserve.indexOf(i + 1), 1);
    }
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === false &&
      (reserve.indexOf(i) != -1 || reserve.indexOf(i + 2) != -1)
    ) {
      arr[i] = true;
      if (reserve.indexOf(i) != -1) {
        reserve.splice(reserve.indexOf(i), 1);
      } else {
        reserve.splice(reserve.indexOf(i + 2), 1);
      }
    }
  }
  return arr.filter((e) => e).length;
}

console.log(solution(5, [2, 3], [1, 2]));
