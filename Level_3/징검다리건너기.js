function counting(mid, array, k) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < mid) count++;
    else count = 0;
    if (count >= k) return true;
  }
  return false;
}

function solution(stones, k) {
  let max = 200000000;
  let min = 1;
  while (min < max - 1) {
    let mid = Math.floor((max + min) / 2);
    if (!counting(mid, stones, k)) min = mid;
    else max = mid;
  }
  return min;
}
