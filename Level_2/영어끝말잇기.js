function solution(n, words) {
  const duplicateList = [];

  for (const [i, word] of words.entries()) {
    if (
      i !== 0 &&
      (duplicateList.includes(word) ||
        words[i - 1].substr(-1) !== word.charAt(0))
    ) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }

    duplicateList.push(word);
  }

  return [0, 0];
}
