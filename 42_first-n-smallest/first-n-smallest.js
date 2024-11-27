export const firstNSmallest = (arr, n) => {
  const sortedArray = [...arr].sort((a, b) => a - b);
  const smallestElements = sortedArray.slice(0, n);
  const result = [];

  for (const element of arr) {
    if (smallestElements.indexOf(element) !== -1) {
      result.push(element);
      if (result.length === n) break;
    }
  }
  return result;
};
