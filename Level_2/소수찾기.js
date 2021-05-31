function solution(numbers) {
  const numberArr = numbers.split("");
  const permutation = [];
  const answer = new Set();
  for (let i = 1; i <= numberArr.length; i++) {
    let arr = makePermutation(numberArr, i);
    for (let j = 0; j < arr.length; j++) {
      permutation.push(arr[j]);
    }
  }
  for (let i = 0; i < permutation.length; i++) {
    let number = Number(permutation[i].join(""));
    if (isPrime(number)) answer.add(number);
  }
  return answer.size;
}

function makePermutation(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((i) => [i]);

  arr.forEach((fixed, index, array) => {
    const rest = [...array.slice(0, index), ...array.slice(index + 1)];
    const permutations = makePermutation(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(solution("011"));
