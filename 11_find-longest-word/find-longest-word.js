export const findLongestWord = (str) =>
  str.split(' ').reduce((maxLength, currentWord) => Math.max(maxLength, currentWord.length), 0);
