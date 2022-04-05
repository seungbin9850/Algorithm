function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    const map = (arr1[i] | arr2[i])
      .toString(2)
      .padStart(n, "0")
      .split("")
      .map((e) => (e === "1" ? "#" : " "))
      .join("");

    answer.push(map);
  }

  return answer;
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
