export const reverseStringInRange = (originalString, rangeIndexes) => {
  const [startIndex, endIndex] = rangeIndexes;
  const substrReverse = originalString.substring(startIndex, endIndex + 1);
  const reversedSubstring = substrReverse.split('').reverse().join('');

  return originalString.substring(0, startIndex) + reversedSubstring + originalString.substring(endIndex + 1);
};
